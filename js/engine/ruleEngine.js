// Rules and validation engine for Keysight instrument configuration

export class RuleEngine {
  /**
   * Validate selected options against instrument rules
   * @param {Object} instrument - Current instrument model object
   * @param {Array} selectedOptionIds - Array of option IDs selected
   * @param {Object} selectedLicenses - Map of optionId -> { licenseType, licenseTerm }
   * @returns {Object} { alerts: Array, isComplete: Boolean, selectedFreqOption: Object }
   */
  static validate(instrument, selectedOptionIds, selectedLicenses = {}) {
    const alerts = [];
    const selectedSet = new Set(selectedOptionIds);

    // Helper: Find option object and its parent step by ID
    const findOptionWithStep = (id) => {
      for (const step of instrument.steps) {
        const found = step.options.find(opt => opt.id === id);
        if (found) return { option: found, step };
      }
      return null;
    };

    const findOption = (id) => {
      const res = findOptionWithStep(id);
      return res ? res.option : null;
    };

    // 1. Validate Required Steps (Step 1 is required: Must choose 1 frequency range)
    const step1 = instrument.steps.find(s => s.stepNumber === 1);
    let selectedFreqOption = null;
    if (step1) {
      selectedFreqOption = step1.options.find(opt => selectedSet.has(opt.id));
      if (!selectedFreqOption) {
        alerts.push({
          type: "danger",
          code: "REQ_FREQ",
          title: "必选项目缺失：最高频率范围",
          englishTitle: "Required Item Missing: Frequency Range",
          message: `Step 1 频率范围为 ${instrument.name} 系统运行的必要主选项，请选择其中一个频率范围。`,
          englishMessage: `Step 1 Frequency Range is mandatory for ${instrument.name}. Please select a frequency range.`,
          targetStepId: step1.id
        });
      }
    }

    // 2. Validate Step 2: Preamplifier Frequency Compatibility
    let preampOption = null;
    let preampStep = null;
    for (const id of selectedOptionIds) {
      const info = findOptionWithStep(id);
      if (info && (info.option.category === "Preamplifier" || (info.step.stepNumber === 2 && info.option.code.startsWith("P")))) {
        preampOption = info.option;
        preampStep = info.step;
        break;
      }
    }

    if (preampOption && selectedFreqOption) {
      const freqCode = selectedFreqOption.code.replace(/^[A-Z0-9]+-/, '');
      if (preampOption.compatibleFreqs && 
          !preampOption.compatibleFreqs.includes(freqCode) && 
          !preampOption.compatibleFreqs.includes(selectedFreqOption.code)) {
        
        const targetFreqCode = preampOption.compatibleFreqs[0];
        const targetFreqOpt = step1 ? step1.options.find(o => o.code.endsWith(targetFreqCode) || o.code === targetFreqCode) : null;
        const fixOptId = targetFreqOpt ? targetFreqOpt.id : `${instrument.id}-${targetFreqCode}`;

        alerts.push({
          type: "warning",
          code: "INCOMPATIBLE_PREAMP",
          title: `预放大器兼容性问题：${preampOption.code}`,
          englishTitle: `Preamplifier Compatibility Warning: ${preampOption.code}`,
          message: `前置放大器 ${preampOption.code} 无法与频率范围选项 ${selectedFreqOption.code} (最高 ${selectedFreqOption.freqMaxGHz || ''} GHz) 匹配。请提升频段选项或选择匹配的预放大器。`,
          englishMessage: `Preamplifier ${preampOption.code} is incompatible with Option ${selectedFreqOption.code}. Please upgrade frequency range or choose matching preamp.`,
          targetOptionId: preampOption.id,
          targetStepId: preampStep ? preampStep.id : "step2",
          fixAction: {
            text: `更改频率为 Option ${targetFreqCode}`,
            englishText: `Change frequency to Option ${targetFreqCode}`,
            actionType: "change_freq",
            targetOptionId: fixOptId
          }
        });
      }
    }

    // 3. Validate Step 5: Analysis Bandwidth B40 dependency on MPB for > 3.6 GHz
    const b40Info = selectedOptionIds.map(id => findOptionWithStep(id)).find(info => info && (info.option.code.endsWith("-B40") || info.option.code === "B40"));
    if (b40Info) {
      const isFreqAbove3_6 = selectedFreqOption && selectedFreqOption.freqMaxGHz > 3.6;
      const mpbOpt = instrument.steps.flatMap(s => s.options).find(o => o.code.endsWith("-MPB") || o.code === "MPB");
      const hasMPB = mpbOpt && selectedSet.has(mpbOpt.id);

      if (isFreqAbove3_6 && mpbOpt && !hasMPB) {
        alerts.push({
          type: "warning",
          code: "MISSING_MPB",
          title: "分析带宽选件条件提示：需选配 Option MPB",
          englishTitle: "Analysis Bandwidth Requirement: Option MPB",
          message: "当分析带宽选择 40 MHz (Option B40) 且最高频率大于 3.6 GHz 时，测量宽带信号必须添加 Option MPB (微波预选器旁路)。",
          englishMessage: "When 40 MHz bandwidth (Option B40) is selected with max freq > 3.6 GHz, Option MPB is required.",
          targetOptionId: b40Info.option.id,
          targetStepId: b40Info.step.id,
          fixAction: {
            text: `一键自动添加 ${mpbOpt.code}`,
            englishText: `Add Option ${mpbOpt.code}`,
            actionType: "add_option",
            optionId: mpbOpt.id
          }
        });
      }
    }

    // 4. Validate General Prerequisites (e.g. 89601B7RC requires 89601200C; M1971W requires EXM)
    selectedOptionIds.forEach(id => {
      const info = findOptionWithStep(id);
      if (info && info.option.requires) {
        info.option.requires.forEach(reqId => {
          if (!selectedSet.has(reqId)) {
            const reqInfo = findOptionWithStep(reqId);
            const reqName = reqInfo ? `${reqInfo.option.code} (${reqInfo.option.name})` : reqId;
            const reqStepId = reqInfo ? reqInfo.step.id : info.step.id;
            
            alerts.push({
              type: "danger",
              code: "MISSING_PREREQ",
              title: `依赖选件缺失：${info.option.code} 依赖 ${reqInfo ? reqInfo.option.code : reqId}`,
              englishTitle: `Prerequisite Missing: ${info.option.code} requires ${reqInfo ? reqInfo.option.code : reqId}`,
              message: `选项 ${info.option.code} 要求系统包含前置选件 ${reqName}。`,
              englishMessage: `Option ${info.option.code} requires prerequisite option ${reqName}.`,
              targetOptionId: info.option.id,
              targetStepId: reqStepId,
              fixAction: {
                text: `自动补全选件 ${reqInfo ? reqInfo.option.code : reqId}`,
                englishText: `Add required option ${reqInfo ? reqInfo.option.code : reqId}`,
                actionType: "add_option",
                optionId: reqId
              }
            });
          }
        });
      }
    });

    // 5. Validate External Mixers (e.g. M1971W requires 32GHz+ hardware)
    const m1971wInfo = selectedOptionIds.map(id => findOptionWithStep(id)).find(info => info && info.option.code === "M1971W");
    if (m1971wInfo) {
      if (selectedFreqOption && selectedFreqOption.freqMaxGHz < 32.0) {
        const target532Opt = step1 ? step1.options.find(o => o.code.endsWith("532")) : null;
        const fixOptId = target532Opt ? target532Opt.id : `${instrument.id}-532`;

        alerts.push({
          type: "warning",
          code: "MIXER_FREQ_LIMIT",
          title: "毫米波混频器频率警告：M1971W (75-110 GHz)",
          englishTitle: "Mixer Frequency Limit Warning: M1971W",
          message: "外部波导混频器 M1971W 需要主机包含 Option 532 (32GHz) 或 544 (44GHz) 毫米波硬件支持。",
          englishMessage: "External waveguide mixer M1971W requires Option 532 (32GHz) or 544 (44GHz).",
          targetStepId: step1 ? step1.id : "step1",
          fixAction: {
            text: "调整频率至 Option 532",
            englishText: "Adjust frequency to Option 532",
            actionType: "change_freq",
            targetOptionId: fixOptId
          }
        });
      }
    }

    // Determine completion status
    const isComplete = alerts.filter(a => a.type === "danger").length === 0 && selectedFreqOption !== null;

    return {
      alerts,
      isComplete,
      selectedFreqOption
    };
  }

  /**
   * Get list of standard items automatically included in base model
   */
  static getStandardItems(instrument) {
    const standardItems = [];
    instrument.steps.forEach(step => {
      step.options.forEach(opt => {
        if (opt.isStandard) {
          standardItems.push(opt);
        }
      });
    });
    return standardItems;
  }
}
