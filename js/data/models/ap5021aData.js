// Keysight AP5021A G3 Analog Signal Generator Dataset
export const AP5021A_DATA = {
  "id": "AP5021A",
  "name": "AP5021A G3 Analog Signal Generator",
  "subtitle": "9 kHz to 12.75 / 20 / 40 / 54 GHz Compact High-Purity Analog Signal Generator",
  "family": "G3 Series Analog Signal Generators",
  "docNumber": "AP5021A-CONFIG / Keysight",
  "description": "The Keysight AP5021A is a compact next-generation analog signal generator covering 9 kHz up to 54 GHz, delivering ultra-low close-in phase noise, exceptional frequency stability, fast switching, mechanical step attenuators, pulse/AM/FM/PM modulation, and DC/AC power interfaces.",
  "baseSpecs": {
    "display": "Compact benchtop / ATE modular form factor with remote UI",
    "frequencyRange": "9 kHz to 12.75 / 20 / 40 / 54 GHz",
    "outputPower": "Calibrated output power with mechanical step attenuator options",
    "phaseNoise": "Ultra-low close-in phase noise (Option LN1/LN2)",
    "modulation": "AM, FM, Phase Modulation, Pulse Modulation",
    "connectivity": "USB, LAN, optional GPIB (Micro-D 25-pin) and 24V DC interface"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "频率覆盖 9 kHz 至 12.75 GHz、20 GHz、40 GHz 或 54 GHz (出厂必选其一)",
      "englishSubtitle": "Required option. Select frequency range: 12.75, 20, 40, or 54 GHz.",
      "type": "single",
      "options": [
        {
          "id": "AP5021A-512",
          "code": "AP5021A-512",
          "name": "频率范围 9 kHz 至 12.75 GHz (N 型阴头接口)",
          "englishName": "Frequency range, 9 kHz to 12.75 GHz",
          "category": "Frequency",
          "priceEstimate": "$14,500",
          "freqMaxGHz": 12.75,
          "description": "CW 频率范围 9 kHz 至 12.75 GHz，配 N-type (f) 射频输出接头。",
          "englishDescription": "Frequency range, 9 kHz to 12.75 GHz. N-type (f) output connector."
        },
        {
          "id": "AP5021A-520",
          "code": "AP5021A-520",
          "name": "频率范围 9 kHz 至 20 GHz (2.92 mm 阳头接口)",
          "englishName": "Frequency range, 9 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$22,000",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 9 kHz 至 20 GHz，配 2.92 mm (m) 射频输出接头。",
          "englishDescription": "Frequency range, 9 kHz to 20 GHz. 2.92 mm (m) RF output connector."
        },
        {
          "id": "AP5021A-540",
          "code": "AP5021A-540",
          "name": "频率范围 9 kHz 至 40 GHz (2.92 mm 阳头接口)",
          "englishName": "Frequency range, 9 kHz to 40 GHz",
          "category": "Frequency",
          "priceEstimate": "$34,000",
          "freqMaxGHz": 40.0,
          "description": "CW 频率范围 9 kHz 至 40 GHz，配 2.92 mm (m) 射频输出接头。",
          "englishDescription": "Frequency range, 9 kHz to 40 GHz. 2.92 mm (m) RF output connector."
        },
        {
          "id": "AP5021A-554",
          "code": "AP5021A-554",
          "name": "频率范围 9 kHz 至 54 GHz (1.85 mm 阳头接口)",
          "englishName": "Frequency range, 9 kHz to 54 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,000",
          "freqMaxGHz": 54.0,
          "description": "CW 频率范围 9 kHz 至 54 GHz 毫米波频段，配 1.85 mm (m) 射频输出接头。",
          "englishDescription": "Frequency range, 9 kHz to 54 GHz. 1.85 mm (m) RF output connector."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择近端相位噪声与频率稳定度等级 (Select Phase Noise Performance - Required Option)",
      "englishTitle": "Select Close-in Phase Noise & Stability",
      "subtitle": "超低近端相噪与长期稳定度 (出厂必选 LN1 或 LN2)",
      "englishSubtitle": "Required option. Select close-in phase noise and long-term stability level.",
      "type": "single",
      "options": [
        {
          "id": "AP5021A-LN1",
          "code": "AP5021A-LN1",
          "name": "超低近端相位噪声与高长期频率稳定度",
          "englishName": "Ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "提供极低近端相位噪声与优异的内部时基长期频率稳定度。",
          "englishDescription": "Ultra-low close in phase noise and long-term frequency stability."
        },
        {
          "id": "AP5021A-LN2",
          "code": "AP5021A-LN2",
          "name": "增强型超低近端相噪与极高长期频率稳定度",
          "englishName": "Enhanced ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "+$4,800",
          "description": "进一步优化近端相噪与参考时基老化率，适用于计量与精密雷达本振替代。",
          "englishDescription": "Enhanced ultra-low close in phase noise and long-term frequency stability."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择机械步进衰减器与快速切换 (Attenuator & Fast Switching)",
      "englishTitle": "Attenuator & Fast Switching",
      "subtitle": "针对不同频段配置机械步进衰减器及快速频率切换能力",
      "englishSubtitle": "Mechanical step attenuators and fast frequency switching option.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5021A-1E1",
          "code": "AP5021A-1E1",
          "name": "机械步进衰减器 (适用于 12.75 / 20 / 40 GHz 频段)",
          "englishName": "Mechanical step attenuator for 12.75, 20, or 40 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,600",
          "description": "为 12.75 GHz (512)、20 GHz (520) 或 40 GHz (540) 提供精确机械衰减。",
          "englishDescription": "Mechanical step attenuator. Requires Option 512, 520, or 540."
        },
        {
          "id": "AP5021A-2E1",
          "code": "AP5021A-2E1",
          "name": "机械步进衰减器 (适用于 54 GHz 毫米波频段)",
          "englishName": "Mechanical step attenuator for 54 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$5,800",
          "requires": [
            "AP5021A-554"
          ],
          "description": "为 54 GHz (554) 毫米波频段提供宽动态范围精密机械衰减。",
          "englishDescription": "Mechanical step attenuator for 54 GHz frequency range. Requires Option 554."
        },
        {
          "id": "AP5021A-UNZ",
          "code": "AP5021A-UNZ",
          "name": "快速频率切换选件 (Fast Switching)",
          "englishName": "Fast switching",
          "category": "Performance",
          "priceEstimate": "+$4,200",
          "description": "大幅缩短频率切换时间，显著提升产线自动化测试节拍吞吐量。",
          "englishDescription": "Fast frequency switching capability."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择模拟调制与通用性能选件 (Modulation & System Features)",
      "englishTitle": "Modulation & System Features",
      "subtitle": "AM/FM/PM 模拟调制、精密脉冲调制、灵活参考输入、24V DC 供电及 GPIB",
      "englishSubtitle": "Select AM/FM/PM, pulse modulation, flexible reference, DC power, and GPIB.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5021A-UNT",
          "code": "AP5021A-UNT",
          "name": "AM、FM、相位调制功能 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,200",
          "description": "机内全功能模拟幅度、频率与相位调制发生器。",
          "englishDescription": "AM, FM, phase modulation capability."
        },
        {
          "id": "AP5021A-PMR",
          "code": "AP5021A-PMR",
          "name": "精密脉冲调制功能 (Pulse Modulation)",
          "englishName": "Pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,800",
          "description": "高性能窄脉冲射频调制器 (与 PME 互斥)。",
          "englishDescription": "High-performance pulse modulation. Incompatible with PME."
        },
        {
          "id": "AP5021A-PME",
          "code": "AP5021A-PME",
          "name": "受限脉冲调制功能 (Limited Pulse Modulation)",
          "englishName": "Limited pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$2,200",
          "description": "经济型脉冲调制功能 (与 PMR 互斥)。",
          "englishDescription": "Limited pulse modulation. Incompatible with PMR."
        },
        {
          "id": "AP5021A-1ER",
          "code": "AP5021A-1ER",
          "name": "灵活外部参考输入 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "System Feature",
          "priceEstimate": "+$1,800",
          "description": "支持多种频点的外部时钟信号锁相输入。",
          "englishDescription": "Flexible reference input."
        },
        {
          "id": "AP5021A-DC1",
          "code": "AP5021A-DC1",
          "name": "24V 直流供电接口 (24V DC Power Interface)",
          "englishName": "24V DC power interface",
          "category": "System Feature",
          "priceEstimate": "+$1,500",
          "description": "配备 24V DC 直流电源输入接口 (缺省标配为交流 AC 供电)。",
          "englishDescription": "24V DC power interface. AC is standard unless DC1 ordered."
        },
        {
          "id": "AP5021A-GPB",
          "code": "AP5021A-GPB",
          "name": "GPIB 接口选件 (GPIB Interface)",
          "englishName": "GPIB interface",
          "category": "Connectivity",
          "priceEstimate": "+$950",
          "description": "提供标准自动化 GPIB 远程通信接口。",
          "englishDescription": "GPIB communication interface."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择校准证书与计量计划 (Calibration & Services)",
      "englishTitle": "Calibration & Services",
      "subtitle": "出厂商业校准证书、3 年或 5 年原厂返厂计量校准保证计划",
      "englishSubtitle": "Commercial calibration certificate and 3/5-year calibration plans.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5021A-UK6",
          "code": "AP5021A-UK6",
          "name": "带测试实测数据的商业校准证书",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂提供包含完整实测指标数据的商业校准证书报告。",
          "englishDescription": "Commercial calibration certificate with test data."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保证计划 (3-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 3 years",
          "category": "Services",
          "priceEstimate": "+$2,800",
          "description": "3 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 3 years."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保证计划 (5-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 5 years",
          "category": "Services",
          "priceEstimate": "+$4,500",
          "description": "5 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 5 years."
        }
      ]
    }
  ]
};
