// Keysight AP5022A G3 Analog Signal Generator Dataset
export const AP5022A_DATA = {
  "id": "AP5022A",
  "name": "AP5022A G3 Analog Signal Generator",
  "subtitle": "9 kHz to 12.75 / 20 / 40 / 54 GHz Multi-Channel (1 to 4 Channels) Analog Signal Generator",
  "family": "G3 Series Analog Signal Generators",
  "docNumber": "AP5022A-CONFIG / Keysight",
  "description": "The Keysight AP5022A is a high-density multi-channel analog signal generator offering 1, 2, 3, or 4 independent phase-coherent channels up to 54 GHz, ultra-low close-in phase noise, mechanical step attenuators, fast frequency switching, and pulse/analog modulation in a compact form factor.",
  "baseSpecs": {
    "display": "Compact multi-channel benchtop / ATE modular form factor",
    "frequencyRange": "9 kHz to 12.75 / 20 / 40 / 54 GHz",
    "rfChannels": "1, 2, 3, or 4 Independent Phase-Coherent Channels (001, 002, 003, 004)",
    "outputPower": "Calibrated output power with mechanical step attenuators",
    "phaseNoise": "Ultra-low close-in phase noise (Option LN1/LN2)",
    "connectivity": "USB, LAN, flexible reference input (1ER), and optional GPIB"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of Channels - Required Option)",
      "englishTitle": "Select Number of Channels",
      "subtitle": "出厂必选通道 1 (001)，可选配增加通道 2、通道 3 及通道 4 实现多通道输出",
      "englishSubtitle": "Required option. Select 1, 2, 3, or 4 independent RF channels.",
      "type": "single",
      "options": [
        {
          "id": "AP5022A-001",
          "code": "AP5022A-001",
          "name": "通道 1 硬件模块 (Channel 1 - Mandatory)",
          "englishName": "Add channel one",
          "category": "Channels",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含通道 1 硬件输出。",
          "englishDescription": "Add channel one. Required for all configurations."
        },
        {
          "id": "AP5022A-002",
          "code": "AP5022A-002",
          "name": "增加通道 2 硬件模块 (Add Channel Two - Dual Channel)",
          "englishName": "Add channel two",
          "category": "Channels",
          "priceEstimate": "+$16,500",
          "description": "增加第二路独立相位相干模拟射频输出通道。",
          "englishDescription": "Add channel two."
        },
        {
          "id": "AP5022A-003",
          "code": "AP5022A-003",
          "name": "增加通道 3 硬件模块 (Add Channel Three - 3 Channels)",
          "englishName": "Add channel three",
          "category": "Channels",
          "priceEstimate": "+$32,000",
          "requires": [
            "AP5022A-002"
          ],
          "description": "增加第三路独立相干模拟射频输出通道。",
          "englishDescription": "Add channel three."
        },
        {
          "id": "AP5022A-004",
          "code": "AP5022A-004",
          "name": "增加通道 4 硬件模块 (Add Channel Four - 4 Channels)",
          "englishName": "Add channel four",
          "category": "Channels",
          "priceEstimate": "+$46,000",
          "requires": [
            "AP5022A-002",
            "AP5022A-003"
          ],
          "description": "增加第四路独立相干模拟射频输出通道，构建 4 通道相干信号源系统。",
          "englishDescription": "Add channel four."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "频率覆盖 9 kHz 至 12.75 / 20 / 40 / 54 GHz (出厂必选，所有通道保持一致)",
      "englishSubtitle": "Must select one frequency range. Option will be duplicated on all channels.",
      "type": "single",
      "options": [
        {
          "id": "AP5022A-512",
          "code": "AP5022A-512",
          "name": "频率范围 9 kHz 至 12.75 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 9 kHz to 12.75 GHz",
          "category": "Frequency",
          "priceEstimate": "$16,500",
          "freqMaxGHz": 12.75,
          "description": "CW 频率范围 9 kHz 至 12.75 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 9 kHz to 12.75 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5022A-520",
          "code": "AP5022A-520",
          "name": "频率范围 9 kHz 至 20 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 9 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$24,500",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 9 kHz 至 20 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 9 kHz to 20 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5022A-540",
          "code": "AP5022A-540",
          "name": "频率范围 9 kHz 至 40 GHz (2.92 mm 阴头接口)",
          "englishName": "Frequency range, 9 kHz to 40 GHz",
          "category": "Frequency",
          "priceEstimate": "$38,000",
          "freqMaxGHz": 40.0,
          "description": "CW 频率范围 9 kHz 至 40 GHz，配 2.92 mm (f) 接口。",
          "englishDescription": "Frequency range, 9 kHz to 40 GHz. 2.92 mm (f) RF connector."
        },
        {
          "id": "AP5022A-554",
          "code": "AP5022A-554",
          "name": "频率范围 9 kHz 至 54 GHz (1.85 mm 阴头接口)",
          "englishName": "Frequency range, 9 kHz to 54 GHz",
          "category": "Frequency",
          "priceEstimate": "$52,000",
          "freqMaxGHz": 54.0,
          "description": "CW 频率范围 9 kHz 至 54 GHz 毫米波频段，配 1.85 mm (f) 接口。",
          "englishDescription": "Frequency range, 9 kHz to 54 GHz. 1.85 mm (f) RF connector."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择近端相位噪声与稳定度等级 (Select Phase Noise Performance - Required Option)",
      "englishTitle": "Select Close-in Phase Noise & Stability",
      "subtitle": "超低近端相噪与长期稳定度 (出厂必选 LN1 或 LN2，所有通道保持一致)",
      "englishSubtitle": "Required option. Ultra-low or enhanced close-in phase noise (duplicated on all channels).",
      "type": "single",
      "options": [
        {
          "id": "AP5022A-LN1",
          "code": "AP5022A-LN1",
          "name": "超低近端相位噪声与高长期频率稳定度",
          "englishName": "Ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供极低近端相位噪声与长期频率稳定度。",
          "englishDescription": "Ultra-low close in phase noise and long-term frequency stability."
        },
        {
          "id": "AP5022A-LN2",
          "code": "AP5022A-LN2",
          "name": "增强型超低近端相噪与极高长期频率稳定度",
          "englishName": "Enhanced ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "+$5,500",
          "description": "增强型超低近端相噪，适合多通道相干阵列高纯度本振驱动。",
          "englishDescription": "Enhanced ultra-low close in phase noise and long-term frequency stability."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择衰减器、快速切换与系统接口 (Attenuators & System Options)",
      "englishTitle": "Attenuators & System Options",
      "subtitle": "机械衰减器、快速切换选件、灵活时钟参考输入与 GPIB 接口",
      "englishSubtitle": "Mechanical attenuator, fast switching, flexible reference input, and GPIB.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5022A-1E1",
          "code": "AP5022A-1E1",
          "name": "机械步进衰减器 (适用于 12.75 / 20 / 40 GHz 频段)",
          "englishName": "Mechanical step attenuator for 12.75, 20, or 40 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,800",
          "description": "需选配 512、520 或 540，配置在全部通道上。",
          "englishDescription": "Requires option 512, 520, or 540 (duplicated on all channels)."
        },
        {
          "id": "AP5022A-2E1",
          "code": "AP5022A-2E1",
          "name": "机械步进衰减器 (适用于 54 GHz 毫米波频段)",
          "englishName": "Mechanical step attenuator for 54 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$6,200",
          "requires": [
            "AP5022A-554"
          ],
          "description": "需选配 554 选件，配置在全部通道上。",
          "englishDescription": "Requires option 554 (duplicated on all channels)."
        },
        {
          "id": "AP5022A-UNZ",
          "code": "AP5022A-UNZ",
          "name": "快速频率切换选件 (Fast Switching)",
          "englishName": "Fast switching",
          "category": "Performance",
          "priceEstimate": "+$4,800",
          "description": "大幅缩短多通道扫描与跳频建立时间。",
          "englishDescription": "Fast switching (duplicated on all channels)."
        },
        {
          "id": "AP5022A-1ER",
          "code": "AP5022A-1ER",
          "name": "灵活外部参考输入 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "System Feature",
          "priceEstimate": "+$1,800",
          "description": "系统级选件 (整机选配一次)。",
          "englishDescription": "Flexible reference input (ordered once per instrument)."
        },
        {
          "id": "AP5022A-GPB",
          "code": "AP5022A-GPB",
          "name": "GPIB 通信接口选件 (GPIB Interface)",
          "englishName": "GPIB interface",
          "category": "Connectivity",
          "priceEstimate": "+$950",
          "description": "系统级选件 (整机选配一次)。",
          "englishDescription": "GPIB interface (ordered once per instrument)."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择模拟调制与校准服务 (Modulation & Calibration)",
      "englishTitle": "Modulation & Calibration",
      "subtitle": "AM/FM/PM 模拟调制、精密脉冲调制、商业校准证书与计量计划",
      "englishSubtitle": "AM/FM/PM, pulse modulation, calibration certificate, and 3/5-year plans.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5022A-UNT",
          "code": "AP5022A-UNT",
          "name": "AM、FM、相位调制功能 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,600",
          "description": "全功能模拟调制 (配置在全部通道上)。",
          "englishDescription": "AM, FM, phase modulation (duplicated on all channels)."
        },
        {
          "id": "AP5022A-PMR",
          "code": "AP5022A-PMR",
          "name": "精密脉冲调制功能 (Pulse Modulation)",
          "englishName": "Pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,200",
          "description": "精密高速脉冲调制发生 (配置在全部通道上)。",
          "englishDescription": "Pulse modulation (duplicated on all channels)."
        },
        {
          "id": "AP5022A-UK6",
          "code": "AP5022A-UK6",
          "name": "带测试数据的多通道商业校准证书",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$950",
          "description": "出厂附带全通道测试数据校准证书。",
          "englishDescription": "Commercial calibration certificate with test data."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保证计划 (3-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 3 years",
          "category": "Services",
          "priceEstimate": "+$3,200",
          "description": "3 年期原厂返厂定期校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 3 years."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保证计划 (5-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 5 years",
          "category": "Services",
          "priceEstimate": "+$5,200",
          "description": "5 年期原厂返厂定期校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 5 years."
        }
      ]
    }
  ]
};
