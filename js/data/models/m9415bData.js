// Keysight M9415B Configurator Dataset
export const M9415B_DATA = {
  "id": "M9415B",
  "name": "M9415B VXT PXIe Vector Transceiver (with Analog BBIQ)",
  "subtitle": "380 MHz to 20 GHz PXIe Vector Transceiver with 1.2 GHz Bandwidth & Analog BBIQ",
  "family": "PXIe Vector Transceivers (VXT-B Series)",
  "docNumber": "5992-1261 / M9415B",
  "description": "The Keysight M9415B VXT is a 4-slot PXIe Vector Transceiver integrating a vector signal generator (VSG), vector signal analyzer (VSA), and Analog Baseband I/Q (Analog BBIQ) ports from 380 MHz up to 20 GHz with up to 1.2 GHz bandwidth for 5G NR, Wi-Fi 7, and baseband IC testing.",
  "baseSpecs": {
    "formFactor": "4-slot 3U PXIe Module",
    "frequencyRange": "380 MHz to 8.5 / 13.6 / 20 GHz",
    "analogBbiq": "Integrated Differential & Single-Ended Analog Baseband I/Q Inputs & Outputs (BBIQ)",
    "vsgVsaIntegration": "Integrated Vector Signal Generator (VSG) & Vector Signal Analyzer (VSA)",
    "maxBandwidth": "Up to 1.2 GHz Modulation & Analysis Bandwidth (Option B12)",
    "maxOutputPower": "High output power up to +20 dBm (Option 1EA)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高工作频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选选件（3 选 1），支持 380 MHz 至 8.5 GHz、13.6 GHz 及 20 GHz 覆盖",
      "englishSubtitle": "Required option (Choose 1). Frequency range from 380 MHz up to 20 GHz.",
      "type": "single",
      "options": [
        {
          "id": "M9415B-F08",
          "code": "M9415B-F08",
          "name": "频率范围 380 MHz 至 8.5 GHz",
          "englishName": "Frequency range, 380 MHz to 8.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$48,500",
          "freqMaxGHz": 8.5,
          "description": "覆盖 5G NR FR1、LTE 及 Wi-Fi 6E/7 (U-NII-1 至 U-NII-8) 通信频段。",
          "englishDescription": "Covers Sub-6GHz frequency range for 5G FR1 and Wi-Fi 7."
        },
        {
          "id": "M9415B-F13",
          "code": "M9415B-F13",
          "name": "频率范围 380 MHz 至 13.6 GHz",
          "englishName": "Frequency range, 380 MHz to 13.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$62,000",
          "freqMaxGHz": 13.6,
          "description": "扩展覆盖至 13.6 GHz，适合 X 波段雷达与微波通信测试。",
          "englishDescription": "Extends frequency range up to 13.6 GHz for microwave testing."
        },
        {
          "id": "M9415B-F20",
          "code": "M9415B-F20",
          "name": "频率范围 380 MHz 至 20 GHz",
          "englishName": "Frequency range, 380 MHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "+$78,000",
          "freqMaxGHz": 20.0,
          "description": "M9415B 专属全频段覆盖至 20 GHz，满足 K 波段、毫米波基带与微波射频收发一体化测试。",
          "englishDescription": "M9415B exclusive full frequency coverage up to 20 GHz."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择矢量调制生成与解调分析带宽 (Select Modulation & Analysis Bandwidth)",
      "englishTitle": "Select Modulation & Analysis Bandwidth",
      "subtitle": "提供高达 1.2 GHz 超宽带 RF 与模拟 BBIQ 矢量生成与分析能力 (Option B12)",
      "englishSubtitle": "Provides up to 1.2 GHz ultra-wideband modulation & analysis bandwidth.",
      "type": "single",
      "options": [
        {
          "id": "M9415B-B4X",
          "code": "M9415B-B4X",
          "name": "400 MHz 矢量生成与解调分析带宽 (400 MHz Bandwidth)",
          "englishName": "400 MHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 400,
          "description": "M9415B 标配 400 MHz RF 与模拟 BBIQ 矢量生成解调带宽。",
          "englishDescription": "Standard 400 MHz RF & BBIQ modulation and analysis bandwidth."
        },
        {
          "id": "M9415B-B8X",
          "code": "M9415B-B8X",
          "name": "800 MHz 矢量生成与解调分析带宽 (800 MHz Bandwidth)",
          "englishName": "800 MHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$21,500",
          "bandwidthMHz": 800,
          "description": "扩展带宽至 800 MHz，轻松满足多载波 5G NR 及 Wi-Fi 7 320 MHz 宽带测试。",
          "englishDescription": "Extends bandwidth to 800 MHz for multi-carrier 5G NR and Wi-Fi 7."
        },
        {
          "id": "M9415B-B12",
          "code": "M9415B-B12",
          "name": "1.2 GHz 极致超宽矢量生成与解调带宽 (1.2 GHz Ultra-Wideband)",
          "englishName": "1.2 GHz modulation and analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$36,000",
          "bandwidthMHz": 1200,
          "description": "VXT 旗舰 1.2 GHz 极致超宽 RF 与模拟 I/Q 矢量生成与分析带宽。",
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
          "id": "M9415B-1EA",
          "code": "M9415B-1EA",
          "name": "高输出功率选件 (High Output Power up to +20 dBm)",
          "englishName": "High output power",
          "category": "Power",
          "priceEstimate": "+$5,200",
          "description": "提升矢量信号发生器输出功率电平至 +20 dBm，补偿线缆衰减与功放测试。",
          "englishDescription": "Increases VSG output power up to +20 dBm."
        },
        {
          "id": "M9415B-001",
          "code": "M9415B-001",
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
      "title": "选择模拟 BBIQ、基带内存与调制扩展 (Analog BBIQ, Memory & Performance)",
      "englishTitle": "Analog BBIQ, Memory & Performance",
      "subtitle": "模拟 I/Q 输入输出接口、2 GB 内存、多设备调制解调与远程处理选件",
      "englishSubtitle": "Analog Baseband I/Q (BBIQ) ports, 2 GB Baseband Memory, and Multi-device modem.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415B-M02",
          "code": "M9415B-M02",
          "name": "2 GB 深度基带波形存储器 (2 GB Baseband Memory)",
          "englishName": "2 GB baseband memory",
          "category": "Memory",
          "priceEstimate": "+$5,800",
          "description": "扩展波形播放与抓包内存至 2 GB，支持长时间 Complex IQ 信号生成与记录。",
          "englishDescription": "Expands baseband waveform memory up to 2 GB."
        },
        {
          "id": "M9415B-M05",
          "code": "M9415B-M05",
          "name": "512 MB 基带波形存储器 (512 MB Baseband Memory)",
          "englishName": "512 MB baseband memory",
          "category": "Memory",
          "priceEstimate": "+$2,500",
          "description": "基础 512 MB IQ 波形播放内存。",
          "englishDescription": "Provides 512 MB baseband memory."
        },
        {
          "id": "M9415B-MDM",
          "code": "M9415B-MDM",
          "name": "多设备 Modem 调制解调测试扩展包 (Multi-Device Modem)",
          "englishName": "Multi-device modem",
          "category": "Performance",
          "priceEstimate": "+$6,500",
          "description": "支持多基带 IC 芯片与 Modem 芯片并行验证测试。",
          "englishDescription": "Supports parallel testing of multi-device modem ICs."
        },
        {
          "id": "M9415B-RPC",
          "code": "M9415B-RPC",
          "name": "远程处理控制与计算引擎选件 (Remote Processing Control)",
          "englishName": "Remote processing control",
          "category": "Performance",
          "priceEstimate": "+$4,800",
          "description": "提供远程并行 DSP 运算处理控制能力。",
          "englishDescription": "Provides remote parallel DSP processing control."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择 PXIe 机箱与嵌入式控制器 (Select PXIe Chassis & Controller)",
      "englishTitle": "Select PXIe Chassis & Controller",
      "subtitle": "选购 18 槽高带宽 PXIe 机箱 M9019A/M9046A 与高性能嵌入式控制器",
      "englishSubtitle": "Choose 18-slot PXIe chassis M9019A/M9046A and Embedded Controller.",
      "type": "multiple",
      "options": [
        {
          "id": "M9019A",
          "code": "M9019A",
          "name": "M9019A 18 槽 Gen 3 PXIe 高带宽机箱 (18-Slot PXIe Chassis)",
          "englishName": "Gen 3 PXIe 18-slot chassis",
          "category": "PXIe Hardware",
          "priceEstimate": "+$8,500",
          "description": "提供 24 GB/s 系统总带宽与 18 个 PXIe 混合插槽。",
          "englishDescription": "18-slot Gen 3 PXIe chassis with 24 GB/s system bandwidth."
        },
        {
          "id": "M9046A",
          "code": "M9046A",
          "name": "M9046A 18 槽 Gen 4 高性能光纤接口 PXIe 机箱",
          "englishName": "Gen 4 PXIe 18-slot chassis with optical interface",
          "category": "PXIe Hardware",
          "priceEstimate": "+$12,500",
          "description": "支持 Gen 4 PCIe 与光纤背板接口的极致带宽 PXIe 机箱。",
          "englishDescription": "Gen 4 PXIe chassis with high-speed optical interface."
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
          "name": "NB-IoT & eMTC 物联网测试软件 (Node-locked)",
          "englishName": "NB-IoT & eMTC measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "窄带物联网物理层射频指标测试。",
          "englishDescription": "NB-IoT and eMTC measurement app."
        },
        {
          "id": "Y9080EM3E",
          "code": "Y9080EM3E",
          "name": "NB-IoT & eMTC 物联网测试软件 (Transportable)",
          "englishName": "NB-IoT & eMTC measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "可转移许可证 NB-IoT 测量软件。",
          "englishDescription": "Transportable NB-IoT measurement app."
        },
        {
          "id": "E9080EM4E",
          "code": "E9080EM4E",
          "name": "LTE V2X 车联网测试软件 (Node-locked)",
          "englishName": "LTE V2X measurement app",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "LTE V2X 直连通信射频特性解调与测量。",
          "englishDescription": "LTE V2X measurement app."
        },
        {
          "id": "Y9080EM4E",
          "code": "Y9080EM4E",
          "name": "LTE V2X 车联网测试软件 (Transportable)",
          "englishName": "LTE V2X measurement app, Transportable",
          "category": "Measurement App",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "可转移许可证 LTE V2X 测量软件。",
          "englishDescription": "Transportable LTE V2X measurement app."
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
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择通用调制解调与算法计算软件 (General Demod & MATLAB Software)",
      "englishTitle": "General Demod & MATLAB Software",
      "subtitle": "VMA 数字调制解调、Custom OFDM 及嵌入式 MATLAB 计算包",
      "englishSubtitle": "VMA digital demodulation, Custom OFDM, and embedded MATLAB.",
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
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 嵌入式计算与信号处理软件",
          "englishName": "MATLAB software",
          "category": "Measurement App",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "在 VXT 中直接运行自定义 MATLAB IQ 信号处理算法。",
          "englishDescription": "Executes MATLAB code directly inside VXT."
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择校准服务与保修计划 (Add Calibration & Warranty Plans)",
      "englishTitle": "Add Calibration & Warranty Plans",
      "subtitle": "出厂商业校准证书及 3/5 年原厂返厂保修与现场服务",
      "englishSubtitle": "Commercial calibration certificate and 3/5 years calibration assurance plans.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415B-UK6",
          "code": "M9415B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$950",
          "description": "附带 M9415B 工厂全套 RF 与 BBIQ 实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
        },
        {
          "id": "R-50C-011-3-",
          "code": "R-50C-011-3-",
          "name": "3 年期原厂返厂校准保障计划 (3 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 3 years",
          "category": "Warranty",
          "priceEstimate": "+$2,800",
          "description": "3 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "3-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "R-50C-011-5-",
          "code": "R-50C-011-5-",
          "name": "5 年期原厂返厂校准保障计划 (5 Years Cal Plan)",
          "englishName": "Calibration Assurance Plan, Return-to-Keysight, 5 years",
          "category": "Warranty",
          "priceEstimate": "+$4,800",
          "description": "5 年内定期返厂检测校准与指标超差自动调整。",
          "englishDescription": "5-year return-to-Keysight calibration assurance plan."
        },
        {
          "id": "PS-S40-01",
          "code": "PS-S40-01",
          "name": "定制化应用提升支持服务 (Productivity Assistance Level 1)",
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
        }
      ]
    }
  ]
};
