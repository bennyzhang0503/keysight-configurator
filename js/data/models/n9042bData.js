// Keysight N9042B Configurator Dataset
export const N9042B_DATA = {
  "id": "N9042B",
  "name": "N9042B UXA Signal Analyzer",
  "subtitle": "2 Hz to 50 GHz / 110 GHz Ultra-High Performance UXA Premier Signal Analyzer",
  "family": "Signal Analyzers (UXA-B Series)",
  "docNumber": "5992-1259 / N9042B",
  "description": "The Keysight N9042B UXA is the premier flagship X-Series signal analyzer operating from 2 Hz to 50 GHz, extendable up to 110 GHz via the V3050A frequency extender. It features up to 4.0 GHz ultra-wideband analysis bandwidth, industry-leading phase noise (-136 dBc/Hz @ 1 GHz), and 1.1 THz external mixing.",
  "baseSpecs": {
    "display": "14.1-inch capacitive multi-touch display (1920 x 1080 Full HD)",
    "processor": "Quad-core high-performance processor, 32 GB RAM",
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
      "title": "选择最大频率范围与 110 GHz 扩展 (Select Maximum Frequency Range & 110 GHz Extension)",
      "englishTitle": "Select Maximum Frequency Range & 110 GHz Extension",
      "subtitle": "必选选件（4 选 1），可配合 V3050A 扩频至 110 GHz 毫米波频段",
      "englishSubtitle": "Required option (Choose 1). Frequency range up to 50 GHz, extendable to 110 GHz via V3050A.",
      "type": "single",
      "options": [
        {
          "id": "N9042B-526",
          "code": "N9042B-526",
          "name": "频率范围 2 Hz 至 26.5 GHz",
          "englishName": "Frequency range, 2 Hz to 26.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$88,000",
          "freqMaxGHz": 26.5,
          "description": "2 Hz 超低起步频率覆盖 Sub-6GHz 及 24 GHz 5G mmWave 毫米波。",
          "englishDescription": "Covers frequency range down to 2 Hz up to 26.5 GHz."
        },
        {
          "id": "N9042B-544",
          "code": "N9042B-544",
          "name": "频率范围 2 Hz 至 44 GHz",
          "englishName": "Frequency range, 2 Hz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$108,000",
          "freqMaxGHz": 44,
          "description": "覆盖 Q 波段及 39 GHz 5G 毫米波与卫星通信频段。",
          "englishDescription": "Covers Q-band and 39 GHz 5G mmWave spectrum."
        },
        {
          "id": "N9042B-550",
          "code": "N9042B-550",
          "name": "频率范围 2 Hz 至 50 GHz",
          "englishName": "Frequency range, 2 Hz to 50 GHz",
          "category": "Frequency",
          "priceEstimate": "$128,000",
          "freqMaxGHz": 50,
          "description": "全频段覆盖至 50 GHz，支持超高频微波及外混频扩展至 1.1 THz。",
          "englishDescription": "Full frequency coverage up to 50 GHz."
        },
        {
          "id": "N9042B-575",
          "code": "N9042B-575",
          "name": "110 GHz 毫米波扩频接口选件 (Frequency Extension up to 110 GHz)",
          "englishName": "Frequency extension interface for V3050A up to 110 GHz",
          "category": "Frequency",
          "priceEstimate": "+$35,000",
          "description": "配合 Keysight V3050A 毫米波扩频头，将整机连续扫频范围扩展至 110 GHz。",
          "englishDescription": "Extends frequency range up to 110 GHz with V3050A."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "增加前置放大器 (Add a Preamplifier)",
      "englishTitle": "Add a Preamplifier",
      "subtitle": "显著改善系统的灵敏度与显示平均噪声电平 (DANL)，提供低噪声前放选件",
      "englishSubtitle": "Improves noise floor (DANL) up to 50 GHz.",
      "type": "single",
      "options": [
        {
          "id": "N9042B-P26",
          "code": "N9042B-P26",
          "name": "前置放大器，100 kHz 至 26.5 GHz",
          "englishName": "Preamplifier, 100 kHz to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$14,500",
          "freqLimitGHz": 26.5,
          "compatibleFreqs": [
            "526",
            "544",
            "550"
          ],
          "description": "宽带前置放大至 26.5 GHz，降低底噪。",
          "englishDescription": "Wideband preamplification up to 26.5 GHz."
        },
        {
          "id": "N9042B-P44",
          "code": "N9042B-P44",
          "name": "前置放大器，100 kHz 至 44 GHz",
          "englishName": "Preamplifier, 100 kHz to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$19,500",
          "freqLimitGHz": 44,
          "compatibleFreqs": [
            "544",
            "550"
          ],
          "description": "全频段覆盖至 44 GHz 低噪声放大。",
          "englishDescription": "Full coverage preamplifier up to 44 GHz."
        },
        {
          "id": "N9042B-P50",
          "code": "N9042B-P50",
          "name": "前置放大器，100 kHz 至 50 GHz",
          "englishName": "Preamplifier, 100 kHz to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$22,500",
          "freqLimitGHz": 50,
          "compatibleFreqs": [
            "550"
          ],
          "description": "全频段覆盖至 50 GHz，提供极致低噪灵敏度测试。",
          "englishDescription": "Full coverage preamplifier up to 50 GHz."
        },
        {
          "id": "N9042B-LNP",
          "code": "N9042B-LNP",
          "name": "超低噪声前置放大器 (Low Noise Preamplifier)",
          "englishName": "Low noise preamplifier",
          "category": "Preamplifier",
          "priceEstimate": "+$9,800",
          "description": "提供极致较低噪声系数与微弱信号捕获能力。",
          "englishDescription": "Provides lower noise figure for ultra-weak signal detection."
        },
        {
          "id": "N9042B-LNA",
          "code": "N9042B-LNA",
          "name": "低噪声放大模块 (Low Noise Amplifier)",
          "englishName": "Low noise amplifier",
          "category": "Preamplifier",
          "priceEstimate": "+$7,800",
          "description": "专用低噪声增益放大选件。",
          "englishDescription": "Dedicated low noise gain amplifier."
        },
        {
          "id": "N9042B-P4L",
          "code": "N9042B-P4L",
          "name": "44 GHz 低噪声放大选件 (Low Noise Preamplifier 44GHz)",
          "englishName": "Low noise preamplifier up to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$20,500",
          "description": "优化 44 GHz 段低噪声系数性能。",
          "englishDescription": "Optimized noise figure preamplifier up to 44 GHz."
        },
        {
          "id": "N9042B-P5L",
          "code": "N9042B-P5L",
          "name": "50 GHz 低噪声放大选件 (Low Noise Preamplifier 50GHz)",
          "englishName": "Low noise preamplifier up to 50 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$23,500",
          "description": "优化 50 GHz 段低噪声系数性能。",
          "englishDescription": "Optimized noise figure preamplifier up to 50 GHz."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择相位噪声性能与频率基准 (Phase Noise & Frequency Reference)",
      "englishTitle": "Phase Noise & Frequency Reference",
      "subtitle": "N9042B 极致相噪 Option EP0 (低至 -136 dBc/Hz @ 1 GHz) 及高精度 OCXO 基准",
      "englishSubtitle": "Enhanced Phase Noise (Option EP0) and Precision Frequency Reference (PFR).",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-PFR",
          "code": "N9042B-PFR",
          "name": "高精度频率基准 (Precision Frequency Reference)",
          "englishName": "Precision frequency reference",
          "category": "Reference",
          "priceEstimate": "+$3,500",
          "description": "提供老化率低至 ±1x10^-7/年的 OCXO 高稳定度基准。",
          "englishDescription": "Precision OCXO clock reference with ±1x10^-7/year aging."
        },
        {
          "id": "N9042B-EP0",
          "code": "N9042B-EP0",
          "name": "增强型相位噪声性能 (Enhanced Phase Noise)",
          "englishName": "Enhanced phase noise performance",
          "category": "Performance",
          "priceEstimate": "+$10,800",
          "description": "在 1 GHz 频率下 10 kHz 偏移低至 -136 dBc/Hz，纯净度行业领先。",
          "englishDescription": "Industry-leading phase noise (-136 dBc/Hz @ 1 GHz, 10 kHz offset)."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择衰减器与动态范围扩展 (Choose Attenuator & EDX/EDC)",
      "englishTitle": "Choose Attenuator & EDX/EDC",
      "subtitle": "调整输入射频电平与增强动态范围 EDX/EDC 选件",
      "englishSubtitle": "Attenuator and Enhanced Dynamic Range (EDC).",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-ATT-STD",
          "code": "Standard",
          "name": "机械衰减器 (0 至 70 dB, 2 dB 步进)",
          "englishName": "Standard Mechanical Attenuator",
          "category": "Attenuator",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标配 0 至 70 dB 高精度机械衰减器，2 dB 步进。",
          "englishDescription": "Standard 0 to 70 dB mechanical attenuator in 2 dB steps."
        },
        {
          "id": "N9042B-FSA",
          "code": "N9042B-FSA",
          "name": "精密 2 dB 步进衰减器，可降至 0 dB (2 dB Step Attenuator)",
          "englishName": "2 dB step attenuator",
          "category": "Attenuator",
          "priceEstimate": "+$2,800",
          "description": "精细调谐输入电平，优化最大信噪比。",
          "englishDescription": "Fine 2 dB step attenuator tuning down to 0 dB."
        },
        {
          "id": "N9042B-EDC",
          "code": "N9042B-EDC",
          "name": "增强动态范围校准选件 (Enhanced Dynamic Range)",
          "englishName": "Enhanced dynamic range calibration",
          "category": "Attenuator",
          "priceEstimate": "+$6,500",
          "description": "提升宽带解调与复杂多载波测量时的动态范围。",
          "englishDescription": "Improves dynamic range for wideband demodulation."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择分析带宽与微波预选器旁路 (Choose Analysis Bandwidth & MPB)",
      "englishTitle": "Choose Analysis Bandwidth & MPB",
      "subtitle": "N9042B 支持微波预选器旁路 MPB 与全频段旁路 FBP",
      "englishSubtitle": "Microwave preselector bypass MPB and Full bypass FBP.",
      "type": "single",
      "options": [
        {
          "id": "N9042B-B25",
          "code": "Standard",
          "name": "25 MHz 分析带宽 (Standard)",
          "englishName": "25 MHz Analysis Bandwidth",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "description": "N9042B 标配 25 MHz 分析带宽。",
          "englishDescription": "Standard 25 MHz analysis bandwidth."
        },
        {
          "id": "N9042B-MPB",
          "code": "N9042B-MPB",
          "name": "微波预选器旁路 (Microwave Preselector Bypass)",
          "englishName": "Microwave preselector bypass",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$5,800",
          "description": "在 > 3.6 GHz 进行宽带宽测量时必需；开启快速扫描功能 FS1。",
          "englishDescription": "Required for wideband measurements (>3.6 GHz)."
        },
        {
          "id": "N9042B-FBP",
          "code": "N9042B-FBP",
          "name": "全频段预选器旁路 (Full Bypass for Preselector)",
          "englishName": "Full bypass for preselector",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$6,800",
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
      "subtitle": "快速扫描、太赫兹外混频、底噪扩展技术与带外零陷消除",
      "englishSubtitle": "Fast sweep, external mixing up to 1.1 THz, DANL extension, and nulling option.",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-FS1",
          "code": "N9042B-FS1",
          "name": "列表扫描快速扫描能力 (Fast Sweep Capability List Sweep)",
          "englishName": "Fast sweep capability for list sweep",
          "category": "Performance",
          "priceEstimate": "+$3,500",
          "description": "大幅加速 List Sweep 列表扫描产线测试吞吐量速度。",
          "englishDescription": "Accelerates list sweep test throughput speed."
        },
        {
          "id": "N9042B-EXM",
          "code": "N9042B-EXM",
          "name": "外部混频接口 (External Mixing up to 1.1 THz)",
          "englishName": "External mixing",
          "category": "Performance",
          "priceEstimate": "+$6,800",
          "description": "提供 LO 出/中频进 SMA 端口，连接 Keysight 或第三方混频器将频率扩展至 1.1 THz。",
          "englishDescription": "Connects external mixers to extend frequency coverage up to 1.1 THz."
        },
        {
          "id": "N9042B-NF2",
          "code": "N9042B-NF2",
          "name": "底噪扩展技术 (Noise Floor Extension)",
          "englishName": "Noise floor extension",
          "category": "Performance",
          "priceEstimate": "+$6,200",
          "description": "通过对系统底噪建模消除，改善显示平均噪声电平 (DANL) 性能达 10 dB。",
          "englishDescription": "Improves DANL performance by up to 10 dB via noise floor modeling."
        },
        {
          "id": "N9042B-NUL",
          "code": "N9042B-NUL",
          "name": "带外零陷滤波器与杂散调谐选件 (Nulling Option)",
          "englishName": "Nulling option",
          "category": "Performance",
          "priceEstimate": "+$2,800",
          "description": "优化高频带外杂散消除与零陷调谐。",
          "englishDescription": "Out-of-band spur nulling tuning option."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "⚡ 增加 4.0 GHz 极致宽带 RTSA 实时分析 (Ultra-Wideband RTSA up to 4.0 GHz)",
      "englishTitle": "Add Ultra-Wideband Real-Time Spectrum Analysis up to 4.0 GHz",
      "subtitle": "N9042B 独家支持高达 4.0 GHz 超宽解调带宽与实时频谱分析 (Option R40)",
      "englishSubtitle": "UXA N9042B exclusive 4.0 GHz ultra-wideband analysis & real-time spectrum analysis (Option R40).",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-R10",
          "code": "N9042B-R10",
          "name": "1.0 GHz 宽带实时频谱分析 (1.0 GHz RTSA)",
          "englishName": "1.0 GHz real-time spectrum analysis bandwidth",
          "category": "RTSA",
          "priceEstimate": "+$42,000",
          "description": "提供 1.0 GHz 宽带无缝实时频谱测量与捕捉。",
          "englishDescription": "Provides 1.0 GHz real-time analysis bandwidth."
        },
        {
          "id": "N9042B-R15",
          "code": "N9042B-R15",
          "name": "1.5 GHz 宽带实时频谱分析 (1.5 GHz RTSA)",
          "englishName": "1.5 GHz real-time spectrum analysis bandwidth",
          "category": "RTSA",
          "priceEstimate": "+$52,000",
          "description": "提供 1.5 GHz 宽带无缝实时频谱测量与捕捉。",
          "englishDescription": "Provides 1.5 GHz real-time analysis bandwidth."
        },
        {
          "id": "N9042B-R20",
          "code": "N9042B-R20",
          "name": "2.0 GHz 超宽带实时频谱分析 (2.0 GHz RTSA)",
          "englishName": "2.0 GHz real-time spectrum analysis bandwidth",
          "category": "RTSA",
          "priceEstimate": "+$68,000",
          "description": "提供 2.0 GHz 宽带无缝实时频谱测量与捕捉。",
          "englishDescription": "Provides 2.0 GHz real-time analysis bandwidth."
        },
        {
          "id": "N9042B-R40",
          "code": "N9042B-R40",
          "name": "4.0 GHz 极致超宽解调带宽与实时频谱分析 (4.0 GHz Ultra-Wideband RTSA)",
          "englishName": "4.0 GHz ultra-wideband real-time spectrum analysis bandwidth",
          "category": "RTSA",
          "priceEstimate": "+$98,000",
          "description": "N9042B 独家旗舰 4.0 GHz 极致超宽解调带宽，满足 6G、雷达及超宽带卫星测试。",
          "englishDescription": "UXA N9042B exclusive 4.0 GHz ultra-wideband analysis for 6G and broadband radar."
        },
        {
          "id": "N9042B-RRT",
          "code": "N9042B-RRT",
          "name": "实时数据传输与记录套件 (Real-Time Data Streaming)",
          "englishName": "Real-time data streaming & recording",
          "category": "RTSA",
          "priceEstimate": "+$21,500",
          "description": "实时数据无缝写盘记录与 IQ 高速流输出。",
          "englishDescription": "Real-time IQ data streaming and recording."
        },
        {
          "id": "N9042RTAB",
          "code": "N9042RTAB",
          "name": "实时频谱分析基础触发套件 (RTSA Trigger Basic)",
          "englishName": "Real-time analysis basic trigger package",
          "category": "RTSA",
          "priceEstimate": "+$9,500",
          "description": "包含频率掩码触发 FMT 基础检测功能。",
          "englishDescription": "Includes basic frequency mask trigger FMT."
        },
        {
          "id": "N9042RTBB",
          "code": "N9042RTBB",
          "name": "实时频谱分析最佳检测触发套件 (RTSA Trigger Optimum)",
          "englishName": "Real-time analysis optimum trigger package",
          "category": "RTSA",
          "priceEstimate": "+$16,500",
          "description": "包含 FMT 及 TQT 最佳检测触发功能。",
          "englishDescription": "Includes optimum frequency mask trigger FMT."
        },
        {
          "id": "N9042RTEB",
          "code": "N9042RTEB",
          "name": "实时扩展测量应用软件 (RTSA Extended App)",
          "englishName": "Real-time extended measurement application",
          "category": "RTSA",
          "priceEstimate": "+$11,800",
          "description": "高级实时频谱密度与余辉图分析工具。",
          "englishDescription": "Advanced real-time persistence display."
        },
        {
          "id": "N9042RTFB",
          "code": "N9042RTFB",
          "name": "实时快速频谱检测包 (RTSA Fast Sweep)",
          "englishName": "Real-time fast sweep package",
          "category": "RTSA",
          "priceEstimate": "+$14,500",
          "description": "实时宽带快速频谱监测模式。",
          "englishDescription": "Real-time fast sweep mode package."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "增加可选特性 (Add Optional Features)",
      "englishTitle": "Add Optional Features",
      "subtitle": "深存储器、存储扩展、EMC 预兼容、外部源控制与加速测量",
      "englishSubtitle": "Deep capture memory, EMI pre-compliance, external source control, and fast power.",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-ST1",
          "code": "N9042B-ST1",
          "name": "深捕获存储扩展套件 Stage 1 (Capture Storage 1)",
          "englishName": "Capture storage stage 1",
          "category": "Optional Feature",
          "priceEstimate": "+$6,200",
          "description": "扩展深度 IQ 捕获存储空间。",
          "englishDescription": "Expands deep IQ capture storage."
        },
        {
          "id": "N9042B-ST2",
          "code": "N9042B-ST2",
          "name": "深捕获存储扩展套件 Stage 2 (Capture Storage 2)",
          "englishName": "Capture storage stage 2",
          "category": "Optional Feature",
          "priceEstimate": "+$11,500",
          "description": "大幅扩展深度 IQ 捕获与长时间记录内存。",
          "englishDescription": "Significantly expands deep IQ capture memory."
        },
        {
          "id": "N90EMEMCB",
          "code": "N90EMEMCB",
          "name": "基础 EMI 预兼容测量套件 (Basic EMI Pre-compliance)",
          "englishName": "Basic EMI pre-compliance",
          "category": "Optional Feature",
          "priceEstimate": "+$3,500",
          "description": "支持 CISPR 16-1-1 检波器、带宽及 Marker 监听调谐测量。",
          "englishDescription": "Performs EMI pre-compliance measurements with CISPR 16-1-1 detectors."
        },
        {
          "id": "N9042B-ESC",
          "code": "N9042B-ESC",
          "name": "外部信号源控制接口 (External Source Control)",
          "englishName": "External source control",
          "category": "Optional Feature",
          "priceEstimate": "+$3,200",
          "description": "控制 EXG、MXG 及 PSG 矢量信号源进行扫频与增益测试。",
          "englishDescription": "Controls external Keysight signal generators."
        },
        {
          "id": "N90EMFP2B",
          "code": "N90EMFP2B",
          "name": "快速功率测量加速 (Fast Power Measurement)",
          "englishName": "Fast power up to available max analysis BW",
          "category": "Optional Feature",
          "priceEstimate": "+$2,800",
          "description": "大幅提升 ACPR 及通道功率测试速度。",
          "englishDescription": "Accelerates ACPR and channel power measurement speed."
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
          "id": "N9042B-SS7",
          "code": "N9042B-SS7",
          "name": "额外可拆卸 M.2 NVMe Win11 固态硬盘 (Additional SSD)",
          "englishName": "Additional removable M.2 NVMe SSD",
          "category": "Security",
          "priceEstimate": "+$2,200",
          "description": "提供第 2 块完全镜像安装好 Win11 系统与镜像的可拆卸 SSD 硬盘。",
          "englishDescription": "Provides additional fully-imaged removable SSD."
        },
        {
          "id": "N9042B-SF1",
          "code": "N9042B-SF1",
          "name": "安全特性: 禁止启动外部 Windows 程序",
          "englishName": "Security features, exclude launch programs",
          "category": "Security",
          "priceEstimate": "+$2,000",
          "description": "限制在仪表界面中调用或运行其他第三方 Windows 可执行文件。",
          "englishDescription": "Prevents launching external Windows programs."
        },
        {
          "id": "N9042B-SF2",
          "code": "N9042B-SF2",
          "name": "安全特性: 禁止保存测量结果与配置",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$2,000",
          "description": "防止数据泄露，禁止将测试数据和用户配置文件写盘保存。",
          "englishDescription": "Prohibits saving measurement data to disk."
        },
        {
          "id": "N9042B-SF3",
          "code": "N9042B-SF3",
          "name": "安全特性: 内存 RAM Disk 引导加密",
          "englishName": "Security feature, secure RAM disk boot",
          "category": "Security",
          "priceEstimate": "+$2,800",
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
      "subtitle": "任意中频、同轴宽带中频输出、外部宽带 IF 及视频输出接口",
      "englishSubtitle": "Arbitrary IF, coaxial wideband IF, external wideband IF, and video output.",
      "type": "multiple",
      "options": [
        {
          "id": "N9042B-CRP",
          "code": "N9042B-CRP",
          "name": "任意中频输出 (Arbitrary IF Output 10-75 MHz)",
          "englishName": "Arbitrary IF output",
          "category": "Rear Output",
          "priceEstimate": "+$3,800",
          "description": "提供 10 至 75 MHz 可调任意中频输出（500 kHz 步进）。",
          "englishDescription": "Outputs arbitrary IF from 10 to 75 MHz."
        },
        {
          "id": "N9042B-CRW",
          "code": "N9042B-CRW",
          "name": "同轴宽带中频输出 (Coaxial Wideband IF Out)",
          "englishName": "Coaxial wideband IF output",
          "category": "Rear Output",
          "priceEstimate": "+$5,200",
          "description": "后面板同轴宽带中频输出接口，用于宽带外部解调。",
          "englishDescription": "Coaxial wideband IF output for external demodulation."
        },
        {
          "id": "N9042B-EXW",
          "code": "N9042B-EXW",
          "name": "外部宽带中频接口 (External Wideband IF)",
          "englishName": "External wideband IF interface",
          "category": "Rear Output",
          "priceEstimate": "+$6,800",
          "description": "提供 4 GHz 超宽解调带宽所需的外部宽带中频连接通路。",
          "englishDescription": "Interface for 4 GHz wideband IF."
        },
        {
          "id": "N9042B-YAV",
          "code": "N9042B-YAV",
          "name": "Y 轴屏幕视频输出 (Screen Video Output 0-1V)",
          "englishName": "Y-axis screen video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,300",
          "description": "后面板输出 0 至 1V 模拟检波检波视频信号。",
          "englishDescription": "Provides 0-1V analog video output."
        },
        {
          "id": "N9042B-ALV",
          "code": "N9042B-ALV",
          "name": "辅助对数视频输出 (Auxiliary Log Video Output)",
          "englishName": "Auxiliary log video output",
          "category": "Rear Output",
          "priceEstimate": "+$1,650",
          "description": "后面板提供辅助对数检波视频输出信号。",
          "englishDescription": "Provides auxiliary log video output."
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
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择 89600 VSA 矢量信号分析软件 (Choose 89600 VSA Software)",
      "englishTitle": "Choose 89600 VSA Software",
      "subtitle": "N9042B 支持 4.0 GHz 极致宽带 89600 VSA 矢量解调与 EVM 细化测量",
      "englishSubtitle": "Industry-standard 89600 VSA software supporting up to 4.0 GHz bandwidth.",
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
          "id": "89601EVMC",
          "code": "89601EVMC",
          "name": "EVM 误差矢量幅度细化分析套件",
          "englishName": "EVM analysis suite",
          "category": "VSA Option",
          "priceEstimate": "+$4,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "对宽带矢量信号进行精细 EVM 误差矢量幅度与子载波分解分析。",
          "englishDescription": "Detailed EVM analysis suite."
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
          "id": "89601B7NC",
          "code": "89601B7NC",
          "name": "3G 蜂窝调制解调选件套件 (WCDMA/cdma2000)",
          "englishName": "3G modulation analysis bundle",
          "category": "VSA Option",
          "priceEstimate": "+$4,200",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "包含 W-CDMA、TD-SCDMA 及 cdma2000 调制解调。",
          "englishDescription": "3G modulation analysis bundle for W-CDMA and cdma2000."
        },
        {
          "id": "89601B7RC",
          "code": "89601B7RC",
          "name": "WLAN 802.11a/b/g/j/p 调制分析选件",
          "englishName": "Wireless connectivity modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$3,800",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "经典 WLAN 802.11a/b/g/j/p 矢量解调。",
          "englishDescription": "WLAN 802.11 a/b/g/j/p modulation analysis."
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
          "id": "89601BHTC",
          "code": "89601BHTC",
          "name": "NB-IoT 物联网调制分析选件",
          "englishName": "IoT modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$3,200",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "窄带物联网 NB-IoT 物理层矢量解调分析。",
          "englishDescription": "NB-IoT modulation analysis."
        },
        {
          "id": "89601BHMC",
          "code": "89601BHMC",
          "name": "DOCSIS 调制解调分析选件",
          "englishName": "DOCSIS modulation analysis",
          "category": "VSA Option",
          "priceEstimate": "+$3,500",
          "requires": [
            "89601200C"
          ],
          "supportsLicense": true,
          "description": "有线电视网络 DOCSIS 3.1 信号矢量解调。",
          "englishDescription": "DOCSIS 3.1 modulation analysis."
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
      "title": "选购 V3050A 110 GHz 扩频头、机架套件与太赫兹混频器 (V3050A 110 GHz Extender & Accessories)",
      "englishTitle": "V3050A 110 GHz Extender & Accessories",
      "subtitle": "V3050A 毫米波扩频模块 (50 至 110 GHz)、机架套件、太赫兹波导混频器与 RCal 模块",
      "englishSubtitle": "V3050A 110 GHz frequency extender, rackmount options, THz mixers, and RCal.",
      "type": "multiple",
      "options": [
        {
          "id": "V3050A",
          "code": "V3050A",
          "name": "V3050A 50 GHz 至 110 GHz 毫米波频段扩频模块",
          "englishName": "V3050A Signal Analyzer Frequency Extender, 50 GHz to 110 GHz",
          "category": "Frequency Extender",
          "priceEstimate": "+$48,500",
          "requires": [
            "N9042B-575"
          ],
          "description": "提供 50 GHz 至 110 GHz 无缝高灵敏度频率扩展测试；需 N9042B-575 选件。",
          "englishDescription": "Provides seamless frequency extension from 50 GHz to 110 GHz for N9042B."
        },
        {
          "id": "N9042B-1RM",
          "code": "N9042B-1RM",
          "name": "N9042B 专属机架安装选件 1RM (Rackmount 1RM)",
          "englishName": "Rackmount option 1RM",
          "category": "Rackmount",
          "priceEstimate": "+$680",
          "description": "N9042B 1RM 规格标准机架安装导轨与安装架。",
          "englishDescription": "Standard rackmount option 1RM for N9042B."
        },
        {
          "id": "N9042B-2RM",
          "code": "N9042B-2RM",
          "name": "机架安装选件 2RM (Rackmount 2RM)",
          "englishName": "Rackmount option 2RM",
          "category": "Rackmount",
          "priceEstimate": "+$720",
          "description": "2RM 机架安装滑轨组合。",
          "englishDescription": "Rackmount option 2RM."
        },
        {
          "id": "N9042B-3RM",
          "code": "N9042B-3RM",
          "name": "机架安装选件 3RM (Rackmount 3RM)",
          "englishName": "Rackmount option 3RM",
          "category": "Rackmount",
          "priceEstimate": "+$780",
          "description": "3RM 机架安装组件。",
          "englishDescription": "Rackmount option 3RM."
        },
        {
          "id": "N9042B-4RM",
          "code": "N9042B-4RM",
          "name": "机架安装选件 4RM (Rackmount 4RM)",
          "englishName": "Rackmount option 4RM",
          "category": "Rackmount",
          "priceEstimate": "+$820",
          "description": "4RM 机架安装组件。",
          "englishDescription": "Rackmount option 4RM."
        },
        {
          "id": "N9042B-2CM",
          "code": "N9042B-2CM",
          "name": "机架安装法兰套件 (Rack Mount Kit)",
          "englishName": "Rack mount kit",
          "category": "Rackmount",
          "priceEstimate": "+$380",
          "description": "为 N9042B 增加 19 英寸标准机架安装法兰。",
          "englishDescription": "Adds rack mount flanges."
        },
        {
          "id": "N9042B-2CP",
          "code": "N9042B-2CP",
          "name": "机架安装法兰与把手组合套件",
          "englishName": "Rack mount with handles",
          "category": "Rackmount",
          "priceEstimate": "+$520",
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
            "N9042B-EXM"
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
            "N9042B-EXM"
          ],
          "description": "智能 USB 混频器，扩展频率测量范围至 50-75 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 50 to 75 GHz."
        },
        {
          "id": "M1970V-002",
          "code": "M1970V-002",
          "name": "扩展 V 波段智能 USB 混频器 (50 至 80 GHz)",
          "englishName": "Extended V-band waveguide harmonic mixer, 50 to 80 GHz",
          "category": "Mixer",
          "priceEstimate": "+$9,200",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "扩展 V 波段智能 USB 混频器，测量范围 50-80 GHz；需 Option EXM。",
          "englishDescription": "Extended V-band USB waveguide mixer for 50 to 80 GHz."
        },
        {
          "id": "M1970W",
          "code": "M1970W",
          "name": "W 波段波导谐波混频器 (75 至 110 GHz)",
          "englishName": "W-band waveguide harmonic mixer, 75 to 110 GHz",
          "category": "Mixer",
          "priceEstimate": "+$11,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "智能 USB 混频器，扩展频率测量范围至 75-110 GHz；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 75 to 110 GHz."
        },
        {
          "id": "M1971E-001",
          "code": "M1971E-001",
          "name": "E 波段 3 信号路径智能混频器 (60 至 90 GHz)",
          "englishName": "E-band waveguide harmonic mixer, 60 to 90 GHz",
          "category": "Mixer",
          "priceEstimate": "+$10,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "带 3 信号路径智能 USB 混频器；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer with 3 signal paths."
        },
        {
          "id": "M1971E-003",
          "code": "M1971E-003",
          "name": "E 波段 3 信号路径智能混频器 (55 至 90 GHz)",
          "englishName": "E-band waveguide harmonic mixer, 55 to 90 GHz",
          "category": "Mixer",
          "priceEstimate": "+$11,200",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "覆盖 55-90 GHz 的 3 信号路径混频器；需 Option EXM。",
          "englishDescription": "Smart USB waveguide mixer for 55 to 90 GHz."
        },
        {
          "id": "M1971V",
          "code": "M1971V",
          "name": "V 波段 3 信号路径智能混频器 (50 至 75 GHz)",
          "englishName": "V-band waveguide harmonic mixer, 50 to 75 GHz",
          "category": "Mixer",
          "priceEstimate": "+$9,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "V 波段 3 信号路径智能混频器；需 Option EXM。",
          "englishDescription": "V-band smart USB mixer with 3 signal paths."
        },
        {
          "id": "M1971W",
          "code": "M1971W",
          "name": "W 波段 3 信号路径智能混频器 (75 至 110 GHz)",
          "englishName": "W-band waveguide harmonic mixer, 75 to 110 GHz",
          "category": "Mixer",
          "priceEstimate": "+$12,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "W 波段 3 信号路径智能混频器；需 Option EXM。",
          "englishDescription": "W-band smart USB mixer with 3 signal paths."
        },
        {
          "id": "11970A",
          "code": "11970A",
          "name": "26.5 至 40 GHz 波导谐波混频器 (11970A)",
          "englishName": "26 to 40 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$5,200",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "需 Option EXM 及 N9029BE13 双工器。",
          "englishDescription": "Requires Option EXM and N9029BE13 diplexer."
        },
        {
          "id": "11970Q",
          "code": "11970Q",
          "name": "33 至 50 GHz 波导谐波混频器 (11970Q)",
          "englishName": "33 to 50 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$5,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "需 Option EXM 及 N9029BE13 双工器。",
          "englishDescription": "Requires Option EXM and N9029BE13 diplexer."
        },
        {
          "id": "11970U",
          "code": "11970U",
          "name": "40 至 60 GHz 波导谐波混频器 (11970U)",
          "englishName": "40 to 60 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$6,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "需 Option EXM 及 N9029BE13 双工器。",
          "englishDescription": "Requires Option EXM and N9029BE13 diplexer."
        },
        {
          "id": "11970V",
          "code": "11970V",
          "name": "50 至 75 GHz 波导谐波混频器 (11970V)",
          "englishName": "50 to 75 GHz waveguide harmonic mixer",
          "category": "Mixer",
          "priceEstimate": "+$7,200",
          "requires": [
            "N9042B-EXM"
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
            "N9042B-EXM"
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
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR15 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 50 to 75 GHz."
        },
        {
          "id": "N9029BV-W12",
          "code": "N9029BV-W12",
          "name": "60 至 90 GHz VDI 频率扩展模块",
          "englishName": "60 to 90 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$16,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR12 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 60 to 90 GHz."
        },
        {
          "id": "N9029BV-W10",
          "code": "N9029BV-W10",
          "name": "75 至 110 GHz VDI 频率扩展模块",
          "englishName": "75 to 110 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$18,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR10 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 75 to 110 GHz."
        },
        {
          "id": "N9029BV-W08",
          "code": "N9029BV-W08",
          "name": "90 至 140 GHz VDI 频率扩展模块",
          "englishName": "90 to 140 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$21,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR08 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 90 to 140 GHz."
        },
        {
          "id": "N9029BV-W06",
          "code": "N9029BV-W06",
          "name": "110 至 170 GHz VDI 频率扩展模块",
          "englishName": "110 to 170 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$24,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR06 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 110 to 170 GHz."
        },
        {
          "id": "N9029BV-W05",
          "code": "N9029BV-W05",
          "name": "140 至 220 GHz VDI 频率扩展模块",
          "englishName": "140 to 220 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$27,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR05 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 140 to 220 GHz."
        },
        {
          "id": "N9029BV-W04",
          "code": "N9029BV-W04",
          "name": "170 至 260 GHz VDI 频率扩展模块",
          "englishName": "170-260 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$31,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR04 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 170 to 260 GHz."
        },
        {
          "id": "N9029BV-W03",
          "code": "N9029BV-W03",
          "name": "220 至 330 GHz VDI 频率扩展模块",
          "englishName": "220 to 330 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$34,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR03 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 220 to 330 GHz."
        },
        {
          "id": "N9029BV-W2B",
          "code": "N9029BV-W2B",
          "name": "260 至 400 GHz VDI 频率扩展模块",
          "englishName": "260 to 400 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$36,800",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR2.8 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 260 to 400 GHz."
        },
        {
          "id": "N9029BV-W02",
          "code": "N9029BV-W02",
          "name": "330 至 500 GHz VDI 频率扩展模块",
          "englishName": "330 to 500 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$38,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 信号分析仪 WR02 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI frequency extension module for 330 to 500 GHz."
        },
        {
          "id": "N9029BV-W1B",
          "code": "N9029BV-W1B",
          "name": "550 至 750 GHz VDI 太赫兹频率扩展模块",
          "englishName": "550 to 750 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$42,500",
          "requires": [
            "N9042B-EXM"
          ],
          "description": "VDI 太赫兹信号分析仪 WR1.5 频段扩展模块；需 Option EXM。",
          "englishDescription": "VDI THz frequency extension module for 550 to 750 GHz."
        },
        {
          "id": "N9029BV-W01",
          "code": "N9029BV-W01",
          "name": "750 至 1100 GHz VDI 太赫兹频率扩展模块 (1.1 THz)",
          "englishName": "750 to 1100 GHz frequency extension module",
          "category": "Mixer",
          "priceEstimate": "+$48,500",
          "requires": [
            "N9042B-EXM"
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
        },
        {
          "id": "N9042B-5RM",
          "code": "N9042B-5RM",
          "name": "机架安装选件 5RM",
          "englishName": "Rackmount option 5RM",
          "category": "Rackmount",
          "priceEstimate": "+$880",
          "description": "5RM 机架导轨套件。"
        },
        {
          "id": "N9042B-6RM",
          "code": "N9042B-6RM",
          "name": "机架安装选件 6RM",
          "englishName": "Rackmount option 6RM",
          "category": "Rackmount",
          "priceEstimate": "+$920",
          "description": "6RM 机架导轨套件。"
        },
        {
          "id": "N9042B-7RM",
          "code": "N9042B-7RM",
          "name": "机架安装选件 7RM",
          "englishName": "Rackmount option 7RM",
          "category": "Rackmount",
          "priceEstimate": "+$980",
          "description": "7RM 机架导轨套件。"
        },
        {
          "id": "N9042B-8RM",
          "code": "N9042B-8RM",
          "name": "机架安装选件 8RM",
          "englishName": "Rackmount option 8RM",
          "category": "Rackmount",
          "priceEstimate": "+$1,050",
          "description": "8RM 机架导轨套件。"
        },
        {
          "id": "N9042B-9RM",
          "code": "N9042B-9RM",
          "name": "机架安装选件 9RM",
          "englishName": "Rackmount option 9RM",
          "category": "Rackmount",
          "priceEstimate": "+$1,120",
          "description": "9RM 机架导轨套件。"
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
          "id": "N9042B-UK6",
          "code": "N9042B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$950",
          "description": "附带 N9042B 工厂全套实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "N9042B-A6J",
          "code": "N9042B-A6J",
          "name": "ANSI Z540-1-1994 合规校准证书",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$1,500",
          "description": "出厂提供符合 ANSI Z540 标准的校准证书。",
          "englishDescription": "ANSI Z540-1-1994 compliant calibration."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$3,200",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$5,200",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "PS-S10",
          "code": "PS-S10",
          "name": "远程预约应用专家技术支持服务",
          "englishName": "Service: Remote scheduled productivity assistance",
          "category": "Service",
          "priceEstimate": "+$850",
          "description": "按小时计费的电话与网络应用专家技术支持。",
          "englishDescription": "Hourly technical support service."
        },
        {
          "id": "PS-S20",
          "code": "PS-S20",
          "name": "现场安装启动与操作培训服务",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$2,200",
          "description": "资深 Keysight 工程师提供现场仪表操作与开箱指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        },
        {
          "id": "PS-S40-01",
          "code": "PS-S40-01",
          "name": "定制化应用提升支持服务 (Productivity Assistance)",
          "englishName": "Service: Productivity assistance",
          "category": "Service",
          "priceEstimate": "+$2,800",
          "description": "Keysight 专家现场针对具体 DUT 与测试用例提供调试咨询。",
          "englishDescription": "Daily instrument and application consulting using your equipment."
        },
        {
          "id": "PS-S40-02",
          "code": "PS-S40-02",
          "name": "应用提升服务 Level 2",
          "englishName": "Service: Productivity assistance level 2",
          "category": "Service",
          "priceEstimate": "+$3,500",
          "description": "高级应用调试咨询工程支持。",
          "englishDescription": "Productivity assistance level 2."
        },
        {
          "id": "PS-S40-04",
          "code": "PS-S40-04",
          "name": "应用提升服务 Level 4",
          "englishName": "Service: Productivity assistance level 4",
          "category": "Service",
          "priceEstimate": "+$5,200",
          "description": "深度定制应用调试咨询工程支持。",
          "englishDescription": "Productivity assistance level 4."
        },
        {
          "id": "PS-X10",
          "code": "PS-X10",
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
