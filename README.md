# Keysight 仪表选件配置与预览系统 (Keysight Configurator v2.2.5)

基于 Keysight 官方红黑设计风格的高性能仪表选件配置与预览系统，包含 12 款旗舰仪表、1,074 张完整选件卡片、100% 对应 Keysight 官方选件配置指南 PDF，支持中英双语切换、模块化 ES 架构、依赖冲突校验、跨步骤智能回溯导航、调试日志一键导出及 PDF/CSV 报告导出。

---

## 🚀 最新版本特性 (v2.2.5)

1. **📋 调试日志与一键导出功能**：
   - 包含全量用户点击流、切页、选件勾选与 `window.onerror` 全局异常捕获；
   - 支持一键导出包含完整系统元数据与时序 Trace 的 `.txt` 调试日志报告；
   - 接入 `sessionStorage` 持久化暂存，**刷新页面后操作日志完好保留**。

2. **📍 跨步骤依赖冲突智能导航与一键回溯 (v2.2.3/v2.2.4)**：
   - 警告红框内置 `📍 跳转至 Step X 选择` 按钮；
   - 步骤顶部内置 `↩️ 一键返回 Step Y` 提示条；
   - 切换步骤自动重置搜索过滤，彻底解决选件卡片被旧关键词隐去的问题。

3. **📄 12 款仪表官方 PDF 选件配置指南集成**：
   - 顶栏及抽屉内直接打开原厂权威选件指南 PDF。

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
