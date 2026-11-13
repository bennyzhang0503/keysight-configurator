// Keysight SA6210A XA5 Signal Analyzer Dataset
export const SA6210A_DATA = {
  "id": "SA6210A",
  "name": "SA6210A XA5 Signal Analyzer",
  "subtitle": "2 Hz to 32 GHz Dual-Channel Flagship Signal Analyzer (up to 2 GHz Analysis Bandwidth)",
  "family": "XA5 Signal Analyzers",
  "docNumber": "3126-1375.EN / SA6210A",
  "description": "The Keysight SA6210A XA5 is Keysight's next-generation dual-channel 2 Hz to 32 GHz high-performance signal analyzer, delivering up to 2 GHz analysis bandwidth per channel, built-in low phase noise, microwave preselector bypass, noise floor extension, i7 processor with 64GB DDR4, Windows 11, and advanced multi-channel ccEVM / 5G NR / Wi-Fi 7 / 89600 VSA capabilities.",
  "baseSpecs": {
    "display": "High-resolution Multi-touch Capacitive Display with modern UI",
    "processor": "Intel Core i7 High-Performance Processor / 64 GB DDR4 RAM",
    "storage": "Removable Solid-State Drive (SSD) with Windows 11 OS",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "25 MHz Analysis Bandwidth (Option B25 / C25, Expandable to 2 GHz)",
    "standardNoiseFloor": "Noise Floor Extension (NF2) & Microwave Preselector Bypass (MPB) Standard",
    "standardApps": "Spectrum Analyzer & IQ Analyzer (N9060ES1E Standard)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of Channels - Required Option)",
      "englishTitle": "Select Number of Channels",
      "subtitle": "出厂必选通道 1 (SA6210A-001)，可选配增加通道 2 (SA6210A-002) 实现双通道相干分析",
      "englishSubtitle": "Required option. Select 1 or 2 independent RF channels for dual-channel analysis.",
      "type": "single",
      "options": [
        {
          "id": "SA6210A-001",
          "code": "SA6210A-001",
          "name": "通道 1 硬件模块 (Add Channel One - Mandatory)",
          "englishName": "Add channel one",
          "category": "Channels",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含通道 1 硬件及基础信号接收分析能力。",
          "englishDescription": "Add channel one. Required for all configurations."
        },
        {
          "id": "SA6210A-002",
          "code": "SA6210A-002",
          "name": "增加通道 2 硬件模块 (Add Channel Two - Dual Channel)",
          "englishName": "Add channel two",
          "category": "Channels",
          "priceEstimate": "+$32,000",
          "description": "在机箱内增加第二路独立相干 RF 信号分析通道，完美支持双通道 2x2 MIMO 与 ccEVM 测量。",
          "englishDescription": "Add channel two for dual-channel phase-coherent analysis."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "频率覆盖 2 Hz 至 32 GHz (RF 1 通道必选 532，双通道配置时 RF 2 需选配 632)",
      "englishSubtitle": "Required option. Frequency range 2 Hz to 32 GHz for RF 1 (532) and RF 2 (632).",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-532",
          "code": "SA6210A-532",
          "name": "通道 1 频率范围 2 Hz 至 32 GHz (RF 1)",
          "englishName": "Frequency range, 2 Hz to 32 GHz, RF 1",
          "category": "Frequency",
          "priceEstimate": "$58,000",
          "freqMaxGHz": 32.0,
          "description": "通道 1 (RF 1) 频率范围 2 Hz 至 32 GHz，配置 2.4 mm (m) 精密接口。",
          "englishDescription": "Frequency range, 2 Hz to 32 GHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-632",
          "code": "SA6210A-632",
          "name": "通道 2 频率范围 2 Hz 至 32 GHz (RF 2)",
          "englishName": "Frequency range, 2 Hz to 32 GHz, RF 2",
          "category": "Frequency",
          "priceEstimate": "+$38,000",
          "freqMaxGHz": 32.0,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 (RF 2) 频率范围 2 Hz 至 32 GHz (需选配通道 2 选件 002)。",
          "englishDescription": "Frequency range, 2 Hz to 32 GHz, RF 2. For channel two (requires Option 002)."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选配低噪声内部前置放大器 (Add Preamplifier)",
      "englishTitle": "Add a Preamplifier",
      "subtitle": "可选配内置 32 GHz 宽带低噪声前置放大器，显著提升微弱信号灵敏度与 DANL",
      "englishSubtitle": "Optional 32 GHz internal preamplifier for RF 1 (P32) and RF 2 (Q32).",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-P32",
          "code": "SA6210A-P32",
          "name": "通道 1 前置放大器 32 GHz (RF 1)",
          "englishName": "Preamplifier 32 GHz, RF 1",
          "category": "Preamplifier",
          "priceEstimate": "+$9,800",
          "freqLimitGHz": 32.0,
          "requires": [
            "SA6210A-532"
          ],
          "description": "为通道 1 (RF 1) 增加内置 32 GHz 宽带低噪声前置放大器 (仅兼容 532)。",
          "englishDescription": "Preamplifier 32 GHz, RF 1. Compatible with SA6210A-532 only."
        },
        {
          "id": "SA6210A-Q32",
          "code": "SA6210A-Q32",
          "name": "通道 2 前置放大器 32 GHz (RF 2)",
          "englishName": "Preamplifier 32 GHz, RF 2",
          "category": "Preamplifier",
          "priceEstimate": "+$9,800",
          "freqLimitGHz": 32.0,
          "requires": [
            "SA6210A-632"
          ],
          "description": "为通道 2 (RF 2) 增加内置 32 GHz 宽带低噪声前置放大器 (仅兼容 632)。",
          "englishDescription": "Preamplifier 32 GHz, RF 2. Compatible with SA6210A-632 only."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择分析带宽 (Select Analysis Bandwidth)",
      "englishTitle": "Select Analysis Bandwidth",
      "subtitle": "出厂默认标配 25 MHz (B25/C25)，可选配扩展至 40 MHz、255 MHz、480 MHz、1 GHz 或 2 GHz",
      "englishSubtitle": "Default 25 MHz standard. Upgrade to 40 MHz, 255 MHz, 480 MHz, 1 GHz, or 2 GHz per channel.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-B25",
          "code": "SA6210A-B25",
          "name": "通道 1 分析带宽 25 MHz (RF 1 - 出厂标配)",
          "englishName": "Analysis bandwidth, 25 MHz, RF1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "description": "通道 1 出厂默认包含 25 MHz 信号解调分析带宽。",
          "englishDescription": "Analysis bandwidth, 25 MHz, RF1. Licensed as SA6210A-B25; standard."
        },
        {
          "id": "SA6210A-C25",
          "code": "SA6210A-C25",
          "name": "通道 2 分析带宽 25 MHz (RF 2 - 出厂标配)",
          "englishName": "Analysis bandwidth, 25 MHz, RF2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 25,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 出厂默认包含 25 MHz 信号解调分析带宽 (需选配通道 2)。",
          "englishDescription": "Analysis bandwidth, 25 MHz, RF2. Licensed as SA6210A-C25; standard."
        },
        {
          "id": "SA6210A-B40",
          "code": "SA6210A-B40",
          "name": "通道 1 分析带宽 40 MHz (RF 1)",
          "englishName": "Analysis bandwidth, 40 MHz, RF 1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$4,800",
          "bandwidthMHz": 40,
          "description": "通道 1 分析带宽扩展至 40 MHz。",
          "englishDescription": "Analysis bandwidth, 40 MHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-C40",
          "code": "SA6210A-C40",
          "name": "通道 2 分析带宽 40 MHz (RF 2)",
          "englishName": "Analysis bandwidth, 40 MHz, RF 2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$4,800",
          "bandwidthMHz": 40,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 分析带宽扩展至 40 MHz。",
          "englishDescription": "Analysis bandwidth, 40 MHz, RF 2. For channel two."
        },
        {
          "id": "SA6210A-B2X",
          "code": "SA6210A-B2X",
          "name": "通道 1 分析带宽 255 MHz (RF 1)",
          "englishName": "Analysis bandwidth, 255 MHz, RF 1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$11,500",
          "bandwidthMHz": 255,
          "description": "通道 1 分析带宽扩展至 255 MHz (支持宽带蜂窝与 Wi-Fi 6 测量)。",
          "englishDescription": "Analysis bandwidth, 255 MHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-C2X",
          "code": "SA6210A-C2X",
          "name": "通道 2 分析带宽 255 MHz (RF 2)",
          "englishName": "Analysis bandwidth, 255 MHz, RF 2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$11,500",
          "bandwidthMHz": 255,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 分析带宽扩展至 255 MHz。",
          "englishDescription": "Analysis bandwidth, 255 MHz, RF 2. For channel two."
        },
        {
          "id": "SA6210A-B4X",
          "code": "SA6210A-B4X",
          "name": "通道 1 分析带宽 480 MHz (RF 1)",
          "englishName": "Analysis bandwidth, 480 MHz, RF 1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$18,500",
          "bandwidthMHz": 480,
          "description": "通道 1 分析带宽扩展至 480 MHz (支持 Wi-Fi 7 320MHz 宽信道测量)。",
          "englishDescription": "Analysis bandwidth, 480 MHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-C4X",
          "code": "SA6210A-C4X",
          "name": "通道 2 分析带宽 480 MHz (RF 2)",
          "englishName": "Analysis bandwidth, 480 MHz, RF 2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$18,500",
          "bandwidthMHz": 480,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 分析带宽扩展至 480 MHz。",
          "englishDescription": "Analysis bandwidth, 480 MHz, RF 2. For channel two."
        },
        {
          "id": "SA6210A-R10",
          "code": "SA6210A-R10",
          "name": "通道 1 分析带宽 1 GHz (RF 1)",
          "englishName": "Analysis bandwidth, 1 GHz, RF 1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$28,000",
          "bandwidthMHz": 1000,
          "description": "通道 1 分析带宽扩展至 1 GHz (支持超宽带 5G NR FR2 及卫星通信)。",
          "englishDescription": "Analysis bandwidth, 1 GHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-S10",
          "code": "SA6210A-S10",
          "name": "通道 2 分析带宽 1 GHz (RF 2)",
          "englishName": "Analysis bandwidth, 1 GHz, RF 2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$28,000",
          "bandwidthMHz": 1000,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 分析带宽扩展至 1 GHz。",
          "englishDescription": "Analysis bandwidth, 1 GHz, RF 2. For channel two."
        },
        {
          "id": "SA6210A-R20",
          "code": "SA6210A-R20",
          "name": "通道 1 分析带宽 2 GHz (RF 1 旗舰带宽)",
          "englishName": "Analysis bandwidth, 2 GHz, RF 1",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$42,000",
          "bandwidthMHz": 2000,
          "description": "通道 1 分析带宽扩展至 2 GHz 旗舰超宽实时解调带宽。",
          "englishDescription": "Analysis bandwidth, 2 GHz, RF 1. For channel one."
        },
        {
          "id": "SA6210A-S20",
          "code": "SA6210A-S20",
          "name": "通道 2 分析带宽 2 GHz (RF 2 旗舰带宽)",
          "englishName": "Analysis bandwidth, 2 GHz, RF 2",
          "category": "Analysis Bandwidth",
          "priceEstimate": "+$42,000",
          "bandwidthMHz": 2000,
          "requires": [
            "SA6210A-002"
          ],
          "description": "通道 2 分析带宽扩展至 2 GHz 旗舰超宽实时解调带宽。",
          "englishDescription": "Analysis bandwidth, 2 GHz, RF 2. For channel two."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选配可调谐预选器 (Add Preselector)",
      "englishTitle": "Add a Preselector",
      "subtitle": "为通道 1 或通道 2 加装 32 GHz 跟踪可调谐微波预选器，抑制杂散与镜频响应",
      "englishSubtitle": "Add tunable tracking preselector 32 GHz for RF 1 (YF3) and RF 2 (SY3).",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-YF3",
          "code": "SA6210A-YF3",
          "name": "通道 1 可调谐预选器 32 GHz (RF 1)",
          "englishName": "Add tunable preselector 32 GHz, RF 1",
          "category": "Preselector",
          "priceEstimate": "+$12,500",
          "requires": [
            "SA6210A-532"
          ],
          "description": "为通道 1 加装 32 GHz 跟踪预选器硬件，有效滤除带外寄生混频与杂散信号。",
          "englishDescription": "Add tunable preselector 32 GHz, RF 1. Compatible with SA6210A-532 only."
        },
        {
          "id": "SA6210A-SY3",
          "code": "SA6210A-SY3",
          "name": "通道 2 可调谐预选器 32 GHz (RF 2)",
          "englishName": "Add tunable preselector 32 GHz, RF 2",
          "category": "Preselector",
          "priceEstimate": "+$12,500",
          "requires": [
            "SA6210A-632"
          ],
          "description": "为通道 2 加装 32 GHz 跟踪预选器硬件。",
          "englishDescription": "Add tunable preselector 32 GHz, RF 2. Compatible with SA6210A-632 only."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择高级性能选件与多通道分析 (Add Performance Options)",
      "englishTitle": "Add Performance Options",
      "subtitle": "出厂包含超低相噪、微波预选器旁路与底噪扩展，选配扩展 RBW、增强显示及双通道测量",
      "englishSubtitle": "Standard EPB, MPB, NF2. Optional extended RBW (40/80 MHz), enhanced display, and multi-channel.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-EPB",
          "code": "SA6210A-EPB",
          "name": "低相位噪声综合器性能 (出厂标配)",
          "englishName": "Low phase noise performance",
          "category": "Performance",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含超低相位噪声本振综合架构。",
          "englishDescription": "Low phase noise performance; standard."
        },
        {
          "id": "SA6210A-MPB",
          "code": "SA6210A-MPB",
          "name": "微波预选器旁路 (出厂标配)",
          "englishName": "Microwave preselector bypass",
          "category": "Performance",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含微波预选器旁路，为宽带中频分析提供宽平坦度通道。",
          "englishDescription": "Microwave preselector bypass; standard."
        },
        {
          "id": "SA6210A-NF2",
          "code": "SA6210A-NF2",
          "name": "本底噪声扩展技术 (出厂标配)",
          "englishName": "Noise floor extension",
          "category": "Performance",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含物理与算法结合的底噪扩展技术，显著降低有效 DANL 达 10 dB 以上。",
          "englishDescription": "Noise floor extension; standard."
        },
        {
          "id": "N90EMEDPB",
          "code": "N90EMEDPB",
          "name": "增强型显示功能包 (Enhanced Display Package)",
          "englishName": "Enhanced display package",
          "category": "Display Feature",
          "priceEstimate": "+$3,200",
          "supportsLicense": true,
          "description": "在频谱仪模式下增加语图 (Spectrogram)、迹线缩放 (Trace Zoom) 及区域跨度 (Zone Span)。",
          "englishDescription": "Includes spectrogram, trace zoom, and zone span in SA mode."
        },
        {
          "id": "N90EMWR1B",
          "code": "N90EMWR1B",
          "name": "扩展分辨率带宽基础版 (Extends Max RBW to 40 MHz)",
          "englishName": "Resolution Bandwidth extended, basic",
          "category": "Performance",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "将最大 RBW 扩展至 40 MHz (需宽带选件 B2X/B4X/R10/R20，无出口管制)。",
          "englishDescription": "Extends the maximum RBW to 40 MHz; requires B2X, B4X, R10, or R20."
        },
        {
          "id": "N90EMWR2B",
          "code": "N90EMWR2B",
          "name": "扩展分辨率带宽极佳版 (Extends Max RBW to 80 MHz)",
          "englishName": "Resolution bandwidth extended, optimum",
          "category": "Performance",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "将最大 RBW 扩展至 80 MHz (需宽带选件 B2X/B4X/R10/R20)。",
          "englishDescription": "Extends the maximum RBW to 80 MHz; requires B2X, B4X, R10, or R20."
        },
        {
          "id": "SA6210MCHB",
          "code": "SA6210MCHB",
          "name": "多通道相干测量功能 (Multi-channel Measurement)",
          "englishName": "Multi-channel measurement",
          "category": "Multi-channel",
          "priceEstimate": "+$11,800",
          "requires": [
            "SA6210A-001",
            "SA6210A-002"
          ],
          "supportsLicense": true,
          "description": "激活双通道协同测量 (如 ccEVM、双路 MIMO 同步解调)，适用于 VMA、WLAN 及 5G NR (需选配 001 和 002)。",
          "englishDescription": "Enables two-channel measurements (e.g. ccEVM, MIMO) in VMA, WLAN, and 5G NR; requires 001 and 002."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择安全特性与接口选件 (Add Security & Connection Options)",
      "englishTitle": "Add Security & Connection Options",
      "subtitle": "保密固态硬盘、软件运行隔离、禁止保存数据、安全内存启动、GPIB 及 10GbE 以太网",
      "englishSubtitle": "Removable SSD, software launch exclusion, memory boot, GPIB, and 10 GbE interface.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-SD1",
          "code": "SA6210A-SD1",
          "name": "备用预装 Win11 可拆卸固态硬盘 (Additional Removable SSD)",
          "englishName": "Additional removable Solid-State Drive (SSD)",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "除机内主硬盘外，提供完全镜像预装 Windows 11 系统的备用可拔插 SSD。",
          "englishDescription": "Provides a fully imaged, removable SSD in addition to the installed one (Win11)."
        },
        {
          "id": "SA6210A-SF1",
          "code": "SA6210A-SF1",
          "name": "安全特性：禁止启动外部程序 (Exclude Launching Programs)",
          "englishName": "Security features, exclude launching programs",
          "category": "Security",
          "priceEstimate": "+$1,200",
          "supportsLicense": true,
          "description": "禁止从仪表主程序中启动任意外部 Windows 应用程序，确保系统受控。",
          "englishDescription": "Prevents the launching of Windows programs from the instrument application."
        },
        {
          "id": "SA6210A-SF2",
          "code": "SA6210A-SF2",
          "name": "安全特性：禁止保存测量结果与状态 (Prohibit Saving Results)",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$1,200",
          "supportsLicense": true,
          "description": "禁止将测试数据、曲线或仪表配置写入本地硬盘存储，防止涉密数据留存。",
          "englishDescription": "Prevents instrument application from saving/recalling measurement results or configs to storage."
        },
        {
          "id": "SA6210A-SF3",
          "code": "SA6210A-SF3",
          "name": "安全特性：易失性安全内存启动 (Secure RAM Disk Boot)",
          "englishName": "Security feature, secure RAM disk boot",
          "category": "Security",
          "priceEstimate": "+$2,500",
          "supportsLicense": true,
          "description": "操作系统与应用程序完全从易失性 RAM 中引导运行，关机断电后全部痕迹彻底消除。",
          "englishDescription": "Allows instrument to boot Windows OS into volatile memory, power cycle erases all info."
        },
        {
          "id": "SA6210A-GPB",
          "code": "SA6210A-GPB",
          "name": "Micro-D 25 针 GPIB 接口连接选件 (GPIB Connector)",
          "englishName": "Connector, GPIB, Micro-D 25-pin",
          "category": "Connectivity",
          "priceEstimate": "+$950",
          "description": "提供标准 Micro-D 25-pin 自动化系统 GPIB 通信接口硬件。",
          "englishDescription": "Connector, GPIB, Micro-D 25-pin."
        },
        {
          "id": "SA6210A-GBE",
          "code": "SA6210A-GBE",
          "name": "10 Gbits 高速以太网接口 (10GbE Port)",
          "englishName": "Connector, 10 Gbits Ethernet port",
          "category": "Connectivity",
          "priceEstimate": "+$2,800",
          "description": "提供 10 Gbps 高速光纤/以太网接口，用于高通量 IQ 数据实时流式传输。",
          "englishDescription": "Connector, 10 Gbits Ethernet port."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择机载内嵌测量应用软件 (Select Measurement Applications)",
      "englishTitle": "Select Measurement Applications",
      "subtitle": "标配频谱与 IQ 分析，选配功率套件、VMA 通用数字解调、相位噪声、Wi-Fi 7/8 及 5G NR",
      "englishSubtitle": "Standard N9060ES1E. Select Power Suite, VMA, Phase Noise, WLAN 802.11be/bn, and 5G NR.",
      "type": "multiple",
      "options": [
        {
          "id": "N9060ES1E",
          "code": "N9060ES1E",
          "name": "频谱分析仪与 IQ 分析应用软件 (出厂标配)",
          "englishName": "Spectrum analyzer and IQ analyzer",
          "category": "General Purpose",
          "priceEstimate": "Standard",
          "isStandard": true,
          "supportsLicense": true,
          "description": "出厂默认包含全新升级的经典频谱分析与 IQ 分析测量核心。",
          "englishDescription": "Traditional spectrum analysis plus new and enhanced functions; standard."
        },
        {
          "id": "N90EMPSMB",
          "code": "N90EMPSMB",
          "name": "行业标准功率测量套件 (Power Suite)",
          "englishName": "Power Suite",
          "category": "General Purpose",
          "priceEstimate": "+$2,400",
          "supportsLicense": true,
          "description": "基于行业规范的标准功率测试 (信道功率、邻道功率比 ACPR、占用带宽 OBW、互补累积分布函数 CCDF 等)。",
          "englishDescription": "Power measurements based on industry specifications."
        },
        {
          "id": "N9054EM0E",
          "code": "N9054EM0E",
          "name": "矢量调制分析通用数字解调软件 (VMA Digital Demod)",
          "englishName": "Vector modulation analysis digital demodulation",
          "category": "General Purpose",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "支持 FSK、PSK、QAM、MSK、ASK、APSK、VSB 等常用数字调制单键解调分析。",
          "englishDescription": "One-button flexible modulation analysis (FSK, PSK, QAM, MSK, ASK, APSK, etc.)."
        },
        {
          "id": "N9054EM1E",
          "code": "N9054EM1E",
          "name": "矢量调制分析定制 OFDM 调制解调软件 (VMA Custom OFDM)",
          "englishName": "Vector modulation analysis custom OFDM",
          "category": "General Purpose",
          "priceEstimate": "+$6,200",
          "supportsLicense": true,
          "description": "自定义 OFDM 结构与子载波参数分析，支持导入 89600 VSA 或 Signal Studio 设置文件。",
          "englishDescription": "One-button custom OFDM modulation analysis with user-defined settings."
        },
        {
          "id": "N9068EM0E",
          "code": "N9068EM0E",
          "name": "相位噪声单键测量应用软件 (Phase Noise)",
          "englishName": "Phase noise",
          "category": "General Purpose",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "频域对数图 (Log plot) 与时域点频 (Spot frequency) 相位噪声测试，支持外部混频。",
          "englishDescription": "One-button phase noise in frequency and time domain; supports external mixing."
        },
        {
          "id": "N9077EM0E",
          "code": "N9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 测量软件",
          "englishName": "WLAN 802.11a/b/g/j/p/n/af/ah",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "传统 Wi-Fi 协议簇标准单键调制解调与 EVM 测量。",
          "englishDescription": "Standard-based, one-button 802.11a/b/g/j/p/n/af/ah measurement."
        },
        {
          "id": "N9077EM1E",
          "code": "N9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6/6E) 测量软件",
          "englishName": "WLAN 802.11ac/ax",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "Wi-Fi 5 (802.11ac) 与 Wi-Fi 6/6E (802.11ax) 160MHz 宽信道调制与频谱测量。",
          "englishDescription": "Standard-based, one-button 802.11ac/ax measurement."
        },
        {
          "id": "N9077EM2E",
          "code": "N9077EM2E",
          "name": "WLAN 802.11be/bn (Wi-Fi 7/8 320MHz) 测量软件",
          "englishName": "WLAN 802.11be/bn",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "最新 Wi-Fi 7 (802.11be 320MHz 4096QAM) 与 Wi-Fi 8 (802.11bn) 单键测量。",
          "englishDescription": "Standard-based, one-button WLAN 802.11be/bn measurement."
        },
        {
          "id": "N9085EM0E",
          "code": "N9085EM0E",
          "name": "5G NR / 5G-Advanced 测量应用软件",
          "englishName": "5G NR/5G-Advanced",
          "category": "Cellular Communications",
          "priceEstimate": "+$11,500",
          "supportsLicense": true,
          "description": "5G NR 下行与上行多载波 EVM、信道平坦度、发射机杂散与 ACLR 一键分析。",
          "englishDescription": "Standard-based, one-button 5G NR and 5G-Advanced downlink and uplink measurements."
        },
        {
          "id": "N9085EM4E",
          "code": "N9085EM4E",
          "name": "NR V2X 车联网发射机测量软件",
          "englishName": "NR V2X",
          "category": "Cellular Communications",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR V2X 侧链通信发射机射频特性与调制解调测量。",
          "englishDescription": "Standard-based, one-button NR V2X transmitter measurements."
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择 89600 VSA 矢量信号分析软件许可 (89600 VSA Software)",
      "englishTitle": "Select 89600 VSA Software Licenses",
      "subtitle": "业界黄金参考解调标准：高级版/标准版/精简版、直接数据推流、ccEVM、3G/4G/5G 解调与多通道扩展",
      "englishSubtitle": "Industry standard 89600 VSA software: Advanced, Standard, Essential, Direct IQ, ccEVM, cellular apps.",
      "type": "multiple",
      "options": [
        {
          "id": "89601201C",
          "code": "89601201C",
          "name": "89600 VSA 高级矢量信号分析软件 (全功能无限制)",
          "englishName": "Advanced vector signal analysis",
          "category": "89600 VSA",
          "priceEstimate": "+$16,500",
          "supportsLicense": true,
          "description": "无频率与带宽限制，支持多达 64 通道与 512 个并行解调实例的高级全功能分析。",
          "englishDescription": "Advanced VSA all-inclusive with no freq/BW limits, up to 64-channel & 512 parallel instances."
        },
        {
          "id": "89601202C",
          "code": "89601202C",
          "name": "89600 VSA 标准矢量信号分析软件 (最高 55 GHz / 2.16 GHz 带宽)",
          "englishName": "Standard vector signal analysis",
          "category": "89600 VSA",
          "priceEstimate": "+$11,800",
          "supportsLicense": true,
          "description": "支持中心频率达 55 GHz，解调带宽达 2.16 GHz，支持最高 4 通道与 4 实例并行测试。",
          "englishDescription": "Standard VSA up to 55 GHz, 2.16 GHz BW, 4 channels and 4 parallel instances."
        },
        {
          "id": "89601200C",
          "code": "89601200C",
          "name": "89600 VSA 精简基础矢量信号分析软件 (最高 16 GHz / 1 GHz 带宽)",
          "englishName": "Essential vector signal analysis",
          "category": "89600 VSA",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "支持中心频率达 16 GHz，解调带宽达 1 GHz，支持最高 2 通道与 2 实例并行测试。",
          "englishDescription": "Essential VSA up to 16 GHz, 1 GHz BW, 2 channels and 2 parallel instances."
        },
        {
          "id": "89601101C",
          "code": "89601101C",
          "name": "直接数据推流连接选件 (Direct Data Connectivity - VITA-49)",
          "englishName": "Direct data connectivity",
          "category": "89600 VSA Feature",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "通过 .NET/SCPI API 或局域网 VITA-49 协议直接实时推送动态 IQ 数据流。",
          "englishDescription": "Push live IQ data through API (.NET/SCPI) or VITA-49 streaming over LAN."
        },
        {
          "id": "89601EVMC",
          "code": "89601EVMC",
          "name": "ccEVM 互补相关与 IQ-NC 噪声抵消技术",
          "englishName": "ccEVM and IQ-NC",
          "category": "89600 VSA Feature",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "利用双通道交叉相关算法彻底消除接收机自身噪声，突破仪器物理 EVM 极限。",
          "englishDescription": "Improve EVM measurement through ccEVM or IQ-NC cross-correlation technologies."
        },
        {
          "id": "89601BHNC",
          "code": "89601BHNC",
          "name": "5G NR / 5G-Advanced 调制解调分析 (89600 VSA)",
          "englishName": "5G NR/5G-Advanced modulation analysis",
          "category": "89600 VSA App",
          "priceEstimate": "+$9,500",
          "supportsLicense": true,
          "description": "89600 VSA 环境下 5G NR 及 Pre-5G 复杂物理层波形调制与多天线分析。",
          "englishDescription": "5G NR/5G-Advanced, Pre-5G modulation analysis inside 89600 VSA."
        },
        {
          "id": "89601BHGC",
          "code": "89601BHGC",
          "name": "LTE/LTE-A FDD 调制解调分析 (89600 VSA)",
          "englishName": "LTE/LTE-A FDD modulation analysis",
          "category": "89600 VSA App",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "LTE FDD 信号调制质量与矢量解调分析。",
          "englishDescription": "LTE/LTE-Advanced FDD modulation analysis."
        },
        {
          "id": "89601BHHC",
          "code": "89601BHHC",
          "name": "LTE/LTE-A TDD 调制解调分析 (89600 VSA)",
          "englishName": "LTE/LTE-A TDD modulation analysis",
          "category": "89600 VSA App",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工调制质量与多载波分析。",
          "englishDescription": "LTE/LTE-Advanced TDD modulation analysis."
        },
        {
          "id": "89601B7NC",
          "code": "89601B7NC",
          "name": "3G 蜂窝通信调制解调分析 (W-CDMA / cdma2000 / TD-SCDMA)",
          "englishName": "3G modulation analysis",
          "category": "89600 VSA App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "W-CDMA/HSPA+, cdma2000, 1xEV-DO 及 TD-SCDMA 调制解调分析。",
          "englishDescription": "W-CDMA/HSPA+, TD-SCDMA/HSPA, cdma2000, 1xEV-DO modulation analysis."
        },
        {
          "id": "89601CSDC",
          "code": "89601CSDC",
          "name": "激励响应与信道探测信号分析 (Stimulus Response Signal Analysis)",
          "englishName": "Stimulus response signal analysis",
          "category": "89600 VSA Feature",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "执行复杂无线信道探测与元器件高级激励响应测试。",
          "englishDescription": "Performs channel sounding measurement and advanced component tests."
        },
        {
          "id": "89601ULPC",
          "code": "89601ULPC",
          "name": "O-RAN 上行性能提升分析软件 (O-RAN ULPI)",
          "englishName": "O-RAN ULPI",
          "category": "89600 VSA App",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "支持 O-RAN 上行大规模 Massive MIMO 性能增强与信道评估。",
          "englishDescription": "Supports ULPI (Uplink Performance Improvement) for O-RAN to enhance uplink massive MIMO."
        },
        {
          "id": "89601CC1C",
          "code": "89601CC1C",
          "name": "相位相干通道数扩展选件 (最高 8 端口)",
          "englishName": "Phase Coherent Channel Count Expander Up to 8-Port",
          "category": "89600 VSA Feature",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "通过序列化采集扩展多机相干测试通道数至 8 端口。",
          "englishDescription": "Phase coherent channel count expander up to 8-Port with Sequential Acquisition."
        },
        {
          "id": "89601CC2C",
          "code": "89601CC2C",
          "name": "相位相干通道数扩展选件 (最高 64 端口)",
          "englishName": "Phase Coherent Channel Count Expander Up to 64-Port",
          "category": "89600 VSA Feature",
          "priceEstimate": "+$18,500",
          "supportsLicense": true,
          "description": "支持超大规模天线阵列相干采集与解调，扩展多机通道数至 64 端口。",
          "englishDescription": "Phase coherent channel count expander up to 64-Port with Sequential Acquisition."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择硬件附件与机架安装套件 (Select Accessories)",
      "englishTitle": "Select Accessories",
      "subtitle": "出厂包含电源线与 2.4mm 至 2.92mm 转接头，可选面板保护罩、机架导轨及外设",
      "englishSubtitle": "Standard adapter & power cord. Optional front/rear covers, rack mount kits, and GPIB cable.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210A-STD-ADP",
          "code": "Standard",
          "name": "精密同轴转接头 2.4 mm (f) 至 2.92 mm (f) (出厂标配)",
          "englishName": "Adapter, 2.4 mm (f) to 2.92 mm (f)",
          "category": "Accessories",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "用于 32 GHz 毫米波端口转接 (针对 Option 532 与 632 标配随附)。",
          "englishDescription": "Standard adapter, 2.4 mm (f) to 2.92 mm (f). For Option 532 and 632."
        },
        {
          "id": "CV1118A",
          "code": "CV1118A",
          "name": "前后前面板与后面板专业工程保护罩 (Front & Rear Panel Covers)",
          "englishName": "Front and rear panel covers",
          "category": "Accessories",
          "priceEstimate": "+$580",
          "description": "专为实验室外场搬运与设备运输提供坚固物理防护的前后面板罩。",
          "englishDescription": "Protective covers for front and rear panels."
        },
        {
          "id": "SA6210A-2CM",
          "code": "SA6210A-2CM",
          "name": "19 英寸机架安装法兰套件 (不带把手)",
          "englishName": "Rack mount kit, without handles",
          "category": "Rackmount",
          "priceEstimate": "+$620",
          "description": "机柜安装法兰托架与标准滑动导轨组件。",
          "englishDescription": "Rack mount flange kit - two flange brackets, two standard rails."
        },
        {
          "id": "SA6210A-2CP",
          "code": "SA6210A-2CP",
          "name": "19 英寸机架安装法兰与提手套件 (带把手)",
          "englishName": "Rack mount kit, with handles",
          "category": "Rackmount",
          "priceEstimate": "+$780",
          "description": "包含正面耐用工程把手、侧边法兰与滑动导轨的全套机架组件。",
          "englishDescription": "Rack mount flange and handle kit - two flange brackets, handles, rails."
        },
        {
          "id": "Y1260A",
          "code": "Y1260A",
          "name": "MicroD25 至标准 GPIB 接口连接线缆",
          "englishName": "GPIB cable",
          "category": "Accessories",
          "priceEstimate": "+$320",
          "description": "将机身后部 MicroD25 端口转接为标准通用 GPIB 接口电缆。",
          "englishDescription": "Connects a MicroD25 GPIB to a standard GPIB."
        },
        {
          "id": "1MSE001A",
          "code": "1MSE001A",
          "name": "USB 光电鼠标外设 (USB Mouse)",
          "englishName": "USB mouse",
          "category": "Accessories",
          "priceEstimate": "+$60",
          "description": "提升 89600 VSA 密集多窗口操作效率的 USB 光电鼠标。",
          "englishDescription": "Enhances the usability of the 89600 VSA software."
        },
        {
          "id": "1DVR001A",
          "code": "1DVR001A",
          "name": "外置 USB DVD-ROM/CD-R/RW 光驱",
          "englishName": "USB DVD-ROM/CD-R/RW drive",
          "category": "Accessories",
          "priceEstimate": "+$180",
          "description": "外接 USB 光盘驱动器，方便特定专网环境安装驱动与测试脚本。",
          "englishDescription": "Enhances the usability of the Windows OS."
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "选择后购升级选件 (Configure Post-Purchase Upgrades SA6210AU)",
      "englishTitle": "Configure Upgrades (SA6210AU)",
      "subtitle": "纯软件 License-Key 快速升级通道 1/2 带宽 (40M/480M/2GHz) 及机密安全特性",
      "englishSubtitle": "Fast license-key upgrades for bandwidth (40M, 480M, 2G) and security features (SA6210AU).",
      "type": "multiple",
      "options": [
        {
          "id": "SA6210AU-B01",
          "code": "SA6210AU-B01",
          "name": "后购许可: 通道 1 带宽由 25 MHz 升级至 40 MHz (B40)",
          "englishName": "Increase channel 1 analysis bandwidth from 25 MHz to 40 MHz (B40)",
          "category": "Upgrade License",
          "priceEstimate": "+$5,200",
          "description": "纯软件 License 激活通道 1 40 MHz 带宽 (需通道 1 与 2 带宽保持一致)。",
          "englishDescription": "License key only. Required that bandwidths for channel 1 and 2 are identical."
        },
        {
          "id": "SA6210AU-C01",
          "code": "SA6210AU-C01",
          "name": "后购许可: 通道 2 带宽由 25 MHz 升级至 40 MHz (C40)",
          "englishName": "Increase channel 2 analysis bandwidth from 25 MHz to 40 MHz (C40)",
          "category": "Upgrade License",
          "priceEstimate": "+$5,200",
          "description": "纯软件 License 激活通道 2 40 MHz 带宽 (需通道 1 与 2 带宽保持一致)。",
          "englishDescription": "License key only. Required that bandwidths for channel 1 and 2 are identical."
        },
        {
          "id": "SA6210AU-B10",
          "code": "SA6210AU-B10",
          "name": "后购许可: 通道 1 带宽由 255 MHz 升级至 480 MHz (B4X)",
          "englishName": "Increase channel 1 analysis bandwidth from 255 MHz to 480 MHz (B4X)",
          "category": "Upgrade License",
          "priceEstimate": "+$9,500",
          "description": "纯软件 License 激活通道 1 480 MHz 带宽 (从 B2X 升级)。",
          "englishDescription": "License key only. Upgrade from B2X."
        },
        {
          "id": "SA6210AU-C10",
          "code": "SA6210AU-C10",
          "name": "后购许可: 通道 2 带宽由 255 MHz 升级至 480 MHz (C4X)",
          "englishName": "Increase channel 2 analysis bandwidth from 255 MHz to 480 MHz (C4X)",
          "category": "Upgrade License",
          "priceEstimate": "+$9,500",
          "description": "纯软件 License 激活通道 2 480 MHz 带宽 (从 C2X 升级)。",
          "englishDescription": "License key only. Upgrade from C2X."
        },
        {
          "id": "SA6210AU-B15",
          "code": "SA6210AU-B15",
          "name": "后购许可: 通道 1 带宽由 1 GHz 升级至 2 GHz (R20)",
          "englishName": "Increase channel 1 analysis bandwidth from 1 GHz to 2 GHz (R20)",
          "category": "Upgrade License",
          "priceEstimate": "+$18,000",
          "description": "纯软件 License 将通道 1 带宽由 1 GHz 扩展升级至 2 GHz (从 R10 升级)。",
          "englishDescription": "License key only. Upgrade from R10."
        },
        {
          "id": "SA6210AU-C15",
          "code": "SA6210AU-C15",
          "name": "后购许可: 通道 2 带宽由 1 GHz 升级至 2 GHz (S20)",
          "englishName": "Increase channel 2 analysis bandwidth from 1 GHz to 2 GHz (S20)",
          "category": "Upgrade License",
          "priceEstimate": "+$18,000",
          "description": "纯软件 License 将通道 2 带宽由 1 GHz 扩展升级至 2 GHz (从 S10 升级)。",
          "englishDescription": "License key only. Upgrade from S10."
        },
        {
          "id": "SA6210AU-SF1",
          "code": "SA6210AU-SF1",
          "name": "后购许可: 激活禁止启动外部程序安全特性",
          "englishName": "Add security features, exclude launching programs",
          "category": "Upgrade License",
          "priceEstimate": "+$1,400",
          "description": "纯软件 License 升级激活 SF1 安全限制特性。",
          "englishDescription": "License key only."
        },
        {
          "id": "SA6210AU-SF2",
          "code": "SA6210AU-SF2",
          "name": "后购许可: 激活禁止保存测试数据安全特性",
          "englishName": "Add security features, prohibit saving results",
          "category": "Upgrade License",
          "priceEstimate": "+$1,400",
          "description": "纯软件 License 升级激活 SF2 安全限制特性。",
          "englishDescription": "License key only."
        },
        {
          "id": "SA6210AU-SF3",
          "code": "SA6210AU-SF3",
          "name": "后购许可: 激活安全 RAM 内存盘启动特性",
          "englishName": "Add security features, secure RAM disk boot",
          "category": "Upgrade License",
          "priceEstimate": "+$2,800",
          "description": "纯软件 License 升级激活 SF3 安全内存盘特性。",
          "englishDescription": "License key only."
        },
        {
          "id": "SA9094BU-SD1",
          "code": "SA9094BU-SD1",
          "name": "后购备用预装 Windows 11 可拆卸固态硬盘",
          "englishName": "Add additional removable solid state drive, Win11",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$2,000",
          "description": "后购原厂镜像预装 Windows 11 的物理可拔插固态硬盘组件。",
          "englishDescription": "Provides additional removable solid-state drive with Windows 11 OS."
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择服务保障、校准与技术支持 (Services, Calibration & Support)",
      "englishTitle": "Services, Calibration & Support",
      "subtitle": "出厂包含 1 年 KeysightCare Warranty Plus，提供 Enhanced 增强保障与商业校准证书",
      "englishSubtitle": "KeysightCare Warranty Plus standard. Upgrade to Enhanced 1/2/3/5 years, calibration plans.",
      "type": "multiple",
      "options": [
        {
          "id": "R-55F-001-1",
          "code": "R-55F-001-1",
          "name": "KeysightCare Warranty Plus 首年服务保障 (出厂标配)",
          "englishName": "KeysightCare Warranty Plus first year support",
          "category": "Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂默认包含 KeysightCare Warranty Plus 首年保障与原厂返厂保修。",
          "englishDescription": "Includes Return to Keysight Extended Warranty; standard."
        },
        {
          "id": "R-55F-001-2",
          "code": "R-55F-001-2",
          "name": "KeysightCare Warranty Plus 服务保障 - 延长至 2 年",
          "englishName": "KeysightCare Warranty Plus - Extend to 2 years",
          "category": "Services",
          "priceEstimate": "+$4,800",
          "description": "包含 2 年优先技术支持与原厂硬件延保。",
          "englishDescription": "KeysightCare Warranty Plus - Extend to 2 years."
        },
        {
          "id": "R-55F-001-3",
          "code": "R-55F-001-3",
          "name": "KeysightCare Warranty Plus 服务保障 - 延长至 3 年 (推荐选件)",
          "englishName": "KeysightCare Warranty Plus - Extend to 3 years",
          "category": "Services",
          "priceEstimate": "+$8,500",
          "description": "延长服务至 3 年期，保障无忧。",
          "englishDescription": "KeysightCare Warranty Plus - Extend to 3 years."
        },
        {
          "id": "R-55F-001-5",
          "code": "R-55F-001-5",
          "name": "KeysightCare Warranty Plus 服务保障 - 延长至 5 年",
          "englishName": "KeysightCare Warranty Plus - Extend to 5 years",
          "category": "Services",
          "priceEstimate": "+$14,500",
          "description": "延长服务至 5 年期长期维保保障。",
          "englishDescription": "KeysightCare Warranty Plus - Extend to 5 years."
        },
        {
          "id": "R-55B-001-1",
          "code": "R-55B-001-1",
          "name": "KeysightCare Enhanced 增强型保障 - 升级第 1 年 (含校准)",
          "englishName": "KeysightCare Enhanced - Upgrade 1 year",
          "category": "Services",
          "priceEstimate": "+$3,600",
          "description": "升级至 Enhanced 级别：技术支持 + 延保 + 原厂定期计量校准。",
          "englishDescription": "KeysightCare Enhanced - Upgrade 1 year (includes Tech Support, Warranty and Calibration)."
        },
        {
          "id": "R-55B-001-3",
          "code": "R-55B-001-3",
          "name": "KeysightCare Enhanced 增强型保障 - 延长至 3 年 (推荐选件)",
          "englishName": "KeysightCare Enhanced - Extend to 3 years (Recommended)",
          "category": "Services",
          "priceEstimate": "+$11,800",
          "description": "3 年期全包增强服务：技术支持 + 保修 + 定期原厂计量校准。",
          "englishDescription": "KeysightCare Enhanced - Extend to 3 years (Recommended)."
        },
        {
          "id": "R-55B-001-5",
          "code": "R-55B-001-5",
          "name": "KeysightCare Enhanced 增强型保障 - 延长至 5 年",
          "englishName": "KeysightCare Enhanced - Extend to 5 years",
          "category": "Services",
          "priceEstimate": "+$19,500",
          "description": "5 年期尊享增强全包服务。",
          "englishDescription": "KeysightCare Enhanced - Extend to 5 years."
        },
        {
          "id": "SA6210A-UK6",
          "code": "SA6210A-UK6",
          "name": "出厂全通道商业校准证书与测试实测数据",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$1,200",
          "description": "新机出厂附带提供包含完整测量结果与测试数据的商业校准证书。",
          "englishDescription": "Calibration certificate available at time of purchase; provides measurement results."
        },
        {
          "id": "R-50C-011-3-D",
          "code": "R-50C-011-3-D",
          "name": "3 年期原厂定期校准计划 (Return-to-Keysight 3-Year Calibration)",
          "englishName": "Calibration Plan - Return to Keysight - 3 years",
          "category": "Calibration",
          "priceEstimate": "+$5,800",
          "description": "3 年期返厂定期计量校准服务计划。",
          "englishDescription": "Calibration Plan - Return to Keysight - 3 years."
        },
        {
          "id": "R-50C-011-5-D",
          "code": "R-50C-011-5-D",
          "name": "5 年期原厂定期校准计划 (Return-to-Keysight 5-Year Calibration)",
          "englishName": "Calibration Plan - Return to Keysight - 5 years",
          "category": "Calibration",
          "priceEstimate": "+$9,500",
          "description": "5 年期返厂定期计量校准服务计划。",
          "englishDescription": "Calibration Plan - Return to Keysight - 5 years."
        }
      ]
    }
  ]
};
