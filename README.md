# Keysight 仪表选件配置与预览系统 (Keysight Configurator v2.2.2)

基于 Keysight 官方红黑设计风格的高性能仪表选件配置与预览系统，包含 12 款旗舰仪表、1,074 张完整选件卡片、100% 对应 Keysight 官方选件配置指南 PDF，支持中英双语切换、模块化 ES 架构、依赖冲突校验、实时预览及 PDF/CSV 一键导出。

---

## 📱 手机端访问指南

### 方案 1：同局域网 / Wi-Fi 访问 (最快)
将手机与电脑连接至同一 Wi-Fi 或局域网，在手机浏览器中打开：
- 局域网地址：`http://192.168.0.36:8080`
- 内网/VPN地址：`http://10.20.17.14:8080`

### 方案 2：发布至 GitHub Pages 免费公网 (随时随地 5G/4G 访问)
1. 在 GitHub 创建新仓库 `keysight-configurator`
2. 推送项目代码：
   ```bash
   git init
   git add .
   git commit -m "feat: release v2.2.2 for mobile & web"
   git remote add origin https://github.com/bennyzhang0503/keysight-configurator.git
   git push -u origin main
   ```
3. 在 GitHub 仓库设置中开启 `Settings -> Pages -> Source: Deploy from a branch (main)`
4. 访问生成的公网域名：`https://bennyzhang0503.github.io/keysight-configurator`

---

## 🛠️ 项目文件架构

```
keysight-configurator/
├── index.html                  # 主页面 HTML (响应式适配 + 顶部选件指南快捷按钮)
├── styles.css                  # Keysight 官方红黑暗黑风 CSS (包含手机端抽屉及控件适配)
├── docs/                       # 12 款仪表官方 PDF 选件配置指南文件夹
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
    ├── app.js                  # 主控控制器与响应式逻辑 (v2.2.2)
    ├── data/
    │   ├── index.js            # 主数据汇总模块 (Master Aggregator)
    │   └── models/             # 12 款仪表独立 ES 模块数据集
    ├── engine/
    │   └── ruleEngine.js       # 选件依赖校验与冲突检测引擎
    └── utils/
        └── exportUtils.js      # PDF/CSV/JSON 导出工具
```

---

## ⚡ 仪表模型支持清单 (12 款)

1. **N9010B** EXA Signal Analyzer (10 Hz - 44 GHz)
2. **N9020B** MXA Signal Analyzer (10 Hz - 50 GHz)
3. **N9021B** MXA Signal Analyzer (10 Hz - 50 GHz / 510 MHz BW)
4. **N9030B** PXA Signal Analyzer (10 Hz - 50 GHz / 510 MHz BW)
5. **N9032B** PXA Signal Analyzer (2 Hz - 55 GHz / 2 GHz RTSA BW)
6. **N9040B** UXA Signal Analyzer (10 Hz - 50 GHz / 1 GHz BW)
7. **N9042B** UXA Signal Analyzer (2 Hz - 50 GHz / 110 GHz Ext / 4 GHz BW)
8. **N5186A** MXG Vector Signal Generator (9 kHz - 8.5 GHz / 4-Ch / 960 MHz BW)
9. **N5182B** MXG Vector Signal Generator (9 kHz - 6 GHz / 160 MHz BW)
10. **M9415A** VXT PXIe Transceiver (380 MHz - 12 GHz / 1.2 GHz BW)
11. **M9415B** VXT PXIe Transceiver (380 MHz - 20 GHz / Analog BBIQ)
12. **E6680E** Wireless Test Set (Wi-Fi 6E/7/8 & 5G, 800 MHz BW)
