// Keysight E6680E Configurator Dataset
export const E6680E_DATA = {
  "id": "E6680E",
  "name": "E6680E Wireless Test Set",
  "subtitle": "Wi-Fi 6E, Wi-Fi 7 (802.11be), Wi-Fi 8 (802.11bn) & 5G Device Wireless Test Set",
  "family": "Wireless Test Sets",
  "docNumber": "3121-1295.EN / E6680E",
  "description": "Engineered for next-generation Wi-Fi and 5G device testing. Delivers up to 800 MHz bandwidth and frequency coverage up to 7.3 GHz with multi-transceiver TRX and 4x4/8x8 MIMO capabilities.",
  "baseSpecs": {
    "display": "High-density PXIe Multi-transceiver Chassis with internal switching",
    "processor": "Embedded High-Performance PXIe Controller",
    "storage": "PXIe Storage Module (Up to 16 TB IQ Streaming)",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "200 MHz Bandwidth (Option B2X, Expandable to 800 MHz)",
    "standardAttenuator": "Internal High-Speed Switching & Attenuator",
    "standardApps": "PathWave Non-signaling Test Application"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择主收发器 TRX 1 硬件及带宽频率 (TRX 1 Transceiver, Bandwidth & Frequency)",
      "englishTitle": "Select TRX 1 Transceiver, Bandwidth & Frequency",
      "subtitle": "出厂必选包含 TRX 1 主收发器，选择其初始分析带宽与频率范围上限",
      "englishSubtitle": "Mandatory TRX 1 Transceiver. Select initial analysis bandwidth and frequency range.",
      "type": "single",
      "options": [
        {
          "id": "E6680E-001",
          "code": "E6680E-001",
          "name": "TRX 1 主收发器通道 (Transceiver 1 Channel)",
          "englishName": "TRX 1 Transceiver",
          "category": "Hardware TRX",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含 TRX 1 收发器主通道硬件。",
          "englishDescription": "Mandatory Transceiver 1 hardware module."
        },
        {
          "id": "E6680E-B2X",
          "code": "E6680E-B2X",
          "name": "TRX 1 200 MHz 分析带宽 (200 MHz Bandwidth)",
          "englishName": "Bandwidth, 200 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 200,
          "description": "默认包含 200 MHz 信号解调带宽。",
          "englishDescription": "Default 200 MHz signal analysis bandwidth."
        },
        {
          "id": "E6680E-B4X",
          "code": "E6680E-B4X",
          "name": "TRX 1 400 MHz 分析带宽 (400 MHz Bandwidth)",
          "englishName": "Bandwidth, 400 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "+$5,800",
          "bandwidthMHz": 400,
          "description": "将分析带宽升级扩展至 400 MHz (支持 Wi-Fi 7 320MHz 宽信道分析)。",
          "englishDescription": "Upgrades analysis bandwidth to 400 MHz for Wi-Fi 7 320MHz channel testing."
        },
        {
          "id": "E6680E-B8X",
          "code": "E6680E-B8X",
          "name": "TRX 1 800 MHz 分析带宽 (800 MHz Bandwidth)",
          "englishName": "Bandwidth, 800 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "+$11,500",
          "bandwidthMHz": 800,
          "description": "将分析带宽升级扩展至 800 MHz 超宽带宽 (支持 5G NR 及 Wi-Fi 8 高级带宽)。",
          "englishDescription": "Upgrades analysis bandwidth to ultra-wide 800 MHz for 5G NR and Wi-Fi 8."
        },
        {
          "id": "E6680E-F06",
          "code": "E6680E-F06",
          "name": "TRX 1 频率范围 380 MHz 至 6 GHz",
          "englishName": "Frequency range, 380 MHz to 6 GHz for TRX 1",
          "category": "Frequency",
          "priceEstimate": "Standard",
          "isStandard": true,
          "freqMaxGHz": 6,
          "description": "默认包含 380 MHz 至 6 GHz 频率范围，覆盖常用 Sub-6GHz 频段。",
          "englishDescription": "Default frequency coverage from 380 MHz to 6 GHz."
        },
        {
          "id": "E6680E-F07",
          "code": "E6680E-F07",
          "name": "TRX 1 频率范围 380 MHz 至 7.3 GHz",
          "englishName": "Frequency range, 380 MHz to 7.3 GHz for TRX 1",
          "category": "Frequency",
          "priceEstimate": "+$4,200",
          "freqMaxGHz": 7.3,
          "description": "扩展频率范围至 7.3 GHz，全面覆盖 Wi-Fi 6E/7/8 6 GHz 新增频段。",
          "englishDescription": "Extends frequency range to 7.3 GHz for full Wi-Fi 6E/7/8 6 GHz spectrum testing."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "扩展辅助收发器 TRX 2/3/4 (Add Transceivers TRX 2 & TRX 3/4)",
      "englishTitle": "Add Transceivers TRX 2 & TRX 3/4",
      "subtitle": "可选配增加第 2 通道 TRX 2 以及第 3、4 通道 TRX 3 & 4 以支持多通道并行测试",
      "englishSubtitle": "Add optional TRX 2 and TRX 3/4 transceivers for multi-channel parallel testing.",
      "type": "multiple",
      "options": [
        {
          "id": "E6680E-002",
          "code": "E6680E-002",
          "name": "增加 TRX 2 第二收发器通道 (Add TRX 2)",
          "englishName": "Add TRX 2 Transceiver",
          "category": "Hardware TRX",
          "priceEstimate": "+$12,800",
          "description": "在机架内增加第 2 个独立的 TRX 收发器通道，实现双通道并行测试。",
          "englishDescription": "Adds second independent TRX transceiver channel for dual-channel parallel testing."
        },
        {
          "id": "E6680E-004",
          "code": "E6680E-004",
          "name": "增加 TRX 3 和 TRX 4 第 3/4 收发器通道 (Add TRX 3 and 4)",
          "englishName": "Add TRX 3 and TRX 4 Transceivers",
          "category": "Hardware TRX",
          "priceEstimate": "+$24,500",
          "description": "在机架内增加第 3 和第 4 个 TRX 收发器通道，构建单机架 4 TRX 16 端口完整测试能力。",
          "englishDescription": "Adds 3rd and 4th TRX transceiver channels for a complete 4 TRX 16-port configuration."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择高级硬件特性与 MIMO 功能 (Select Advanced Hardware & MIMO Features)",
      "englishTitle": "Select Advanced Hardware & MIMO Features",
      "subtitle": "选配小基站测试下行分析、4x4/8x8 MIMO 及 IQ 流盘回放接口",
      "englishSubtitle": "Select small cell downlink measurement, 4x4/8x8 MIMO, and IQ streaming hardware.",
      "type": "multiple",
      "options": [
        {
          "id": "E6680E-BTS",
          "code": "E6680E-BTS",
          "name": "下行测量分析功能 (Downlink Measurement Capability)",
          "englishName": "Downlink measurement capability for all TRX",
          "category": "Hardware Feature",
          "priceEstimate": "+$3,500",
          "description": "为所有 TRX 通道提供基站下行信号接收测量能力（测试 Wi-Fi / 5G 小基站必选）。",
          "englishDescription": "Adds downlink measurement capability for all TRX (required for small cell testing)."
        },
        {
          "id": "E6680E-M44",
          "code": "E6680E-M44",
          "name": "单机架 4x4 True MIMO 真实多天线测量功能",
          "englishName": "Up to 4x4 true MIMO in one chassis for all TRX",
          "category": "Hardware Feature",
          "priceEstimate": "+$8,500",
          "description": "在单台 E6680E 机架内为所有 TRX 激活最高 4x4 真 MIMO 耦合相位同步测试。",
          "englishDescription": "Enables up to 4x4 true MIMO measurement in one chassis for all TRX channels."
        },
        {
          "id": "E6680E-MTS",
          "code": "E6680E-MTS",
          "name": "跨机架双机 8x8 MIMO 多天线同步接口",
          "englishName": "Synchronization for up to 8x8 MIMO with two chassis",
          "category": "Hardware Feature",
          "priceEstimate": "+$6,800",
          "description": "支持两台 E6680E 机架互联级联，实现 8x8 MIMO 大规模天线阵列同步解调。",
          "englishDescription": "Provides synchronization interface for up to 8x8 MIMO testing using two E6680E chassis."
        },
        {
          "id": "E6680E-STM",
          "code": "E6680E-STM",
          "name": "IQ 数据流背板高速输入/输出接口 (IQ Streaming In/Out)",
          "englishName": "IQ streaming In/Out via backplane",
          "category": "Hardware Feature",
          "priceEstimate": "+$4,200",
          "description": "通过 PXIe 底板实现 IQ 数据流高速实时输入与输出；需配合 M9038A 控制器与存储模块。",
          "englishDescription": "IQ streaming In/Out via PXIe backplane; requires M9038A controller and PXIe storage modules."
        },
        {
          "id": "E6680E-CM8",
          "code": "E6680E-CM8",
          "name": "M9038A 控制器及 8TB PXIe 高速存储模块",
          "englishName": "M9038A controller and PXIe storage modules (total 8TB)",
          "category": "Hardware Storage",
          "priceEstimate": "+$9,500",
          "requires": [
            "E6680E-STM"
          ],
          "description": "包含高性能 M9038A 控制器与 2 个 PXIe 存储模块（共 8 TB 容量），用于大带宽 IQ 录制流盘。",
          "englishDescription": "Includes M9038A controller and two PXIe storage modules (8TB total) for IQ streaming."
        },
        {
          "id": "E6680E-CMH",
          "code": "E6680E-CMH",
          "name": "M9038A 控制器及 16TB PXIe 高速存储模块",
          "englishName": "M9038A controller and PXIe storage modules (total 16TB)",
          "category": "Hardware Storage",
          "priceEstimate": "+$14,800",
          "requires": [
            "E6680E-STM"
          ],
          "description": "包含高性能 M9038A 控制器与 2 个 PXIe 存储模块（共 16 TB 容量），用于长时间大带宽 IQ 流盘。",
          "englishDescription": "Includes M9038A controller and two PXIe storage modules (16TB total) for long-duration IQ streaming."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择 PathWave / V-Apps / Y-Apps 无线测试应用软件 (Wireless Measurement Apps)",
      "englishTitle": "Select Wireless Software Applications",
      "subtitle": "支持 V-Apps (上行测量分析) 及 Y-Apps (下行波形生成 + 上行解调双向测量)",
      "englishSubtitle": "V-Apps (uplink analysis) & Y-Apps (downlink waveform + uplink analysis).",
      "type": "multiple",
      "options": [
        {
          "id": "Y9077EM0E",
          "code": "Y9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11a/b/g/j/p/n/af/ah waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "传统 WLAN 802.11 协议簇任意波形生成与上行单键解调测试（Y-App）。",
          "englishDescription": "WLAN 802.11a/b/g/j/p/n/af/ah arbitrary waveform generation and measurement analysis."
        },
        {
          "id": "Y9077EM1E",
          "code": "Y9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6/6E) 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11ac/ax waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "Wi-Fi 5 (11ac) 与 Wi-Fi 6/6E (11ax) 160MHz 80MHz 高吞吐量双向波形与 EVM 测量。",
          "englishDescription": "WLAN 802.11ac and 802.11ax (Wi-Fi 6E) waveform generation and EVM measurement analysis."
        },
        {
          "id": "Y9077EM2E",
          "code": "Y9077EM2E",
          "name": "WLAN 802.11be/bn (Wi-Fi 7/8 320MHz) 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11be and 802.11bn waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$7,200",
          "supportsLicense": true,
          "description": "最新 Wi-Fi 7 (11be) 与 Wi-Fi 8 (11bn) 320 MHz 宽信道 4096QAM 调制波形与解调分析。",
          "englishDescription": "WLAN 802.11be (Wi-Fi 7) and 802.11bn (Wi-Fi 8) 320 MHz 4096QAM waveform and measurement."
        },
        {
          "id": "Y9085EM0E",
          "code": "Y9085EM0E",
          "name": "5G NR 非信令波形与测量分析软件 (Y-App)",
          "englishName": "5G NR non-signaling waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR Sub-6 GHz 非信令双向波形发生与产线高吞吐量解调分析。",
          "englishDescription": "5G NR Sub-6 GHz non-signaling arbitrary waveform generation and measurement analysis."
        },
        {
          "id": "Y9081EM0E",
          "code": "Y9081EM0E",
          "name": "Bluetooth 蓝牙 5/BLE 波形与测量软件 (Y-App)",
          "englishName": "Bluetooth waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及蓝牙 5 / BLE 低功耗波形发生与解调分析。",
          "englishDescription": "Bluetooth BR/EDR and Bluetooth 5 / BLE waveform and measurement analysis."
        },
        {
          "id": "Y9080EM0E",
          "code": "Y9080EM0E",
          "name": "LTE/LTE-Advanced FDD 波形与测量软件 (Y-App)",
          "englishName": "LTE/LTE-A FDD waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE FDD 及载波聚合频段波形生成与解调测试。",
          "englishDescription": "LTE/LTE-Advanced FDD arbitrary waveform generation and measurement."
        },
        {
          "id": "Y9082EM0E",
          "code": "Y9082EM0E",
          "name": "LTE/LTE-Advanced TDD 波形与测量软件 (Y-App)",
          "englishName": "LTE/LTE-A TDD waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工信号波形生成与解调测试。",
          "englishDescription": "LTE/LTE-Advanced TDD arbitrary waveform generation and measurement."
        },
        {
          "id": "Y9084EM0E",
          "code": "Y9084EM0E",
          "name": "短距离通信与 IoT (LoRa/ZigBee) 波形与测量软件 (Y-App)",
          "englishName": "Short-range communications waveform and measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "LoRa, 802.15.4 ZigBee 及 Z-Wave 物联网通信波形与解调分析。",
          "englishDescription": "LoRa, 802.15.4 ZigBee, and Z-Wave IoT waveform and measurement."
        },
        {
          "id": "V9065EM0E",
          "code": "V9065EM0E",
          "name": "序列分析仪 BTS 小基站测量应用软件 (V-App)",
          "englishName": "Sequence analyzer BTS applications",
          "category": "Wireless Software",
          "priceEstimate": "+$4,500",
          "requires": [
            "E6680E-BTS"
          ],
          "supportsLicense": true,
          "description": "小基站生产线序列化快速测量解调软件；需 Option E6680E-BTS。",
          "englishDescription": "Sequence analyzer BTS application for small cell manufacturing; requires E6680E-BTS."
        },
        {
          "id": "V9065EM2E",
          "code": "V9065EM2E",
          "name": "多设备并行分析软件 (Parallel Analysis)",
          "englishName": "Parallel analysis of multiple devices",
          "category": "Wireless Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "利用多 TRX 硬件实现多台待测件（Multi-DUT）的高效并行测量分析。",
          "englishDescription": "Parallel analysis software for simultaneous multi-DUT testing."
        },
        {
          "id": "V9085EM1E",
          "code": "V9085EM1E",
          "name": "PAvT 功放效率与动态特性测量软件",
          "englishName": "PAvT measurement",
          "category": "Wireless Software",
          "priceEstimate": "+$3,600",
          "supportsLicense": true,
          "description": "测量射频功率放大器 (PA) 的 PAvT 动态功耗与增益效率特性；需 5G NR 软件支持。",
          "englishDescription": "PAvT measurement software for RF power amplifier efficiency; requires 5G NR app."
        },
        {
          "id": "N7607EMBC",
          "code": "N7607EMBC",
          "name": "PathWave DFS 及 DAA 雷达剖面波形生成播放软件",
          "englishName": "PathWave signal generation for DFS and DAA profiles",
          "category": "Wireless Software",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "针对 Wi-Fi 动态频率选择 (DFS) 雷达脉冲剖面的测试波形生成与播放。",
          "englishDescription": "PathWave signal generation for DFS and DAA radar profiles and waveform playback."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择 WaveJudge 协议分析与第三方软件 (WaveJudge Wireless Analyzer)",
      "englishTitle": "Select WaveJudge Wireless Analyzer Software",
      "subtitle": "WaveJudge 协议层解包分析、802.11be/ax/ac 抓包及 4096QAM 选件",
      "englishSubtitle": "WaveJudge protocol frame analysis, 802.11be/ax/ac sniffer, and 4096QAM options.",
      "type": "multiple",
      "options": [
        {
          "id": "ES114000A",
          "code": "ES114000A",
          "name": "非信令射频测试套件 (Non-signaling RF Application)",
          "englishName": "Non-signaling RF application",
          "category": "Protocol Tool",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "独立的非信令射频测试环境与 API 接口控制套件。",
          "englishDescription": "Standalone non-signaling RF test application and API suite."
        },
        {
          "id": "WJ001000A",
          "code": "WJ001000A",
          "name": "WaveJudge 无线协议分析主程序 (WaveJudge Main App)",
          "englishName": "WaveJudge Wireless Analyzer Application",
          "category": "Protocol Tool",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "WaveJudge 无线协议层分析核心平台，用于空中接口物理层与 MAC 层日志抓包解包。",
          "englishDescription": "Core WaveJudge Wireless Analyzer platform for PHY/MAC layer protocol parsing."
        },
        {
          "id": "WJ038100A",
          "code": "WJ038100A",
          "name": "WaveJudge WLAN 802.11a/b/g/n/ac 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11 a/b/g/n/ac",
          "category": "Protocol Tool",
          "priceEstimate": "+$4,200",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析经典 WLAN 802.11a/b/g/n/ac 帧结构与 MAC 协议消息。",
          "englishDescription": "Protocol parsing for WLAN 802.11 a/b/g/n/ac frames."
        },
        {
          "id": "WJ038101A",
          "code": "WJ038101A",
          "name": "WaveJudge WLAN 802.11ax (Wi-Fi 6) 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11ax",
          "category": "Protocol Tool",
          "priceEstimate": "+$4,800",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析 Wi-Fi 6 802.11ax OFDMA 调度帧与 Trigger Frame 消息。",
          "englishDescription": "Protocol parsing for WLAN 802.11ax Wi-Fi 6 OFDMA frames."
        },
        {
          "id": "WJ038102A",
          "code": "WJ038102A",
          "name": "WaveJudge WLAN 802.11be (Wi-Fi 7) 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11be",
          "category": "Protocol Tool",
          "priceEstimate": "+$5,800",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析 Wi-Fi 7 802.11be MLO 多链路操作与 EHT 帧消息。",
          "englishDescription": "Protocol parsing for WLAN 802.11be Wi-Fi 7 MLO frames."
        },
        {
          "id": "WJ0380M0A",
          "code": "WJ0380M0A",
          "name": "WaveJudge WLAN 4096QAM 超高阶调制星座图选件",
          "englishName": "WaveJudge WLAN 4096QAM",
          "category": "Protocol Tool",
          "priceEstimate": "+$3,200",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "支持 Wi-Fi 7 / 8 4096QAM 极高阶调制解调与 EVM 细化图表呈现。",
          "englishDescription": "Adds 4096QAM modulation analysis for Wi-Fi 7/8 in WaveJudge."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择附件与机架安装套件 (Add Accessories & Rackmount)",
      "englishTitle": "Add Accessories & Rackmount",
      "subtitle": "键鼠套件、机架安装法兰及导轨附件",
      "englishSubtitle": "USB keyboard/mouse and rackmount rail kit.",
      "type": "multiple",
      "options": [
        {
          "id": "Y1206A",
          "code": "Y1206A",
          "name": "USB 键盘与光电鼠标套件 (USB Keyboard & Optical Mouse)",
          "englishName": "USB keyboard and optical mouse",
          "category": "Accessories",
          "priceEstimate": "+$120",
          "description": "键鼠组合，便于在嵌入式控制器 Windows 系统中便捷操作。",
          "englishDescription": "USB keyboard and optical mouse kit."
        },
        {
          "id": "Y1217A",
          "code": "Y1217A",
          "name": "机架安装法兰与导轨套件 (Rack Mount and Rail Kit)",
          "englishName": "Rack mount and rack rail kit",
          "category": "Rackmount",
          "priceEstimate": "+$650",
          "description": "用于将 E6680E PXIe 机架安装至 19 英寸标准测试机柜的专业导轨法兰组。",
          "englishDescription": "Rack mount flanges and sliding rail kit for 19-inch rack enclosures."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择校准、服务保障与软件许可升级 (Add Services & Upgrades)",
      "englishTitle": "Add Services & Upgrades",
      "subtitle": "商业校准证书、KeysightCare 硬件服务与软件纯 License 升级选项",
      "englishSubtitle": "Commercial calibration, KeysightCare support, and software-only upgrade licenses.",
      "type": "multiple",
      "options": [
        {
          "id": "E6680E-UK6",
          "code": "E6680E-UK6",
          "name": "带测试数据的全通道商业校准证书",
          "englishName": "Commercial calibration certificate with test data for all TRX",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂提供全 TRX 通道的商业校准实测数据报告。",
          "englishDescription": "Commercial calibration certificate with test data for all TRX."
        },
        {
          "id": "R-55A-001-1",
          "code": "Standard",
          "name": "KeysightCare 首年服务保障 (KeysightCare Assured 1 Year)",
          "englishName": "KeysightCare Assured First Year Support",
          "category": "Warranty",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "默认包含 KeysightCare 首年优先技术支持与保障服务。",
          "englishDescription": "KeysightCare Assured First Year Support included by default."
        },
        {
          "id": "R-51B-001-C",
          "code": "Standard",
          "name": "1 年期返厂硬件保修 (1 Year Return-to-Keysight Warranty)",
          "englishName": "1-year return-to-Keysight warranty",
          "category": "Warranty",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "默认包含 1 年原厂硬件保修服务。",
          "englishDescription": "Standard 1-year return-to-Keysight warranty."
        },
        {
          "id": "E6680EU-BTS",
          "code": "E6680EU-BTS",
          "name": "许可升级: 增加下行测量分析能力 (Add Downlink Analysis)",
          "englishName": "Add downlink measurement capability",
          "category": "Upgrade License",
          "priceEstimate": "+$4,200",
          "description": "纯软件 License 升级：为整机激活下行信号接收测量能力。",
          "englishDescription": "Software-only license upgrade: Adds downlink measurement capability."
        },
        {
          "id": "E6680EU-BU1",
          "code": "E6680EU-BU1",
          "name": "许可升级: 带宽由 200 MHz 升级至 400 MHz",
          "englishName": "Upgrade bandwidth from 200 to 400 MHz",
          "category": "Upgrade License",
          "priceEstimate": "+$6,500",
          "description": "纯软件 License 升级：将单个 TRX 通道的解调带宽由 200 MHz 升级至 400 MHz。",
          "englishDescription": "Software-only license upgrade: Upgrades bandwidth from 200 to 400 MHz per TRX."
        },
        {
          "id": "E6680EU-BU2",
          "code": "E6680EU-BU2",
          "name": "许可升级: 带宽由 200 MHz 升级至 800 MHz",
          "englishName": "Upgrade bandwidth from 200 to 800 MHz",
          "category": "Upgrade License",
          "priceEstimate": "+$12,500",
          "description": "纯软件 License 升级：将单个 TRX 通道的解调带宽直接升级至 800 MHz。",
          "englishDescription": "Software-only license upgrade: Upgrades bandwidth from 200 to 800 MHz per TRX."
        },
        {
          "id": "E6680EU-FU1",
          "code": "E6680EU-FU1",
          "name": "许可升级: 频率上限升级至 7.3 GHz",
          "englishName": "Upgrade frequency range to 380 MHz to 7.3 GHz",
          "category": "Upgrade License",
          "priceEstimate": "+$4,800",
          "description": "纯软件 License 升级：无需修改硬件，将频率测量上限扩展至 7.3 GHz。",
          "englishDescription": "Software-only license upgrade: Upgrades frequency range to 7.3 GHz without hardware changes."
        }
      ]
    }
  ]
};
