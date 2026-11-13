// Keysight M9484C VXG Vector Signal Generator Dataset
export const M9484C_DATA = {
  "id": "M9484C",
  "name": "M9484C VXG Vector Signal Generator",
  "subtitle": "9 kHz to 54 GHz (110 GHz with extender) Multi-Channel Flagship Vector Signal Generator (up to 2.5 GHz / 5 GHz / 10 GHz BW)",
  "family": "VXG Microwave Signal Generators",
  "docNumber": "3121-1509.EN / M9484C",
  "description": "The Keysight M9484C VXG is Keysight's premier high-performance multi-channel vector signal generator, offering 1 to 4 independent phase-coherent RF channels up to 54 GHz, up to 2.5 GHz standard RF bandwidth (expandable to 5 GHz with channel bonding), up to 4096 MSa memory, ultra-low phase noise, and 8 virtual signal generators for advanced 5G NR, satellite, radar, and electronic warfare testing.",
  "baseSpecs": {
    "display": "Touch-optimized multi-touch capacitive display with modern Keysight PathWave GUI",
    "frequencyRange": "9 kHz to 6 / 8.5 / 14 / 20 / 31.8 / 44 / 54 GHz (Extendable to 110 GHz)",
    "rfChannels": "1, 2, or 4 Independent Phase-Coherent RF Channels (Options 001, 002, 003, 004)",
    "maxModBandwidth": "Up to 2.5 GHz RF Bandwidth per channel (5 GHz / 10 GHz with Option CB5)",
    "phaseNoise": "Ultra-low phase noise: ST5 / ST6 enhanced options",
    "maxOutputPower": "High output power options 1EA / 1EB / 1EC / 1EE",
    "arbMemory": "Up to 4096 MSa (4 GSa) Waveform Memory per channel (Option M40)",
    "standardSoftware": "Keysight IO Libraries Suite, Sample Waveforms, PathWave GUI"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of Channels - Required Option)",
      "englishTitle": "Select Number of Channels",
      "subtitle": "出厂必选通道 1，可选配扩展至 2 通道或 4 通道相干输出",
      "englishSubtitle": "Required option. Select 1, 2, or 4 independent phase-coherent RF channels.",
      "type": "single",
      "options": [
        {
          "id": "M9484C-001",
          "code": "M9484C-001",
          "name": "单通道输出 (Channel 1 - Mandatory)",
          "englishName": "Add channel one",
          "category": "Channels",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含通道 1 硬件及基础信号生成能力。",
          "englishDescription": "Add channel one. Required for all configurations."
        },
        {
          "id": "M9484C-002",
          "code": "M9484C-002",
          "name": "增加第二通道 (Add Channel 2 - Dual Channels)",
          "englishName": "Add channel two",
          "category": "Channels",
          "priceEstimate": "+$38,500",
          "description": "在机箱内增加第二路独立相位相干 RF 矢量信号生成通道 (支持 2x2 MIMO 与天线阵列测试)。",
          "englishDescription": "Add channel two for 2-channel phase-coherent configuration."
        },
        {
          "id": "M9484C-004",
          "code": "M9484C-004",
          "name": "增加第三与第四通道 (Add Channels 3 & 4 - 4 Channels)",
          "englishName": "Add channel three and four",
          "category": "Channels",
          "priceEstimate": "+$76,000",
          "requires": [
            "M9484C-002"
          ],
          "description": "增加第 3 和第 4 路独立通道，构成 4 通道矢量信号源 (注：4 通道配置最高支持 20 GHz 频段，不兼容 31.8/44/54 GHz 选件)。",
          "englishDescription": "Add channel three and four (4-channel configuration). Not compatible with 532, 544, 554."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "频率覆盖从 9 kHz 至 6 / 8.5 / 14 / 20 / 31.8 / 44 / 54 GHz (所有通道保持一致)",
      "englishSubtitle": "Must select one frequency option. Option will be duplicated on all channels.",
      "type": "single",
      "options": [
        {
          "id": "M9484C-506",
          "code": "M9484C-506",
          "name": "频率范围 9 kHz 至 6 GHz (Type-N 阴头接口)",
          "englishName": "CW frequency range, 9 kHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "$18,500",
          "freqMaxGHz": 6.0,
          "description": "CW 频率范围 9 kHz 至 6 GHz，配置 Type-N (f) 射频输出接头 (与 1EH 互斥)。",
          "englishDescription": "CW frequency range, 9 kHz to 6 GHz. Type-N (f) RF connector. Not compatible with 1EH."
        },
        {
          "id": "M9484C-508",
          "code": "M9484C-508",
          "name": "频率范围 9 kHz 至 8.5 GHz (Type-N 阴头接口)",
          "englishName": "CW frequency range, 9 kHz to 8.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$24,500",
          "freqMaxGHz": 8.5,
          "description": "CW 频率范围 9 kHz 至 8.5 GHz，配置 Type-N (f) 射频输出接头 (与 1EH 互斥)。",
          "englishDescription": "CW frequency range, 9 kHz to 8.5 GHz. Type-N (f) RF connector. Not compatible with 1EH."
        },
        {
          "id": "M9484C-514",
          "code": "M9484C-514",
          "name": "频率范围 9 kHz 至 14 GHz (3.5 mm 阳头接口)",
          "englishName": "CW frequency range, 9 kHz to 14 GHz",
          "category": "Frequency",
          "priceEstimate": "$36,000",
          "freqMaxGHz": 14.0,
          "description": "CW 频率范围 9 kHz 至 14 GHz，配置 3.5 mm (m) 射频输出接头。",
          "englishDescription": "CW frequency range, 9 kHz to 14 GHz. 3.5 mm (m) RF connector."
        },
        {
          "id": "M9484C-520",
          "code": "M9484C-520",
          "name": "频率范围 9 kHz 至 20 GHz (3.5 mm 阳头接口)",
          "englishName": "CW frequency range, 9 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,000",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 9 kHz 至 20 GHz，配置 3.5 mm (m) 射频输出接头。",
          "englishDescription": "CW frequency range, 9 kHz to 20 GHz. 3.5 mm (m) RF connector."
        },
        {
          "id": "M9484C-532",
          "code": "M9484C-532",
          "name": "频率范围 9 kHz 至 31.8 GHz (1.85 mm 阳头接口)",
          "englishName": "CW frequency range, 9 kHz to 31.8 GHz",
          "category": "Frequency",
          "priceEstimate": "$65,000",
          "freqMaxGHz": 31.8,
          "description": "CW 频率范围 9 kHz 至 31.8 GHz，配置 1.85 mm (m) 射频输出接头 (仅支持 1 或 2 通道配置)。",
          "englishDescription": "CW frequency range, 9 kHz to 31.8 GHz. 1.85 mm (m) RF connector. Not compatible with 003, 004."
        },
        {
          "id": "M9484C-544",
          "code": "M9484C-544",
          "name": "频率范围 9 kHz 至 44 GHz (1.85 mm 阳头接口)",
          "englishName": "CW frequency range, 9 kHz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$82,000",
          "freqMaxGHz": 44.0,
          "description": "CW 频率范围 9 kHz 至 44 GHz，配置 1.85 mm (m) 射频输出接头 (仅支持 1 或 2 通道配置)。",
          "englishDescription": "CW frequency range, 9 kHz to 44 GHz. 1.85 mm (m) RF connector. Not compatible with 003, 004."
        },
        {
          "id": "M9484C-554",
          "code": "M9484C-554",
          "name": "频率范围 9 kHz 至 54 GHz (1.85 mm 阳头接口)",
          "englishName": "CW frequency range, 9 kHz to 54 GHz",
          "category": "Frequency",
          "priceEstimate": "$98,000",
          "freqMaxGHz": 54.0,
          "description": "CW 频率范围 9 kHz 至 54 GHz 毫米波高端频段，配置 1.85 mm (m) 接头 (仅支持 1 或 2 通道配置)。",
          "englishDescription": "CW frequency range, 9 kHz to 54 GHz. 1.85 mm (m) RF connector. Not compatible with 003, 004."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择射频调制带宽 (Select RF Modulation Bandwidth - Required Option)",
      "englishTitle": "Select RF Modulation Bandwidth",
      "subtitle": "出厂必选其一：160 MHz、250 MHz、500 MHz、1 GHz 或 2.5 GHz 超宽调制带宽",
      "englishSubtitle": "Must select one bandwidth option per channel (160 MHz up to 2.5 GHz).",
      "type": "single",
      "options": [
        {
          "id": "M9484C-B1X",
          "code": "M9484C-B1X",
          "name": "射频带宽 160 MHz，包含 64 MSa 内存",
          "englishName": "RF bandwidth, 160 MHz with 64 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 160,
          "description": "提供 160 MHz 基础 RF 调制带宽及 64 MSa 波形存储器。",
          "englishDescription": "RF bandwidth, 160 MHz with 64 MSa memory."
        },
        {
          "id": "M9484C-B2X",
          "code": "M9484C-B2X",
          "name": "射频带宽 250 MHz，包含 64 MSa 内存",
          "englishName": "RF bandwidth, 250 MHz with 64 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$6,200",
          "bandwidthMHz": 250,
          "description": "提供 250 MHz RF 调制带宽及 64 MSa 波形存储器。",
          "englishDescription": "RF bandwidth, 250 MHz with 64 MSa memory."
        },
        {
          "id": "M9484C-B5X",
          "code": "M9484C-B5X",
          "name": "射频带宽 500 MHz，包含 256 MSa 内存",
          "englishName": "RF bandwidth, 500 MHz with 256 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$14,500",
          "bandwidthMHz": 500,
          "description": "提供 500 MHz RF 调制带宽及 256 MSa 波形存储器。",
          "englishDescription": "RF bandwidth, 500 MHz with 256 MSa memory."
        },
        {
          "id": "M9484C-R10",
          "code": "M9484C-R10",
          "name": "射频带宽 1 GHz，包含 256 MSa 内存",
          "englishName": "RF bandwidth, 1 GHz with 256 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$22,500",
          "bandwidthMHz": 1000,
          "description": "提供 1 GHz 超宽调制带宽及 256 MSa 波形存储器 (适合宽带 5G NR 及卫星通信)。",
          "englishDescription": "RF bandwidth, 1 GHz with 256 MSa memory."
        },
        {
          "id": "M9484C-R1E",
          "code": "M9484C-R1E",
          "name": "射频带宽 1 GHz 受限版，包含 256 MSa 内存",
          "englishName": "RF bandwidth, 1 GHz with 256 MSa memory, limited",
          "category": "Bandwidth",
          "priceEstimate": "+$18,000",
          "bandwidthMHz": 1000,
          "description": "受限版 1 GHz RF 调制带宽 (最大带宽取决于具体射频频率，参见技术手册)。",
          "englishDescription": "RF bandwidth, 1 GHz with 256 MSa memory, limited (frequency dependent)."
        },
        {
          "id": "M9484C-R25",
          "code": "M9484C-R25",
          "name": "射频带宽 2.5 GHz，包含 256 MSa 内存",
          "englishName": "RF bandwidth, 2.5 GHz with 256 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$36,000",
          "bandwidthMHz": 2500,
          "description": "提供业界领先的 2.5 GHz 超宽实时调制带宽，支持多通道通道绑定 (Channel Bonding)。",
          "englishDescription": "RF bandwidth, 2.5 GHz with 256 MSa memory."
        },
        {
          "id": "M9484C-R2E",
          "code": "M9484C-R2E",
          "name": "射频带宽 2.5 GHz 受限版，包含 256 MSa 内存",
          "englishName": "RF bandwidth, 2.5 GHz with 256 MSa memory, limited",
          "category": "Bandwidth",
          "priceEstimate": "+$29,000",
          "bandwidthMHz": 2500,
          "description": "受限版 2.5 GHz RF 调制带宽 (最大带宽取决于具体射频频率，参见技术手册)。",
          "englishDescription": "RF bandwidth, 2.5 GHz with 256 MSa memory, limited (frequency dependent)."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择参考基准与相位噪声性能 (Select Reference & Phase Noise - Required Option)",
      "englishTitle": "Select Reference & Phase Noise Options",
      "subtitle": "高性能基准或增强型高性能基准，配对低相噪或增强型低相噪 (必须成对选择)",
      "englishSubtitle": "Must select one pair: 500+ST5 (Low phase noise) or 600+ST6 (Enhanced low phase noise).",
      "type": "single",
      "options": [
        {
          "id": "M9484C-500",
          "code": "M9484C-500",
          "name": "高性能参考时钟 (High Performance Reference)",
          "englishName": "High performance reference",
          "category": "Reference",
          "priceEstimate": "Standard",
          "isStandard": true,
          "requires": [
            "M9484C-ST5"
          ],
          "description": "高性能机内时钟参考基准 (出厂标配，需与 Option ST5 搭配)。",
          "englishDescription": "High performance reference. Requires Option ST5."
        },
        {
          "id": "M9484C-ST5",
          "code": "M9484C-ST5",
          "name": "低相位噪声综合器 (Low Phase Noise)",
          "englishName": "Low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "requires": [
            "M9484C-500"
          ],
          "description": "低相位噪声本振综合架构 (出厂标配，需与 Option 500 搭配)。",
          "englishDescription": "Low phase noise synthesizer. Requires Option 500."
        },
        {
          "id": "M9484C-600",
          "code": "M9484C-600",
          "name": "增强型高性能参考时钟 (Enhanced High Performance Reference)",
          "englishName": "Enhanced high performance reference",
          "category": "Reference",
          "priceEstimate": "+$8,500",
          "requires": [
            "M9484C-ST6"
          ],
          "description": "超高稳定度增强型内部参考时钟源 (需与 Option ST6 搭配)。",
          "englishDescription": "Enhanced high performance reference. Requires Option ST6."
        },
        {
          "id": "M9484C-ST6",
          "code": "M9484C-ST6",
          "name": "增强型超低相位噪声综合器 (Enhanced Low Phase Noise)",
          "englishName": "Enhanced low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$16,800",
          "requires": [
            "M9484C-600"
          ],
          "description": "旗舰级增强型超低相位噪声 (支持 FM/PM 模拟调制输入，需与 Option 600 搭配)。",
          "englishDescription": "Enhanced low phase noise synthesizer. Requires Option 600."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择高输出功率与谐波优化选件 (High Output Power & Harmonics)",
      "englishTitle": "High Output Power & Harmonics Options",
      "subtitle": "针对不同频段配置高输出功率放大硬件及谐波抑制滤波",
      "englishSubtitle": "Optionally select high output power and improved harmonics for specific frequency ranges.",
      "type": "multiple",
      "options": [
        {
          "id": "M9484C-1EA",
          "code": "M9484C-1EA",
          "name": "高输出功率 (9 kHz 至 6 或 8.5 GHz)",
          "englishName": "High output power from 9 kHz to 6 or 8.5 GHz",
          "category": "Output Power",
          "priceEstimate": "+$5,600",
          "description": "为 6 GHz (506) 或 8.5 GHz (508) 仪表提供大功率输出 (不兼容 14/20/31.8/44/54 GHz)。",
          "englishDescription": "High output power for 6 or 8.5 GHz. Not compatible with 514, 520, 532, 544, 554."
        },
        {
          "id": "M9484C-1EB",
          "code": "M9484C-1EB",
          "name": "高输出功率 (9 kHz 至 14 或 20 GHz)",
          "englishName": "High output power from 9 kHz to 14 or 20 GHz",
          "category": "Output Power",
          "priceEstimate": "+$9,800",
          "description": "为 14 GHz (514) 或 20 GHz (520) 仪表提供高输出功率 (不兼容 6/8.5/31.8/44/54 GHz)。",
          "englishDescription": "High output power for 14 or 20 GHz. Not compatible with 506, 508, 532, 544, 554."
        },
        {
          "id": "M9484C-1EC",
          "code": "M9484C-1EC",
          "name": "高输出功率 (9 kHz 至 31.8、44 或 54 GHz)",
          "englishName": "High output power from 9 kHz to 31.8, 44, or 54 GHz",
          "category": "Output Power",
          "priceEstimate": "+$18,500",
          "description": "为 31.8 GHz (532)、44 GHz (544) 或 54 GHz (554) 毫米波仪表提供大功率输出。",
          "englishDescription": "High output power for 31.8, 44, or 54 GHz. Not compatible with 506, 508, 514, 520."
        },
        {
          "id": "M9484C-1EE",
          "code": "M9484C-1EE",
          "name": "高输出功率 (9 kHz 至 31.8/44/54 GHz，43.5 GHz 以上受限)",
          "englishName": "High output power from 9 kHz to 31.8, 44, or 54 GHz, limited above 43.5 GHz",
          "category": "Output Power",
          "priceEstimate": "+$14,200",
          "description": "高输出功率选件，在 43.5 GHz 以上输出功率受限。",
          "englishDescription": "High output power for 31.8, 44, or 54 GHz, limited above 43.5 GHz."
        },
        {
          "id": "M9484C-1EH",
          "code": "M9484C-1EH",
          "name": "谐波抑制优化选件 (Improved Harmonics)",
          "englishName": "Improved harmonics",
          "category": "Harmonics",
          "priceEstimate": "+$6,800",
          "description": "优化 RF 谐波失真指标 (适用于 14 GHz 及以上频段，不兼容 506/508)。",
          "englishDescription": "Improved harmonics. Not compatible with 506, 508. Recommended with ARF."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择基带波形发生器内存 (Baseband Generator Memory Upgrade)",
      "englishTitle": "Select Baseband Generator Memory",
      "subtitle": "扩展波形回放内存容量：512 MSa、1024 MSa、2048 MSa 或 4096 MSa (4 GSa)",
      "englishSubtitle": "Optionally upgrade baseband ARB memory up to 4096 MSa (4 GSa) per channel.",
      "type": "single",
      "options": [
        {
          "id": "M9484C-M05",
          "code": "M9484C-M05",
          "name": "基带发生器内存升级至 512 MSa",
          "englishName": "Baseband generator memory upgrade to 512 MSa",
          "category": "Memory",
          "priceEstimate": "+$4,800",
          "arbMemoryMSa": 512,
          "description": "将通道基带波形存储器容量扩充至 512 MSa。",
          "englishDescription": "Baseband generator memory upgrade to 512 MSa."
        },
        {
          "id": "M9484C-M10",
          "code": "M9484C-M10",
          "name": "基带发生器内存升级至 1024 MSa (1 GSa)",
          "englishName": "Baseband generator memory upgrade to 1024 MSa",
          "category": "Memory",
          "priceEstimate": "+$8,500",
          "arbMemoryMSa": 1024,
          "description": "将通道基带波形存储器容量扩充至 1024 MSa (1 GSa)。",
          "englishDescription": "Baseband generator memory upgrade to 1024 MSa."
        },
        {
          "id": "M9484C-M20",
          "code": "M9484C-M20",
          "name": "基带发生器内存升级至 2048 MSa (2 GSa)",
          "englishName": "Baseband generator memory upgrade to 2048 MSa",
          "category": "Memory",
          "priceEstimate": "+$14,500",
          "arbMemoryMSa": 2048,
          "description": "将通道基带波形存储器容量扩充至 2048 MSa (2 GSa)。",
          "englishDescription": "Baseband generator memory upgrade to 2048 MSa."
        },
        {
          "id": "M9484C-M40",
          "code": "M9484C-M40",
          "name": "基带发生器内存升级至 4096 MSa (4 GSa 旗舰容量)",
          "englishName": "Baseband generator memory upgrade to 4096 MSa",
          "category": "Memory",
          "priceEstimate": "+$24,000",
          "arbMemoryMSa": 4096,
          "description": "提供最大 4096 MSa (4 GSa) 极长大容量基带波形回放空间，适合卫星通信及超长雷达脉冲序列。",
          "englishDescription": "Baseband generator memory upgrade to 4096 MSa (4 GSa)."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择系统级特性与多机同步 (Select System Features & Synchronization)",
      "englishTitle": "Select System Features & Synchronization",
      "subtitle": "多通道相位一致性、通道绑定 (Channel Bonding 5G/10GHz)、多机同步及扩展本振",
      "englishSubtitle": "Phase coherence, channel bonding (5/10 GHz), multi-instrument sync, and flexible reference.",
      "type": "multiple",
      "options": [
        {
          "id": "M9484C-1ER",
          "code": "M9484C-1ER",
          "name": "灵活参考输入 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "System Feature",
          "priceEstimate": "+$3,200",
          "description": "支持宽范围频率外部参考信号输入锁相锁定。",
          "englishDescription": "Flexible reference input."
        },
        {
          "id": "M9484C-PCH",
          "code": "M9484C-PCH",
          "name": "N 通道相位相干性 (Phase Coherence for N Channels)",
          "englishName": "Phase coherence for N channels",
          "category": "System Feature",
          "priceEstimate": "+$9,500",
          "description": "为所有通道提供精确的相位校准与相位相干控制 (MIMO 与波束赋形核心选件)。",
          "englishDescription": "Phase coherence for N channels."
        },
        {
          "id": "M9484C-CB5",
          "code": "M9484C-CB5",
          "name": "通道绑定功能 5 GHz / 10 GHz (Channel Bonding)",
          "englishName": "Channel bonding, 5 GHz (2-ch) or 10 GHz (4-ch)",
          "category": "System Feature",
          "priceEstimate": "+$26,000",
          "requires": [
            "M9484C-R25",
            "M9484C-PCH",
            "N7653APPC"
          ],
          "description": "将双通道绑定实现 5 GHz 连续调制带宽，或 4 通道绑定实现 10 GHz 调制带宽 (需 R25、PCH、N7653APPC 及 Y1166A/Y1167A 套件)。",
          "englishDescription": "Channel bonding, 5 GHz (2-ch) or 10 GHz (4-ch). Requires R25 on all channels, PCH, and N7653APPC."
        },
        {
          "id": "M9484C-SNC",
          "code": "M9484C-SNC",
          "name": "多机级联同步能力 (Multi-Instrument Synchronization)",
          "englishName": "Multi-instrument synchronization",
          "category": "System Feature",
          "priceEstimate": "+$11,800",
          "requires": [
            "M9484C-PCH"
          ],
          "description": "支持两台或多台 M9484C 互联同步构成超大规模多通道测试系统 (需 PCH，推荐 Y1305A 电缆套件)。",
          "englishDescription": "Multi-instrument synchronization. Requires PCH. Recommended with Y1305A accessory kit."
        },
        {
          "id": "M9484C-AL2",
          "code": "M9484C-AL2",
          "name": "辅助固定本振输出 (Auxiliary Fixed LO)",
          "englishName": "Auxiliary fixed LO",
          "category": "System Feature",
          "priceEstimate": "+$8,200",
          "description": "提供固定 LO 输出，用于驱动 V3080A 矢量信号发生器频率扩展模块至 110 GHz (需 532/544/554)。",
          "englishDescription": "Auxiliary fixed LO. Requires 532, 544 or 554. Required for use with V3080A frequency extender."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择模拟调制、脉冲调制与矢量系统特性 (Analog & Vector Features)",
      "englishTitle": "Analog & Vector Features",
      "subtitle": "AM/FM/PM 模拟调制、脉冲发生器、8 虚拟信号源、高斯白噪声及模拟/数字 IQ 接口",
      "englishSubtitle": "AM/FM/PM modulation, pulse modulation, 8 virtual signal generators, AWGN and I/Q interfaces.",
      "type": "multiple",
      "options": [
        {
          "id": "M9484C-UNT",
          "code": "M9484C-UNT",
          "name": "AM、FM、相位调制功能 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Analog Modulation",
          "priceEstimate": "+$4,500",
          "description": "全功能模拟调制发生器 (FM 与 PM 调制需要 ST6 超低相噪选项，ST5 仅支持 AM)。",
          "englishDescription": "AM, FM, phase modulation. FM and phase modulation require ST6."
        },
        {
          "id": "M9484C-303",
          "code": "M9484C-303",
          "name": "多功能函数发生器 (Multifunction Generator)",
          "englishName": "Multifunction generator",
          "category": "Analog Modulation",
          "priceEstimate": "+$2,800",
          "description": "机内多功能 LF 函数发生器 (需 AN1 或 UNT 选件)。",
          "englishDescription": "Multifunction generator. Requires AN1 or UNT."
        },
        {
          "id": "M9484C-PMR",
          "code": "M9484C-PMR",
          "name": "精密脉冲调制功能 (Pulse Modulation)",
          "englishName": "Pulse modulation",
          "category": "Pulse Modulation",
          "priceEstimate": "+$4,800",
          "description": "高性能高速射频脉冲调制器 (与 PME 互斥)。",
          "englishDescription": "Pulse modulation. Not compatible with PME."
        },
        {
          "id": "M9484C-PME",
          "code": "M9484C-PME",
          "name": "受限脉冲调制功能 (Limited Pulse Modulation)",
          "englishName": "Limited pulse modulation",
          "category": "Pulse Modulation",
          "priceEstimate": "+$3,200",
          "description": "经济型受限脉冲调制功能 (与 PMR 互斥)。",
          "englishDescription": "Limited pulse modulation. Not compatible with PMR."
        },
        {
          "id": "M9484C-320",
          "code": "M9484C-320",
          "name": "脉冲列发生器 (Pulse Train Generator - SCPI Only)",
          "englishName": "Pulse train generator (SCPI only)",
          "category": "Pulse Modulation",
          "priceEstimate": "+$3,600",
          "description": "通过 SCPI 编程定义雷达脉冲序列 (需 PMR 或 PME 选件)。",
          "englishDescription": "Pulse train generator (SCPI only). Requires PMR or PME."
        },
        {
          "id": "M9484C-8SG",
          "code": "M9484C-8SG",
          "name": "8 虚拟信号发生器 (8 Virtual Signal Generators - Multiple IQ to RF)",
          "englishName": "8 virtual signal generators (multiple IQ paths to RF)",
          "category": "Vector Feature",
          "priceEstimate": "+$18,000",
          "description": "单通道内支持最高 8 个独立的虚拟信号源生成并在射频端实时合成与衰减 (复杂雷达威胁场景生成关键选件)。",
          "englishDescription": "8 virtual signal generators (multiple IQ paths to RF). Duplicated on all channels."
        },
        {
          "id": "M9484C-403",
          "code": "M9484C-403",
          "name": "高斯白噪声与 CW 干扰信号注入 (AWGN and CW Interferer)",
          "englishName": "AWGN and CW interferer",
          "category": "Vector Feature",
          "priceEstimate": "+$5,500",
          "description": "实时机内生成可精确控制载噪比 (C/N) 的加性高斯白噪声与连续波干扰信号。",
          "englishDescription": "AWGN and CW interferer for receiver sensitivity and jamming testing."
        },
        {
          "id": "M9484C-AN1",
          "code": "M9484C-AN1",
          "name": "模拟 I/O 接口 (LF 出、AM/FM/PM 输入、单端 IQ 输出)",
          "englishName": "Analog I/O for LF out, AM, FM, PM inputs, single ended IQ outputs",
          "category": "Hardware Interface",
          "priceEstimate": "+$6,200",
          "description": "仅在通道 1 提供模拟 I/O 接口 (不兼容 4 通道配置 003/004 及 DS1)。",
          "englishDescription": "Analog I/O for LF out, AM/FM/PM inputs, single ended IQ outputs (Ch 1 only). Not compatible with 003, 004, DS1."
        },
        {
          "id": "M9484C-DIQ",
          "code": "M9484C-DIQ",
          "name": "差分模拟 IQ 输出 (Differential IQ Outputs)",
          "englishName": "Differential IQ outputs",
          "category": "Hardware Interface",
          "priceEstimate": "+$4,800",
          "requires": [
            "M9484C-AN1"
          ],
          "description": "提供高保真差分基带 IQ 输出 (需 AN1 选件，仅在通道 1 可用)。",
          "englishDescription": "Differential IQ outputs. Requires AN1. Only available on channel one."
        },
        {
          "id": "M9484C-DS1",
          "code": "M9484C-DS1",
          "name": "光纤数字 IQ 流盘输入接口 (Optical Digital IQ Streaming Inputs)",
          "englishName": "Optical Digital IQ streaming inputs",
          "category": "Hardware Interface",
          "priceEstimate": "+$8,500",
          "description": "支持通过高速光纤实时流式输入数字 IQ 数据 (不兼容 AN1，推荐配合 Y1306A 光纤套件)。",
          "englishDescription": "Optical Digital IQ streaming inputs. Not compatible with AN1. Recommended with Y1306A."
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择机载内嵌 PathWave 信号生成软件 (Embedded PathWave Signal Generation)",
      "englishTitle": "Embedded PathWave Software Tools",
      "subtitle": "通过 VXG 触屏 GUI 直接生成并实时回放 5G NR、Wi-Fi 7、MIMO 衰落及雷达波形",
      "englishSubtitle": "Create and playback waveforms directly via the VXG touch GUI. One license per instrument.",
      "type": "multiple",
      "options": [
        {
          "id": "N7631APPC",
          "code": "N7631APPC",
          "name": "5G NR / 5G-Advanced 信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave Signal Generation for 5G NR/5G-Advanced",
          "category": "Cellular Software",
          "priceEstimate": "+$12,500",
          "supportsLicense": true,
          "description": "5G NR Release 15/16/17/18 完整标准上行/下行测试波形生成。",
          "englishDescription": "PathWave Signal Generation for 5G NR/5G-Advanced."
        },
        {
          "id": "N7617APPC",
          "code": "N7617APPC",
          "name": "WLAN 802.11ax/be/bn (Wi-Fi 6E/7/8) 信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave Signal Generation for WLAN (802.11ax/be/bn)",
          "category": "Wireless Software",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "支持 Wi-Fi 6E、Wi-Fi 7 (802.11be 320MHz 4096QAM) 及 Wi-Fi 8 (802.11bn) 信号生成。",
          "englishDescription": "PathWave Signal Generation for WLAN (802.11ax/be/bn)."
        },
        {
          "id": "N7605AP0C",
          "code": "N7605AP0C",
          "name": "3GPP MIMO 信道衰落模拟 (5G NR FR1/FR2、LTE、NR NTN)",
          "englishName": "PathWave Signal Generation for 3GPP MIMO Fading",
          "category": "Fading Simulation",
          "priceEstimate": "+$18,500",
          "supportsLicense": true,
          "description": "机内实时 3GPP MIMO 信道衰落模拟 (多机互联需 M9484C-SNC)。",
          "englishDescription": "PathWave Signal Generation for 3GPP MIMO Fading (5GNR FR1/FR2, LTE, NR NTN)."
        },
        {
          "id": "N7605APPC",
          "code": "N7605APPC",
          "name": "自定义信道衰落模拟软件 (Custom Fading)",
          "englishName": "PathWave Signal Generation for Custom Fading",
          "category": "Fading Simulation",
          "priceEstimate": "+$14,500",
          "requires": [
            "F9860400A"
          ],
          "supportsLicense": true,
          "description": "自定义信道多径时延衰落模拟 (需配合 F9860400A Channel Studio 建模工具)。",
          "englishDescription": "PathWave Signal Generation for Custom Fading (requires F9860400A)."
        },
        {
          "id": "F9860400A",
          "code": "F9860400A",
          "name": "Channel Studio TDL 时域抽头建模设计工具",
          "englishName": "Channel Studio TDL modeling Tool",
          "category": "Fading Simulation",
          "priceEstimate": "+$11,000",
          "supportsLicense": true,
          "description": "用于建立自定义抽头延迟线 (TDL) 复杂无线信道模型的仿真工具包。",
          "englishDescription": "Channel Studio TDL modeling Tool (requires N7605APPC)."
        },
        {
          "id": "N7624APPC",
          "code": "N7624APPC",
          "name": "LTE/LTE-Advanced/LTE-A Pro FDD 信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave signal generation for LTE/LTE-A/LTE-A Pro FDD",
          "category": "Cellular Software",
          "priceEstimate": "+$7,500",
          "supportsLicense": true,
          "description": "LTE FDD 信号生成 (机载版支持 Uplink/PRACH)。",
          "englishDescription": "PathWave signal generation for LTE/LTE-A/LTE-A Pro FDD (Uplink/PRACH)."
        },
        {
          "id": "N7625APPC",
          "code": "N7625APPC",
          "name": "LTE/LTE-Advanced/LTE-A Pro TDD 信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave signal generation for LTE/LTE-A/LTE-A Pro TDD",
          "category": "Cellular Software",
          "priceEstimate": "+$7,500",
          "supportsLicense": true,
          "description": "LTE TDD 信号生成 (机载版支持 Uplink/PRACH)。",
          "englishDescription": "PathWave signal generation for LTE/LTE-A/LTE-A Pro TDD (Uplink/PRACH)."
        },
        {
          "id": "N7632APPC",
          "code": "N7632APPC",
          "name": "NR V2X 车联网信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave Signal Generation for NR V2X",
          "category": "Automotive Software",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR V2X 侧行链路 (Sidelink) 车联网测试波形生成。",
          "englishDescription": "PathWave Signal Generation for NR V2X."
        },
        {
          "id": "N7602AP1C",
          "code": "N7602AP1C",
          "name": "GSM/EDGE 实时调制信号生成软件 (PathWave Embedded)",
          "englishName": "PathWave Signal Generation for GSM/EDGE",
          "category": "Cellular Software",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "支持外接数据输入的 GSM/EDGE 实时物理层调制信号生成。",
          "englishDescription": "PathWave Signal Generation for GSM/EDGE real-time modulation."
        },
        {
          "id": "N7608APPC",
          "code": "N7608APPC",
          "name": "通用自定义调制信号生成软件 (Custom IQ)",
          "englishName": "PathWave Signal Generation for Custom Modulation (Custom IQ)",
          "category": "General Purpose",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "自定义数字调制信号生成 (FSK/PSK/QAM/APSK/OFDM/多载波)。",
          "englishDescription": "PathWave Signal Generation for Custom Modulation (Custom IQ)."
        },
        {
          "id": "N7609APPC",
          "code": "N7609APPC",
          "name": "全球卫星导航系统 (GNSS) 信号生成软件",
          "englishName": "PathWave Signal Generation for Global Navigation Satellite Systems (GNSS)",
          "category": "GNSS Software",
          "priceEstimate": "+$9,500",
          "supportsLicense": true,
          "description": "支持 GPS、GLONASS、Galileo、BDS 北斗多星座多频点卫星导航信号仿真。",
          "englishDescription": "PathWave Signal Generation for Global Navigation Satellite Systems (GNSS)."
        },
        {
          "id": "N7620APPC",
          "code": "N7620APPC",
          "name": "雷达脉冲构建设计软件 (Pulse Building)",
          "englishName": "PathWave Signal Generation for Pulse Building",
          "category": "Radar Software",
          "priceEstimate": "+$11,500",
          "supportsLicense": true,
          "description": "复杂雷达脉冲串、线性调频 (LFM) 及电子战多威胁雷达场景构建。",
          "englishDescription": "PathWave Signal Generation for Pulse Building."
        },
        {
          "id": "N7621APPC",
          "code": "N7621APPC",
          "name": "多音信号与噪声功率比 (Multitone and NPR) 测试软件",
          "englishName": "PathWave Signal Generation for Multitone and NPR",
          "category": "General Purpose",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "生成多载波多音测试信号及凹口噪声，用于功放与接收机互调 NPR 测量。",
          "englishDescription": "PathWave Signal Generation for Multitone and NPR."
        },
        {
          "id": "N7641APPC",
          "code": "N7641APPC",
          "name": "航空电子通信导航信号生成软件 (Avionics)",
          "englishName": "PathWave Signal Generation for Avionics",
          "category": "Avionics Software",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "支持 ILS 仪表着陆系统、VOR 全向信标、DME 及标记信标测试信号生成。",
          "englishDescription": "PathWave Signal Generation for Avionics."
        },
        {
          "id": "N7642APPC",
          "code": "N7642APPC",
          "name": "基于 IQ 的模拟调制信号生成 (IQ AM/FM/PM)",
          "englishName": "PathWave Signal Generation for IQ based AM, FM, phase modulation",
          "category": "General Purpose",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "利用基带 IQ 引擎纯数字合成超高纯度 AM/FM/PM 调制波形。",
          "englishDescription": "PathWave Signal Generation for IQ based AM, FM, phase modulation."
        },
        {
          "id": "N7653APPC",
          "code": "N7653APPC",
          "name": "自动通道频响校准与 S 参数去嵌入 (含非线性失真校正)",
          "englishName": "PathWave automatic channel response correction and S-parameter de-embedding",
          "category": "Correction Software",
          "priceEstimate": "+$13,500",
          "supportsLicense": true,
          "description": "自动校准夹具与线缆频响，去除测试系统引入的幅度平坦度与相位误差 (通道绑定 CB5 必选)。",
          "englishDescription": "PathWave automatic channel response correction and S-parameter de-embedding."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择外部导出波形回放软件与 MATLAB (File-Export PathWave & MATLAB)",
      "englishTitle": "Additional PathWave Software Tools & MATLAB",
      "subtitle": "离线 PC 软件生成并通过文件导入回放：蜂窝、短距离 IoT、广播、脉冲及 MATLAB",
      "englishSubtitle": "File-export based waveform playback for cellular, IoT, audio/video broadcasting and MATLAB.",
      "type": "multiple",
      "options": [
        {
          "id": "N7600EMBC",
          "code": "N7600EMBC",
          "name": "W-CDMA/HSPA+ 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for W-CDMA/HSPA+",
          "category": "Cellular Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "3G W-CDMA 及 HSPA+ 波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for W-CDMA/HSPA+."
        },
        {
          "id": "N7601EMBC",
          "code": "N7601EMBC",
          "name": "cdma2000/1xEV-DO 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for cdma2000/1xEV-DO",
          "category": "Cellular Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "cdma2000 及 1xEV-DO 蜂窝波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for cdma2000/1xEV-DO."
        },
        {
          "id": "N7602EMBC",
          "code": "N7602EMBC",
          "name": "GSM/EDGE/Evo 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for GSM/EDGE/Evo",
          "category": "Cellular Software",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "GSM/EDGE 及其演进标准波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for GSM/EDGE/Evo."
        },
        {
          "id": "N7612EMBC",
          "code": "N7612EMBC",
          "name": "TD-SCDMA/HSPA 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for TD-SCDMA/HSPA",
          "category": "Cellular Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "TD-SCDMA 时分同步码分多址波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for TD-SCDMA/HSPA."
        },
        {
          "id": "N7624EMBC",
          "code": "N7624EMBC",
          "name": "LTE/LTE-Advanced/LTE-A Pro FDD 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for LTE/LTE-Advanced/LTE-A Pro FDD",
          "category": "Cellular Software",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "LTE FDD 完整下行与上行多载波波形导出与回放。",
          "englishDescription": "PathWave Signal Generation for LTE/LTE-Advanced/LTE-A Pro FDD."
        },
        {
          "id": "N7625EMBC",
          "code": "N7625EMBC",
          "name": "LTE/LTE-Advanced TDD 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for LTE/LTE-Advanced TDD",
          "category": "Cellular Software",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工完整波形导出与回放。",
          "englishDescription": "PathWave Signal Generation for LTE/LTE-Advanced TDD."
        },
        {
          "id": "N7626EMBC",
          "code": "N7626EMBC",
          "name": "LTE V2X 车联网信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for LTE V2X",
          "category": "Automotive Software",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "LTE V2X 直连通信波形导出与回放。",
          "englishDescription": "PathWave Signal Generation for LTE V2X."
        },
        {
          "id": "N7631EMBC",
          "code": "N7631EMBC",
          "name": "5G NR / 5G-Advanced 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for 5G NR/5G-Advanced",
          "category": "Cellular Software",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "PC 离线端 5G NR 任意波形生成并通过文件加载回放。",
          "englishDescription": "PathWave Signal Generation for 5G NR/5G-Advanced (file export)."
        },
        {
          "id": "N7632EMBC",
          "code": "N7632EMBC",
          "name": "NR V2X 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for NR V2X",
          "category": "Automotive Software",
          "priceEstimate": "+$7,500",
          "supportsLicense": true,
          "description": "NR V2X 侧链通信测试波形导出与回放。",
          "englishDescription": "PathWave Signal Generation for NR V2X (file export)."
        },
        {
          "id": "N7606EMBC",
          "code": "N7606EMBC",
          "name": "Bluetooth 蓝牙测试信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for Bluetooth",
          "category": "Wireless Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及蓝牙 5 / BLE 低功耗波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for Bluetooth."
        },
        {
          "id": "N7607EMBC",
          "code": "N7607EMBC",
          "name": "DFS 与 DAA 雷达脉冲剖面波形生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for DFS and DAA Profiles",
          "category": "Wireless Software",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "Wi-Fi 动态频率选择 (DFS) 雷达脉冲波形库。",
          "englishDescription": "PathWave Signal Generation for DFS and DAA Profiles."
        },
        {
          "id": "N7610EMBC",
          "code": "N7610EMBC",
          "name": "IoT 物联网信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for IoT",
          "category": "Wireless Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "涵盖 LoRa、ZigBee、Wi-SUN、Z-Wave 等物联网协议波形生成。",
          "englishDescription": "PathWave Signal Generation for IoT."
        },
        {
          "id": "N7617EMBC",
          "code": "N7617EMBC",
          "name": "WLAN 802.11 信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for WLAN 802.11",
          "category": "Wireless Software",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "传统 802.11a/b/g/n/ac/ax/be 全系列 Wi-Fi 波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for WLAN 802.11."
        },
        {
          "id": "N7611EMBC",
          "code": "N7611EMBC",
          "name": "广播电台信号生成软件 (Broadcast Radio)",
          "englishName": "PathWave Signal Generation for Broadcast Radio",
          "category": "Broadcasting Software",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "支持 AM、FM 立体声、RDS、DAB/DAB+ 广播电台测试信号生成。",
          "englishDescription": "PathWave Signal Generation for Broadcast Radio."
        },
        {
          "id": "N7623EMBC",
          "code": "N7623EMBC",
          "name": "数字电视与卫星广播信号生成软件 (Digital Video / DVB-S/S2/S2X)",
          "englishName": "PathWave Signal Generation for Digital Video",
          "category": "Broadcasting Software",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "支持 DVB-T/T2、ATSC、ISDB-T 以及 DVB-S/S2/S2X 卫星电视广播测试信号。",
          "englishDescription": "PathWave Signal Generation for Digital Video (including DVB-S/S2/S2X)."
        },
        {
          "id": "N7640EMBC",
          "code": "N7640EMBC",
          "name": "专业移动无线电信号生成软件 (LMR / APCO P25 / TETRA / DMR)",
          "englishName": "PathWave Signal Generation for LMR",
          "category": "LMR Software",
          "priceEstimate": "+$5,500",
          "supportsLicense": true,
          "description": "专网与集群通信标准 (APCO P25、TETRA、DMR、dPMR) 测试波形生成。",
          "englishDescription": "PathWave Signal Generation for LMR."
        },
        {
          "id": "N7609EMBC",
          "code": "N7609EMBC",
          "name": "GNSS 卫星导航信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for Global Navigation Satellite Systems (GNSS)",
          "category": "GNSS Software",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "基于离线文件导出的 GNSS 多星座多频段卫星信号模拟。",
          "englishDescription": "PathWave Signal Generation for GNSS (file export based)."
        },
        {
          "id": "N7620EMBC",
          "code": "N7620EMBC",
          "name": "Signal Studio 脉冲构建软件 (File Export)",
          "englishName": "Signal Studio for Pulse Building",
          "category": "Radar Software",
          "priceEstimate": "+$9,500",
          "supportsLicense": true,
          "description": "离线脉冲雷达库与自定义威胁脉冲串生成。",
          "englishDescription": "Signal Studio for Pulse Building (file export)."
        },
        {
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 仿真软件商业许可 (MATLAB Software)",
          "englishName": "MATLAB software",
          "category": "MATLAB Software",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "MathWorks 原厂 MATLAB 正版许可，便于在仪表内直接进行算法交互设计。",
          "englishDescription": "MATLAB software directly integrated for algorithm testing."
        },
        {
          "id": "N7608EMBC",
          "code": "N7608EMBC",
          "name": "自定义调制信号生成软件 (File Export)",
          "englishName": "PathWave Signal Generation for custom modulation",
          "category": "General Purpose",
          "priceEstimate": "+$5,500",
          "supportsLicense": true,
          "description": "离线自定义 IQ 调制波形设计与导出。",
          "englishDescription": "PathWave Signal Generation for custom modulation (file export)."
        },
        {
          "id": "N7618APPC",
          "code": "N7618APPC",
          "name": "高级波形实用程序 (Advanced Waveform Utility - AWU)",
          "englishName": "PathWave Signal Generation Advanced Waveform Utility (AWU)",
          "category": "General Purpose",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "便捷的波形文件管理、裁剪、拼接与格式转换工具。",
          "englishDescription": "PathWave Signal Generation Advanced Waveform Utility (AWU)."
        },
        {
          "id": "N7650B-221",
          "code": "N7650B-221",
          "name": "Signal Studio 5 包波形许可 (5-Pack Waveform License)",
          "englishName": "Waveform license 5-pack",
          "category": "Waveform Pack",
          "priceEstimate": "+$2,500",
          "supportsLicense": true,
          "description": "允许永久回放 5 种任意由 Signal Studio 软件生成的测试波形。",
          "englishDescription": "Waveform license 5-pack for Signal Studio playback."
        },
        {
          "id": "N7650B-250",
          "code": "N7650B-250",
          "name": "Signal Studio 50 包波形许可 (50-Pack Waveform License)",
          "englishName": "Waveform license 50-pack",
          "category": "Waveform Pack",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "允许永久回放 50 种任意由 Signal Studio 软件生成的测试波形。",
          "englishDescription": "Waveform license 50-pack for Signal Studio playback."
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "选择硬件附件与同轴适配器 (Select Accessories & Adapters)",
      "englishTitle": "Select Accessories & Adapters",
      "subtitle": "机架安装套件、散热垫板、可拆卸固态硬盘、通道绑定线缆及精密同轴适配器",
      "englishSubtitle": "Rack mount kit, cooling spacer, removable SSD, channel bonding kits, and coaxial adapters.",
      "type": "multiple",
      "options": [
        {
          "id": "Y1257A",
          "code": "Y1257A",
          "name": "M9484C 专用 19 英寸机架安装套件 (Rack Mount Kit)",
          "englishName": "Rack mount kit for M9484C",
          "category": "Accessories",
          "priceEstimate": "+$850",
          "description": "用于将 M9484C 仪表安装在 19 英寸机柜的法兰与导轨附件。",
          "englishDescription": "Rack mount kit for M9484C."
        },
        {
          "id": "Y1276A",
          "code": "Y1276A",
          "name": "高导热散热垫板组件 (Cooling Spacer Kit)",
          "englishName": "Cooling spacer kit",
          "category": "Accessories",
          "priceEstimate": "+$620",
          "description": "多台仪表在台面或机柜中上下堆叠放置时必选，确保垂直风道通风顺畅。",
          "englishDescription": "Cooling spacer kit. Required when additional instrumentation is stacked."
        },
        {
          "id": "M9484CK-S03",
          "code": "M9484CK-S03",
          "name": "备用 256 GB 可拆卸固态硬盘 (Windows 11)",
          "englishName": "Additional 256 GB removable solid-state drive, Windows 11",
          "category": "Accessories",
          "priceEstimate": "+$1,200",
          "description": "适用于保密实验室安全防护的 256 GB 预装 Windows 11 备用可拔插 SSD。",
          "englishDescription": "Additional 256 GB removable solid-state drive (Windows 11)."
        },
        {
          "id": "M9484CK-S06",
          "code": "M9484CK-S06",
          "name": "备用 1 TB 大容量可拆卸固态硬盘 (Windows 11)",
          "englishName": "Additional 1 TB removable solid-state drive, Windows 11",
          "category": "Accessories",
          "priceEstimate": "+$2,400",
          "description": "1 TB 大容量预装 Windows 11 可拆卸固态硬盘。",
          "englishDescription": "Additional 1 TB removable solid-state drive (Windows 11)."
        },
        {
          "id": "Y1166A",
          "code": "Y1166A",
          "name": "通道绑定套件 (适用于 6、8.5、14 或 20 GHz 频段)",
          "englishName": "Channel bonding kit for VXG, 6, 8.5, 14, or 20 GHz frequency options",
          "category": "Accessories",
          "priceEstimate": "+$4,800",
          "requires": [
            "M9484C-CB5"
          ],
          "description": "包含精密移相器与高精度匹配射频电缆，用于 20 GHz 以下通道绑定 (需 Option CB5)。",
          "englishDescription": "Channel bonding kit for VXG, 6/8.5/14/20 GHz options. Requires CB5."
        },
        {
          "id": "Y1167A",
          "code": "Y1167A",
          "name": "毫米波通道绑定套件 (适用于 31.8、44 或 54 GHz 频段)",
          "englishName": "Channel bonding kit for VXG, 31.8, 44, or 54 GHz frequency options",
          "category": "Accessories",
          "priceEstimate": "+$7,800",
          "requires": [
            "M9484C-CB5"
          ],
          "description": "毫米波精密通道绑定电缆与移相组件 (需 Option CB5)。",
          "englishDescription": "Channel bonding kit for VXG, 31.8/44/54 GHz options. Requires CB5."
        },
        {
          "id": "Y1305A",
          "code": "Y1305A",
          "name": "多机级联同步精密电缆套件 (Multi-Instrument Sync Cable Kit)",
          "englishName": "Multi-instrument synchronization cable kit",
          "category": "Accessories",
          "priceEstimate": "+$3,200",
          "requires": [
            "M9484C-SNC"
          ],
          "description": "提供 4 根严格等长匹配的 SMA 同步电缆 (推荐与 Option SNC 搭配)。",
          "englishDescription": "Multi-instrument synchronization cable kit. Recommended with SNC."
        },
        {
          "id": "Y1306A",
          "code": "Y1306A",
          "name": "光纤数字接口电缆 (1 米)",
          "englishName": "Optical data interface cable, 1m",
          "category": "Accessories",
          "priceEstimate": "+$480",
          "description": "高速光纤数据流电缆 (推荐与 Option DS1 搭配)。",
          "englishDescription": "Optical data interface cable, 1m. Recommended with DS1."
        },
        {
          "id": "Y1308A",
          "code": "Y1308A",
          "name": "AUX IO 模拟辅助转接分支电缆",
          "englishName": "AUX IO breakout cable",
          "category": "Accessories",
          "priceEstimate": "+$380",
          "description": "将机身 AUX IO 端口转出多路 BNC 接口 (推荐与 Option AN1 搭配)。",
          "englishDescription": "AUX IO breakout cable. Recommended with AN1."
        },
        {
          "id": "N5520B",
          "code": "N5520B",
          "name": "1.85 mm (f) 至 1.85 mm (f) 精密同轴适配器 (DC 至 67 GHz)",
          "englishName": "Adapter, 1.85 mm (f) to 1.85 mm (f), DC to 67 GHz",
          "category": "Adapters",
          "priceEstimate": "+$680",
          "description": "DC 至 67 GHz 精密同轴适配器 (54 GHz 选件 554 出厂已随附 1 个)。",
          "englishDescription": "Adapter, 1.85 mm (f) to 1.85 mm (f), DC to 67 GHz. One included with 554."
        },
        {
          "id": "11900B",
          "code": "11900B",
          "name": "2.4 mm (f) 至 2.4 mm (f) 精密同轴适配器 (DC 至 50 GHz)",
          "englishName": "Adapter, 2.4 mm (f) to 2.4 mm (f), DC to 50 GHz",
          "category": "Adapters",
          "priceEstimate": "+$520",
          "description": "DC 至 50 GHz 精密同轴转接器 (44GHz/31.8GHz 选件 544/532 出厂已随附 1 个)。",
          "englishDescription": "Adapter, 2.4 mm (f) to 2.4 mm (f), DC to 50 GHz. One included with 544/532."
        },
        {
          "id": "83059B",
          "code": "83059B",
          "name": "3.5 mm (f) 至 3.5 mm (f) 精密同轴适配器 (DC 至 26.5 GHz)",
          "englishName": "Coaxial Adapter, 3.5 mm (f) to 3.5 mm (f), DC to 26.5 GHz",
          "category": "Adapters",
          "priceEstimate": "+$320",
          "description": "DC 至 26.5 GHz 同轴适配器 (20GHz/14GHz 选件 520/514 出厂已随附 1 个)。",
          "englishDescription": "Coaxial Adapter, 3.5 mm (f) to 3.5 mm (f), DC to 26.5 GHz. One included with 520/514."
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择 KeysightCare 保修、服务保障与校准 (Add Services & Calibration)",
      "englishTitle": "Add Services & Calibration",
      "subtitle": "出厂包含 1 年 KeysightCare Assured，可升级延长 Enhanced 2/3/5 年服务",
      "englishSubtitle": "Includes 1 year KeysightCare Assured. Upgrade or extend to KeysightCare Enhanced 2, 3, or 5 years.",
      "type": "multiple",
      "options": [
        {
          "id": "R-55A-001-1",
          "code": "R-55A-001-1",
          "name": "KeysightCare Assured 首年服务保障 (出厂标配)",
          "englishName": "KeysightCare Assured First Year Support",
          "category": "Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含 KeysightCare 首年专属技术支持与快速返厂保修服务。",
          "englishDescription": "KeysightCare Assured First Year Support included by default."
        },
        {
          "id": "R-51B-001-C",
          "code": "R-51B-001-C",
          "name": "1 年原厂硬件保修 (1-Year Return-to-Keysight Warranty)",
          "englishName": "1-year return-to-Keysight warranty",
          "category": "Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含 1 年原厂硬件保修服务。",
          "englishDescription": "1-year return-to-Keysight warranty included by default."
        },
        {
          "id": "R-55B-001-1",
          "code": "R-55B-001-1",
          "name": "KeysightCare Enhanced 增强型服务保障 - 升级第 1 年",
          "englishName": "KeysightCare Enhanced - Upgrade 1 year",
          "category": "Services",
          "priceEstimate": "+$3,800",
          "description": "首年升级至 Enhanced 服务：包含技术支持、保修及原厂定期计量校准。",
          "englishDescription": "KeysightCare Enhanced - Upgrade 1 year (includes Tech Support, Warranty and Calibration)."
        },
        {
          "id": "R-55B-001-2",
          "code": "R-55B-001-2",
          "name": "KeysightCare Enhanced 增强型服务保障 - 延长至 2 年",
          "englishName": "KeysightCare Enhanced - Extend to 2 years",
          "category": "Services",
          "priceEstimate": "+$7,200",
          "description": "延长服务至 2 年期 (包含技术支持、保修及计量校准)。",
          "englishDescription": "KeysightCare Enhanced - Extend to 2 years."
        },
        {
          "id": "R-55B-001-3",
          "code": "R-55B-001-3",
          "name": "KeysightCare Enhanced 增强型服务保障 - 延长至 3 年 (推荐选件)",
          "englishName": "KeysightCare Enhanced - Extend to 3 years (Recommended)",
          "category": "Services",
          "priceEstimate": "+$11,500",
          "description": "官方最推荐的服务保障期限：3 年期全方位保修、优先技术支持与全套定期校准。",
          "englishDescription": "KeysightCare Enhanced - Extend to 3 years (Recommended)."
        },
        {
          "id": "R-55B-001-5",
          "code": "R-55B-001-5",
          "name": "KeysightCare Enhanced 增强型服务保障 - 延长至 5 年",
          "englishName": "KeysightCare Enhanced - Extend to 5 years",
          "category": "Services",
          "priceEstimate": "+$18,800",
          "description": "5 年长期投资保障，彻底消除后续设备维护与校准预算审批难题。",
          "englishDescription": "KeysightCare Enhanced - Extend to 5 years."
        }
      ]
    }
  ]
};
