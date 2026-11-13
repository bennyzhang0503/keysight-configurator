// Keysight N5183B MXG Microwave Analog Signal Generator Dataset
export const N5183B_DATA = {
  "id": "N5183B",
  "name": "N5183B MXG Microwave Analog Signal Generator",
  "subtitle": "9 kHz to 13 / 20 / 31.8 / 40 GHz High-Performance Microwave Analog Signal Generator",
  "family": "MXG X-Series Signal Generators",
  "docNumber": "5991-3596EN / N5183B",
  "description": "The Keysight N5183B MXG microwave analog signal generator offers outstanding spectral purity, high output power up to 40 GHz, ultra-low phase noise, fast frequency switching, narrow pulse modulation, and frequency extension up to 1.1 THz with VDI modules.",
  "baseSpecs": {
    "display": "X-Series high-resolution benchtop color display",
    "frequencyRange": "9 kHz to 13, 20, 31.8, or 40 GHz",
    "outputPower": "Standard high output power with mechanical step attenuator options",
    "phaseNoise": "Enhanced low phase noise (Option UNY)",
    "modulation": "AM, FM, Phase Modulation, Narrow Pulse Modulation",
    "connectivity": "USB, LAN (LXI-C), GPIB standard interfaces"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "出厂必选其一 (不可后期升级): 13 GHz, 20 GHz, 31.8 GHz, 或 40 GHz",
      "englishSubtitle": "Required option; frequency range not upgradeable. Select 13, 20, 31.8, or 40 GHz.",
      "type": "single",
      "options": [
        {
          "id": "N5183B-513",
          "code": "N5183B-513",
          "name": "频率范围 9 kHz 至 13 GHz",
          "englishName": "Frequency range from 9 kHz to 13 GHz",
          "category": "Frequency",
          "priceEstimate": "$32,500",
          "freqMaxGHz": 13.0,
          "description": "CW 频率范围 9 kHz 至 13 GHz。与 520, 532, 540 互斥。",
          "englishDescription": "Frequency range from 9 kHz to 13 GHz. Not compatible with 520, 532, 540."
        },
        {
          "id": "N5183B-520",
          "code": "N5183B-520",
          "name": "频率范围 9 kHz 至 20 GHz",
          "englishName": "Frequency range from 9 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$42,000",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 9 kHz 至 20 GHz。与 513, 532, 540 互斥。",
          "englishDescription": "Frequency range from 9 kHz to 20 GHz. Not compatible with 513, 532, 540."
        },
        {
          "id": "N5183B-532",
          "code": "N5183B-532",
          "name": "频率范围 9 kHz 至 31.8 GHz (含 2.4mm 转接头组)",
          "englishName": "Frequency range from 9 kHz to 31.8 GHz",
          "category": "Frequency",
          "priceEstimate": "$56,000",
          "freqMaxGHz": 31.8,
          "description": "CW 频率范围 9 kHz 至 31.8 GHz。包含标准 2.4 mm (f-f) 及 2.4 mm (f) 至 2.9 mm (f) 转接头组。与 513, 520, 540 互斥。",
          "englishDescription": "Frequency range from 9 kHz to 31.8 GHz. Includes standard adapter set (2.4 mm f-f and 2.4 mm f to 2.9 mm f). Not compatible with 513, 520, 540."
        },
        {
          "id": "N5183B-540",
          "code": "N5183B-540",
          "name": "频率范围 9 kHz 至 40 GHz (含 2.4mm 转接头组)",
          "englishName": "Frequency range from 9 kHz to 40 GHz",
          "category": "Frequency",
          "priceEstimate": "$68,000",
          "freqMaxGHz": 40.0,
          "description": "CW 频率范围 9 kHz 至 40 GHz。包含标准 2.4 mm (f-f) 及 2.4 mm (f) 至 2.9 mm (f) 转接头组。与 513, 520, 532 互斥。",
          "englishDescription": "Frequency range from 9 kHz to 40 GHz. Includes standard adapter set (2.4 mm f-f and 2.4 mm f to 2.9 mm f). Not compatible with 513, 520, 532."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择接头配置 (Choose Connector Configuration - Optional)",
      "englishTitle": "Choose Connector Configuration",
      "subtitle": "前面板或后面板接头定制 (出厂定制不可后期升级)",
      "englishSubtitle": "Optional connector placement and types. Not upgradable.",
      "type": "multiple",
      "options": [
        {
          "id": "N5183B-1EM",
          "code": "N5183B-1EM",
          "name": "所有接头移至后面板 (Move all connectors to rear panel)",
          "englishName": "Move all connectors to rear panel",
          "category": "Connectors",
          "priceEstimate": "+$1,200",
          "description": "将所有射频与参考输入输出接口置于机箱后背板，便于机架集成与自动化测试机柜布线。不可后期升级。",
          "englishDescription": "Move all connectors to rear panel. Not upgradable."
        },
        {
          "id": "N5183B-1ED",
          "code": "N5183B-1ED",
          "name": "Type-N (f) 射频输出接头 (Type-N RF output connector)",
          "englishName": "Type-N (f) RF output connector",
          "category": "Connectors",
          "priceEstimate": "+$850",
          "requires": [
            "N5183B-513",
            "N5183B-520"
          ],
          "description": "采用 N 型阴头 RF 输出接头。仅适用于 13 GHz (513) 或 20 GHz (520) 机型，不可与 532 或 540 配合使用。含 Type-N (m) 至 3.5 mm (f) 转接头。",
          "englishDescription": "Type-N (f) RF output connector. Not compatible with 532 or 540. Includes adapter type-N (m) to 3.5 mm (f)."
        },
        {
          "id": "N5183B-UNC",
          "code": "N5183B-UNC",
          "name": "3.5 mm 标准接头 (Standard connector 3.5 mm)",
          "englishName": "Standard connector 3.5 mm",
          "category": "Connectors",
          "priceEstimate": "+$850",
          "requires": [
            "N5183B-513",
            "N5183B-520"
          ],
          "description": "采用 3.5 mm 阴头 RF 输出接头。仅适用于 13 GHz (513) 或 20 GHz (520) 机型。含 3.5 mm (f) 至 3.5 mm (f) 转接头。与 532 或 540 互斥。",
          "englishDescription": "Standard connector 3.5 mm. Not compatible with 532 or 540. Includes adapter 3.5 mm (f) to 3.5 mm (f)."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择性能增强选件 (Choose Performance Enhancement Options)",
      "englishTitle": "Performance Enhancement Options",
      "subtitle": "调制、相位噪声、脉冲发生、衰减器与高输出功率选件",
      "englishSubtitle": "Modulation, low phase noise, high power, fast switching, and reference input options.",
      "type": "multiple",
      "options": [
        {
          "id": "N5183B-UNT",
          "code": "N5183B-UNT",
          "name": "AM, FM, 相位调制 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,600",
          "description": "提供高精度模拟调幅、调频及调相功能，支持内部与外部调制信号源。",
          "englishDescription": "AM, FM, phase modulation."
        },
        {
          "id": "N5183B-UNW",
          "code": "N5183B-UNW",
          "name": "窄脉冲调制 (Narrow Pulse Modulation)",
          "englishName": "Narrow pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,800",
          "description": "提供极窄脉宽调制能力 (低至 10 ns)，支持雷达与电子战信号仿真。与 UW2 互斥。",
          "englishDescription": "Narrow pulse modulation. Not compatible with UW2."
        },
        {
          "id": "N5183B-UW2",
          "code": "N5183B-UW2",
          "name": "窄脉冲调制最高达 31.8 GHz (Narrow Pulse Modulation up to 31.8 GHz)",
          "englishName": "Narrow pulse modulation up to 31.8 GHz",
          "category": "Modulation",
          "priceEstimate": "+$5,900",
          "requires": [
            "N5183B-540"
          ],
          "description": "在 40 GHz 机型上提供最高至 31.8 GHz 的高性价比窄脉冲调制。要求必须选配 540，且与 UNW 互斥。",
          "englishDescription": "Narrow pulse modulation up to 31.8 GHz. Requires 540. Not compatible with UNW."
        },
        {
          "id": "N5183B-UNY",
          "code": "N5183B-UNY",
          "name": "增强型超低相位噪声 (Enhanced Low Phase Noise)",
          "englishName": "Enhanced low phase noise",
          "category": "Performance",
          "priceEstimate": "+$9,500",
          "description": "提供行业顶级的超低近端与远端相位噪声性能。出厂硬件安装，不可后期升级。",
          "englishDescription": "Enhanced low phase noise. Not upgradable."
        },
        {
          "id": "N5183B-303",
          "code": "N5183B-303",
          "name": "多功能发生器 (Multifunction Generator)",
          "englishName": "Multifunction generator",
          "category": "Modulation",
          "priceEstimate": "+$2,200",
          "description": "内置双通道多功能函数发生器，可输出正弦波、方波、三角波、斜波、噪声及双音信号。",
          "englishDescription": "Multifunction generator."
        },
        {
          "id": "N5183B-006",
          "code": "N5183B-006",
          "name": "仪器安全性与可拆卸存储卡 (Instrument Security and Removable Memory Card)",
          "englishName": "Instrument security and removable memory card",
          "category": "Security",
          "priceEstimate": "+$2,800",
          "description": "提供安全数据擦除、可拆卸存储卡与安全清理流程，满足保密国防及军工测试环境。",
          "englishDescription": "Instrument security and removable memory card."
        },
        {
          "id": "N5183B-UNZ",
          "code": "N5183B-UNZ",
          "name": "快速频率切换 (Fast Frequency Switching)",
          "englishName": "Fast frequency switching",
          "category": "Performance",
          "priceEstimate": "+$4,500",
          "description": "显著缩短频率与幅度切换建立时间至微秒级，极大提升产线吞吐量。与 UZ2 互斥。",
          "englishDescription": "Fast frequency switching. Not compatible with UZ2."
        },
        {
          "id": "N5183B-UZ2",
          "code": "N5183B-UZ2",
          "name": "高速频率切换 > 1.15 ms 且 ±0.05% (Fast Frequency Switching > 1.15 ms)",
          "englishName": "Fast frequency switching > 1.15 ms and ± 0.05% of final frequency",
          "category": "Performance",
          "priceEstimate": "+$3,200",
          "description": "提供快速频率切换锁定性能。与 UNZ 互斥。",
          "englishDescription": "Fast frequency switching > 1.15 ms and ± 0.05% of final frequency. Not compatible with UNZ."
        },
        {
          "id": "N5183B-1EA",
          "code": "N5183B-1EA",
          "name": "高输出功率 (High Output Power)",
          "englishName": "High output power",
          "category": "Performance",
          "priceEstimate": "+$6,200",
          "description": "大幅提升微波波段的最大可用输出功率，克服外部线缆与夹具损耗。",
          "englishDescription": "High output power."
        },
        {
          "id": "N5183B-1E1",
          "code": "N5183B-1E1",
          "name": "步进衰减器 (Step Attenuator)",
          "englishName": "Step attenuator",
          "category": "Performance",
          "priceEstimate": "+$2,400",
          "description": "提供宽动态范围的硬件机械步进衰减器，支持超低电平输出与精准功率控制。",
          "englishDescription": "Step attenuator."
        },
        {
          "id": "N5183B-1ER",
          "code": "N5183B-1ER",
          "name": "灵活时钟参考输入 1 至 50 MHz (Flexible Reference Input 1 to 50 MHz)",
          "englishName": "Flexible reference input (1 to 50 MHz)",
          "category": "Performance",
          "priceEstimate": "+$1,800",
          "description": "允许将 1 至 50 MHz 任意整数频率参考源作为外部锁定基准。",
          "englishDescription": "Flexible reference input (1 to 50 MHz)."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择 VDI 毫米波频段扩展模块 (Choose VDI mmW Extension Module - Optional)",
      "englishTitle": "VDI mmW Frequency Extension Modules",
      "subtitle": "通过 Virginia Diodes (VDI) 模块将输出频率扩展至 50 GHz ~ 1.1 THz",
      "englishSubtitle": "Extend frequency range from 50 GHz up to 1.1 THz with VDI frequency extension modules.",
      "type": "multiple",
      "options": [
        {
          "id": "E8257D-V15",
          "code": "E8257D-V15",
          "name": "VDI 毫米波模块 50 至 75 GHz (WR-15)",
          "englishName": "Frequency range from 50 to 75 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$24,000",
          "description": "WR-15 频段毫米波倍频源模块，频率覆盖 50 至 75 GHz (V 波段)。",
          "englishDescription": "Frequency range from 50 to 75 GHz (WR-15)."
        },
        {
          "id": "E8257D-V12",
          "code": "E8257D-V12",
          "name": "VDI 毫米波模块 60 至 90 GHz (WR-12)",
          "englishName": "Frequency range from 60 to 90 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$26,000",
          "description": "WR-12 频段毫米波倍频源模块，频率覆盖 60 至 90 GHz (E 波段)。",
          "englishDescription": "Frequency range from 60 to 90 GHz (WR-12)."
        },
        {
          "id": "E8257D-V10",
          "code": "E8257D-V10",
          "name": "VDI 毫米波模块 75 至 110 GHz (WR-10 / W 波段)",
          "englishName": "Frequency range from 75 to 110 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$28,500",
          "description": "WR-10 频段毫米波倍频源模块，频率覆盖 75 至 110 GHz (W 波段)。",
          "englishDescription": "Frequency range from 75 to 110 GHz (WR-10)."
        },
        {
          "id": "E8257D-V08",
          "code": "E8257D-V08",
          "name": "VDI 毫米波模块 90 至 140 GHz (WR-8.0)",
          "englishName": "Frequency range from 90 to 140 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$31,000",
          "description": "WR-8.0 频段毫米波倍频源模块，频率覆盖 90 至 140 GHz (F 波段)。",
          "englishDescription": "Frequency range from 90 to 140 GHz (WR-8.0)."
        },
        {
          "id": "E8257D-V06",
          "code": "E8257D-V06",
          "name": "VDI 毫米波模块 110 至 170 GHz (WR-6.5 / D 波段)",
          "englishName": "Frequency range from 110 to 170 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$34,000",
          "description": "WR-6.5 频段毫米波倍频源模块，频率覆盖 110 至 170 GHz (D 波段)。",
          "englishDescription": "Frequency range from 110 to 170 GHz (WR-6.5)."
        },
        {
          "id": "E8257D-V05",
          "code": "E8257D-V05",
          "name": "VDI 毫米波模块 140 至 220 GHz (WR-5.1 / G 波段)",
          "englishName": "Frequency range from 140 to 220 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$38,000",
          "description": "WR-5.1 频段毫米波倍频源模块，频率覆盖 140 至 220 GHz (G 波段)。",
          "englishDescription": "Frequency range from 140 to 220 GHz (WR-5.1)."
        },
        {
          "id": "E8257D-V03",
          "code": "E8257D-V03",
          "name": "VDI 太赫兹模块 220 至 330 GHz (WR-3.4)",
          "englishName": "Frequency range from 220 to 330 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$42,000",
          "description": "WR-3.4 频段亚毫米波/太赫兹源模块，频率覆盖 220 至 330 GHz。",
          "englishDescription": "Frequency range from 220 to 330 GHz (WR-3.4)."
        },
        {
          "id": "E8257D-V2B",
          "code": "E8257D-V2B",
          "name": "VDI 太赫兹模块 260 至 400 GHz (WR-2.8)",
          "englishName": "Frequency range from 260 to 400 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$46,000",
          "description": "WR-2.8 频段太赫兹源模块，频率覆盖 260 至 400 GHz。",
          "englishDescription": "Frequency range from 260 to 400 GHz (WR-2.8)."
        },
        {
          "id": "E8257D-V02",
          "code": "E8257D-V02",
          "name": "VDI 太赫兹模块 325 至 500 GHz (WR-2.2)",
          "englishName": "Frequency range from 325 to 500 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$52,000",
          "description": "WR-2.2 频段太赫兹源模块，频率覆盖 325 至 500 GHz。",
          "englishDescription": "Frequency range from 325 to 500 GHz (WR-2.2)."
        },
        {
          "id": "E8257D-V1B",
          "code": "E8257D-V1B",
          "name": "VDI 太赫兹模块 500 至 750 GHz (WR-1.5)",
          "englishName": "Frequency range from 500 to 750 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$58,000",
          "description": "WR-1.5 频段太赫兹源模块，频率覆盖 500 至 750 GHz。",
          "englishDescription": "Frequency range from 500 to 750 GHz (WR-1.5)."
        },
        {
          "id": "E8257D-V01",
          "code": "E8257D-V01",
          "name": "VDI 太赫兹模块 750 至 1100 GHz (WR-1.0 / 1.1 THz)",
          "englishName": "Frequency range from 750 to 1100 GHz",
          "category": "mmWave Extensions",
          "priceEstimate": "+$66,000",
          "description": "WR-1.0 频段超高频太赫兹源模块，最高输出频率达到 1.1 THz。",
          "englishDescription": "Frequency range from 750 to 1100 GHz (WR-1.0)."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择嵌入式软件 (Choose Embedded Software - Optional)",
      "englishTitle": "Embedded Software",
      "subtitle": "脉冲串生成软件 (需先选配 UNW 窄脉冲调制)",
      "englishSubtitle": "Pulse train generator software application (requires UNW).",
      "type": "multiple",
      "options": [
        {
          "id": "N5180320B",
          "code": "N5180320B",
          "name": "脉冲串生成软件 (Pulse Train Generator)",
          "englishName": "Pulse train generator",
          "category": "Software",
          "priceEstimate": "+$3,500",
          "requires": [
            "N5183B-UNW"
          ],
          "description": "支持用户自定义复杂脉冲串、参差 PRI、抖动及脉宽步进波形。硬件要求选配 UNW。",
          "englishDescription": "Pulse train generator. Requires Option UNW."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择附件与文档选件 (Choose Accessory and Documentation Options)",
      "englishTitle": "Accessories & Documentation",
      "subtitle": "机架套件、前把手、仪器保护盖、便携箱及维修文档",
      "englishSubtitle": "Rack mount kits, handles, front cover, transit case, and service manuals.",
      "type": "multiple",
      "options": [
        {
          "id": "1CR112A",
          "code": "1CR112A",
          "name": "机架滑动导轨套件 (Rack slide kit)",
          "englishName": "Rack slide kit",
          "category": "Accessories",
          "priceEstimate": "+$680",
          "description": "用于标准 19 英寸机柜的滑动导轨托架。",
          "englishDescription": "Rack slide kit for 19-inch racks."
        },
        {
          "id": "1CN106A",
          "code": "1CN106A",
          "name": "前面板把手套件 (Front handle kit)",
          "englishName": "Front handle kit",
          "category": "Accessories",
          "priceEstimate": "+$320",
          "description": "前面板双侧提手把手套件，方便携带与机箱挪动。",
          "englishDescription": "Front handle kit."
        },
        {
          "id": "1CM110A",
          "code": "1CM110A",
          "name": "机架法兰安装套件 (Rack mount flange kit)",
          "englishName": "Rack mount flange kit",
          "category": "Accessories",
          "priceEstimate": "+$350",
          "description": "机柜固定法兰角铁挂耳套件。",
          "englishDescription": "Rack mount flange kit."
        },
        {
          "id": "1CP104A",
          "code": "1CP104A",
          "name": "机架法兰与前把手一体化套件 (Rack mount flange kit with front handles)",
          "englishName": "Rack mount flange kit with front handles",
          "category": "Accessories",
          "priceEstimate": "+$520",
          "description": "同时包含机架法兰与前把手的一体化附件套件。",
          "englishDescription": "Rack mount flange kit with front handles."
        },
        {
          "id": "N5183B-CVR",
          "code": "N5183B-CVR",
          "name": "前面板硬质保护盖 (Front panel cover)",
          "englishName": "Front panel cover",
          "category": "Accessories",
          "priceEstimate": "+$180",
          "description": "前面板防护盖板，用于保护按键、旋钮及接头免受碰擦损坏。",
          "englishDescription": "Front panel cover."
        },
        {
          "id": "N5183B-AXT",
          "code": "N5183B-AXT",
          "name": "高强度防护便携运输箱 (Hard transit case)",
          "englishName": "Hard transit case",
          "category": "Accessories",
          "priceEstimate": "+$1,650",
          "description": "军规级加固滚轮运输箱，内嵌防震发泡海绵，满足野外与转运保护需求。",
          "englishDescription": "Hard transit case."
        },
        {
          "id": "N5183B-CD1",
          "code": "N5183B-CD1",
          "name": "英文文档光盘 (CD-ROM containing English documentation set)",
          "englishName": "CD-ROM containing English documentation set",
          "category": "Documentation",
          "priceEstimate": "+$95",
          "description": "包含全套英文操作手册、编程手册及数据手册的 CD-ROM 光盘。",
          "englishDescription": "CD-ROM containing English documentation set."
        },
        {
          "id": "N5183B-0BW",
          "code": "N5183B-0BW",
          "name": "纸质维修手册及装配件指南 (Service documentation, assembly, and component)",
          "englishName": "Service documentation, assembly, and component",
          "category": "Documentation",
          "priceEstimate": "+$280",
          "description": "提供纸质印刷版整机维修文档与部件指南。",
          "englishDescription": "Service documentation, assembly, and component."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择保修与校准服务 (Choose Warranty and Calibration Options)",
      "englishTitle": "Warranty & Calibration",
      "subtitle": "出厂校准证书、不确定度报告、ANSI Z540 及多年期校准保障计划",
      "englishSubtitle": "Calibration certificates, ANSI Z540-1, and multi-year calibration assurance plans.",
      "type": "multiple",
      "options": [
        {
          "id": "N5183B-UK6",
          "code": "N5183B-UK6",
          "name": "商业校准证书附测试数据 (Commercial calibration certificate with test data)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂包含详细测量数据与误差测试报告的商业校准证书。",
          "englishDescription": "Commercial calibration certificate with test data."
        },
        {
          "id": "N5183B-AMG",
          "code": "N5183B-AMG",
          "name": "是德科技认可校准 + 不确定度 + 保护带 (Keysight Calibration + Uncertainties + Guard banding)",
          "englishName": "Keysight Calibration + Uncertainties + Guard banding (accredited cal)",
          "category": "Calibration",
          "priceEstimate": "+$1,400",
          "description": "符合国际认可标准的权威校准，包含保护带与不确定度预算分析。",
          "englishDescription": "Keysight Calibration + Uncertainties + Guard banding (accredited cal)."
        },
        {
          "id": "N5183B-A6J",
          "code": "N5183B-A6J",
          "name": "ANSI Z540-1-1994 标准校准 (ANSI Z540-1-1994 Calibration)",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$1,250",
          "description": "完全符合美国国家标准 ANSI Z540-1-1994 规范的计量校准认证。",
          "englishDescription": "ANSI Z540-1-1994 Calibration."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "返厂校准保障计划 - 5 年期 (Calibration Assurance Plan, Return-to-Keysight, 5 years)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Calibration Plans",
          "priceEstimate": "+$3,800",
          "description": "5 年期原厂返厂定期校准保障，确保仪器长期处于顶尖精度指标。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 5 years."
        },
        {
          "id": "R-50C-011-7",
          "code": "R-50C-011-7",
          "name": "返厂校准保障计划 - 7 年期 (Calibration Assurance Plan, Return-to-Keysight, 7 years)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 7 years",
          "category": "Calibration Plans",
          "priceEstimate": "+$5,200",
          "description": "7 年期原厂返厂定期校准保障服务。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 7 years."
        },
        {
          "id": "R-50C-011-10",
          "code": "R-50C-011-10",
          "name": "返厂校准保障计划 - 10 年期 (Calibration Assurance Plan, Return-to-Keysight, 10 years)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 10 years",
          "category": "Calibration Plans",
          "priceEstimate": "+$7,100",
          "description": "10 年期超长周期原厂返厂定期校准保障服务。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 10 years."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "购买后升级选件参考 (Post-Purchase Upgrades - Reference Only)",
      "englishTitle": "Instrument Upgrades",
      "subtitle": "出厂后可通过许可证密钥或硬件套件升级的功能选件",
      "englishSubtitle": "Upgrades available for existing N5183B signal generators via license keys or hardware.",
      "type": "multiple",
      "options": [
        {
          "id": "N5183BU-UNT",
          "code": "N5183BU-UNT",
          "name": "升级选件: AM, FM, 相位调制 (N5183BU-UNT)",
          "englishName": "AM, FM, phase modulation upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$3,900",
          "description": "用户可自主安装的纯软件许可证升级，即刻开通 AM/FM/PM 调制。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-UNW",
          "code": "N5183BU-UNW",
          "name": "升级选件: 窄脉冲调制 (N5183BU-UNW)",
          "englishName": "Narrow pulse modulation upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$5,200",
          "description": "纯软件许可证升级，即刻开通窄脉冲调制。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-UW2",
          "code": "N5183BU-UW2",
          "name": "升级选件: 窄脉冲调制最高达 31.8 GHz (N5183BU-UW2)",
          "englishName": "Narrow pulse modulation up to 31.8 GHz upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$6,400",
          "requires": [
            "N5183B-540"
          ],
          "description": "要求机身具备 540 选件。纯软件许可证升级。",
          "englishDescription": "Customer installable - software license key. Requires 540."
        },
        {
          "id": "N5183BU-UNZ",
          "code": "N5183BU-UNZ",
          "name": "升级选件: 快速频率切换 (N5183BU-UNZ)",
          "englishName": "Fast switching upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$4,900",
          "description": "纯软件许可证升级，与 UZ2 互斥。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-UZ2",
          "code": "N5183BU-UZ2",
          "name": "升级选件: 高速频率切换 > 1.15 ms (N5183BU-UZ2)",
          "englishName": "Fast frequency switching > 1.15 ms upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$3,500",
          "description": "纯软件许可证升级，与 UNZ 互斥。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-1EA",
          "code": "N5183BU-1EA",
          "name": "升级选件: 高输出功率 (N5183BU-1EA)",
          "englishName": "High output power upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$6,800",
          "description": "纯软件许可证升级，即刻释放硬件最大输出电平潜能。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-1ER",
          "code": "N5183BU-1ER",
          "name": "升级选件: 灵活参考时钟输入 1-50 MHz (N5183BU-1ER)",
          "englishName": "Flexible reference input upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$2,000",
          "description": "纯软件许可证升级，支持 1 到 50 MHz 任意参考输入。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-303",
          "code": "N5183BU-303",
          "name": "升级选件: 多功能发生器 (N5183BU-303)",
          "englishName": "Multifunction generator upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$2,450",
          "description": "纯软件许可证升级，激活内置双通道多功能函数信号发生器。",
          "englishDescription": "Customer installable - software license key."
        },
        {
          "id": "N5183BU-006",
          "code": "N5183BU-006",
          "name": "升级选件: 仪器安全性与可拆卸存储卡 (N5183BU-006)",
          "englishName": "Instrument security and removable memory card upgrade",
          "category": "Upgrades",
          "priceEstimate": "+$3,200",
          "description": "硬件组件与许可证升级套件。",
          "englishDescription": "Hardware and license key upgrade."
        }
      ]
    }
  ]
};
