// Keysight N5186A Configurator Dataset
export const N5186A_DATA = {
  "id": "N5186A",
  "name": "N5186A MXG Vector Signal Generator",
  "subtitle": "9 kHz to 8.5 GHz Next-Gen Multi-Channel Vector Signal Generator (up to 960 MHz BW)",
  "family": "X-Series Vector Signal Generators (MXG)",
  "docNumber": "5992-1262 / N5186A",
  "description": "The Keysight N5186A MXG is Keysight's premier next-generation multi-channel vector signal generator, offering 1 to 4 phase-coherent RF channels in a single compact 2U chassis, up to 960 MHz modulation bandwidth, ultra-low phase noise, and up to +25 dBm output power for 5G NR FR1, Wi-Fi 7, and MIMO testing.",
  "baseSpecs": {
    "frequencyRange": "9 kHz to 3 / 6 / 8.5 GHz",
    "rfChannels": "1, 2, 3, or 4 Independent Phase-Coherent RF Channels (Options 001/002/003/004)",
    "maxModBandwidth": "Up to 960 MHz RF Modulation Bandwidth per channel (Option R10)",
    "phaseNoise": "Ultra-low phase noise down to -140 dBc/Hz @ 1 GHz (10 kHz offset, Option EP4)",
    "maxOutputPower": "High output power up to +25 dBm (Option 1EA)",
    "arbMemory": "Up to 2 GSamples ARB Waveform Memory (Option M20)"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of RF Channels - Required Option)",
      "englishTitle": "Select Number of RF Channels",
      "subtitle": "单机支持 1 至 4 个独立相干 RF 发射通道（必选选件）",
      "englishSubtitle": "Required option. Select 1, 2, 3, or 4 independent RF channels in 2U chassis.",
      "type": "single",
      "options": [
        {
          "id": "N5186A-001",
          "code": "N5186A-001",
          "name": "单通道矢量信号输出 (Single-Channel RF Output)",
          "englishName": "Single-channel RF output",
          "category": "Channels",
          "priceEstimate": "$32,500",
          "description": "提供 1 路独立 RF 矢量信号发生器输出。",
          "englishDescription": "Provides 1 independent RF vector signal generator output."
        },
        {
          "id": "N5186A-002",
          "code": "N5186A-002",
          "name": "双通道相干矢量信号输出 (Dual-Channel RF Output)",
          "englishName": "Dual-channel RF output",
          "category": "Channels",
          "priceEstimate": "$52,000",
          "description": "单机集成 2 路独立相位相干 RF 矢量信号发生器输出，完美支持 2x2 MIMO 与天线阵列。",
          "englishDescription": "Provides 2 independent phase-coherent RF channels in one chassis."
        },
        {
          "id": "N5186A-003",
          "code": "N5186A-003",
          "name": "三通道相干矢量信号输出 (3-Channel RF Output)",
          "englishName": "3-channel RF output",
          "category": "Channels",
          "priceEstimate": "$69,500",
          "description": "单机集成 3 路独立相位相干 RF 矢量信号发生器输出。",
          "englishDescription": "Provides 3 independent phase-coherent RF channels in one chassis."
        },
        {
          "id": "N5186A-004",
          "code": "N5186A-004",
          "name": "四通道相干矢量信号输出 (4-Channel RF Output)",
          "englishName": "4-channel RF output",
          "category": "Channels",
          "priceEstimate": "$85,000",
          "description": "单机集成 4 路独立相位相干 RF 矢量信号发生器输出，轻松实现 4x4 MIMO 与波束赋形测试。",
          "englishDescription": "Provides 4 independent phase-coherent RF channels for 4x4 MIMO."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择最高工作频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Maximum Frequency Range",
      "subtitle": "频率覆盖从 9 kHz 至 3 GHz、6 GHz 或 8.5 GHz（必选选件）",
      "englishSubtitle": "Required option. Frequency range from 9 kHz up to 8.5 GHz.",
      "type": "single",
      "options": [
        {
          "id": "N5186A-503",
          "code": "N5186A-503",
          "name": "频率范围 9 kHz 至 3 GHz",
          "englishName": "Frequency range, 9 kHz to 3 GHz",
          "category": "Frequency",
          "priceEstimate": "$12,500",
          "freqMaxGHz": 3.0,
          "description": "覆盖 3 GHz 以下传统蜂窝通信与无线音视频频段。",
          "englishDescription": "Covers frequency range up to 3 GHz."
        },
        {
          "id": "N5186A-506",
          "code": "N5186A-506",
          "name": "频率范围 9 kHz 至 6 GHz",
          "englishName": "Frequency range, 9 kHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "$19,800",
          "freqMaxGHz": 6.0,
          "description": "覆盖 5G NR Sub-6GHz、LTE 与 Wi-Fi 6 常用无线频段。",
          "englishDescription": "Covers Sub-6GHz frequency range up to 6 GHz."
        },
        {
          "id": "N5186A-508",
          "code": "N5186A-508",
          "name": "频率范围 9 kHz 至 8.5 GHz",
          "englishName": "Frequency range, 9 kHz to 8.5 GHz",
          "category": "Frequency",
          "priceEstimate": "+$26,500",
          "freqMaxGHz": 8.5,
          "description": "MXG 旗舰覆盖至 8.5 GHz，完整覆盖 Wi-Fi 7 (U-NII-1 至 U-NII-8) 完整频段。",
          "englishDescription": "Full frequency coverage up to 8.5 GHz for Wi-Fi 7."
        },
        {
          "id": "N5186A-V08",
          "code": "N5186A-V08",
          "name": "矢量扩展频率范围 9 kHz 至 8.5 GHz",
          "englishName": "Vector frequency extension, 9 kHz to 8.5 GHz",
          "category": "Frequency",
          "priceEstimate": "+$28,000",
          "freqMaxGHz": 8.5,
          "description": "矢量射频信号扩展至 8.5 GHz 高品质输出。",
          "englishDescription": "Vector RF frequency extension up to 8.5 GHz."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择矢量调制带宽 (Select Modulation Bandwidth)",
      "englishTitle": "Select Modulation Bandwidth",
      "subtitle": "提供高达 960 MHz RF 矢量调制带宽 (Option R10)",
      "englishSubtitle": "Provides up to 960 MHz RF modulation bandwidth per channel.",
      "type": "single",
      "options": [
        {
          "id": "N5186A-B2X",
          "code": "N5186A-B2X",
          "name": "200 MHz 矢量调制带宽 (200 MHz Bandwidth)",
          "englishName": "200 MHz RF modulation bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "Standard",
          "isStandard": true,
          "bandwidthMHz": 200,
          "description": "N5186A 标配 200 MHz RF 矢量调制带宽。",
          "englishDescription": "Standard 200 MHz RF modulation bandwidth."
        },
        {
          "id": "N5186A-B5X",
          "code": "N5186A-B5X",
          "name": "510 MHz 矢量调制带宽 (510 MHz Bandwidth)",
          "englishName": "510 MHz RF modulation bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$16,500",
          "bandwidthMHz": 510,
          "description": "扩展调制带宽至 510 MHz，轻松满足多载波 5G NR 与 Wi-Fi 6E/7 测试。",
          "englishDescription": "Extends RF modulation bandwidth to 510 MHz."
        },
        {
          "id": "N5186A-R10",
          "code": "N5186A-R10",
          "name": "960 MHz 极致超宽矢量调制带宽 (960 MHz Ultra-Wideband)",
          "englishName": "960 MHz ultra-wide RF modulation bandwidth",
          "category": "Bandwidth",
          "priceEstimate": "+$28,500",
          "bandwidthMHz": 960,
          "description": "MXG 旗舰 960 MHz 极致超宽 RF 矢量调制带宽，支持多载波聚合与宽带脉冲。",
          "englishDescription": "MXG flagship 960 MHz ultra-wide RF modulation bandwidth."
        },
        {
          "id": "N5186A-CW1",
          "code": "N5186A-CW1",
          "name": "纯 CW 连续波信号发生选件 (CW Signal Generator Mode)",
          "englishName": "CW signal generator mode",
          "category": "Bandwidth",
          "priceEstimate": "-$3,500",
          "description": "纯连续波 (CW) 信号发生模式（不含矢量 Baseband ARB 调制器）。",
          "englishDescription": "CW-only mode without ARB vector baseband generator."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择相位噪声与输出功率 (Phase Noise & Output Power)",
      "englishTitle": "Phase Noise & Output Power",
      "subtitle": "极致低相位噪声选件 EP4 (-140 dBc/Hz) 及 +25 dBm 高输出功率 1EA",
      "englishSubtitle": "Ultra-low phase noise (EP4) and high output power up to +25 dBm (1EA).",
      "type": "multiple",
      "options": [
        {
          "id": "N5186A-EP3",
          "code": "N5186A-EP3",
          "name": "低相位噪声性能 (Low Phase Noise)",
          "englishName": "Low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$4,800",
          "description": "提供优质低相噪性能，满足常规模组测试。",
          "englishDescription": "Low phase noise performance."
        },
        {
          "id": "N5186A-EP4",
          "code": "N5186A-EP4",
          "name": "极致超低相位噪声性能 (Ultra-Low Phase Noise)",
          "englishName": "Ultra-low phase noise",
          "category": "Phase Noise",
          "priceEstimate": "+$9,500",
          "description": "1 GHz 下 20 kHz 偏移低至 -140 dBc/Hz，极致纯净度改善高阶 QAM EVM。",
          "englishDescription": "Ultra-low phase noise down to -140 dBc/Hz @ 1 GHz."
        },
        {
          "id": "N5186A-1EA",
          "code": "N5186A-1EA",
          "name": "高输出功率选件 (High Output Power up to +25 dBm)",
          "englishName": "High output power",
          "category": "Power",
          "priceEstimate": "+$5,200",
          "description": "提升矢量信号发生器输出功率至 +25 dBm，轻松驱动高大功率放大器大信号测试。",
          "englishDescription": "Increases output power up to +25 dBm."
        },
        {
          "id": "N5186A-1EM",
          "code": "N5186A-1EM",
          "name": "后面板 RF 输出接口 (Rear Panel RF Output)",
          "englishName": "Move RF output to rear panel",
          "category": "Routing",
          "priceEstimate": "+$850",
          "description": "将 RF 矢量信号输出端子移至机箱后面板，便于系统集成搭积木。",
          "englishDescription": "Moves RF output connectors to rear panel."
        },
        {
          "id": "N5186A-1EQ",
          "code": "N5186A-1EQ",
          "name": "低功率高衰减范围控制 (Low Power Attenuation)",
          "englishName": "Low power attenuation range",
          "category": "Power",
          "priceEstimate": "+$1,200",
          "description": "扩展低功率输出动态范围至 -130 dBm。",
          "englishDescription": "Extends low power output range down to -130 dBm."
        },
        {
          "id": "N5186A-1ER",
          "code": "N5186A-1ER",
          "name": "灵活 RF 输出路由切换 (Flexible RF Routing)",
          "englishName": "Flexible RF output routing",
          "category": "Routing",
          "priceEstimate": "+$1,800",
          "description": "内部逻辑可编程 RF 通道切换路由。",
          "englishDescription": "Flexible internal RF output routing."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择 ARB 基带波形存储器 (Select Baseband ARB Waveform Memory)",
      "englishTitle": "Select Baseband ARB Waveform Memory",
      "subtitle": "从 512 MSamples 扩展至 2 GSamples 深度波形存储器 (Option M20)",
      "englishSubtitle": "Deep ARB waveform memory from 512 MSamples up to 2 GSamples.",
      "type": "single",
      "options": [
        {
          "id": "N5186A-M05",
          "code": "N5186A-M05",
          "name": "512 MSamples ARB 波形存储器 (512 MSamples Memory)",
          "englishName": "512 MSamples ARB waveform memory",
          "category": "Memory",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标配 512 MSamples 基带 ARB 波形播放内存。",
          "englishDescription": "Standard 512 MSamples ARB waveform memory."
        },
        {
          "id": "N5186A-M10",
          "code": "N5186A-M10",
          "name": "1 GSample ARB 波形存储器 (1 GSample Memory)",
          "englishName": "1 GSample ARB waveform memory",
          "category": "Memory",
          "priceEstimate": "+$4,500",
          "description": "扩展内存至 1 GSample，支持更复杂多波形长序列播放。",
          "englishDescription": "Extends ARB waveform memory to 1 GSample."
        },
        {
          "id": "N5186A-M20",
          "code": "N5186A-M20",
          "name": "2 GSamples 深度 ARB 波形存储器 (2 GSamples Ultra Deep Memory)",
          "englishName": "2 GSamples ARB waveform memory",
          "category": "Memory",
          "priceEstimate": "+$8,500",
          "description": "MXG 旗舰 2 GSamples 深度波形存储器，无缝播放长时段复杂 5G / 雷达脉冲流。",
          "englishDescription": "2 GSamples ultra-deep ARB waveform memory."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择模拟调制、脉冲调制与多机相干同步 (Analog Mod, Pulse & Phase Coherence)",
      "englishTitle": "Analog Mod, Pulse & Phase Coherence",
      "subtitle": "AM/FM/PM 模拟调制、精密脉冲调制 PMR、本振同步 PCH 与多机触发 SNC",
      "englishSubtitle": "Analog modulation, pulse modulation, phase-coherent LO routing, and sync.",
      "type": "multiple",
      "options": [
        {
          "id": "N5186A-UNT",
          "code": "N5186A-UNT",
          "name": "AM, FM, 相位调制 PM 选件 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, Phase Modulation",
          "category": "Modulation",
          "priceEstimate": "+$2,800",
          "description": "模拟调幅、调频及调相功能。",
          "englishDescription": "Analog AM, FM, and phase modulation."
        },
        {
          "id": "N5186A-PMR",
          "code": "N5186A-PMR",
          "name": "精密窄脉冲调制器 (Precision Pulse Modulation)",
          "englishName": "Precision pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,200",
          "description": "产生前沿极窄的高品质雷达脉冲调制信号。",
          "englishDescription": "Precision pulse modulation for radar testing."
        },
        {
          "id": "N5186A-PCH",
          "code": "N5186A-PCH",
          "name": "本振 LO 相位相干路由输出接口 (Phase-Coherent LO Routing)",
          "englishName": "Phase-coherent LO routing",
          "category": "Coherence",
          "priceEstimate": "+$5,800",
          "description": "共享本振 LO 信号至多台矢量发讯机，实现高精度相位相干 MIMO 阵列。",
          "englishDescription": "Shares LO signal across multiple units for phase coherence."
        },
        {
          "id": "N5186A-SNC",
          "code": "N5186A-SNC",
          "name": "多机精密时间触发同步控制 (Synchronized Multi-Unit Triggering)",
          "englishName": "Synchronized multi-unit triggering",
          "category": "Coherence",
          "priceEstimate": "+$3,200",
          "description": "多台发讯机间纳秒级触发帧同步。",
          "englishDescription": "Nanosecond-level multi-unit trigger synchronization."
        },
        {
          "id": "N5186A-UNV",
          "code": "N5186A-UNV",
          "name": "增强动态范围控制选件 (Enhanced Dynamic Range)",
          "englishName": "Enhanced dynamic range",
          "category": "Performance",
          "priceEstimate": "+$2,500",
          "description": "优化输出射频信号信噪比与邻道功率比。",
          "englishDescription": "Enhances signal dynamic range and ACPR."
        },
        {
          "id": "N5186A-UNZ",
          "code": "N5186A-UNZ",
          "name": "快速频率切换与快速调谐 (Fast Frequency Tuning)",
          "englishName": "Fast frequency tuning",
          "category": "Performance",
          "priceEstimate": "+$3,800",
          "description": "大幅缩短频率与功率点盲跳切换时间，提升自动化产线测试速度。",
          "englishDescription": "Fast frequency and power switching for automated test."
        },
        {
          "id": "N5186A-099",
          "code": "N5186A-099",
          "name": "Baseband ARB 基础波形发生器许可证",
          "englishName": "Baseband ARB generator license",
          "category": "Baseband",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "允许加载并播放自定义 ARB IQ 波形文件。",
          "englishDescription": "Baseband ARB waveform generator license."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择 Signal Studio 5G NR 与 Wi-Fi 7 信号生成应用软件 (5G NR & Wi-Fi 7 Signal Studio)",
      "englishTitle": "5G NR & Wi-Fi 7 Signal Studio",
      "subtitle": "Signal Studio 标准 5G NR (N7608EMBC) 与 Wi-Fi 7 (N7617EMBC) 矢量波形生成",
      "englishSubtitle": "Signal Studio 5G NR, WLAN Wi-Fi 7 802.11be, and LTE waveform creation.",
      "type": "multiple",
      "options": [
        {
          "id": "N7608EMBC",
          "code": "N7608EMBC",
          "name": "Signal Studio 5G NR 矢量信号生成软件",
          "englishName": "Signal Studio for 5G NR waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "生成符合 3GPP 5G NR Sub-6GHz 标准的高品质测试波形。",
          "englishDescription": "Generates 3GPP compliant 5G NR test waveforms."
        },
        {
          "id": "N7617EMBC",
          "code": "N7617EMBC",
          "name": "Signal Studio WLAN 802.11a/b/g/n/ac/ax/be (Wi-Fi 7) 信号生成软件",
          "englishName": "Signal Studio for WLAN Wi-Fi 7 waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$7,800",
          "supportsLicense": true,
          "description": "生成 Wi-Fi 7 (802.11be) 320MHz 4096QAM 标准测试波形。",
          "englishDescription": "Generates WLAN 802.11be Wi-Fi 7 320MHz test waveforms."
        },
        {
          "id": "N7624EMBC",
          "code": "N7624EMBC",
          "name": "Signal Studio LTE/LTE-Advanced 信号生成软件",
          "englishName": "Signal Studio for LTE/LTE-A waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "生成符合 3GPP LTE FDD/TDD 载波聚合标准测试信号。",
          "englishDescription": "Generates 3GPP LTE/LTE-A test waveforms."
        },
        {
          "id": "N7610EMBC",
          "code": "N7610EMBC",
          "name": "Signal Studio 短距离通信与物联网 (Bluetooth/ZigBee) 信号生成软件",
          "englishName": "Signal Studio for Short Range & IoT",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "生成蓝牙 5、ZigBee 及 UWB 标准波形。",
          "englishDescription": "Generates Bluetooth 5 and IoT test waveforms."
        },
        {
          "id": "N7640EMBC",
          "code": "N7640EMBC",
          "name": "Signal Studio V2X 车联网信号生成软件",
          "englishName": "Signal Studio for V2X waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "生成 C-V2X 车联网标准测试信号。",
          "englishDescription": "Generates V2X test waveforms."
        },
        {
          "id": "N7632EMBC",
          "code": "N7632EMBC",
          "name": "Signal Studio UWB 超宽带信号生成软件",
          "englishName": "Signal Studio for UWB waveform creation",
          "category": "Signal Studio",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "生成 IEEE 802.15.4z UWB 定位测试信号。",
          "englishDescription": "Generates UWB 802.15.4z test waveforms."
        }
      ]
    },
    {
      "id": "step8",
      "stepNumber": 8,
      "title": "选择 Signal Studio 蜂窝 2G/3G 与雷达脉冲信号生成软件 (Cellular & Radar Signal Studio)",
      "englishTitle": "Cellular & Radar Signal Studio",
      "subtitle": "Signal Studio 脉冲构建 (N7620EMBC)、Custom IQ (N7631EMBC) 及蜂窝 2G/3G 选件",
      "englishSubtitle": "Signal Studio for Pulse Building, Custom IQ, and legacy cellular.",
      "type": "multiple",
      "options": [
        {
          "id": "N7620EMBC",
          "code": "N7620EMBC",
          "name": "Signal Studio 雷达脉冲生成与构建软件 (Pulse Building)",
          "englishName": "Signal Studio for Pulse Building",
          "category": "Signal Studio",
          "priceEstimate": "+$6,500",
          "supportsLicense": true,
          "description": "构建复杂雷达脉冲群、线性调频 Chirp 与相干脉冲列。",
          "englishDescription": "Generates complex radar pulse patterns and chirps."
        },
        {
          "id": "N7631EMBC",
          "code": "N7631EMBC",
          "name": "Signal Studio Custom IQ 自定义数字调制信号生成软件",
          "englishName": "Signal Studio for Custom IQ",
          "category": "Signal Studio",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "灵活自定义任意星座图与 IQ 映射测试信号。",
          "englishDescription": "Generates custom IQ constellation waveforms."
        },
        {
          "id": "N7600EMBC",
          "code": "N7600EMBC",
          "name": "Signal Studio W-CDMA/HSPA+ 信号生成软件",
          "englishName": "Signal Studio for W-CDMA/HSPA+",
          "category": "Signal Studio",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "3G W-CDMA 标准信号生成。",
          "englishDescription": "Generates W-CDMA/HSPA+ test signals."
        },
        {
          "id": "N7601EMBC",
          "code": "N7601EMBC",
          "name": "Signal Studio GSM/EDGE 信号生成软件",
          "englishName": "Signal Studio for GSM/EDGE",
          "category": "Signal Studio",
          "priceEstimate": "+$3,200",
          "supportsLicense": true,
          "description": "2G GSM/EDGE 标准信号生成。",
          "englishDescription": "Generates GSM/EDGE test signals."
        },
        {
          "id": "N7607EMBC",
          "code": "N7607EMBC",
          "name": "Signal Studio DFS 动态频率选择雷达信号生成软件",
          "englishName": "Signal Studio for DFS radar profile",
          "category": "Signal Studio",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "生成符合 FCC/ETSI 规范的 DFS 雷达模版。",
          "englishDescription": "Generates DFS radar profile signals."
        },
        {
          "id": "N7650B",
          "code": "N7650B",
          "name": "PathWave Signal Studio 预制波形许可证授权包 (Waveform License Packs)",
          "englishName": "Waveform license packs (Option 221-229 for 5-pack; Option 250-259 for 50-pack)",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "PathWave Signal Studio 预制波形许可证授权包（Option 221-229 对应 5 波形包；Option 250-259 对应 50 波形包），允许灵活永久加载专有通信与雷达测试波形。",
          "englishDescription": "Waveform license packs (Option 221-229 for 5-pack; Option 250-259 for 50-pack) for loading pre-encrypted PathWave Signal Studio waveforms."
        },
        {
          "id": "N6171A",
          "code": "N6171A",
          "name": "MATLAB 嵌入式计算与信号处理软件 (PC Standalone Use)",
          "englishName": "MATLAB software for standalone PC use",
          "category": "Signal Studio",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "配合 N5186A 矢量发讯机进行独立 PC MATLAB IQ 波形生成与信号算法处理。"
        }
      ]
    },
    {
      "id": "step9",
      "stepNumber": 9,
      "title": "选择硬件扩展升级选件 (Upgrade Options - N5186AU)",
      "englishTitle": "Upgrade Options - N5186AU",
      "subtitle": "已购 N5186A 仪表的现场硬件与带宽扩展升级选件套件",
      "englishSubtitle": "Field upgrade options for existing N5186A units.",
      "type": "multiple",
      "options": [
        {
          "id": "N5186AU-PCH",
          "code": "N5186AU-PCH",
          "name": "升级本振 LO 相位相干接口套件",
          "englishName": "Upgrade phase-coherent LO routing",
          "category": "Upgrade",
          "priceEstimate": "+$6,500",
          "description": "升级增加 LO 相位相干输出端口。",
          "englishDescription": "Upgrades phase-coherent LO routing capability."
        },
        {
          "id": "N5186AU-SNC",
          "code": "N5186AU-SNC",
          "name": "升级多机同步控制套件",
          "englishName": "Upgrade multi-unit sync",
          "category": "Upgrade",
          "priceEstimate": "+$3,800",
          "description": "升级增加多机触发同步功能。",
          "englishDescription": "Upgrades multi-unit synchronization option."
        },
        {
          "id": "N5186AU-7AB",
          "code": "N5186AU-7AB",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7AB",
          "englishName": "Field software upgrade option N5186AU-7AB",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7AB。"
        },
        {
          "id": "N5186AU-7AC",
          "code": "N5186AU-7AC",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7AC",
          "englishName": "Field software upgrade option N5186AU-7AC",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7AC。"
        },
        {
          "id": "N5186AU-7AK",
          "code": "N5186AU-7AK",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7AK",
          "englishName": "Field software upgrade option N5186AU-7AK",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7AK。"
        },
        {
          "id": "N5186AU-7BD",
          "code": "N5186AU-7BD",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BD",
          "englishName": "Field software upgrade option N5186AU-7BD",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BD。"
        },
        {
          "id": "N5186AU-7BE",
          "code": "N5186AU-7BE",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BE",
          "englishName": "Field software upgrade option N5186AU-7BE",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BE。"
        },
        {
          "id": "N5186AU-7BF",
          "code": "N5186AU-7BF",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BF",
          "englishName": "Field software upgrade option N5186AU-7BF",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BF。"
        },
        {
          "id": "N5186AU-7BK",
          "code": "N5186AU-7BK",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BK",
          "englishName": "Field software upgrade option N5186AU-7BK",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BK。"
        },
        {
          "id": "N5186AU-7BL",
          "code": "N5186AU-7BL",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BL",
          "englishName": "Field software upgrade option N5186AU-7BL",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BL。"
        },
        {
          "id": "N5186AU-7BN",
          "code": "N5186AU-7BN",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BN",
          "englishName": "Field software upgrade option N5186AU-7BN",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BN。"
        },
        {
          "id": "N5186AU-7BR",
          "code": "N5186AU-7BR",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BR",
          "englishName": "Field software upgrade option N5186AU-7BR",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BR。"
        },
        {
          "id": "N5186AU-7BS",
          "code": "N5186AU-7BS",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BS",
          "englishName": "Field software upgrade option N5186AU-7BS",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BS。"
        },
        {
          "id": "N5186AU-7BY",
          "code": "N5186AU-7BY",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7BY",
          "englishName": "Field software upgrade option N5186AU-7BY",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7BY。"
        },
        {
          "id": "N5186AU-7CE",
          "code": "N5186AU-7CE",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CE",
          "englishName": "Field software upgrade option N5186AU-7CE",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CE。"
        },
        {
          "id": "N5186AU-7CK",
          "code": "N5186AU-7CK",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CK",
          "englishName": "Field software upgrade option N5186AU-7CK",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CK。"
        },
        {
          "id": "N5186AU-7CL",
          "code": "N5186AU-7CL",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CL",
          "englishName": "Field software upgrade option N5186AU-7CL",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CL。"
        },
        {
          "id": "N5186AU-7CM",
          "code": "N5186AU-7CM",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CM",
          "englishName": "Field software upgrade option N5186AU-7CM",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CM。"
        },
        {
          "id": "N5186AU-7CN",
          "code": "N5186AU-7CN",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CN",
          "englishName": "Field software upgrade option N5186AU-7CN",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CN。"
        },
        {
          "id": "N5186AU-7CP",
          "code": "N5186AU-7CP",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CP",
          "englishName": "Field software upgrade option N5186AU-7CP",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CP。"
        },
        {
          "id": "N5186AU-7CS",
          "code": "N5186AU-7CS",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CS",
          "englishName": "Field software upgrade option N5186AU-7CS",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CS。"
        },
        {
          "id": "N5186AU-7CT",
          "code": "N5186AU-7CT",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7CT",
          "englishName": "Field software upgrade option N5186AU-7CT",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7CT。"
        },
        {
          "id": "N5186AU-7DA",
          "code": "N5186AU-7DA",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7DA",
          "englishName": "Field software upgrade option N5186AU-7DA",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7DA。"
        },
        {
          "id": "N5186AU-7DU",
          "code": "N5186AU-7DU",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7DU",
          "englishName": "Field software upgrade option N5186AU-7DU",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7DU。"
        },
        {
          "id": "N5186AU-7DV",
          "code": "N5186AU-7DV",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7DV",
          "englishName": "Field software upgrade option N5186AU-7DV",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7DV。"
        },
        {
          "id": "N5186AU-7DW",
          "code": "N5186AU-7DW",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7DW",
          "englishName": "Field software upgrade option N5186AU-7DW",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7DW。"
        },
        {
          "id": "N5186AU-7EA",
          "code": "N5186AU-7EA",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EA",
          "englishName": "Field software upgrade option N5186AU-7EA",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EA。"
        },
        {
          "id": "N5186AU-7EB",
          "code": "N5186AU-7EB",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EB",
          "englishName": "Field software upgrade option N5186AU-7EB",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EB。"
        },
        {
          "id": "N5186AU-7ED",
          "code": "N5186AU-7ED",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7ED",
          "englishName": "Field software upgrade option N5186AU-7ED",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7ED。"
        },
        {
          "id": "N5186AU-7EE",
          "code": "N5186AU-7EE",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EE",
          "englishName": "Field software upgrade option N5186AU-7EE",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EE。"
        },
        {
          "id": "N5186AU-7EF",
          "code": "N5186AU-7EF",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EF",
          "englishName": "Field software upgrade option N5186AU-7EF",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EF。"
        },
        {
          "id": "N5186AU-7EG",
          "code": "N5186AU-7EG",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EG",
          "englishName": "Field software upgrade option N5186AU-7EG",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EG。"
        },
        {
          "id": "N5186AU-7EH",
          "code": "N5186AU-7EH",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EH",
          "englishName": "Field software upgrade option N5186AU-7EH",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EH。"
        },
        {
          "id": "N5186AU-7EP",
          "code": "N5186AU-7EP",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EP",
          "englishName": "Field software upgrade option N5186AU-7EP",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EP。"
        },
        {
          "id": "N5186AU-7EV",
          "code": "N5186AU-7EV",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EV",
          "englishName": "Field software upgrade option N5186AU-7EV",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EV。"
        },
        {
          "id": "N5186AU-7EZ",
          "code": "N5186AU-7EZ",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7EZ",
          "englishName": "Field software upgrade option N5186AU-7EZ",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7EZ。"
        },
        {
          "id": "N5186AU-7FA",
          "code": "N5186AU-7FA",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7FA",
          "englishName": "Field software upgrade option N5186AU-7FA",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7FA。"
        },
        {
          "id": "N5186AU-7FC",
          "code": "N5186AU-7FC",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7FC",
          "englishName": "Field software upgrade option N5186AU-7FC",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7FC。"
        },
        {
          "id": "N5186AU-7FD",
          "code": "N5186AU-7FD",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7FD",
          "englishName": "Field software upgrade option N5186AU-7FD",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7FD。"
        },
        {
          "id": "N5186AU-7FE",
          "code": "N5186AU-7FE",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7FE",
          "englishName": "Field software upgrade option N5186AU-7FE",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7FE。"
        },
        {
          "id": "N5186AU-7GW",
          "code": "N5186AU-7GW",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7GW",
          "englishName": "Field software upgrade option N5186AU-7GW",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7GW。"
        },
        {
          "id": "N5186AU-7HL",
          "code": "N5186AU-7HL",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HL",
          "englishName": "Field software upgrade option N5186AU-7HL",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HL。"
        },
        {
          "id": "N5186AU-7HR",
          "code": "N5186AU-7HR",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HR",
          "englishName": "Field software upgrade option N5186AU-7HR",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HR。"
        },
        {
          "id": "N5186AU-7HT",
          "code": "N5186AU-7HT",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HT",
          "englishName": "Field software upgrade option N5186AU-7HT",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HT。"
        },
        {
          "id": "N5186AU-7HU",
          "code": "N5186AU-7HU",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HU",
          "englishName": "Field software upgrade option N5186AU-7HU",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HU。"
        },
        {
          "id": "N5186AU-7HV",
          "code": "N5186AU-7HV",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HV",
          "englishName": "Field software upgrade option N5186AU-7HV",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HV。"
        },
        {
          "id": "N5186AU-7HY",
          "code": "N5186AU-7HY",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HY",
          "englishName": "Field software upgrade option N5186AU-7HY",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HY。"
        },
        {
          "id": "N5186AU-7HZ",
          "code": "N5186AU-7HZ",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7HZ",
          "englishName": "Field software upgrade option N5186AU-7HZ",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7HZ。"
        },
        {
          "id": "N5186AU-7JG",
          "code": "N5186AU-7JG",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7JG",
          "englishName": "Field software upgrade option N5186AU-7JG",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7JG。"
        },
        {
          "id": "N5186AU-7KA",
          "code": "N5186AU-7KA",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KA",
          "englishName": "Field software upgrade option N5186AU-7KA",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KA。"
        },
        {
          "id": "N5186AU-7KB",
          "code": "N5186AU-7KB",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KB",
          "englishName": "Field software upgrade option N5186AU-7KB",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KB。"
        },
        {
          "id": "N5186AU-7KC",
          "code": "N5186AU-7KC",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KC",
          "englishName": "Field software upgrade option N5186AU-7KC",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KC。"
        },
        {
          "id": "N5186AU-7KF",
          "code": "N5186AU-7KF",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KF",
          "englishName": "Field software upgrade option N5186AU-7KF",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KF。"
        },
        {
          "id": "N5186AU-7KG",
          "code": "N5186AU-7KG",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KG",
          "englishName": "Field software upgrade option N5186AU-7KG",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KG。"
        },
        {
          "id": "N5186AU-7KH",
          "code": "N5186AU-7KH",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KH",
          "englishName": "Field software upgrade option N5186AU-7KH",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KH。"
        },
        {
          "id": "N5186AU-7KK",
          "code": "N5186AU-7KK",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KK",
          "englishName": "Field software upgrade option N5186AU-7KK",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KK。"
        },
        {
          "id": "N5186AU-7KN",
          "code": "N5186AU-7KN",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KN",
          "englishName": "Field software upgrade option N5186AU-7KN",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KN。"
        },
        {
          "id": "N5186AU-7KP",
          "code": "N5186AU-7KP",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KP",
          "englishName": "Field software upgrade option N5186AU-7KP",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KP。"
        },
        {
          "id": "N5186AU-7KV",
          "code": "N5186AU-7KV",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7KV",
          "englishName": "Field software upgrade option N5186AU-7KV",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7KV。"
        },
        {
          "id": "N5186AU-7MB",
          "code": "N5186AU-7MB",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7MB",
          "englishName": "Field software upgrade option N5186AU-7MB",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7MB。"
        },
        {
          "id": "N5186AU-7MF",
          "code": "N5186AU-7MF",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7MF",
          "englishName": "Field software upgrade option N5186AU-7MF",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7MF。"
        },
        {
          "id": "N5186AU-7MG",
          "code": "N5186AU-7MG",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7MG",
          "englishName": "Field software upgrade option N5186AU-7MG",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7MG。"
        },
        {
          "id": "N5186AU-7MJ",
          "code": "N5186AU-7MJ",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7MJ",
          "englishName": "Field software upgrade option N5186AU-7MJ",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7MJ。"
        },
        {
          "id": "N5186AU-7MK",
          "code": "N5186AU-7MK",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7MK",
          "englishName": "Field software upgrade option N5186AU-7MK",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7MK。"
        },
        {
          "id": "N5186AU-7ML",
          "code": "N5186AU-7ML",
          "name": "Signal Studio / N5186A 现场软件升级选件 N5186AU-7ML",
          "englishName": "Field software upgrade option N5186AU-7ML",
          "category": "Upgrade",
          "priceEstimate": "+$3,500",
          "supportsLicense": true,
          "description": "已购 N5186A 现场应用软件与 Signal Studio 许可证升级套件 N5186AU-7ML。"
        }
      ]
    },
    {
      "id": "step10",
      "stepNumber": 10,
      "title": "选择校准服务与保修计划 (Add Calibration & Warranty Plans)",
      "englishTitle": "Add Calibration & Warranty Plans",
      "subtitle": "出厂商业校准证书及 3/5 年原厂返厂保修与现场服务",
      "englishSubtitle": "Commercial calibration certificate and 3/5 years calibration assurance plans.",
      "type": "multiple",
      "options": [
        {
          "id": "PS-S20",
          "code": "PS-S20",
          "name": "1 天现场安装启动与操作培训服务 (1-day Startup)",
          "englishName": "Service: 1-day start-up assistance",
          "category": "Service",
          "priceEstimate": "+$1,800",
          "description": "资深 Keysight 工程师提供现场 N5186A 仪表开箱调试指导培训。",
          "englishDescription": "1-day startup assistance and user training."
        },
        {
          "id": "PS-X10",
          "code": "PS-X10",
          "name": "高级测量技术咨询服务 (Advanced Consulting Service)",
          "englishName": "Service: Advanced measurement consulting",
          "category": "Service",
          "priceEstimate": "+$3,500",
          "description": "提供复杂 MIMO 与多通道相位校准技术支持。",
          "englishDescription": "Advanced measurement consulting and MIMO calibration."
        }
      ]
    }
  ]
};
