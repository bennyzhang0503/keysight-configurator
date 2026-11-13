// Keysight AP5041A Vector Signal Generator Dataset
export const AP5041A_DATA = {
  "id": "AP5041A",
  "name": "AP5041A Vector Signal Generator",
  "subtitle": "100 kHz to 4 / 6 / 12 / 20 / 40 GHz Compact High-Performance Vector Signal Generator",
  "family": "G3 Series Vector Signal Generators",
  "docNumber": "AP5041A-CONFIG / Keysight",
  "description": "The Keysight AP5041A is a compact vector signal generator covering 100 kHz to 40 GHz, offering ultra-low close-in phase noise, mechanical/electronic step attenuators, fast frequency switching, additive white Gaussian noise (AWGN), fast control port (FCP) digital IQ/PDW streaming, avionics modulation, and extensive Signal Studio software support.",
  "baseSpecs": {
    "display": "Compact benchtop / ATE modular form factor with remote UI",
    "frequencyRange": "100 kHz to 4 / 6 / 12 / 20 / 40 GHz",
    "outputPower": "Calibrated output power with electronic or mechanical step attenuators",
    "phaseNoise": "Ultra-low close-in phase noise (Option LN1/LN2)",
    "vectorFeatures": "AWGN generator, Fast Control Port (FCP), PDW streaming, phase calibratable mode",
    "connectivity": "USB, LAN, flexible reference input (1ER), GPIB, micro-SD storage, 24V DC interface"
  },
  "steps": [
    {
      "id": "step1",
      "stepNumber": 1,
      "title": "选择最高频率范围 (Select Maximum Frequency Range - Required Option)",
      "englishTitle": "Select Frequency Range",
      "subtitle": "频率覆盖 100 kHz 至 4 / 6 / 12 / 20 / 40 GHz (出厂必选其一)",
      "englishSubtitle": "Required option. Frequency range: 4, 6, 12, 20, or 40 GHz.",
      "type": "single",
      "options": [
        {
          "id": "AP5041A-504",
          "code": "AP5041A-504",
          "name": "频率范围 100 kHz 至 4 GHz (Type-N 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 4 GHz",
          "category": "Frequency",
          "priceEstimate": "$18,500",
          "freqMaxGHz": 4.0,
          "description": "CW 频率范围 100 kHz 至 4 GHz，配 Type-N (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 4 GHz. Type-N (f) RF output connector."
        },
        {
          "id": "AP5041A-506",
          "code": "AP5041A-506",
          "name": "频率范围 100 kHz 至 6 GHz (Type-N 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 6 GHz",
          "category": "Frequency",
          "priceEstimate": "$24,500",
          "freqMaxGHz": 6.0,
          "description": "CW 频率范围 100 kHz 至 6 GHz，配 Type-N (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 6 GHz. Type-N (f) RF output connector."
        },
        {
          "id": "AP5041A-512",
          "code": "AP5041A-512",
          "name": "频率范围 100 kHz 至 12 GHz (Type-N 阴头接口)",
          "englishName": "Frequency range, 100 kHz to 12 GHz",
          "category": "Frequency",
          "priceEstimate": "$34,000",
          "freqMaxGHz": 12.0,
          "description": "CW 频率范围 100 kHz 至 12 GHz，配 Type-N (f) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 12 GHz. Type-N (f) RF output connector."
        },
        {
          "id": "AP5041A-520",
          "code": "AP5041A-520",
          "name": "频率范围 100 kHz 至 20 GHz (2.92 mm 阳头接口)",
          "englishName": "Frequency range, 100 kHz to 20 GHz",
          "category": "Frequency",
          "priceEstimate": "$46,000",
          "freqMaxGHz": 20.0,
          "description": "CW 频率范围 100 kHz 至 20 GHz，配 2.92 mm (m) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 20 GHz. 2.92 mm (m) RF output connector."
        },
        {
          "id": "AP5041A-540",
          "code": "AP5041A-540",
          "name": "频率范围 100 kHz 至 40 GHz (2.92 mm 阳头接口)",
          "englishName": "Frequency range, 100 kHz to 40 GHz",
          "category": "Frequency",
          "priceEstimate": "$62,000",
          "freqMaxGHz": 40.0,
          "description": "CW 频率范围 100 kHz 至 40 GHz 毫米波频段，配 2.92 mm (m) 接口。",
          "englishDescription": "Frequency range, 100 kHz to 40 GHz. 2.92 mm (m) RF output connector."
        }
      ]
    },
    {
      "id": "step2",
      "stepNumber": 2,
      "title": "选择近端相位噪声与稳定度等级 (Select Phase Noise Performance - Required Option)",
      "englishTitle": "Select Close-in Phase Noise & Stability",
      "subtitle": "超低近端相噪与长期稳定度 (出厂必选 LN1 或 LN2)",
      "englishSubtitle": "Required option. Select close-in phase noise and long-term stability level.",
      "type": "single",
      "options": [
        {
          "id": "AP5041A-LN1",
          "code": "AP5041A-LN1",
          "name": "超低近端相位噪声与高长期频率稳定度",
          "englishName": "Ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "Standard",
          "isStandard": true,
          "description": "标准提供优异的近端相位噪声与内部参考时基长期频率稳定度。",
          "englishDescription": "Ultra-low close in phase noise and long-term frequency stability."
        },
        {
          "id": "AP5041A-LN2",
          "code": "AP5041A-LN2",
          "name": "增强型超低近端相噪与极高长期频率稳定度",
          "englishName": "Enhanced ultra-low close in phase noise and long-term frequency stability",
          "category": "Phase Noise",
          "priceEstimate": "+$5,200",
          "description": "增强型超低近端相噪，显著降低宽带信号矢量解调 EVM 底噪。",
          "englishDescription": "Enhanced ultra-low close in phase noise and long-term frequency stability."
        }
      ]
    },
    {
      "id": "step3",
      "stepNumber": 3,
      "title": "选择步进衰减器与快速切换选件 (Attenuator & Fast Switching)",
      "englishTitle": "Select Attenuator & Fast Switching",
      "subtitle": "机械衰减器、电子衰减器、优化谐波与快速频率切换",
      "englishSubtitle": "Mechanical/electronic step attenuators, improved harmonics, and fast switching.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5041A-1E1",
          "code": "AP5041A-1E1",
          "name": "机械步进衰减器 (适用于 4/6/12/20/40 GHz)",
          "englishName": "Mechanical step attenuator for 4, 6, 12, 20, or 40 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,600",
          "description": "提供精确的机械步进衰减 (与 UNZ 快速切换互斥)。",
          "englishDescription": "Requires Option 504, 506, 512, 520, or 540; incompatible with UNZ."
        },
        {
          "id": "AP5041A-1E2",
          "code": "AP5041A-1E2",
          "name": "电子步进衰减器 (适用于 4 GHz 频段)",
          "englishName": "Electronic step attenuator for 4 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$3,200",
          "requires": [
            "AP5041A-504"
          ],
          "description": "无机械磨损的高速电子步进衰减器 (需 Option 504)。",
          "englishDescription": "Electronic step attenuator for 4 GHz range. Requires Option 504."
        },
        {
          "id": "AP5041A-2E2",
          "code": "AP5041A-2E2",
          "name": "电子步进衰减器 (适用于 6/12/20 GHz 频段)",
          "englishName": "Electronic step attenuator for 6, 12, or 20 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$4,800",
          "description": "电子步进衰减器 (需 Option 506、512 或 520)。",
          "englishDescription": "Requires Option 506, 512, or 520."
        },
        {
          "id": "AP5041A-1EH",
          "code": "AP5041A-1EH",
          "name": "电子步进衰减器及谐波抑制优化 (6/12/20 GHz)",
          "englishName": "Electronic step attenuator and improved harmonics for 6, 12, or 20 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$6,500",
          "description": "集成电子步进衰减器并深度优化二次/三次谐波失真指标 (需 506/512/520)。",
          "englishDescription": "Electronic step attenuator and improved harmonics. Requires 506, 512, or 520."
        },
        {
          "id": "AP5041A-3E2",
          "code": "AP5041A-3E2",
          "name": "电子步进衰减器 (适用于 40 GHz 毫米波频段)",
          "englishName": "Electronic step attenuator for 40 GHz",
          "category": "Attenuator",
          "priceEstimate": "+$7,800",
          "requires": [
            "AP5041A-540"
          ],
          "description": "毫米波高速电子步进衰减器 (需 Option 540)。",
          "englishDescription": "Electronic step attenuator for 40 GHz. Requires Option 540."
        },
        {
          "id": "AP5041A-UNZ",
          "code": "AP5041A-UNZ",
          "name": "快速频率切换选件 (Fast Switching)",
          "englishName": "Fast switching",
          "category": "Performance",
          "priceEstimate": "+$4,500",
          "description": "高速跳频与快速稳频测试 (与 1E1 机械衰减器互斥)。",
          "englishDescription": "Fast switching capability. Incompatible with Option 1E1."
        }
      ]
    },
    {
      "id": "step4",
      "stepNumber": 4,
      "title": "选择模拟调制与矢量系统特性 (Modulation & Vector Features)",
      "englishTitle": "Modulation & Vector Features",
      "subtitle": "AM/FM/PM、脉冲调制、航电调制、AWGN 噪声、FCP 接口、PDW 脉冲字及外部 IQ 输入",
      "englishSubtitle": "AM/FM/PM, pulse mod, avionics mod, AWGN, FCP streaming, PDW, and external IQ.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5041A-UNT",
          "code": "AP5041A-UNT",
          "name": "AM、FM、相位调制功能 (AM, FM, Phase Modulation)",
          "englishName": "AM, FM, phase modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,200",
          "description": "机内通用模拟调制发生器。",
          "englishDescription": "AM, FM, phase modulation."
        },
        {
          "id": "AP5041A-PMR",
          "code": "AP5041A-PMR",
          "name": "精密脉冲调制功能 (Pulse Modulation)",
          "englishName": "Pulse modulation",
          "category": "Modulation",
          "priceEstimate": "+$3,800",
          "description": "高性能雷达脉冲调制发生器。",
          "englishDescription": "Pulse modulation."
        },
        {
          "id": "AP5041A-302",
          "code": "AP5041A-302",
          "name": "航空电子通信调制功能 (Avionic Modulation)",
          "englishName": "Avionic modulation",
          "category": "Modulation",
          "priceEstimate": "+$4,800",
          "description": "支持 ILS 仪表着陆系统、VOR 全向信标及 DME 航空专用调制功能。",
          "englishDescription": "Avionic modulation for ILS, VOR, and DME."
        },
        {
          "id": "AP5041A-403",
          "code": "AP5041A-403",
          "name": "加性高斯白噪声发生器 (AWGN Generator)",
          "englishName": "Additive white gaussian noise generator",
          "category": "Vector Feature",
          "priceEstimate": "+$4,500",
          "description": "机内实时加性高斯白噪声注入，精确调节 C/N 载噪比。",
          "englishDescription": "Additive white gaussian noise generator."
        },
        {
          "id": "AP5041A-FCP",
          "code": "AP5041A-FCP",
          "name": "快速控制端口与数字 IQ / PDW 流盘 (Fast Control Port)",
          "englishName": "Fast control port, external digital I/Q data & PDW streaming",
          "category": "Vector Feature",
          "priceEstimate": "+$8,500",
          "description": "高速数字接口，支持外部数字 IQ 数据实时注入与脉冲描述字 (PDW) 流盘。",
          "englishDescription": "Fast control port, external digital I/Q data & PDW streaming."
        },
        {
          "id": "AP5041A-PCM",
          "code": "AP5041A-PCM",
          "name": "相位可校准模式固件 (Phase Calibratable Mode)",
          "englishName": "Firmware for phase calibratable mode",
          "category": "Vector Feature",
          "priceEstimate": "+$4,200",
          "requires": [
            "AP5041A-PHS"
          ],
          "description": "支持精确相位校准固件模式 (需 PHS 选件，不兼容 540)。",
          "englishDescription": "Firmware for phase calibratable mode. Requires PHS, incompatible with 540."
        },
        {
          "id": "AP5041A-EXT",
          "code": "AP5041A-EXT",
          "name": "外部模拟 AM/FM/IQ 输入接口 (External Analog Inputs)",
          "englishName": "External analog AM, FM, IQ inputs",
          "category": "Hardware Interface",
          "priceEstimate": "+$2,800",
          "description": "支持外部基带 IQ 及模拟 AM/FM 信号输入 (AM/FM 需配合 UNT)。",
          "englishDescription": "External analog AM, FM, IQ inputs (Option UNT required for AM, FM)."
        },
        {
          "id": "AP5041A-PDW",
          "code": "AP5041A-PDW",
          "name": "脉冲描述字实时流盘处理 (Pulse Descriptor Word)",
          "englishName": "Pulse Descriptor Word (PDW)",
          "category": "Vector Feature",
          "priceEstimate": "+$6,200",
          "description": "支持雷达与电子战复杂威胁电磁环境 PDW 脉冲字实时生成。",
          "englishDescription": "Pulse Descriptor Word (PDW) real-time processing."
        }
      ]
    },
    {
      "id": "step5",
      "stepNumber": 5,
      "title": "选择系统性能、同步与通用特性 (System Features & Sync)",
      "englishTitle": "System Features & Sync",
      "subtitle": "相位相干切换、多机同步、灵活参考输入、24V DC 接口、GPIB 及 Micro-SD 存储",
      "englishSubtitle": "Phase coherent switching, multi-instrument sync, flexible reference, DC power, GPIB.",
      "type": "multiple",
      "options": [
        {
          "id": "AP5041A-PHS",
          "code": "AP5041A-PHS",
          "name": "相位相干切换选件 (Phase Coherent Switching)",
          "englishName": "Phase coherent switching",
          "category": "System Feature",
          "priceEstimate": "+$3,800",
          "description": "用于多台仪表相干测试时的快速相位重现与相位锁定。",
          "englishDescription": "Phase coherent switching for multi-instrument phase coherency."
        },
        {
          "id": "AP5041A-SNC",
          "code": "AP5041A-SNC",
          "name": "多机级联同步能力 (Multi-Instrument Synchronization)",
          "englishName": "Multi-instrument synchronization",
          "category": "System Feature",
          "priceEstimate": "+$4,500",
          "requires": [
            "AP5041A-PHS"
          ],
          "description": "支持多台 AP5041A 级联构建高密度相干阵列 (需 PHS)。",
          "englishDescription": "Multi-instrument synchronization. Requires PHS."
        },
        {
          "id": "AP5041A-1ER",
          "code": "AP5041A-1ER",
          "name": "灵活外部参考输入 (Flexible Reference Input)",
          "englishName": "Flexible reference input",
          "category": "System Feature",
          "priceEstimate": "+$1,800",
          "description": "支持宽范围频率外部参考信号输入锁定。",
          "englishDescription": "Flexible reference input."
        },
        {
          "id": "AP5041A-DC1",
          "code": "AP5041A-DC1",
          "name": "24V 直流供电接口 (24V DC Power Interface)",
          "englishName": "24V DC power interface",
          "category": "System Feature",
          "priceEstimate": "+$1,500",
          "description": "配备 24V DC 直流电源输入接口 (缺省标配为交流 AC 供电)。",
          "englishDescription": "24V DC power interface. AC power is standard unless DC1 ordered."
        },
        {
          "id": "AP5041A-GPB",
          "code": "AP5041A-GPB",
          "name": "GPIB 接口选件 (GPIB Interface)",
          "englishName": "GPIB interface",
          "category": "Connectivity",
          "priceEstimate": "+$950",
          "description": "提供标准自动化 GPIB 远程通信接口。",
          "englishDescription": "GPIB interface."
        },
        {
          "id": "AP5041A-006",
          "code": "AP5041A-006",
          "name": "Micro-SD 卡 IQ 波形数据存储选件",
          "englishName": "I/Q waveform data storage on micro-SD card",
          "category": "Storage",
          "priceEstimate": "+$650",
          "description": "支持将基带 IQ 波形数据保存在可拔插 Micro-SD 卡中。",
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
          "id": "AP5041A-UK6",
          "code": "AP5041A-UK6",
          "name": "带测试实测数据的商业校准证书",
          "englishName": "Commercial calibration certificate with test data",
          "category": "Calibration",
          "priceEstimate": "+$850",
          "description": "出厂提供包含完整实测指标数据的商业校准证书报告。",
          "englishDescription": "Commercial calibration certificate with test data."
        },
        {
          "id": "R-50C-011-3",
          "code": "R-50C-011-3",
          "name": "3 年期原厂返厂校准保证计划 (3-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 3 years",
          "category": "Services",
          "priceEstimate": "+$2,800",
          "description": "3 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 3 years."
        },
        {
          "id": "R-50C-011-5",
          "code": "R-50C-011-5",
          "name": "5 年期原厂返厂校准保证计划 (5-Year Calibration Plan)",
          "englishName": "Calibration Plan - Return to Keysight - 5 years",
          "category": "Services",
          "priceEstimate": "+$4,500",
          "description": "5 年期原厂返厂计量校准服务计划。",
          "englishDescription": "Calibration Assurance Plan, Return-to-Keysight, 5 years."
        }
      ]
    }
  ]
};
