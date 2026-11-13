# Keysight 仪表选件配置与预览系统 (Keysight Configurator v2.6.0)

基于 Keysight 官方红黑设计风格的高性能仪表选件配置与预览系统，包含 21 款旗舰仪表、1,603 张完整选件卡片、100% 对应 Keysight 官方选件配置指南 PDF，支持中英双语切换、模块化 ES 架构、依赖冲突校验、跨步骤智能回溯导航、调试日志一键导出及 PDF/CSV 报告导出。

---

## 🚀 最新版本特性 (v2.6.0)

1. **📦 全面覆盖 21 款 Keysight 核心信号分析仪与信号源/测试套件**：
   - **信号分析仪系列 (Signal Analyzers)**：
     - N9010B EXA (10 Hz - 44 GHz)
     - N9020B MXA (10 Hz - 50 GHz)
     - N9021B MXA (10 Hz - 50 GHz / 510 MHz BW)
     - N9030B PXA (10 Hz - 50 GHz / 510 MHz BW)
     - N9032B PXA (2 Hz - 55 GHz / 2 GHz RTSA BW)
     - N9040B UXA (10 Hz - 50 GHz / 1 GHz BW / 14.1" Screen)
     - N9042B UXA (2 Hz - 50 GHz / 110 GHz Ext / 4 GHz BW)
     - SA6210A XA5 (2 Hz - 32 GHz / 双通道 / 2 GHz BW)
     - SA6320A XA6 (2 Hz - 67 GHz / 8 GHz BW 顶级分析仪)
   - **信号发生器系列 (Signal Generators)**：
     - N5186A MXG 矢量 (9 kHz - 8.5 GHz / 4 通道 / 960 MHz BW)
     - N5182B MXG 矢量 (9 kHz - 6 GHz / 160 MHz BW)
     - N5183B MXG 微波模拟 (9 kHz - 40 GHz)
     - SG6311A PSG XG7 (9 kHz - 20 GHz / 2 通道计量级)
     - AP5021A G3 模拟 (9 kHz - 54 GHz)
     - AP5022A G3 模拟 (9 kHz - 54 GHz / 4 通道)
     - AP5041A 矢量 (100 kHz - 40 GHz / 2 GHz BW)
     - AP5042A G3 矢量 (100 kHz - 40 GHz / 4 通道 / 2 GHz BW)
     - M9484C VXG 矢量 (9 kHz - 54 GHz / 4 通道 / 2.5 GHz BW)
   - **收发信机与无线测试套件 (Transceivers & Wireless Test Sets)**：
     - M9415A VXT PXIe (380 MHz - 12 GHz / 1.2 GHz BW / VSG+VSA)
     - M9415B VXT PXIe (380 MHz - 20 GHz / 1.2 GHz BW / Analog BBIQ)
     - E6680E 无线测试套件 (Wi-Fi 6E/7/8 & 5G, 800 MHz BW)

2. **📄 21 款仪表官方 PDF 选件配置指南全量配套**：
   - 切换任意机型，顶栏与配置预览抽屉中的「官方配置指南」按钮均精准直达原厂 PDF。

---

## 📱 手机端访问指南

### 方案 1：GitHub Pages 免费公网 (随时随地 5G/4G/Wi-Fi 访问)
👉 **[https://bennyzhang0503.github.io/keysight-configurator](https://bennyzhang0503.github.io/keysight-configurator)**

### 方案 2：同局域网 / Wi-Fi 访问
将手机与电脑连接至同一 Wi-Fi 或局域网，在手机浏览器中打开：
- 局域网地址：`http://192.168.0.36:8080`
- 内网/VPN地址：`http://10.20.17.14:8080`

---

## 🛠️ 项目文件架构

```
keysight-configurator/
├── index.html                  # 响应式主界面 (包含顶栏、配置步骤、实时预览抽屉及日志 Modal)
├── styles.css                  # Keysight 品牌红黑主题与 Glassmorphism 设计系统
├── README.md                   # 项目使用与部署说明文档
├── docs/                       # 12 款仪表官方 PDF 选件配置指南
│   ├── n9010b_config_guide.pdf
│   ├── n9020b_config_guide.pdf
│   ├── n9021b_config_guide.pdf
│   ├── n9030b_config_guide.pdf
│   ├── n9032b_config_guide.pdf
│   ├── n9040b_config_guide.pdf
│   ├── n9042b_config_guide.pdf
│   ├── n5186a_config_guide.pdf
│   ├── n5182b_config_guide.pdf
│   ├── m9415a_config_guide.pdf
│   ├── m9415b_config_guide.pdf
│   └── e6680e_config_guide.pdf
└── js/
    ├── app.js                  # 应用主控制器 (多语言切换、日志交互、步骤记忆)
    ├── engine/
    │   └── ruleEngine.js       # 选件依赖校验与动态约束引擎
    ├── utils/
    │   ├── logger.js           # 操作日志记录器与错误捕获导出服务
    │   └── exportUtils.js      # PDF 打印报告、CSV 导出与 JSON 保存工具
    └── data/
        ├── index.js            # 12 款仪表主数据集聚合入口
        └── models/             # 12 款独立 ES 模块化仪表数据集
            ├── n9010bData.js
            ├── n9020bData.js
            ├── n9021bData.js
            ├── n9030bData.js
            ├── n9032bData.js
            ├── n9040bData.js
            ├── n9042bData.js
            ├── n5186aData.js
            ├── n5182bData.js
            ├── m9415aData.js
            ├── m9415bData.js
            └── e6680eData.js
```
