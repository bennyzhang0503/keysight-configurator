// Keysight N9040B Configurator Dataset
export const N9040B_DATA = {
  "id": "N9040B",
  "name": "N9040B UXA Signal Analyzer",
  "subtitle": "10 Hz to 50 GHz Ultra-High-Performance Premier Flagship Signal Analyzer",
  "family": "Signal Analyzers (UXA Series)",
  "docNumber": "5992-1256 / N9040B",
  "description": "The Keysight N9040B UXA is the premier flagship X-Series signal analyzer featuring an unprecedented 14.1-inch multi-touch display, up to 1 GHz analysis bandwidth (Option H1G), up to 510 MHz real-time spectrum analysis (Option RTS), industry-leading phase noise (-136 dBc/Hz @ 1 GHz, 10 kHz offset), and 1.1 THz external mixing.",
  "baseSpecs": {
    "display": "14.1-inch capacitive multi-touch display (1920 x 1080 Full HD)",
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
      "subtitle": "必选选件（5 选 1），决定 UXA 顶级旗舰仪表的最高测试频率上限",
      "englishSubtitle": "Required option (Choose 1). Determines the maximum measurement frequency range.",
      "type": "single",
      "options": [
        {
          "id": "N9040B-508",
          "code": "N9040B-508",
          "name": "频率范围 10 Hz 至 8.4 GHz",
          "englishName": "Frequency range, 10 Hz to 8.4 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,500",
          "freqMaxGHz": 8.4,
          "description": "UXA 起步频率覆盖 Sub-6GHz 频段（5G FR1、Wi-Fi 6E/7），具备业界顶级相噪与纯净度。",
          "englishDescription": "Covers Sub-6GHz frequency range with industry-leading phase noise."
        },
        {
          "id": "N9040B-513",
          "code": "N9040B-513",
          "name": "频率范围 10 Hz 至 13.6 GHz",
          "englishName": "Frequency range, 10 Hz to 13.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$62,000",
          "freqMaxGHz": 13.6,
          "description": "适用于 X 波段雷达、航空航天及微波通信测试。",
          "englishDescription": "Suitable for X-band radar and aerospace communication testing."
        },
        {
          "id": "N9040B-526",
          "code": "N9040B-526",
          "name": "频率范围 10 Hz 至 26.5 GHz",
          "englishName": "Frequency range, 10 Hz to 26.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$78,000",
          "freqMaxGHz": 26.5,
          "description": "覆盖 K 波段及 24 GHz 5G 毫米波全频段测试需求。",
          "englishDescription": "Covers K-band and 24 GHz 5G mmWave measurement applications."
        },
        {
          "id": "N9040B-544",
          "code": "N9040B-544",
          "name": "频率范围 10 Hz 至 44 GHz",
          "englishName": "Frequency range, 10 Hz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$98,000",
          "freqMaxGHz": 44,
          "description": "覆盖 Q 波段及 39 GHz 5G 毫米波与雷达频段。",
          "englishDescription": "Covers Q-band and 39 GHz 5G mmWave spectrum."
        },
        {
          "id": "N9040B-550",
          "code": "N9040B-550",
          "name": "频率范围 10 Hz 至 50 GHz",
          "englishName": "Frequency range, 10 Hz to 50 GHz",
          "category": "Frequency",
          "priceEstimate": "$115,000",
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
          "id": "N9040B-P08",
          "code": "N9040B-P08",
          "name": "前置放大器，100 kHz 至 8.4 GHz",
          "englishName": "Preamplifier, 100 kHz to 8.4 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$7,800",
          "freqLimitGHz": 8.4,
          "compatibleFreqs": [
            "508",
            "513",
            "526",
            "544",
            "550"
          ],
          "description": "降低最高 8.4 GHz 的微波底噪，提升微弱信号检测灵敏度。",
          "englishDescription": "Lowers noise floor up to 8.4 GHz."
        },
        {
          "id": "N9040B-P13",
          "code": "N9040B-P13",
          "name": "前置放大器，100 kHz 至 13.6 GHz",
          "englishName": "Preamplifier, 100 kHz to 13.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$9,800",
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
          "id": "N9040B-P26",
          "code": "N9040B-P26",
          "name": "前置放大器，100 kHz 至 26.5 GHz",
          "englishName": "Preamplifier, 100 kHz to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$13,500",
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
          "id": "N9040B-P44",
          "code": "N9040B-P44",
          "name": "前置放大器，100 kHz 至 44 GHz",
          "englishName": "Preamplifier, 100 kHz to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$18,500",
          "freqLimitGHz": 44,
          "compatibleFreqs": [
            "544",
            "550"
          ],
          "description": "全频段覆盖至 44 GHz 低噪声放大。",
          "englishDescription": "Full coverage preamplifier up to 44 GHz."
        },
        {
          "id": "N9040B-P50",
          "code": "N9040B-P50",
          "name": "前置放大器，100 kHz 至 50 GHz",
          "englishName": "Preamplifier, 100 kHz to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$21,500",
          "freqLimitGHz": 50,
          "compatibleFreqs": [
            "550"
          ],
          "description": "全频段覆盖至 50 GHz，提供极致低噪灵敏度测试。",
          "englishDescription": "Full coverage preamplifier up to 50 GHz."
        },
        {
          "id": "N9040B-LNP",
          "code": "N9040B-LNP",
          "name": "超低噪声前置放大器 (Low Noise Preamplifier)",
          "englishName": "Low noise preamplifier",
          "category": "Preamplifier",
          "priceEstimate": "+$8,800",
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
      "subtitle": "UXA 增强型相噪 Option EP0 (低至 -136 dBc/Hz @ 1 GHz) 及高精度 OCXO 基准",
      "englishSubtitle": "Enhanced Phase Noise (Option EP0) and Precision Frequency Reference (PFR).",
      "type": "multiple",
      "options": [
        {
          "id": "N9040B-PFR",
          "code": "N9040B-PFR",
          "name": "高精度频率基准 (Precision Frequency Reference)",
          "englishName": "Precision frequency reference",
          "category": "Reference",
          "priceEstimate": "+$3,200",
          "description": "提供老化率低至 ±1x10^-7/年的 OCXO 高稳定度基准。",
          "englishDescription": "Precision OCXO clock reference with ±1x10^-7/year aging."
        },
        {
          "id": "N9040B-EP0",
          "code": "N9040B-EP0",
          "name": "增强型相位噪声性能 (Enhanced Phase Noise)",
          "englishName": "Enhanced phase noise performance",
          "category": "Performance",
          "priceEstimate": "+$9,800",
          "description": "UXA 极致相噪，在 1 GHz 频率下 10 kHz 偏移低至 -136 dBc/Hz，纯净度行业领先。",
          "englishDescription": "Industry-leading phase noise (-136 dBc/Hz @ 1 GHz, 10 kHz offset)."
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
          "id": "N9040B-ATT-STD",
          "code": "Standard",
          "name": "机械衰减器 (0 至 70 dB, 2 dB 步进)",
          "englishName": "Standard Mechanical Attenuator",
          "category": "Attenuator",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "UXA 标配 0 至 70 dB 高精度机械衰减器，2 dB 步进。",
          "englishDescription": "Standard 0 to 70 dB mechanical attenuator in 2 dB steps."
        },
        {
          "id": "N9040B-FSA",
          "code": "N9040B-FSA",
          "name": "精密 2 dB 步进衰减器，可降至 0 dB (2 dB Step Attenuator)",
          "englishName": "2 dB step attenuator",
          "category": "Attenuator",
          "priceEstimate": "+$2,500",
          "description": "精细调谐输入电平，优化最大信噪比。",
          "englishDescription": "Fine 2 dB step attenuator tuning down to 0 dB."
        },
        {
          "id": "N9040B-EA3",
          "code": "N9040B-EA3",
          "name": "电子衰减器，最高 3.6 GHz (Electronic Attenuator)",
          "englishName": "Electronic attenuator up to 3.6 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,500",
          "description": "在机械衰减器基础上增加 0 至 24 dB 电子衰减器（1 dB 步进），实现产线快速无磨损切换。",
          "englishDescription": "Adds 0 to 24 dB electronic attenuator up to 3.6 GHz."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择分析带宽与微波预选器旁路 (Choose Analysis Bandwidth up to 1 GHz & MPB)",
      "englishTitle": "Choose Analysis Bandwidth up to 1 GHz & MPB",
      "subtitle": "UXA 独家支持高达 1 GHz 超宽解调带宽 (Option H1G)，满足 5G FR2、Wi-Fi 7 (320MHz) 及超宽带雷达需求",
      "englishSubtitle": "UXA exclusive 1 GHz analysis bandwidth (Option H1G) for Wi-Fi 7 (320MHz) & 5G FR2.",
      "type": "single",
      "options": [
        {
          "id": "N9040B-B25",
          "code": "Standard",
          "name": "25 MHz 分析带宽 (Standard)",
          "englishName": "25 MHz Analysis Bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "description": "UXA 标配 25 MHz 分析带宽。",
          "englishDescription": "Standard 25 MHz analysis bandwidth."
        },
        {
          "id": "N9040B-B40",
          "code": "N9040B-B40",
          "name": "40 MHz 分析带宽 (40 MHz Analysis Bandwidth)",
          "englishName": "40 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$7,500",
          "bandwidthMHz": 40,
          "description": "扩展分析带宽至 40 MHz；频率 > 3.6 GHz 测量需选 Option MPB。",
          "englishDescription": "Extends analysis bandwidth to 40 MHz."
        },
        {
          "id": "N9040B-B2X",
          "code": "N9040B-B2X",
          "name": "255 MHz 分析带宽 (255 MHz Analysis Bandwidth)",
          "englishName": "255 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$35,000",
          "bandwidthMHz": 255,
          "description": "扩展分析带宽至 255 MHz，支持超宽带脉冲与 5G NR 载波聚合。",
          "englishDescription": "Extends analysis bandwidth to 255 MHz."
        },
        {
          "id": "N9040B-B5X",
          "code": "N9040B-B5X",
          "name": "510 MHz 超宽分析带宽 (510 MHz Analysis Bandwidth)",
          "englishName": "510 MHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$48,000",
          "bandwidthMHz": 510,
          "description": "提供 510 MHz 超宽实时分析解调能力，需选配 MPB。",
          "englishDescription": "Provides 510 MHz real-time analysis bandwidth."
        },
        {
          "id": "N9040B-H1G",
          "code": "N9040B-H1G",
          "name": "1 GHz 极致超宽分析带宽 (1 GHz Ultra-Wide Analysis Bandwidth)",
          "englishName": "1 GHz analysis bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$68,000",
          "bandwidthMHz": 1000,
          "description": "UXA 独家 1 GHz 极致分析带宽，支持 Wi-Fi 7 (320 MHz)、宽带雷达及毫米波卫星解调；需选配 MPB/H52。",
          "englishDescription": "UXA exclusive 1 GHz analysis bandwidth for Wi-Fi 7 (320 MHz) & satellite broadband."
        },
        {
          "id": "N9040B-MPB",
          "code": "N9040B-MPB",
          "name": "微波预选器旁路 (Microwave Preselector Bypass)",
          "englishName": "Microwave preselector bypass",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$5,200",
          "requires": [
            "N9040B-B40"
          ],
          "description": "在 > 3.6 GHz 进行 B40/B2X/B5X/H1G 宽带宽测量时必需；开启快速扫描功能 FS1/FS2。",
          "englishDescription": "Required for wideband measurements (>3.6 GHz)."
        },
        {
          "id": "N9040B-FBP",
          "code": "N9040B-FBP",
          "name": "全频段预选器旁路 (Full Bypass for Preselector)",
          "englishName": "Full bypass for preselector",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$6,200",
          "requires": [
            "N9040B-B40"
          ],
          "description": "在全频段允许完全旁路预选器，获取最大的相噪与信道分析性能。",
          "englishDescription": "Allows full bypass of preselector across full frequency range."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择性能与接口选项 (Choose Performance Options)",
      "englishTitle": "Choose Performance Options",
      "subtitle": "510MHz/1GHz 数字处理硬件、快速扫描、太赫兹外混频与底噪扩展技术",
      "englishSubtitle": "Digital processing engine, fast sweep, external mixing up to 1.1 THz, DANL extension.",
      "type": "multiple",
      "options": [
        {
          "id": "N9040B-DP2",
          "code": "N9040B-DP2",
          "name": "2 GB 捕获内存数字处理器 (DP2)",
          "englishName": "Digital processor with 2 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$4,200",
          "description": "提供 2 GB IQ 深度捕获内存与快速抓包分析。",
          "englishDescription": "Provides 2 GB deep IQ capture memory."
        },
        {
          "id": "N9040B-DP4",
          "code": "N9040B-DP4",
          "name": "4 GB 深度捕获内存数字处理器 (DP4)",
          "englishName": "Digital processor with 4 GB capture memory",
          "category": "Performance",
          "priceEstimate": "+$7,200",
          "description": "4 GB 深度 IQ 捕获内存；选配 B2X/B5X/H1G 时随附包含。",
          "englishDescription": "Provides 4 GB deep IQ capture memory."
        },
        {
          "id": "N9040B-H52",
          "code": "N9040B-H52",
          "name": "510 MHz / 1 GHz 宽带数字处理硬件 (High Performance DSP Engine)",
          "englishName": "Wideband digital processing hardware engine",
          "category": "Performance",
          "priceEstimate": "+$22,500",
          "requires": [
            "N9040B-B5X"
          ],
          "description": "支撑 510 MHz 与 1 GHz 超宽解调带宽及实时频谱分析 RTSA 核心引擎。",
          "englishDescription": "Digital processing engine required for 510 MHz & 1 GHz analysis."
        },
        {
          "id": "N9040B-FS1",
          "code": "N9040B-FS1",
          "name": "列表扫描快速扫描能力 (Fast Sweep Capability List Sweep)",
          "englishName": "Fast sweep capability for list sweep",
          "category": "Performance",
          "priceEstimate": "+$3,200",
          "requires": [
            "N9040B-B40"
          ],
          "description": "大幅加速 List Sweep 列表扫描产线测试吞吐量速度。",
          "englishDescription": "Accelerates list sweep test throughput speed."
        },
        {
          "id": "N9040B-FS2",
          "code": "N9040B-FS2",
          "name": "快速扫描能力 (Fast Sweep Capability)",
          "englishName": "Fast sweep capability for fast sweep",
          "category": "Performance",
          "priceEstimate": "+$3,800",
          "requires": [
            "N9040B-B40"
          ],
          "description": "在全频段开启快速扫描算法；需 B40 或 MPB。",
          "englishDescription": "Enables fast sweep algorithm across full frequency range."
        },
        {
          "id": "N9040B-EXM",
          "code": "N9040B-EXM",
          "name": "外部混频接口 (External Mixing up to 1.1 THz)",
          "englishName": "External mixing",
          "category": "Performance",
          "priceEstimate": "+$6,200",
          "description": "提供 LO 出/中频进 SMA 端口，连接 Keysight 或第三方混频器将频率扩展至 1.1 THz。",
          "englishDescription": "Connects external mixers to extend frequency coverage up to 1.1 THz."
        },
        {
          "id": "N9040B-NF2",
          "code": "N9040B-NF2",
          "name": "底噪扩展技术 (Noise Floor Extension)",
          "englishName": "Noise floor extension",
          "category": "Performance",
          "priceEstimate": "+$5,800",
          "description": "通过对 UXA 系统底噪建模消除，改善显示平均噪声电平 (DANL) 性能达 10 dB。",
          "englishDescription": "Improves DANL performance by up to 10 dB via noise floor modeling."
        },
        {
          "id": "N9040B-NUL",
          "code": "N9040B-NUL",
          "name": "带外零陷滤波器与杂散调谐选件 (Nulling Option)",
          "englishName": "Nulling option",
          "category": "Performance",
          "priceEstimate": "+$2,500",
          "description": "优化高频带外杂散消除与零陷调谐。",
          "englishDescription": "Out-of-band spur nulling tuning option."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "增加实时频谱分析 RTSA (Real-Time Spectrum Analysis up to 510 MHz)",
      "englishTitle": "Add Real-Time Spectrum Analysis",
      "subtitle": "UXA 提供最高 510 MHz 实时带宽 (Option RTS)，无缝监控 5G mmWave 全频段及捷变雷达",
      "englishSubtitle": "Real-time spectrum analysis up to 510 MHz (Option RTS) with 3.5 us 100% POI.",
      "type": "multiple",
      "options": [
        {
          "id": "N9040RT1B",
          "code": "N9040RT1B",
          "name": "255 MHz 实时频谱分析 (基础检测, 最小 17.3us 100% POI)",
          "englishName": "Real-time analysis up to 255 MHz, Basic Detection",
          "category": "RTSA",
          "priceEstimate": "+$18,500",
          "requires": [
            "N9040B-B2X"
          ],
          "description": "包含频率掩码触发 (FMT)，保证 100% 截获概率的最短信号持续时间为 17.3 us。",
          "englishDescription": "Real-time analysis up to 255 MHz with 17.3 us 100% POI signal capture."
        },
        {
          "id": "N9040RT2B",
          "code": "N9040RT2B",
          "name": "255 MHz 实时频谱分析 (最佳检测, 最小 3.5us 100% POI)",
          "englishName": "Real-time analysis up to 255 MHz, Optimum Detection",
          "category": "RTSA",
          "priceEstimate": "+$25,500",
          "requires": [
            "N9040B-B2X"
          ],
          "description": "包含 FMT 与 TQT 触发，保证 100% 截获概率的最短信号持续时间低至 3.5 us。",
          "englishDescription": "Optimum real-time analysis up to 255 MHz with 3.5 us 100% POI signal capture."
        },
        {
          "id": "N9040B-RTS",
          "code": "N9040B-RTS",
          "name": "510 MHz 旗舰超宽实时频谱分析 (510 MHz RTSA)",
          "englishName": "510 MHz real-time spectrum analysis",
          "category": "RTSA",
          "priceEstimate": "+$42,000",
          "requires": [
            "N9040B-B5X"
          ],
          "description": "UXA 专属 510 MHz 实时频谱分析，无缝监控 5G 毫米波全频段与捷变雷达干扰。",
          "englishDescription": "UXA flagship 510 MHz real-time spectrum analysis."
        },
        {
          "id": "N90EMFT1B",
          "code": "N90EMFT1B",
          "name": "频率掩码触发 FMT 基础检测 (Frequency Mask Trigger Basic)",
          "englishName": "Frequency mask trigger, basic detection",
          "category": "RTSA",
          "priceEstimate": "+$4,200",
          "description": "为脉冲分析与 89600 VSA 软件提供 17.3 us 基础 FMT 触发功能。",
          "englishDescription": "Enables basic frequency mask triggering."
        },
        {
          "id": "N90EMFT2B",
          "code": "N90EMFT2B",
          "name": "频率掩码触发 FMT 最佳检测 (Frequency Mask Trigger Optimum)",
          "englishName": "Frequency mask trigger, optimum detection",
          "category": "RTSA",
          "priceEstimate": "+$7,200",
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
      "subtitle": "双通道同步测量、EMC 预兼容、时域扫描与加速测量",
      "englishSubtitle": "Dual channel measurement, EMI pre-compliance, time domain scan, and fast power.",
      "type": "multiple",
      "options": [
        {
          "id": "N90EMDUAB",
          "code": "N90EMDUAB",
          "name": "双通道同步测量套件 (Dual Channel Measurement)",
          "englishName": "Dual channel measurement",
          "category": "Optional Feature",
          "priceEstimate": "+$5,200",
          "description": "支持双通道射频/基带同步测试与相位比较。",
          "englishDescription": "Supports dual-channel RF/baseband synchronous measurement."
        },
        {
          "id": "N90EMEMCB",
          "code": "N90EMEMCB",
          "name": "基础 EMI 预兼容测量套件 (Basic EMI Pre-compliance)",
          "englishName": "Basic EMI pre-compliance",
          "category": "Optional Feature",
          "priceEstimate": "+$3,200",
          "description": "支持 CISPR 16-1-1 检波器、带宽及 Marker 监听调谐测量。",
          "englishDescription": "Performs EMI pre-compliance measurements with CISPR 16-1-1 detectors."
        },
        {
          "id": "N90EMTDSB",
          "code": "N90EMTDSB",
          "name": "时域扫描 (Time Domain Scan for EMC)",
          "englishName": "Time domain scan",
          "category": "Optional Feature",
          "priceEstimate": "+$4,200",
          "description": "大幅缩短 EMC 预兼容扫描测试时间；需搭配 N6141EM0E 及 DP2/B40。",
          "englishDescription": "Accelerates EMC scan speed via time domain processing."
        },
        {
          "id": "N90EMESCB",
          "code": "N90EMESCB",
          "name": "外部信号源控制接口 (External Source Control)",
          "englishName": "External source control",
          "category": "Optional Feature",
          "priceEstimate": "+$2,800",
          "description": "控制 EXG、MXG 及 PSG 矢量信号源进行扫频与增益测试。",
          "englishDescription": "Controls external Keysight signal generators."
        },
        {
          "id": "N90EMFP2B",
          "code": "N90EMFP2B",
          "name": "快速功率测量加速 (Fast Power Measurement)",
          "englishName": "Fast power up to available max analysis BW",
          "category": "Optional Feature",
          "priceEstimate": "+$2,500",
          "description": "大幅提升 ACPR 及通道功率测试速度；需选配 B40/B2X/B5X/H1G。",
          "englishDescription": "Accelerates ACPR and channel power measurement speed."
        },
        {
          "id": "N90EMRBEB",
          "code": "N90EMRBEB",
          "name": "零扫宽 RBW 扩展 (Resolution Bandwidth Extended)",
          "englishName": "Resolution bandwidth extended",
          "category": "Optional Feature",
          "priceEstimate": "+$2,000",
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
          "id": "N9040B-SS7",
          "code": "N9040B-SS7",
          "name": "额外可拆卸 M.2 NVMe Win11 固态硬盘 (Additional SSD)",
          "englishName": "Additional removable M.2 NVMe SSD",
          "category": "Security",
          "priceEstimate": "+$2,000",
          "description": "提供第 2 块完全镜像安装好 Win11 系统与镜像的可拆卸 SSD 硬盘。",
          "englishDescription": "Provides additional fully-imaged removable SSD."
        },
        {
          "id": "N9040B-SF1",
          "code": "N9040B-SF1",
          "name": "安全特性: 禁止启动外部 Windows 程序",
          "englishName": "Security features, exclude launch programs",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "限制在仪表界面中调用或运行其他第三方 Windows 可执行文件。",
          "englishDescription": "Prevents launching external Windows programs."
        },
        {
          "id": "N9040B-SF2",
          "code": "N9040B-SF2",
          "name": "安全特性: 禁止保存测量结果与配置",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "防止数据泄露，禁止将测试数据和用户配置文件写盘保存。",
          "englishDescription": "Prohibits saving measurement data to disk."
        },
        {
          "id": "N9040B-SF3",
          "code": "N9040B-SF3",
          "name": "安全特性: 内存 RAM Disk 引导加密",
          "englishName": "Security feature, secure RAM disk boot",
          "category": "Security",
          "priceEstimate": "+$2,500",
          "description": "系统引导进入易失性内存，断电后所有运行数据物理抹除。",
          "englishDescription": "Boots OS into volatile memory to clear data upon power cycle."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "增加后面板与硬件扩展接口 (Rear Panel & Hardware Extension)",
      "englishTitle": "Add Rear Panel & Hardware Extension",
      "subtitle": "第二中频、任意中频、视频输出、Real-time Link 及辅助对数视频",
      "englishSubtitle": "Second IF, arbitrary IF, video output, Real-time Link, and aux log video.",
      "type": "multiple",
      "options": [
        {
          "id": "N9040B-CR3",
          "code": "N9040B-CR3",
          "name": "第二中频输出 (Second IF Output)",
          "englishName": "Second IF output",
          "category": "Rear Output",
          "priceEstimate": "+$3,500",
          "description": "后面板 Aux IF 输出宽带第二中频信号。",
          "englishDescription": "Outputs wideband second IF on rear panel."
        },
        {
          "id": "N9040B-CRP",
          "code": "N9040B-CRP",
          "name": "任意中频输出 (Arbitrary IF Output 10-75 MHz)",
          "englishName": "Arbitrary IF output",
          "category": "Rear Output",
          "priceEstimate": "+$3,500",
          "description": "提供 10 至 75 MHz 可调任意中频输出（500 kHz 步进）。",
          "englishDescription": "Outputs arbitrary IF from 10 to 75 MHz."
        },
        {
          "id": "N9040B-YAV",
          "code": "N9040B-YAV",
          "name": "Y 轴屏幕视频输出 (Screen Video Output 0-1V)",
          "englishName": "Y-axis screen video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,200",
          "description": "后面板输出 0 至 1V 模拟检波检波视频信号。",
          "englishDescription": "Provides 0-1V analog video output."
        },
        {
          "id": "N9040B-RTL",
          "code": "N9040B-RTL",
          "name": "实时数据链路接口 Real-Time Link (LVDS)",
          "englishName": "Real-time link",
          "category": "Rear Output",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "连接 X-COM 记录仪或 N5106A PXB 进行高速数据流输出。",
          "englishDescription": "LVDS interface for X-COM recorder or PXB emulator."
        },
        {
          "id": "N9040B-ALV",
          "code": "N9040B-ALV",
          "name": "辅助对数视频输出 (Auxiliary Log Video Output)",
          "englishName": "Auxiliary log video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,500",
          "description": "后面板提供辅助对数检波视频输出信号。",
          "englishDescription": "Provides auxiliary log video output."
        },
        {
          "id": "N9040B-C35",
          "code": "N9040B-C35",
          "name": "APC-3.5mm 前面板精密 RF 输入连接器",
          "englishName": "APC-3.5mm RF input connector",
          "category": "Rear Output",
          "priceEstimate": "+$950",
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
            "N9040B-P08"
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
          "priceEstimate": "+$6,800",
          "requires": [
            "N9040B-DP4"
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
          "priceEstimate": "+$11,800",
          "requires": [
            "N9040B-B2X"
          ],
          "supportsLicense": true,
          "description": "支持 5G NR Sub-6GHz & mmWave 毫米波下行与上行 3GPP 标准解调与 EVM 分析。",
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
          "name": "WLAN 802.11ac/ax/be (Wi-Fi 6E/7) 测量应用软件",
          "englishName": "WLAN 802.11 ac/ax/be",
          "category": "Measurement App",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "支持 Wi-Fi 6E (11ax) 与 Wi-Fi 7 (11be) 160MHz/320MHz 单键解调与 4096QAM 调制品质测试。",
          "englishDescription": "Standard-based WLAN 802.11ac/ax/be Wi-Fi 7 measurement app."
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
      "subtitle": "UXA 支持 1 GHz 极致宽带 89600 VSA 矢量解调、5G NR/Wi-Fi 7 (320MHz) 故障诊断与 4096QAM",
      "englishSubtitle": "Industry-standard 89600 VSA software supporting up to 1 GHz analysis bandwidth.",
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
          "name": "WLAN 802.11n/ac/ax/be (Wi-Fi 6E/7) 调制分析选件",
          "englishName": "High throughput WLAN modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$5,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "高吞吐量 WLAN 802.11ac/ax/be (Wi-Fi 7 320MHz) 解调与 EVM 细化图表。",
          "englishDescription": "WLAN 802.11ac/ax/be Wi-Fi 7 high throughput modulation analysis."
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
          "priceEstimate": "+$2,200",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "为 VSA 软件连接 UXA 硬件驱动支持。",
          "englishDescription": "Provides hardware connectivity for UXA."
        },
        {
          "id": "89601CSDC",
          "code": "89601CSDC",
          "name": "信道模型与空间衰落仿真接口 (Channel Simulator)",
          "englishName": "Channel simulator",
          "category": "VSA Option",
          "priceEstimate": "+$4,800",
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
      "subtitle": "UXA 机架安装套件、USB 光驱、太赫兹波导混频器、外置前放与 110 GHz RCal 模块",
      "englishSubtitle": "UXA rackmount, DVD-ROM, waveguide mixers up to 1.1 THz, and RCal up to 110 GHz.",
      "type": "multiple",
      "options": [
        {
          "id": "N9040B-1CP",
          "code": "N9040B-1CP",
          "name": "UXA 机架安装法兰与把手组合套件 (Rack Mount with Handles)",
          "englishName": "Rack mount kit with handles",
          "category": "Rackmount",
          "priceEstimate": "+$580",
          "description": "为 14.1 英寸 UXA 仪表提供标准机架安装法兰与前面板把手。",
          "englishDescription": "Adds rack mount flanges and handles for UXA."
        },
        {
          "id": "N9040B-DVR",
          "code": "N9040B-DVR",
          "name": "USB 外置 DVD-ROM/CD-RW 光驱",
          "englishName": "USB DVD-ROM/CD-R/RW drive",
          "category": "Accessories",
          "priceEstimate": "+$280",
          "description": "光盘驱动器，便于在 Windows 系统中安装固件和软件。",
          "englishDescription": "USB DVD-ROM drive."
        },
        {
          "id": "N9040B-MSE",
          "code": "N9040B-MSE",
          "name": "USB 光电鼠标 (USB Mouse)",
          "englishName": "Mouse, USB interface",
          "category": "Accessories",
          "priceEstimate": "+$45",
          "description": "USB 光电鼠标。",
          "englishDescription": "USB interface mouse."
        },
        {
          "id": "N9040B-MLP",
          "code": "N9040B-MLP",
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
            "N9040B-EXM"
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
          "id": "U9361F",
          "code": "U9361F",
          "name": "RCal 接收机平坦度与相位校准模块 (最高 50 GHz)",
          "englishName": "Receiver calibration (RCal) module up to 50 GHz",
          "category": "Accessories",
          "priceEstimate": "+$8,800",
          "description": "自动纠正 UXA 50 GHz 输入射频平坦度与增益相位特性的 RCal 模块。",
          "englishDescription": "RCal receiver calibration module up to 50 GHz."
        },
        {
          "id": "U9361M",
          "code": "U9361M",
          "name": "RCal 接收机平坦度与相位校准模块 (最高 110 GHz)",
          "englishName": "Receiver calibration (RCal) module up to 110 GHz",
          "category": "Accessories",
          "priceEstimate": "+$14,500",
          "description": "自动纠正外混频系统 110 GHz 输入射频平坦度与增益相位特性的 RCal 模块。",
          "englishDescription": "RCal receiver calibration module up to 110 GHz."
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
          "id": "N9040B-UK6",
          "code": "N9040B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "附带 UXA 工厂全套实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "N9040B-AMG",
          "code": "N9040B-AMG",
          "name": "Keysight ISO 17025A 认可校准证书",
          "englishName": "Keysight Calibration + Uncertainties + Guardbanding",
          "category": "Calibration",
          "priceEstimate": "+$1,800",
          "description": "出厂提供符合 ISO 17025A 标准的带不确定度评估校准报告。",
          "englishDescription": "ISO 17025A accredited calibration with uncertainties."
        },
        {
          "id": "N9040B-A6J",
          "code": "N9040B-A6J",
          "name": "ANSI Z540-1-1994 合规校准证书",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$1,300",
          "description": "出厂提供符合 ANSI Z540 标准的校准证书。",
          "englishDescription": "ANSI Z540-1-1994 compliant calibration."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$2,800",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$4,500",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-7",
          "code": "R-50C-011-7",
          "name": "7 年期原厂返厂校准保障计划 (7 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 7 years",
          "category": "Warranty",
          "priceEstimate": "+$6,200",
          "description": "7 年内定期返厂检测校准。",
          "englishDescription": "7-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-10",
          "code": "R-50C-011-10",
          "name": "10 年期原厂返厂校准保障计划 (10 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 10 years",
          "category": "Warranty",
          "priceEstimate": "+$8,500",
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
          "priceEstimate": "+$2,200",
          "description": "资深 Keysight 工程师提供 1 天现场仪表操作与开箱指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        },
        {
          "id": "PS-S20-100",
          "code": "PS-S20-100",
          "name": "按天计费应用咨询服务 (Productivity Assistance)",
          "englishName": "Service: Productivity assistance",
          "category": "Service",
          "priceEstimate": "+$2,800",
          "description": "Keysight 专家现场针对具体 DUT 与测试用例提供调试咨询。",
          "englishDescription": "Daily instrument and application consulting using your equipment."
        },
        {
          "id": "PS-X10-100",
          "code": "PS-X10-100",
          "name": "定制化工程技术服务 (Custom Engineering Service)",
          "englishName": "Service: custom engineering service",
          "category": "Service",
          "priceEstimate": "+$4,800",
          "description": "特定应用场景下的测试自动化与系统集成定制工程支持。",
          "englishDescription": "Application-specific custom technical assistance."
        }
      ]
    }
  ]
};
