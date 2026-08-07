// Keysight M9415A Configurator Dataset (Official Sections A-F)
export const M9415A_DATA = {
  "id": "M9415A",
  "name": "M9415A VXT PXIe Vector Transceiver",
  "subtitle": "300 kHz to 6 GHz RF Transceiver & 1.2 GHz Analysis Bandwidth",
  "family": "PXI Modular Vector Transceivers",
  "docNumber": "5992-3126 / M9415A",
  "description": "The Keysight M9415A VXT PXIe vector transceiver is a compact multi-functional PXI solution for RF and wireless signal generation and analysis up to 6 GHz with up to 1.2 GHz bandwidth.",
  "baseSpecs": {
    "display": "PXI Modular Architecture (Requires PXIe Chassis & Controller)",
    "frequency": "300 kHz to 6 GHz (Standard Option F06)",
    "bandwidth": "400 MHz Modulation & Analysis Bandwidth (Standard Option B4X)",
    "memory": "256 MSa Waveform Playback Memory (Standard Option M02)",
    "os": "Windows 11 / Windows 10 LTSC (64-bit)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "A.1 & A.2 选择核心模块与频率范围 (Choose Transceiver Module & Frequency Range)",
      "englishTitle": "Section A: Transceiver Module & Frequency Range",
      "subtitle": "决定模块核心功能与最高工作频率上限",
      "englishSubtitle": "Determines core transceiver capabilities and maximum RF frequency range.",
      "type": "single",
      "options": [
        {
          "id": "M9415A-001",
          "code": "M9415A-001",
          "name": "VXT PXIe 矢量收发信机核心模块 (Analog BBIQ)",
          "englishName": "VXT PXIe Vector Transceiver with Analog BBIQ",
          "category": "Transceiver Module",
          "priceEstimate": "$42,500",
          "description": "提供矢量信号发生与矢量信号分析双向 RF 及模拟 BBIQ 输入输出接口。"
        },
        {
          "id": "M9415A-F06",
          "code": "M9415A-F06",
          "name": "频率范围 300 kHz 至 6 GHz (出厂标配)",
          "englishName": "Frequency range, 300 kHz to 6 GHz",
          "category": "Frequency",
          "isStandard": true,
          "priceEstimate": "Standard",
          "freqMaxGHz": 6.0,
          "description": "覆盖 6 GHz 以下通用 RF 射频、蜂窝通信与无线局域网测试。"
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "A.3 选择矢量调制与解调分析带宽 (Choose Modulation & Analysis Bandwidth)",
      "englishTitle": "Section A.3: Choose Modulation & Analysis Bandwidth",
      "subtitle": "决定宽带调制信号生成与实时解调带宽上限",
      "englishSubtitle": "Determines wideband signal generation and real-time demodulation bandwidth.",
      "type": "single",
      "options": [
        {
          "id": "M9415A-B4X",
          "code": "M9415A-B4X",
          "name": "400 MHz 矢量调制与分析带宽 (出厂标配)",
          "englishName": "400 MHz modulation & analysis bandwidth",
          "category": "Bandwidth",
          "isStandard": true,
          "bandwidthMHz": 400,
          "priceEstimate": "Standard",
          "description": "出厂标配 400 MHz 宽带 RF 与 BBIQ 信号调制与解调带宽。"
        },
        {
          "id": "M9415A-B8X",
          "code": "M9415A-B8X",
          "name": "800 MHz 矢量调制与分析带宽 (800 MHz Bandwidth)",
          "englishName": "800 MHz modulation & analysis bandwidth",
          "category": "Bandwidth",
          "bandwidthMHz": 800,
          "priceEstimate": "+$12,800",
          "description": "扩展矢量信号发生与分析带宽至 800 MHz，支持多载波测试。"
        },
        {
          "id": "M9415A-B12",
          "code": "M9415A-B12",
          "name": "1.2 GHz 矢量调制与分析带宽 (1.2 GHz Bandwidth)",
          "englishName": "1.2 GHz modulation & analysis bandwidth",
          "category": "Bandwidth",
          "bandwidthMHz": 1200,
          "priceEstimate": "+$18,500",
          "description": "全频段超宽带 1.2 GHz 矢量收发带宽，轻松满足 5G NR 与 Wi-Fi 7/8 超大带宽。"
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "A.4 选择波形回放深内存 (Choose Playback Memory Size)",
      "englishTitle": "Section A.4: Choose Memory Size",
      "subtitle": "决定长波形序列存储与复杂调制回放能力",
      "englishSubtitle": "Determines arbitrary waveform sequence playback memory depth.",
      "type": "single",
      "options": [
        {
          "id": "M9415A-M02",
          "code": "M9415A-M02",
          "name": "256 MSa 存储深度 (出厂标配)",
          "englishName": "Memory, 256 MSa",
          "category": "Memory",
          "isStandard": true,
          "priceEstimate": "Standard",
          "description": "出厂标配 256 MSa ARB 任意波形回放内存。"
        },
        {
          "id": "M9415A-M05",
          "code": "M9415A-M05",
          "name": "512 MSa 高容量存储深度 (512 MSa Memory)",
          "englishName": "Memory, 512 MSa",
          "category": "Memory",
          "priceEstimate": "+$4,500",
          "description": "扩展波形存储器至 512 MSa，用于超长数据帧与复杂多载波回放。"
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "A.5 选择额外硬件特性与输出功能 (Choose Additional Capabilities)",
      "englishTitle": "Section A.5: Choose Additional Capabilities",
      "subtitle": "高输出功率、5G 实时相位补偿与解调扩展",
      "englishSubtitle": "High output power, 5G NR phase compensation and external modulation ports.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415A-1EA",
          "code": "M9415A-1EA",
          "name": "高输出功率选件 (High Output Power)",
          "englishName": "High output power",
          "category": "Capability",
          "priceEstimate": "+$3,800",
          "description": "提升信号源最大射频输出功率，满足功放 (PA) 非线性测试要求。"
        },
        {
          "id": "M9415A-RPC",
          "code": "M9415A-RPC",
          "name": "5G NR 实时相位补偿选件 (5G NR Real-Time Phase Comp)",
          "englishName": "5G NR real-time phase compensation",
          "category": "Capability",
          "priceEstimate": "+$4,200",
          "description": "提供 5G NR 上下行相位噪声实时补偿计算。"
        },
        {
          "id": "M9415A-MDM",
          "code": "M9415A-MDM",
          "name": "外部调制输入与解调输出接口选件",
          "englishName": "External modulation input and demodulation output",
          "category": "Capability",
          "priceEstimate": "+$2,900",
          "description": "提供后面板模拟 IQ 外部输入与解调模拟输出硬件接口。"
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "B. 选配 M9300A PXIe 独立频率基准 (Add M9300A Frequency Reference)",
      "englishTitle": "Section B: Add M9300A PXIe Frequency Reference",
      "subtitle": "多模块同步必选高稳定度独立频率基准 (占用 1 槽位)",
      "englishSubtitle": "High-stability timebase module for multi-module synchronization (Occupies 1 Slot).",
      "type": "multiple",
      "options": [
        {
          "id": "M9300A",
          "code": "M9300A",
          "name": "M9300A PXIe 精密频率基准模块",
          "englishName": "M9300A PXIe frequency reference",
          "category": "Frequency Reference",
          "priceEstimate": "+$5,200",
          "description": "提供 5 路 100 MHz 输出及 1 路 10 MHz OCXO 高稳定度基准时钟输出。"
        },
        {
          "id": "M9300A-S01",
          "code": "M9300A-S01",
          "name": "M9300A 无出口许可证限制版基准选件",
          "englishName": "M9300A Frequency Reference No Export License",
          "category": "Frequency Reference",
          "priceEstimate": "Standard",
          "requires": ["M9300A"],
          "description": "出厂符合全球无出口许可证限制标准的时钟配置。"
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "C. 选择 PXIe 控制器与操作系统 (Select Controller & OS)",
      "englishTitle": "Section C: Select Controller & OS",
      "subtitle": "嵌入式高性能 PXIe 主控板或外接 PC PCIe 接口卡",
      "englishSubtitle": "Embedded PXIe controller modules or external PC PCIe host adapters.",
      "type": "single",
      "options": [
        {
          "id": "M9035A-M16",
          "code": "M9035A-M16",
          "name": "M9035A i3-8100H 四核 PXIe 控制器 (16 GB RAM)",
          "englishName": "M9035A Intel i3-8100H quad-core controller, 16 GB RAM",
          "category": "Controller",
          "priceEstimate": "+$6,800",
          "description": "基础级四核嵌入式控制器，内置 16 GB 内存与 Windows 系统。"
        },
        {
          "id": "M9038A-M32",
          "code": "M9038A-M32",
          "name": "M9038A i7-9850HE 六核高性能控制器 (32 GB RAM, 雷电3)",
          "englishName": "M9038A Intel i7-9850HE 6-core controller, 32 GB RAM",
          "category": "Controller",
          "priceEstimate": "+$11,500",
          "description": "旗舰级六核嵌入式控制器，双雷电 3 接口与可拆卸 NVMe SSD。"
        },
        {
          "id": "M9048B",
          "code": "M9048B",
          "name": "M9048B PCIe 单口主机适配卡 (x8 Gen3, 外接 PC 方案)",
          "englishName": "M9048B PCIe host adapter: Single port (x8), Gen 3",
          "category": "External Controller",
          "priceEstimate": "+$2,400",
          "description": "通过 PCIe 光纤缆线连接台式工作站控制 PXIe 机箱。"
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "D.1 & D.2 选择 PXIe 机箱与假面板 (Select Chassis & Filler Panels)",
      "englishTitle": "Section D.1 & D.2: Select Chassis & Filler Panels",
      "subtitle": "10 槽/18 槽高功耗 Gen3 机箱及槽位风道阻挡件",
      "englishSubtitle": "10-slot / 18-slot Gen3 PXIe chassis and slot blocker EMC panels.",
      "type": "single",
      "options": [
        {
          "id": "M9010A",
          "code": "M9010A",
          "name": "M9010A 10 槽 PXIe 高性能机箱 (Gen3)",
          "englishName": "M9010A 10-slot PXIe chassis, Gen 3",
          "category": "Chassis",
          "priceEstimate": "+$8,900",
          "description": "10 槽 Gen3 PXIe 背板机箱，提供高达 24 GB/s 系统带宽。"
        },
        {
          "id": "M9019A",
          "code": "M9019A",
          "name": "M9019A 18 槽 PXIe 大容量机箱 (Gen3)",
          "englishName": "M9019A 18-slot PXIe chassis, Gen 3",
          "category": "Chassis",
          "priceEstimate": "+$12,800",
          "description": "18 槽 Gen3 超大容量背板机箱，支持多模块扩展。"
        },
        {
          "id": "M9046A",
          "code": "M9046A",
          "name": "M9046A 18 槽高功率 PXIe 机箱 (High Power)",
          "englishName": "M9046A High power, 18-slot PXIe chassis, Gen 3",
          "category": "Chassis",
          "priceEstimate": "+$16,500",
          "description": "提供额外高功率散热与供电支持的 18 槽 PXIe 机箱。"
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "D.3 ~ D.5 选配机柜套件与专用校准电缆配件 (Accessories & Cables)",
      "englishTitle": "Section D.3 - D.5: Accessories & Calibration Cables",
      "subtitle": "模拟 BBIQ 校准套件 Y1823A、射频转接线与机架件",
      "englishSubtitle": "BBIQ Calibration kit Y1823A, coaxial cables and rack mount kits.",
      "type": "multiple",
      "options": [
        {
          "id": "Y1823A",
          "code": "Y1823A",
          "name": "Analog Baseband I/Q 校准套件 (模拟 BBIQ 必选)",
          "englishName": "Calibration kit for Baseband I/Q analyzer with cables",
          "category": "Calibration Kit",
          "priceEstimate": "+$3,600",
          "description": "包含 8 根 SMB-SMB 射频电缆与 USB 缆线，模拟 BBIQ 校准必选工具。"
        },
        {
          "id": "Y1824A",
          "code": "Y1824A",
          "name": "Coaxial Cable 50-Ohm SMB-F to SMP-F (300 mm)",
          "englishName": "Cable assembly SMB-female to SMP-female 300 mm",
          "category": "Cable",
          "priceEstimate": "+$450",
          "description": "精密的 50 欧姆 SMB 至 SMP 射频同轴连接线。"
        },
        {
          "id": "Y1271A",
          "code": "Y1271A",
          "name": "M9010A 机箱 19 英寸标准机架安装套件",
          "englishName": "Rack mount kit for M9010A chassis",
          "category": "Rack Mount",
          "priceEstimate": "+$850",
          "description": "包含固定滑轨与机架耳件。"
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "E.1 & E.2 选择测量应用软件与 Signal Studio (Measurement Apps & Signal Studio)",
      "englishTitle": "Section E: Measurement Apps & Signal Studio",
      "subtitle": "5G NR、WLAN 802.11be、LTE 与蓝牙单键测量软件",
      "englishSubtitle": "5G NR, WLAN 802.11be, LTE and Bluetooth measurement software.",
      "type": "multiple",
      "options": [
        {
          "id": "N9085EM0E",
          "code": "N9085EM0E",
          "name": "5G NR 测量应用软件 (5G NR Measurement App)",
          "englishName": "5G NR measurement application",
          "category": "Software App",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "支持 5G NR 信号一键 EVM 分析与频谱发射蒙板测试。"
        },
        {
          "id": "N9077EM2E",
          "code": "N9077EM2E",
          "name": "WLAN 802.11be / 802.11bn 极高吞吐量测量软件",
          "englishName": "WLAN 802.11be and 802.11bn measurement application",
          "category": "Software App",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "支持 Wi-Fi 7/8 (4096-QAM) 调制解调测试。"
        },
        {
          "id": "N7631EMBC",
          "code": "N7631EMBC",
          "name": "Signal Studio for 5G NR 波形回放生成软件",
          "englishName": "Signal Studio for 5G NR waveform playback",
          "category": "Signal Studio",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "快速合成符合 3GPP 标准的 5G NR 下行与上行测试波形。"
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "E.3 & E.4 选择软件捆绑包与 MATLAB 分析选件 (Software Bundles & MATLAB)",
      "englishTitle": "Section E.3 & E.4: Software Bundles & MATLAB",
      "subtitle": "Signal Studio 综合优惠捆绑包与 MATLAB 自定义波形创建",
      "englishSubtitle": "Combined measurement bundles and MATLAB custom waveform software.",
      "type": "multiple",
      "options": [
        {
          "id": "N7650B",
          "code": "N7650B",
          "name": "Signal Studio & X-Series 综合测量应用软件捆绑包",
          "englishName": "Signal Studio & Measurement Apps Bundle",
          "category": "Software Bundle",
          "priceEstimate": "+$18,500",
          "supportsLicense": true,
          "description": "包含 WLAN、LTE、5G NR 组合波形回放与分析授权。"
        },
        {
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 软件选件 (Custom Waveform & Data Analysis)",
          "englishName": "MATLAB software option for Keysight instruments",
          "category": "Software",
          "priceEstimate": "+$3,200",
          "description": "直接在 VXT 平台上运行 MATLAB 生成自定义任意波形与高级分析。"
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "F. 选择原厂校准与 KeysightCare 服务保障 (Calibration & KeysightCare Tiers)",
      "englishTitle": "Section F: Calibration & KeysightCare Support",
      "subtitle": "原厂商业校准证书与 KeysightCare 3 年 / 5 年服务计划",
      "englishSubtitle": "Commercial calibration certificate and multi-year KeysightCare support tiers.",
      "type": "multiple",
      "options": [
        {
          "id": "M9415A-UK6",
          "code": "M9415A-UK6",
          "name": "ISO 17025 原厂符合性商业校准证书 (带测试数据)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$1,450",
          "description": "附带完整测试数据与测量不确定度分析的原厂校准证书。"
        },
        {
          "id": "R-55B-001-3",
          "code": "R-55B-001-3",
          "name": "KeysightCare Enhanced 3 年期服务扩展 (推荐)",
          "englishName": "KeysightCare Enhanced - Extend to 3 years",
          "category": "Service",
          "priceEstimate": "+$4,800",
          "description": "包含 3 年专属技术支持、保修加急响应与原厂定期校准。"
        },
        {
          "id": "R-55B-001-5",
          "code": "R-55B-001-5",
          "name": "KeysightCare Enhanced 5 年期服务扩展 (推荐)",
          "englishName": "KeysightCare Enhanced - Extend to 5 years",
          "category": "Service",
          "priceEstimate": "+$8,200",
          "description": "提供全生命周期 5 年最高级别原厂保修、技术响应与免费校准。"
        }
      ]
    }
  ]
};
