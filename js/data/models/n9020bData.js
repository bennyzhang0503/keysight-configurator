// Keysight N9020B Configurator Dataset
export const N9020B_DATA = {
  "id": "N9020B",
  "name": "N9020B MXA Signal Analyzer",
  "subtitle": "10 Hz to 50 GHz High-Performance X-Series Signal Analyzer",
  "family": "Signal Analyzers (X-Series)",
  "docNumber": "5992-1254 / N9020B",
  "description": "The Keysight N9020B MXA is a mid-performance X-Series signal analyzer designed for wireless test up to 50 GHz with up to 160 MHz analysis bandwidth, real-time spectrum analysis, and fast sweep.",
  "baseSpecs": {
    "display": "10.6-inch capacitive multi-touch display (1280 x 800)",
    "processor": "Quad-core high-performance processor, 16 GB RAM",
    "storage": "Removable M.2 NVMe Solid-State Drive (SSD)",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "25 MHz Analysis Bandwidth (Option B25)",
    "standardAttenuator": "Mechanical Attenuator (0 to 70 dB in 2 dB steps)",
    "standardApps": "Spectrum Analyzer and IQ Analyzer Application (Standard)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最大频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选选件（7 选 1），决定仪表的最高测试频率上限",
      "englishSubtitle": "Required option (Choose 1). Determines the maximum measurement frequency range.",
      "type": "single",
      "options": [
        {
          "id": "N9020B-503",
          "code": "N9020B-503",
          "name": "频率范围 10 Hz 至 3.6 GHz",
          "englishName": "Frequency range, 10 Hz to 3.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$18,500",
          "freqMaxGHz": 3.6,
          "description": "涵盖射频频段，适用于通用无线通信、广播与基带谐波测试。",
          "englishDescription": "Covers RF frequency band up to 3.6 GHz for general wireless communications and harmonics test."
        },
        {
          "id": "N9020B-508",
          "code": "N9020B-508",
          "name": "频率范围 10 Hz 至 8.4 GHz",
          "englishName": "Frequency range, 10 Hz to 8.4 GHz",
          "category": "Frequency",
          "priceEstimate": "$24,200",
          "freqMaxGHz": 8.4,
          "description": "涵盖 Sub-6GHz 通信频段（C-band、Wi-Fi 6E 及 5G FR1 频段）。",
          "englishDescription": "Covers Sub-6GHz frequency range suitable for Wi-Fi 6E and 5G FR1 tests."
        },
        {
          "id": "N9020B-513",
          "code": "N9020B-513",
          "name": "频率范围 10 Hz 至 13.6 GHz",
          "englishName": "Frequency range, 10 Hz to 13.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$32,800",
          "freqMaxGHz": 13.6,
          "description": "适用于 X 波段雷达、卫星通信及微波中继测试。",
          "englishDescription": "Suitable for X-band radar, satellite communications, and microwave link testing."
        },
        {
          "id": "N9020B-526",
          "code": "N9020B-526",
          "name": "频率范围 10 Hz 至 26.5 GHz",
          "englishName": "Frequency range, 10 Hz to 26.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$42,500",
          "freqMaxGHz": 26.5,
          "description": "覆盖 K 波段及 24 GHz 5G mmWave 毫米波频段测试需求。",
          "englishDescription": "Covers K-band and 24 GHz 5G mmWave frequency measurement requirements."
        },
        {
          "id": "N9020B-532",
          "code": "N9020B-532",
          "name": "频率范围 10 Hz 至 32 GHz",
          "englishName": "Frequency range, 10 Hz to 32 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,600",
          "freqMaxGHz": 32,
          "description": "扩展频率至 32 GHz，全面涵盖 Ka 波段与 28 GHz 5G 毫米波应用。",
          "englishDescription": "Extends frequency to 32 GHz for Ka-band and 28 GHz 5G mmWave applications."
        },
        {
          "id": "N9020B-544",
          "code": "N9020B-544",
          "name": "频率范围 10 Hz 至 44 GHz",
          "englishName": "Frequency range, 10 Hz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$58,200",
          "freqMaxGHz": 44,
          "description": "覆盖 Q 波段及 39 GHz 5G 毫米波全频段测试。",
          "englishDescription": "Covers Q-band and 39 GHz 5G mmWave spectrum testing."
        },
        {
          "id": "N9020B-550",
          "code": "N9020B-550",
          "name": "频率范围 10 Hz 至 50 GHz",
          "englishName": "Frequency range, 10 Hz to 50 GHz",
          "category": "Frequency",
          "priceEstimate": "$65,000",
          "freqMaxGHz": 50,
          "description": "全频段覆盖至 50 GHz，支持超高频微波、毫米波及外混频扩展至 THz。",
          "englishDescription": "Full frequency coverage up to 50 GHz, supporting high microwave and THz external mixing."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "增加前置放大器 (Add a Preamplifier)",
      "englishTitle": "Add a Preamplifier",
      "subtitle": "显著改善系统的灵敏度与显示平均噪声电平 (DANL)",
      "englishSubtitle": "Improves noise floor (DANL) for low-level signal measurements.",
      "type": "single",
      "options": [
        {
          "id": "N9020B-P03",
          "code": "N9020B-P03",
          "name": "前置放大器，100 kHz 至 3.6 GHz",
          "englishName": "Preamplifier, 100 kHz to 3.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$3,800",
          "freqLimitGHz": 3.6,
          "compatibleFreqs": [
            "503",
            "508",
            "513",
            "526",
            "532",
            "544",
            "550"
          ],
          "description": "提供最高 20 dB 增益，提升 3.6 GHz 以下低电平信号检测能力。",
          "englishDescription": "Provides up to 20 dB gain below 3.6 GHz for low-level signal detection."
        },
        {
          "id": "N9020B-P08",
          "code": "N9020B-P08",
          "name": "前置放大器，100 kHz 至 8.4 GHz",
          "englishName": "Preamplifier, 100 kHz to 8.4 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$5,500",
          "freqLimitGHz": 8.4,
          "compatibleFreqs": [
            "508",
            "513",
            "526",
            "532",
            "544",
            "550"
          ],
          "description": "提升最高 8.4 GHz 的微波低噪声检测特性。",
          "englishDescription": "Lowers noise floor up to 8.4 GHz for microwave testing."
        },
        {
          "id": "N9020B-P13",
          "code": "N9020B-P13",
          "name": "前置放大器，100 kHz 至 13.6 GHz",
          "englishName": "Preamplifier, 100 kHz to 13.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$7,200",
          "freqLimitGHz": 13.6,
          "compatibleFreqs": [
            "513",
            "526",
            "532",
            "544",
            "550"
          ],
          "description": "低噪声放大至 13.6 GHz，提升 X 波段信号小幅度解调精度。",
          "englishDescription": "Preamplification up to 13.6 GHz for X-band signal analysis."
        },
        {
          "id": "N9020B-P26",
          "code": "N9020B-P26",
          "name": "前置放大器，100 kHz 至 26.5 GHz",
          "englishName": "Preamplifier, 100 kHz to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$9,800",
          "freqLimitGHz": 26.5,
          "compatibleFreqs": [
            "526",
            "532",
            "544",
            "550"
          ],
          "description": "宽带前置放大至 26.5 GHz，改善 24 GHz 5G 毫米波灵敏度。",
          "englishDescription": "Wideband preamplification up to 26.5 GHz for 5G mmWave signals."
        },
        {
          "id": "N9020B-P32",
          "code": "N9020B-P32",
          "name": "前置放大器，100 kHz 至 32 GHz",
          "englishName": "Preamplifier, 100 kHz to 32 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$11,500",
          "freqLimitGHz": 32,
          "compatibleFreqs": [
            "532",
            "544",
            "550"
          ],
          "description": "覆盖 32 GHz 全频段低噪声放大。",
          "englishDescription": "Preamplification coverage up to 32 GHz."
        },
        {
          "id": "N9020B-P44",
          "code": "N9020B-P44",
          "name": "前置放大器，100 kHz 至 44 GHz",
          "englishName": "Preamplifier, 100 kHz to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$13,800",
          "freqLimitGHz": 44,
          "compatibleFreqs": [
            "544",
            "550"
          ],
          "description": "覆盖 44 GHz 全频段低噪声放大。",
          "englishDescription": "Full preamplification coverage up to 44 GHz."
        },
        {
          "id": "N9020B-P50",
          "code": "N9020B-P50",
          "name": "前置放大器，100 kHz 至 50 GHz",
          "englishName": "Preamplifier, 100 kHz to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$15,500",
          "freqLimitGHz": 50,
          "compatibleFreqs": [
            "550"
          ],
          "description": "全频段覆盖至 50 GHz，提供极致低噪灵敏度测试。",
          "englishDescription": "Full coverage preamplifier up to 50 GHz for ultra-low level signals."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择频率基准 (Choose Frequency Reference)",
      "englishTitle": "Choose Frequency Reference",
      "subtitle": "提高频率测量的准确度与长期稳定性",
      "englishSubtitle": "Improves frequency accuracy and long-term stability.",
      "type": "single",
      "options": [
        {
          "id": "N9020B-PFR-STD",
          "code": "Standard",
          "name": "标准频率基准 (Frequency Reference)",
          "englishName": "Standard Frequency Reference",
          "category": "Reference",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂包含标准频率基准，老化率 ±1x10^-6/年。",
          "englishDescription": "Standard frequency reference with aging rate ±1x10^-6/year."
        },
        {
          "id": "N9020B-PFR",
          "code": "N9020B-PFR",
          "name": "高精度频率基准 (Precision Frequency Reference)",
          "englishName": "Precision frequency reference",
          "category": "Reference",
          "priceEstimate": "+$2,200",
          "description": "提高时钟基准精度，老化率低至 ±1x10^-7/年，减少频漂误差。",
          "englishDescription": "Precision frequency reference with aging rate ±1x10^-7/year."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择衰减器 (Choose an Attenuator)",
      "englishTitle": "Choose an Attenuator",
      "subtitle": "调整输入射频电平，保护混频器并优化线性度",
      "englishSubtitle": "Adjusts input RF level to protect mixer and optimize linearity.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020B-ATT-STD",
          "code": "Standard",
          "name": "机械衰减器 (Mechanical Attenuator)",
          "englishName": "Standard Mechanical Attenuator",
          "category": "Attenuator",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂标配 0 至 70 dB 机械衰减器，2 dB 步进。",
          "englishDescription": "Standard 0 to 70 dB mechanical attenuator in 2 dB steps."
        },
        {
          "id": "N9020B-EA3",
          "code": "N9020B-EA3",
          "name": "电子衰减器，最高 3.6 GHz (Electronic Attenuator)",
          "englishName": "Electronic attenuator up to 3.6 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$2,800",
          "description": "在机械衰减器基础上增加 0 至 24 dB 电子衰减器（1 dB 步进），实现快速无磨损切换。",
          "englishDescription": "Adds 0 to 24 dB electronic attenuator (1 dB steps) up to 3.6 GHz for fast switching."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择分析带宽与微波预选器旁路 (Choose Analysis Bandwidth & MPB)",
      "englishTitle": "Choose Analysis Bandwidth & MPB",
      "subtitle": "决定宽带调制信号（5G NR、Wi-Fi 6E/7）解调的实时带宽上限",
      "englishSubtitle": "Determines real-time analysis bandwidth for wideband signals.",
      "type": "single",
      "options": [
        {
          "id": "N9020B-B25",
          "code": "Standard",
          "name": "25 MHz 分析带宽 (Standard)",
          "englishName": "25 MHz Analysis Bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "description": "出厂标配 25 MHz 实时解调分析带宽。",
          "englishDescription": "Standard 25 MHz analysis bandwidth."
        },
        {
          "id": "N9020B-B40",
          "code": "N9020B-B40",
          "name": "40 MHz 分析带宽 (40 MHz Analysis Bandwidth)",
          "englishName": "40 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$5,600",
          "bandwidthMHz": 40,
          "description": "扩展分析带宽至 40 MHz；频率 > 3.6 GHz 测量需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 40 MHz; requires Option MPB for > 3.6 GHz."
        },
        {
          "id": "N9020B-B85",
          "code": "N9020B-B85",
          "name": "85 MHz 分析带宽 (85 MHz Analysis Bandwidth)",
          "englishName": "85 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$11,200",
          "bandwidthMHz": 85,
          "description": "扩展分析带宽至 85 MHz；频率 > 3.6 GHz 测量需选 Option MPB；包含 DP2 与 DP4 授权。",
          "englishDescription": "Extends analysis bandwidth to 85 MHz; includes DP2 and DP4 capture memory."
        },
        {
          "id": "N9020B-B1A",
          "code": "N9020B-B1A",
          "name": "125 MHz 分析带宽 (125 MHz Analysis Bandwidth)",
          "englishName": "125 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$15,800",
          "bandwidthMHz": 125,
          "description": "扩展分析带宽至 125 MHz；频率 > 3.6 GHz 测量需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 125 MHz; requires Option MPB for > 3.6 GHz."
        },
        {
          "id": "N9020B-B1X",
          "code": "N9020B-B1X",
          "name": "160 MHz 分析带宽 (160 MHz Analysis Bandwidth)",
          "englishName": "160 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$19,500",
          "bandwidthMHz": 160,
          "description": "扩展分析带宽至 160 MHz (满足 Wi-Fi 6E 160MHz 宽信道解调)；频率 > 3.6 GHz 需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 160 MHz for Wi-Fi 6E 160MHz channel testing."
        },
        {
          "id": "N9020B-MPB",
          "code": "N9020B-MPB",
          "name": "微波预选器旁路 (Microwave Preselector Bypass)",
          "englishName": "Microwave preselector bypass",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$4,200",
          "requires": [
            "N9020B-B40"
          ],
          "description": "在 > 3.6 GHz 进行 B40/B85/B1A/B1X 宽带宽测量时必需；开启快速扫描功能。",
          "englishDescription": "Required for wideband measurements (>3.6 GHz) with B40, B85, B1A, B1X."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择性能与接口选项 (Choose Performance Options)",
      "englishTitle": "Choose Performance Options",
      "subtitle": "捕获内存扩展、模拟 I/Q 输入、太赫兹外混频与底噪扩展技术",
      "englishSubtitle": "Capture memory, analog I/Q inputs, external mixing to 1.1 THz, and noise floor extension.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020B-DP2",
          "code": "N9020B-DP2",
          "name": "2 GB 捕获内存数字处理器 (DP2)",
          "englishName": "Digital processor with 2 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$3,200",
          "description": "选配 B40/B85/B1A/B1X 时随附包含；支持 IQ 深度录制与快速抓包。",
          "englishDescription": "Included with B40/B85/B1A/B1X; enables deep IQ recording."
        },
        {
          "id": "N9020B-DP4",
          "code": "N9020B-DP4",
          "name": "4 GB 深度捕获内存数字处理器 (DP4)",
          "englishName": "Digital processor with 4 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$5,500",
          "description": "4 GB 深度 IQ 捕获内存；选配 B85/B1A/B1X 时随附包含。",
          "englishDescription": "Provides 4 GB deep IQ capture memory."
        },
        {
          "id": "N9020B-BBA",
          "code": "N9020B-BBA",
          "name": "模拟 I/Q 基带输入接口 (Analog I/Q Inputs)",
          "englishName": "I/Q baseband inputs, analog",
          "category": "Performance",
          "priceEstimate": "+$6,500",
          "description": "提供单端/差分模拟 BBIQ 基带信号直接输入接口。",
          "englishDescription": "Provides single-ended/differential analog baseband IQ inputs."
        },
        {
          "id": "N9020B-EXM",
          "code": "N9020B-EXM",
          "name": "外部混频接口 (External Mixing up to 1.1 THz)",
          "englishName": "External mixing",
          "category": "Performance",
          "priceEstimate": "+$4,800",
          "description": "提供 LO 出/中频进 SMA 端口，连接 Keysight 或第三方混频器将频率扩展至 1.1 THz。",
          "englishDescription": "Connects external mixers to extend frequency coverage up to 1.1 THz."
        },
        {
          "id": "N9020B-NF2",
          "code": "N9020B-NF2",
          "name": "底噪扩展技术 (Noise Floor Extension)",
          "englishName": "Noise floor extension",
          "category": "Performance",
          "priceEstimate": "+$4,500",
          "description": "通过对系统底噪建模消除，改善显示平均噪声电平 (DANL) 性能达 10 dB。",
          "englishDescription": "Improves DANL performance by up to 10 dB via noise floor modeling."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "增加实时频谱分析 (Add Real-Time Spectrum Analysis)",
      "englishTitle": "Add Real-Time Spectrum Analysis",
      "subtitle": "160 MHz 实时带宽，捕捉瞬态、跳频及同频干扰信号",
      "englishSubtitle": "Real-time spectrum analysis up to 160 MHz for transient signal capture.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020RT1B",
          "code": "N9020RT1B",
          "name": "160 MHz 实时频谱分析 (基础检测, 最小 17.3us 100% POI)",
          "englishName": "Real-time analysis up to max BW, Basic Detection",
          "category": "RTSA",
          "priceEstimate": "+$12,500",
          "requires": [
            "N9020B-B85"
          ],
          "description": "包含频率掩码触发 (FMT)，保证 100% 截获概率的最短信号持续时间为 17.3 us。",
          "englishDescription": "Real-time analysis up to 160 MHz with 17.3 us 100% POI signal capture."
        },
        {
          "id": "N9020RT2B",
          "code": "N9020RT2B",
          "name": "160 MHz 实时频谱分析 (最佳检测, 最小 3.6us 100% POI)",
          "englishName": "Real-time analysis up to max BW, Optimum Detection",
          "category": "RTSA",
          "priceEstimate": "+$18,500",
          "requires": [
            "N9020B-B85"
          ],
          "description": "包含 FMT 与 TQT 触发，保证 100% 截获概率的最短信号持续时间低至 3.6 us。",
          "englishDescription": "Optimum real-time analysis up to 160 MHz with 3.6 us 100% POI signal capture."
        },
        {
          "id": "N90EMFT1B",
          "code": "N90EMFT1B",
          "name": "频率掩码触发 FMT 基础检测 (Frequency Mask Trigger Basic)",
          "englishName": "Frequency mask trigger, basic detection",
          "category": "RTSA",
          "priceEstimate": "+$3,200",
          "description": "为脉冲分析与 89600 VSA 软件提供 17.3 us 基础 FMT 触发功能。",
          "englishDescription": "Enables basic frequency mask triggering for pulse analysis and VSA software."
        },
        {
          "id": "N90EMFT2B",
          "code": "N90EMFT2B",
          "name": "频率掩码触发 FMT 最佳检测 (Frequency Mask Trigger Optimum)",
          "englishName": "Frequency mask trigger, optimum detection",
          "category": "RTSA",
          "priceEstimate": "+$5,500",
          "description": "提供 3.6 us 极短脉冲 FMT 最佳检测触发。",
          "englishDescription": "Enables optimum frequency mask triggering down to 3.6 us pulses."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "增加可选特性 (Add Optional Features)",
      "englishTitle": "Add Optional Features",
      "subtitle": "增强显示、EMC 预兼容、时域扫描与加速测量",
      "englishSubtitle": "Enhanced display, EMI pre-compliance, time domain scan, and fast power.",
      "type": "multiple",
      "options": [
        {
          "id": "N90EMEDPB",
          "code": "N90EMEDPB",
          "name": "增强显示软件包 (Enhanced Display Package)",
          "englishName": "Enhanced display package",
          "category": "Optional Feature",
          "priceEstimate": "+$1,800",
          "description": "包含 Spectrogram 语图、迹线放大 (Trace Zoom) 及区域 Span 观察。",
          "englishDescription": "Includes spectrogram, trace zoom, and zone span."
        },
        {
          "id": "N90EMEMCB",
          "code": "N90EMEMCB",
          "name": "基础 EMI 预兼容测量套件 (Basic EMI Pre-compliance)",
          "englishName": "Basic EMI pre-compliance",
          "category": "Optional Feature",
          "priceEstimate": "+$2,500",
          "description": "支持 CISPR 16-1-1 检波器、带宽及 Marker 监听调谐测量。",
          "englishDescription": "Performs EMI pre-compliance measurements with CISPR 16-1-1 detectors."
        },
        {
          "id": "N90EMTDSB",
          "code": "N90EMTDSB",
          "name": "时域扫描 (Time Domain Scan for EMC)",
          "englishName": "Time domain scan",
          "category": "Optional Feature",
          "priceEstimate": "+$3,200",
          "description": "大幅缩短 EMC 预兼容扫描测试时间；需搭配 N6141EM0E 及 DP2/B40。",
          "englishDescription": "Accelerates EMC scan speed via time domain processing."
        },
        {
          "id": "N90EMESCB",
          "code": "N90EMESCB",
          "name": "外部信号源控制接口 (External Source Control)",
          "englishName": "External source control",
          "category": "Optional Feature",
          "priceEstimate": "+$2,200",
          "description": "控制 EXG、MXG 及 PSG 矢量信号源进行扫频与增益测试。",
          "englishDescription": "Controls external Keysight signal generators for scalar/vector tests."
        },
        {
          "id": "N90EMFP2B",
          "code": "N90EMFP2B",
          "name": "快速功率测量加速 (Fast Power Measurement)",
          "englishName": "Fast power up to available max analysis BW",
          "category": "Optional Feature",
          "priceEstimate": "+$1,900",
          "description": "大幅提升 ACPR 及通道功率测试速度；需选配 B40/B85/B1A/B1X。",
          "englishDescription": "Accelerates ACPR and channel power measurement speed."
        },
        {
          "id": "N90EMRBEB",
          "code": "N90EMRBEB",
          "name": "零扫宽 RBW 扩展 (Resolution Bandwidth Extended)",
          "englishName": "Resolution bandwidth extended",
          "category": "Optional Feature",
          "priceEstimate": "+$1,600",
          "description": "在 Zero Span 模式下扩展最大分辨率带宽 RBW上限。",
          "englishDescription": "Extends maximum RBW in Zero Span mode."
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "增加安全功能 (Add Security Features)",
      "englishTitle": "Add Security Features",
      "subtitle": "可拆卸固态硬盘、保密数据擦除与内存启动",
      "englishSubtitle": "Removable SSD, data save prohibition, and RAM disk boot.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020B-SS7",
          "code": "N9020B-SS7",
          "name": "额外可拆卸 M.2 NVMe Win11 固态硬盘 (Additional SSD)",
          "englishName": "Additional removable M.2 NVMe SSD",
          "category": "Security",
          "priceEstimate": "+$1,500",
          "description": "提供第 2 块完全镜像安装好 Win11 系统与镜像的可拆卸 SSD 硬盘。",
          "englishDescription": "Provides additional fully-imaged removable SSD with Windows 11."
        },
        {
          "id": "N9020B-SF1",
          "code": "N9020B-SF1",
          "name": "安全特性: 禁止启动外部 Windows 程序",
          "englishName": "Security features, exclude launch programs",
          "category": "Security",
          "priceEstimate": "+$1,200",
          "description": "限制在仪表界面中调用或运行其他第三方 Windows 可执行文件。",
          "englishDescription": "Prevents launching external Windows programs from instrument application."
        },
        {
          "id": "N9020B-SF2",
          "code": "N9020B-SF2",
          "name": "安全特性: 禁止保存测量结果与配置",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$1,200",
          "description": "防止数据泄露，禁止将测试数据和用户配置文件写盘保存。",
          "englishDescription": "Prohibits saving measurement data or configurations to disk."
        },
        {
          "id": "N9020B-SF3",
          "code": "N9020B-SF3",
          "name": "安全特性: 内存 RAM Disk 引导加密",
          "englishName": "Security feature, secure RAM disk boot",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "系统引导进入易失性内存，断电后所有运行数据物理抹除。",
          "englishDescription": "Boots OS into volatile memory to clear data upon power cycle."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "增加后面板输出实用工具 (Add Rear Panel Output Utilities)",
      "englishTitle": "Add Rear Panel Output Utilities",
      "subtitle": "第二中频、任意中频、视频输出及 Real-time Link 接口",
      "englishSubtitle": "Second IF, arbitrary IF, video output, and Real-time Link.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020B-CR3",
          "code": "N9020B-CR3",
          "name": "第二中频输出 (Second IF Output)",
          "englishName": "Second IF output",
          "category": "Rear Output",
          "priceEstimate": "+$2,800",
          "description": "后面板 Aux IF 输出宽带第二中频信号。",
          "englishDescription": "Outputs wideband second IF on rear panel Aux IF connector."
        },
        {
          "id": "N9020B-CRP",
          "code": "N9020B-CRP",
          "name": "任意中频输出 (Arbitrary IF Output 10-75 MHz)",
          "englishName": "Arbitrary IF output",
          "category": "Rear Output",
          "priceEstimate": "+$2,800",
          "description": "提供 10 至 75 MHz 可调任意中频输出（500 kHz 步进）。",
          "englishDescription": "Outputs arbitrary IF from 10 to 75 MHz in 500 kHz steps."
        },
        {
          "id": "N9020B-YAS",
          "code": "N9020B-YAS",
          "name": "Y 轴屏幕视频输出 (Screen Video Output 0-1V)",
          "englishName": "Y-axis screen video output",
          "category": "Rear Output",
          "priceEstimate": "+$950",
          "description": "后面板输出 0 至 1V 模拟检波检波视频信号。",
          "englishDescription": "Provides 0-1V analog video output on rear panel."
        },
        {
          "id": "N9020B-RTL",
          "code": "N9020B-RTL",
          "name": "实时数据链路接口 Real-Time Link (LVDS)",
          "englishName": "Real-time link",
          "category": "Rear Output",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "随 B40/DP2 标配包含；连接 X-COM 记录仪或 N5106A PXB 进行高速数据流输出。",
          "englishDescription": "LVDS interface connecting to X-COM data recorder or N5106A PXB emulator."
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "选择测量应用软件 (Choose Measurement Software Applications)",
      "englishTitle": "Choose Measurement Software Applications",
      "subtitle": "5G NR、WLAN 11ax/be (Wi-Fi 6E/7)、相位噪声、噪声系数及蜂窝测试",
      "englishSubtitle": "5G NR, WLAN 11ac/ax/be, Phase Noise, Noise Figure, and Cellular apps.",
      "type": "multiple",
      "options": [
        {
          "id": "E9085EM0E",
          "code": "E9085EM0E",
          "name": "5G NR (New Radio) 测量应用软件",
          "englishName": "5G NR (New Radio)",
          "category": "Measurement App",
          "priceEstimate": "+$9,800",
          "requires": [
            "N9020B-B1A"
          ],
          "supportsLicense": true,
          "description": "支持 5G NR Sub-6GHz 下行与上行单键 3GPP 标准测量解调与 EVM 分析。",
          "englishDescription": "Standard-based 5G NR Sub-6GHz downlink and uplink measurement app."
        },
        {
          "id": "E9077EM1E",
          "code": "E9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6E) 测量应用软件",
          "englishName": "WLAN 802.11 ac/ax",
          "category": "Measurement App",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "支持 Wi-Fi 5 (11ac) 与 Wi-Fi 6/6E (11ax) 80MHz/160MHz 单键解调与调制品质测试。",
          "englishDescription": "Standard-based WLAN 802.11ac and 802.11ax Wi-Fi 6E measurement app."
        },
        {
          "id": "E9068EM0E",
          "code": "E9068EM0E",
          "name": "相位噪声测量应用软件 (Phase Noise)",
          "englishName": "Phase noise",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "提供频域 (对数图) 及时域 (斑点频率) 单键相位噪声测量功能。",
          "englishDescription": "One-button phase noise measurements in log plot and spot frequency."
        },
        {
          "id": "E9069EM0E",
          "code": "E9069EM0E",
          "name": "噪声系数测量应用软件 (Noise Figure)",
          "englishName": "Noise figure",
          "category": "Measurement App",
          "priceEstimate": "+$5,500",
          "requires": [
            "N9020B-P03"
          ],
          "supportsLicense": true,
          "description": "单键测量噪声系数 NF、增益及相关参数；配合 Keysight 智能噪声源及 U7227 外置前放。",
          "englishDescription": "One-button noise figure and gain measurements; requires preamplifier."
        },
        {
          "id": "E9054EM0E",
          "code": "E9054EM0E",
          "name": "通用数字调制解调软件 (VMA Digital Demodulation)",
          "englishName": "Vector modulation analysis Digital Demodulation",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "灵活分析 FSK、PSK、QAM、MSK、APSK 等 40 多种数字调制格式。",
          "englishDescription": "Flexible modulation analysis for FSK, PSK, QAM, MSK, APSK, etc."
        },
        {
          "id": "E9054EM1E",
          "code": "E9054EM1E",
          "name": "Custom OFDM 自定义 OFDM 调制解调软件",
          "englishName": "Vector modulation analysis Custom OFDM",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "自定义 OFDM 调制参数或载入 89600 VSA / Signal Studio 文件的解调测试。",
          "englishDescription": "Custom OFDM modulation analysis with user-defined presets."
        },
        {
          "id": "E9067EM0E",
          "code": "E9067EM0E",
          "name": "脉冲分析应用软件 (Pulse Analysis)",
          "englishName": "Pulse analysis",
          "category": "Measurement App",
          "priceEstimate": "+$5,800",
          "requires": [
            "N9020B-DP4"
          ],
          "supportsLicense": true,
          "description": "雷达射频脉冲信号时域相位、频率及统计特征表征；需 4 GB DP4 内存。",
          "englishDescription": "Characterize pulsed RF signals in time domain with 4 GB DP4 memory."
        },
        {
          "id": "E9081EM0E",
          "code": "E9081EM0E",
          "name": "Bluetooth 蓝牙测量应用软件 (Bluetooth 5 / BLE)",
          "englishName": "Bluetooth",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及 Low Energy 4.0/4.2/5 单键测量分析。",
          "englishDescription": "Bluetooth BR/EDR and Low Energy 4.0/4.2/5 measurement app."
        },
        {
          "id": "E9080EM0E",
          "code": "E9080EM0E",
          "name": "LTE/LTE-Advanced FDD 测量应用软件",
          "englishName": "LTE/LTE-Advanced FDD",
          "category": "Measurement App",
          "priceEstimate": "+$5,600",
          "supportsLicense": true,
          "description": "标准 LTE 及 LTE-A FDD 载波聚合信号解调与调制分析。",
          "englishDescription": "Standard-based LTE and LTE-Advanced FDD measurement app."
        },
        {
          "id": "E9082EM0E",
          "code": "E9082EM0E",
          "name": "LTE/LTE-Advanced TDD 测量应用软件",
          "englishName": "LTE/LTE-Advanced TDD",
          "category": "Measurement App",
          "priceEstimate": "+$5,600",
          "supportsLicense": true,
          "description": "标准 LTE 及 LTE-A TDD 信号解调与调制分析。",
          "englishDescription": "Standard-based LTE and LTE-Advanced TDD measurement app."
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择 89600 VSA 矢量信号分析软件 (Choose 89600 VSA Software)",
      "englishTitle": "Choose 89600 VSA Software",
      "subtitle": "业界标杆级的矢量调制解调与高级信号故障诊断分析软件",
      "englishSubtitle": "Industry standard vector signal analysis and troubleshooting software.",
      "type": "multiple",
      "options": [
        {
          "id": "89601200C",
          "code": "89601200C",
          "name": "89600 VSA 基础矢量信号分析软件主程序 (Core)",
          "englishName": "Basic vector signal analysis and hardware connectivity",
          "category": "VSA Software",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "89600 VSA 核心软件平台，提供时域、频域测量及硬件控制连接。",
          "englishDescription": "89600 VSA core application providing basic measurement platform."
        },
        {
          "id": "89601AYAC",
          "code": "89601AYAC",
          "name": "数字调制解调分析选件 (>40 种格式)",
          "englishName": "Digital demodulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$3,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "分析 FSK、PSK、QAM、APSK 等 40 多种调制格式与自定义星座图。",
          "englishDescription": "Digital demodulation for over 40 formats including custom APSK."
        },
        {
          "id": "89601BHNC",
          "code": "89601BHNC",
          "name": "5G NR 调制解调分析选件",
          "englishName": "5G NR modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$6,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "5G NR 3GPP 规范下行与上行调制解调分析选件。",
          "englishDescription": "5G NR downlink and uplink modulation analysis."
        },
        {
          "id": "89601BHXC",
          "code": "89601BHXC",
          "name": "WLAN 802.11n/ac/ax (Wi-Fi 6E) 调制分析选件",
          "englishName": "High throughput WLAN modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$4,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "高吞吐量 WLAN 802.11n/ac/ax 解调与 EVM 细化图表。",
          "englishDescription": "WLAN 802.11n/ac/ax high throughput modulation analysis."
        },
        {
          "id": "N9029AE13",
          "code": "N9029AE13",
          "name": "VDI 75 至 110 GHz 太赫兹频段扩频模块",
          "englishName": "VDI 75 to 110 GHz THz frequency extension module",
          "category": "THz Extension",
          "priceEstimate": "+$16,500",
          "description": "75 至 110 GHz 太赫兹信号分析。"
        }
      ]
    },
    {
      "id": "step13",
      "stepNumber": 13,
      "title": "选购物理外观、配件与扩展混频器 (Choose Accessories & Mixers)",
      "englishTitle": "Choose Accessories & External Mixers",
      "subtitle": "前面板保护盖、机架安装套件、太赫兹波导混频器与外置前放",
      "englishSubtitle": "Front cover, rackmount kit, waveguide mixers up to 1.1 THz, and USB preamps.",
      "type": "multiple",
      "options": [
        {
          "id": "CV1117A",
          "code": "CV1117A",
          "name": "前面板硬质保护罩 (Front Panel Cover)",
          "englishName": "Front panel cover",
          "category": "Accessories",
          "priceEstimate": "+$180",
          "description": "坚固的前面板橡胶保护罩，运输与搬运时保护显示屏与 RF 接口。",
          "englishDescription": "Protective rubber cover for front panel."
        },
        {
          "id": "1CM113A",
          "code": "1CM113A",
          "name": "机架安装法兰套件 (Rack Mount Kit)",
          "englishName": "Rack mount",
          "category": "Rackmount",
          "priceEstimate": "+$320",
          "description": "为 MXA 仪表增加 19 英寸标准机架安装法兰。",
          "englishDescription": "Adds rack mount flanges to the MXA."
        },
        {
          "id": "1CN103A",
          "code": "1CN103A",
          "name": "前面板便携把手套件 (Front Handles)",
          "englishName": "Front handles",
          "category": "Accessories",
          "priceEstimate": "+$220",
          "description": "在前面板两侧增加提手，便于搬运与机架拉出。",
          "englishDescription": "Adds front handles to the MXA."
        },
        {
          "id": "1CP105A",
          "code": "1CP105A",
          "name": "机架安装法兰与把手组合套件",
          "englishName": "Rack mount with handles",
          "category": "Rackmount",
          "priceEstimate": "+$480",
          "description": "同时增加机架安装法兰与前面板提手。",
          "englishDescription": "Adds rack mount flanges and handles to the MXA."
        },
        {
          "id": "M1970V-001",
          "code": "M1970V-001",
          "name": "V 波段波导谐波混频器 (50 至 75 GHz)",
          "englishName": "V-band waveguide harmonic mixer, 50 to 75 GHz",
          "category": "Mixer",
          "priceEstimate": "+$8,500",
          "requires": [
            "N9020B-EXM"
          ],
          "description": "智能 USB 混频器，扩展频率测量范围至 50-75 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 50 to 75 GHz."
        },
        {
          "id": "M1970W",
          "code": "M1970W",
          "name": "W 波段波导谐波混频器 (75 至 110 GHz)",
          "englishName": "W-band waveguide harmonic mixer, 75 to 110 GHz",
          "category": "Mixer",
          "priceEstimate": "+$11,800",
          "requires": [
            "N9020B-EXM"
          ],
          "description": "智能 USB 混频器，扩展频率测量范围至 75-110 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 75 to 110 GHz."
        },
        {
          "id": "N9029BV-W01",
          "code": "N9029BV-W01",
          "name": "VDI 太赫兹频率扩展模块 (750 至 1100 GHz / 1.1 THz)",
          "englishName": "750 to 1100 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$38,500",
          "requires": [
            "N9020B-EXM"
          ],
          "description": "太赫兹信号分析频率扩展模块，最高扩展测量至 1.1 THz；需 Option EXM。",
          "englishDescription": "VDI THz frequency extension module up to 1.1 THz."
        },
        {
          "id": "U7227A",
          "code": "U7227A",
          "name": "USB 外置前置放大器 (10 MHz 至 4 GHz)",
          "englishName": "USB external preamplifier, 10 MHz to 4 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$2,800",
          "description": "USB 供电外置高增益低噪前置放大器，适用于远端天线近场测试。",
          "englishDescription": "USB external preamplifier from 10 MHz to 4 GHz."
        },
        {
          "id": "U7227C",
          "code": "U7227C",
          "name": "USB 外置前置放大器 (100 MHz 至 26.5 GHz)",
          "englishName": "USB external preamplifier, 0.1 to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$5,200",
          "description": "USB 供电外置前置放大器，覆盖至 26.5 GHz。",
          "englishDescription": "USB external preamplifier up to 26.5 GHz."
        },
        {
          "id": "U7227F",
          "code": "U7227F",
          "name": "USB 外置前置放大器 (2 GHz 至 50 GHz)",
          "englishName": "USB external preamplifier, 2 to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$8,500",
          "description": "USB 供电外置毫米波前置放大器，覆盖至 50 GHz。",
          "englishDescription": "USB external preamplifier up to 50 GHz."
        }
      ]
    },
    {
      "id": "step14",
      "stepNumber": 14,
      "title": "选择校准、技术培训与支持服务 (Add Calibration & Support Services)",
      "englishTitle": "Add Calibration & Support Services",
      "subtitle": "出厂商业校准证书、ISO 17025 认可校准与延长保修保障计划",
      "englishSubtitle": "Commercial calibration, ISO 17025 accredited calibration, and extended warranty.",
      "type": "multiple",
      "options": [
        {
          "id": "N9020B-UK6",
          "code": "N9020B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$650",
          "description": "仅在购买仪表时提供，附带工厂全套实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "N9020B-AMG",
          "code": "N9020B-AMG",
          "name": "Keysight ISO 17025A 认可校准证书",
          "englishName": "Keysight Calibration + Uncertainties + Guardbanding",
          "category": "Calibration",
          "priceEstimate": "+$1,200",
          "description": "出厂提供符合 ISO 17025A 标准的带不确定度评估校准报告。",
          "englishDescription": "ISO 17025A accredited calibration with uncertainties."
        },
        {
          "id": "N9020B-A6J",
          "code": "N9020B-A6J",
          "name": "ANSI Z540-1-1994 合规校准证书",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$950",
          "description": "出厂提供符合 ANSI Z540 标准的校准证书。",
          "englishDescription": "ANSI Z540-1-1994 compliant calibration."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$1,800",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$2,800",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "PS-S20-01",
          "code": "PS-S20-01",
          "name": "1 天现场安装启动与操作培训服务 (1-day Startup)",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$1,500",
          "description": "资深 Keysight 工程师提供 1 天现场仪表操作与开箱指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        }
      ]
    }
  ]
};
