// Keysight SA6320A XA6 Signal Analyzer Dataset
export const SA6320A_DATA = {
  "id": "SA6320A",
  "name": "SA6320A XA6 Signal Analyzer",
  "subtitle": "2 Hz to 55 / 67 GHz Ultra-Performance Flagship Signal Analyzer (up to 8 GHz Analysis Bandwidth)",
  "family": "XA6 Signal Analyzers",
  "docNumber": "3126-1389.EN / SA6320A",
  "description": "The Keysight SA6320A XA6 is Keysight's flagship ultra-performance signal analyzer covering 2 Hz to 67 GHz, supporting up to 8 GHz real-time analysis bandwidth, integrated 16GB GPU hardware acceleration, Intel i9 128GB processor, Windows 11, standard 40 MHz BW (B40), MPB, NF2, EPB, and comprehensive 5G NR / WLAN 802.11be / 89600 VSA capabilities.",
  "baseSpecs": {
    "display": "High-resolution Multi-touch Capacitive Display with modern UI",
    "processor": "Intel Core i9 High-Performance Processor / 128 GB RAM",
    "gpu": "Dedicated Graphics Processing Unit (GPU) 16 GB for measurement acceleration",
    "storage": "Removable Solid-State Drive (SSD) with Windows 11 OS",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "40 MHz Analysis Bandwidth (Option B40 Standard, Expandable to 8 GHz)",
    "standardNoiseFloor": "Noise Floor Extension (NF2) & Microwave Preselector Bypass (MPB) Standard",
    "standardPhaseNoise": "Low Phase Noise Performance (EPB) Standard",
    "standardDisplay": "Enhanced Display Package (N90E1EDPB) Standard",
    "standardApps": "Spectrum Analyzer & IQ Analyzer (N9060ES1E Standard)",
    "standardInterfaces": "Auxiliary IF Out (CR3), 10 Gbits Ethernet (GBE), Micro-D 25-pin GPIB (GPB) Standard"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "频率覆盖 2 Hz 至 55 GHz 或 67 GHz (出厂必选其一)",
      "englishSubtitle": "Required option. Select 55 GHz (555) or 67 GHz (567).",
      "type": "single",
      "options": [
        {
          "id": "SA6320A-555",
          "code": "SA6320A-555",
          "name": "频率范围 2 Hz 至 55 GHz",
          "englishName": "Frequency range, 2 Hz to 55 GHz",
          "category": "Frequency",
          "priceEstimate": "$135,000",
          "freqMaxGHz": 55.0,
          "description": "基础频率范围覆盖 2 Hz 至 55 GHz，配备标准精密 2.4 mm 射频输入端口。",
          "englishDescription": "Frequency range, 2 Hz to 55 GHz."
        },
        {
          "id": "SA6320A-567",
          "code": "SA6320A-567",
          "name": "频率范围 2 Hz 至 67 GHz (旗舰顶级频率覆盖)",
          "englishName": "Frequency range, 2 Hz to 67 GHz",
          "category": "Frequency",
          "priceEstimate": "$168,000",
          "freqMaxGHz": 67.0,
          "description": "基础频率范围覆盖 2 Hz 至 67 GHz，满足高端 V/E/W 频段及太赫兹前段测试需求。",
          "englishDescription": "Frequency range, 2 Hz to 67 GHz."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "添加低噪声前置放大器 (Add a Preamplifier - Optional)",
      "englishTitle": "Add a Preamplifier",
      "subtitle": "针对微弱信号与超低 DANL 需求配置内置前置放大器 (需与主机频率对应)",
      "englishSubtitle": "Optional internal preamplifier. Select 55 GHz (P55/P5N for 555) or 67 GHz (P67/P6N for 567).",
      "type": "single",
      "options": [
        {
          "id": "SA6320A-P55",
          "code": "SA6320A-P55",
          "name": "内置前置放大器 55 GHz (Preamplifier, 55 GHz)",
          "englishName": "Preamplifier, 55 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$18,500",
          "requires": [
            "SA6320A-555"
          ],
          "description": "全频段内置低噪声前置放大器，覆盖至 55 GHz。仅适用于 55 GHz 机型 (555)。",
          "englishDescription": "Preamplifier, 55 GHz. Compatible with SA6320A-555 only."
        },
        {
          "id": "SA6320A-P5N",
          "code": "SA6320A-P5N",
          "name": "内置前置放大器 55 GHz 基础版 (非出口管制 / Non-IVL)",
          "englishName": "Preamplifier, 55 GHz, basic",
          "category": "Preamplifier",
          "priceEstimate": "+$16,500",
          "requires": [
            "SA6320A-555"
          ],
          "description": "基础版 55 GHz 内置前置放大器，非 IVL 出口管制。仅适用于 55 GHz 机型 (555)。",
          "englishDescription": "Preamplifier, 55 GHz, basic. Compatible with SA6320A-555 only; non-IVL, no export control."
        },
        {
          "id": "SA6320A-P67",
          "code": "SA6320A-P67",
          "name": "内置前置放大器 67 GHz (Preamplifier, 67 GHz)",
          "englishName": "Preamplifier, 67 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$22,500",
          "requires": [
            "SA6320A-567"
          ],
          "description": "全频段内置低噪声前置放大器，覆盖至 67 GHz。仅适用于 67 GHz 机型 (567)。",
          "englishDescription": "Preamplifier, 67 GHz. Compatible with SA6320A-567 only."
        },
        {
          "id": "SA6320A-P6N",
          "code": "SA6320A-P6N",
          "name": "内置前置放大器 67 GHz 基础版 (非出口管制 / Non-IVL)",
          "englishName": "Preamplifier, 67 GHz, basic",
          "category": "Preamplifier",
          "priceEstimate": "+$19,800",
          "requires": [
            "SA6320A-567"
          ],
          "description": "基础版 67 GHz 内置前置放大器，非 IVL 出口管制。仅适用于 67 GHz 机型 (567)。",
          "englishDescription": "Preamplifier, 67 GHz, basic. Compatible with SA6320A-567 only; non-IVL, no export control."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择实时分析带宽 (Select Analysis Bandwidth - Required / Upgrade)",
      "englishTitle": "Select Analysis Bandwidth",
      "subtitle": "标配 40 MHz (B40)，可选配扩展至 480 MHz (B4X)、2 GHz (R20)、4 GHz (R40) 或 8 GHz (R80)",
      "englishSubtitle": "Analysis bandwidth: 40 MHz standard (B40). Optionally upgrade to 480 MHz, 2 GHz, 4 GHz, or 8 GHz.",
      "type": "single",
      "options": [
        {
          "id": "SA6320A-B40",
          "code": "SA6320A-B40",
          "name": "分析带宽 40 MHz (Analysis bandwidth, 40 MHz - Standard)",
          "englishName": "Analysis bandwidth, 40 MHz",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准内置 40 MHz 实时信号分析与解调带宽。",
          "englishDescription": "Analysis bandwidth, 40 MHz. Standard configuration, licensed as SA6320A-B40."
        },
        {
          "id": "SA6320A-B4X",
          "code": "SA6320A-B4X",
          "name": "分析带宽扩展至 480 MHz (Analysis bandwidth, 480 MHz)",
          "englishName": "Analysis bandwidth, 480 MHz",
          "category": "Bandwidth",
          "priceEstimate": "+$21,000",
          "description": "将实时分析带宽扩展至 480 MHz，完美满足 Wi-Fi 7 (320 MHz) 与 5G NR 载波聚合宽带测试。",
          "englishDescription": "Analysis bandwidth, 480 MHz."
        },
        {
          "id": "SA6320A-R20",
          "code": "SA6320A-R20",
          "name": "分析带宽扩展至 2 GHz (Analysis bandwidth, 2 GHz)",
          "englishName": "Analysis bandwidth, 2 GHz",
          "category": "Bandwidth",
          "priceEstimate": "+$45,000",
          "description": "将实时分析带宽大幅提升至 2 GHz，适合超宽带雷达、卫星通信及 5G FR2 毫米波宽带信号分析。",
          "englishDescription": "Analysis bandwidth, 2 GHz."
        },
        {
          "id": "SA6320A-R40",
          "code": "SA6320A-R40",
          "name": "分析带宽扩展至 4 GHz (Analysis bandwidth, 4 GHz)",
          "englishName": "Analysis bandwidth, 4 GHz",
          "category": "Bandwidth",
          "priceEstimate": "+$72,000",
          "description": "超高实时分析带宽达到 4 GHz，捕捉极高速宽带瞬态脉冲与卫星跳频波形。",
          "englishDescription": "Analysis bandwidth, 4 GHz."
        },
        {
          "id": "SA6320A-R80",
          "code": "SA6320A-R80",
          "name": "分析带宽扩展至 8 GHz (Analysis bandwidth, 8 GHz - Industry Leading)",
          "englishName": "Analysis bandwidth, 8 GHz",
          "category": "Bandwidth",
          "priceEstimate": "+$110,000",
          "description": "行业领先的 8 GHz 超大分析带宽，满足 6G 前沿研究、先进雷达与极端宽带电子战信号测试。",
          "englishDescription": "Analysis bandwidth, 8 GHz. Industry-leading bandwidth capability."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "添加性能选件 (Add Performance Options - Optional)",
      "englishTitle": "Performance Options",
      "subtitle": "低相噪/预选器旁路/底噪扩展/增强显示 (标准内置)；外混频、40M/80M RBW 扩展及 GPU 硬件加速",
      "englishSubtitle": "EPB, MPB, NF2, EDPB are standard. Options for external mixing (EXW), RBW extension (WR1B/WR2B), and GPU EVM acceleration.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6320A-EPB",
          "code": "SA6320A-EPB",
          "name": "低相位噪声性能 (Low phase noise performance - Standard)",
          "englishName": "Low phase noise performance",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准内置低相位噪声基准硬件，提供顶尖近端相噪与极佳动态范围。",
          "englishDescription": "Low phase noise performance. Standard configuration."
        },
        {
          "id": "SA6320A-MPB",
          "code": "SA6320A-MPB",
          "name": "微波预选器旁路 (Microwave preselector bypass - Standard)",
          "englishName": "Microwave preselector bypass",
          "category": "RF Performance",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准内置微波预选器旁路通道，支持大分析带宽 IF 信号直接处理。",
          "englishDescription": "Microwave preselector bypass. Standard configuration."
        },
        {
          "id": "SA6320A-NF2",
          "code": "SA6320A-NF2",
          "name": "噪声底扩展 (Noise floor extension - Standard)",
          "englishName": "Noise floor extension",
          "category": "DANL Enhancement",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准内置噪声底扩展算法与硬件校正，显著降低显示平均噪声电平 (DANL)。",
          "englishDescription": "Noise floor extension. Standard configuration."
        },
        {
          "id": "N90E1EDPB",
          "code": "N90E1EDPB",
          "name": "增强型显示功能包 (Enhanced display package - Standard)",
          "englishName": "Enhanced display package",
          "category": "Display Features",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准包含语图 (Spectrogram)、迹线局部放大 (Trace Zoom) 及区域跨度 (Zone Span) 分析模式。",
          "englishDescription": "Includes spectrogram, trace zoom, and zone span in SA mode. Standard configuration."
        },
        {
          "id": "SA6320A-EXW",
          "code": "SA6320A-EXW",
          "name": "宽带外部混频支持 (External mixing, wide bandwidth)",
          "englishName": "External mixing, wide bandwidth",
          "category": "External Mixing",
          "priceEstimate": "+$9,800",
          "description": "启用宽带外混频接口，支持连接 V3050A 信号分析仪频段扩展模块至 110 GHz。",
          "englishDescription": "External mixing, wide bandwidth. Enables use of V3050A frequency extender."
        },
        {
          "id": "N90EMWR1B",
          "code": "N90EMWR1B",
          "name": "扩展分辨率带宽基础版至 40 MHz (Resolution Bandwidth extended, basic - 40 MHz)",
          "englishName": "Resolution Bandwidth extended, basic",
          "category": "RBW Extension",
          "priceEstimate": "+$4,800",
          "description": "将最大可用分辨率带宽 (RBW) 扩展至 40 MHz；非 IVL 出口管制。与 WR2B 互斥。",
          "englishDescription": "Extends the maximum RBW to 40 MHz; non-IVL, no export control."
        },
        {
          "id": "N90EMWR2B",
          "code": "N90EMWR2B",
          "name": "扩展分辨率带宽最佳版至 80 MHz (Resolution bandwidth extended, optimum - 80 MHz)",
          "englishName": "Resolution bandwidth extended, optimum",
          "category": "RBW Extension",
          "priceEstimate": "+$7,900",
          "description": "将最大可用分辨率带宽 (RBW) 扩展至 80 MHz。与 WR1B 互斥。",
          "englishDescription": "Extends the maximum RBW to 80 MHz."
        },
        {
          "id": "N90EMGPUB",
          "code": "N90EMGPUB",
          "name": "GPU 硬件加速测量软件 (Hardware accelerated measurement)",
          "englishName": "Hardware accelerated measurement",
          "category": "Acceleration",
          "priceEstimate": "+$6,500",
          "description": "充分调用主机配备的 16 GB GPU 算力，大幅加速 5G NR 及复杂调制信号的 EVM 解调与计算速率。",
          "englishDescription": "Hardware accelerated measurement. Accelerates 5G NR EVM measurements."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "添加信息安全与存储选件 (Add Security Features - Optional)",
      "englishTitle": "Security Features",
      "subtitle": "附加预装 Win11 可拆卸固态硬盘、禁止启动外部程序、禁止保存结果及安全 RAM 盘启动",
      "englishSubtitle": "Removable SSD (SDA), forbid external programs (SF1), forbid saving (SF2), secure RAM disk boot (SF3).",
      "type": "multiple",
      "options": [
        {
          "id": "SA6320A-SDA",
          "code": "SA6320A-SDA",
          "name": "附加可拆卸固态硬盘 Win11 (Additional removable SSD)",
          "englishName": "Additional removable solid-state drive (SSD)",
          "category": "Storage",
          "priceEstimate": "+$3,200",
          "description": "提供一块完整预装 Windows 11 操作系统的额外可拆卸固态硬盘，用于多项目或涉密环境快速插拔物理隔离。",
          "englishDescription": "Provides a fully imaged, removable SSD with Windows 11 operating system."
        },
        {
          "id": "SA6320A-SF1",
          "code": "SA6320A-SF1",
          "name": "安全特性: 禁止启动外部程序 (Security features, exclude launching programs)",
          "englishName": "Security features, exclude launching programs",
          "category": "Security",
          "priceEstimate": "+$1,600",
          "description": "防止从仪器软件应用程序启动未经授权的外部 Windows 程序。",
          "englishDescription": "Prevents the launching of Windows programs from the instrument application."
        },
        {
          "id": "SA6320A-SF2",
          "code": "SA6320A-SF2",
          "name": "安全特性: 禁止保存测量结果 (Security features, prohibit saving results)",
          "englishName": "Security features, prohibit saving results",
          "category": "Security",
          "priceEstimate": "+$1,600",
          "description": "防止仪器应用程序将测试数据、曲线或用户配置文件保存至内部数据存储器。",
          "englishDescription": "Prevents instrument application from saving/recalling measurement results or configs."
        },
        {
          "id": "SA6320A-SF3",
          "code": "SA6320A-SF3",
          "name": "安全特性: 安全 RAM 虚拟盘启动 (Security feature, secure RAM disk boot)",
          "englishName": "Security feature, secure RAM disk boot",
          "category": "Security",
          "priceEstimate": "+$2,400",
          "description": "使系统启动并运行于易失性内存 RAM 盘中，确保关机断电后所有数据瞬间彻底清除不留痕迹。",
          "englishDescription": "Allows instrument to boot Windows OS into volatile memory, lost on power cycle."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "添加接口与连通性选件 (Add Connection Options - Optional)",
      "englishTitle": "Connection Options",
      "subtitle": "Aux IF 输出、10G 以太网、Micro-D GPIB (标准内置)；选配 11 GHz 宽中频输出接头 (CRW)",
      "englishSubtitle": "CR3, GBE, GPB are standard. Optional CRW wide IF output connector.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6320A-CR3",
          "code": "SA6320A-CR3",
          "name": "辅助中频输出接口 (Connector, auxiliary IF output - Standard)",
          "englishName": "Connector, auxiliary IF output",
          "category": "Interfaces",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供后背板 Aux IF Out 接口，输出扫频与宽带中频信号。",
          "englishDescription": "Connector, auxiliary IF output. Standard configuration."
        },
        {
          "id": "SA6320A-GBE",
          "code": "SA6320A-GBE",
          "name": "10 Gbits 万兆以太网接口 (Connector, 10 Gbits Ethernet port - Standard)",
          "englishName": "Connector, 10 Gbits Ethernet port",
          "category": "Interfaces",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供 10 Gbps 高速光纤/以太网接口，支持海量 IQ 数据超高速实时流盘与传输。",
          "englishDescription": "Connector, 10 Gbits Ethernet port. Standard configuration."
        },
        {
          "id": "SA6320A-GPB",
          "code": "SA6320A-GPB",
          "name": "GPIB 接口 Micro-D 25 针 (Connector, GPIB, Micro-D 25-pin - Standard)",
          "englishName": "Connector, GPIB, Micro-D 25-pin",
          "category": "Interfaces",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供紧凑型 Micro-D 25 针 GPIB 接口，配合适配线缆兼容传统自动测试系统。",
          "englishDescription": "Connector, GPIB, Micro-D 25-pin. Standard configuration."
        },
        {
          "id": "SA6320A-CRW",
          "code": "SA6320A-CRW",
          "name": "宽中频输出接口 11 GHz 带宽 (Connector, IF out, wide)",
          "englishName": "Connector, IF out, wide",
          "category": "Interfaces",
          "priceEstimate": "+$8,900",
          "description": "激活 Wide IF Out 接口，在中心频率 ≥ 18 GHz 时输出高达 11 GHz 瞬时带宽的中频模拟信号，直连高速示波器与记录器。",
          "englishDescription": "Enables Wide IF Out connector providing 11 GHz BW IF signal for center freqs >= 18 GHz."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择测量应用软件 (Select Measurement Applications)",
      "englishTitle": "Measurement Applications",
      "subtitle": "频谱/IQ 分析 (标配)；PowerSuite、通用矢量调制、OFDM、相位噪声、Wi-Fi 7 及 5G NR/V2X 测量应用",
      "englishSubtitle": "Spectrum analyzer (standard), PowerSuite, Vector Modulation, Phase Noise, WLAN 802.11be, 5G NR, and V2X.",
      "type": "multiple",
      "options": [
        {
          "id": "N9060ES1E",
          "code": "N9060ES1E",
          "name": "传统频谱分析仪与 IQ 分析仪 (标准配置)",
          "englishName": "Spectrum analyzer and IQ analyzer",
          "category": "General Purpose",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准配置提供强大的传统扫频频谱分析与 IQ 时域采集分析功能。",
          "englishDescription": "Spectrum analyzer and IQ analyzer. Standard configuration."
        },
        {
          "id": "N90EMPSMB",
          "code": "N90EMPSMB",
          "name": "Power Suite 功率测量套件 (Power Suite)",
          "englishName": "Power Suite",
          "category": "General Purpose",
          "priceEstimate": "+$3,500",
          "description": "一键执行信道功率、邻道功率比 (ACPR)、占用带宽 (OBW)、频谱辐射模板 (SEM) 及多载波功率测量。",
          "englishDescription": "Power measurements based on industry specifications."
        },
        {
          "id": "N9054EM0E",
          "code": "N9054EM0E",
          "name": "矢量调制分析数字解调应用 (Vector modulation analysis digital demodulation)",
          "englishName": "Vector modulation analysis digital demodulation",
          "category": "General Purpose",
          "priceEstimate": "+$7,800",
          "description": "一键灵活分析 FSK, PSK, QAM, MSK, ASK, APSK 等数十种通用调制格式并给出 EVM 指标。",
          "englishDescription": "Performs one-button flexible modulation analysis (FSK, PSK, QAM, MSK, ASK, etc.)."
        },
        {
          "id": "N9054EM1E",
          "code": "N9054EM1E",
          "name": "矢量调制分析自定义 OFDM (Vector modulation analysis custom OFDM)",
          "englishName": "Vector modulation analysis custom OFDM",
          "category": "General Purpose",
          "priceEstimate": "+$8,900",
          "description": "支持自定义参数或载入 89600 VSA / Signal Studio 文件进行一键定制 OFDM 调制解调测试。",
          "englishDescription": "Performs one-button custom OFDM modulation analysis measurement."
        },
        {
          "id": "N9068EM0E",
          "code": "N9068EM0E",
          "name": "相位噪声测量应用 (Phase noise)",
          "englishName": "Phase noise",
          "category": "General Purpose",
          "priceEstimate": "+$7,200",
          "description": "提供频域对数坐标曲线 (Log Plot) 与时域单点频偏 (Spot Frequency) 的一键全自动相位噪声测量。",
          "englishDescription": "Adds one-button measurements for analyzing phase noise in frequency and time domain."
        },
        {
          "id": "N9077EM0E",
          "code": "N9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 测量应用",
          "englishName": "WLAN 802.11a/b/g/j/p/n/af/ah",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$6,800",
          "description": "标准符合性一键式传统 WLAN 802.11a/b/g/n 测试软件。",
          "englishDescription": "Standard-based, one-button 802.11a/b/g/j/p/n/af/ah measurement."
        },
        {
          "id": "N9077EM1E",
          "code": "N9077EM1E",
          "name": "WLAN 802.11ac/ax 测量应用 (Wi-Fi 5 / Wi-Fi 6)",
          "englishName": "WLAN 802.11ac/ax",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$8,900",
          "description": "支持高阶调制与宽带 OFDMA 信号的 802.11ac/ax 一键测试软件。",
          "englishDescription": "Standard-based, one-button 802.11ac/ax measurement."
        },
        {
          "id": "N9077EM2E",
          "code": "N9077EM2E",
          "name": "WLAN 802.11be/bn 测量应用 (Wi-Fi 7 / Wi-Fi 8)",
          "englishName": "WLAN 802.11be/bn",
          "category": "Wireless Connectivity",
          "priceEstimate": "+$11,500",
          "description": "支持 320 MHz 带宽与 4096-QAM 超高阶调制的 Wi-Fi 7 及下一代 Wi-Fi 8 前沿标准一键测试。",
          "englishDescription": "Standard-based, one-button WLAN 802.11be/bn measurement."
        },
        {
          "id": "N9085EM0E",
          "code": "N9085EM0E",
          "name": "5G NR / 5G-Advanced 测量应用",
          "englishName": "5G NR/5G-Advanced",
          "category": "Cellular",
          "priceEstimate": "+$12,800",
          "description": "覆盖 3GPP Rel-15 至 Rel-18 5G-Advanced 上行与下行发射机特性、EVM 及射频一致性测试。",
          "englishDescription": "Standard-based, one-button 5G NR and 5G-Advanced downlink and uplink measurements."
        },
        {
          "id": "N9085EM4E",
          "code": "N9085EM4E",
          "name": "NR V2X 车联网通信测量应用 (NR V2X)",
          "englishName": "NR V2X",
          "category": "Cellular",
          "priceEstimate": "+$9,500",
          "description": "标准符合性 5G NR V2X 车对车与车对基础设施直连通信发射机测试应用。",
          "englishDescription": "Standard-based, one-button NR V2X transmitter measurements."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择 89600 VSA 矢量信号分析软件许可证 (Select 89600 VSA Software Licenses)",
      "englishTitle": "89600 VSA Software Licenses",
      "subtitle": "核心基础包 (201C/202C/203C)、调制解调、5G/LTE、Wi-Fi 7、雷达脉冲及太赫兹/卫星前沿分析",
      "englishSubtitle": "89600 VSA core licenses, custom OFDM, ccEVM, 5G NR, Wi-Fi 7, FMCW radar, and pulse analysis.",
      "type": "multiple",
      "options": [
        {
          "id": "89601201C",
          "code": "89601201C",
          "name": "89600 VSA 高级全功能矢量信号分析基础软件 (Advanced VSA - All-inclusive)",
          "englishName": "Advanced vector signal analysis",
          "category": "VSA Core",
          "priceEstimate": "+$18,000",
          "description": "全功能无频率与带宽限制，支持高达 64 通道与 512 并行实例的多通道相干高级解调分析平台。",
          "englishDescription": "Advanced VSA all-inclusive with no freq/BW limits, up to 64 channels and 512 instances."
        },
        {
          "id": "89601202C",
          "code": "89601202C",
          "name": "89600 VSA 标准版分析基础软件 (Standard VSA - up to 55 GHz / 2.16 GHz BW)",
          "englishName": "Standard vector signal analysis",
          "category": "VSA Core",
          "priceEstimate": "+$12,000",
          "description": "最高支持 55 GHz 中心频率、2.16 GHz 分析带宽、4 通道与 4 并行实例。",
          "englishDescription": "Standard VSA up to 55 GHz center freq, 2.16 GHz BW, 4 channels and 4 instances."
        },
        {
          "id": "89601203C",
          "code": "89601203C",
          "name": "89600 VSA 基础版分析软件 (Essential VSA - up to 8 GHz / 160 MHz BW)",
          "englishName": "Essential vector signal analysis",
          "category": "VSA Core",
          "priceEstimate": "+$7,500",
          "description": "最高支持 8 GHz 中心频率、160 MHz 分析带宽及单通道分析。",
          "englishDescription": "Essential VSA up to 8 GHz center freq, 160 MHz BW, single channel."
        },
        {
          "id": "89601PSMC",
          "code": "89601PSMC",
          "name": "89600 VSA PowerSuite 测量选件 (ACP & SEM)",
          "englishName": "Power Suite",
          "category": "VSA General Purpose",
          "priceEstimate": "+$3,200",
          "description": "提供 ACP 与 SEM 快速功率测量。",
          "englishDescription": "PowerSuite measurement for ACP and SEM."
        },
        {
          "id": "89601AYAC",
          "code": "89601AYAC",
          "name": "89600 VSA 数字解调分析选件 (>40 种调制格式)",
          "englishName": "Digital demodulation analysis",
          "category": "VSA General Purpose",
          "priceEstimate": "+$6,200",
          "description": "支持分析超过 40 种通信调制格式 (GSM, EDGE, W-CDMA, Bluetooth, ZigBee, APCO25, DVB-S2, ATSC 等)。",
          "englishDescription": "Analysis of > 40 modulation formats for communication formats."
        },
        {
          "id": "89601BHFC",
          "code": "89601BHFC",
          "name": "89600 VSA 定制 OFDM 调制分析选件 (Custom OFDM)",
          "englishName": "Custom OFDM modulation analysis",
          "category": "VSA General Purpose",
          "priceEstimate": "+$7,800",
          "description": "用于非标与预研 OFDM 格式解调，如 6GR (FR1/FR3)、5G NR、WLAN、DAB、DVB 等。",
          "englishDescription": "Proprietary and pre-standard OFDM formats modulation analysis."
        },
        {
          "id": "89601101C",
          "code": "89601101C",
          "name": "89600 VSA 直连数据流连通性选件 (Direct data connectivity)",
          "englishName": "Direct data connectivity",
          "category": "VSA General Purpose",
          "priceEstimate": "+$4,500",
          "description": "通过 API 编程 (.NET/SCPI) 或局域网 VITA-49 数据流直接推送实时 IQ 数据。",
          "englishDescription": "Push live IQ data through API (.NET/SCPI) or VITA-49 streaming over LAN."
        },
        {
          "id": "89601EVMC",
          "code": "89601EVMC",
          "name": "89600 VSA 跨载波 EVM 与噪声消除选件 (ccEVM and IQ-NC)",
          "englishName": "ccEVM and IQ-NC",
          "category": "VSA General Purpose",
          "priceEstimate": "+$6,900",
          "description": "通过先进的 ccEVM 交叉消除与 IQ-NC 仪器噪声消除技术大幅改善极限 EVM 测量底限。",
          "englishDescription": "Improve EVM measurement through ccEVM or IQ-NC technologies."
        },
        {
          "id": "89601B7NC",
          "code": "89601B7NC",
          "name": "89600 VSA 3G 调制分析选件 (W-CDMA, cdma2000)",
          "englishName": "3G modulation analysis",
          "category": "VSA Cellular",
          "priceEstimate": "+$4,800",
          "description": "W-CDMA/HSPA+, TD-SCDMA/HSPA, cdma2000, 1xEV-DO 调制分析。",
          "englishDescription": "W-CDMA/HSPA+, TD-SCDMA/HSPA, cdma2000 modulation analysis."
        },
        {
          "id": "89601BHGC",
          "code": "89601BHGC",
          "name": "89600 VSA LTE/LTE-A FDD 调制分析选件",
          "englishName": "LTE/LTE-A FDD modulation analysis",
          "category": "VSA Cellular",
          "priceEstimate": "+$6,200",
          "description": "LTE 及 LTE-Advanced FDD 完整调制解调与多载波分析。",
          "englishDescription": "LTE/LTE-Advanced FDD modulation analysis."
        },
        {
          "id": "89601BHHC",
          "code": "89601BHHC",
          "name": "89600 VSA LTE/LTE-A TDD 调制分析选件",
          "englishName": "LTE/LTE-A TDD modulation analysis",
          "category": "VSA Cellular",
          "priceEstimate": "+$6,200",
          "description": "LTE 及 LTE-Advanced TDD 调制解调分析。",
          "englishDescription": "LTE/LTE-Advanced TDD modulation analysis."
        },
        {
          "id": "89601BHNC",
          "code": "89601BHNC",
          "name": "89600 VSA 5G NR/5G-Advanced 调制分析选件",
          "englishName": "5G NR/5G-Advanced modulation analysis",
          "category": "VSA Cellular",
          "priceEstimate": "+$9,500",
          "description": "5G NR / 5G-Advanced 及 Pre-5G 完整调制参数、EVM 与波束成形解调分析。",
          "englishDescription": "5G NR/5G-Advanced, Pre-5G modulation analysis."
        },
        {
          "id": "89601CSDC",
          "code": "89601CSDC",
          "name": "89600 VSA 激励响应信号分析选件 (Stimulus response signal analysis)",
          "englishName": "Stimulus response signal analysis",
          "category": "VSA Cellular",
          "priceEstimate": "+$7,800",
          "description": "执行无线信道探测 (Channel Sounding) 与高级组件测试测量。",
          "englishDescription": "Performs channel sounding measurement and advanced component test features."
        },
        {
          "id": "89601ULPC",
          "code": "89601ULPC",
          "name": "89600 VSA O-RAN 上行性能改进选件 (O-RAN ULPI)",
          "englishName": "O-RAN ULPI",
          "category": "VSA Cellular",
          "priceEstimate": "+$8,500",
          "description": "支持 O-RAN ULPI 规范，用于增强大规模天线阵列 Massive MIMO 上行性能分析。",
          "englishDescription": "Supports ULPI for O-RAN to enhance uplink massive MIMO."
        },
        {
          "id": "89601CC1C",
          "code": "89601CC1C",
          "name": "89600 VSA 相位对齐通道扩展器最高 8 端口 (Coherent Port Expander up to 8-Port)",
          "englishName": "Phase Coherent Channel Count Expander Up to 8-Port",
          "category": "VSA Multi-Channel",
          "priceEstimate": "+$6,500",
          "description": "支持基于序贯采集技术扩展至最高 8 端口多通道相位相干分析。",
          "englishDescription": "Phase coherent channel count expander up to 8-Port with Sequential Acquisition."
        },
        {
          "id": "89601CC2C",
          "code": "89601CC2C",
          "name": "89600 VSA 相位对齐通道扩展器最高 64 端口 (Coherent Port Expander up to 64-Port)",
          "englishName": "Phase Coherent Channel Count Expander Up to 64-Port",
          "category": "VSA Multi-Channel",
          "priceEstimate": "+$12,500",
          "description": "支持基于序贯采集技术扩展至最高 64 端口超大多通道相位相干分析。",
          "englishDescription": "Phase coherent channel count expander up to 64-Port with Sequential Acquisition."
        },
        {
          "id": "89601B7RC",
          "code": "89601B7RC",
          "name": "89600 VSA 无线连通性调制分析选件 (WLAN a/b/g/j/p & WiMax)",
          "englishName": "Wireless connectivity modulation analysis",
          "category": "VSA Wireless",
          "priceEstimate": "+$5,800",
          "description": "WLAN 802.11a/b/g/j/p 及 WiMax 调制分析 (包含 EVM 与 SEM)。",
          "englishDescription": "WLAN 802.11a/b/g/j/p and WiMax modulation analysis (including EVM and SEM)."
        },
        {
          "id": "89601BHXC",
          "code": "89601BHXC",
          "name": "89600 VSA 高吞吐量 WLAN 调制分析选件 (802.11n/ac/ax/be/bn)",
          "englishName": "High throughput WLAN modulation analysis",
          "category": "VSA Wireless",
          "priceEstimate": "+$9,800",
          "description": "全线支持 Wi-Fi 4/5/6/7/8 超高带宽调制分析 (包含 EVM 与 SEM)。",
          "englishDescription": "WLAN 802.11n/ac/ax/be/bn modulation analysis (including both EVM and SEM)."
        },
        {
          "id": "89601BHTC",
          "code": "89601BHTC",
          "name": "89600 VSA 物联网调制分析选件 (IoT: NB-IoT, RFID, HRP UWB)",
          "englishName": "IoT modulation analysis",
          "category": "VSA Wireless",
          "priceEstimate": "+$6,200",
          "description": "NB-IoT, RFID 及超宽带 HRP UWB (802.15.4/4z/4ab) 调制分析。",
          "englishDescription": "NB-IoT, RFID, HRP UWB (802.15.4/4z/4ab) modulation analysis."
        },
        {
          "id": "89601BHPC",
          "code": "89601BHPC",
          "name": "89600 VSA 调频连续波 FMCW 雷达分析选件",
          "englishName": "FMCW radar analysis",
          "category": "VSA Radar",
          "priceEstimate": "+$8,500",
          "description": "车载雷达、工业雷达及防务监视雷达使用的调频连续波 (FMCW) 信号解调与线性度分析。",
          "englishDescription": "Analyze Frequency Modulated Continuous Wave (FMCW) radar signals."
        },
        {
          "id": "89601BHQC",
          "code": "89601BHQC",
          "name": "89600 VSA 脉冲分析选件 (Pulse analysis)",
          "englishName": "Pulse analysis",
          "category": "VSA Radar",
          "priceEstimate": "+$8,800",
          "description": "针对线性调频 (Chirp)、跳频雷达及脉冲雷达信号的深层参数统计与包络分析。",
          "englishDescription": "Gain deeper insights to FM linear chirp, frequency hopping, and pulsed radar signals."
        },
        {
          "id": "89601BHMC",
          "code": "89601BHMC",
          "name": "89600 VSA DOCSIS 调制分析选件 (DOCSIS 3.1 / 4.0)",
          "englishName": "DOCSIS modulation analysis",
          "category": "VSA Other Standards",
          "priceEstimate": "+$7,200",
          "description": "有线宽带 DOCSIS 3.1 / 4.0 下行与上行调制分析。",
          "englishDescription": "DOCSIS 3.1/4.0 downstream and upstream modulation analysis."
        },
        {
          "id": "89601DVBC",
          "code": "89601DVBC",
          "name": "89600 VSA 卫星通信分析选件 (DVB-S2/S2X & DVB-RCS2)",
          "englishName": "Satellite communication analysis",
          "category": "VSA Other Standards",
          "priceEstimate": "+$8,200",
          "description": "全信道解码与调制分析，支持 DVB-S2/DVB-S2X (含 Super Frame 5/6/7) 及 DVB-RCS2 返回链路分析。",
          "englishDescription": "Full channel decoding and modulation analysis for DVB-S2/DVB-S2X and DVB-RCS2."
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择附件与扩展硬件 (Select Accessories - Optional)",
      "englishTitle": "Accessories & Hardware",
      "subtitle": "精密同轴转接头、V3050A 毫米波频段扩展器、面板保护盖、光驱、鼠标、GPIB 线缆与机架套件",
      "englishSubtitle": "Coaxial adapters, V3050A frequency extender, panel covers, DVD drive, mouse, GPIB cable, rack kits.",
      "type": "multiple",
      "options": [
        {
          "id": "N5520B",
          "code": "N5520B",
          "name": "精密同轴转接头: 1.85 mm (f) 至 1.85 mm (f)",
          "englishName": "Adapter, 1.85 mm (f) to 1.85 mm (f)",
          "category": "Adapters",
          "priceEstimate": "+$850",
          "description": "高达 67 GHz 的超高性能 1.85 mm 精密同轴转接头。",
          "englishDescription": "Adapter, 1.85 mm (f) to 1.85 mm (f)."
        },
        {
          "id": "11904B",
          "code": "11904B",
          "name": "额外精密转接头: 2.4 mm (f) 至 2.92 mm (f)",
          "englishName": "Additional adapter, 2.4 mm (f) to 2.92 mm (f)",
          "category": "Adapters",
          "priceEstimate": "+$580",
          "description": "2.4 mm 阴头转 2.92 mm 阴头精密同轴转接头。",
          "englishDescription": "Additional adapter, 2.4 mm (f) to 2.92 mm (f)."
        },
        {
          "id": "V3050A",
          "code": "V3050A",
          "name": "V3050A 信号分析仪频段扩展器 (Signal analyzer frequency extender)",
          "englishName": "Signal analyzer frequency extender",
          "category": "Extenders",
          "priceEstimate": "+$48,000",
          "requires": [
            "SA6320A-EXW"
          ],
          "description": "要求选配 EXW 宽带外混频选件；将分析频率延伸至 67 GHz、90 GHz 或 110 GHz。",
          "englishDescription": "Requires SA6320A-EXW; extends frequency to 67, 90 or 110 GHz."
        },
        {
          "id": "CV1118A",
          "code": "CV1118A",
          "name": "前面板与后背板硬质保护盖 (Front and rear panel covers)",
          "englishName": "Front and rear panel covers",
          "category": "Accessories",
          "priceEstimate": "+$280",
          "description": "前面板与后背板硬质防护盖板。",
          "englishDescription": "Protective covers for front and rear panels."
        },
        {
          "id": "1DVR001A",
          "code": "1DVR001A",
          "name": "外置 USB DVD-ROM/CD-R/RW 光驱 (USB DVD-ROM/CD-R/RW drive)",
          "englishName": "USB DVD-ROM/CD-R/RW drive",
          "category": "Accessories",
          "priceEstimate": "+$220",
          "description": "便携式外置 USB 光驱，方便固件与软件离线安装升级。",
          "englishDescription": "Enhances the usability of the Windows OS."
        },
        {
          "id": "1MSE001A",
          "code": "1MSE001A",
          "name": "外接 USB 鼠标 (USB mouse)",
          "englishName": "USB mouse",
          "category": "Accessories",
          "priceEstimate": "+$65",
          "description": "外接 USB 鼠标，提升 89600 VSA 软件精密波形光标操作体验。",
          "englishDescription": "Enhances the usability of the 89600 VSA software."
        },
        {
          "id": "Y1260A",
          "code": "Y1260A",
          "name": "GPIB 连接电缆 (Micro-D 25 针至标准 GPIB)",
          "englishName": "GPIB cable",
          "category": "Cables",
          "priceEstimate": "+$340",
          "description": "将仪器后背板 Micro-D 25 针 GPIB 接口转换为标准 IEEE-488 GPIB 接口。",
          "englishDescription": "Connects a MicroD25 GPIB to a standard GPIB."
        },
        {
          "id": "SA6320A-2CM",
          "code": "SA6320A-2CM",
          "name": "机架安装套件 - 不含把手 (Rack mount kit, without handles)",
          "englishName": "Rack mount kit, without handles",
          "category": "Rack Kits",
          "priceEstimate": "+$480",
          "description": "机架安装法兰套件，包含两只法兰托架及标准导轨。",
          "englishDescription": "Rack mount flange kit – two flange brackets, two standard rails."
        },
        {
          "id": "SA6320A-2CP",
          "code": "SA6320A-2CP",
          "name": "机架安装套件 - 含把手 (Rack mount kit, with handles)",
          "englishName": "Rack mount kit, with handles",
          "category": "Rack Kits",
          "priceEstimate": "+$680",
          "description": "机架安装法兰及把手组合套件，包含法兰、把手与导轨。",
          "englishDescription": "Rack mount flange and handle kit – two flange brackets, handles, rails."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "订购校准、服务与支持 (Order Calibration, Service and Support)",
      "englishTitle": "Calibration & KeysightCare",
      "subtitle": "首年包含 KeysightCare Assured (R-55A-001-1)，提供多年期保修、原厂校准 (Enhanced/Calibration) 及商业校准证书",
      "englishSubtitle": "1 year KeysightCare Assured included. Extend to 2/3/5 years, KeysightCare Enhanced (with Cal), and UK6 cal certificate.",
      "type": "multiple",
      "options": [
        {
          "id": "R-55A-001-1",
          "code": "R-55A-001-1",
          "name": "KeysightCare Assured 首年支持与保修 (标准内置)",
          "englishName": "KeysightCare Assured First Year Support",
          "category": "KeysightCare",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准包含 1 年期 KeysightCare Assured 技术支持与原厂返厂保修。",
          "englishDescription": "Includes Return to Keysight Extended Warranty - 1 year. Standard."
        },
        {
          "id": "R-55A-001-2-D",
          "code": "R-55A-001-2-D",
          "name": "KeysightCare Assured 延长至 2 年 (含返厂保修)",
          "englishName": "KeysightCare Assured – Extend to 2 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$5,800",
          "description": "将 KeysightCare Assured 延长至 2 年服务期。",
          "englishDescription": "Includes Return to Keysight Extended Warranty - 2 years."
        },
        {
          "id": "R-55A-001-3-D",
          "code": "R-55A-001-3-D",
          "name": "KeysightCare Assured 延长至 3 年 (含返厂保修)",
          "englishName": "KeysightCare Assured – Extend to 3 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$9,800",
          "description": "将 KeysightCare Assured 延长至 3 年服务期。",
          "englishDescription": "Includes Return to Keysight Extended Warranty - 3 years."
        },
        {
          "id": "R-55A-001-5-D",
          "code": "R-55A-001-5-D",
          "name": "KeysightCare Assured 延长至 5 年 (含返厂保修)",
          "englishName": "KeysightCare Assured – Extend to 5 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$17,500",
          "description": "将 KeysightCare Assured 延长至 5 年服务期。",
          "englishDescription": "Includes Return to Keysight Extended Warranty - 5 years."
        },
        {
          "id": "R-55B-001-1-D",
          "code": "R-55B-001-1-D",
          "name": "KeysightCare Enhanced 增强版升级 1 年 (含返厂保修与校准)",
          "englishName": "KeysightCare Enhanced – Upgrade 1 year",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$6,500",
          "description": "首年由 Assured 升级至 Enhanced，包含原厂定期校准与承诺优先周转时间 (TAT)。",
          "englishDescription": "Includes KeysightCare Assured plus Return to Keysight Calibration - 1 year."
        },
        {
          "id": "R-55B-001-2-D",
          "code": "R-55B-001-2-D",
          "name": "KeysightCare Enhanced 增强版延长至 2 年 (含校准)",
          "englishName": "KeysightCare Enhanced – Extend to 2 years",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$11,800",
          "description": "包含技术支持、保修及原厂校准服务延长至 2 年。",
          "englishDescription": "KeysightCare Enhanced – Extend to 2 years."
        },
        {
          "id": "R-55B-001-3-D",
          "code": "R-55B-001-3-D",
          "name": "KeysightCare Enhanced 增强版延长至 3 年 (推荐)",
          "englishName": "KeysightCare Enhanced – Extend to 3 years (Recommended)",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$19,500",
          "description": "包含技术支持、保修及原厂校准服务延长至 3 年。",
          "englishDescription": "KeysightCare Enhanced – Extend to 3 years (Recommended)."
        },
        {
          "id": "R-55B-001-5-D",
          "code": "R-55B-001-5-D",
          "name": "KeysightCare Enhanced 增强版延长至 5 年 (推荐)",
          "englishName": "KeysightCare Enhanced – Extend to 5 years (Recommended)",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$34,000",
          "description": "包含技术支持、保修及原厂校准服务延长至 5 年。",
          "englishDescription": "KeysightCare Enhanced – Extend to 5 years (Recommended)."
        },
        {
          "id": "R-55C-001-2-D",
          "code": "R-55C-001-2-D",
          "name": "KeysightCare Calibration 专属校准支持计划 - 2 年",
          "englishName": "KeysightCare Calibration - 2 years",
          "category": "KeysightCare Calibration",
          "priceEstimate": "+$7,800",
          "description": "包含权威认可校准及优先 TAT 技术支持 - 2 年期。",
          "englishDescription": "Includes Return to Keysight Calibration up to Accredited - 2 years."
        },
        {
          "id": "R-55C-001-3-D",
          "code": "R-55C-001-3-D",
          "name": "KeysightCare Calibration 专属校准支持计划 - 3 年",
          "englishName": "KeysightCare Calibration - 3 years",
          "category": "KeysightCare Calibration",
          "priceEstimate": "+$12,800",
          "description": "包含权威认可校准及优先 TAT 技术支持 - 3 年期。",
          "englishDescription": "Includes Return to Keysight Calibration up to Accredited - 3 years."
        },
        {
          "id": "R-55C-001-5-D",
          "code": "R-55C-001-5-D",
          "name": "KeysightCare Calibration 专属校准支持计划 - 5 年",
          "englishName": "KeysightCare Calibration - 5 years",
          "category": "KeysightCare Calibration",
          "priceEstimate": "+$22,500",
          "description": "包含权威认可校准及优先 TAT 技术支持 - 5 年期。",
          "englishDescription": "Includes Return to Keysight Calibration up to Accredited - 5 years."
        },
        {
          "id": "SA6320A-UK6",
          "code": "SA6320A-UK6",
          "name": "商业校准证书附测试数据 (Commercial calibration certificate with test data)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$1,200",
          "description": "出厂包含详细测量数据与误差测试报告的商业校准证书 (仅随新机订购时提供)。",
          "englishDescription": "Calibration certificate only available at time of instrument purchase."
        },
        {
          "id": "R-50C-011-3-D",
          "code": "R-50C-011-3-D",
          "name": "返厂校准保障计划 - 3 年期 (Calibration Plan – Return to Keysight – 3 years)",
          "englishName": "Calibration Plan – Return to Keysight – 3 years",
          "category": "Calibration Plans",
          "priceEstimate": "+$8,500",
          "description": "3 年期原厂返厂定期校准保障计划。",
          "englishDescription": "Calibration Plan – Return to Keysight – 3 years."
        },
        {
          "id": "R-50C-011-5-D",
          "code": "R-50C-011-5-D",
          "name": "返厂校准保障计划 - 5 年期 (Calibration Plan – Return to Keysight – 5 years)",
          "englishName": "Calibration Plan – Return to Keysight – 5 years",
          "category": "Calibration Plans",
          "priceEstimate": "+$15,200",
          "description": "5 年期原厂返厂定期校准保障计划。",
          "englishDescription": "Calibration Plan – Return to Keysight – 5 years."
        },
        {
          "id": "PS-S10",
          "code": "PS-S10",
          "name": "远程预约生产力提升技术服务 (Remote scheduled productivity assistance)",
          "englishName": "Remote scheduled productivity assistance",
          "category": "Assistance Services",
          "priceEstimate": "+$1,500",
          "description": "专家远程排期指导，协助快速优化测试测量配置。",
          "englishDescription": "Remote scheduled productivity assistance."
        },
        {
          "id": "PS-S20",
          "code": "PS-S20",
          "name": "现场日常起步指导服务 (Startup assistance, daily)",
          "englishName": "Startup assistance, daily",
          "category": "Assistance Services",
          "priceEstimate": "+$2,800",
          "description": "是德科技应用工程师现场全天指导。",
          "englishDescription": "Startup assistance, daily."
        },
        {
          "id": "PS-X10",
          "code": "PS-X10",
          "name": "定制化专属技术支持服务 (Custom services)",
          "englishName": "Custom services",
          "category": "Assistance Services",
          "priceEstimate": "Quote",
          "description": "由是德科技资质认证的定制化工程与测量技术支持服务。",
          "englishDescription": "Custom services to be qualified by Keysight."
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "购买后升级选件参考 (Post-Purchase Instrument Upgrades - Reference Only)",
      "englishTitle": "Instrument Upgrades",
      "subtitle": "出厂后可通过许可证密钥或硬件升级的前置放大器、带宽扩展、外混频及安全选件",
      "englishSubtitle": "Upgrades for existing SA6320A: Preamplifiers, bandwidth (B01/B15), EXW, CRW, SF1-3, SDA.",
      "type": "multiple",
      "options": [
        {
          "id": "SA6320AU-P55",
          "code": "SA6320AU-P55",
          "name": "升级选件: 增加前置放大器 55 GHz (SA6320AU-P55)",
          "englishName": "Add preamplifier, 55 GHz",
          "category": "Upgrades",
          "priceEstimate": "+$20,500",
          "requires": [
            "SA6320A-555"
          ],
          "description": "纯许可证密钥升级，要求主机为 555 机型。",
          "englishDescription": "License key only. Requires 555."
        },
        {
          "id": "SA6320AU-P5N",
          "code": "SA6320AU-P5N",
          "name": "升级选件: 增加前置放大器 55 GHz 基础版 (SA6320AU-P5N)",
          "englishName": "Add preamplifier, 55 GHz, basic",
          "category": "Upgrades",
          "priceEstimate": "+$18,200",
          "requires": [
            "SA6320A-555"
          ],
          "description": "纯许可证密钥升级，非 IVL 出口管制。要求主机为 555 机型。",
          "englishDescription": "License key only; non-IVL, no export control. Requires 555."
        },
        {
          "id": "SA6320AU-P67",
          "code": "SA6320AU-P67",
          "name": "升级选件: 增加前置放大器 67 GHz (SA6320AU-P67)",
          "englishName": "Add preamplifier, 67 GHz",
          "category": "Upgrades",
          "priceEstimate": "+$24,500",
          "requires": [
            "SA6320A-567"
          ],
          "description": "纯许可证密钥升级，要求主机为 567 机型。",
          "englishDescription": "License key only. Requires 567."
        },
        {
          "id": "SA6320AU-P6N",
          "code": "SA6320AU-P6N",
          "name": "升级选件: 增加前置放大器 67 GHz 基础版 (SA6320AU-P6N)",
          "englishName": "Add preamplifier, 67 GHz, basic",
          "category": "Upgrades",
          "priceEstimate": "+$21,800",
          "requires": [
            "SA6320A-567"
          ],
          "description": "纯许可证密钥升级，非 IVL 出口管制。要求主机为 567 机型。",
          "englishDescription": "License key only; non-IVL, no export control. Requires 567."
        },
        {
          "id": "SA6320AU-B01",
          "code": "SA6320AU-B01",
          "name": "升级选件: 分析带宽由 40 MHz 扩充至 480 MHz (B4X)",
          "englishName": "Increase analysis bandwidth from 40 MHz to 480 MHz (B4X)",
          "category": "Upgrades",
          "priceEstimate": "+$23,000",
          "description": "纯许可证密钥升级，直接将分析带宽提升至 480 MHz。",
          "englishDescription": "Increase analysis bandwidth from 40 MHz to 480 MHz (B4X). License key only."
        },
        {
          "id": "SA6320AU-B15",
          "code": "SA6320AU-B15",
          "name": "升级选件: 分析带宽由 4 GHz 扩充至 8 GHz (R80)",
          "englishName": "Increase analysis bandwidth from 4 GHz to 8 GHz (R80)",
          "category": "Upgrades",
          "priceEstimate": "+$42,000",
          "description": "要求主机已具备 4 GHz (R40) 带宽硬件。纯许可证密钥升级。",
          "englishDescription": "Increase analysis bandwidth from 4 GHz to 8 GHz (R80). License key only. Requires R40."
        },
        {
          "id": "SA6320AU-EXW",
          "code": "SA6320AU-EXW",
          "name": "升级选件: 增加宽带外混频功能 (SA6320AU-EXW)",
          "englishName": "Add external mixing, wide bandwidth",
          "category": "Upgrades",
          "priceEstimate": "+$10,800",
          "description": "纯许可证密钥升级，启用连接 V3050A 频段扩展器的宽带外混频功能。",
          "englishDescription": "Add external mixing, wide bandwidth. License key only."
        },
        {
          "id": "SA6320AU-CRW",
          "code": "SA6320AU-CRW",
          "name": "升级选件: 增加 11 GHz 宽中频输出接口 (SA6320AU-CRW)",
          "englishName": "Add connector, IF out, wide",
          "category": "Upgrades",
          "priceEstimate": "+$9,800",
          "description": "纯许可证密钥升级，激活 Wide IF Out 11 GHz 宽中频模拟输出端口。",
          "englishDescription": "Add connector, IF out, wide. License key only."
        },
        {
          "id": "SA6320AU-SF1",
          "code": "SA6320AU-SF1",
          "name": "升级选件: 安全特性 - 禁止启动外部程序 (SA6320AU-SF1)",
          "englishName": "Add security features, exclude launching programs",
          "category": "Upgrades",
          "priceEstimate": "+$1,800",
          "description": "纯许可证密钥升级。",
          "englishDescription": "Add security features, exclude launching programs. License key only."
        },
        {
          "id": "SA6320AU-SF2",
          "code": "SA6320AU-SF2",
          "name": "升级选件: 安全特性 - 禁止保存测量结果 (SA6320AU-SF2)",
          "englishName": "Add security features, prohibit saving results",
          "category": "Upgrades",
          "priceEstimate": "+$1,800",
          "description": "纯许可证密钥升级。",
          "englishDescription": "Add security features, prohibit saving results. License key only."
        },
        {
          "id": "SA6320AU-SF3",
          "code": "SA6320AU-SF3",
          "name": "升级选件: 安全特性 - 安全 RAM 虚拟盘启动 (SA6320AU-SF3)",
          "englishName": "Add security features, secure RAM disk boot",
          "category": "Upgrades",
          "priceEstimate": "+$2,700",
          "description": "纯许可证密钥升级。",
          "englishDescription": "Add security features, secure RAM disk boot. License key only."
        },
        {
          "id": "SA9094BU-SDA",
          "code": "SA9094BU-SDA",
          "name": "升级选件: 附加可拆卸 Win11 固态硬盘套件 (SA9094BU-SDA)",
          "englishName": "Add additional removable solid state drive, Win11",
          "category": "Upgrades",
          "priceEstimate": "+$3,500",
          "description": "物理可拆卸固态硬盘硬件套件，内置完整 Windows 11 操作系统。",
          "englishDescription": "Provides additional removable solid-state drive, with Windows 11 OS."
        }
      ]
    }
  ]
};
