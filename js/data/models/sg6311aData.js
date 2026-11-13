// Keysight SG6311A PSG XG7-Class Analog Signal Generator Dataset
export const SG6311A_DATA = {
  "id": "SG6311A",
  "name": "SG6311A PSG XG7-Class Analog Signal Generator",
  "subtitle": "9 kHz to 20 GHz Dual-Channel Metrology-Grade Analog Signal Generator",
  "family": "PSG XG7-Class Signal Generators",
  "docNumber": "3126-1759.EN / SG6311A",
  "description": "The Keysight SG6311A PSG reveals true device-under-test performance with metrology-grade signal purity, exceptionally low noise, and high, calibrated output power. Its compact dual-channel design and compatibility with existing test environments expand test capacity and scale advanced test setups.",
  "baseSpecs": {
    "display": "Touch-optimized graphical user interface with modern touch screen",
    "channels": "1 or 2 independent RF channels in a compact 2U chassis",
    "frequencyRange": "9 kHz to 20 GHz per channel",
    "attenuator": "Mechanical step attenuator standard on each channel (Option 1E1)",
    "rfConnector": "3.5 mm RF output connector standard on each channel (Option UNC)",
    "support": "KeysightCare Assured First Year Support standard (R-55A-001-1)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of Channels - Required)",
      "englishTitle": "Select Number of Channels",
      "subtitle": "出厂必选通道 1 (SG6311A-001)，可选配增加通道 2 (SG6311A-002) 实现紧凑双通道输出",
      "englishSubtitle": "Required option. Select 1 or 2 channels. Option 001 is mandatory for all configurations.",
      "type": "single",
      "options": [
        {
          "id": "SG6311A-001",
          "code": "SG6311A-001",
          "name": "通道 1 硬件模块 (Add Channel One - Mandatory)",
          "englishName": "Add channel one",
          "category": "Channels",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含通道 1 硬件模块及完整基准功能。",
          "englishDescription": "Add channel one. Required for all configurations."
        },
        {
          "id": "SG6311A-002",
          "code": "SG6311A-002",
          "name": "增加通道 2 硬件模块 (Add Channel Two - Dual Channel)",
          "englishName": "Add channel two",
          "category": "Channels",
          "priceEstimate": "+$36,000",
          "description": "在 2U 紧凑机箱内增加第二路完全独立的 20 GHz 模拟射频通道，支持双音、MIMO 及多通道高纯度信号测试。",
          "englishDescription": "Add channel two. Duplicates channel capabilities in compact 2U chassis."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择接头配置 (Select Connector Configuration - Optional)",
      "englishTitle": "Select Connector Configuration",
      "subtitle": "默认前面板射频接头 (UNM)，可选配移至后背板 (1EM)",
      "englishSubtitle": "Default front panel RF output (UNM). Optionally select 1EM to move all connectors to rear panel.",
      "type": "single",
      "options": [
        {
          "id": "SG6311A-UNM",
          "code": "SG6311A-UNM",
          "name": "标准配置: 前面板 RF 接口 (Standard Front Panel Connectors)",
          "englishName": "Standard front panel RF connectors",
          "category": "Connectors",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "默认所有通道的 RF 输出接头均位于前面板，方便台式快速连接与线缆插拔。",
          "englishDescription": "Standard configuration. RF output connectors on front panel."
        },
        {
          "id": "SG6311A-1EM",
          "code": "SG6311A-1EM",
          "name": "所有接头移至后面板 (Move all connectors to rear panel)",
          "englishName": "Move all connectors to rear panel",
          "category": "Connectors",
          "priceEstimate": "+$1,500",
          "description": "将机身全部射频及参考端口移至后背板，非常适合机架自动化 ATE 系统整洁走线。",
          "englishDescription": "Move all connectors to rear panel."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择系统功能 (Select System Features - Optional)",
      "englishTitle": "Select System Features",
      "subtitle": "按整机订购一次，所有通道通用 (灵活时钟参考输入及 2.4 GHz 参考输入)",
      "englishSubtitle": "Ordered once per instrument; compatible with all channels. AC power (PAC) and benchtop handles (01H) are standard.",
      "type": "multiple",
      "options": [
        {
          "id": "SG6311A-PAC",
          "code": "SG6311A-PAC",
          "name": "AC 交流电源供电操作 (AC power operation - Standard)",
          "englishName": "AC power operation",
          "category": "System Features",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准内置 AC 宽电压供电模块。",
          "englishDescription": "AC power operation. Standard on all SG6311A units."
        },
        {
          "id": "SG6311A-01H",
          "code": "SG6311A-01H",
          "name": "台式前把手与后提手 (Front and rear handles for benchtop use - Standard)",
          "englishName": "Front and rear handles for benchtop use",
          "category": "System Features",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准包含用于台式搬运与防磕碰的把手套件。",
          "englishDescription": "Front and rear handles for benchtop use. Standard."
        },
        {
          "id": "SG6311A-1ER",
          "code": "SG6311A-1ER",
          "name": "灵活时钟参考输入 1 至 110 MHz (Flexible reference input 1 to 110 MHz)",
          "englishName": "Flexible reference input (1 to 110 MHz)",
          "category": "System Features",
          "priceEstimate": "+$2,200",
          "description": "支持 1 MHz 至 110 MHz 之间任意 1 Hz 步进的外接参考时钟锁相输入。",
          "englishDescription": "Flexible reference input (1 to 110 MHz)."
        },
        {
          "id": "SG6311A-PCL",
          "code": "SG6311A-PCL",
          "name": "2.4 GHz 超高频参考输入 (2.4 GHz reference Input)",
          "englishName": "2.4 GHz reference Input",
          "category": "System Features",
          "priceEstimate": "+$3,100",
          "description": "提供 2.4 GHz 超高频低相噪参考输入端口，实现极致的跨仪器相位对齐与低相噪锁定。",
          "englishDescription": "2.4 GHz reference Input."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择通道功能选件 (Select Channel Features - Required / Performance)",
      "englishTitle": "Select Channel Features",
      "subtitle": "按通道配置: 频率 20 GHz (520)、低相噪 (EP5/EP6)、大功率 (1EB)、调制 (UNT/303/PMR/320/1SM) 及校准证书",
      "englishSubtitle": "Ordered per channel. Frequency (520), Phase Noise (EP5/EP6), High Power (1EB), Modulation, and Cal data.",
      "type": "multiple",
      "options": [
        {
          "id": "SG6311A-520",
          "code": "SG6311A-520",
          "name": "CW 连续波频率范围 9 kHz 至 20 GHz (出厂必选)",
          "englishName": "CW Frequency range, 9 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "Standard",
          "isStandard": true,
          "freqMaxGHz": 20.0,
          "description": "基础连续波频率覆盖 9 kHz 至 20 GHz，包含 3.5 mm 输出接头与机械步进衰减器。",
          "englishDescription": "CW Frequency range, 9 kHz to 20 GHz. Mandatory frequency option."
        },
        {
          "id": "SG6311A-EP5",
          "code": "SG6311A-EP5",
          "name": "低相位噪声性能 (Low phase noise)",
          "englishName": "Low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$7,800",
          "description": "提供优异的低近端相位噪声性能，满足雷达、卫星与高端通信元器件测试需求。与 EP6 互斥。",
          "englishDescription": "Low phase noise performance option. Select one of EP5 or EP6."
        },
        {
          "id": "SG6311A-EP6",
          "code": "SG6311A-EP6",
          "name": "超低相位噪声性能 (Ultra-low phase noise - Flagship)",
          "englishName": "Ultra-low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$14,500",
          "description": "PSG 旗舰级超低相位噪声技术，提供极致的近端和远端相噪底噪。与 EP5 互斥。",
          "englishDescription": "Ultra-low phase noise performance option. Select one of EP5 or EP6."
        },
        {
          "id": "SG6311A-1EB",
          "code": "SG6311A-1EB",
          "name": "高输出功率 9 kHz 至 20 GHz (High output power)",
          "englishName": "High output power from 9 kHz to 20 GHz",
          "category": "Power",
          "priceEstimate": "+$6,500",
          "description": "在 9 kHz 至 20 GHz 全频段内提供超大高线性度输出功率，轻松驱动大功率放大器与混频器。",
          "englishDescription": "High output power from 9 kHz to 20 GHz."
        },
        {
          "id": "SG6311A-UNT",
          "code": "SG6311A-UNT",
          "name": "模拟调制: AM, FM, 相位调制 (AM, FM, phase modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,800",
          "description": "支持内部与外部模拟调幅、调频与调相功能。",
          "englishDescription": "AM, FM, phase modulation."
        },
        {
          "id": "SG6311A-303",
          "code": "SG6311A-303",
          "name": "多功能发生器 (Multifunction generator)",
          "englishName": "Multifunction generator",
          "category": "Modulation",
          "priceEstimate": "+$2,400",
          "description": "内置高精度多功能函数发生器，支持双音与多波形合成输出。",
          "englishDescription": "Multifunction generator."
        },
        {
          "id": "SG6311A-PMR",
          "code": "SG6311A-PMR",
          "name": "脉冲调制 (Pulse modulation)",
          "englishName": "Pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,600",
          "description": "高开关比、快上升下降时间的脉冲调制功能，满足雷达信号仿真。",
          "englishDescription": "Pulse modulation."
        },
        {
          "id": "SG6311A-320",
          "code": "SG6311A-320",
          "name": "脉冲串生成器 (Pulse train generator)",
          "englishName": "Pulse train generator",
          "category": "Modulation",
          "priceEstimate": "+$3,500",
          "requires": [
            "SG6311A-PMR"
          ],
          "description": "支持多脉冲与复杂脉冲串生成。硬件必须选配 PMR 脉冲调制选件。",
          "englishDescription": "Pulse train generator. Requires Option PMR."
        },
        {
          "id": "SG6311A-1SM",
          "code": "SG6311A-1SM",
          "name": "扫描调制 (Scan modulation)",
          "englishName": "Scan modulation",
          "category": "Modulation",
          "priceEstimate": "+$2,900",
          "requires": [
            "SG6311A-UNT"
          ],
          "description": "天线波束扫描调制仿真选件。硬件必须选配 UNT 模拟调制选件。",
          "englishDescription": "Scan modulation. Requires Option UNT."
        },
        {
          "id": "SG6311A-UK6",
          "code": "SG6311A-UK6",
          "name": "商业校准证书附测试数据 (Commercial calibration certificate and test data)",
          "englishName": "Commercial calibration certificate and test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂提供包含实测参数与校准指标的商业校准报告。",
          "englishDescription": "Commercial calibration certificate and test data."
        },
        {
          "id": "SG6311A-A6J",
          "code": "SG6311A-A6J",
          "name": "ANSI Z540-1-1994 校准认证 (ANSI Z540-1-1994 Calibration)",
          "englishName": "ANSI Z540-1-1994 Calibration",
          "category": "Calibration",
          "priceEstimate": "+$1,250",
          "description": "符合 ANSI Z540-1 规范的权威计量校准认证。",
          "englishDescription": "ANSI Z540-1-1994 Calibration."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "配置嵌入式 PathWave 软件 (Configure Software - Optional)",
      "englishTitle": "Embedded PathWave Software",
      "subtitle": "通过 PSG 触摸图形界面运行的自动通道响应校准与去嵌软件 (整机订购一个许可证)",
      "englishSubtitle": "Embedded PathWave software tools. One software license per instrument is required.",
      "type": "multiple",
      "options": [
        {
          "id": "N7653APPC",
          "code": "N7653APPC",
          "name": "PathWave 自动通道响应校正与 S 参数去嵌入软件 (PathWave automatic channel response correction & de-embedding)",
          "englishName": "PathWave automatic channel response correction and S-parameter de-embedding",
          "category": "PathWave Software",
          "priceEstimate": "+$7,500",
          "description": "利用内嵌 PathWave 算法实现夹具与电缆的 S 参数高精度去嵌入，校正测试夹具对宽带信号造成的频响畸变。",
          "englishDescription": "PathWave automatic channel response correction and S-parameter de-embedding."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择附件与电缆 (Select Accessories - Optional)",
      "englishTitle": "Accessories & Cables",
      "subtitle": "2U 机架法兰套件、把手、导轨、可拆卸 SD 卡、精密 3.5mm 转接头与软电缆",
      "englishSubtitle": "Rack mount kits (2U), handles, slides, removable SD memory, 3.5 mm adapters and cables.",
      "type": "multiple",
      "options": [
        {
          "id": "1CM110A",
          "code": "1CM110A",
          "name": "机架法兰安装套件 88.1mm H (2U) (Rack mount flange kit 2U)",
          "englishName": "Rack mount flange kit 88.1mm H (2U)",
          "category": "Accessories",
          "priceEstimate": "+$360",
          "description": "用于 2U 机架式安装的法兰套件。",
          "englishDescription": "Rack mount flange kit 88.1mm H (2U)."
        },
        {
          "id": "1CN106A",
          "code": "1CN106A",
          "name": "前面板把手套件 88.1mm H (2U) (Handle kit 2U)",
          "englishName": "Handle kit 88.1mm H (2U)",
          "category": "Accessories",
          "priceEstimate": "+$320",
          "description": "2U 高度前面板把手。",
          "englishDescription": "Handle kit 88.1mm H (2U)."
        },
        {
          "id": "1CP104A",
          "code": "1CP104A",
          "name": "机架法兰与把手组合套件 88.1mm H (2U) (Rack mount flange and handle kit 2U)",
          "englishName": "Rack mount flange and handle kit 88.1mm H (2U)",
          "category": "Accessories",
          "priceEstimate": "+$540",
          "description": "包含 2U 法兰与把手的组合附件。",
          "englishDescription": "Rack mount flange and handle kit 88.1mm H (2U)."
        },
        {
          "id": "1CR015A",
          "code": "1CR015A",
          "name": "机架滑动导轨套件 (Rack slide kit)",
          "englishName": "Rack slide kit",
          "category": "Accessories",
          "priceEstimate": "+$680",
          "description": "标准滑动导轨套件。",
          "englishDescription": "Rack slide kit."
        },
        {
          "id": "Y1310A",
          "code": "Y1310A",
          "name": "额外可拆卸 SD 存储卡 (Additional removable SD memory)",
          "englishName": "Additional removable SD memory",
          "category": "Accessories",
          "priceEstimate": "+$220",
          "description": "提供额外的可拆卸 SD 安全存储卡，方便保密数据隔离保管。",
          "englishDescription": "Additional removable SD memory."
        },
        {
          "id": "83059B",
          "code": "83059B",
          "name": "精密同轴转接头: 3.5 mm (f) 至 3.5 mm (f)",
          "englishName": "Adapter, 3.5 mm (f) to 3.5 mm (f)",
          "category": "Adapters",
          "priceEstimate": "+$340",
          "description": "高性能同轴精密转接头 3.5 mm (阴) 至 3.5 mm (阴)。",
          "englishDescription": "Adapter, 3.5 mm (f) to 3.5 mm (f)."
        },
        {
          "id": "83059C",
          "code": "83059C",
          "name": "精密同轴转接头: 3.5 mm (f) 至 3.5 mm (m)",
          "englishName": "Adapter, 3.5 mm (f) to 3.5 mm (m)",
          "category": "Adapters",
          "priceEstimate": "+$340",
          "description": "高性能同轴精密转接头 3.5 mm (阴) 至 3.5 mm (阳)。",
          "englishDescription": "Adapter, 3.5 mm (f) to 3.5 mm (m)."
        },
        {
          "id": "N4419AK20",
          "code": "N4419AK20",
          "name": "柔性射频电缆: 3.5 mm (m) 至 3.5 mm (f), 91.4 cm (36 英寸)",
          "englishName": "Cable, flexible: 3.5 mm (m) to 3.5 mm (f), 91.4 cm, 36 inches",
          "category": "Cables",
          "priceEstimate": "+$720",
          "description": "长 91.4 cm (36 英寸) 高相位稳定性 3.5 mm 柔性同轴测试电缆。",
          "englishDescription": "Cable, flexible: 3.5 mm (m) to 3.5 mm (f), 91.4 cm, 36 inches."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择 KeysightCare 服务与支持 (Keysight Support Services - Optional)",
      "englishTitle": "KeysightCare Support Services",
      "subtitle": "首年包含 KeysightCare Assured (R-55A-001-1)，可升级至 Enhanced 综合校准保障或延长多年",
      "englishSubtitle": "1 year KeysightCare Assured included. Extend to 2, 3, or 5 years or upgrade to KeysightCare Enhanced.",
      "type": "multiple",
      "options": [
        {
          "id": "R-55A-001-1",
          "code": "R-55A-001-1",
          "name": "KeysightCare Assured 首年技术支持与保修 (标准内置)",
          "englishName": "KeysightCare Assured First Year Support",
          "category": "KeysightCare",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标配 1 年期 KeysightCare Assured 返厂保修与专家技术响应服务。",
          "englishDescription": "Includes Tech Support and Return to Keysight Warranty - 1 year. Standard."
        },
        {
          "id": "R-55A-001-2",
          "code": "R-55A-001-2",
          "name": "KeysightCare Assured 保修与支持延长至 2 年",
          "englishName": "KeysightCare Assured – Extend to 2 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$2,800",
          "description": "将 KeysightCare Assured 保修与技术支持延长至 2 年。",
          "englishDescription": "KeysightCare Assured – Extend to 2 years."
        },
        {
          "id": "R-55A-001-3",
          "code": "R-55A-001-3",
          "name": "KeysightCare Assured 保修与支持延长至 3 年",
          "englishName": "KeysightCare Assured – Extend to 3 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$4,800",
          "description": "将 KeysightCare Assured 保修与技术支持延长至 3 年。",
          "englishDescription": "KeysightCare Assured – Extend to 3 years."
        },
        {
          "id": "R-55A-001-5",
          "code": "R-55A-001-5",
          "name": "KeysightCare Assured 保修与支持延长至 5 年",
          "englishName": "KeysightCare Assured – Extend to 5 years",
          "category": "KeysightCare Assured",
          "priceEstimate": "+$8,600",
          "description": "将 KeysightCare Assured 保修与技术支持延长至 5 年。",
          "englishDescription": "KeysightCare Assured – Extend to 5 years."
        },
        {
          "id": "R-55B-001-1",
          "code": "R-55B-001-1",
          "name": "KeysightCare Enhanced 增强版升级 1 年 (含定期校准)",
          "englishName": "KeysightCare Enhanced – Upgrade 1 year",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$3,200",
          "description": "在首年保修基础上升级加入是德科技官方原厂定期校准服务与加速 TAT 周期。",
          "englishDescription": "KeysightCare Enhanced – Upgrade 1 year (Includes Tech Support, Warranty and Calibration)."
        },
        {
          "id": "R-55B-001-2",
          "code": "R-55B-001-2",
          "name": "KeysightCare Enhanced 增强版延长至 2 年",
          "englishName": "KeysightCare Enhanced – Extend to 2 years",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$5,900",
          "requires": [
            "R-55B-001-1"
          ],
          "description": "将包含保修与校准的 Enhanced 服务延长至 2 年。需与 R-55B-001-1 一同选配。",
          "englishDescription": "KeysightCare Enhanced – Extend to 2 years. Must be ordered with R-55B-001-1."
        },
        {
          "id": "R-55B-001-3",
          "code": "R-55B-001-3",
          "name": "KeysightCare Enhanced 增强版延长至 3 年 (推荐)",
          "englishName": "KeysightCare Enhanced – Extend to 3 years (Recommended)",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$9,600",
          "requires": [
            "R-55B-001-1"
          ],
          "description": "将包含保修与校准的 Enhanced 服务延长至 3 年。需与 R-55B-001-1 一同选配。",
          "englishDescription": "KeysightCare Enhanced – Extend to 3 years (Recommended). Must be ordered with R-55B-001-1."
        },
        {
          "id": "R-55B-001-5",
          "code": "R-55B-001-5",
          "name": "KeysightCare Enhanced 增强版延长至 5 年 (推荐)",
          "englishName": "KeysightCare Enhanced – Extend to 5 years (Recommended)",
          "category": "KeysightCare Enhanced",
          "priceEstimate": "+$16,800",
          "requires": [
            "R-55B-001-1"
          ],
          "description": "将包含保修与校准的 Enhanced 服务延长至 5 年。需与 R-55B-001-1 一同选配。",
          "englishDescription": "KeysightCare Enhanced – Extend to 5 years (Recommended). Must be ordered with R-55B-001-1."
        },
        {
          "id": "PS-S40-01",
          "code": "PS-S40-01",
          "name": "基础起步培训服务 (Instrument fundamentals and operations starter - Included)",
          "englishName": "Included – instrument fundamentals and operations starter",
          "category": "Training Services",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准包含仪器基本操作与快速上手指导资料。",
          "englishDescription": "Included – instrument fundamentals and operations starter."
        },
        {
          "id": "PS-S40-04",
          "code": "PS-S40-04",
          "name": "专家现场起步与操作指导服务 (Recommended starter training)",
          "englishName": "Recommended – instrument fundamentals and operations starter",
          "category": "Training Services",
          "priceEstimate": "+$1,800",
          "description": "专家针对测试场景的深度操作与测试方法上手培训。",
          "englishDescription": "Recommended – instrument fundamentals and operations starter."
        },
        {
          "id": "PS-S40-02",
          "code": "PS-S40-02",
          "name": "测量科学与测试技术进阶培训 (Technology & measurement science standard learning)",
          "englishName": "Optional, technology & measurement science standard learning",
          "category": "Training Services",
          "priceEstimate": "+$2,600",
          "description": "射频与微波计量、相位噪声测量理论进阶技术课程。",
          "englishDescription": "Optional, technology & measurement science standard learning."
        }
      ]
    }
  ]
};
