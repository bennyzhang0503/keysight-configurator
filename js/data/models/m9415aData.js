// Keysight M9415A Configurator Dataset
export const M9415A_DATA = {
  "id": "M9415A",
  "name": "M9415A VXT PXIe Vector Transceiver",
  "subtitle": "380 MHz to 12 GHz PXIe Vector Transceiver with up to 1.2 GHz Bandwidth",
  "family": "PXIe Vector Transceivers (VXT Series)",
  "docNumber": "5992-1260 / M9415A",
  "description": "The Keysight M9415A VXT is a 3-slot PXIe Vector Transceiver integrating a vector signal generator (VSG) and vector signal analyzer (VSA) from 380 MHz up to 12 GHz with up to 1.2 GHz modulation and analysis bandwidth, ideal for 5G NR FR1, Wi-Fi 7 (320MHz), and MIMO test.",
  "baseSpecs": {
    "formFactor": "3-slot 3U PXIe Module",
    "frequencyRange": "380 MHz to 6 / 8 / 12 GHz",
    "vsgVsaIntegration": "Integrated Vector Signal Generator (VSG) & Vector Signal Analyzer (VSA)",
    "maxBandwidth": "Up to 1.2 GHz Modulation & Analysis Bandwidth (Option B12)",
    "maxOutputPower": "High output power up to +20 dBm (Option 1EA)",
    "mimoSupport": "Multi-module phase-coherent MIMO synchronization (Option MMO)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高工作频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选选件（3 选 1），覆盖 Sub-6GHz 及扩展微波频段（最高 12 GHz）",
      "englishSubtitle": "Required option (Choose 1). Frequency range from 380 MHz up to 12 GHz.",
      "type": "single",
      "options": [
        {
          "id": "M9415A-F06",
          "code": "M9415A-F06",
          "name": "频率范围 380 MHz 至 6 GHz",
          "englishName": "Frequency range, 380 MHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "$38,500",
          "freqMaxGHz": 6.0,
          "description": "覆盖 5G NR FR1、LTE 及 Wi-Fi 6E 常用 6 GHz 以下通信频段。",
          "englishDescription": "Covers Sub-6GHz frequency range for 5G FR1 and Wi-Fi 6E."
        },
        {
          "id": "M9415A-F08",
          "code": "M9415A-F08",
          "name": "频率范围 380 MHz 至 8 GHz",
          "englishName": "Frequency range, 380 MHz to 8 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,000",
          "freqMaxGHz": 8.0,
          "description": "扩展覆盖至 8 GHz，满足 Wi-Fi 7 (U-NII-1 至 U-NII-8) 完整频段测试。",
          "englishDescription": "Extends frequency range up to 8 GHz for Wi-Fi 7."
        },
        {
          "id": "M9415A-F12",
          "code": "M9415A-F12",
          "name": "频率范围 380 MHz 至 12 GHz",
          "englishName": "Frequency range, 380 MHz to 12 GHz",
          "category": "Frequency",
          "priceEstimate": "+$62,000",
          "freqMaxGHz": 12.0,
          "description": "全频段覆盖至 12 GHz，支持 X 波段雷达、卫星通信及微波中继射频收发测试。",
          "englishDescription": "Full frequency coverage up to 12 GHz for X-band and microwave transceiver testing."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择矢量调制生成与解调分析带宽 (Select Modulation & Analysis Bandwidth)",
      "englishTitle": "Select Modulation & Analysis Bandwidth",
      "subtitle": "提供高达 1.2 GHz 超宽带 RF 矢量信号生成与分析能力 (Option B12)",
      "englishSubtitle": "Provides up to 1.2 GHz ultra-wideband RF modulation & analysis bandwidth.",
      "type": "single",
      "options": [
        {
          "id": "M9415A-B4X",
          "code": "M9415A-B4X",
          "name": "400 MHz 矢量生成与解调分析带宽 (400 MHz Bandwidth)",
          "englishName": "400 MHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 400,
          "description": "M9415A 标配 400 MHz RF 矢量调制生成与解调分析带宽。",
          "englishDescription": "Standard 400 MHz RF modulation and analysis bandwidth."
        },
        {
          "id": "M9415A-B8X",
          "code": "M9415A-B8X",
          "name": "800 MHz 矢量生成与解调分析带宽 (800 MHz Bandwidth)",
          "englishName": "800 MHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$18,500",
          "bandwidthMHz": 800,
          "description": "扩展带宽至 800 MHz，轻松满足多载波 5G NR 及 Wi-Fi 7 320 MHz 宽带测试。",
          "englishDescription": "Extends bandwidth to 800 MHz for multi-carrier 5G NR and Wi-Fi 7."
        },
        {
          "id": "M9415A-B12",
          "code": "M9415A-B12",
          "name": "1.2 GHz 极致超宽矢量生成与解调带宽 (1.2 GHz Ultra-Wideband)",
          "englishName": "1.2 GHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$32,000",
          "bandwidthMHz": 1200,
          "description": "VXT 旗舰 1.2 GHz 极致超宽 RF 矢量生成与分析带宽，支持宽带载波聚合与脉冲雷达。",
          "englishDescription": "VXT flagship 1.2 GHz ultra-wideband modulation and analysis bandwidth."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择输出功率电平与半双工控制 (Output Power & Duplex Mode)",
      "englishTitle": "Output Power & Duplex Mode",
      "subtitle": "高输出功率选件 Option 1EA (高达 +20 dBm) 及半双工模式选件",
      "englishSubtitle": "High output power up to +20 dBm (Option 1EA) and Half-duplex option.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415A-1EA",
          "code": "M9415A-1EA",
          "name": "高输出功率选件 (High Output Power up to +20 dBm)",
          "englishName": "High output power",
          "category": "Power",
          "priceEstimate": "+$4,800",
          "description": "提升矢量信号发生器输出功率电平至 +20 dBm，补偿线缆衰减与功放线性度测试。",
          "englishDescription": "Increases VSG output power up to +20 dBm."
        },
        {
          "id": "M9415A-001",
          "code": "M9415A-001",
          "name": "半双工模式切换控制 (Half-Duplex Mode Operation)",
          "englishName": "Half-duplex operation",
          "category": "Duplex",
          "priceEstimate": "+$1,800",
          "description": "支持高速度收发 TDD 半双工逻辑无缝切换。",
          "englishDescription": "Enables high-speed TDD half-duplex switching."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择相噪、动态范围与基带内存 (Phase Noise, Memory & Performance)",
      "englishTitle": "Phase Noise, Memory & Performance",
      "subtitle": "增强相位噪声 Option EP7、高动态范围 HDX、2 GB 内存与 MIMO 相位同步",
      "englishSubtitle": "Enhanced Phase Noise (EP7), High Dynamic Range (HDX), 2 GB Baseband Memory, and MIMO.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415A-EP7",
          "code": "M9415A-EP7",
          "name": "增强型低相位噪声性能 (Enhanced Low Phase Noise)",
          "englishName": "Enhanced low phase noise",
          "category": "Performance",
          "priceEstimate": "+$6,500",
          "description": "显著提升纯净度与低相位噪声，改善 4096QAM 及 5G 高阶调制 EVM 测量。",
          "englishDescription": "Delivers enhanced low phase noise for superior EVM."
        },
        {
          "id": "M9415A-HDX",
          "code": "M9415A-HDX",
          "name": "高动态范围性能扩展 (High Dynamic Range)",
          "englishName": "High dynamic range",
          "category": "Performance",
          "priceEstimate": "+$4,200",
          "description": "优化发射机与接收机信道带外杂散与大动态范围指标。",
          "englishDescription": "Optimizes dynamic range for transceiver tests."
        },
        {
          "id": "M9415A-M02",
          "code": "M9415A-M02",
          "name": "2 GB 深度基带波形存储器 (2 GB Baseband Memory)",
          "englishName": "2 GB baseband memory",
          "category": "Memory",
          "priceEstimate": "+$5,200",
          "description": "扩展波形播放与抓包内存至 2 GB，支持长时间 Complex IQ 信号生成与记录。",
          "englishDescription": "Expands baseband waveform memory up to 2 GB."
        },
        {
          "id": "M9415A-M05",
          "code": "M9415A-M05",
          "name": "512 MB 基带波形存储器 (512 MB Baseband Memory)",
          "englishName": "512 MB baseband memory",
          "category": "Memory",
          "priceEstimate": "+$2,200",
          "description": "基础 512 MB IQ 波形播放内存。",
          "englishDescription": "Provides 512 MB baseband memory."
        },
        {
          "id": "M9415A-MMO",
          "code": "M9415A-MMO",
          "name": "多模块 MIMO 相位相干同步选件 (MIMO Synchronization)",
          "englishName": "Multi-module MIMO synchronization",
          "category": "MIMO",
          "priceEstimate": "+$7,800",
          "description": "提供多台 M9415A 模块间本振同步与相干时钟锁相，构建 2x2、4x4 至 8x8 MIMO 系统。",
          "englishDescription": "Enables phase-coherent LO and timing synchronization for multi-channel MIMO."
        },
        {
          "id": "M9415A-SAA",
          "code": "M9415A-SAA",
          "name": "频谱分析测量加速硬件 (Spectral Analysis Acceleration)",
          "englishName": "Spectral analysis acceleration",
          "category": "Performance",
          "priceEstimate": "+$3,500",
          "description": "硬件级加速 FFT 与频谱校准运算，大幅提升产线吞吐速度。",
          "englishDescription": "Hardware-accelerated spectral analysis for high throughput."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择 PXIe 机箱与嵌入式控制器 (Select PXIe Chassis & Controller)",
      "englishTitle": "Select PXIe Chassis & Controller",
      "subtitle": "选购 Keysight 18 槽高带宽 PXIe 机箱 M9019A 与高性能 Intel 嵌入式控制器",
      "englishSubtitle": "Choose Keysight 18-slot PXIe chassis M9019A and Intel Embedded Controller.",
      "type": "multiple",
      "options": [
        {
          "id": "M9019A",
          "code": "M9019A",
          "name": "M9019A 18 槽 Gen 3 PXIe 高带宽机箱 (18-Slot PXIe Chassis)",
          "englishName": "Gen 3 PXIe 18-slot chassis",
          "category": "PXIe Hardware",
          "priceEstimate": "+$8,500",
          "description": "提供 24 GB/s 系统总带宽与 18 个 PXIe 混合插槽，完美承载多模块 VXT。",
          "englishDescription": "18-slot Gen 3 PXIe chassis with 24 GB/s system bandwidth."
        },
        {
          "id": "M9037A",
          "code": "M9037A",
          "name": "M9037A PXIe 高性能嵌入式控制器 (Intel i7 Quad-Core)",
          "englishName": "PXIe high-performance embedded controller",
          "category": "PXIe Hardware",
          "priceEstimate": "+$7,200",
          "description": "Intel Core i7 四核处理器，内置 Win11 系统与 NVMe SSD 固态硬盘。",
          "englishDescription": "Intel Core i7 quad-core PXIe embedded controller."
        },
        {
          "id": "M9038A",
          "code": "M9038A",
          "name": "M9038A PXIe 顶级嵌入式控制器 (Intel Xeon)",
          "englishName": "PXIe premier embedded controller",
          "category": "PXIe Hardware",
          "priceEstimate": "+$9,800",
          "description": "Intel Xeon 服务器级多核处理器，专为极致计算与大内存并行处理设计。",
          "englishDescription": "Intel Xeon premier PXIe embedded controller."
        },
        {
          "id": "M9022A",
          "code": "M9022A",
          "name": "M9022A PXIe 系统模块 (System Module Gen 3 x8)",
          "englishName": "PXIe system module Gen 3 x8",
          "category": "PXIe Hardware",
          "priceEstimate": "+$2,200",
          "description": "连接外部 PC 主机的 PCIe 扩展接口模块。",
          "englishDescription": "PCIe interface system module for external host PC."
        },
        {
          "id": "M9023A",
          "code": "M9023A",
          "name": "M9023A PXIe 系统模块 (System Module Gen 3 x16)",
          "englishName": "PXIe system module Gen 3 x16",
          "category": "PXIe Hardware",
          "priceEstimate": "+$3,500",
          "description": "提供 Gen 3 x16 高达 16 GB/s 主机连接数据传输吞吐。",
          "englishDescription": "Gen 3 x16 high-speed PCIe system module."
        },
        {
          "id": "M9024A",
          "code": "M9024A",
          "name": "M9024A PXIe 高速多机箱互联扩展模块",
          "englishName": "PXIe multi-chassis extension module",
          "category": "PXIe Hardware",
          "priceEstimate": "+$4,200",
          "description": "实现多台 PXIe 机箱间高速数据与触发互联。",
          "englishDescription": "Multi-chassis interconnect module for large PXIe systems."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择 5G NR 与蜂窝无线测量应用软件 (Cellular & 5G NR Measurement Apps)",
      "englishTitle": "Cellular & 5G NR Measurement Apps",
      "subtitle": "5G NR Sub-6GHz (E9085EM0E/Y9085EM0E)、LTE FDD/TDD 及 NB-IoT 测试套件",
      "englishSubtitle": "5G NR, LTE FDD/TDD, and NB-IoT measurement software apps for VXT.",
      "type": "multiple",
      "options": [
        {
          "id": "E9085EM0E",
          "code": "E9085EM0E",
          "name": "5G NR 测量应用软件 (固定许可证 Node-locked License)",
          "englishName": "5G NR measurement app, Node-locked",
          "category": "Measurement App",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "支持 5G NR 3GPP 下行与上行标准信号解调、EVM 及 ACPR 功率测量。",
          "englishDescription": "Standard-based 5G NR measurement app."
        },
        {
          "id": "Y9085EM0E",
          "code": "Y9085EM0E",
          "name": "5G NR 测量应用软件 (可漂移浮动许可证 Transportable License)",
          "englishName": "5G NR measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$11,800",
          "supportsLicense": true,
          "description": "支持在不同 VXT 或 PXIe 模块间自由浮动转移共享许可证。",
          "englishDescription": "Transportable license for 5G NR measurement app."
        },
        {
          "id": "E9080EM0E",
          "code": "E9080EM0E",
          "name": "LTE/LTE-Advanced FDD 测量应用软件 (Node-locked)",
          "englishName": "LTE/LTE-A FDD measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE FDD 载波聚合信号标准解调与星座图分析。",
          "englishDescription": "Standard-based LTE FDD measurement app."
        },
        {
          "id": "Y9080EM0E",
          "code": "Y9080EM0E",
          "name": "LTE/LTE-Advanced FDD 测量应用软件 (Transportable)",
          "englishName": "LTE/LTE-A FDD measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "可转移许可证 LTE FDD 测量分析软件。",
          "englishDescription": "Transportable LTE FDD measurement app."
        },
        {
          "id": "E9082EM0E",
          "code": "E9082EM0E",
          "name": "LTE/LTE-Advanced TDD 测量应用软件 (Node-locked)",
          "englishName": "LTE/LTE-A TDD measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE TDD 信号标准解调与分析。",
          "englishDescription": "Standard-based LTE TDD measurement app."
        },
        {
          "id": "Y9082EM0E",
          "code": "Y9082EM0E",
          "name": "LTE/LTE-Advanced TDD 测量应用软件 (Transportable)",
          "englishName": "LTE/LTE-A TDD measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "可转移许可证 LTE TDD 测量软件。",
          "englishDescription": "Transportable LTE TDD measurement app."
        },
        {
          "id": "E9080EM3E",
          "code": "E9080EM3E",
          "name": "NB-IoT & eMTC 物联网测试软件",
          "englishName": "NB-IoT & eMTC measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "窄带物联网物理层射频指标测试。",
          "englishDescription": "NB-IoT and eMTC measurement app."
        },
        {
          "id": "E9080EM4E",
          "code": "E9080EM4E",
          "name": "LTE V2X 车联网测试软件",
          "englishName": "LTE V2X measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "LTE V2X 直连通信射频特性解调与测量。",
          "englishDescription": "LTE V2X measurement app."
        },
        {
          "id": "E9071EM0E",
          "code": "E9071EM0E",
          "name": "GSM/EDGE/Evo 蜂窝测试软件",
          "englishName": "GSM/EDGE measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "2G GSM/EDGE 单键标准测试。",
          "englishDescription": "GSM/EDGE measurement app."
        },
        {
          "id": "Y9071EM0E",
          "code": "Y9071EM0E",
          "name": "GSM/EDGE/Evo 蜂窝测试软件 (Transportable)",
          "englishName": "GSM/EDGE measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "可转移许可证 GSM/EDGE 测试软件。",
          "englishDescription": "Transportable GSM/EDGE measurement app."
        },
        {
          "id": "E9073EM0E",
          "code": "E9073EM0E",
          "name": "W-CDMA/HSPA+ 3G 蜂窝测试软件",
          "englishName": "W-CDMA/HSPA+ measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "3G W-CDMA 单键解调与邻道功率测试。",
          "englishDescription": "W-CDMA/HSPA+ measurement app."
        },
        {
          "id": "Y9073EM0E",
          "code": "Y9073EM0E",
          "name": "W-CDMA/HSPA+ 3G 蜂窝测试软件 (Transportable)",
          "englishName": "W-CDMA/HSPA+ measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "可转移许可证 3G W-CDMA 测试软件。",
          "englishDescription": "Transportable W-CDMA measurement app."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择 WLAN Wi-Fi 7 与无线互联测量应用软件 (WLAN Wi-Fi 7 & Wireless Apps)",
      "englishTitle": "WLAN Wi-Fi 7 & Wireless Apps",
      "subtitle": "支持 Wi-Fi 7 320MHz 4096QAM (E9077EM2E/Y9077EM2E)、蓝牙 5 (E9081EM0E)",
      "englishSubtitle": "WLAN 802.11ac/ax/be Wi-Fi 7 (320MHz), Bluetooth 5, and Short Range IoT.",
      "type": "multiple",
      "options": [
        {
          "id": "E9077EM2E",
          "code": "E9077EM2E",
          "name": "WLAN 802.11be (Wi-Fi 7) 320MHz 测量应用软件 (Node-locked)",
          "englishName": "WLAN 802.11be (Wi-Fi 7) measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "支持 Wi-Fi 7 (802.11be) 320 MHz 信道带宽、4096QAM 调制品质与 Multi-RU 分析。",
          "englishDescription": "WLAN 802.11be Wi-Fi 7 320MHz measurement app."
        },
        {
          "id": "Y9077EM2E",
          "code": "Y9077EM2E",
          "name": "WLAN 802.11be (Wi-Fi 7) 320MHz 测量软件 (Transportable)",
          "englishName": "WLAN 802.11be (Wi-Fi 7) measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$9,500",
          "supportsLicense": true,
          "description": "可转移许可证 Wi-Fi 7 320MHz 测量分析软件。",
          "englishDescription": "Transportable Wi-Fi 7 320MHz measurement app."
        },
        {
          "id": "E9077EM1E",
          "code": "E9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6E) 测量应用软件 (Node-locked)",
          "englishName": "WLAN 802.11ac/ax measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$6,200",
          "supportsLicense": true,
          "description": "Wi-Fi 5 (11ac) 及 Wi-Fi 6/6E (11ax) 160MHz 解调分析。",
          "englishDescription": "WLAN 802.11ac/ax Wi-Fi 6E measurement app."
        },
        {
          "id": "Y9077EM1E",
          "code": "Y9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6E) 测量软件 (Transportable)",
          "englishName": "WLAN 802.11ac/ax measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$7,500",
          "supportsLicense": true,
          "description": "可转移许可证 Wi-Fi 6E 测量分析软件。",
          "englishDescription": "Transportable Wi-Fi 6E measurement app."
        },
        {
          "id": "E9077EM0E",
          "code": "E9077EM0E",
          "name": "WLAN 802.11a/b/g/n 经典无线局域网测量软件",
          "englishName": "WLAN 802.11a/b/g/n measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "传统 WLAN 802.11 协议标准解调测试。",
          "englishDescription": "Standard WLAN 802.11a/b/g/n measurement app."
        },
        {
          "id": "Y9077EM0E",
          "code": "Y9077EM0E",
          "name": "WLAN 802.11a/b/g/n 经典无线局域网测量软件 (Transportable)",
          "englishName": "WLAN 802.11a/b/g/n measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "可转移许可证经典 WLAN 测试软件。",
          "englishDescription": "Transportable classic WLAN measurement app."
        },
        {
          "id": "E9081EM0E",
          "code": "E9081EM0E",
          "name": "Bluetooth 蓝牙测量应用软件 (Bluetooth 5 / BLE)",
          "englishName": "Bluetooth measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "经典蓝牙及 BLE 4.0/4.2/5 单键调制性能测量。",
          "englishDescription": "Bluetooth BR/EDR and Low Energy measurement app."
        },
        {
          "id": "Y9081EM0E",
          "code": "Y9081EM0E",
          "name": "Bluetooth 蓝牙测量应用软件 (Transportable)",
          "englishName": "Bluetooth measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "可转移许可证蓝牙 5 测量软件。",
          "englishDescription": "Transportable Bluetooth 5 measurement app."
        },
        {
          "id": "E9084EM0E",
          "code": "E9084EM0E",
          "name": "短距离通信与 IoT (LoRa/ZigBee/Z-Wave) 测量软件",
          "englishName": "Short range comm & IoT measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "LoRa、ZigBee 及 Z-Wave 物联网通信测量。",
          "englishDescription": "IoT measurement app for LoRa and ZigBee."
        },
        {
          "id": "Y9084EM0E",
          "code": "Y9084EM0E",
          "name": "短距离通信与 IoT 测量软件 (Transportable)",
          "englishName": "Short range comm & IoT measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "可转移许可证物联网短距离通信测试软件。",
          "englishDescription": "Transportable short range IoT measurement app."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择通用调制解调与相位噪声测量应用软件 (General Demod & Phase Noise Apps)",
      "englishTitle": "General Demod & Phase Noise Apps",
      "subtitle": "VMA 数字调制解调、Custom OFDM、相噪 (E9068EM0E) 及噪声系数",
      "englishSubtitle": "VMA digital demodulation, Custom OFDM, Phase Noise, and Noise Figure.",
      "type": "multiple",
      "options": [
        {
          "id": "E9054EM0E",
          "code": "E9054EM0E",
          "name": "VMA 通用数字调制解调软件 (Digital Demodulation)",
          "englishName": "Vector modulation analysis Digital Demodulation",
          "category": "Measurement App",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "分析 FSK、PSK、QAM、APSK 等 40 多种数字调制格式。",
          "englishDescription": "Flexible digital demodulation for over 40 formats."
        },
        {
          "id": "E9054EM1E",
          "code": "E9054EM1E",
          "name": "VMA Custom OFDM 自定义 OFDM 调制解调软件",
          "englishName": "Vector modulation analysis Custom OFDM",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "自定义 OFDM 物理层框架与调制解调测试。",
          "englishDescription": "Custom OFDM modulation analysis."
        },
        {
          "id": "E9055EM0E",
          "code": "E9055EM0E",
          "name": "VMA 高级扩展测量软件 (Advanced Modulation Analysis)",
          "englishName": "Vector modulation analysis Advanced",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "高级矢量解调与失真分析。",
          "englishDescription": "Advanced modulation analysis."
        },
        {
          "id": "E9056EM0E",
          "code": "E9056EM0E",
          "name": "信道质量与多音群延时测量软件 (Channel Quality)",
          "englishName": "Channel Quality",
          "category": "Measurement App",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "测量射频通道多音群延时与频率响应。",
          "englishDescription": "Channel quality and group delay measurement app."
        },
        {
          "id": "E9068EM0E",
          "code": "E9068EM0E",
          "name": "相位噪声测量应用软件 (Phase Noise)",
          "englishName": "Phase noise measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "单键对数图与 Spot Frequency 相位噪声曲线表征。",
          "englishDescription": "One-button phase noise measurement app."
        },
        {
          "id": "E9069EM0E",
          "code": "E9069EM0E",
          "name": "噪声系数测量应用软件 (Noise Figure)",
          "englishName": "Noise figure measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "单键噪声系数 NF 与增益测量。",
          "englishDescription": "One-button noise figure measurement app."
        },
        {
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 嵌入式计算与信号处理软件",
          "englishName": "MATLAB software",
          "category": "Measurement App",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "在 VXT 中直接运行自定义 MATLAB IQ 信号处理算法。",
          "englishDescription": "Executes MATLAB code directly inside VXT."
        },
        {
          "id": "E9056EM1E",
          "code": "E9056EM1E",
          "name": "Phase Noise & Spurious Analysis 软件选件",
          "englishName": "Phase noise & spurious analysis app",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "相位噪声与杂散分析拓展应用软件。"
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择升级选件 (Upgrade Options - M9415AU)",
      "englishTitle": "Upgrade Options - M9415AU",
      "subtitle": "已购 M9415A 硬件或许可证的现场升级选件套件",
      "englishSubtitle": "Field upgrade options for existing M9415A units.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415AU-B12",
          "code": "M9415AU-B12",
          "name": "升级至 1.2 GHz 带宽选件 (Upgrade to 1.2 GHz BW)",
          "englishName": "Upgrade to 1.2 GHz bandwidth",
          "category": "Upgrade",
          "priceEstimate": "+$35,000",
          "description": "为已有 M9415A 升级至 1.2 GHz 调制与分析带宽。",
          "englishDescription": "Upgrades M9415A to 1.2 GHz bandwidth."
        },
        {
          "id": "M9415AU-B8X",
          "code": "M9415AU-B8X",
          "name": "升级至 800 MHz 带宽选件 (Upgrade to 800 MHz BW)",
          "englishName": "Upgrade to 800 MHz bandwidth",
          "category": "Upgrade",
          "priceEstimate": "+$21,000",
          "description": "为已有 M9415A 升级至 800 MHz 带宽。",
          "englishDescription": "Upgrades M9415A to 800 MHz bandwidth."
        },
        {
          "id": "M9415AU-1EA",
          "code": "M9415AU-1EA",
          "name": "升级高输出功率选件 (Upgrade High Output Power)",
          "englishName": "Upgrade high output power",
          "category": "Upgrade",
          "priceEstimate": "+$5,500",
          "description": "升级增加高输出功率 +20 dBm 特性。",
          "englishDescription": "Upgrades high output power option."
        },
        {
          "id": "M9415AU-EP7",
          "code": "M9415AU-EP7",
          "name": "升级增强相位噪声选件 (Upgrade Enhanced Phase Noise)",
          "englishName": "Upgrade enhanced phase noise",
          "category": "Upgrade",
          "priceEstimate": "+$7,200",
          "description": "升级增强型低相位噪声硬件套件。",
          "englishDescription": "Upgrades enhanced phase noise."
        },
        {
          "id": "M9415AU-MMO",
          "code": "M9415AU-MMO",
          "name": "升级多模块 MIMO 相位同步选件 (Upgrade MIMO Sync)",
          "englishName": "Upgrade MIMO synchronization",
          "category": "Upgrade",
          "priceEstimate": "+$8,500",
          "description": "升级增加 MIMO 相位相干同步接口功能。",
          "englishDescription": "Upgrades MIMO synchronization option."
        },
        {
          "id": "M9415AU-BU2",
          "code": "M9415AU-BU2",
          "name": "升级 Baseband Unit 2 基带处理单元",
          "englishName": "Upgrade baseband unit 2",
          "category": "Upgrade",
          "priceEstimate": "+$12,500",
          "description": "升级基带数字处理板卡。"
        },
        {
          "id": "M9415AU-F01",
          "code": "M9415AU-F01",
          "name": "升级频率扩展套件 F01",
          "englishName": "Upgrade frequency option F01",
          "category": "Upgrade",
          "priceEstimate": "+$8,500",
          "description": "升级频率拓展套件。"
        },
        {
          "id": "M9415AU-F02",
          "code": "M9415AU-F02",
          "name": "升级频率扩展套件 F02",
          "englishName": "Upgrade frequency option F02",
          "category": "Upgrade",
          "priceEstimate": "+$12,500",
          "description": "升级频率拓展套件 F02。"
        },
        {
          "id": "M9415AU-F03",
          "code": "M9415AU-F03",
          "name": "升级频率扩展套件 F03",
          "englishName": "Upgrade frequency option F03",
          "category": "Upgrade",
          "priceEstimate": "+$16,500",
          "description": "升级频率拓展套件 F03。"
        },
        {
          "id": "M9415AU-HDX",
          "code": "M9415AU-HDX",
          "name": "升级高动态范围 HDX 特性",
          "englishName": "Upgrade high dynamic range HDX",
          "category": "Upgrade",
          "priceEstimate": "+$4,800",
          "description": "升级高动态范围硬件特性。"
        },
        {
          "id": "M9415AU-M05",
          "code": "M9415AU-M05",
          "name": "升级 512 MB 基带内存套件",
          "englishName": "Upgrade 512 MB baseband memory",
          "category": "Upgrade",
          "priceEstimate": "+$2,500",
          "description": "升级增加 512 MB 基带波形播放内存。"
        },
        {
          "id": "M9415AU-SAA",
          "code": "M9415AU-SAA",
          "name": "升级频谱分析加速 SAA 选件",
          "englishName": "Upgrade spectral analysis acceleration",
          "category": "Upgrade",
          "priceEstimate": "+$3,800",
          "description": "升级频谱分析硬件测量加速套件。"
        },
        {
          "id": "M9415AVXT",
          "code": "M9415AVXT",
          "name": "M9415A VXT 硬件模块系统套件",
          "englishName": "M9415A VXT PXIe Module System Kit",
          "category": "Upgrade",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "M9415A VXT PXIe 矢量收发仪三插槽硬件主板系统套件。"
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择校准服务与保修计划 (Add Calibration & Warranty Plans)",
      "englishTitle": "Add Calibration & Warranty Plans",
      "subtitle": "出厂商业校准证书及 3/5/7/10 年原厂返厂保修与校准保障",
      "englishSubtitle": "Commercial calibration certificate and 3/5/7/10 years calibration assurance plans.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415A-UK6",
          "code": "M9415A-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "附带 M9415A 工厂全套收发实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$2,500",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$4,200",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-7",
          "code": "R-50C-011-7",
          "name": "7 年期原厂返厂校准保障计划 (7 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 7 years",
          "category": "Warranty",
          "priceEstimate": "+$5,800",
          "description": "7 年期原厂返厂校准保障计划。",
          "englishDescription": "7-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-10",
          "code": "R-50C-011-10",
          "name": "10 年期原厂返厂校准保障计划 (10 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 10 years",
          "category": "Warranty",
          "priceEstimate": "+$7,800",
          "description": "10 年期原厂返厂校准保障计划。",
          "englishDescription": "10-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "PS-S20-01",
          "code": "PS-S20-01",
          "name": "1 天现场安装启动与操作培训服务 (1-day Startup)",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$1,800",
          "description": "资深 Keysight 工程师提供现场 PXIe 模块安装启动与开箱指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        }
      ]
    }
  ]
};
