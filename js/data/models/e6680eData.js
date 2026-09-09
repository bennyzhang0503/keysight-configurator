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
    "standardApps": "PathWave Non-signaling Test Application, V9060EM0E IQ Analysis, V9065EM1E Sequence Analyzer, Waveform Pack (E6680E-250, 251, 252)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择收发器 (TRX)、带宽与频率范围 (Transceiver TRX, Bandwidth & Frequency)",
      "englishTitle": "Select Transceiver TRX, Bandwidth & Frequency",
      "subtitle": "出厂必选 TRX 1 主收发器，可选配 TRX 2 及 TRX 3/4，并设置分析带宽与频率上限",
      "englishSubtitle": "Mandatory TRX 1 Transceiver, add optional TRX 2 & TRX 3/4, select bandwidth and frequency range.",
      "type": "multiple",
      "options": [
        {
          "id": "E6680E-001",
          "code": "E6680E-001",
          "name": "TRX 1 主收发器通道 (Transceiver 1 Channel)",
          "englishName": "TRX 1 Transceiver",
          "category": "Hardware TRX",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含 TRX 1 主收发器硬件通道。",
          "englishDescription": "Mandatory Transceiver 1 hardware module."
        },
        {
          "id": "E6680E-B2X",
          "code": "E6680E-B2X",
          "name": "TRX 1 200 MHz 分析带宽 (200 MHz Bandwidth for TRX 1)",
          "englishName": "Bandwidth, 200 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 200,
          "description": "默认包含 TRX 1 200 MHz 信号解调分析带宽。",
          "englishDescription": "Default 200 MHz signal analysis bandwidth for TRX 1."
        },
        {
          "id": "E6680E-B4X",
          "code": "E6680E-B4X",
          "name": "TRX 1 400 MHz 分析带宽 (400 MHz Bandwidth for TRX 1)",
          "englishName": "Bandwidth, 400 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "+$5,800",
          "bandwidthMHz": 400,
          "description": "将 TRX 1 分析带宽扩展至 400 MHz (支持 Wi-Fi 7 320MHz 宽信道测试)。",
          "englishDescription": "Upgrades TRX 1 analysis bandwidth to 400 MHz for Wi-Fi 7 320MHz channel testing."
        },
        {
          "id": "E6680E-B8X",
          "code": "E6680E-B8X",
          "name": "TRX 1 800 MHz 分析带宽 (800 MHz Bandwidth for TRX 1)",
          "englishName": "Bandwidth, 800 MHz for TRX 1",
          "category": "Bandwidth",
          "priceEstimate": "+$11,500",
          "bandwidthMHz": 800,
          "description": "将 TRX 1 分析带宽扩展至 800 MHz 超宽带宽 (支持 5G NR 及 Wi-Fi 8 高级带宽)。",
          "englishDescription": "Upgrades TRX 1 analysis bandwidth to ultra-wide 800 MHz for 5G NR and Wi-Fi 8."
        },
        {
          "id": "E6680E-F06",
          "code": "E6680E-F06",
          "name": "TRX 1 频率范围 380 MHz 至 6 GHz (380 MHz to 6 GHz for TRX 1)",
          "englishName": "Frequency range, 380 MHz to 6 GHz for TRX 1",
          "category": "Frequency",
          "priceEstimate": "Standard",
          "isStandard": true,
          "freqMaxGHz": 6,
          "description": "默认包含 380 MHz 至 6 GHz 频率范围。",
          "englishDescription": "Default frequency coverage from 380 MHz to 6 GHz for TRX 1."
        },
        {
          "id": "E6680E-F07",
          "code": "E6680E-F07",
          "name": "TRX 1 频率范围 380 MHz 至 7.3 GHz (380 MHz to 7.3 GHz for TRX 1)",
          "englishName": "Frequency range, 380 MHz to 7.3 GHz for TRX 1",
          "category": "Frequency",
          "priceEstimate": "+$4,200",
          "freqMaxGHz": 7.3,
          "description": "扩展 TRX 1 频率上限至 7.3 GHz，全面覆盖 Wi-Fi 6E/7/8 6 GHz 频段。",
          "englishDescription": "Extends TRX 1 frequency range to 7.3 GHz for Wi-Fi 6E/7/8 6 GHz spectrum testing."
        },
        {
          "id": "E6680E-002",
          "code": "E6680E-002",
          "name": "增加 TRX 2 第二收发器通道 (Add TRX 2 Transceiver)",
          "englishName": "Add TRX 2",
          "category": "Hardware TRX",
          "priceEstimate": "+$12,800",
          "description": "在机架内增加第 2 个 TRX 收发器通道，实现双通道并行测试。",
          "englishDescription": "Adds second independent TRX transceiver channel for dual-channel parallel testing."
        },
        {
          "id": "E6680E-004",
          "code": "E6680E-004",
          "name": "增加 TRX 3 和 TRX 4 第 3/4 收发器通道 (Add TRX 3 and 4)",
          "englishName": "Add TRX 3 and 4",
          "category": "Hardware TRX",
          "priceEstimate": "+$24,500",
          "description": "在机架内增加第 3 和第 4 个 TRX 收发器通道，构建单机架 4 TRX 16 端口完整能力。",
          "englishDescription": "Adds 3rd and 4th TRX transceiver channels for a complete 4 TRX 16-port configuration."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择高级硬件功能与 MIMO / IQ 流盘选件 (Select Additional Hardware & IQ Streaming)",
      "englishTitle": "Select Additional Hardware Options & IQ Streaming",
      "subtitle": "基站下行测量、单机 4x4 MIMO、双机 8x8 MIMO 及 M9038A 8TB/16TB IQ 存储选件",
      "englishSubtitle": "Select BTS downlink measurement, 4x4/8x8 MIMO, and M9038A 8TB/16TB IQ streaming modules.",
      "type": "multiple",
      "options": [
        {
          "id": "E6680E-BTS",
          "code": "E6680E-BTS",
          "name": "所有 TRX 下行测量分析功能 (Downlink Measurement Capability)",
          "englishName": "Downlink measurement capability for all TRX",
          "category": "Hardware Feature",
          "priceEstimate": "+$3,500",
          "description": "为所有 TRX 提供基站下行测量能力 (测试 Wi-Fi / 5G 小基站 BTS 必选)。",
          "englishDescription": "Adds downlink measurement capability for all TRX (required for testing small cells)."
        },
        {
          "id": "E6680E-M44",
          "code": "E6680E-M44",
          "name": "单机架 4x4 True MIMO 真实多天线测量功能 (4x4 MIMO in 1 Chassis)",
          "englishName": "Up to 4x4 true MIMO in one chassis for all TRX",
          "category": "Hardware Feature",
          "priceEstimate": "+$8,500",
          "description": "在单台机架内为所有 TRX 激活最高 4x4 真 MIMO 相位同步测试。",
          "englishDescription": "Enables up to 4x4 true MIMO measurement in one chassis for all TRX channels."
        },
        {
          "id": "E6680E-MTS",
          "code": "E6680E-MTS",
          "name": "双机架 8x8 MIMO 多天线同步接口 (Synchronization for 8x8 MIMO)",
          "englishName": "Synchronization for up to 8x8 MIMO with two chassis",
          "category": "Hardware Feature",
          "priceEstimate": "+$6,800",
          "description": "支持两台 E6680E 机架互联，实现 8x8 MIMO 大规模天线同步解调。",
          "englishDescription": "Provides synchronization interface for up to 8x8 MIMO testing using two chassis."
        },
        {
          "id": "E6680E-UK6",
          "code": "E6680E-UK6",
          "name": "带测试数据的全通道商业校准证书 (Commercial Calibration Certificate)",
          "englishName": "Commercial calibration certificate with test data for all TRX",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂提供全 TRX 通道的商业校准实测数据报告。",
          "englishDescription": "Commercial calibration certificate with test data for all TRX."
        },
        {
          "id": "E6680E-STM",
          "code": "E6680E-STM",
          "name": "IQ 数据流背板高速输入/输出接口 (IQ Streaming In/Out)",
          "englishName": "IQ streaming In/Out via backplane",
          "category": "IQ Streaming",
          "priceEstimate": "+$4,200",
          "description": "通过 PXIe 底板实现 IQ 数据流高速实时输入输出；需配合 M9038A 控制器与存储模块。",
          "englishDescription": "IQ streaming In/Out via backplane; requires M9038A controller and storage modules."
        },
        {
          "id": "E6680E-CM8",
          "code": "E6680E-CM8",
          "name": "M9038A 控制器及 8TB PXIe 高速存储模块 (M9038A Controller & 8TB Storage)",
          "englishName": "M9038A controller and two PXIe storage modules (total 8TB)",
          "category": "IQ Streaming",
          "priceEstimate": "+$9,500",
          "requires": [
            "E6680E-STM"
          ],
          "description": "包含高性能 M9038A 控制器与 2 个 PXIe 存储模块（共 8 TB 容量）；需 Option STM，与 CMH 互斥。",
          "englishDescription": "Includes M9038A controller and two PXIe storage modules (8TB total); requires STM."
        },
        {
          "id": "E6680E-CMH",
          "code": "E6680E-CMH",
          "name": "M9038A 控制器及 16TB PXIe 高速存储模块 (M9038A Controller & 16TB Storage)",
          "englishName": "M9038A controller and two PXIe storage modules (total 16TB)",
          "category": "IQ Streaming",
          "priceEstimate": "+$14,800",
          "requires": [
            "E6680E-STM"
          ],
          "description": "包含高性能 M9038A 控制器与 2 个 PXIe 存储模块（共 16 TB 容量）；需 Option STM，与 CM8 互斥。",
          "englishDescription": "Includes M9038A controller and two PXIe storage modules (16TB total); requires STM."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择 V-Apps 上行测量分析软件 (Select V-Apps Measurement Software)",
      "englishTitle": "Select V-Apps Measurement Software",
      "subtitle": "适用于 WLAN、5G NR、Cellular、Bluetooth 及通用调制的单向解调测试软件",
      "englishSubtitle": "Select uplink measurement analysis software applications (V-Apps).",
      "type": "multiple",
      "options": [
        {
          "id": "V9060EM0E",
          "code": "V9060EM0E",
          "name": "IQ 分析测量应用软件 (IQ Analysis Software)",
          "englishName": "IQ analysis measurement software",
          "category": "Standard Software",
          "priceEstimate": "Standard",
          "isStandard": true,
          "supportsLicense": true,
          "description": "出厂默认包含 IQ 分析与基础通用波形解调功能。",
          "englishDescription": "Standard IQ analysis measurement software included by default."
        },
        {
          "id": "V9065EM1E",
          "code": "V9065EM1E",
          "name": "设备序列分析应用软件 (Sequence Analyzer for Device Applications)",
          "englishName": "Sequence analyzer for device applications",
          "category": "Standard Software",
          "priceEstimate": "Standard",
          "isStandard": true,
          "supportsLicense": true,
          "description": "出厂默认包含用于自动化产线的高速序列分析软件。",
          "englishDescription": "Standard sequence analyzer for device applications included by default."
        },
        {
          "id": "V9065EM0E",
          "code": "V9065EM0E",
          "name": "序列分析仪 BTS 小基站测量应用软件 (Sequence Analyzer BTS Applications)",
          "englishName": "Sequence analyzer BTS applications",
          "category": "V-App Measurement",
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
          "name": "多设备并行分析软件 (Parallel Analysis of Multiple Devices)",
          "englishName": "Parallel analysis of multiple devices",
          "category": "V-App Measurement",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "利用多 TRX 硬件实现多台待测件 (Multi-DUT) 高效并行测量分析。",
          "englishDescription": "Parallel analysis software for simultaneous multi-DUT testing."
        },
        {
          "id": "V9071EM0E",
          "code": "V9071EM0E",
          "name": "GSM/EDGE/Evo 测量分析软件 (V-App)",
          "englishName": "GSM/EDGE/Evo measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "GSM, EDGE 以及 EDGE Evolution 蜂窝信号单键上行解调测试。",
          "englishDescription": "GSM/EDGE/Evo measurement analysis software."
        },
        {
          "id": "V9073EM0E",
          "code": "V9073EM0E",
          "name": "W-CDMA/HSPA+ 测量分析软件 (V-App)",
          "englishName": "W-CDMA/HSPA+ measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "3G W-CDMA 及 HSPA+ 蜂窝信号上行解调测量。",
          "englishDescription": "W-CDMA/HSPA+ measurement analysis software."
        },
        {
          "id": "V9077EM0E",
          "code": "V9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 测量分析软件 (V-App)",
          "englishName": "WLAN 802.11a/b/g/j/p/n/af/ah measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "传统 WLAN 802.11 协议簇单键解调测量分析。",
          "englishDescription": "WLAN 802.11a/b/g/j/p/n/af/ah measurement analysis."
        },
        {
          "id": "V9077EM1E",
          "code": "V9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6/6E) 测量分析软件 (V-App)",
          "englishName": "WLAN 802.11ac/ax measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "Wi-Fi 5 (11ac) 与 Wi-Fi 6/6E (11ax) 160MHz 宽信道解调与 EVM 测量。",
          "englishDescription": "WLAN 802.11ac and 802.11ax (Wi-Fi 6E) EVM measurement analysis."
        },
        {
          "id": "V9077EM2E",
          "code": "V9077EM2E",
          "name": "WLAN 802.11be/bn (Wi-Fi 7/8) 测量分析软件 (V-App)",
          "englishName": "WLAN 802.11be and 802.11bn measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$7,200",
          "supportsLicense": true,
          "description": "最新 Wi-Fi 7 (11be) 与 Wi-Fi 8 (11bn) 320 MHz 宽信道 4096QAM 调制解调分析。",
          "englishDescription": "WLAN 802.11be (Wi-Fi 7) and 802.11bn (Wi-Fi 8) 320 MHz 4096QAM measurement."
        },
        {
          "id": "V9080EM0E",
          "code": "V9080EM0E",
          "name": "LTE/LTE-Advanced FDD 测量分析软件 (V-App)",
          "englishName": "LTE/LTE-A FDD measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE FDD 蜂窝信号解调及载波聚合特性测量。",
          "englishDescription": "LTE/LTE-Advanced FDD measurement analysis software."
        },
        {
          "id": "V9080EM4E",
          "code": "V9080EM4E",
          "name": "LTE V2X 车联网测量分析软件 (V-App)",
          "englishName": "LTE V2X measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$5,500",
          "supportsLicense": true,
          "description": "LTE V2X 直连通信侧链 (Sidelink) 信号解调测试。",
          "englishDescription": "LTE V2X sidelink signal measurement analysis."
        },
        {
          "id": "V9081EM0E",
          "code": "V9081EM0E",
          "name": "Bluetooth 蓝牙 5/BLE 测量分析软件 (V-App)",
          "englishName": "Bluetooth measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及蓝牙 5 / BLE 低功耗信号解调分析。",
          "englishDescription": "Bluetooth BR/EDR and Bluetooth 5 / BLE measurement analysis."
        },
        {
          "id": "V9082EM0E",
          "code": "V9082EM0E",
          "name": "LTE/LTE-Advanced TDD 测量分析软件 (V-App)",
          "englishName": "LTE/LTE-A TDD measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工信号解调测试。",
          "englishDescription": "LTE/LTE-Advanced TDD measurement analysis."
        },
        {
          "id": "V9084EM0E",
          "code": "V9084EM0E",
          "name": "短距离通信与 IoT (LoRa/ZigBee) 测量分析软件 (V-App)",
          "englishName": "Short-range communications measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "LoRa, 802.15.4 ZigBee 及 Z-Wave 物联网通信解调分析。",
          "englishDescription": "Short-range IoT (LoRa, ZigBee, Z-Wave) measurement analysis."
        },
        {
          "id": "V9085EM0E",
          "code": "V9085EM0E",
          "name": "5G NR 测量分析软件 (V-App)",
          "englishName": "5G NR measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR Sub-6 GHz 非信令上行信号解调分析。",
          "englishDescription": "5G NR Sub-6 GHz non-signaling measurement analysis."
        },
        {
          "id": "V9085EM1E",
          "code": "V9085EM1E",
          "name": "PAvT 功放效率与动态特性测量软件 (V-App)",
          "englishName": "PAvT measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$3,600",
          "supportsLicense": true,
          "description": "测量射频功放 PAvT 动态功耗与增益效率；需 V9085EM0E 或 Y9085EM0E。",
          "englishDescription": "PAvT measurement software for RF PA efficiency; requires V9085EM0E or Y9085EM0E."
        },
        {
          "id": "V9054EM0E",
          "code": "V9054EM0E",
          "name": "VMA 通用数字解调测量软件 (VMA Digital Demodulation)",
          "englishName": "VMA digital demodulation measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "通用数字矢量信号解调与 FSK/PSK/QAM 星座图分析。",
          "englishDescription": "VMA general digital demodulation measurement analysis."
        },
        {
          "id": "V9054EM1E",
          "code": "V9054EM1E",
          "name": "VMA 定制 OFDM 信号解调测量软件 (VMA Custom OFDM)",
          "englishName": "VMA custom OFDM measurement",
          "category": "V-App Measurement",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "自定义 OFDM 结构与子载波解调分析。",
          "englishDescription": "VMA custom OFDM modulation measurement analysis."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择 Y-Apps 双向测试及 WaveJudge / PathWave 软件 (Select Y-Apps & WaveJudge Software)",
      "englishTitle": "Select Y-Apps, WaveJudge & PathWave Software",
      "subtitle": "包含任意波形发生 (ARB Downlink) + 上行测量解调及 WaveJudge 协议分析",
      "englishSubtitle": "Y-Apps (downlink ARB waveform + uplink measurement), WaveJudge protocol toolset and PathWave apps.",
      "type": "multiple",
      "options": [
        {
          "id": "Y9071EM0E",
          "code": "Y9071EM0E",
          "name": "GSM/EDGE/Evo 波形与测量软件 (Y-App)",
          "englishName": "GSM/EDGE/Evo waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "GSM/EDGE/Evo 任意波形生成与解调双向测试。",
          "englishDescription": "GSM/EDGE/Evo waveform generation and measurement analysis."
        },
        {
          "id": "Y9073EM0E",
          "code": "Y9073EM0E",
          "name": "W-CDMA/HSPA+ 波形与测量软件 (Y-App)",
          "englishName": "W-CDMA/HSPA+ waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "W-CDMA 及 HSPA+ 波形发生与解调测试。",
          "englishDescription": "W-CDMA/HSPA+ waveform generation and measurement analysis."
        },
        {
          "id": "Y9077EM0E",
          "code": "Y9077EM0E",
          "name": "WLAN 802.11a/b/g/j/p/n/af/ah 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11a/b/g/j/p/n/af/ah waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "传统 WLAN 802.11 协议簇任意波形生成与解调测试。",
          "englishDescription": "WLAN 802.11a/b/g/j/p/n/af/ah arbitrary waveform generation and measurement."
        },
        {
          "id": "Y9077EM1E",
          "code": "Y9077EM1E",
          "name": "WLAN 802.11ac/ax (Wi-Fi 6/6E) 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11ac/ax measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "Wi-Fi 5 (11ac) 与 Wi-Fi 6/6E (11ax) 160MHz 宽信道双向波形与 EVM 测量。",
          "englishDescription": "WLAN 802.11ac/ax (Wi-Fi 6E) waveform generation and measurement."
        },
        {
          "id": "Y9077EM2E",
          "code": "Y9077EM2E",
          "name": "WLAN 802.11be/bn (Wi-Fi 7/8 320MHz) 波形与测量软件 (Y-App)",
          "englishName": "WLAN 802.11be and 802.11bn measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$7,200",
          "supportsLicense": true,
          "description": "最新 Wi-Fi 7 (11be) 与 Wi-Fi 8 (11bn) 320 MHz 4096QAM 调制波形与解调分析。",
          "englishDescription": "WLAN 802.11be (Wi-Fi 7) & 802.11bn (Wi-Fi 8) 320 MHz waveform and measurement."
        },
        {
          "id": "Y9080EM0E",
          "code": "Y9080EM0E",
          "name": "LTE/LTE-Advanced FDD 波形与测量软件 (Y-App)",
          "englishName": "LTE/LTE-A FDD waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE FDD 频段波形生成与解调测试。",
          "englishDescription": "LTE/LTE-Advanced FDD arbitrary waveform generation and measurement."
        },
        {
          "id": "Y9080EM4E",
          "code": "Y9080EM4E",
          "name": "LTE V2X 车联网波形与测量软件 (Y-App)",
          "englishName": "LTE V2X waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$5,500",
          "supportsLicense": true,
          "description": "LTE V2X 车联网波形生成与解调测试。",
          "englishDescription": "LTE V2X waveform generation and measurement analysis."
        },
        {
          "id": "Y9081EM0E",
          "code": "Y9081EM0E",
          "name": "Bluetooth 蓝牙 5/BLE 波形与测量软件 (Y-App)",
          "englishName": "Bluetooth waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及蓝牙 5 / BLE 低功耗波形与解调测试。",
          "englishDescription": "Bluetooth BR/EDR and Bluetooth 5 / BLE waveform and measurement."
        },
        {
          "id": "Y9082EM0E",
          "code": "Y9082EM0E",
          "name": "LTE/LTE-Advanced TDD 波形与测量软件 (Y-App)",
          "englishName": "LTE/LTE-A TDD waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工波形发生与解调测试。",
          "englishDescription": "LTE/LTE-Advanced TDD waveform generation and measurement."
        },
        {
          "id": "Y9084EM0E",
          "code": "Y9084EM0E",
          "name": "短距离通信与 IoT (LoRa/ZigBee) 波形与测量软件 (Y-App)",
          "englishName": "Short-range communications waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "LoRa, 802.15.4 ZigBee 及 Z-Wave 波形生成与解调分析。",
          "englishDescription": "Short-range IoT (LoRa, ZigBee, Z-Wave) waveform and measurement."
        },
        {
          "id": "Y9085EM0E",
          "code": "Y9085EM0E",
          "name": "5G NR 非信令波形与测量分析软件 (Y-App)",
          "englishName": "5G NR non-signaling waveform and measurement",
          "category": "Y-App Dual Direction",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR Sub-6 GHz 非信令双向波形发生与解调分析。",
          "englishDescription": "5G NR Sub-6 GHz non-signaling arbitrary waveform generation and measurement."
        },
        {
          "id": "N7607EMBC",
          "code": "N7607EMBC",
          "name": "PathWave DFS 及 DAA 雷达剖面波形生成播放软件",
          "englishName": "Pathwave signal generation for DFS and DAA profiles",
          "category": "Signal Generation",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "Wi-Fi 动态频率选择 (DFS) 雷达脉冲剖面波形生成与播放。",
          "englishDescription": "PathWave signal generation for DFS and DAA radar profiles and waveform playback."
        },
        {
          "id": "ES114000A",
          "code": "ES114000A",
          "name": "非信令射频测试应用软件 (Non-signaling RF Application)",
          "englishName": "Non-signaling RF application",
          "category": "Standalone Software",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "独立非信令射频测试环境与 API 控制套件。",
          "englishDescription": "Standalone non-signaling RF test application suite."
        },
        {
          "id": "SJ001A",
          "code": "SJ001A",
          "name": "WaveJudge 无线协议分析软件工具包 (WaveJudge Toolset)",
          "englishName": "WaveJudge Wireless Analyzer Toolset",
          "category": "Standalone Software",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "WaveJudge 空中接口物理层与协议层日志解包与抓包分析工具包。",
          "englishDescription": "WaveJudge Wireless Analyzer Toolset for over-the-air PHY and protocol analysis."
        },
        {
          "id": "WJ001000A",
          "code": "WJ001000A",
          "name": "WaveJudge 无线协议分析主程序 (WaveJudge Main App)",
          "englishName": "WaveJudge Wireless Analyzer Application",
          "category": "WaveJudge Software",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "WaveJudge 无线协议分析核心平台。",
          "englishDescription": "Core WaveJudge Wireless Analyzer application."
        },
        {
          "id": "WJ038100A",
          "code": "WJ038100A",
          "name": "WaveJudge WLAN 802.11a/b/g/n/ac 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11 a/b/g/n/ac",
          "category": "WaveJudge Software",
          "priceEstimate": "+$4,200",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析 802.11a/b/g/n/ac 帧结构。",
          "englishDescription": "Protocol parsing for WLAN 802.11 a/b/g/n/ac frames."
        },
        {
          "id": "WJ038101A",
          "code": "WJ038101A",
          "name": "WaveJudge WLAN 802.11ax (Wi-Fi 6) 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11ax",
          "category": "WaveJudge Software",
          "priceEstimate": "+$4,800",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析 Wi-Fi 6 802.11ax OFDMA 调度帧。",
          "englishDescription": "Protocol parsing for WLAN 802.11ax Wi-Fi 6 OFDMA frames."
        },
        {
          "id": "WJ038102A",
          "code": "WJ038102A",
          "name": "WaveJudge WLAN 802.11be (Wi-Fi 7) 协议解析选件",
          "englishName": "WaveJudge WLAN 802.11be",
          "category": "WaveJudge Software",
          "priceEstimate": "+$5,800",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "解包分析 Wi-Fi 7 802.11be MLO 多链路帧。",
          "englishDescription": "Protocol parsing for WLAN 802.11be Wi-Fi 7 MLO frames."
        },
        {
          "id": "WJ0380M0A",
          "code": "WJ0380M0A",
          "name": "WaveJudge WLAN 4096QAM 超高阶调制选件",
          "englishName": "WaveJudge WLAN 4096QAM",
          "category": "WaveJudge Software",
          "priceEstimate": "+$3,200",
          "requires": [
            "WJ001000A"
          ],
          "supportsLicense": true,
          "description": "支持 Wi-Fi 7 / 8 4096QAM 极高阶调制解调。",
          "englishDescription": "Adds 4096QAM modulation analysis in WaveJudge."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择附件与 KeysightCare 服务保障 (Add Accessories & Services)",
      "englishTitle": "Add Accessories & Services",
      "subtitle": "USB 键鼠套件、19 英寸机架安装导轨、KeysightCare 及保修服务",
      "englishSubtitle": "USB keyboard/mouse, rackmount rail kit, KeysightCare support and warranty options.",
      "type": "multiple",
      "options": [
        {
          "id": "Y1206A",
          "code": "Y1206A",
          "name": "USB 键盘与光电鼠标套件 (USB Keyboard & Optical Mouse)",
          "englishName": "USB keyboard and optical mouse",
          "category": "Accessories",
          "priceEstimate": "+$120",
          "description": "键盘鼠标组合，便于在 Windows 系统中便捷操作。",
          "englishDescription": "USB keyboard and optical mouse kit."
        },
        {
          "id": "Y1217A",
          "code": "Y1217A",
          "name": "机架安装法兰与导轨套件 (Rack Mount and Rail Kit)",
          "englishName": "Rack mount and rack rail kit",
          "category": "Rackmount",
          "priceEstimate": "+$650",
          "description": "用于将 E6680E PXIe 机架安装至 19 英寸标准测试机柜。",
          "englishDescription": "Rack mount flanges and sliding rail kit for 19-inch rack enclosures."
        },
        {
          "id": "R-55A-001-1",
          "code": "R-55A-001-1",
          "name": "KeysightCare 首年服务保障 (KeysightCare Assured First Year Support)",
          "englishName": "KeysightCare Assured First Year Support",
          "category": "Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "默认包含 KeysightCare 首年优先技术支持与保障服务。",
          "englishDescription": "KeysightCare Assured First Year Support included by default."
        },
        {
          "id": "R-51B-001-C",
          "code": "R-51B-001-C",
          "name": "1 年期返厂硬件保修 (1-Year Return-to-Keysight Warranty)",
          "englishName": "1-year return-to-Keysight warranty",
          "category": "Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "默认包含 1 年原厂返厂硬件保修服务。",
          "englishDescription": "Standard 1-year return-to-Keysight warranty."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择后购硬件及 Pure License 升级选件 (Configure Upgrades E6680EU)",
      "englishTitle": "Configure Upgrades (E6680EU)",
      "subtitle": "硬件级 TRX 扩展 (网点安装) 与无需改动硬件的软件 License 升级选件",
      "englishSubtitle": "Hardware TRX additions (Keysight service center) and software-only license upgrades (E6680EU).",
      "type": "multiple",
      "options": [
        {
          "id": "E6680EU-TRX",
          "code": "E6680EU-TRX",
          "name": "硬件升级: 在现有机架中增加 1 个 TRX 收发器 (Add TRX to Existing Chassis)",
          "englishName": "Add one TRX to existing chassis",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$13,500",
          "description": "需返原厂服务中心安装硬件 TRX 模块；需配 1 个带宽及 1 个频率选件。",
          "englishDescription": "Add one TRX to existing chassis (hardware upgrade in Keysight service center)."
        },
        {
          "id": "E6680EU-B2X",
          "code": "E6680EU-B2X",
          "name": "后购 TRX 200 MHz 带宽 (Bandwidth 200 MHz for New TRX)",
          "englishName": "Bandwidth, 200 MHz",
          "category": "Hardware Upgrade",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "为新增 TRX 配合的 200 MHz 默认解调带宽。",
          "englishDescription": "Default 200 MHz bandwidth for newly added TRX."
        },
        {
          "id": "E6680EU-B4X",
          "code": "E6680EU-B4X",
          "name": "后购 TRX 400 MHz 带宽 (Bandwidth 400 MHz for New TRX)",
          "englishName": "Bandwidth, 400 MHz",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$6,200",
          "description": "为新增 TRX 配置的 400 MHz 解调带宽。",
          "englishDescription": "Optional 400 MHz bandwidth for newly added TRX."
        },
        {
          "id": "E6680EU-B8X",
          "code": "E6680EU-B8X",
          "name": "后购 TRX 800 MHz 带宽 (Bandwidth 800 MHz for New TRX)",
          "englishName": "Bandwidth, 800 MHz",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$12,200",
          "description": "为新增 TRX 配置的 800 MHz 超宽解调带宽。",
          "englishDescription": "Optional 800 MHz bandwidth for newly added TRX."
        },
        {
          "id": "E6680EU-F06",
          "code": "E6680EU-F06",
          "name": "后购 TRX 频率范围 380 MHz 至 6 GHz (Frequency Range to 6 GHz)",
          "englishName": "Frequency range, 380 MHz to 6 GHz",
          "category": "Hardware Upgrade",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "为新增 TRX 配合的 380 MHz 至 6 GHz 默认频率范围。",
          "englishDescription": "Default 380 MHz to 6 GHz frequency range for newly added TRX."
        },
        {
          "id": "E6680EU-F07",
          "code": "E6680EU-F07",
          "name": "后购 TRX 频率范围 380 MHz 至 7.3 GHz (Frequency Range to 7.3 GHz)",
          "englishName": "Frequency range, 380 MHz to 7.3 GHz",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$4,500",
          "description": "为新增 TRX 配置的 380 MHz 至 7.3 GHz 扩展频率范围。",
          "englishDescription": "Optional 380 MHz to 7.3 GHz frequency range for newly added TRX."
        },
        {
          "id": "E6680EU-CM8",
          "code": "E6680EU-CM8",
          "name": "硬件升级: M9038A 控制器及 8TB PXIe 存储模块 (M9038A Controller & 8TB Storage)",
          "englishName": "M9038A controller and two PXIe storage modules (total 8TB)",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$10,200",
          "description": "原厂服务中心硬件升级；需包含 Option STM，与 CMH 互斥。",
          "englishDescription": "Hardware upgrade in Keysight service center. Requires STM; not compatible with CMH."
        },
        {
          "id": "E6680EU-CMH",
          "code": "E6680EU-CMH",
          "name": "硬件升级: M9038A 控制器及 16TB PXIe 存储模块 (M9038A Controller & 16TB Storage)",
          "englishName": "M9038A controller and two PXIe storage modules (total 16TB)",
          "category": "Hardware Upgrade",
          "priceEstimate": "+$15,500",
          "description": "原厂服务中心硬件升级；需包含 Option STM，与 CM8 互斥。",
          "englishDescription": "Hardware upgrade in Keysight service center. Requires STM; not compatible with CM8."
        },
        {
          "id": "E6680EU-BTS",
          "code": "E6680EU-BTS",
          "name": "License升级: 增加整机下行测量分析功能 (Add Downlink Analysis License)",
          "englishName": "Add downlink measurement capability",
          "category": "Software License Upgrade",
          "priceEstimate": "+$4,200",
          "description": "纯软件 License 升级：为整机所有 TRX 激活下行信号接收解调测量。",
          "englishDescription": "Software-only license upgrade: Adds downlink measurement capability."
        },
        {
          "id": "E6680EU-BU1",
          "code": "E6680EU-BU1",
          "name": "License升级: 带宽由 200 MHz 升级至 400 MHz (Upgrade Bandwidth 200 to 400 MHz)",
          "englishName": "Upgrade bandwidth from 200 to 400 MHz",
          "category": "Software License Upgrade",
          "priceEstimate": "+$6,500",
          "description": "纯软件 License 升级：为单个 TRX 将解调带宽升级至 400 MHz。",
          "englishDescription": "Software-only license upgrade: Upgrades bandwidth from 200 to 400 MHz per TRX."
        },
        {
          "id": "E6680EU-BU2",
          "code": "E6680EU-BU2",
          "name": "License升级: 带宽由 200 MHz 升级至 800 MHz (Upgrade Bandwidth 200 to 800 MHz)",
          "englishName": "Upgrade bandwidth from 200 to 800 MHz",
          "category": "Software License Upgrade",
          "priceEstimate": "+$12,500",
          "description": "纯软件 License 升级：为单个 TRX 将解调带宽由 200 MHz 直接升级至 800 MHz。",
          "englishDescription": "Software-only license upgrade: Upgrades bandwidth from 200 to 800 MHz per TRX."
        },
        {
          "id": "E6680EU-BU3",
          "code": "E6680EU-BU3",
          "name": "License升级: 带宽由 400 MHz 升级至 800 MHz (Upgrade Bandwidth 400 to 800 MHz)",
          "englishName": "Upgrade bandwidth from 400 to 800 MHz",
          "category": "Software License Upgrade",
          "priceEstimate": "+$7,200",
          "description": "纯软件 License 升级：为单个 TRX 将解调带宽由 400 MHz 扩展升级至 800 MHz。",
          "englishDescription": "Software-only license upgrade: Upgrades bandwidth from 400 to 800 MHz per TRX."
        },
        {
          "id": "E6680EU-FU1",
          "code": "E6680EU-FU1",
          "name": "License升级: 频率上限升级至 7.3 GHz (Upgrade Frequency Range to 7.3 GHz)",
          "englishName": "Upgrade frequency range to 380 MHz to 7.3 GHz",
          "category": "Software License Upgrade",
          "priceEstimate": "+$4,800",
          "description": "纯软件 License 升级：将单个 TRX 频率上限由 6 GHz 扩展至 7.3 GHz。",
          "englishDescription": "Software-only license upgrade: Upgrades frequency range to 7.3 GHz per TRX."
        },
        {
          "id": "E6680EU-M44",
          "code": "E6680EU-M44",
          "name": "License升级: 增加单机 4x4 MIMO 测量功能 (Add up to 4x4 MIMO)",
          "englishName": "Add up to 4x4 MIMO in 1 chassis",
          "category": "Software License Upgrade",
          "priceEstimate": "+$9,200",
          "description": "纯软件 License 升级：为单台机架激活最高 4x4 MIMO 测试能力。",
          "englishDescription": "Software-only license upgrade: Adds up to 4x4 MIMO in 1 chassis."
        },
        {
          "id": "E6680EU-MTS",
          "code": "E6680EU-MTS",
          "name": "License升级: 增加双机 8x8 MIMO 多天线同步能力 (Add 8x8 MIMO Sync)",
          "englishName": "Add synchronization for up to 8x8 MIMO with two chassis",
          "category": "Software License Upgrade",
          "priceEstimate": "+$7,500",
          "description": "纯软件 License 升级：为两台机架互联激活最高 8x8 MIMO 同步。",
          "englishDescription": "Software-only license upgrade: Adds synchronization for 8x8 MIMO with two chassis."
        },
        {
          "id": "E6680EU-STM",
          "code": "E6680EU-STM",
          "name": "License升级: 激活 IQ 数据流背板高速输入/输出 (IQ Streaming In/Out)",
          "englishName": "IQ streaming In/Out via backplane",
          "category": "Software License Upgrade",
          "priceEstimate": "+$4,500",
          "description": "纯软件 License 升级：激活背板 IQ 数据流功能；需 M9038A 控制器及存储模块。",
          "englishDescription": "Software-only license upgrade: IQ streaming In/Out via backplane."
        }
      ]
    }
  ]
};
