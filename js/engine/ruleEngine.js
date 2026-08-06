// Rules and validation engine for Keysight instrument configuration

export class RuleEngine {
  /**
   * Validate selected options against instrument rules
   * @param {Object} instrument - Current instrument model object
   * @param {Array} selectedOptionIds - Array of option IDs selected
   * @param {Object} selectedLicenses - Map of optionId -> { licenseType, licenseTerm }
   * @returns {Object} { alerts: Array, autoFixActions: Array, isComplete: Boolean }
   */
  static validate(instrument, selectedOptionIds, selectedLicenses = {}) {
    const alerts = [];
    const autoFixActions = [];
    const selectedSet = new Set(selectedOptionIds);

    // Helper: Find option object by ID
    const findOption = (id) => {
      for (const step of instrument.steps) {
        const found = step.options.find(opt => opt.id === id);
        if (found) return found;
      }
      return null;
    };

    // 1. Validate Required Steps (Step 1 is required: Must choose 1 frequency range)
    const step1 = instrument.steps.find(s => s.stepNumber === 1);
    if (step1) {
      const hasStep1Selected = step1.options.some(opt => selectedSet.has(opt.id));
      if (!hasStep1Selected) {
        alerts.push({
          type: "danger",
          code: "REQ_FREQ",
          title: "必选项目缺失：最高频率范围",
          message: "Step 1 频率范围为系统运行的必要主选项，请选择其中一个频率范围（如 N9010B-503 3.6GHz 或 N9010B-544 44GHz）。",
          targetStepId: "step1"
        });
      }
    }

    // Identify current selected frequency option
    let selectedFreqOption = null;
    if (step1) {
      selectedFreqOption = step1.options.find(opt => selectedSet.has(opt.id));
    }

    // 2. Validate Step 2: Preamplifier Frequency Compatibility
    const preampOption = findOption(selectedOptionIds.find(id => id.startsWith("N9010B-P")));
    if (preampOption && selectedFreqOption) {
      const preCode = preampOption.code; // e.g. P07
      const freqCode = selectedFreqOption.code; // e.g. 503
      
      if (preampOption.compatibleFreqs && !preampOption.compatibleFreqs.includes(freqCode)) {
        alerts.push({
          type: "warning",
          code: "INCOMPATIBLE_PREAMP",
          title: `预放大器兼容性问题：${preampOption.code}`,
          message: `前置放大器 ${preampOption.code} (最高 ${preampOption.freqLimitGHz} GHz) 无法与频率范围选项 Option ${freqCode} (最高 ${selectedFreqOption.freqMaxGHz} GHz) 匹配。请提升频段选项或选择匹配的预放大器。`,
          targetOptionId: preampOption.id,
          fixAction: {
            text: `更改频率为 Option ${preampOption.compatibleFreqs[0]}`,
            actionType: "change_freq",
            targetOptionId: `N9010B-${preampOption.compatibleFreqs[0]}`
          }
        });
      }
    }

    // 3. Validate Step 5: Analysis Bandwidth B40 dependency on MPB for > 3.6 GHz
    if (selectedSet.has("N9010B-B40")) {
      const isFreqAbove3_6 = selectedFreqOption && selectedFreqOption.freqMaxGHz > 3.6;
      const hasMPB = selectedSet.has("N9010B-MPB");

      if (isFreqAbove3_6 && !hasMPB) {
        alerts.push({
          type: "warning",
          code: "MISSING_MPB",
          title: "分析带宽选件条件提示：需选配 Option MPB",
          message: "当分析带宽选择 40 MHz (Option B40) 且最高频率大于 3.6 GHz 时，测量宽带信号必须添加 Option MPB (微波预选器旁路)。",
          targetOptionId: "N9010B-B40",
          fixAction: {
            text: "一键自动添加 Option MPB",
            actionType: "add_option",
            optionId: "N9010B-MPB"
          }
        });
      }
    }

    // 4. Validate General Prerequisites (e.g. 89601B7RC requires 89601200C; M1971W requires EXM)
    selectedOptionIds.forEach(id => {
      const opt = findOption(id);
      if (opt && opt.requires) {
        opt.requires.forEach(reqId => {
          if (!selectedSet.has(reqId)) {
            const reqOpt = findOption(reqId);
            const reqName = reqOpt ? `${reqOpt.code} (${reqOpt.name})` : reqId;
            alerts.push({
              type: "danger",
              code: "MISSING_PREREQ",
              title: `依赖选件缺失：${opt.code} 依赖 ${reqOpt ? reqOpt.code : reqId}`,
              message: `选项 ${opt.code} 要求系统包含前置选件 ${reqName}。`,
              targetOptionId: opt.id,
              fixAction: {
                text: `自动补全选件 ${reqOpt ? reqOpt.code : reqId}`,
                actionType: "add_option",
                optionId: reqId
              }
            });
          }
        });
      }
    });

    // 5. Validate External Mixers (M1971W / 11970A requires EXM and freq 532 or 544)
    if (selectedSet.has("M1971W")) {
      if (selectedFreqOption && selectedFreqOption.freqMaxGHz < 32.0) {
        alerts.push({
          type: "warning",
          code: "MIXER_FREQ_LIMIT",
          title: "毫米波混频器频率警告：M1971W (75-110 GHz)",
          message: "外部波导混频器 M1971W 需要主机包含 Option 532 (32GHz) 或 544 (44GHz) 毫米波硬件支持。",
          fixAction: {
            text: "调整频率至 Option 532",
            actionType: "change_freq",
            targetOptionId: "N9010B-532"
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
