// Keysight AP5042A G3 Vector Signal Generator Dataset
export const AP5042A_DATA = {
  "id": "AP5042A",
  "name": "AP5042A G3 Vector Signal Generator",
  "subtitle": "100 kHz to 4 / 6 / 12 / 20 / 40 GHz Multi-Channel (1 to 4 Channels) Vector Signal Generator",
  "family": "G3 Series Vector Signal Generators",
  "docNumber": "AP5042A-CONFIG / Keysight",
  "description": "The Keysight AP5042A is a high-density multi-channel vector signal generator offering 1, 2, 3, or 4 independent phase-coherent channels up to 40 GHz, ultra-low close-in phase noise, mechanical/electronic step attenuators, fast frequency switching, AWGN, FCP external IQ / PDW streaming, avionics modulation, and extensive Signal Studio software support in a compact form factor.",
  "baseSpecs": {
    "display": "Compact multi-channel benchtop / ATE modular form factor",
    "frequencyRange": "100 kHz to 4 / 6 / 12 / 20 / 40 GHz",
    "rfChannels": "1, 2, 3, or 4 Independent Phase-Coherent Channels (001, 002, 003, 004)",
    "outputPower": "Calibrated output power with electronic or mechanical step attenuators",
    "phaseNoise": "Ultra-low close-in phase noise (Option LN1/LN2)",
    "vectorFeatures": "AWGN, Fast Control Port (FCP), PDW streaming, phase calibratable mode",
    "connectivity": "USB, LAN, flexible reference input (1ER), GPIB, and micro-SD storage"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择通道数量 (Select Number of Channels - Required Option)",
      "englishTitle": "Select Number of Channels",
      "subtitle": "出厂必选通道 1 (001)，可选配增加通道 2、通道 3 及通道 4 实现多通道输出",
      "englishSubtitle": "Required option. Select 1, 2, 3, or 4 independent RF channels.",
      "type": "single",
      "options": [
        {
          "id": "AP5042A-001",
          "code": "AP5042A-001",
          "name": "通道 1 硬件模块 (Channel 1 - Mandatory)",
          "englishName": "Add channel one",
          "category": "Channels",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "出厂必选包含通道 1 硬件输出。",
          "englishDescription": "Add channel one. Required for all configurations."
        },
        {
          "id": "AP5042A-002",
          "code": "AP5042A-002",
          "name": "增加通道 2 硬件模块 (Add Channel Two - Dual Channel)",
          "englishName": "Add channel two",
          "category": "Channels",
          "priceEstimate": "+$19,500",
          "description": "增加第二路独立相位相干矢量射频输出通道。",
          "englishDescription": "Add channel two."
        },
        {
          "id": "AP5042A-003",
          "code": "AP5042A-003",
          "name": "增加通道 3 硬件模块 (Add Channel Three - 3 Channels)",
          "englishName": "Add channel three",
          "category": "Channels",
          "priceEstimate": "+$38,000",
          "requires": [
            "AP5042A-002"
          ],
          "description": "增加第三路独立相干矢量射频输出通道。",
          "englishDescription": "Add channel three."
        },
        {
          "id": "AP5042A-004",
          "code": "AP5042A-004",
          "name": "增加通道 4 硬件模块 (Add Channel Four - 4 Channels)",
          "englishName": "Add channel four",
          "category": "Channels",
          "priceEstimate": "+$55,000",
          "requires": [
            "AP5042A-002",
            "AP5042A-003"
          ],
          "description": "增加第四路独立相干矢量射频输出通道，构建 4 通道矢量相干信号源系统。",
          "englishDescription": "Add channel four."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "频率覆盖 100 kHz 至 4 / 6 / 12 / 20 / 40 GHz (出厂必选，所有通道保持一致)",
      "englishSubtitle": "Must select one frequency range. Option will be duplicated on all channels.",
      "type": "single",
      "options": [
        {
          "id": "AP5042A-504",
          "code": "AP5042A-504",
          "name": "频率范围 100 kHz 至 4 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 4 GHz",
          "category": "Frequency",
          "priceEstimate": "$22,000",
          "freqMaxGHz": 4.0,
          "description": "CW 频率范围 100 kHz 至 4 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 4 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5042A-506",
          "code": "AP5042A-506",
          "name": "频率范围 100 kHz 至 6 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "$29,000",
          "freqMaxGHz": 6.0,
          "description": "CW 频率范围 100 kHz 至 6 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 6 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5042A-512",
          "code": "AP5042A-512",
          "name": "频率范围 100 kHz 至 12 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 12 GHz",
          "category": "Frequency",
          "priceEstimate": "$42,000",
          "freqMaxGHz": 12.0,
          "description": "CW 频率范围 100 kHz 至 12 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 12 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5042A-520",
          "code": "AP5042A-520",
          "name": "频率范围 100 kHz 至 20 GHz (SMA 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$56,000",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 100 kHz 至 20 GHz，配 SMA (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 20 GHz. SMA (f) RF connector."
        },
        {
          "id": "AP5042A-540",
          "code": "AP5042A-540",
          "name": "频率范围 100 kHz 至 40 GHz (2.92 mm 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 40 GHz",
          "category": "Frequency",
          "priceEstimate": "$75,000",
          "freqMaxGHz": 40.0,
          "description": "CW 频率范围 100 kHz 至 40 GHz 毫米波频段，配 2.92 mm (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 40 GHz. 2.92 mm (f) RF connector."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择近端相位噪声与稳定度等级 (Select Phase Noise Performance - Required Option)",
      "englishTitle": "Select Close-in Phase Noise & Stability",
      "subtitle": "超低近端相噪与长期稳定度 (出厂必选 LN1 或 LN2，所有通道保持一致)",
      "englishSubtitle": "Required option. Select close-in phase noise level (duplicated on all channels).",
      "type": "single",
      "options": [
        {
          "id": "AP5042A-LN1",
          "code": "AP5042A-LN1",
          "name": "超低近端相位噪声与高长期频率稳定度",
          "englishName": "Ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供优异的近端相位噪声与内部参考时基长期频率稳定度。",
          "englishDescription": "Ultra-low close in phase noise and long-term frequency stability."
        },
        {
          "id": "AP5042A-LN2",
          "code": "AP5042A-LN2",
          "name": "增强型超低近端相噪与极高长期频率稳定度",
          "englishName": "Enhanced ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "+$5,800",
          "description": "增强型超低近端相噪，显著降低多通道宽带信号矢量解调 EVM 底噪。",
          "englishDescription": "Enhanced ultra-low close in phase noise and long-term frequency stability."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择步进衰减器与快速切换选件 (Attenuators & Fast Switching)",
      "englishTitle": "Attenuators & Fast Switching",
      "subtitle": "机械衰减器、电子衰减器、谐波优化及快速频率切换 (配置在全部通道上)",
      "englishSubtitle": "Mechanical/electronic step attenuators, improved harmonics, and fast switching.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5042A-1E1",
          "code": "AP5042A-1E1",
          "name": "机械步进衰减器 (适用于 4/6/12/20/40 GHz)",
          "englishName": "Mechanical step attenuator for 4, 6, 12, 20, or 40 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,800",
          "description": "提供精确的机械步进衰减 (与 UNZ 快速切换互斥)。",
          "englishDescription": "Requires Option 504, 506, 512, 520, or 540; incompatible with UNZ."
        },
        {
          "id": "AP5042A-1E2",
          "code": "AP5042A-1E2",
          "name": "电子步进衰减器 (适用于 4 GHz 频段)",
          "englishName": "Electronic step attenuator for 4 GHz range",
          "category": "Attenuator",
          "priceEstimate": "+$3,500",
          "requires": [
            "AP5042A-504"
          ],
          "description": "无机械磨损的高速电子步进衰减器 (需 Option 504)。",
          "englishDescription": "Requires Option 504."
        },
        {
          "id": "AP5042A-2E2",
          "code": "AP5042A-2E2",
          "name": "电子步进衰减器 (适用于 6/12/20 GHz 频段)",
          "englishName": "Electronic step attenuator for 6, 12, or 20 GHz range",
          "category": "Attenuator",
          "priceEstimate": "+$5,200",
          "description": "电子步进衰减器 (需 Option 506、512 或 520)。",
          "englishDescription": "Requires Option 506, 512, or 520."
        },
        {
          "id": "AP5042A-1EH",
          "code": "AP5042A-1EH",
          "name": "电子步进衰减器及谐波抑制优化 (6/12/20 GHz)",
          "englishName": "Electronic step attenuator and improved harmonics for 6, 12, or 20 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$6,800",
          "description": "集成电子步进衰减器并深度优化谐波失真 (需 506/512/520)。",
          "englishDescription": "Electronic step attenuator and improved harmonics. Requires 506, 512, or 520."
        },
        {
          "id": "AP5042A-3E2",
          "code": "AP5042A-3E2",
          "name": "电子步进衰减器 (适用于 40 GHz 毫米波频段)",
          "englishName": "Electronic step attenuator for 40 GHz range",
          "category": "Attenuator",
          "priceEstimate": "+$8,200",
          "requires": [
            "AP5042A-540"
          ],
          "description": "毫米波高速电子步进衰减器 (需 Option 540)。",
          "englishDescription": "Requires Option 540."
        },
        {
          "id": "AP5042A-UNZ",
          "code": "AP5042A-UNZ",
          "name": "快速频率切换选件 (Fast Switching)",
          "englishName": "Fast switching",
          "category": "Performance",
          "priceEstimate": "+$4,800",
          "description": "高速跳频与快速稳频测试 (与 1E1 机械衰减器互斥)。",
          "englishDescription": "Fast switching capability. Incompatible with Option 1E1."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择模拟调制、矢量特性与系统接口 (Modulation & System Options)",
      "englishTitle": "Modulation & System Options",
      "subtitle": "AM/FM/PM、脉冲调制、AWGN、FCP 数字 IQ 流盘、多机同步 SNC、PHS 及 GPIB",
      "englishSubtitle": "AM/FM/PM, pulse mod, AWGN, FCP streaming, multi-instrument sync SNC, PHS, GPIB.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5042A-UNT",
          "code": "AP5042A-UNT",
          "name": "AM、FM、相位调制功能 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,600",
          "description": "模拟调制发生器 (配置在全部通道上)。",
          "englishDescription": "AM, FM, phase modulation (duplicated on all channels)."
        },
        {
          "id": "AP5042A-PMR",
          "code": "AP5042A-PMR",
          "name": "精密脉冲调制功能 (Pulse Modulation)",
          "englishName": "Pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,200",
          "description": "高速脉冲调制发生器 (配置在全部通道上)。",
          "englishDescription": "Pulse modulation (duplicated on all channels)."
        },
        {
          "id": "AP5042A-403",
          "code": "AP5042A-403",
          "name": "加性高斯白噪声发生器 (AWGN Generator)",
          "englishName": "Additive white gaussian noise generator",
          "category": "Vector Feature",
          "priceEstimate": "+$4,800",
          "description": "机内实时加性高斯白噪声注入 (配置在全部通道上)。",
          "englishDescription": "AWGN generator (duplicated on all channels)."
        },
        {
          "id": "AP5042A-FCP",
          "code": "AP5042A-FCP",
          "name": "快速控制端口与数字 IQ / PDW 流盘 (Fast Control Port)",
          "englishName": "Fast control port, external digital I/Q data & PDW streaming",
          "category": "Vector Feature",
          "priceEstimate": "+$9,500",
          "description": "高速数字接口，支持外部数字 IQ 数据实时注入与脉冲描述字 (PDW) 流盘。",
          "englishDescription": "Fast control port, external digital I/Q data & PDW streaming."
        },
        {
          "id": "AP5042A-PCM",
          "code": "AP5042A-PCM",
          "name": "相位可校准模式固件 (Phase Calibratable Mode)",
          "englishName": "Firmware for phase calibratable mode",
          "category": "Vector Feature",
          "priceEstimate": "+$4,500",
          "requires": [
            "AP5042A-PHS"
          ],
          "description": "支持精确相位校准固件模式 (需 PHS 选件，不兼容 540)。",
          "englishDescription": "Firmware for phase calibratable mode. Requires PHS, incompatible with 540."
        },
        {
          "id": "AP5042A-EXT",
          "code": "AP5042A-EXT",
          "name": "外部模拟 AM/FM/IQ 输入接口 (External Analog Inputs)",
          "englishName": "External analog AM, FM, IQ inputs",
          "category": "Hardware Interface",
          "priceEstimate": "+$3,200",
          "description": "外部模拟信号输入接口 (AM/FM 需配合 UNT)。",
          "englishDescription": "External analog AM, FM, IQ inputs (Option UNT required for AM, FM)."
        },
        {
          "id": "AP5042A-PDW",
          "code": "AP5042A-PDW",
          "name": "脉冲描述字实时流盘处理 (Pulse Descriptor Word)",
          "englishName": "Pulse Descriptor Word (PDW)",
          "category": "Vector Feature",
          "priceEstimate": "+$6,800",
          "description": "复杂电磁威胁场景 PDW 实时处理。",
          "englishDescription": "Pulse Descriptor Word (PDW) real-time processing."
        },
        {
          "id": "AP5042A-PHS",
          "code": "AP5042A-PHS",
          "name": "相位相干切换选件 (Phase Coherent Switching)",
          "englishName": "Phase coherent switching",
          "category": "System Feature",
          "priceEstimate": "+$4,200",
          "description": "多通道相干切换与精确相位重现 (配置在全部通道上)。",
          "englishDescription": "Phase coherent switching (duplicated on all channels)."
        },
        {
          "id": "AP5042A-SNC",
          "code": "AP5042A-SNC",
          "name": "多机级联同步能力 (Multi-Instrument Synchronization)",
          "englishName": "Multi-instrument synchronization",
          "category": "System Feature",
          "priceEstimate": "+$5,200",
          "requires": [
            "AP5042A-PHS"
          ],
          "description": "支持多台 AP5042A 互联扩展 (整机选配一次，需 PHS)。",
          "englishDescription": "Multi-instrument synchronization. Requires PHS."
        },
        {
          "id": "AP5042A-1ER",
          "code": "AP5042A-1ER",
          "name": "灵活外部参考输入 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "System Feature",
          "priceEstimate": "+$1,800",
          "description": "支持宽范围频率外部参考信号输入锁定 (整机选配一次)。",
          "englishDescription": "Flexible reference input (ordered once per instrument)."
        },
        {
          "id": "AP5042A-GPB",
          "code": "AP5042A-GPB",
          "name": "GPIB 接口选件 (GPIB Interface)",
          "englishName": "GPIB interface",
          "category": "Connectivity",
          "priceEstimate": "+$950",
          "description": "提供标准自动化 GPIB 远程通信接口 (整机选配一次)。",
          "englishDescription": "GPIB interface (ordered once per instrument)."
        },
        {
          "id": "AP5042A-006",
          "code": "AP5042A-006",
          "name": "Micro-SD 卡 IQ 波形数据存储选件",
          "englishName": "I/Q waveform data storage on micro-SD card",
          "category": "Storage",
          "priceEstimate": "+$650",
          "description": "支持将基带 IQ 波形数据保存在可拔插 Micro-SD 卡中 (整机选配一次)。",
          "englishDescription": "I/Q waveform data storage on micro-SD card."
        }
      ]
    },
    {
      "id": "step6",
      "stepNumber": 6,
      "title": "选择 Signal Studio 信号生成软件应用 (Signal Studio Software)",
      "englishTitle": "Signal Studio Software Applications",
      "subtitle": "5G NR、Wi-Fi 7/8、LTE、Bluetooth、IoT、广播电视、LMR 专网与自定义调制回放",
      "englishSubtitle": "Waveform playback for 5G NR, WLAN 802.11, LTE, Bluetooth, IoT, broadcast, and custom modulation.",
      "type": "multiple",
      "options": [
        {
          "id": "N7631EMBC",
          "code": "N7631EMBC",
          "name": "5G NR / 5G-Advanced 信号生成软件 (Signal Studio Pro)",
          "englishName": "Signal Studio Pro for 5G NR/5G-Advanced, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$8,500",
          "supportsLicense": true,
          "description": "5G NR Release 15/16/17/18 波形生成与回放 (Node-locked 永久许可)。",
          "englishDescription": "Signal Studio Pro for 5G NR/5G-Advanced, waveform playback."
        },
        {
          "id": "N7617EMBC",
          "code": "N7617EMBC",
          "name": "WLAN 802.11 信号生成软件 (Wi-Fi 全系列支持)",
          "englishName": "Signal Studio for WLAN 802.11, waveform playback",
          "category": "Wireless Software",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "传统 802.11a/b/g/n/ac/ax 以及最新 802.11be/bn 波形生成与回放。",
          "englishDescription": "Signal Studio for WLAN 802.11, waveform playback."
        },
        {
          "id": "N7624EMBC",
          "code": "N7624EMBC",
          "name": "LTE/LTE-Advanced/LTE-A Pro FDD 信号生成软件",
          "englishName": "Signal Studio for LTE/LTE-Advanced/LTE-A Pro FDD, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "LTE FDD 物理层测试波形生成与回放。",
          "englishDescription": "Signal Studio for LTE/LTE-Advanced/LTE-A Pro FDD, waveform playback."
        },
        {
          "id": "N7625EMBC",
          "code": "N7625EMBC",
          "name": "LTE/LTE-Advanced TDD 信号生成软件",
          "englishName": "Signal Studio for LTE/LTE-Advanced TDD, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "LTE TDD 时分双工测试波形生成与回放。",
          "englishDescription": "Signal Studio for LTE/LTE-Advanced TDD, waveform playback."
        },
        {
          "id": "N7626EMBC",
          "code": "N7626EMBC",
          "name": "LTE V2X 车联网信号生成软件",
          "englishName": "Signal Studio for LTE V2X, waveform playback",
          "category": "Automotive Software",
          "priceEstimate": "+$5,800",
          "supportsLicense": true,
          "description": "LTE V2X 直连通信波形生成与回放。",
          "englishDescription": "Signal Studio for LTE V2X, waveform playback."
        },
        {
          "id": "N7632EMBC",
          "code": "N7632EMBC",
          "name": "NR V2X 信号生成软件",
          "englishName": "PathWave Signal Generation for NR V2X, waveform playback",
          "category": "Automotive Software",
          "priceEstimate": "+$6,800",
          "supportsLicense": true,
          "description": "5G NR V2X 侧链通信波形生成与回放。",
          "englishDescription": "PathWave Signal Generation for NR V2X, waveform playback."
        },
        {
          "id": "N7606EMBC",
          "code": "N7606EMBC",
          "name": "Bluetooth 经典蓝牙 / EDR / BLE 信号生成软件",
          "englishName": "Signal Studio for Bluetooth Classic/EDR/LE, waveform playback",
          "category": "Wireless Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "经典蓝牙 BR/EDR 及蓝牙 5 / BLE 低功耗波形生成与回放。",
          "englishDescription": "Signal Studio for Bluetooth Classic/EDR/LE, waveform playback."
        },
        {
          "id": "N7610EMBC",
          "code": "N7610EMBC",
          "name": "IoT 物联网信号生成软件 (LoRa/ZigBee/Wi-SUN)",
          "englishName": "Signal Studio for IoT, waveform playback",
          "category": "Wireless Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "覆盖 LoRa、ZigBee、Z-Wave 物联网通信波形生成与回放。",
          "englishDescription": "Signal Studio for IoT, waveform playback."
        },
        {
          "id": "N7608EMBC",
          "code": "N7608EMBC",
          "name": "通用自定义调制信号生成软件 (Signal Studio Pro Custom IQ)",
          "englishName": "Signal Studio Pro for Custom Modulation, waveform playback",
          "category": "General Purpose",
          "priceEstimate": "+$5,200",
          "supportsLicense": true,
          "description": "自定义任意调制波形设计与回放 (FSK/PSK/QAM/APSK/OFDM)。",
          "englishDescription": "Signal Studio Pro for Custom Modulation, waveform playback."
        },
        {
          "id": "N7600EMBC",
          "code": "N7600EMBC",
          "name": "W-CDMA/HSPA+ 信号生成软件",
          "englishName": "Signal Studio for W-CDMA/HSPA+, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "3G W-CDMA 及 HSPA+ 蜂窝波形生成与回放。",
          "englishDescription": "Signal Studio for W-CDMA/HSPA+, waveform playback."
        },
        {
          "id": "N7601EMBC",
          "code": "N7601EMBC",
          "name": "cdma2000/1xEV-DO 信号生成软件",
          "englishName": "Signal Studio for cdma2000/1xEV-DO, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "cdma2000 蜂窝波形生成与回放。",
          "englishDescription": "Signal Studio for cdma2000/1xEV-DO, waveform playback."
        },
        {
          "id": "N7602EMBC",
          "code": "N7602EMBC",
          "name": "GSM/EDGE/Evo 信号生成软件",
          "englishName": "Signal Studio for GSM/EDGE/Evo, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "GSM/EDGE 蜂窝波形生成与回放。",
          "englishDescription": "Signal Studio for GSM/EDGE/Evo, waveform playback."
        },
        {
          "id": "N7612EMBC",
          "code": "N7612EMBC",
          "name": "TD-SCDMA/HSPA 信号生成软件",
          "englishName": "Signal Studio for TD-SCDMA/HSPA, waveform playback",
          "category": "Cellular Software",
          "priceEstimate": "+$4,200",
          "supportsLicense": true,
          "description": "TD-SCDMA 蜂窝波形生成与回放。",
          "englishDescription": "Signal Studio for TD-SCDMA/HSPA, waveform playback."
        },
        {
          "id": "N7611EMBC",
          "code": "N7611EMBC",
          "name": "广播电台信号生成软件 (Broadcast Radio)",
          "englishName": "Signal Studio for broadcast radio, waveform playback",
          "category": "Broadcasting Software",
          "priceEstimate": "+$3,800",
          "supportsLicense": true,
          "description": "AM、FM、RDS、DAB/DAB+ 广播电台测试信号生成。",
          "englishDescription": "Signal Studio for broadcast radio, waveform playback."
        },
        {
          "id": "N7623EMBC",
          "code": "N7623EMBC",
          "name": "数字电视信号生成软件 (Digital Video)",
          "englishName": "Signal Studio for digital video, waveform playback",
          "category": "Broadcasting Software",
          "priceEstimate": "+$4,800",
          "supportsLicense": true,
          "description": "DVB-T/T2、ATSC、ISDB-T 电视广播波形生成与回放。",
          "englishDescription": "Signal Studio for digital video, waveform playback."
        },
        {
          "id": "N7640EMBC",
          "code": "N7640EMBC",
          "name": "专业移动无线电信号生成软件 (LMR / APCO P25 / TETRA / DMR)",
          "englishName": "Signal Studio for LMR, waveform playback",
          "category": "LMR Software",
          "priceEstimate": "+$4,500",
          "supportsLicense": true,
          "description": "专网与集群通信标准测试波形生成与回放。",
          "englishDescription": "Signal Studio for LMR, waveform playback."
        }
      ]
    },
    {
      "id": "step7",
      "stepNumber": 7,
      "title": "选择校准证书与计量计划 (Calibration & Services)",
      "englishTitle": "Calibration & Services",
      "subtitle": "出厂商业校准证书、3 年或 5 年原厂返厂计量校准保证计划",
      "englishSubtitle": "Commercial calibration certificate and 3/5-year calibration plans.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5042A-UK6",
          "code": "AP5042A-UK6",
          "name": "带测试实测数据的多通道商业校准证书",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$950",
          "description": "出厂提供全通道实测指标校准证书报告。",
          "englishDescription": "Commercial calibration certificate with test data."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保证计划 (3-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 3 years",
          "category": "Services",
          "priceEstimate": "+$3,200",
          "description": "3 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 3 years."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保证计划 (5-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 5 years",
          "category": "Services",
          "priceEstimate": "+$5,200",
          "description": "5 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 5 years."
        }
      ]
    }
  ]
};
