// Keysight N9030B Configurator Dataset
export const N9030B_DATA = {
  "id": "N9030B",
  "name": "N9030B PXA Signal Analyzer",
  "subtitle": "10 Hz to 50 GHz High-Performance Flagship X-Series Signal Analyzer",
  "family": "Signal Analyzers (PXA Series)",
  "docNumber": "5992-1255 / N9030B",
  "description": "The Keysight N9030B PXA is the flagship high-performance X-Series signal analyzer designed for demanding RF, microwave, and mmWave applications up to 50 GHz with up to 510 MHz real-time & analysis bandwidth, ultra-low phase noise (-136 dBc/Hz @ 1 GHz, 10 kHz offset), DANL extension, and THz external mixing.",
  "baseSpecs": {
    "display": "10.6-inch capacitive multi-touch display (1280 x 800)",
    "processor": "Quad-core high-performance processor, 16 GB RAM",
    "storage": "Removable M.2 NVMe Solid-State Drive (SSD)",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "25 MHz Analysis Bandwidth (Option B25)",
    "standardAttenuator": "2 dB/step Mechanical Attenuator (0 to 70 dB)",
    "standardApps": "Spectrum Analyzer and IQ Analyzer Application (Standard)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最大频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选选件（6 选 1），决定 PXA 旗舰仪表的最高测试频率上限",
      "englishSubtitle": "Required option (Choose 1). Determines the maximum measurement frequency range.",
      "type": "single",
      "options": [
        {
          "id": "N9030B-503",
          "code": "N9030B-503",
          "name": "频率范围 10 Hz 至 3.6 GHz",
          "englishName": "Frequency range, 10 Hz to 3.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$29,500",
          "freqMaxGHz": 3.6,
          "description": "射频频段涵盖 10 Hz 至 3.6 GHz，具备超高相噪与灵敏度特性。",
          "englishDescription": "Covers RF frequency band up to 3.6 GHz with ultra-low phase noise."
        },
        {
          "id": "N9030B-508",
          "code": "N9030B-508",
          "name": "频率范围 10 Hz 至 8.4 GHz",
          "englishName": "Frequency range, 10 Hz to 8.4 GHz",
          "category": "Frequency",
          "priceEstimate": "$37,200",
          "freqMaxGHz": 8.4,
          "description": "涵盖 Sub-6GHz 频段（5G FR1、Wi-Fi 6E/7、C-band）。",
          "englishDescription": "Covers Sub-6GHz frequency range for 5G FR1 and Wi-Fi 6E/7."
        },
        {
          "id": "N9030B-513",
          "code": "N9030B-513",
          "name": "频率范围 10 Hz 至 13.6 GHz",
          "englishName": "Frequency range, 10 Hz to 13.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,500",
          "freqMaxGHz": 13.6,
          "description": "适用于 X 波段雷达、军事通信及微波中继测试。",
          "englishDescription": "Suitable for X-band radar and military communications."
        },
        {
          "id": "N9030B-526",
          "code": "N9030B-526",
          "name": "频率范围 10 Hz 至 26.5 GHz",
          "englishName": "Frequency range, 10 Hz to 26.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$62,000",
          "freqMaxGHz": 26.5,
          "description": "覆盖 K 波段及 24 GHz 5G 毫米波频段。",
          "englishDescription": "Covers K-band and 24 GHz 5G mmWave spectrum."
        },
        {
          "id": "N9030B-544",
          "code": "N9030B-544",
          "name": "频率范围 10 Hz 至 44 GHz",
          "englishName": "Frequency range, 10 Hz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$78,500",
          "freqMaxGHz": 44,
          "description": "覆盖 Q 波段及 39 GHz 5G 毫米波测试需求。",
          "englishDescription": "Covers Q-band and 39 GHz 5G mmWave applications."
        },
        {
          "id": "N9030B-550",
          "code": "N9030B-550",
          "name": "频率范围 10 Hz 至 50 GHz",
          "englishName": "Frequency range, 10 Hz to 50 GHz",
          "category": "Frequency",
          "priceEstimate": "$89,000",
          "freqMaxGHz": 50,
          "description": "全频段覆盖至 50 GHz，支持超高频微波、毫米波及外混频扩展至 1.1 THz。",
          "englishDescription": "Full frequency coverage up to 50 GHz, supporting THz external mixing."
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
          "id": "N9030B-P03",
          "code": "N9030B-P03",
          "name": "前置放大器，100 kHz 至 3.6 GHz",
          "englishName": "Preamplifier, 100 kHz to 3.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$4,500",
          "freqLimitGHz": 3.6,
          "compatibleFreqs": [
            "503",
            "508",
            "513",
            "526",
            "544",
            "550"
          ],
          "description": "提供最高 20 dB 增益，提升 3.6 GHz 以下低电平信号检测灵敏度。",
          "englishDescription": "Provides up to 20 dB gain below 3.6 GHz."
        },
        {
          "id": "N9030B-P08",
          "code": "N9030B-P08",
          "name": "前置放大器，100 kHz 至 8.4 GHz",
          "englishName": "Preamplifier, 100 kHz to 8.4 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$6,800",
          "freqLimitGHz": 8.4,
          "compatibleFreqs": [
            "508",
            "513",
            "526",
            "544",
            "550"
          ],
          "description": "降低最高 8.4 GHz 的微波底噪。",
          "englishDescription": "Lowers noise floor up to 8.4 GHz."
        },
        {
          "id": "N9030B-P13",
          "code": "N9030B-P13",
          "name": "前置放大器，100 kHz 至 13.6 GHz",
          "englishName": "Preamplifier, 100 kHz to 13.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$8,800",
          "freqLimitGHz": 13.6,
          "compatibleFreqs": [
            "513",
            "526",
            "544",
            "550"
          ],
          "description": "低噪声放大至 13.6 GHz。",
          "englishDescription": "Preamplification up to 13.6 GHz."
        },
        {
          "id": "N9030B-P26",
          "code": "N9030B-P26",
          "name": "前置放大器，100 kHz 至 26.5 GHz",
          "englishName": "Preamplifier, 100 kHz to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$11,800",
          "freqLimitGHz": 26.5,
          "compatibleFreqs": [
            "526",
            "544",
            "550"
          ],
          "description": "宽带前置放大至 26.5 GHz。",
          "englishDescription": "Wideband preamplification up to 26.5 GHz."
        },
        {
          "id": "N9030B-P44",
          "code": "N9030B-P44",
          "name": "前置放大器，100 kHz 至 44 GHz",
          "englishName": "Preamplifier, 100 kHz to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$15,800",
          "freqLimitGHz": 44,
          "compatibleFreqs": [
            "544",
            "550"
          ],
          "description": "全频段覆盖至 44 GHz 低噪声放大。",
          "englishDescription": "Full coverage preamplifier up to 44 GHz."
        },
        {
          "id": "N9030B-P50",
          "code": "N9030B-P50",
          "name": "前置放大器，100 kHz 至 50 GHz",
          "englishName": "Preamplifier, 100 kHz to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$18,200",
          "freqLimitGHz": 50,
          "compatibleFreqs": [
            "550"
          ],
          "description": "全频段覆盖至 50 GHz，提供极致低噪灵敏度测试。",
          "englishDescription": "Full coverage preamplifier up to 50 GHz."
        },
        {
          "id": "N9030B-LNP",
          "code": "N9030B-LNP",
          "name": "超低噪声前置放大器 (Low Noise Preamplifier)",
          "englishName": "Low noise preamplifier",
          "category": "Preamplifier",
          "priceEstimate": "+$7,500",
          "description": "提供极致较低噪声系数与微弱信号捕获能力。",
          "englishDescription": "Provides lower noise figure for ultra-weak signal detection."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择相位噪声性能与频率基准 (Phase Noise & Frequency Reference)",
      "englishTitle": "Phase Noise & Frequency Reference",
      "subtitle": "PXA 增强型相噪 Option EP0 (低至 -136 dBc/Hz @ 1 GHz) 及高精度 OCXO 基准",
      "englishSubtitle": "Enhanced Phase Noise (Option EP0) and Precision Frequency Reference (PFR).",
      "type": "multiple",
      "options": [
        {
          "id": "N9030B-PFR",
          "code": "N9030B-PFR",
          "name": "高精度频率基准 (Precision Frequency Reference)",
          "englishName": "Precision frequency reference",
          "category": "Reference",
          "priceEstimate": "+$2,800",
          "description": "提供老化率低至 ±1x10^-7/年的 OCXO 高稳定度基准。",
          "englishDescription": "Precision OCXO clock reference with ±1x10^-7/year aging."
        },
        {
          "id": "N9030B-EP0",
          "code": "N9030B-EP0",
          "name": "增强型相位噪声性能 (Enhanced Phase Noise)",
          "englishName": "Enhanced phase noise performance",
          "category": "Performance",
          "priceEstimate": "+$8,500",
          "description": "在 1 GHz 频率下 10 kHz 偏移相噪低至 -136 dBc/Hz，提供极致的基带近端相噪与跳频杂散测量。",
          "englishDescription": "Delivers ultra-low phase noise (-136 dBc/Hz @ 1 GHz, 10 kHz offset)."
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
          "id": "N9030B-ATT-STD",
          "code": "Standard",
          "name": "机械衰减器 (0 至 70 dB, 2 dB 步进)",
          "englishName": "Standard Mechanical Attenuator",
          "category": "Attenuator",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "PXA 标配 0 至 70 dB 高精度机械衰减器，2 dB 步进。",
          "englishDescription": "Standard 0 to 70 dB mechanical attenuator in 2 dB steps."
        },
        {
          "id": "N9030B-FSA",
          "code": "N9030B-FSA",
          "name": "精密 2 dB 步进衰减器，可降至 0 dB (2 dB Step Attenuator)",
          "englishName": "2 dB step attenuator",
          "category": "Attenuator",
          "priceEstimate": "+$2,200",
          "description": "精细调谐输入电平，优化最大信噪比。",
          "englishDescription": "Fine 2 dB step attenuator tuning down to 0 dB."
        },
        {
          "id": "N9030B-EA3",
          "code": "N9030B-EA3",
          "name": "电子衰减器，最高 3.6 GHz (Electronic Attenuator)",
          "englishName": "Electronic attenuator up to 3.6 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,200",
          "description": "在机械衰减器基础上增加 0 至 24 dB 电子衰减器（1 dB 步进），实现产线快速无磨损切换。",
          "englishDescription": "Adds 0 to 24 dB electronic attenuator up to 3.6 GHz."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择分析带宽与微波预选器旁路 (Choose Analysis Bandwidth up to 510 MHz & MPB)",
      "englishTitle": "Choose Analysis Bandwidth up to 510 MHz & MPB",
      "subtitle": "PXA 支持高达 510 MHz 的实时解调分析带宽 (Option B5X)，专为 5G FR2 及宽带雷达设计",
      "englishSubtitle": "PXA supports up to 510 MHz analysis bandwidth (Option B5X) for 5G FR2 & wideband radar.",
      "type": "single",
      "options": [
        {
          "id": "N9030B-B25",
          "code": "Standard",
          "name": "25 MHz 分析带宽 (Standard)",
          "englishName": "25 MHz Analysis Bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "description": "PXA 标配 25 MHz 分析带宽。",
          "englishDescription": "Standard 25 MHz analysis bandwidth."
        },
        {
          "id": "N9030B-B40",
          "code": "N9030B-B40",
          "name": "40 MHz 分析带宽 (40 MHz Analysis Bandwidth)",
          "englishName": "40 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$6,800",
          "bandwidthMHz": 40,
          "description": "扩展分析带宽至 40 MHz；频率 > 3.6 GHz 测量需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 40 MHz; requires Option MPB for > 3.6 GHz."
        },
        {
          "id": "N9030B-B85",
          "code": "N9030B-B85",
          "name": "85 MHz 分析带宽 (85 MHz Analysis Bandwidth)",
          "englishName": "85 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$13,500",
          "bandwidthMHz": 85,
          "description": "扩展分析带宽至 85 MHz；频率 > 3.6 GHz 测量需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 85 MHz; requires Option MPB for > 3.6 GHz."
        },
        {
          "id": "N9030B-B1X",
          "code": "N9030B-B1X",
          "name": "160 MHz 分析带宽 (160 MHz Analysis Bandwidth)",
          "englishName": "160 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$22,500",
          "bandwidthMHz": 160,
          "description": "扩展分析带宽至 160 MHz (支持 Wi-Fi 6E/7 160MHz 信道解调)。",
          "englishDescription": "Extends analysis bandwidth to 160 MHz for Wi-Fi 6E/7 testing."
        },
        {
          "id": "N9030B-B2X",
          "code": "N9030B-B2X",
          "name": "255 MHz 分析带宽 (255 MHz Analysis Bandwidth)",
          "englishName": "255 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$32,000",
          "bandwidthMHz": 255,
          "description": "扩展分析带宽至 255 MHz，支持超宽带脉冲与 5G NR 载波聚合。",
          "englishDescription": "Extends analysis bandwidth to 255 MHz for wideband pulse & 5G carrier aggregation."
        },
        {
          "id": "N9030B-B5X",
          "code": "N9030B-B5X",
          "name": "510 MHz 超宽分析带宽 (510 MHz Analysis Bandwidth)",
          "englishName": "510 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$45,000",
          "bandwidthMHz": 510,
          "description": "PXA 旗舰级 510 MHz 分析带宽；包含高效数字信号处理架构，需选配 MPB。",
          "englishDescription": "Flagship 510 MHz analysis bandwidth; requires Option MPB."
        },
        {
          "id": "N9030B-MPB",
          "code": "N9030B-MPB",
          "name": "微波预选器旁路 (Microwave Preselector Bypass)",
          "englishName": "Microwave preselector bypass",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$4,800",
          "requires": [
            "N9030B-B40"
          ],
          "description": "在 > 3.6 GHz 进行 B40/B85/B1X/B2X/B5X 宽带宽测量时必需；开启快速扫描功能 FS1/FS2。",
          "englishDescription": "Required for wideband measurements (>3.6 GHz) with B40, B85, B1X, B2X, B5X."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择性能与接口选项 (Choose Performance Options)",
      "englishTitle": "Choose Performance Options",
      "subtitle": "捕获内存扩展、快速扫描、模拟 I/Q 输入、太赫兹外混频与底噪扩展技术",
      "englishSubtitle": "Capture memory, fast sweep, analog I/Q inputs, external mixing up to 1.1 THz, DANL extension.",
      "type": "multiple",
      "options": [
        {
          "id": "N9030B-DP2",
          "code": "N9030B-DP2",
          "name": "2 GB 捕获内存数字处理器 (DP2)",
          "englishName": "Digital processor with 2 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$3,800",
          "description": "提供 2 GB IQ 深度捕获内存与快速抓包分析。",
          "englishDescription": "Provides 2 GB deep IQ capture memory."
        },
        {
          "id": "N9030B-DP4",
          "code": "N9030B-DP4",
          "name": "4 GB 深度捕获内存数字处理器 (DP4)",
          "englishName": "Digital processor with 4 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$6,500",
          "description": "4 GB 深度 IQ 捕获内存；选配 B85/B1X/B2X/B5X 时随附包含。",
          "englishDescription": "Provides 4 GB deep IQ capture memory."
        },
        {
          "id": "N9030B-FS1",
          "code": "N9030B-FS1",
          "name": "列表扫描快速扫描能力 (Fast Sweep Capability List Sweep)",
          "englishName": "Fast sweep capability for list sweep",
          "category": "Performance",
          "priceEstimate": "+$2,800",
          "requires": [
            "N9030B-B40"
          ],
          "description": "大幅加速 List Sweep 列表扫描产线测试吞吐量速度。",
          "englishDescription": "Accelerates list sweep test throughput speed."
        },
        {
          "id": "N9030B-FS2",
          "code": "N9030B-FS2",
          "name": "快速扫描能力 (Fast Sweep Capability)",
          "englishName": "Fast sweep capability for fast sweep",
          "category": "Performance",
          "priceEstimate": "+$3,500",
          "requires": [
            "N9030B-B40"
          ],
          "description": "在全频段开启快速扫描算法；需 B40 或 MPB。",
          "englishDescription": "Enables fast sweep algorithm across full frequency range."
        },
        {
          "id": "N9030B-BBA",
          "code": "N9030B-BBA",
          "name": "模拟 I/Q 基带输入接口 (Analog I/Q Inputs)",
          "englishName": "I/Q baseband inputs, analog",
          "category": "Performance",
          "priceEstimate": "+$7,800",
          "description": "提供单端/差分模拟 BBIQ 基带信号直接输入接口。",
          "englishDescription": "Provides single-ended/differential analog baseband IQ inputs."
        },
        {
          "id": "N9030B-EXM",
          "code": "N9030B-EXM",
          "name": "外部混频接口 (External Mixing up to 1.1 THz)",
          "englishName": "External mixing",
          "category": "Performance",
          "priceEstimate": "+$5,500",
          "description": "提供 LO 出/中频进 SMA 端口，连接 Keysight 或第三方混频器将频率扩展至 1.1 THz。",
          "englishDescription": "Connects external mixers to extend frequency coverage up to 1.1 THz."
        },
        {
          "id": "N9030B-NF2",
          "code": "N9030B-NF2",
          "name": "底噪扩展技术 (Noise Floor Extension)",
          "englishName": "Noise floor extension",
          "category": "Performance",
          "priceEstimate": "+$5,200",
          "description": "通过对 PXA 系统底噪建模消除，改善显示平均噪声电平 (DANL) 性能达 10 dB。",
          "englishDescription": "Improves DANL performance by up to 10 dB via noise floor modeling."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "增加实时频谱分析 RTSA (Real-Time Spectrum Analysis up to 510 MHz)",
      "englishTitle": "Add Real-Time Spectrum Analysis",
      "subtitle": "PXA 提供最高 510 MHz 实时带宽 (Option RTS)，捕捉低至 3.5us 的瞬态脉冲",
      "englishSubtitle": "Real-time spectrum analysis up to 510 MHz (Option RTS) with 3.5 us 100% POI.",
      "type": "multiple",
      "options": [
        {
          "id": "N9030RT1B",
          "code": "N9030RT1B",
          "name": "160 MHz 实时频谱分析 (基础检测, 最小 17.3us 100% POI)",
          "englishName": "Real-time analysis up to 160 MHz, Basic Detection",
          "category": "RTSA",
          "priceEstimate": "+$15,500",
          "requires": [
            "N9030B-B85"
          ],
          "description": "包含频率掩码触发 (FMT)，保证 100% 截获概率的最短信号持续时间为 17.3 us。",
          "englishDescription": "Real-time analysis up to 160 MHz with 17.3 us 100% POI signal capture."
        },
        {
          "id": "N9030RT2B",
          "code": "N9030RT2B",
          "name": "160 MHz 实时频谱分析 (最佳检测, 最小 3.5us 100% POI)",
          "englishName": "Real-time analysis up to 160 MHz, Optimum Detection",
          "category": "RTSA",
          "priceEstimate": "+$22,500",
          "requires": [
            "N9030B-B85"
          ],
          "description": "包含 FMT 与 TQT 触发，保证 100% 截获概率的最短信号持续时间低至 3.5 us。",
          "englishDescription": "Optimum real-time analysis up to 160 MHz with 3.5 us 100% POI signal capture."
        },
        {
          "id": "N9030B-RTS",
          "code": "N9030B-RTS",
          "name": "510 MHz 旗舰超宽实时频谱分析 (510 MHz RTSA)",
          "englishName": "510 MHz real-time spectrum analysis",
          "category": "RTSA",
          "priceEstimate": "+$38,000",
          "requires": [
            "N9030B-B5X"
          ],
          "description": "PXA 专属 510 MHz 实时频谱分析，无缝监控 5G 毫米波全频段与捷变雷达干扰。",
          "englishDescription": "PXA flagship 510 MHz real-time spectrum analysis."
        },
        {
          "id": "N90EMFT1B",
          "code": "N90EMFT1B",
          "name": "频率掩码触发 FMT 基础检测 (Frequency Mask Trigger Basic)",
          "englishName": "Frequency mask trigger, basic detection",
          "category": "RTSA",
          "priceEstimate": "+$3,800",
          "description": "为脉冲分析与 89600 VSA 软件提供 17.3 us 基础 FMT 触发功能。",
          "englishDescription": "Enables basic frequency mask triggering."
        },
        {
          "id": "N90EMFT2B",
          "code": "N90EMFT2B",
          "name": "频率掩码触发 FMT 最佳检测 (Frequency Mask Trigger Optimum)",
          "englishName": "Frequency mask trigger, optimum detection",
          "category": "RTSA",
          "priceEstimate": "+$6,500",
          "description": "提供 3.5 us 极短脉冲 FMT 最佳检测触发。",
          "englishDescription": "Enables optimum frequency mask triggering down to 3.5 us pulses."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "增加可选特性 (Add Optional Features)",
      "englishTitle": "Add Optional Features",
      "subtitle": "增强显示、EMC 预兼容、时域扫描与双通道同步",
      "englishSubtitle": "Enhanced display, EMI pre-compliance, time domain scan, and dual-channel sync.",
      "type": "multiple",
      "options": [
        {
          "id": "N90EMEDPB",
          "code": "N90EMEDPB",
          "name": "增强显示软件包 (Enhanced Display Package)",
          "englishName": "Enhanced display package",
          "category": "Optional Feature",
          "priceEstimate": "+$2,200",
          "description": "包含 Spectrogram 语图、迹线放大 (Trace Zoom) 及区域 Span 观察。",
          "englishDescription": "Includes spectrogram, trace zoom, and zone span."
        },
        {
          "id": "N90EMDUAB",
          "code": "N90EMDUAB",
          "name": "双通道同步测量套件 (Dual Channel Measurement)",
          "englishName": "Dual channel measurement",
          "category": "Optional Feature",
          "priceEstimate": "+$4,800",
          "description": "支持双通道射频/基带同步测试与相位比较。",
          "englishDescription": "Supports dual-channel RF/baseband synchronous measurement."
        },
        {
          "id": "N90EMEMCB",
          "code": "N90EMEMCB",
          "name": "基础 EMI 预兼容测量套件 (Basic EMI Pre-compliance)",
          "englishName": "Basic EMI pre-compliance",
          "category": "Optional Feature",
          "priceEstimate": "+$2,800",
          "description": "支持 CISPR 16-1-1 检波器、带宽及 Marker 监听调谐测量。",
          "englishDescription": "Performs EMI pre-compliance measurements with CISPR 16-1-1 detectors."
        },
        {
          "id": "N90EMTDSB",
          "code": "N90EMTDSB",
          "name": "时域扫描 (Time Domain Scan for EMC)",
          "englishName": "Time domain scan",
          "category": "Optional Feature",
          "priceEstimate": "+$3,800",
          "description": "大幅缩短 EMC 预兼容扫描测试时间；需搭配 N6141EM0E 及 DP2/B40。",
          "englishDescription": "Accelerates EMC scan speed via time domain processing."
        },
        {
          "id": "N90EMESCB",
          "code": "N90EMESCB",
          "name": "外部信号源控制接口 (External Source Control)",
          "englishName": "External source control",
          "category": "Optional Feature",
          "priceEstimate": "+$2,500",
          "description": "控制 EXG、MXG 及 PSG 矢量信号源进行扫频与增益测试。",
          "englishDescription": "Controls external Keysight signal generators."
        },
        {
          "id": "N90EMFP2B",
          "code": "N90EMFP2B",
          "name": "快速功率测量加速 (Fast Power Measurement)",
          "englishName": "Fast power up to available max analysis BW",
          "category": "Optional Feature",
          "priceEstimate": "+$2,200",
          "description": "大幅提升 ACPR 及通道功率测试速度；需选配 B40/B85/B1X/B2X/B5X。",
          "englishDescription": "Accelerates ACPR and channel power measurement speed."
        },
        {
          "id": "N90EMRBEB",
          "code": "N90EMRBEB",
          "name": "零扫宽 RBW 扩展 (Resolution Bandwidth Extended)",
          "englishName": "Resolution bandwidth extended",
          "category": "Optional Feature",
          "priceEstimate": "+$1,800",
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
      "subtitle": "可拆卸固态硬盘与数据保密防泄露选项",
      "englishSubtitle": "Removable SSD and data security options.",
      "type": "multiple",
      "options": [
        {
          "id": "N9030B-SS3",
          "code": "N9030B-SS3",
          "name": "额外可拆卸 M.2 NVMe Win11 固态硬盘 (Additional SSD)",
          "englishName": "Additional removable M.2 NVMe SSD",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "提供第 2 块完全镜像安装好 Win11 系统与镜像的可拆卸 SSD 硬盘。",
          "englishDescription": "Provides additional fully-imaged removable SSD."
        },
        {
          "id": "N9030B-SF1",
          "code": "N9030B-SF1",
          "name": "安全特性: 禁止启动外部 Windows 程序",
          "englishName": "Security features, exclude launch programs",
          "category": "Security",
          "priceEstimate": "+$1,500",
          "description": "限制在仪表界面中调用或运行其他第三方 Windows 可执行文件。",
          "englishDescription": "Prevents launching external Windows programs."
        },
        {
          "id": "N9030B-SF2",
          "code": "N9030B-SF2",
          "name": "安全特性: 禁止保存测量结果与配置",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$1,500",
          "description": "防止数据泄露，禁止将测试数据和用户配置文件写盘保存。",
          "englishDescription": "Prohibits saving measurement data to disk."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "增加后面板与硬件扩展接口 (Rear Panel & Hardware Extension)",
      "englishTitle": "Add Rear Panel & Hardware Extension",
      "subtitle": "第二中频、任意中频、视频输出、Real-time Link 及音频输入",
      "englishSubtitle": "Second IF, arbitrary IF, video output, Real-time Link, and audio input.",
      "type": "multiple",
      "options": [
        {
          "id": "N9030B-CR3",
          "code": "N9030B-CR3",
          "name": "第二中频输出 (Second IF Output)",
          "englishName": "Second IF output",
          "category": "Rear Output",
          "priceEstimate": "+$3,200",
          "description": "后面板 Aux IF 输出宽带第二中频信号。",
          "englishDescription": "Outputs wideband second IF on rear panel."
        },
        {
          "id": "N9030B-CRP",
          "code": "N9030B-CRP",
          "name": "任意中频输出 (Arbitrary IF Output 10-75 MHz)",
          "englishName": "Arbitrary IF output",
          "category": "Rear Output",
          "priceEstimate": "+$3,200",
          "description": "提供 10 至 75 MHz 可调任意中频输出（500 kHz 步进）。",
          "englishDescription": "Outputs arbitrary IF from 10 to 75 MHz."
        },
        {
          "id": "N9030B-YAV",
          "code": "N9030B-YAV",
          "name": "Y 轴屏幕视频输出 (Screen Video Output 0-1V)",
          "englishName": "Y-axis screen video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,100",
          "description": "后面板输出 0 至 1V 模拟检波检波视频信号。",
          "englishDescription": "Provides 0-1V analog video output."
        },
        {
          "id": "N9030B-RTL",
          "code": "N9030B-RTL",
          "name": "实时数据链路接口 Real-Time Link (LVDS)",
          "englishName": "Real-time link",
          "category": "Rear Output",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "连接 X-COM 记录仪或 N5106A PXB 进行高速数据流输出。",
          "englishDescription": "LVDS interface for X-COM recorder or PXB emulator."
        },
        {
          "id": "N9030B-107",
          "code": "N9030B-107",
          "name": "音频输入接口 (Audio Input)",
          "englishName": "Audio input",
          "category": "Rear Output",
          "priceEstimate": "+$950",
          "description": "提供低频音频直连分析接口。",
          "englishDescription": "Provides direct low frequency audio input port."
        },
        {
          "id": "N9030B-ALV",
          "code": "N9030B-ALV",
          "name": "辅助对数视频输出 (Auxiliary Log Video Output)",
          "englishName": "Auxiliary log video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,200",
          "description": "后面板提供辅助对数检波视频输出信号。",
          "englishDescription": "Provides auxiliary log video output."
        },
        {
          "id": "N9030B-C35",
          "code": "N9030B-C35",
          "name": "APC-3.5mm 前面板精密 RF 输入连接器",
          "englishName": "APC-3.5mm RF input connector",
          "category": "Rear Output",
          "priceEstimate": "+$850",
          "description": "替换为 APC 3.5mm 精密接头，适用于微波段稳定连接。",
          "englishDescription": "Precision APC-3.5mm connector for microwave RF input."
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "选择测量应用软件 (Choose Measurement Software Applications)",
      "englishTitle": "Choose Measurement Software Applications",
      "subtitle": "5G NR、WLAN 11ax/be (Wi-Fi 6E/7)、相位噪声、噪声系数及蜂窝/通用测试软件",
      "englishSubtitle": "5G NR, WLAN 11ac/ax/be, Phase Noise, Noise Figure, and Cellular/General apps.",
      "type": "multiple",
      "options": [
        {
          "id": "N90EMPSMB",
          "code": "N90EMPSMB",
          "name": "PowerSuite 功率测量高级工具包",
          "englishName": "PowerSuite",
          "category": "Measurement App",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂包含符合工业标准的信道功率、邻道功率 ACPR、占用带宽 OBW 测量。",
          "englishDescription": "Industry standard PowerSuite measurements included standard."
        },
        {
          "id": "E9063EM0E",
          "code": "E9063EM0E",
          "name": "AM/FM/PM 模拟解调测量软件",
          "englishName": "Analog demodulation",
          "category": "Measurement App",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "单键调幅、调频、调相解调测试，支持音频输出及 FM Stereo/RDS。",
          "englishDescription": "One-button AM/FM/PM demodulation measurement."
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
            "N9030B-P03"
          ],
          "supportsLicense": true,
          "description": "单键测量噪声系数 NF、增益及相关参数；需配合前置放大器及噪声源。",
          "englishDescription": "One-button noise figure and gain measurements."
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
          "englishDescription": "Custom OFDM modulation analysis."
        },
        {
          "id": "E9056EM0E",
          "code": "E9056EM0E",
          "name": "信道质量与多音群延时测量软件 (Channel Quality)",
          "englishName": "Channel Quality",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "测量宽带组件的多音信号群延时与信道响应特性。",
          "englishDescription": "Makes channel response and group delay measurements."
        },
        {
          "id": "E9067EM0E",
          "code": "E9067EM0E",
          "name": "脉冲分析应用软件 (Pulse Analysis)",
          "englishName": "Pulse analysis",
          "category": "Measurement App",
          "priceEstimate": "+$6,200",
          "requires": [
            "N9030B-DP4"
          ],
          "supportsLicense": true,
          "description": "雷达射频脉冲信号时域相位、频率及统计特征表征；需 4 GB DP4 内存。",
          "englishDescription": "Characterize pulsed RF signals in time domain."
        },
        {
          "id": "E6141EM0E",
          "code": "E6141EM0E",
          "name": "EMC 预兼容测试应用软件 (EMC Measurement)",
          "englishName": "EMI",
          "category": "Measurement App",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "执行传导与辐射电磁干扰 EMI 预兼容测试与极限线比对。",
          "englishDescription": "Performs pre-compliance conducted and radiated emission measurements."
        },
        {
          "id": "E9061EM0E",
          "code": "E9061EM0E",
          "name": "HP/Agilent 8566/68 856xE 远程语言兼容软件",
          "englishName": "Remote language compatibility",
          "category": "Measurement App",
          "priceEstimate": "+$2,200",
          "supportsLicense": true,
          "description": "兼容经典 HP 8566/68 及 856xE/EC 频谱仪 SCPI 命令集。",
          "englishDescription": "Emulates HP/Agilent 8566/68 and 856xE/EC spectrum analyzers."
        },
        {
          "id": "E9062EM0E",
          "code": "E9062EM0E",
          "name": "R&S FSP/FSU/FSV SCPI 远程语言兼容软件",
          "englishName": "SCPI command language compatibility",
          "category": "Measurement App",
          "priceEstimate": "+$2,200",
          "supportsLicense": true,
          "description": "兼容 R&S FSP/FSU/FSL/FSV/FSW 及 ESU EMI 接收机控制命令。",
          "englishDescription": "Emulates R&S spectrum analyzers."
        },
        {
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 嵌入式计算与信号处理分析软件",
          "englishName": "MATLAB software",
          "category": "Measurement App",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "在仪表内部直接调用 MATLAB 进行自定义 IQ 数据算法演算。",
          "englishDescription": "Executes MATLAB analysis directly inside the analyzer."
        },
        {
          "id": "E9071EM0E",
          "code": "E9071EM0E",
          "name": "GSM/EDGE/EDGE Evolution 蜂窝测试软件",
          "englishName": "GSM/EDGE/Evo",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "GSM/EDGE 2G 蜂窝通信单键标准解调测试。",
          "englishDescription": "Standard-based GSM/EDGE measurements."
        },
        {
          "id": "E9073EM0E",
          "code": "E9073EM0E",
          "name": "W-CDMA/HSPA+ 3G 蜂窝测试软件",
          "englishName": "W-CDMA/HSPA+",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "W-CDMA, HSPA 及 HSPA+ 单键标准解调与邻道泄漏比测试。",
          "englishDescription": "Standard-based W-CDMA/HSPA+ measurements."
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
          "englishDescription": "Standard-based LTE FDD measurement app."
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
          "englishDescription": "Standard-based LTE TDD measurement app."
        },
        {
          "id": "E9085EM0E",
          "code": "E9085EM0E",
          "name": "5G NR (New Radio) 测量应用软件",
          "englishName": "5G NR (New Radio)",
          "category": "Measurement App",
          "priceEstimate": "+$9,800",
          "requires": [
            "N9030B-B1X"
          ],
          "supportsLicense": true,
          "description": "支持 5G NR Sub-6GHz & mmWave 下行与上行 3GPP 标准解调与 EVM 分析。",
          "englishDescription": "Standard-based 5G NR downlink and uplink measurement app."
        },
        {
          "id": "E9077EM0E",
          "code": "E9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 测量软件",
          "englishName": "WLAN 802.11 a/b/g/j/p/n/ af/ah",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "传统 WLAN 802.11 协议簇单键解调与功率测量。",
          "englishDescription": "Standard-based WLAN 802.11a/b/g/n measurement app."
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
          "id": "E9081EM0E",
          "code": "E9081EM0E",
          "name": "Bluetooth 蓝牙测量应用软件 (Bluetooth 5 / BLE)",
          "englishName": "Bluetooth",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及 Low Energy 4.0/4.2/5 单键测量分析。",
          "englishDescription": "Bluetooth BR/EDR and Low Energy measurement app."
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择 89600 VSA 矢量信号分析软件 (Choose 89600 VSA Software)",
      "englishTitle": "Choose 89600 VSA Software",
      "subtitle": "PXA 支持 510 MHz 超宽带 89600 VSA 矢量解调、5G NR/LTE/WLAN 故障诊断与 4096QAM 调制",
      "englishSubtitle": "Industry-standard 89600 VSA software supporting up to 510 MHz analysis bandwidth.",
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
          "id": "89601BHFC",
          "code": "89601BHFC",
          "name": "Custom OFDM 自定义 OFDM 调制解调选件",
          "englishName": "Custom OFDM modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$4,500",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "针对自定义或前沿非标 OFDM 格式进行矢量调制分析。",
          "englishDescription": "Proprietary and pre-standard OFDM modulation analysis."
        },
        {
          "id": "89601PSMC",
          "code": "89601PSMC",
          "name": "PowerSuite 功率测量选件 (VSA PowerSuite)",
          "englishName": "PowerSuite measurement",
          "category": "VSA Option",
          "priceEstimate": "+$2,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "在 VSA 软件内执行 ACPR 及信道 EVM 功率分析。",
          "englishDescription": "PowerSuite measurement for ACP and EVM in VSA."
        },
        {
          "id": "89601301C",
          "code": "89601301C",
          "name": "Custom IQ 自定义 IQ 调制解调工具包",
          "englishName": "Custom IQ modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$3,500",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "自定义 IQ 星座图与物理层脉冲分析。",
          "englishDescription": "Custom IQ constellation signal analysis."
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
          "id": "89601BHGC",
          "code": "89601BHGC",
          "name": "LTE/LTE-Advanced FDD 调制分析选件",
          "englishName": "LTE/LTE-A FDD modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$4,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "LTE 及 LTE-A FDD 载波聚合信号解调分析。",
          "englishDescription": "LTE FDD and LTE-Advanced FDD modulation analysis."
        },
        {
          "id": "89601BHHC",
          "code": "89601BHHC",
          "name": "LTE/LTE-Advanced TDD 调制分析选件",
          "englishName": "LTE/LTE-A TDD modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$4,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "LTE 及 LTE-A TDD 信号解调分析。",
          "englishDescription": "LTE TDD and LTE-Advanced TDD modulation analysis."
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
          "id": "89601BHPC",
          "code": "89601BHPC",
          "name": "FMCW 雷达信号调制解调分析选件",
          "englishName": "FMCW radar modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$5,200",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "车载与毫米波 FMCW 调频连续波雷达信号解调。",
          "englishDescription": "FMCW radar modulation analysis."
        },
        {
          "id": "89601BHQC",
          "code": "89601BHQC",
          "name": "脉冲雷达信号调制解调分析选件",
          "englishName": "Pulse radar modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$5,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "脉冲雷达物理层调制解调与相位分析。",
          "englishDescription": "Pulse radar modulation analysis."
        },
        {
          "id": "89601101C",
          "code": "89601101C",
          "name": "硬件连接与捕获选件 (Hardware Connectivity)",
          "englishName": "Hardware connectivity",
          "category": "VSA Option",
          "priceEstimate": "+$1,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "为 VSA 软件连接 PXA 硬件驱动支持。",
          "englishDescription": "Provides hardware connectivity for PXA."
        },
        {
          "id": "89601CSDC",
          "code": "89601CSDC",
          "name": "信道模型与空间衰落仿真接口 (Channel Simulator)",
          "englishName": "Channel simulator",
          "category": "VSA Option",
          "priceEstimate": "+$4,200",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "模拟多径信道衰落与空间传播环境。",
          "englishDescription": "Simulates multipath channel fading."
        }
      ]
    },
    {
      "id": "step13",
      "stepNumber": 13,
      "title": "选购物理外观、配件与扩展混频器 (Choose Accessories & External Mixers)",
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
          "description": "为 PXA 仪表增加 19 英寸标准机架安装法兰。",
          "englishDescription": "Adds rack mount flanges to the PXA."
        },
        {
          "id": "1CN103A",
          "code": "1CN103A",
          "name": "前面板便携把手套件 (Front Handles)",
          "englishName": "Front handles",
          "category": "Accessories",
          "priceEstimate": "+$220",
          "description": "在前面板两侧增加提手，便于搬运与机架拉出。",
          "englishDescription": "Adds front handles to the PXA."
        },
        {
          "id": "1CP105A",
          "code": "1CP105A",
          "name": "机架安装法兰与把手组合套件",
          "englishName": "Rack mount with handles",
          "category": "Rackmount",
          "priceEstimate": "+$480",
          "description": "同时增加机架安装法兰与前面板提手。",
          "englishDescription": "Adds rack mount flanges and handles."
        },
        {
          "id": "1DVR001A",
          "code": "1DVR001A",
          "name": "USB 外置 DVD-ROM/CD-RW 光驱",
          "englishName": "USB DVD-ROM/CD-R/RW drive",
          "category": "Accessories",
          "priceEstimate": "+$280",
          "description": "光盘驱动器，便于在 Windows 系统中安装固件和软件。",
          "englishDescription": "USB DVD-ROM drive."
        },
        {
          "id": "1MSE001A",
          "code": "1MSE001A",
          "name": "USB 光电鼠标 (USB Mouse)",
          "englishName": "Mouse, USB interface",
          "category": "Accessories",
          "priceEstimate": "+$45",
          "description": "USB 光电鼠标。",
          "englishDescription": "USB interface mouse."
        },
        {
          "id": "MLP001A",
          "code": "MLP001A",
          "name": "50 至 75 Ω 最小损耗阻抗垫 (Minimum Loss Pad)",
          "englishName": "Minimum loss pad, 50 to 75 ohm",
          "category": "Accessories",
          "priceEstimate": "+$320",
          "description": "50 欧姆 N 型公头转 75 欧姆 BNC 母头匹配转接垫 (9 MHz 至 2 GHz)。",
          "englishDescription": "50 ohm N(m) to 75 ohm BNC(f) adapter."
        },
        {
          "id": "M1970E",
          "code": "M1970E",
          "name": "E 波段智能 USB 混频器 (60 至 90 GHz)",
          "englishName": "E-band waveguide harmonic mixer, 60 to 90 GHz",
          "category": "Mixer",
          "priceEstimate": "+$8,800",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "智能 USB 混频器，测量范围 60-90 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 60 to 90 GHz."
        },
        {
          "id": "M1970V-001",
          "code": "M1970V-001",
          "name": "V 波段波导谐波混频器 (50 至 75 GHz)",
          "englishName": "V-band waveguide harmonic mixer, 50 to 75 GHz",
          "category": "Mixer",
          "priceEstimate": "+$8,500",
          "requires": [
            "N9030B-EXM"
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
            "N9030B-EXM"
          ],
          "description": "智能 USB 混频器，扩展频率测量范围至 75-110 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 75 to 110 GHz."
        },
        {
          "id": "11970A",
          "code": "11970A",
          "name": "26.5 至 40 GHz 波导谐波混频器 (11970A)",
          "englishName": "26 to 40 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$5,200",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "需 Option EXM 及 N9029BE13 双工器。",
          "englishDescription": "Requires Option EXM and N9029BE13 diplexer."
        },
        {
          "id": "11970W",
          "code": "11970W",
          "name": "75 至 110 GHz 波导谐波混频器 (11970W)",
          "englishName": "75 to 110 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$8,500",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "需 Option EXM 及 N9029BE13 双工器。",
          "englishDescription": "Requires Option EXM and N9029BE13 diplexer."
        },
        {
          "id": "N9029BE13",
          "code": "N9029BE13",
          "name": "本振/中频双工器 (LO/IF Diplexer for 11970 Mixers)",
          "englishName": "LO/IF diplexer",
          "category": "Mixer",
          "priceEstimate": "+$1,800",
          "description": "为 11970 系列外混频器提供双工本振与中频信号隔离。",
          "englishDescription": "Required diplexer for 11970 Series external mixers."
        },
        {
          "id": "N9029BV-W15",
          "code": "N9029BV-W15",
          "name": "50 至 75 GHz VDI 频率扩展模块",
          "englishName": "50 to 75 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$15,500",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "VDI 信号分析仪 WR15 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 50 to 75 GHz."
        },
        {
          "id": "N9029BV-W10",
          "code": "N9029BV-W10",
          "name": "75 至 110 GHz VDI 频率扩展模块",
          "englishName": "75 to 110 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$18,500",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "VDI 信号分析仪 WR10 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 75 to 110 GHz."
        },
        {
          "id": "N9029BV-W01",
          "code": "N9029BV-W01",
          "name": "750 至 1100 GHz VDI 太赫兹频率扩展模块 (1.1 THz)",
          "englishName": "750 to 1100 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$48,500",
          "requires": [
            "N9030B-EXM"
          ],
          "description": "VDI 太赫兹信号分析扩展模块，最高扩展测量至 1.1 THz；需 Option EXM。",
          "englishDescription": "VDI THz frequency extension module up to 1.1 THz."
        },
        {
          "id": "U7227A",
          "code": "U7227A",
          "name": "USB 外置前置放大器 (10 MHz 至 4 GHz)",
          "englishName": "USB external preamplifier, 10 MHz to 4 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$2,800",
          "description": "USB 供电外置高增益低噪前置放大器。",
          "englishDescription": "USB external preamplifier from 10 MHz to 4 GHz."
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
        },
        {
          "id": "U9361C",
          "code": "U9361C",
          "name": "RCal 接收机平坦度与相位校准模块 (Receiver Calibration Module)",
          "englishName": "Receiver calibration (RCal) module",
          "category": "Accessories",
          "priceEstimate": "+$6,800",
          "description": "自动纠正分析仪输入射频平坦度与增益相位特性的 RCal 模块。",
          "englishDescription": "Enables magnitude and complex corrections for signal receiver path."
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
          "id": "N9030B-UK6",
          "code": "N9030B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$750",
          "description": "附带 PXA 工厂全套实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "N9030B-AMG",
          "code": "N9030B-AMG",
          "name": "Keysight ISO 17025A 认可校准证书",
          "englishName": "Keysight Calibration + Uncertainties + Guardbanding",
          "category": "Calibration",
          "priceEstimate": "+$1,500",
          "description": "出厂提供符合 ISO 17025A 标准的带不确定度评估校准报告。",
          "englishDescription": "ISO 17025A accredited calibration with uncertainties."
        },
        {
          "id": "N9030B-A6J",
          "code": "N9030B-A6J",
          "name": "ANSI Z540-1-1994 合规校准证书",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$1,100",
          "description": "出厂提供符合 ANSI Z540 标准的校准证书。",
          "englishDescription": "ANSI Z540-1-1994 compliant calibration."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$2,200",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$3,500",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-7",
          "code": "R-50C-011-7",
          "name": "7 年期原厂返厂校准保障计划 (7 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 7 years",
          "category": "Warranty",
          "priceEstimate": "+$4,800",
          "description": "7 年内定期返厂检测校准。",
          "englishDescription": "7-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-10",
          "code": "R-50C-011-10",
          "name": "10 年期原厂返厂校准保障计划 (10 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 10 years",
          "category": "Warranty",
          "priceEstimate": "+$6,500",
          "description": "10 年期原厂返厂定期校准保障计划。",
          "englishDescription": "10-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "PS-S10-100",
          "code": "PS-S10-100",
          "name": "远程预约应用专家技术支持服务",
          "englishName": "Service: Remote scheduled productivity assistance",
          "category": "Service",
          "priceEstimate": "+$850",
          "description": "按小时计费的电话与网络应用专家技术支持。",
          "englishDescription": "Hourly technical support service."
        },
        {
          "id": "PS-S20-01",
          "code": "PS-S20-01",
          "name": "1 天现场安装启动与操作培训服务 (1-day Startup)",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$1,800",
          "description": "资深 Keysight 工程师提供 1 天现场仪表操作与开箱指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        },
        {
          "id": "PS-S20-100",
          "code": "PS-S20-100",
          "name": "按天计费应用咨询服务 (Productivity Assistance)",
          "englishName": "Service: Productivity assistance",
          "category": "Service",
          "priceEstimate": "+$2,500",
          "description": "Keysight 专家现场针对具体 DUT 与测试用例提供调试咨询。",
          "englishDescription": "Daily instrument and application consulting using your equipment."
        },
        {
          "id": "PS-X10-100",
          "code": "PS-X10-100",
          "name": "定制化工程技术服务 (Custom Engineering Service)",
          "englishName": "Service: custom engineering service",
          "category": "Service",
          "priceEstimate": "+$4,200",
          "description": "特定应用场景下的测试自动化与系统集成定制工程支持。",
          "englishDescription": "Application-specific custom technical assistance."
        }
      ]
    }
  ]
};
