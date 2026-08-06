// Keysight N5182B Configurator Dataset
export const N5182B_DATA = {
  "id": "N5182B",
  "name": "N5182B MXG X-Series Vector Signal Generator",
  "subtitle": "9 kHz to 3 / 6 GHz High-Performance Vector Signal Generator (up to 160 MHz BW)",
  "family": "X-Series Vector Signal Generators (MXG)",
  "docNumber": "5991-0039 / N5182B",
  "description": "The Keysight N5182B MXG X-Series is a high-performance vector signal generator covering 9 kHz up to 6 GHz, featuring up to 160 MHz RF modulation bandwidth, ultra-low phase noise, high output power up to +24 dBm, and real-time baseband ARB generation for 5G NR, LTE, WLAN, and aerospace testing.",
  "baseSpecs": {
    "frequencyRange": "9 kHz to 3 / 6 GHz",
    "maxModBandwidth": "Up to 160 MHz RF Modulation Bandwidth (Options 657/660)",
    "phaseNoise": "Ultra-low phase noise down to -146 dBc/Hz @ 1 GHz (20 kHz offset, Option UNY)",
    "maxOutputPower": "High output power up to +24 dBm (Option 1EA)",
    "arbMemory": "Up to 1 GSa ARB Waveform Memory (Option 660)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高工作频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "必选选件（2 选 1），覆盖 9 kHz 至 3 GHz 或 6 GHz 频段",
      "englishSubtitle": "Required option (Choose 1). Frequency range from 9 kHz up to 6 GHz.",
      "type": "single",
      "options": [
        {
          "id": "N5182B-503",
          "code": "N5182B-503",
          "name": "频率范围 9 kHz 至 3 GHz",
          "englishName": "Frequency range, 9 kHz to 3 GHz",
          "category": "Frequency",
          "priceEstimate": "$24,500",
          "freqMaxGHz": 3.0,
          "description": "覆盖 3 GHz 以下传统蜂窝通信与无线频段。",
          "englishDescription": "Covers frequency range up to 3 GHz."
        },
        {
          "id": "N5182B-506",
          "code": "N5182B-506",
          "name": "频率范围 9 kHz 至 6 GHz",
          "englishName": "Frequency range, 9 kHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "+$32,000",
          "freqMaxGHz": 6.0,
          "description": "MXG 旗舰覆盖至 6 GHz，完整覆盖 5G NR Sub-6GHz、LTE 与 Wi-Fi 6E 频段。",
          "englishDescription": "Full frequency coverage up to 6 GHz for Sub-6GHz 5G and Wi-Fi 6E."
        },
        {
          "id": "N5182B-303",
          "code": "N5182B-303",
          "name": "矢量扩展频率范围 9 kHz 至 3 GHz",
          "englishName": "Vector frequency extension, 9 kHz to 3 GHz",
          "category": "Frequency",
          "priceEstimate": "$25,800",
          "freqMaxGHz": 3.0,
          "description": "3 GHz 高品质矢量信号发生选件。",
          "englishDescription": "Vector frequency extension up to 3 GHz."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择矢量调制带宽与基带生成器 (Select Modulation Bandwidth & Baseband ARB)",
      "englishTitle": "Select Modulation Bandwidth & Baseband ARB",
      "subtitle": "提供高达 160 MHz RF 带宽与 1 GSa ARB 内存 (Options 656/657/660)",
      "englishSubtitle": "Provides up to 160 MHz RF bandwidth & 1 GSa ARB memory.",
      "type": "single",
      "options": [
        {
          "id": "N5182B-656",
          "code": "N5182B-656",
          "name": "基带发生器 80 MHz 带宽与 32 MSa ARB 内存 (80 MHz BW / 32 MSa)",
          "englishName": "Baseband generator 80 MHz RF bandwidth with 32 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 80,
          "description": "N5182B 标配 80 MHz RF 矢量调制带宽与 32 MSa 内存。",
          "englishDescription": "Standard 80 MHz RF modulation bandwidth with 32 MSa memory."
        },
        {
          "id": "N5182B-657",
          "code": "N5182B-657",
          "name": "基带发生器 160 MHz 带宽与 512 MSa ARB 内存 (160 MHz BW / 512 MSa)",
          "englishName": "Baseband generator 160 MHz RF bandwidth with 512 MSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$14,500",
          "bandwidthMHz": 160,
          "description": "扩展调制带宽至 160 MHz 与 512 MSa 内存，支持 5G NR 100MHz 载波聚合。",
          "englishDescription": "Extends RF modulation bandwidth to 160 MHz with 512 MSa memory."
        },
        {
          "id": "N5182B-660",
          "code": "N5182B-660",
          "name": "实时基带发生器 160 MHz 带宽与 1 GSa 深度内存 (Real-Time 160 MHz BW / 1 GSa)",
          "englishName": "Real-time baseband generator 160 MHz RF bandwidth with 1 GSa memory",
          "category": "Bandwidth",
          "priceEstimate": "+$22,500",
          "bandwidthMHz": 160,
          "description": "MXG 旗舰实时基带发生器，提供 160 MHz 宽带实时信号生成与 1 GSa 深度 ARB 内存。",
          "englishDescription": "Real-time baseband generator 160 MHz RF bandwidth with 1 GSa deep memory."
        },
        {
          "id": "N5182B-099",
          "code": "N5182B-099",
          "name": "Baseband ARB 基础波形发生器许可证",
          "englishName": "Baseband ARB generator license",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "基础 ARB 波形文件播放授权。",
          "englishDescription": "Baseband ARB generator license."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择相位噪声与高输出功率 (Phase Noise & High Output Power)",
      "englishTitle": "Phase Noise & High Output Power",
      "subtitle": "极致超低相噪选件 UNY (-146 dBc/Hz) 及 +24 dBm 高输出功率 1EA",
      "englishSubtitle": "Enhanced ultra-low phase noise (UNY) and high output power up to +24 dBm (1EA).",
      "type": "multiple",
      "options": [
        {
          "id": "N5182B-UNX",
          "code": "N5182B-UNX",
          "name": "超低相位噪声性能 (Ultra-Low Phase Noise)",
          "englishName": "Ultra-low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$4,500",
          "description": "提供优质低相噪性能，满足高精度信号测试。",
          "englishDescription": "Ultra-low phase noise performance."
        },
        {
          "id": "N5182B-UNY",
          "code": "N5182B-UNY",
          "name": "极致增强型超低相位噪声性能 (Enhanced Ultra-Low Phase Noise)",
          "englishName": "Enhanced ultra-low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$8,500",
          "description": "1 GHz 频率下 20 kHz 偏移低至 -146 dBc/Hz，极致纯净度改善 EVM。",
          "englishDescription": "Enhanced ultra-low phase noise down to -146 dBc/Hz @ 1 GHz."
        },
        {
          "id": "N5182B-1EA",
          "code": "N5182B-1EA",
          "name": "高输出功率选件 (High Output Power up to +24 dBm)",
          "englishName": "High output power",
          "category": "Power",
          "priceEstimate": "+$4,800",
          "description": "提升矢量信号发生器输出功率至 +24 dBm。",
          "englishDescription": "Increases output power up to +24 dBm."
        },
        {
          "id": "N5182B-1EQ",
          "code": "N5182B-1EQ",
          "name": "低功率高衰减范围控制 (Low Power Attenuation)",
          "englishName": "Low power attenuation range",
          "category": "Power",
          "priceEstimate": "+$1,200",
          "description": "扩展低功率输出动态范围至 -130 dBm。",
          "englishDescription": "Extends low power output range down to -130 dBm."
        },
        {
          "id": "N5182B-1EL",
          "code": "N5182B-1EL",
          "name": "差分模拟 I/Q 输出接口 (Differential Analog I/Q Outputs)",
          "englishName": "Differential analog I/Q outputs",
          "category": "Analog IQ",
          "priceEstimate": "+$2,800",
          "description": "提供外部差分模拟 I/Q 输出信号端子。",
          "englishDescription": "Provides differential analog I/Q output connectors."
        },
        {
          "id": "N5182B-1EM",
          "code": "N5182B-1EM",
          "name": "后面板 RF 输出接口 (Rear Panel RF Output)",
          "englishName": "Move RF output to rear panel",
          "category": "Routing",
          "priceEstimate": "+$850",
          "description": "将 RF 矢量信号输出端子移至机箱后面板。",
          "englishDescription": "Moves RF output connectors to rear panel."
        },
        {
          "id": "N5182B-1ER",
          "code": "N5182B-1ER",
          "name": "灵活参考输入接口 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "Routing",
          "priceEstimate": "+$1,500",
          "description": "支持外部灵活基准时钟频率输入。",
          "englishDescription": "Flexible external reference frequency input."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择模拟调制、脉冲调制与相位锁相同步 (Analog Mod, Pulse & Phase Sync)",
      "englishTitle": "Analog Mod, Pulse & Phase Sync",
      "subtitle": "AM/FM/PM 模拟调制、窄脉冲 UNW、本振同步 023 与多机锁相 022",
      "englishSubtitle": "Analog modulation, narrow pulse, LO in/out, and multi-unit phase sync.",
      "type": "multiple",
      "options": [
        {
          "id": "N5182B-UNT",
          "code": "N5182B-UNT",
          "name": "AM, FM, 相位调制 PM 选件 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, Phase Modulation",
          "category": "Modulation",
          "priceEstimate": "+$2,800",
          "description": "模拟调幅、调频及调相功能。",
          "englishDescription": "Analog AM, FM, and phase modulation."
        },
        {
          "id": "N5182B-UNW",
          "code": "N5182B-UNW",
          "name": "窄脉冲调制选件 (Narrow Pulse Modulation)",
          "englishName": "Narrow pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,200",
          "description": "产生上升沿极窄的雷达脉冲调制信号。",
          "englishDescription": "Narrow pulse modulation for radar testing."
        },
        {
          "id": "N5182B-023",
          "code": "N5182B-023",
          "name": "本振 LO 输入/输出相干接口 (LO In/Out for Phase Coherence)",
          "englishName": "LO in/out for phase coherence",
          "category": "Coherence",
          "priceEstimate": "+$5,800",
          "description": "共享本振 LO 信号至多台 MXG 发讯机，实现高精度相位相干 MIMO 阵列。",
          "englishDescription": "Shares LO signal across multiple units for phase coherence."
        },
        {
          "id": "N5182B-022",
          "code": "N5182B-022",
          "name": "多机相位相干同步选件 (Multi-Unit Phase Synchronization)",
          "englishName": "Multi-unit phase synchronization",
          "category": "Coherence",
          "priceEstimate": "+$4,500",
          "description": "多台发讯机间相位对齐与锁定。",
          "englishDescription": "Multi-unit phase synchronization."
        },
        {
          "id": "N5182B-012",
          "code": "N5182B-012",
          "name": "高稳定性 OCXO 频率基准 (High Stability OCXO)",
          "englishName": "High stability OCXO frequency reference",
          "category": "Reference",
          "priceEstimate": "+$2,500",
          "description": "高精度恒温晶振频率基准。",
          "englishDescription": "High stability OCXO frequency reference."
        },
        {
          "id": "N5182B-UNV",
          "code": "N5182B-UNV",
          "name": "增强动态范围控制选件 (Enhanced Dynamic Range)",
          "englishName": "Enhanced dynamic range",
          "category": "Performance",
          "priceEstimate": "+$2,500",
          "description": "优化输出射频信号信躁比与 ACPR。",
          "englishDescription": "Enhances signal dynamic range and ACPR."
        },
        {
          "id": "N5182B-UNZ",
          "code": "N5182B-UNZ",
          "name": "快速频率切换与调谐 (Fast Frequency Switching)",
          "englishName": "Fast frequency switching",
          "category": "Performance",
          "priceEstimate": "+$3,800",
          "description": "大幅缩短频率与功率盲跳切换时间。",
          "englishDescription": "Fast frequency switching for automated test."
        },
        {
          "id": "N5182B-006",
          "code": "N5182B-006",
          "name": "仪表安全与可拆卸存储器 (Security & Removable Memory)",
          "englishName": "Instrument security and removable memory",
          "category": "Security",
          "priceEstimate": "+$1,800",
          "description": "保密安全环境下的数据清空与可拆卸存储卡。",
          "englishDescription": "Instrument security and removable memory."
        },
        {
          "id": "N5182B-009",
          "code": "N5182B-009",
          "name": "内置固态硬盘 (Internal Solid-State Drive)",
          "englishName": "Internal solid-state drive",
          "category": "Storage",
          "priceEstimate": "+$1,500",
          "description": "内置高可靠性 SSD 固态硬盘。",
          "englishDescription": "Internal SSD solid-state drive."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择数字总线与接口 (Select Digital Bus & Interfaces)",
      "englishTitle": "Select Digital Bus & Interfaces",
      "subtitle": "数字总线接口 004 与数字总线扩展 003",
      "englishSubtitle": "Digital bus interface 004 and digital bus extension 003.",
      "type": "multiple",
      "options": [
        {
          "id": "N5182B-004",
          "code": "N5182B-004",
          "name": "N5182B 数字总线接口选件 (Digital Bus Interface)",
          "englishName": "Digital bus interface",
          "category": "Digital Bus",
          "priceEstimate": "+$2,800",
          "description": "数字总线接口选件，用于数字 I/Q 数据传输。",
          "englishDescription": "Digital bus interface for digital I/Q."
        },
        {
          "id": "N5182B-003",
          "code": "N5182B-003",
          "name": "N5182B 数字总线扩展选件 (Digital Bus Extension)",
          "englishName": "Digital bus extension",
          "category": "Digital Bus",
          "priceEstimate": "+$1,800",
          "description": "数字总线扩展选件。",
          "englishDescription": "Digital bus extension option."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择 PathWave Signal Studio 5G NR 与 Wi-Fi 7 信号生成软件 (5G NR & Wi-Fi 7 Software)",
      "englishTitle": "5G NR & Wi-Fi 7 Software",
      "subtitle": "Signal Studio 5G NR (N7608C)、WLAN Wi-Fi 7 802.11be (N7617C) 及 LTE (N7624C)",
      "englishSubtitle": "Signal Studio 5G NR, WLAN Wi-Fi 7 802.11be, and LTE waveform creation.",
      "type": "multiple",
      "options": [
        {
          "id": "N7608C",
          "code": "N7608C",
          "name": "Signal Studio 5G NR 矢量信号生成软件",
          "englishName": "Signal Studio for 5G NR waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "生成符合 3GPP 5G NR Sub-6GHz 标准的高品质测试波形。",
          "englishDescription": "Generates 3GPP compliant 5G NR test waveforms."
        },
        {
          "id": "N7617C",
          "code": "N7617C",
          "name": "Signal Studio WLAN 802.11a/b/g/n/ac/ax/be (Wi-Fi 7) 信号生成软件",
          "englishName": "Signal Studio for WLAN Wi-Fi 7 waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "生成 Wi-Fi 7 (802.11be) 160MHz 4096QAM 标准测试波形。",
          "englishDescription": "Generates WLAN 802.11be Wi-Fi 7 test waveforms."
        },
        {
          "id": "N7624C",
          "code": "N7624C",
          "name": "Signal Studio LTE/LTE-Advanced 信号生成软件",
          "englishName": "Signal Studio for LTE/LTE-A waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "生成符合 3GPP LTE FDD/TDD 载波聚合标准测试信号。",
          "englishDescription": "Generates 3GPP LTE/LTE-A test waveforms."
        },
        {
          "id": "N7610C",
          "code": "N7610C",
          "name": "Signal Studio 短距离通信与物联网 (Bluetooth/ZigBee) 信号生成软件",
          "englishName": "Signal Studio for Short Range & IoT",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "生成蓝牙 5、ZigBee 标准波形。",
          "englishDescription": "Generates Bluetooth 5 and IoT test waveforms."
        },
        {
          "id": "N7640C",
          "code": "N7640C",
          "name": "Signal Studio C-V2X 车联网信号生成软件",
          "englishName": "Signal Studio for C-V2X waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "生成 C-V2X 车联网标准测试信号。",
          "englishDescription": "Generates C-V2X test waveforms."
        },
        {
          "id": "N7609C",
          "code": "N7609C",
          "name": "Signal Studio GNSS 卫星导航信号生成软件",
          "englishName": "Signal Studio for GNSS waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "生成 GPS、GLONASS、BDS 北斗、Galileo 卫星导航波形。",
          "englishDescription": "Generates GPS, GLONASS, BDS, Galileo GNSS waveforms."
        },
        {
          "id": "N7605C",
          "code": "N7605C",
          "name": "Signal Studio Real-Time WDR 无线防真与失真信号生成软件",
          "englishName": "Signal Studio for Real-Time WDR",
          "category": "Signal Studio",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "实时 WDR 无线信道失真波形生成软件。"
        },
        {
          "id": "N7630C",
          "code": "N7630C",
          "name": "Signal Studio V2X 车联网测试软件",
          "englishName": "Signal Studio for V2X",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "DSRC 与 C-V2X 车联网测试波形生成软件。"
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择 PathWave Signal Studio 蜂窝 2G/3G、雷达与包络跟踪软件 (Cellular & Advanced Apps)",
      "englishTitle": "Cellular & Advanced Apps",
      "subtitle": "Signal Studio 脉冲构建 (N7620B)、包络跟踪 Envelope Tracking (N7614C) 及多音 N7621B",
      "englishSubtitle": "Signal Studio for Pulse Building, Envelope Tracking, and Multitone.",
      "type": "multiple",
      "options": [
        {
          "id": "N7620B",
          "code": "N7620B",
          "name": "Signal Studio 雷达脉冲生成与构建软件 (Pulse Building)",
          "englishName": "Signal Studio for Pulse Building",
          "category": "Signal Studio",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "构建复杂雷达脉冲群、 Chirp 与相干脉冲列。",
          "englishDescription": "Generates complex radar pulse patterns and chirps."
        },
        {
          "id": "N7614C",
          "code": "N7614C",
          "name": "Signal Studio 包络跟踪 (Envelope Tracking) 测试软件",
          "englishName": "Signal Studio for Envelope Tracking",
          "category": "Signal Studio",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "功放包络跟踪 ET 与数字预失真 DPD 测试波形生成。",
          "englishDescription": "Envelope tracking and DPD waveform generation."
        },
        {
          "id": "N7621B",
          "code": "N7621B",
          "name": "Signal Studio 多音 (Multitone) 信号生成软件",
          "englishName": "Signal Studio for Multitone",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "多音信号生成与三阶交调 IMD 测试。",
          "englishDescription": "Multitone signal generation."
        },
        {
          "id": "N7622C",
          "code": "N7622C",
          "name": "Signal Studio Custom Modulation 自定义调制信号生成软件",
          "englishName": "Signal Studio for Custom Modulation",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "自定义 PSK、QAM 星座图波形生成。",
          "englishDescription": "Custom modulation waveform generation."
        },
        {
          "id": "N7631C",
          "code": "N7631C",
          "name": "Signal Studio Custom IQ 自定义 IQ 波形生成软件",
          "englishName": "Signal Studio for Custom IQ",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "自定义 IQ 映射信号生成。",
          "englishDescription": "Custom IQ waveform generation."
        },
        {
          "id": "N7600C",
          "code": "N7600C",
          "name": "Signal Studio W-CDMA/HSPA+ 信号生成软件",
          "englishName": "Signal Studio for W-CDMA/HSPA+",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "3G W-CDMA 标准信号生成。",
          "englishDescription": "Generates W-CDMA test signals."
        },
        {
          "id": "N7601C",
          "code": "N7601C",
          "name": "Signal Studio GSM/EDGE 信号生成软件",
          "englishName": "Signal Studio for GSM/EDGE",
          "category": "Signal Studio",
          "priceEstimate": "+$3,200",
          "supportsLicense": true,
          "description": "2G GSM/EDGE 标准信号生成。",
          "englishDescription": "Generates GSM/EDGE test signals."
        },
        {
          "id": "N7602C",
          "code": "N7602C",
          "name": "Signal Studio cdma2000 信号生成软件",
          "englishName": "Signal Studio for cdma2000",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "cdma2000 标准波形生成。",
          "englishDescription": "Generates cdma2000 test signals."
        },
        {
          "id": "N7606C",
          "code": "N7606C",
          "name": "Signal Studio Bluetooth 蓝牙信号生成软件",
          "englishName": "Signal Studio for Bluetooth",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "蓝牙 5 标准波形生成。",
          "englishDescription": "Generates Bluetooth test signals."
        },
        {
          "id": "N7607C",
          "code": "N7607C",
          "name": "Signal Studio DFS 雷达模板信号生成软件",
          "englishName": "Signal Studio for DFS radar profile",
          "category": "Signal Studio",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "生成 DFS 雷达波形。",
          "englishDescription": "Generates DFS radar profile signals."
        },
        {
          "id": "N7611C",
          "code": "N7611C",
          "name": "Signal Studio Broadcast TV 广播电视信号生成软件",
          "englishName": "Signal Studio for Broadcast TV",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "数字广播电视标准信号生成。",
          "englishDescription": "Generates broadcast TV test signals."
        },
        {
          "id": "N7612C",
          "code": "N7612C",
          "name": "Signal Studio TD-SCDMA 信号生成软件",
          "englishName": "Signal Studio for TD-SCDMA",
          "category": "Signal Studio",
          "priceEstimate": "+$3,200",
          "supportsLicense": true,
          "description": "TD-SCDMA 标准波形生成。",
          "englishDescription": "Generates TD-SCDMA test signals."
        },
        {
          "id": "N7615C",
          "code": "N7615C",
          "name": "Signal Studio WiMAX 802.16 信号生成软件",
          "englishName": "Signal Studio for WiMAX",
          "category": "Signal Studio",
          "priceEstimate": "+$3,200",
          "supportsLicense": true,
          "description": "WiMAX 标准波形生成。",
          "englishDescription": "Generates WiMAX test signals."
        },
        {
          "id": "N7623C",
          "code": "N7623C",
          "name": "Signal Studio Digital Video 信号生成软件",
          "englishName": "Signal Studio for Digital Video",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "数字视频标准信号生成。",
          "englishDescription": "Generates Digital Video test signals."
        },
        {
          "id": "N7625C",
          "code": "N7625C",
          "name": "Signal Studio 3GPP2 信号生成软件",
          "englishName": "Signal Studio for 3GPP2",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "3GPP2 标准信号生成。",
          "englishDescription": "Generates 3GPP2 test signals."
        },
        {
          "id": "N7626C",
          "code": "N7626C",
          "name": "Signal Studio DOCSIS 信号生成软件",
          "englishName": "Signal Studio for DOCSIS",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "DOCSIS 有线电视标准信号生成。",
          "englishDescription": "Generates DOCSIS test signals."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择硬件升级与功能扩展选件 (Upgrade Options - N5182BU)",
      "englishTitle": "Upgrade Options - N5182BU",
      "subtitle": "已购 N5182B 仪表的现场硬件与带宽扩展升级选件套件",
      "englishSubtitle": "Field upgrade options for existing N5182B units.",
      "type": "multiple",
      "options": [
        {
          "id": "N5182BU-657",
          "code": "N5182BU-657",
          "name": "升级至 160 MHz 带宽套件 (Upgrade to 160 MHz BW)",
          "englishName": "Upgrade to 160 MHz bandwidth",
          "category": "Upgrade",
          "priceEstimate": "+$16,500",
          "description": "升级基带发生器至 160 MHz 带宽与 512 MSa 内存。",
          "englishDescription": "Upgrades baseband generator to 160 MHz bandwidth."
        },
        {
          "id": "N5182BU-660",
          "code": "N5182BU-660",
          "name": "升级至 160 MHz 实时基带套件 (Upgrade to 160 MHz Real-Time)",
          "englishName": "Upgrade to 160 MHz real-time baseband",
          "category": "Upgrade",
          "priceEstimate": "+$25,000",
          "description": "升级至 160 MHz 实时基带发生器与 1 GSa 内存。",
          "englishDescription": "Upgrades to 160 MHz real-time baseband generator."
        },
        {
          "id": "N5182BU-1EA",
          "code": "N5182BU-1EA",
          "name": "升级高输出功率选件 (Upgrade High Output Power)",
          "englishName": "Upgrade high output power",
          "category": "Upgrade",
          "priceEstimate": "+$5,500",
          "description": "升级高输出功率至 +24 dBm。",
          "englishDescription": "Upgrades high output power option."
        },
        {
          "id": "N5182BU-023",
          "code": "N5182BU-023",
          "name": "升级本振 LO 输入/输出相干接口",
          "englishName": "Upgrade LO in/out for phase coherence",
          "category": "Upgrade",
          "priceEstimate": "+$6,500",
          "description": "升级增加 LO 相位相干端口。",
          "englishDescription": "Upgrades LO in/out capability."
        },
        {
          "id": "N5182BU-022",
          "code": "N5182BU-022",
          "name": "升级多机相位相干同步套件",
          "englishName": "Upgrade multi-unit phase sync",
          "category": "Upgrade",
          "priceEstimate": "+$5,200",
          "description": "升级多机相位相干同步功能。",
          "englishDescription": "Upgrades multi-unit phase sync."
        },
        {
          "id": "N5182BU-UNW",
          "code": "N5182BU-UNW",
          "name": "升级窄脉冲调制套件",
          "englishName": "Upgrade narrow pulse modulation",
          "category": "Upgrade",
          "priceEstimate": "+$4,800",
          "description": "升级窄脉冲调制硬件功能。",
          "englishDescription": "Upgrades narrow pulse modulation."
        },
        {
          "id": "N5182BU-UNV",
          "code": "N5182BU-UNV",
          "name": "升级增强动态范围套件",
          "englishName": "Upgrade enhanced dynamic range",
          "category": "Upgrade",
          "priceEstimate": "+$2,800",
          "description": "升级增强动态范围套件。",
          "englishDescription": "Upgrades enhanced dynamic range."
        },
        {
          "id": "N5182BU-UNZ",
          "code": "N5182BU-UNZ",
          "name": "升级快速频率切换套件",
          "englishName": "Upgrade fast frequency switching",
          "category": "Upgrade",
          "priceEstimate": "+$4,200",
          "description": "升级快速频率切换功能。",
          "englishDescription": "Upgrades fast frequency switching."
        },
        {
          "id": "N5182BU-006",
          "code": "N5182BU-006",
          "name": "升级仪器安全与可拆卸存储器套件",
          "englishName": "Upgrade option N5182BU-006",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-006。"
        },
        {
          "id": "N5182BU-009",
          "code": "N5182BU-009",
          "name": "升级内置 SSD 固态硬盘套件",
          "englishName": "Upgrade option N5182BU-009",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-009。"
        },
        {
          "id": "N5182BU-012",
          "code": "N5182BU-012",
          "name": "升级高稳定性 OCXO 晶振套件",
          "englishName": "Upgrade option N5182BU-012",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-012。"
        },
        {
          "id": "N5182BU-043",
          "code": "N5182BU-043",
          "name": "升级 3 GHz 至 6 GHz 频率扩频套件",
          "englishName": "Upgrade option N5182BU-043",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-043。"
        },
        {
          "id": "N5182BU-099",
          "code": "N5182BU-099",
          "name": "升级 Baseband ARB 基础波形发生许可证",
          "englishName": "Upgrade option N5182BU-099",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-099。"
        },
        {
          "id": "N5182BU-1EL",
          "code": "N5182BU-1EL",
          "name": "升级差分模拟 I/Q 输出端子套件",
          "englishName": "Upgrade option N5182BU-1EL",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-1EL。"
        },
        {
          "id": "N5182BU-1EQ",
          "code": "N5182BU-1EQ",
          "name": "升级低功率高衰减扩展套件",
          "englishName": "Upgrade option N5182BU-1EQ",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-1EQ。"
        },
        {
          "id": "N5182BU-1ER",
          "code": "N5182BU-1ER",
          "name": "升级灵活参考输入套件",
          "englishName": "Upgrade option N5182BU-1ER",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-1ER。"
        },
        {
          "id": "N5182BU-221",
          "code": "N5182BU-221",
          "name": "升级 5 波形许可证授权包",
          "englishName": "Upgrade option N5182BU-221",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-221。"
        },
        {
          "id": "N5182BU-250",
          "code": "N5182BU-250",
          "name": "升级 50 波形许可证授权包",
          "englishName": "Upgrade option N5182BU-250",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-250。"
        },
        {
          "id": "N5182BU-303",
          "code": "N5182BU-303",
          "name": "升级 3 GHz 矢量频率发生套件",
          "englishName": "Upgrade option N5182BU-303",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-303。"
        },
        {
          "id": "N5182BU-656",
          "code": "N5182BU-656",
          "name": "升级 80 MHz 带宽与 32 MSa 内存套件",
          "englishName": "Upgrade option N5182BU-656",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-656。"
        },
        {
          "id": "N5182BU-FRQ",
          "code": "N5182BU-FRQ",
          "name": "升级快速频率跳变与调谐套件",
          "englishName": "Upgrade option N5182BU-FRQ",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-FRQ。"
        },
        {
          "id": "N5182BU-SD0",
          "code": "N5182BU-SD0",
          "name": "升级安全数据擦除与清空套件",
          "englishName": "Upgrade option N5182BU-SD0",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-SD0。"
        },
        {
          "id": "N5182BU-UNT",
          "code": "N5182BU-UNT",
          "name": "升级 AM/FM/PM 模拟调制套件",
          "englishName": "Upgrade option N5182BU-UNT",
          "category": "Upgrade",
          "priceEstimate": "+$3,200",
          "description": "已购 N5182B 现场升级套件 N5182BU-UNT。"
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择机箱配件、机架与装配套件 (Accessories & Rackmount Kits)",
      "englishTitle": "Accessories & Rackmount Kits",
      "subtitle": "1CN103A、1CM113A、1CP105A、1CR013A 机架安装套件",
      "englishSubtitle": "1CN103A, 1CM113A, 1CP105A, 1CR013A rackmount and slide kits.",
      "type": "multiple",
      "options": [
        {
          "id": "1CM113A",
          "code": "1CM113A",
          "name": "机架安装套件 (Rackmount Flange Kit)",
          "englishName": "Rackmount flange kit",
          "category": "Rackmount",
          "priceEstimate": "+$380",
          "description": "用于标准 19 英寸机架安装法兰套件。",
          "englishDescription": "Rackmount flange kit for 19-inch rack."
        },
        {
          "id": "1CN103A",
          "code": "1CN103A",
          "name": "前面板手柄套件 (Front Handle Kit)",
          "englishName": "Front handle kit",
          "category": "Rackmount",
          "priceEstimate": "+$280",
          "description": "机箱前面板金属提手把套件。",
          "englishDescription": "Front handle kit."
        },
        {
          "id": "1CP105A",
          "code": "1CP105A",
          "name": "带手柄的机架安装套件 (Rackmount Flange & Handle Kit)",
          "englishName": "Rackmount flange and handle kit",
          "category": "Rackmount",
          "priceEstimate": "+$520",
          "description": "同时包含安装法兰与把手的集成套件。",
          "englishDescription": "Rackmount flange and front handle kit."
        },
        {
          "id": "1CR013A",
          "code": "1CR013A",
          "name": "机架滑动导轨套件 (Rackmount Slide Kit)",
          "englishName": "Rackmount slide kit",
          "category": "Rackmount",
          "priceEstimate": "+$680",
          "description": "机架内部抽屉式滑动导轨。",
          "englishDescription": "Rackmount slide kit."
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择校准服务与保修计划 (Add Calibration & Warranty Plans)",
      "englishTitle": "Add Calibration & Warranty Plans",
      "subtitle": "出厂商业校准证书及 5/7/10 年原厂返厂保修与现场服务",
      "englishSubtitle": "Commercial calibration certificate and 5/7/10 years calibration assurance plans.",
      "type": "multiple",
      "options": [
        {
          "id": "N5182B-UK6",
          "code": "N5182B-UK6",
          "name": "带测试数据的商业校准证书 (Commercial Calibration)",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$780",
          "description": "附带 N5182B 工厂全套矢量射频实测数据报告。",
          "englishDescription": "Commercial calibration certificate with factory test data."
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
          "id": "PS-S10",
          "code": "PS-S10",
          "name": "1 天现场安装启动服务 (1-day Startup)",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$1,500",
          "description": "资深 Keysight 工程师提供现场仪表开箱调试指导。",
          "englishDescription": "1-day startup assistance."
        },
        {
          "id": "PS-S20",
          "code": "PS-S20",
          "name": "2 天现场安装启动与操作培训服务",
          "englishName": "Service: 2-day start-up assistance and training",
          "category": "Service",
          "priceEstimate": "+$2,800",
          "description": "2 天现场深度调试与用户培训服务。",
          "englishDescription": "2-day startup assistance and training."
        },
        {
          "id": "PS-X10",
          "code": "PS-X10",
          "name": "高级测量技术咨询服务 (Advanced Consulting Service)",
          "englishName": "Service: Advanced measurement consulting",
          "category": "Service",
          "priceEstimate": "+$3,500",
          "description": "提供复杂信号生成与相干校准技术支持。",
          "englishDescription": "Advanced measurement consulting."
        }
      ]
    }
  ]
};
