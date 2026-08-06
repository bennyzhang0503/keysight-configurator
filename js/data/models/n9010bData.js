// Keysight N9010B Configurator Dataset
export const N9010B_DATA = {
  "id": "N9010B",
  "name": "N9010B EXA Signal Analyzer",
  "subtitle": "10 Hz to 44 GHz Economy/Mid-Performance X-Series Signal Analyzer",
  "family": "Signal Analyzers (X-Series)",
  "docNumber": "5992-1253 / N9010B",
  "description": "The Keysight N9010B EXA is an essential X-Series signal analyzer providing up to 44 GHz frequency coverage, up to 40 MHz analysis bandwidth, and versatile measurement applications.",
  "baseSpecs": {
    "display": "10.6-inch capacitive multi-touch display (1280 x 800)",
    "processor": "Quad-core high-performance processor, 16 GB RAM",
    "storage": "Removable M.2 NVMe Solid-State Drive (SSD)",
    "os": "Microsoft Windows 11 Operating System",
    "standardBandwidth": "10 MHz Analysis Bandwidth (Option B10)",
    "standardAttenuator": "Mechanical Attenuator (0 to 70 dB in 10 dB steps)",
    "standardApps": "Spectrum Analyzer and IQ Analyzer Application (Standard)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最大频率范围 (Select Maximum Frequency Range)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选项目，决定仪表的最大上限频率 (10 Hz 至 44 GHz)",
      "englishSubtitle": "Required Option - Determines the maximum frequency limit (10 Hz to 44 GHz)",
      "type": "single",
      "options": [
        {
          "id": "N9010B-503",
          "code": "N9010B-503",
          "name": "频率范围 10 Hz 至 3.6 GHz",
          "englishName": "Frequency range, 10 Hz to 3.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$14,500",
          "freqMaxGHz": 3.6,
          "description": "覆盖 3.6 GHz 以下常用无线通信频段。"
        },
        {
          "id": "N9010B-507",
          "code": "N9010B-507",
          "name": "频率范围 10 Hz 至 7 GHz",
          "englishName": "Frequency range, 10 Hz to 7 GHz",
          "category": "Frequency",
          "priceEstimate": "$19,800",
          "freqMaxGHz": 7.0,
          "description": "覆盖 7 GHz 以下 5G NR Sub-6GHz 与 Wi-Fi 6E/7 频段。"
        },
        {
          "id": "N9010B-513",
          "code": "N9010B-513",
          "name": "频率范围 10 Hz 至 13.6 GHz",
          "englishName": "Frequency range, 10 Hz to 13.6 GHz",
          "category": "Frequency",
          "priceEstimate": "$26,500",
          "freqMaxGHz": 13.6,
          "description": "覆盖 13.6 GHz 以下微波中继与 Ku 频段雷达。"
        },
        {
          "id": "N9010B-526",
          "code": "N9010B-526",
          "name": "频率范围 10 Hz 至 26.5 GHz",
          "englishName": "Frequency range, 10 Hz to 26.5 GHz",
          "category": "Frequency",
          "priceEstimate": "$35,000",
          "freqMaxGHz": 26.5,
          "description": "覆盖 26.5 GHz 以下微波通信与 K 波段。"
        },
        {
          "id": "N9010B-532",
          "code": "N9010B-532",
          "name": "频率范围 10 Hz 至 32 GHz",
          "englishName": "Frequency range, 10 Hz to 32 GHz",
          "category": "Frequency",
          "priceEstimate": "$42,000",
          "freqMaxGHz": 32.0,
          "description": "覆盖 32 GHz 以下 Ka 波段卫星通信。"
        },
        {
          "id": "N9010B-544",
          "code": "N9010B-544",
          "name": "频率范围 10 Hz 至 44 GHz",
          "englishName": "Frequency range, 10 Hz to 44 GHz",
          "category": "Frequency",
          "priceEstimate": "$52,000",
          "freqMaxGHz": 44.0,
          "description": "EXA 全频段最高覆盖至 44 GHz，支持 5G 毫米波 FR2。"
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择前置放大器 (Choose Preamplifier)",
      "englishTitle": "Choose Preamplifier",
      "subtitle": "大幅提升小信号测量灵敏度与底噪表现 (Preamplifier Options)",
      "englishSubtitle": "Increases sensitivity for low-level signal detection across frequency bands",
      "type": "single",
      "options": [
        {
          "id": "N9010B-P03",
          "code": "N9010B-P03",
          "name": "前置放大器 100 kHz 至 3.6 GHz (Preamplifier 3.6 GHz)",
          "englishName": "Preamplifier, 100 kHz to 3.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$3,200",
          "compatibleFreqs": [
            "503",
            "507",
            "513",
            "526",
            "532",
            "544"
          ],
          "description": "提升 3.6 GHz 以下信号测量灵敏度。"
        },
        {
          "id": "N9010B-P07",
          "code": "N9010B-P07",
          "name": "前置放大器 100 kHz 至 7 GHz (Preamplifier 7 GHz)",
          "englishName": "Preamplifier, 100 kHz to 7 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$4,800",
          "compatibleFreqs": [
            "507",
            "513",
            "526",
            "532",
            "544"
          ],
          "description": "提升 7 GHz 以下 Sub-6GHz 信号灵敏度。"
        },
        {
          "id": "N9010B-P13",
          "code": "N9010B-P13",
          "name": "前置放大器 100 kHz 至 13.6 GHz (Preamplifier 13.6 GHz)",
          "englishName": "Preamplifier, 100 kHz to 13.6 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$6,500",
          "compatibleFreqs": [
            "513",
            "526",
            "532",
            "544"
          ],
          "description": "提升 13.6 GHz 以下微波信号灵敏度。"
        },
        {
          "id": "N9010B-P26",
          "code": "N9010B-P26",
          "name": "前置放大器 100 kHz 至 26.5 GHz (Preamplifier 26.5 GHz)",
          "englishName": "Preamplifier, 100 kHz to 26.5 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$8,500",
          "compatibleFreqs": [
            "526",
            "532",
            "544"
          ],
          "description": "提升 26.5 GHz 以下信号灵敏度。"
        },
        {
          "id": "N9010B-P32",
          "code": "N9010B-P32",
          "name": "前置放大器 100 kHz 至 32 GHz (Preamplifier 32 GHz)",
          "englishName": "Preamplifier, 100 kHz to 32 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$10,500",
          "compatibleFreqs": [
            "532",
            "544"
          ],
          "description": "提升 32 GHz 以下 Ka 波段灵敏度。"
        },
        {
          "id": "N9010B-P44",
          "code": "N9010B-P44",
          "name": "前置放大器 100 kHz 至 44 GHz (Preamplifier 44 GHz)",
          "englishName": "Preamplifier, 100 kHz to 44 GHz",
          "category": "Preamplifier",
          "priceEstimate": "+$12,800",
          "compatibleFreqs": [
            "544"
          ],
          "description": "提升 44 GHz 毫米波全频段灵敏度。"
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择频率基准 (Choose Frequency Reference)",
      "englishTitle": "Choose Frequency Reference",
      "subtitle": "决定频率准确度与老化率规范 (Frequency Accuracy & Aging)",
      "englishSubtitle": "Determines frequency accuracy, stability, and annual aging rate",
      "type": "single",
      "options": [
        {
          "id": "N9010B-PFR",
          "code": "N9010B-PFR",
          "name": "精密频率基准 (Precision Frequency Reference)",
          "englishName": "Precision frequency reference",
          "category": "Reference",
          "priceEstimate": "+$2,200",
          "description": "提供高精度 OCXO 恒温晶振，年老化率低至 ±1x10^-7。"
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择衰减器 (Choose an Attenuator)",
      "englishTitle": "Choose Attenuator",
      "subtitle": "控制输入衰减步进与动态范围 (Attenuator Options)",
      "englishSubtitle": "Controls input attenuation steps and dynamic range",
      "type": "single",
      "options": [
        {
          "id": "N9010B-FSA",
          "code": "N9010B-FSA",
          "name": "2 dB 步进机械衰减器 (Fine Step Attenuator 2 dB)",
          "englishName": "Fine step attenuator, 2 dB steps",
          "category": "Attenuator",
          "priceEstimate": "+$1,800",
          "description": "精细 2 dB 步进机械衰减器。"
        },
        {
          "id": "N9010B-EA3",
          "code": "N9010B-EA3",
          "name": "电子衰减器 0 至 24 dB (Electronic Attenuator)",
          "englishName": "Electronic attenuator, 0 to 24 dB",
          "category": "Attenuator",
          "priceEstimate": "+$2,500",
          "description": "快速电子衰减控制，避免机械磨损。"
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择分析带宽 (Choose Analysis Bandwidth)",
      "englishTitle": "Choose Analysis Bandwidth",
      "subtitle": "决定实时解调分析带宽 (Real-Time Demodulation Bandwidth)",
      "englishSubtitle": "Determines real-time demodulation analysis bandwidth",
      "type": "single",
      "options": [
        {
          "id": "N9010B-B25",
          "code": "N9010B-B25",
          "name": "25 MHz 分析带宽 (25 MHz Analysis Bandwidth)",
          "englishName": "25 MHz analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$3,500",
          "bandwidthMHz": 25,
          "description": "扩展分析带宽至 25 MHz。"
        },
        {
          "id": "N9010B-B40",
          "code": "N9010B-B40",
          "name": "40 MHz 分析带宽 (40 MHz Analysis Bandwidth)",
          "englishName": "40 MHz analysis bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$6,800",
          "bandwidthMHz": 40,
          "description": "EXA 旗舰 40 MHz 宽带解调分析。"
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "添加快速扫描扩展 (Add Fast Sweep Capability)",
      "englishTitle": "Add Fast Sweep Capability",
      "subtitle": "加速窄分辨率带宽下的频谱扫描速度 (Fast Sweep Speed)",
      "englishSubtitle": "Accelerates sweep speeds in narrow resolution bandwidths",
      "type": "multiple",
      "options": [
        {
          "id": "N9010B-FS1",
          "code": "N9010B-FS1",
          "name": "快速扫描选件 (Fast Sweep Capability)",
          "englishName": "Fast sweep capability",
          "category": "Performance",
          "priceEstimate": "+$2,200",
          "description": "窄 RBW 下频谱扫描速度提升高达 40 倍。"
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "添加仪表扩展特性 (Add Instrument Features)",
      "englishTitle": "Add Instrument Features",
      "subtitle": "显示增强、EMC 检测器与模拟输出 (Display & EMC Features)",
      "englishSubtitle": "Display enhancements, EMC detectors, and analog outputs",
      "type": "multiple",
      "options": [
        {
          "id": "N9010B-EDP",
          "code": "N9010B-EDP",
          "name": "增强型显示包 (Enhanced Display Package)",
          "englishName": "Enhanced display package",
          "category": "Display",
          "priceEstimate": "+$1,500",
          "description": "提供高级光谱图、分屏与余辉显示。"
        },
        {
          "id": "N9010B-EMC",
          "code": "N9010B-EMC",
          "name": "基础 EMI 预兼容检测选件 (Basic EMC Features)",
          "englishName": "Basic EMC features",
          "category": "EMC",
          "priceEstimate": "+$2,800",
          "description": "提供 CISPR 准峰值与平均值检测器。"
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择蜂窝通信测量应用软件 (Cellular Measurement Applications)",
      "englishTitle": "Cellular Measurement Applications",
      "subtitle": "支持 5G NR、LTE FDD/TDD 及 W-CDMA 解调分析软件",
      "englishSubtitle": "5G NR, LTE FDD/TDD, and W-CDMA measurement applications",
      "type": "multiple",
      "options": [
        {
          "id": "E9060EM0E",
          "code": "E9060EM0E",
          "name": "5G NR 测量应用软件 (Node-locked)",
          "englishName": "5G NR measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$9,800",
          "supportsLicense": true,
          "description": "3GPP 5G NR 信号标准解调与品质分析。"
        },
        {
          "id": "E9080EM0E",
          "code": "E9080EM0E",
          "name": "LTE/LTE-A FDD 测量应用软件",
          "englishName": "LTE FDD measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "LTE FDD 信号标准解调分析。"
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择无线互联测量应用软件 (Wireless Connectivity Applications)",
      "englishTitle": "Wireless Connectivity Applications",
      "subtitle": "WLAN Wi-Fi 6E/7、蓝牙及 Short Range 通信测试",
      "englishSubtitle": "WLAN Wi-Fi 6E/7, Bluetooth, and Short Range communications",
      "type": "multiple",
      "options": [
        {
          "id": "E9077EM1E",
          "code": "E9077EM1E",
          "name": "WLAN 802.11ac/ax 测量应用软件",
          "englishName": "WLAN 802.11ac/ax measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$6,200",
          "supportsLicense": true,
          "description": "Wi-Fi 5 与 Wi-Fi 6 标准解调分析。"
        },
        {
          "id": "E9081EM0E",
          "code": "E9081EM0E",
          "name": "Bluetooth 蓝牙测量应用软件",
          "englishName": "Bluetooth measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "经典蓝牙与 BLE 5 标准测试。"
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择通用频谱与失真分析软件 (General Purpose Measurement Applications)",
      "englishTitle": "General Purpose Applications",
      "subtitle": "相位噪声、噪声系数、VMA 数字调制解调与 MATLAB",
      "englishSubtitle": "Phase noise, noise figure, VMA digital demodulation, and MATLAB",
      "type": "multiple",
      "options": [
        {
          "id": "E9068EM0E",
          "code": "E9068EM0E",
          "name": "相位噪声测量应用软件 (Phase Noise)",
          "englishName": "Phase noise measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "单键对数图相位噪声测量。"
        },
        {
          "id": "E9069EM0E",
          "code": "E9069EM0E",
          "name": "噪声系数测量应用软件 (Noise Figure)",
          "englishName": "Noise figure measurement application",
          "category": "Measurement App",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "单键噪声系数 NF 与增益测量。"
        }
      ]
    },
    {
      "id": "step11",
      "stepNumber": 11,
      "title": "选择 89600 VSA 矢量信号分析软件 (89600 VSA Software)",
      "englishTitle": "89600 VSA Software",
      "subtitle": "Keysight 旗舰 89600 VSA 软件核心与标准调制分析选件",
      "englishSubtitle": "Keysight 89600 VSA software core and modulation options",
      "type": "multiple",
      "options": [
        {
          "id": "89601200C",
          "code": "89601200C",
          "name": "89600 VSA 基础核心软件 (Basic Vector Signal Analysis)",
          "englishName": "89600 VSA Basic Vector Signal Analysis",
          "category": "VSA Software",
          "priceEstimate": "+$11,500",
          "supportsLicense": true,
          "description": "89600 VSA 核心多通道解调引擎。"
        }
      ]
    },
    {
      "id": "step12",
      "stepNumber": 12,
      "title": "选择外置混频器与毫米波扩频 (External Mixers & Frequency Extension)",
      "englishTitle": "External Mixers & Extension",
      "subtitle": "M1970/M1971 智能波导混频器与 11970 传统混频器",
      "englishSubtitle": "M1970/M1971 smart waveguide mixers and 11970 series",
      "type": "multiple",
      "options": [
        {
          "id": "M1970W",
          "code": "M1970W",
          "name": "M1970W 75 至 110 GHz 智能波导混频器",
          "englishName": "M1970W 75 to 110 GHz smart waveguide mixer",
          "category": "Mixer",
          "priceEstimate": "+$14,500",
          "description": "支持 W 波段 110 GHz 扩频测量。"
        }
      ]
    },
    {
      "id": "step13",
      "stepNumber": 13,
      "title": "选择机箱配件与装配套件 (Accessories & Rackmount Kits)",
      "englishTitle": "Accessories & Rackmount Kits",
      "subtitle": "1CM113A、1CN103A、1CP105A、1CR013A 机架安装套件",
      "englishSubtitle": "1CM113A, 1CN103A, 1CP105A, 1CR013A rackmount and slide kits",
      "type": "multiple",
      "options": [
        {
          "id": "1CM113A",
          "code": "1CM113A",
          "name": "机架安装套件 (Rackmount Flange Kit)",
          "englishName": "Rackmount flange kit",
          "category": "Rackmount",
          "priceEstimate": "+$380",
          "description": "标准 19 英寸机架安装法兰套件。"
        }
      ]
    },
    {
      "id": "step14",
      "stepNumber": 14,
      "title": "选择校准服务与保修计划 (Add Calibration & Warranty Plans)",
      "englishTitle": "Add Calibration & Warranty Plans",
      "subtitle": "商业校准证书及原厂保修与服务保障",
      "englishSubtitle": "Commercial calibration certificate and warranty plans",
      "type": "multiple",
      "options": [
        {
          "id": "N9010B-UK6",
          "code": "N9010B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$780",
          "description": "商业校准证书及工厂测试数据。"
        }
      ]
    }
  ]
};
