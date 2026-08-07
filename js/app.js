// Main Application Controller for Keysight Instrument Configurator (Bilingual + Full Admin CMS Editor)

import { KEYSIGHT_INSTRUMENTS as DEFAULT_KEYSIGHT_INSTRUMENTS, LICENSE_TYPES, LICENSE_TERMS } from './data/index.js';
import { RuleEngine } from './engine/ruleEngine.js';
import { ExportUtils } from './utils/exportUtils.js';
import { logger } from './utils/logger.js';

export const APP_VERSION = "v2.2.8";

const DEFAULT_RECOMMENDED_IDS = [
  "N9010B-PFR", // Precision Frequency Reference
  "N9010B-B40", // 40 MHz Analysis Bandwidth
  "N9010B-EA3", // Electronic Attenuator
  "E9060EM0E", // 5G NR Application
  "E9068EM0E", // Phase Noise Application
  "89601200C"  // 89600 VSA Basic
];

const I18N = {
  zh: {
    configSteps: "配置步骤 (Configuration Steps)",
    searchPlaceholder: "搜索选件编号或关键词 (如: 544, P07, 5G, B40)...",
    importConfig: "导入配置",
    reset: "重置",
    admin: "后台管理",
    configPreview: "配置实时预览",
    docNumber: "手册资料编号: 5992-1253",
    maxFreq: "最大频率:",
    bandwidth: "分析带宽:",
    preamp: "前置放大:",
    baseIncluded: "基础出厂标配组件",
    selectedList: "已选选件清单",
    exportPdf: "生成并打印 PDF 报告",
    exportCsv: "导出 CSV",
    exportJson: "保存 JSON",
    mobileLabel: "已选择选件:",
    mobileBtn: "查看配置预览",
    notSelected: "未选择",
    none: "无",
    standardPrice: "出厂标配",
    standardTag: "🔒 出厂标配 (固定)",
    recommendedTag: "⭐ 建议选件",
    viewDetails: "查看详情",
    modalTitle: "选件详情",
    standardModalBtn: "🔒 出厂标配选件",
    selectModalBtn: "选择此选件",
    cancelModalBtn: "取消选择此选件",
    confirmReset: "确定要重置已选选件并恢复出厂标配吗？",
    importSuccess: "配置文件导入成功！",
    importFail: "配置文件解析失败：格式不规范",
    adminModalTitle: "后台维护 - 仪表与选件全量管理 (Admin CMS)",
    resetRec: "重置为默认建议",
    adminSave: "保存并应用设置",
    adminSearchPlaceholder: "在后台搜索选件编号或名称...",
    loginTitle: "管理员身份验证 (Admin Password Required)",
    loginNotice: "进入后台维护需验证管理员密码（默认初始密码: <strong>admin</strong>）：",
    loginBtn: "验证并登录",
    pwdError: "密码错误，请重新输入！",
    loggerBtn: "调试日志",
    loggerTitle: "📋 操作运行与调试日志 (Operation & Debug Logs)",
    standardItems: [
      "物理频谱分析应用软件标准版",
      "四核高性能处理器 / 16 GB RAM",
      "可拆卸 M.2 NVMe 固态硬盘",
      "Windows 11 操作系统"
    ]
  },
  en: {
    configSteps: "Configuration Steps",
    searchPlaceholder: "Search option code or keyword (e.g. 544, P07, 5G, B40)...",
    importConfig: "Import Config",
    reset: "Reset",
    admin: "Admin",
    configPreview: "Configuration Preview",
    docNumber: "Document Ref No.: 5992-1253",
    maxFreq: "Max Frequency:",
    bandwidth: "Analysis Bandwidth:",
    preamp: "Preamplifier:",
    baseIncluded: "Base Factory Included Items",
    selectedList: "Selected Options List",
    exportPdf: "Generate & Print PDF Report",
    exportCsv: "Export CSV",
    exportJson: "Save JSON",
    mobileLabel: "Selected Options:",
    mobileBtn: "View Preview",
    notSelected: "Not Selected",
    none: "None",
    standardPrice: "Standard",
    standardTag: "🔒 Factory Standard",
    recommendedTag: "⭐ Recommended",
    viewDetails: "View Details",
    modalTitle: "Option Details",
    standardModalBtn: "🔒 Factory Standard Option",
    selectModalBtn: "Select This Option",
    cancelModalBtn: "Deselect This Option",
    confirmReset: "Are you sure you want to reset selected options to factory defaults?",
    importSuccess: "Configuration imported successfully!",
    importFail: "Import failed: Invalid file format",
    adminModalTitle: "Admin Maintenance & CMS Editor",
    resetRec: "Reset to Default Recommendations",
    adminSave: "Save & Apply Settings",
    adminSearchPlaceholder: "Search option code or name in admin...",
    loginTitle: "Admin Authentication Required",
    loginNotice: "Enter admin password to access maintenance mode (Default Password: <strong>admin</strong>):",
    loginBtn: "Authenticate & Login",
    pwdError: "Incorrect password! Please try again.",
    standardItems: [
      "Spectrum Analyzer Application (Standard)",
      "Quad-core High Performance Processor / 16 GB RAM",
      "Removable M.2 NVMe Solid-State Drive",
      "Windows 11 Operating System"
    ]
  }
};

class ConfiguratorApp {
  constructor() {
    // Load instruments dataset from localStorage or default n9010bData.js
    this.instrumentsData = this.loadInstrumentsDataFromStorage();
    this.currentInstrument = this.instrumentsData[0];
    
    this.currentStepId = "step1";
    this.currentLang = "zh"; // "zh" | "en"
    this.selectedOptionIds = [];
    this.selectedLicenses = {}; // optionId -> { licenseType, licenseTerm }
    this.searchQuery = "";
    
    // Load recommended option IDs from localStorage or defaults
    this.recommendedOptionIds = this.loadRecommendedFromStorage();
    
    // Admin password (default: "admin")
    this.adminPassword = localStorage.getItem("ks_admin_password") || "admin";
    this.currentAdminTab = "instInfo"; // "instInfo" | "optEditor" | "recOpts"

    this.initDOM();
    this.loadDefaultPresets();
    this.bindEvents();
    logger.info("APP_INIT", `Keysight Configurator initialized ${APP_VERSION}`);
    this.render();
  }

  loadInstrumentsDataFromStorage() {
    try {
      const saved = localStorage.getItem("ks_instrument_data_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const uniqueMap = new Map();
          parsed.forEach(inst => {
            if (inst && inst.id) uniqueMap.set(inst.id, inst);
          });

          DEFAULT_KEYSIGHT_INSTRUMENTS.forEach(defInst => {
            if (!uniqueMap.has(defInst.id)) {
              uniqueMap.set(defInst.id, JSON.parse(JSON.stringify(defInst)));
            } else {
              const existing = uniqueMap.get(defInst.id);
              const defOpts = defInst.steps ? defInst.steps.reduce((acc, s) => acc + s.options.length, 0) : 0;
              const existOpts = existing.steps ? existing.steps.reduce((acc, s) => acc + s.options.length, 0) : 0;
              if (defOpts > existOpts) {
                uniqueMap.set(defInst.id, JSON.parse(JSON.stringify(defInst)));
              }
            }
          });
          return Array.from(uniqueMap.values());
        }
      }
    } catch(e) {}
    return JSON.parse(JSON.stringify(DEFAULT_KEYSIGHT_INSTRUMENTS));
  }

  saveInstrumentsDataToStorage() {
    try {
      localStorage.setItem("ks_instrument_data_v1", JSON.stringify(this.instrumentsData));
    } catch(e) {}
  }

  loadRecommendedFromStorage() {
    try {
      const saved = localStorage.getItem("ks_recommended_opts");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch(e) {}
    return [...DEFAULT_RECOMMENDED_IDS];
  }

  saveRecommendedToStorage() {
    try {
      localStorage.setItem("ks_recommended_opts", JSON.stringify(this.recommendedOptionIds));
    } catch(e) {}
  }

  initDOM() {
    this.dom = {
      modelSelect: document.getElementById("modelSelect"),
      searchInput: document.getElementById("searchInput"),
      importBtn: document.getElementById("importBtn"),
      jsonFileInput: document.getElementById("jsonFileInput"),
      resetBtn: document.getElementById("resetBtn"),
      stepTabs: document.getElementById("stepTabs"),
      stepContent: document.getElementById("stepContent"),
      alertContainer: document.getElementById("alertContainer"),
      progressFill: document.getElementById("progressFill"),
      completedStepsText: document.getElementById("completedStepsText"),
      
      // Admin Password Login Modal Elements
      adminLoginModal: document.getElementById("adminLoginModal"),
      adminPasswordInput: document.getElementById("adminPasswordInput"),
      pwdErrorMsg: document.getElementById("pwdErrorMsg"),
      loginSubmitBtn: document.getElementById("loginSubmitBtn"),
      loginCancelBtn: document.getElementById("loginCancelBtn"),
      loginCloseBtn: document.getElementById("loginCloseBtn"),
      txtLoginTitle: document.getElementById("txtLoginTitle"),
      txtLoginNotice: document.getElementById("txtLoginNotice"),
      txtLoginBtn: document.getElementById("txtLoginBtn"),

      // Admin Maintenance & CMS Elements
      adminBtn: document.getElementById("adminBtn"),
      adminModal: document.getElementById("adminModal"),
      adminModalBody: document.getElementById("adminModalBody"),
      adminOptEditorBody: document.getElementById("adminOptEditorBody"),
      adminSearchInput: document.getElementById("adminSearchInput"),
      adminOptSearchInput: document.getElementById("adminOptSearchInput"),
      adminStepFilter: document.getElementById("adminStepFilter"),
      addNewOptBtn: document.getElementById("addNewOptBtn"),
      adminCloseBtn: document.getElementById("adminCloseBtn"),
      adminSaveBtn: document.getElementById("adminSaveBtn"),
      resetRecBtn: document.getElementById("resetRecBtn"),
      resetSystemDataBtn: document.getElementById("resetSystemDataBtn"),
      txtAdminModalTitle: document.getElementById("txtAdminModalTitle"),
      txtResetRec: document.getElementById("txtResetRec"),
      txtAdminSave: document.getElementById("txtAdminSave"),

      // Instrument Form Inputs
      cfgInstName: document.getElementById("cfgInstName"),
      cfgInstSubtitle: document.getElementById("cfgInstSubtitle"),
      cfgInstDoc: document.getElementById("cfgInstDoc"),
      cfgInstDesc: document.getElementById("cfgInstDesc"),
      cfgSpecDisplay: document.getElementById("cfgSpecDisplay"),
      cfgSpecProcessor: document.getElementById("cfgSpecProcessor"),
      cfgSpecStorage: document.getElementById("cfgSpecStorage"),
      cfgSpecOS: document.getElementById("cfgSpecOS"),

      // Edit Option Sub-Modal Elements
      editOptionSubModal: document.getElementById("editOptionSubModal"),
      optSubModalTitle: document.getElementById("optSubModalTitle"),
      editOptForm: document.getElementById("editOptForm"),
      editOptId: document.getElementById("editOptId"),
      editOptStepId: document.getElementById("editOptStepId"),
      editOptCode: document.getElementById("editOptCode"),
      editOptName: document.getElementById("editOptName"),
      editOptEnglishName: document.getElementById("editOptEnglishName"),
      editOptCategory: document.getElementById("editOptCategory"),
      editOptPrice: document.getElementById("editOptPrice"),
      editOptDesc: document.getElementById("editOptDesc"),
      editOptEnglishDesc: document.getElementById("editOptEnglishDesc"),
      editOptIsStandard: document.getElementById("editOptIsStandard"),
      editOptIsRecommended: document.getElementById("editOptIsRecommended"),
      editOptCloseBtn: document.getElementById("editOptCloseBtn"),
      editOptCancelBtn: document.getElementById("editOptCancelBtn"),
      editOptSaveBtn: document.getElementById("editOptSaveBtn"),

      // Logger DOMs
      loggerBtn: document.getElementById("loggerBtn"),
      loggerModal: document.getElementById("loggerModal"),
      loggerCloseBtn: document.getElementById("loggerCloseBtn"),
      loggerConsole: document.getElementById("loggerConsole"),
      clearLogsBtn: document.getElementById("clearLogsBtn"),
      exportLogsBtn: document.getElementById("exportLogsBtn"),
      txtLoggerModalTitle: document.getElementById("txtLoggerModalTitle"),
      txtLogger: document.getElementById("txtLogger"),

      mobilePrevStepBtn: document.getElementById("mobilePrevStepBtn"),
      mobileNextStepBtn: document.getElementById("mobileNextStepBtn"),
      mobileDrawerTrigger: document.getElementById("mobileDrawerTrigger"),

      // Lang Switcher Buttons
      langZhBtn: document.getElementById("langZhBtn"),
      langEnBtn: document.getElementById("langEnBtn"),

      // Static text I18N elements
      txtImport: document.getElementById("txtImport"),
      txtReset: document.getElementById("txtReset"),
      txtAdmin: document.getElementById("txtAdmin"),
      txtConfigSteps: document.getElementById("txtConfigSteps"),
      txtPreviewTitle: document.getElementById("txtPreviewTitle"),
      lblMaxFreq: document.getElementById("lblMaxFreq"),
      lblBandwidth: document.getElementById("lblBandwidth"),
      lblPreamp: document.getElementById("lblPreamp"),
      txtBaseIncluded: document.getElementById("txtBaseIncluded"),
      txtSelectedList: document.getElementById("txtSelectedList"),
      txtExportPdf: document.getElementById("txtExportPdf"),
      txtExportCsv: document.getElementById("txtExportCsv"),
      txtExportJson: document.getElementById("txtExportJson"),
      txtMobileLabel: document.getElementById("txtMobileLabel"),
      txtMobileBtn: document.getElementById("txtMobileBtn"),
      
      // Preview Drawer DOMs
      datasheetBtn: document.getElementById("datasheetBtn"),
      previewDrawer: document.getElementById("previewDrawer"),
      drawerModelTitle: document.getElementById("drawerModelTitle"),
      drawerModelDoc: document.getElementById("drawerModelDoc"),
      specMaxFreq: document.getElementById("specMaxFreq"),
      specBandwidth: document.getElementById("specBandwidth"),
      specPreamp: document.getElementById("specPreamp"),
      standardList: document.getElementById("standardList"),
      selectedCount: document.getElementById("selectedCount"),
      selectedOptionsList: document.getElementById("selectedOptionsList"),
      
      // Export Buttons
      exportPdfBtn: document.getElementById("exportPdfBtn"),
      exportCsvBtn: document.getElementById("exportCsvBtn"),
      exportJsonBtn: document.getElementById("exportJsonBtn"),
      
      // Mobile Elements
      mobileCount: document.getElementById("mobileCount"),
      openMobileDrawerBtn: document.getElementById("openMobileDrawerBtn"),
      closeDrawerBtn: document.getElementById("closeDrawerBtn"),
      
      // Modal
      optionModal: document.getElementById("optionModal"),
      modalTitle: document.getElementById("modalTitle"),
      modalBody: document.getElementById("modalBody"),
      modalCloseBtn: document.getElementById("modalCloseBtn"),
      modalSelectToggleBtn: document.getElementById("modalSelectToggleBtn")
    };
  }

  loadDefaultPresets() {
    const defaultIds = [];
    if (this.currentInstrument && this.currentInstrument.steps) {
      this.currentInstrument.steps.forEach(step => {
        step.options.forEach(opt => {
          if (opt.isStandard || opt.isDefault) {
            if (!defaultIds.includes(opt.id)) {
              defaultIds.push(opt.id);
            }
          }
        });
      });
    }
    this.selectedOptionIds = defaultIds;
  }

  bindEvents() {
    // Logger Modal Events
    if (this.dom.loggerBtn) {
      this.dom.loggerBtn.addEventListener("click", () => this.openLoggerModal());
    }
    if (this.dom.loggerCloseBtn && this.dom.loggerModal) {
      this.dom.loggerCloseBtn.addEventListener("click", () => {
        this.dom.loggerModal.style.display = "none";
      });
    }
    if (this.dom.clearLogsBtn) {
      this.dom.clearLogsBtn.addEventListener("click", () => {
        logger.clearLogs();
        this.renderLoggerConsole();
      });
    }
    if (this.dom.exportLogsBtn) {
      this.dom.exportLogsBtn.addEventListener("click", () => {
        logger.action("EXPORT_LOG", "User clicked export logs");
        logger.exportLogsAsText({
          version: APP_VERSION,
          currentInstrument: this.currentInstrument,
          currentStepId: this.currentStepId,
          previousStepId: this.previousStepId,
          searchQuery: this.searchQuery,
          selectedOptionIds: this.selectedOptionIds,
          selectedLicenses: this.selectedLicenses
        });
      });
    }

    // Language Switcher Events
    if (this.dom.langZhBtn && this.dom.langEnBtn) {
      this.dom.langZhBtn.addEventListener("click", () => this.switchLanguage("zh"));
      this.dom.langEnBtn.addEventListener("click", () => this.switchLanguage("en"));
    }

    // Admin Click -> Password Verification Gate
    if (this.dom.adminBtn) {
      this.dom.adminBtn.addEventListener("click", () => this.handleAdminAccess());
    }

    // Admin Login Modal Events
    if (this.dom.loginSubmitBtn) {
      this.dom.loginSubmitBtn.addEventListener("click", () => this.verifyPasswordAndLogin());
    }
    if (this.dom.adminPasswordInput) {
      this.dom.adminPasswordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.verifyPasswordAndLogin();
      });
    }
    if (this.dom.loginCancelBtn && this.dom.adminLoginModal) {
      this.dom.loginCancelBtn.addEventListener("click", () => {
        this.dom.adminLoginModal.style.display = "none";
      });
    }
    if (this.dom.loginCloseBtn && this.dom.adminLoginModal) {
      this.dom.loginCloseBtn.addEventListener("click", () => {
        this.dom.adminLoginModal.style.display = "none";
      });
    }

    // Admin CMS Tab Switching
    if (this.dom.adminModal) {
      this.dom.adminModal.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const tab = e.currentTarget.getAttribute("data-admin-tab");
          this.switchAdminTab(tab);
        });
      });
    }

    // Admin Maintenance Modal Events
    if (this.dom.adminCloseBtn && this.dom.adminModal) {
      this.dom.adminCloseBtn.addEventListener("click", () => {
        this.dom.adminModal.style.display = "none";
      });
    }

    if (this.dom.adminSaveBtn && this.dom.adminModal) {
      this.dom.adminSaveBtn.addEventListener("click", () => {
        this.saveAdminCMSChanges();
        this.dom.adminModal.style.display = "none";
        this.render();
      });
    }

    if (this.dom.resetRecBtn) {
      this.dom.resetRecBtn.addEventListener("click", () => {
        if (confirm("重置建议选件列表为系统缺省设置？")) {
          this.recommendedOptionIds = [...DEFAULT_RECOMMENDED_IDS];
          this.renderAdminModalList();
        }
      });
    }

    if (this.dom.resetSystemDataBtn) {
      this.dom.resetSystemDataBtn.addEventListener("click", () => {
        if (confirm("确定要抹除所有自定义修改，还原为官方 5992-1253 出厂默认数据吗？")) {
          localStorage.removeItem("ks_instrument_data_v1");
          localStorage.removeItem("ks_recommended_opts");
          this.instrumentsData = JSON.parse(JSON.stringify(DEFAULT_KEYSIGHT_INSTRUMENTS));
          this.currentInstrument = this.instrumentsData[0];
          this.recommendedOptionIds = [...DEFAULT_RECOMMENDED_IDS];
          this.loadDefaultPresets();
          this.dom.adminModal.style.display = "none";
          this.render();
        }
      });
    }

    if (this.dom.adminSearchInput) {
      this.dom.adminSearchInput.addEventListener("input", () => {
        this.renderAdminModalList();
      });
    }

    if (this.dom.adminOptSearchInput || this.dom.adminStepFilter) {
      const updateOptList = () => this.renderAdminOptEditorList();
      if (this.dom.adminOptSearchInput) this.dom.adminOptSearchInput.addEventListener("input", updateOptList);
      if (this.dom.adminStepFilter) this.dom.adminStepFilter.addEventListener("change", updateOptList);
    }

    if (this.dom.addNewOptBtn) {
      this.dom.addNewOptBtn.addEventListener("click", () => {
        this.openEditOptionSubModal(null);
      });
    }

    // Option Edit Sub-Modal Events
    if (this.dom.editOptCloseBtn && this.dom.editOptionSubModal) {
      this.dom.editOptCloseBtn.addEventListener("click", () => {
        this.dom.editOptionSubModal.style.display = "none";
      });
    }
    if (this.dom.editOptCancelBtn && this.dom.editOptionSubModal) {
      this.dom.editOptCancelBtn.addEventListener("click", () => {
        this.dom.editOptionSubModal.style.display = "none";
      });
    }
    if (this.dom.editOptSaveBtn) {
      this.dom.editOptSaveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.saveOptionFromSubModal();
      });
    }

    // 1. Horizontal Step Tabs Event Delegation
    if (this.dom.stepTabs) {
      this.dom.stepTabs.addEventListener("click", (e) => {
        const tabBtn = e.target.closest("[data-step-id]");
        if (tabBtn) {
          const stepId = tabBtn.getAttribute("data-step-id");
          this.setCurrentStep(stepId);
        }
      });
    }

    // 2. Options Grid Event Delegation
    if (this.dom.stepContent) {
      this.dom.stepContent.addEventListener("click", (e) => {
        if (e.target.tagName === "SELECT" || e.target.tagName === "OPTION" || e.target.closest(".license-select-box")) {
          return;
        }

        const returnBtn = e.target.closest("[data-action='return-step']");
        if (returnBtn) {
          if (this.previousStepId) {
            const target = this.previousStepId;
            this.previousStepId = null;
            this.setCurrentStep(target);
          }
          return;
        }

        const detailBtn = e.target.closest("[data-action='detail']");
        if (detailBtn) {
          e.stopPropagation();
          const optId = detailBtn.getAttribute("data-opt-id");
          this.openOptionDetailModal(optId);
          return;
        }

        const card = e.target.closest(".option-card");
        if (card) {
          const optId = card.getAttribute("data-opt-id");
          if (optId) this.toggleOption(optId);
        }
      });

      this.dom.stepContent.addEventListener("change", (e) => {
        if (e.target.hasAttribute("data-lic-opt-id")) {
          const optId = e.target.getAttribute("data-lic-opt-id");
          const key = e.target.getAttribute("data-lic-key");
          this.updateLicense(optId, key, e.target.value);
        }
      });
    }

    // 3. Drawer Selected Items Delegation
    if (this.dom.selectedOptionsList) {
      this.dom.selectedOptionsList.addEventListener("click", (e) => {
        const removeBtn = e.target.closest("[data-action='remove']");
        if (removeBtn) {
          const optId = removeBtn.getAttribute("data-opt-id");
          this.removeOption(optId);
        }
      });
    }

    // 4. Alert Autofix Delegation & Navigation
    if (this.dom.alertContainer) {
      this.dom.alertContainer.addEventListener("click", (e) => {
        const fixBtn = e.target.closest("[data-action='autofix']");
        if (fixBtn) {
          const actionType = fixBtn.getAttribute("data-fix-type");
          const optionId = fixBtn.getAttribute("data-fix-opt");
          const removeOptionId = fixBtn.getAttribute("data-remove-opt");
          this.handleAutoFix(actionType, optionId, removeOptionId);
        }

        const gotoBtn = e.target.closest("[data-action='goto-step']");
        if (gotoBtn) {
          const targetStepId = gotoBtn.getAttribute("data-step-id");
          this.setCurrentStep(targetStepId);
        }
      });
    }

    // 5. Search filter
    if (this.dom.searchInput) {
      this.dom.searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderStepContent();
      });
    }

    // 6. Model Select
    if (this.dom.modelSelect) {
      this.dom.modelSelect.addEventListener("change", (e) => {
        const selected = this.instrumentsData.find(i => i.id === e.target.value);
        if (selected) {
          logger.action("SWITCH_MODEL", `Switched instrument to ${selected.name} (${selected.id})`);
          this.currentInstrument = selected;
          this.currentStepId = selected.steps && selected.steps[0] ? selected.steps[0].id : "step1";
          this.loadDefaultPresets();
          this.render();
        }
      });
    }

    // 7. Reset Button
    if (this.dom.resetBtn) {
      this.dom.resetBtn.addEventListener("click", () => {
        const t = I18N[this.currentLang];
        if (confirm(t.confirmReset)) {
          this.loadDefaultPresets();
          this.selectedLicenses = {};
          this.render();
        }
      });
    }

    // 8. Import JSON
    if (this.dom.importBtn && this.dom.jsonFileInput) {
      this.dom.importBtn.addEventListener("click", () => {
        this.dom.jsonFileInput.click();
      });

      this.dom.jsonFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
          try {
            const json = JSON.parse(evt.target.result);
            if (json.selectedOptionIds && Array.isArray(json.selectedOptionIds)) {
              this.selectedOptionIds = json.selectedOptionIds;
              this.currentInstrument.steps.forEach(s => {
                s.options.forEach(o => {
                  if (o.isStandard && !this.selectedOptionIds.includes(o.id)) {
                    this.selectedOptionIds.push(o.id);
                  }
                });
              });
              this.selectedLicenses = json.selectedLicenses || {};
              this.render();
              alert(I18N[this.currentLang].importSuccess);
            }
          } catch (err) {
            alert(I18N[this.currentLang].importFail);
          }
        };
        reader.readAsText(file);
      });
    }

    // 9. Export Buttons
    if (this.dom.exportPdfBtn) {
      this.dom.exportPdfBtn.addEventListener("click", () => {
        const selectedOpts = this.getSelectedOptionObjects();
        const val = RuleEngine.validate(this.currentInstrument, this.selectedOptionIds, this.selectedLicenses);
        ExportUtils.generatePrintableReport(this.currentInstrument, selectedOpts, this.selectedLicenses, val, this.currentLang);
      });
    }

    if (this.dom.exportCsvBtn) {
      this.dom.exportCsvBtn.addEventListener("click", () => {
        const selectedOpts = this.getSelectedOptionObjects();
        ExportUtils.exportCSV(this.currentInstrument, selectedOpts, this.selectedLicenses, this.currentInstrument.id, this.currentLang);
      });
    }

    if (this.dom.exportJsonBtn) {
      this.dom.exportJsonBtn.addEventListener("click", () => {
        ExportUtils.exportJSON(this.currentInstrument, this.selectedOptionIds, this.selectedLicenses, this.currentInstrument.id);
      });
    }

    // 10. Mobile Drawer Toggle
    if (this.dom.openMobileDrawerBtn && this.dom.previewDrawer) {
      this.dom.openMobileDrawerBtn.addEventListener("click", () => {
        this.dom.previewDrawer.classList.add("open");
      });
    }
    if (this.dom.mobileDrawerTrigger && this.dom.previewDrawer) {
      this.dom.mobileDrawerTrigger.addEventListener("click", () => {
        this.dom.previewDrawer.classList.add("open");
      });
    }
    if (this.dom.mobilePrevStepBtn) {
      this.dom.mobilePrevStepBtn.addEventListener("click", () => this.navigateRelativeStep(-1));
    }
    if (this.dom.mobileNextStepBtn) {
      this.dom.mobileNextStepBtn.addEventListener("click", () => this.navigateRelativeStep(1));
    }

    if (this.dom.closeDrawerBtn && this.dom.previewDrawer) {
      this.dom.closeDrawerBtn.addEventListener("click", () => {
        this.dom.previewDrawer.classList.remove("open");
      });
    }

    // 11. Modal Close
    if (this.dom.modalCloseBtn && this.dom.optionModal) {
      this.dom.modalCloseBtn.addEventListener("click", () => {
        this.dom.optionModal.style.display = "none";
      });
    }
  }

  handleAdminAccess() {
    const isAuthenticated = sessionStorage.getItem("ks_admin_auth") === "true";
    if (isAuthenticated) {
      this.openAdminModal();
    } else {
      if (this.dom.adminPasswordInput) this.dom.adminPasswordInput.value = "";
      if (this.dom.pwdErrorMsg) this.dom.pwdErrorMsg.style.display = "none";
      if (this.dom.adminLoginModal) this.dom.adminLoginModal.style.display = "flex";
      setTimeout(() => {
        if (this.dom.adminPasswordInput) this.dom.adminPasswordInput.focus();
      }, 100);
    }
  }

  verifyPasswordAndLogin() {
    const entered = this.dom.adminPasswordInput ? this.dom.adminPasswordInput.value : "";
    if (entered === this.adminPassword) {
      sessionStorage.setItem("ks_admin_auth", "true");
      if (this.dom.adminLoginModal) this.dom.adminLoginModal.style.display = "none";
      this.openAdminModal();
    } else {
      if (this.dom.pwdErrorMsg) {
        this.dom.pwdErrorMsg.innerText = I18N[this.currentLang].pwdError;
        this.dom.pwdErrorMsg.style.display = "block";
      }
    }
  }

  openAdminModal() {
    this.populateInstrumentInfoForm();
    this.populateStepFilterOptions();
    this.renderAdminOptEditorList();
    this.renderAdminModalList();
    this.switchAdminTab(this.currentAdminTab);
    this.dom.adminModal.style.display = "flex";
  }

  switchAdminTab(tabName) {
    this.currentAdminTab = tabName;
    if (!this.dom.adminModal) return;

    this.dom.adminModal.querySelectorAll(".admin-tab-btn").forEach(btn => {
      if (btn.getAttribute("data-admin-tab") === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const contentIds = {
      instInfo: "adminTabContent_instInfo",
      optEditor: "adminTabContent_optEditor",
      recOpts: "adminTabContent_recOpts"
    };

    Object.keys(contentIds).forEach(t => {
      const elem = document.getElementById(contentIds[t]);
      if (elem) {
        if (t === tabName) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      }
    });
  }

  populateInstrumentInfoForm() {
    const inst = this.currentInstrument;
    if (this.dom.cfgInstName) this.dom.cfgInstName.value = inst.name || "";
    if (this.dom.cfgInstSubtitle) this.dom.cfgInstSubtitle.value = inst.subtitle || "";
    if (this.dom.cfgInstDoc) this.dom.cfgInstDoc.value = inst.docNumber || "";
    if (this.dom.cfgInstDesc) this.dom.cfgInstDesc.value = inst.description || "";

    const specs = inst.baseSpecs || {};
    if (this.dom.cfgSpecDisplay) this.dom.cfgSpecDisplay.value = specs.display || "";
    if (this.dom.cfgSpecProcessor) this.dom.cfgSpecProcessor.value = specs.processor || "";
    if (this.dom.cfgSpecStorage) this.dom.cfgSpecStorage.value = specs.storage || "";
    if (this.dom.cfgSpecOS) this.dom.cfgSpecOS.value = specs.os || "";
  }

  populateStepFilterOptions() {
    if (!this.dom.adminStepFilter) return;
    const isEn = this.currentLang === "en";

    const optsHtml = `<option value="all">${isEn ? 'All Steps (15 Steps)' : '全量 15 个步骤'}</option>` +
      this.currentInstrument.steps.map(step => {
        const title = isEn ? (step.englishTitle || step.title) : step.title;
        return `<option value="${step.id}">Step ${step.stepNumber}. ${title}</option>`;
      }).join("");

    this.dom.adminStepFilter.innerHTML = optsHtml;
  }

  renderAdminOptEditorList() {
    if (!this.dom.adminOptEditorBody) return;

    const stepFilter = this.dom.adminStepFilter ? this.dom.adminStepFilter.value : "all";
    const query = this.dom.adminOptSearchInput ? this.dom.adminOptSearchInput.value.trim().toLowerCase() : "";
    const isEn = this.currentLang === "en";

    const allOptions = [];
    this.currentInstrument.steps.forEach(step => {
      if (stepFilter === "all" || step.id === stepFilter) {
        step.options.forEach(opt => {
          allOptions.push({ step, opt });
        });
      }
    });

    const filtered = query ? allOptions.filter(item => {
      const name = isEn ? (item.opt.englishName || item.opt.name) : item.opt.name;
      return item.opt.code.toLowerCase().includes(query) || (name && name.toLowerCase().includes(query));
    }) : allOptions;

    const rowsHtml = filtered.map(({ step, opt }) => {
      const isRec = this.recommendedOptionIds.includes(opt.id);
      const name = isEn ? (opt.englishName || opt.name) : opt.name;
      const priceText = opt.isStandard ? 'Standard' : (opt.priceEstimate || '-');

      return `
        <tr>
          <td style="font-weight: bold; width: 60px;">Step ${step.stepNumber}</td>
          <td style="font-family: monospace; font-weight: bold; color: var(--ks-red); width: 110px;">${opt.code}</td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">${name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${opt.category} ${opt.isStandard ? ' | <span style="color:#34d399;">🔒 标配</span>' : ''} ${isRec ? ' | <span style="color:#fbbf24;">⭐ 建议选件</span>' : ''}</div>
          </td>
          <td style="width: 100px; font-family: monospace; color: var(--ks-blue);">${priceText}</td>
          <td style="text-align: right; width: 120px;">
            <button class="btn-edit" data-action="edit-opt" data-opt-id="${opt.id}">编辑</button>
            ${opt.isStandard ? '' : `<button class="btn-delete" style="margin-left: 4px;" data-action="delete-opt" data-opt-id="${opt.id}">删除</button>`}
          </td>
        </tr>
      `;
    }).join("");

    this.dom.adminOptEditorBody.innerHTML = `
      <table class="admin-rec-table">
        <thead>
          <tr>
            <th>步骤</th>
            <th>代码</th>
            <th>名称 / 分类</th>
            <th>估价</th>
            <th style="text-align: right;">操作</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml.length > 0 ? rowsHtml : '<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 20px;">未找到匹配选件</td></tr>'}
        </tbody>
      </table>
    `;

    // Bind Edit and Delete events
    this.dom.adminOptEditorBody.querySelectorAll("[data-action='edit-opt']").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const optId = e.currentTarget.getAttribute("data-opt-id");
        this.openEditOptionSubModal(optId);
      });
    });

    this.dom.adminOptEditorBody.querySelectorAll("[data-action='delete-opt']").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const optId = e.currentTarget.getAttribute("data-opt-id");
        this.deleteOption(optId);
      });
    });
  }

  openEditOptionSubModal(optionId = null) {
    if (!this.dom.editOptionSubModal) return;
    const isEn = this.currentLang === "en";

    // Populate step select box
    if (this.dom.editOptStepId) {
      this.dom.editOptStepId.innerHTML = this.currentInstrument.steps.map(s => {
        const title = isEn ? (s.englishTitle || s.title) : s.title;
        return `<option value="${s.id}">Step ${s.stepNumber}. ${title}</option>`;
      }).join("");
    }

    if (optionId) {
      // Edit existing option
      let targetOpt = null;
      let targetStep = null;
      this.currentInstrument.steps.forEach(s => {
        const found = s.options.find(o => o.id === optionId);
        if (found) {
          targetOpt = found;
          targetStep = s;
        }
      });

      if (!targetOpt) return;

      this.dom.optSubModalTitle.innerText = `编辑选件 - ${targetOpt.code}`;
      if (this.dom.editOptId) this.dom.editOptId.value = targetOpt.id;
      if (this.dom.editOptStepId) this.dom.editOptStepId.value = targetStep.id;
      if (this.dom.editOptCode) this.dom.editOptCode.value = targetOpt.code || "";
      if (this.dom.editOptName) this.dom.editOptName.value = targetOpt.name || "";
      if (this.dom.editOptEnglishName) this.dom.editOptEnglishName.value = targetOpt.englishName || targetOpt.name || "";
      if (this.dom.editOptCategory) this.dom.editOptCategory.value = targetOpt.category || "";
      if (this.dom.editOptPrice) this.dom.editOptPrice.value = targetOpt.priceEstimate || "";
      if (this.dom.editOptDesc) this.dom.editOptDesc.value = targetOpt.description || "";
      if (this.dom.editOptEnglishDesc) this.dom.editOptEnglishDesc.value = targetOpt.englishDescription || targetOpt.description || "";
      if (this.dom.editOptIsStandard) this.dom.editOptIsStandard.checked = !!targetOpt.isStandard;
      if (this.dom.editOptIsRecommended) this.dom.editOptIsRecommended.checked = this.recommendedOptionIds.includes(targetOpt.id);
    } else {
      // Create new option
      this.dom.optSubModalTitle.innerText = "新增自定义选件";
      if (this.dom.editOptId) this.dom.editOptId.value = "";
      if (this.dom.editOptCode) this.dom.editOptCode.value = "";
      if (this.dom.editOptName) this.dom.editOptName.value = "";
      if (this.dom.editOptEnglishName) this.dom.editOptEnglishName.value = "";
      if (this.dom.editOptCategory) this.dom.editOptCategory.value = "Feature";
      if (this.dom.editOptPrice) this.dom.editOptPrice.value = "+$1,000";
      if (this.dom.editOptDesc) this.dom.editOptDesc.value = "";
      if (this.dom.editOptEnglishDesc) this.dom.editOptEnglishDesc.value = "";
      if (this.dom.editOptIsStandard) this.dom.editOptIsStandard.checked = false;
      if (this.dom.editOptIsRecommended) this.dom.editOptIsRecommended.checked = false;
    }

    this.dom.editOptionSubModal.style.display = "flex";
  }

  saveOptionFromSubModal() {
    const id = this.dom.editOptId.value;
    const stepId = this.dom.editOptStepId.value;
    const code = this.dom.editOptCode.value.trim();
    const name = this.dom.editOptName.value.trim();
    const englishName = this.dom.editOptEnglishName.value.trim() || name;
    const category = this.dom.editOptCategory.value.trim() || "Feature";
    const priceEstimate = this.dom.editOptPrice.value.trim() || "+$1,000";
    const description = this.dom.editOptDesc.value.trim();
    const englishDescription = this.dom.editOptEnglishDesc.value.trim() || description;
    const isStandard = this.dom.editOptIsStandard.checked;
    const isRecommended = this.dom.editOptIsRecommended.checked;

    if (!code || !name) {
      alert("请填写入选件代码和名称！");
      return;
    }

    const optId = id || `N9010B-CUSTOM-${Date.now()}`;

    // Remove from old step if moving step
    this.currentInstrument.steps.forEach(s => {
      const idx = s.options.findIndex(o => o.id === optId);
      if (idx > -1) s.options.splice(idx, 1);
    });

    // Add to target step
    const targetStep = this.currentInstrument.steps.find(s => s.id === stepId);
    if (targetStep) {
      const newOptObj = {
        id: optId,
        code,
        name,
        englishName,
        category,
        priceEstimate,
        description,
        englishDescription,
        isStandard
      };
      targetStep.options.push(newOptObj);
    }

    // Update recommended array
    if (isRecommended) {
      if (!this.recommendedOptionIds.includes(optId)) this.recommendedOptionIds.push(optId);
    } else {
      const recIdx = this.recommendedOptionIds.indexOf(optId);
      if (recIdx > -1) this.recommendedOptionIds.splice(recIdx, 1);
    }

    this.dom.editOptionSubModal.style.display = "none";
    this.renderAdminOptEditorList();
    this.renderAdminModalList();
  }

  deleteOption(optionId) {
    if (confirm("确定要删除此选件吗？")) {
      this.currentInstrument.steps.forEach(s => {
        const idx = s.options.findIndex(o => o.id === optionId);
        if (idx > -1) s.options.splice(idx, 1);
      });
      const selectedIdx = this.selectedOptionIds.indexOf(optionId);
      if (selectedIdx > -1) this.selectedOptionIds.splice(selectedIdx, 1);

      const recIdx = this.recommendedOptionIds.indexOf(optionId);
      if (recIdx > -1) this.recommendedOptionIds.splice(recIdx, 1);

      this.renderAdminOptEditorList();
      this.renderAdminModalList();
    }
  }

  saveAdminCMSChanges() {
    // 1. Save Instrument Metadata
    const inst = this.currentInstrument;
    if (this.dom.cfgInstName) inst.name = this.dom.cfgInstName.value.trim();
    if (this.dom.cfgInstSubtitle) inst.subtitle = this.dom.cfgInstSubtitle.value.trim();
    if (this.dom.cfgInstDoc) inst.docNumber = this.dom.cfgInstDoc.value.trim();
    if (this.dom.cfgInstDesc) inst.description = this.dom.cfgInstDesc.value.trim();

    inst.baseSpecs = inst.baseSpecs || {};
    if (this.dom.cfgSpecDisplay) inst.baseSpecs.display = this.dom.cfgSpecDisplay.value.trim();
    if (this.dom.cfgSpecProcessor) inst.baseSpecs.processor = this.dom.cfgSpecProcessor.value.trim();
    if (this.dom.cfgSpecStorage) inst.baseSpecs.storage = this.dom.cfgSpecStorage.value.trim();
    if (this.dom.cfgSpecOS) inst.baseSpecs.os = this.dom.cfgSpecOS.value.trim();

    // 2. Persist to localStorage
    this.saveInstrumentsDataToStorage();
    this.saveRecommendedToStorage();
  }

  renderAdminModalList() {
    if (!this.dom.adminModalBody) return;

    const query = this.dom.adminSearchInput ? this.dom.adminSearchInput.value.trim().toLowerCase() : "";
    const isEn = this.currentLang === "en";

    const allOptions = [];
    if (this.currentInstrument && this.currentInstrument.steps) {
      this.currentInstrument.steps.forEach(step => {
        step.options.forEach(opt => {
          allOptions.push({ step, opt });
        });
      });
    }

    const filtered = query ? allOptions.filter(item => {
      const name = isEn ? (item.opt.englishName || item.opt.name) : item.opt.name;
      return item.opt.code.toLowerCase().includes(query) || (name && name.toLowerCase().includes(query));
    }) : allOptions;

    const rowsHtml = filtered.map(({ step, opt }) => {
      const isRec = this.recommendedOptionIds.includes(opt.id);
      const name = isEn ? (opt.englishName || opt.name) : opt.name;

      return `
        <tr>
          <td style="font-weight: bold; width: 60px;">Step ${step.stepNumber}</td>
          <td style="font-family: monospace; font-weight: bold; color: var(--ks-red); width: 110px;">${opt.code}</td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">${name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${opt.category}</div>
          </td>
          <td style="text-align: right; width: 100px;">
            <label class="switch">
              <input type="checkbox" data-rec-opt-id="${opt.id}" ${isRec ? 'checked' : ''}>
              <span class="slider"></span>
            </label>
          </td>
        </tr>
      `;
    }).join("");

    this.dom.adminModalBody.innerHTML = `
      <table class="admin-rec-table">
        <thead>
          <tr>
            <th>步骤</th>
            <th>选件代码</th>
            <th>选件名称与分类</th>
            <th style="text-align: right;">标注建议选件</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml.length > 0 ? rowsHtml : '<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 20px;">未找到匹配选件</td></tr>'}
        </tbody>
      </table>
    `;

    // Bind switch change events inside admin modal
    this.dom.adminModalBody.querySelectorAll('input[data-rec-opt-id]').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const optId = e.target.getAttribute('data-rec-opt-id');
        if (e.target.checked) {
          if (!this.recommendedOptionIds.includes(optId)) {
            this.recommendedOptionIds.push(optId);
          }
        } else {
          const idx = this.recommendedOptionIds.indexOf(optId);
          if (idx > -1) {
            this.recommendedOptionIds.splice(idx, 1);
          }
        }
      });
    });
  }

  switchLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;

    if (this.dom.langZhBtn && this.dom.langEnBtn) {
      if (lang === "zh") {
        this.dom.langZhBtn.classList.add("active");
        this.dom.langEnBtn.classList.remove("active");
      } else {
        this.dom.langEnBtn.classList.add("active");
        this.dom.langZhBtn.classList.remove("active");
      }
    }

    this.render();
  }

  getSelectedOptionObjects() {
    const list = [];
    if (this.currentInstrument && this.currentInstrument.steps) {
      this.currentInstrument.steps.forEach(step => {
        step.options.forEach(opt => {
          if (this.selectedOptionIds.includes(opt.id)) {
            list.push(opt);
          }
        });
      });
    }
    return list;
  }

  toggleOption(optionId) {
    let step = null;
    let targetOpt = null;
    for (const s of this.currentInstrument.steps) {
      const found = s.options.find(o => o.id === optionId);
      if (found) {
        step = s;
        targetOpt = found;
        break;
      }
    }

    if (!step || !targetOpt) return;

    const standardOpt = step.options.find(o => o.isStandard);
    const isAlreadySelected = this.selectedOptionIds.includes(optionId);
    const isSingleChoice = step.type === "single";

    if (targetOpt.isStandard) {
      // User explicitly clicked factory standard option card
      // Deselect all non-standard upgrade options in this step, and restore factory standard
      step.options.forEach(opt => {
        if (!opt.isStandard) {
          const idx = this.selectedOptionIds.indexOf(opt.id);
          if (idx > -1) this.selectedOptionIds.splice(idx, 1);
        }
      });
      if (!this.selectedOptionIds.includes(optionId)) {
        this.selectedOptionIds.push(optionId);
      }
      logger.action("TOGGLE_OPTION", `Restored standard option ${optionId} in step ${step.id}`);
      this.render();
      return;
    }

    // Target option is a non-standard upgrade option
    if (isAlreadySelected) {
      // Deselect target upgrade option
      const idx = this.selectedOptionIds.indexOf(optionId);
      if (idx > -1) {
        this.selectedOptionIds.splice(idx, 1);
      }
      // Check if any non-standard upgrade option remains in this step
      const hasOtherNonStandard = step.options.some(o => !o.isStandard && this.selectedOptionIds.includes(o.id));
      if (!hasOtherNonStandard && standardOpt) {
        // Automatically default back to factory standard option
        if (!this.selectedOptionIds.includes(standardOpt.id)) {
          this.selectedOptionIds.push(standardOpt.id);
        }
      }
    } else {
      // Select target upgrade option
      if (isSingleChoice) {
        // Single-choice step: clear other non-standard upgrade options in this step
        step.options.forEach(opt => {
          if (!opt.isStandard) {
            const idx = this.selectedOptionIds.indexOf(opt.id);
            if (idx > -1) this.selectedOptionIds.splice(idx, 1);
          }
        });
      }
      // Automatically supersede/unselect the factory standard option in this step
      if (standardOpt) {
        const stdIdx = this.selectedOptionIds.indexOf(standardOpt.id);
        if (stdIdx > -1) this.selectedOptionIds.splice(stdIdx, 1);
      }
      this.selectedOptionIds.push(optionId);
    }

    logger.action("TOGGLE_OPTION", `Toggled option ${optionId} in step ${step.id}. Selected: ${this.selectedOptionIds.includes(optionId)}`);
    this.render();
  }

  removeOption(optionId) {
    let step = null;
    let targetOpt = null;
    this.currentInstrument.steps.forEach(s => {
      const found = s.options.find(o => o.id === optionId);
      if (found) {
        step = s;
        targetOpt = found;
      }
    });

    if (!targetOpt) return;

    if (targetOpt.isStandard) {
      return;
    }

    const idx = this.selectedOptionIds.indexOf(optionId);
    if (idx > -1) {
      this.selectedOptionIds.splice(idx, 1);

      if (step) {
        const standardOpt = step.options.find(o => o.isStandard);
        const hasOtherNonStandard = step.options.some(o => !o.isStandard && this.selectedOptionIds.includes(o.id));
        if (!hasOtherNonStandard && standardOpt) {
          if (!this.selectedOptionIds.includes(standardOpt.id)) {
            this.selectedOptionIds.push(standardOpt.id);
          }
        }
      }

      logger.action("REMOVE_OPTION", `Removed option ${optionId} via drawer`);
      this.render();
    }
  }

  renderModelSelectOptions() {
    if (!this.dom.modelSelect) return;
    
    const uniqueInstruments = [];
    const seenIds = new Set();
    for (const inst of this.instrumentsData) {
      if (inst && inst.id && !seenIds.has(inst.id)) {
        seenIds.add(inst.id);
        uniqueInstruments.push(inst);
      }
    }

    const html = uniqueInstruments.map(inst => {
      const isSelected = this.currentInstrument && this.currentInstrument.id === inst.id;
      return `<option value="${inst.id}" ${isSelected ? 'selected' : ''}>${inst.name} (${inst.subtitle || ''})</option>`;
    }).join("") + `
      <option value="E5080B" disabled>Keysight E5080B ENA (Coming Soon)</option>
    `;

    this.dom.modelSelect.innerHTML = html;
  }

  render() {
    this.renderModelSelectOptions();
    this.updateStaticI18nText();
    this.renderStepTabs();
    this.renderAlerts();
    this.renderStepContent();
    this.renderPreviewDrawer();
    
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      try {
        window.lucide.createIcons();
      } catch(e) {}
    }
  }

  updateStaticI18nText() {
    const t = I18N[this.currentLang] || I18N.zh;

    if (this.dom.searchInput) this.dom.searchInput.placeholder = t.searchPlaceholder;
    if (this.dom.txtImport) this.dom.txtImport.innerText = t.importConfig;
    if (this.dom.txtReset) this.dom.txtReset.innerText = t.reset;
    if (this.dom.txtAdmin) this.dom.txtAdmin.innerText = t.admin;
    if (this.dom.txtConfigSteps) this.dom.txtConfigSteps.innerText = t.configSteps;
    if (this.dom.txtPreviewTitle) this.dom.txtPreviewTitle.innerText = t.configPreview;
    
    if (this.dom.drawerModelTitle) this.dom.drawerModelTitle.innerText = this.currentInstrument.name || "N9010B EXA Signal Analyzer";
    
    const pdfPath = `docs/${this.currentInstrument.id.toLowerCase()}_config_guide.pdf`;
    if (this.dom.datasheetBtn) {
      this.dom.datasheetBtn.href = pdfPath;
      const isEn = this.currentLang === "en";
      this.dom.datasheetBtn.title = isEn ? "View Official Configuration Guide" : "查看 Keysight 官方 PDF 选件配置指南";
      const txtEl = document.getElementById("txtDatasheet");
      if (txtEl) txtEl.innerText = isEn ? "Config Guide" : "官方配置指南";
    }

    if (this.dom.drawerModelDoc) {
      const isEn = this.currentLang === "en";
      this.dom.drawerModelDoc.innerHTML = `
        ${isEn ? 'Doc Ref:' : '配置指南编号:'} ${this.currentInstrument.docNumber || '5992-1253'}
        <a href="${pdfPath}" target="_blank" style="margin-left: 8px; color: #64b5f6; text-decoration: underline; font-weight: 600;" title="${isEn ? 'Open PDF Configuration Guide' : '在线查阅原厂选件配置指南 PDF'}">
          📄 ${isEn ? 'Config Guide' : '查阅配置指南'}
        </a>
      `;
    }

    if (this.dom.lblMaxFreq) this.dom.lblMaxFreq.innerText = t.maxFreq;
    if (this.dom.lblBandwidth) this.dom.lblBandwidth.innerText = t.bandwidth;
    if (this.dom.lblPreamp) this.dom.lblPreamp.innerText = t.preamp;
    if (this.dom.txtBaseIncluded) this.dom.txtBaseIncluded.innerText = t.baseIncluded;
    if (this.dom.txtSelectedList) this.dom.txtSelectedList.innerText = t.selectedList;
    if (this.dom.txtExportPdf) this.dom.txtExportPdf.innerText = t.exportPdf;
    if (this.dom.txtExportCsv) this.dom.txtExportCsv.innerText = t.exportCsv;
    if (this.dom.txtExportJson) this.dom.txtExportJson.innerText = t.exportJson;
    if (this.dom.txtMobileLabel) this.dom.txtMobileLabel.innerText = t.mobileLabel;
    if (this.dom.txtMobileBtn) this.dom.txtMobileBtn.innerText = t.mobileBtn;
    if (this.dom.txtAdminModalTitle) this.dom.txtAdminModalTitle.innerText = t.adminModalTitle;
    if (this.dom.txtResetRec) this.dom.txtResetRec.innerText = t.resetRec;
    if (this.dom.txtAdminSave) this.dom.txtAdminSave.innerText = t.adminSave;
    if (this.dom.adminSearchInput) this.dom.adminSearchInput.placeholder = t.adminSearchPlaceholder;
    if (this.dom.txtLoginTitle) this.dom.txtLoginTitle.innerText = t.loginTitle;
    if (this.dom.txtLoginNotice) this.dom.txtLoginNotice.innerHTML = t.loginNotice;
    if (this.dom.txtLoginBtn) this.dom.txtLoginBtn.innerText = t.loginBtn;

    if (this.dom.standardList && this.currentInstrument.baseSpecs) {
      const specs = this.currentInstrument.baseSpecs;
      this.dom.standardList.innerHTML = `
        <li>${specs.display || '10.6-inch multi-touch display'}</li>
        <li>${specs.processor || 'Quad-core high-performance processor'}</li>
        <li>${specs.storage || 'Removable M.2 NVMe SSD'}</li>
        <li>${specs.os || 'Windows 11 Operating System'}</li>
      `;
    }
  }

  renderStepTabs() {
    if (!this.dom.stepTabs || !this.currentInstrument || !this.currentInstrument.steps) return;

    const steps = this.currentInstrument.steps;
    const isEn = this.currentLang === "en";

    this.dom.stepTabs.innerHTML = steps.map(step => {
      const isCurrent = step.id === this.currentStepId;
      const countInStep = step.options.filter(o => this.selectedOptionIds.includes(o.id)).length;
      const isCompleted = countInStep > 0 || step.options.some(o => o.isStandard);
      
      const rawTitle = (isEn ? (step.englishTitle || step.title) : (step.title || step.englishTitle)) || `Step ${step.stepNumber}`;
      let shortTitle = rawTitle;
      if (shortTitle.includes(' (')) {
        shortTitle = shortTitle.split(' (')[0];
      }

      return `
        <button class="step-tab ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                data-step-id="${step.id}">
          <span>Step ${step.stepNumber}. ${shortTitle}</span>
          ${countInStep > 0 ? `<span class="badge">${countInStep}</span>` : ''}
        </button>
      `;
    }).join("");

    const stepIdx = steps.findIndex(s => s.id === this.currentStepId) + 1;
    if (this.dom.completedStepsText) {
      this.dom.completedStepsText.innerText = `Step ${stepIdx > 0 ? stepIdx : 1} / ${steps.length}`;
    }
    if (this.dom.progressFill) {
      this.dom.progressFill.style.width = `${((stepIdx > 0 ? stepIdx : 1) / steps.length) * 100}%`;
    }

    const currentIdx = steps.findIndex(s => s.id === this.currentStepId);
    if (this.dom.mobilePrevStepBtn) {
      this.dom.mobilePrevStepBtn.disabled = currentIdx <= 0;
      this.dom.mobilePrevStepBtn.style.opacity = currentIdx <= 0 ? "0.4" : "1";
    }
    if (this.dom.mobileNextStepBtn) {
      this.dom.mobileNextStepBtn.disabled = currentIdx >= steps.length - 1;
      this.dom.mobileNextStepBtn.style.opacity = currentIdx >= steps.length - 1 ? "0.4" : "1";
    }
  }

  navigateRelativeStep(delta) {
    if (!this.currentInstrument || !this.currentInstrument.steps) return;
    const steps = this.currentInstrument.steps;
    const currentIdx = steps.findIndex(s => s.id === this.currentStepId);
    if (currentIdx === -1) return;

    const targetIdx = currentIdx + delta;
    if (targetIdx >= 0 && targetIdx < steps.length) {
      this.setCurrentStep(steps[targetIdx].id);
      if (this.dom.stepContentContainer) {
        this.dom.stepContentContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  setCurrentStep(stepId, preserveSearch = false) {
    if (this.currentStepId !== stepId) {
      logger.action("NAVIGATE_STEP", `Navigated from ${this.currentStepId} to ${stepId}`);
      this.previousStepId = this.currentStepId;
      this.currentStepId = stepId;
      if (!preserveSearch) {
        this.searchQuery = "";
        if (this.dom.searchInput) this.dom.searchInput.value = "";
      }
      this.render();

      setTimeout(() => {
        const activeTab = document.querySelector(`.step-tab[data-step-id="${stepId}"]`);
        if (activeTab) {
          activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 50);
    }
  }

  renderAlerts() {
    if (!this.dom.alertContainer) return;

    const validation = RuleEngine.validate(this.currentInstrument, this.selectedOptionIds, this.selectedLicenses);
    
    if (validation.alerts.length === 0) {
      this.dom.alertContainer.innerHTML = "";
      return;
    }

    const isEn = this.currentLang === "en";

    this.dom.alertContainer.innerHTML = validation.alerts.map(a => {
      const alertTitle = isEn ? (a.englishTitle || a.title) : a.title;
      const alertMsg = isEn ? (a.englishMessage || a.message) : a.message;
      const fixText = a.fixAction ? (isEn ? (a.fixAction.englishText || a.fixAction.text) : a.fixAction.text) : "";
      const fixTextAlt = a.fixActionAlt ? (isEn ? (a.fixActionAlt.englishText || a.fixActionAlt.text) : a.fixActionAlt.text) : "";
      
      const targetStepObj = a.targetStepId ? this.currentInstrument.steps.find(s => s.id === a.targetStepId) : null;
      const showGotoBtn = a.targetStepId && this.currentStepId !== a.targetStepId;

      return `
        <div class="alert-banner alert-${a.type}">
          <div class="alert-content">
            <i data-lucide="${a.type === 'danger' ? 'alert-triangle' : 'info'}" class="alert-icon"></i>
            <div>
              <div class="alert-title">${alertTitle}</div>
              <div>${alertMsg}</div>
            </div>
          </div>
          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            ${showGotoBtn ? `
              <button class="alert-fix-btn" style="background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.5);" data-action="goto-step" data-step-id="${a.targetStepId}">
                📍 ${isEn ? `Go to Step ${targetStepObj ? targetStepObj.stepNumber : ''}` : `跳转至 Step ${targetStepObj ? targetStepObj.stepNumber : ''} 选择`}
              </button>
            ` : ''}
            ${a.fixAction ? `
              <button class="alert-fix-btn" data-action="autofix" data-fix-type="${a.fixAction.actionType}" data-fix-opt="${a.fixAction.targetOptionId || a.fixAction.optionId}" data-remove-opt="${a.fixAction.removeOptionId || ''}">
                ⚡ ${fixText}
              </button>
            ` : ''}
            ${a.fixActionAlt ? `
              <button class="alert-fix-btn" style="background: rgba(16,185,129,0.3); border: 1px solid rgba(16,185,129,0.6);" data-action="autofix" data-fix-type="${a.fixActionAlt.actionType}" data-fix-opt="${a.fixActionAlt.targetOptionId || a.fixActionAlt.optionId}" data-remove-opt="${a.fixActionAlt.removeOptionId || ''}">
                ⚡ ${fixTextAlt}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  handleAutoFix(actionType, optionId, removeOptionId) {
    logger.action("AUTO_FIX", `Applied autofix ${actionType} optionId=${optionId} removeOptionId=${removeOptionId}`);
    if (actionType === "change_preamp") {
      if (removeOptionId) {
        const idx = this.selectedOptionIds.indexOf(removeOptionId);
        if (idx > -1) this.selectedOptionIds.splice(idx, 1);
      }
      if (optionId && !this.selectedOptionIds.includes(optionId)) {
        this.selectedOptionIds.push(optionId);
      }
    } else if (actionType === "remove_option") {
      const idx = this.selectedOptionIds.indexOf(optionId);
      if (idx > -1) this.selectedOptionIds.splice(idx, 1);
    } else if (actionType === "add_option" || actionType === "change_freq") {
      if (actionType === "change_freq") {
        const step1 = this.currentInstrument.steps.find(s => s.stepNumber === 1);
        if (step1) {
          step1.options.forEach(o => {
            if (!o.isStandard) {
              const idx = this.selectedOptionIds.indexOf(o.id);
              if (idx > -1) this.selectedOptionIds.splice(idx, 1);
            }
          });
        }
      }
      if (optionId && !this.selectedOptionIds.includes(optionId)) {
        this.selectedOptionIds.push(optionId);
      }
    }
    this.render();
  }

  renderStepContent() {
    if (!this.dom.stepContent) return;

    const step = this.currentInstrument.steps.find(s => s.id === this.currentStepId);
    if (!step) return;

    const isEn = this.currentLang === "en";
    const t = I18N[this.currentLang] || I18N.zh;

    let optionsToShow = step.options;
    if (this.searchQuery) {
      optionsToShow = step.options.filter(o => {
        const nameText = isEn ? (o.englishName || o.name) : o.name;
        const descText = isEn ? (o.englishDescription || o.description) : o.description;
        return o.code.toLowerCase().includes(this.searchQuery) ||
               (nameText && nameText.toLowerCase().includes(this.searchQuery)) ||
               (descText && descText.toLowerCase().includes(this.searchQuery));
      });
    }

    const optionsHtml = optionsToShow.map(opt => {
      const isSelected = this.selectedOptionIds.includes(opt.id);
      const isStandardOpt = opt.isStandard;
      const isRecommended = this.recommendedOptionIds.includes(opt.id);

      const optName = isEn ? (opt.englishName || opt.name) : opt.name;
      const optDesc = isEn ? (opt.englishDescription || opt.description) : opt.description;
      const priceText = isStandardOpt ? t.standardPrice : (opt.priceEstimate || 'Standard');
      
      const standardBadgeText = isStandardOpt ? (isSelected ? (isEn ? "🔒 Standard (Included)" : "🔒 出厂标配 (出厂包含)") : (isEn ? "🔒 Standard (Superseded)" : "🔒 出厂标配 (已由升级替代)")) : "";

      return `
        <div class="option-card ${isSelected ? 'selected' : ''} ${isStandardOpt ? (isSelected ? 'standard locked' : 'standard-superseded') : ''} ${isRecommended ? 'recommended' : ''}"
             data-opt-id="${opt.id}">
          <div>
            <div class="card-top">
              <span class="opt-code-tag">${opt.code}</span>
              <div style="display: flex; gap: 4px; align-items: center;">
                ${isRecommended ? `<span class="opt-recommended-badge">${t.recommendedTag}</span>` : ''}
                ${isStandardOpt ? `<span class="opt-standard-badge" style="${!isSelected ? 'opacity: 0.65; background: #334155;' : ''}">${standardBadgeText}</span>` : ''}
              </div>
              <div class="checkbox-custom">
                ${isSelected ? '<i data-lucide="check" style="width: 14px; height: 14px;"></i>' : ''}
              </div>
            </div>
            
            <div class="card-title" style="margin-top: 8px;">${optName}</div>
            <div class="card-desc" style="margin-top: 4px;">${optDesc}</div>
          </div>

          <div class="card-bottom">
            <span class="price-text">${priceText}</span>
            <button class="btn btn-ghost" style="padding: 2px 6px; font-size: 11px;" 
                    data-action="detail" data-opt-id="${opt.id}">
              ${t.viewDetails} <i data-lucide="chevron-right"></i>
            </button>
          </div>

          ${opt.supportsLicense && isSelected ? this.renderLicenseSelectBox(opt.id) : ''}
        </div>
      `;
    }).join("");

    const stepTitle = isEn ? (step.englishTitle || step.title) : step.title;
    const stepSubtitle = isEn ? (step.englishSubtitle || step.subtitle) : step.subtitle;

    const prevStepObj = this.previousStepId ? this.currentInstrument.steps.find(s => s.id === this.previousStepId) : null;
    const showReturnBar = prevStepObj && this.previousStepId !== this.currentStepId;

    this.dom.stepContent.innerHTML = `
      ${showReturnBar ? `
        <div class="return-step-banner" style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 10px 14px; border-radius: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
          <span>💡 ${isEn ? `Finished selecting? You can return to Step ${prevStepObj.stepNumber}.` : `已在当前步骤完成选择？可一键返回刚才的 Step ${prevStepObj.stepNumber} (${prevStepObj.title})`}</span>
          <button class="btn btn-ghost" style="background: #2563eb; color: #fff; font-weight: 600; padding: 4px 12px; border-radius: 6px; font-size: 12px; cursor: pointer;" data-action="return-step">
            ↩️ ${isEn ? `Return to Step ${prevStepObj.stepNumber}` : `一键返回 Step ${prevStepObj.stepNumber}`}
          </button>
        </div>
      ` : ''}

      <div class="step-header-box">
        <h3>Step ${step.stepNumber}. ${stepTitle}</h3>
        <p>${stepSubtitle}</p>
      </div>

      <div class="options-grid">
        ${optionsHtml.length > 0 ? optionsHtml : `<div style="color: var(--text-muted); grid-column: 1/-1; padding: 20px;">${isEn ? 'No matching options found' : '未搜索到匹配选件'}</div>`}
      </div>
    `;
  }

  renderLicenseSelectBox(optionId) {
    const currentLic = this.selectedLicenses[optionId] || { licenseType: "NODE_LOCKED", licenseTerm: "PERPETUAL" };
    const isEn = this.currentLang === "en";
    
    const types = Array.isArray(LICENSE_TYPES) ? LICENSE_TYPES : Object.values(LICENSE_TYPES);
    const terms = Array.isArray(LICENSE_TERMS) ? LICENSE_TERMS : Object.values(LICENSE_TERMS);

    return `
      <div class="license-select-box">
        <label>🔑 ${isEn ? "License Type:" : "选件授权类型 (License Type):"}</label>
        <select data-lic-opt-id="${optionId}" data-lic-key="licenseType">
          ${types.map(lt => `<option value="${lt.id}" ${currentLic.licenseType === lt.id ? 'selected' : ''}>${isEn ? (lt.englishName || lt.name) : lt.name}</option>`).join("")}
        </select>

        <label style="margin-top: 4px;">📅 ${isEn ? "License Term:" : "授权期限 (License Term):"}</label>
        <select data-lic-opt-id="${optionId}" data-lic-key="licenseTerm">
          ${terms.map(lt => `<option value="${lt.id}" ${currentLic.licenseTerm === lt.id ? 'selected' : ''}>${isEn ? (lt.englishName || lt.name) : lt.name}</option>`).join("")}
        </select>
      </div>
    `;
  }

  updateLicense(optionId, key, val) {
    if (!this.selectedLicenses[optionId]) {
      this.selectedLicenses[optionId] = { licenseType: "NODE_LOCKED", licenseTerm: "PERPETUAL" };
    }
    this.selectedLicenses[optionId][key] = val;
    logger.action("UPDATE_LICENSE", `Updated license for ${optionId}: ${key} = ${val}`);
    this.render();
  }

  renderPreviewDrawer() {
    const selectedOpts = this.getSelectedOptionObjects();
    const t = I18N[this.currentLang] || I18N.zh;
    const isEn = this.currentLang === "en";

    if (this.dom.specMaxFreq) {
      const freqOpt = selectedOpts.find(o => o.category === "Frequency");
      this.dom.specMaxFreq.innerText = freqOpt ? `${freqOpt.freqMaxGHz || ''} GHz (${freqOpt.code})` : t.notSelected;
    }

    if (this.dom.specBandwidth) {
      const bwOpt = selectedOpts.find(o => o.category === "Analysis Bandwidth" && !o.isStandard);
      this.dom.specBandwidth.innerText = bwOpt ? `${bwOpt.bandwidthMHz || ''} MHz (${bwOpt.code})` : "25 MHz (Standard)";
    }

    if (this.dom.specPreamp) {
      const preampOpt = selectedOpts.find(o => o.category === "Preamplifier");
      this.dom.specPreamp.innerText = preampOpt ? `${preampOpt.code} (${isEn ? 'Up to' : '至'} ${preampOpt.freqLimitGHz || ''}GHz)` : t.none;
    }

    if (this.dom.selectedCount) this.dom.selectedCount.innerText = selectedOpts.length;
    if (this.dom.mobileCount) this.dom.mobileCount.innerText = `${selectedOpts.length} ${isEn ? 'Items' : '项'}`;

    if (this.dom.selectedOptionsList) {
      this.dom.selectedOptionsList.innerHTML = selectedOpts.map(opt => {
        const optName = isEn ? (opt.englishName || opt.name) : opt.name;

        return `
          <div class="selected-opt-item ${opt.isStandard ? 'standard-item' : ''}">
            <div>
              <span class="opt-code">${opt.code}</span>
              <div class="opt-name">${optName}</div>
            </div>
            ${opt.isStandard ? 
              `<span class="lock-tag" title="${isEn ? 'Standard' : '出厂标配不可删除'}">🔒 ${isEn ? 'Standard' : '标配'}</span>` : 
              `<button class="btn btn-ghost" style="padding: 2px;" data-action="remove" data-opt-id="${opt.id}">
                <i data-lucide="trash-2" style="width: 14px; height: 14px; color: var(--color-danger);"></i>
              </button>`
            }
          </div>
        `;
      }).join("");
    }
  }

  openOptionDetailModal(optionId) {
    let targetOpt = null;
    this.currentInstrument.steps.forEach(s => {
      const found = s.options.find(o => o.id === optionId);
      if (found) targetOpt = found;
    });

    if (!targetOpt) return;

    const isSelected = this.selectedOptionIds.includes(optionId);
    const isRecommended = this.recommendedOptionIds.includes(optionId);
    const isEn = this.currentLang === "en";
    const t = I18N[this.currentLang] || I18N.zh;

    const optName = isEn ? (targetOpt.englishName || targetOpt.name) : targetOpt.name;
    const optDesc = isEn ? (targetOpt.englishDescription || targetOpt.description) : targetOpt.description;

    this.dom.modalTitle.innerText = `${t.modalTitle} - ${targetOpt.code}`;
    this.dom.modalBody.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <div style="font-size: 16px; font-weight: bold; color: var(--ks-red);">
          ${optName}
        </div>
        ${isRecommended ? `<span class="opt-recommended-badge" style="font-size: 12px;">${t.recommendedTag}</span>` : ''}
      </div>
      <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
        ${targetOpt.code} (${targetOpt.category})
      </div>

      <p><strong>${isEn ? 'Description:' : '功能说明：'}</strong>${optDesc}</p>
      <p style="margin-top: 10px;"><strong>${isEn ? 'Category:' : '选件类别：'}</strong>${targetOpt.category}</p>
      <p style="margin-top: 6px;"><strong>${isEn ? 'Price Estimate:' : '参考估价：'}</strong><span style="color: var(--ks-blue); font-weight: bold;">${targetOpt.isStandard ? t.standardPrice : (targetOpt.priceEstimate || 'Standard')}</span></p>
      
      ${targetOpt.compatibleFreqs ? `<p style="margin-top: 6px; color: var(--color-warning);">⚠️ ${isEn ? 'Compatible Freq Options:' : '兼容频率范围选件:'} Option ${targetOpt.compatibleFreqs.join(', ')}</p>` : ''}
      ${targetOpt.requires ? `<p style="margin-top: 6px; color: var(--color-danger);">🛑 ${isEn ? 'Prerequisites Required:' : '必需前置条件:'} Option ${targetOpt.requires.join(', ')}</p>` : ''}
    `;

    this.dom.modalSelectToggleBtn.innerText = targetOpt.isStandard ? t.standardModalBtn : (isSelected ? t.cancelModalBtn : t.selectModalBtn);
    this.dom.modalSelectToggleBtn.disabled = targetOpt.isStandard;
    this.dom.modalSelectToggleBtn.onclick = (e) => {
      if (targetOpt.isStandard) return;
      if (e) e.stopPropagation();
      this.toggleOption(optionId);
      this.dom.optionModal.style.display = "none";
    };

    this.dom.optionModal.style.display = "flex";
  }

  openLoggerModal() {
    this.renderLoggerConsole();
    if (this.dom.loggerModal) this.dom.loggerModal.style.display = "flex";
  }

  renderLoggerConsole() {
    if (!this.dom.loggerConsole) return;
    const logs = logger.getLogs();
    if (logs.length === 0) {
      this.dom.loggerConsole.innerText = "暂无日志记录 (No log entries recorded yet)";
      return;
    }

    const html = logs.map((l, i) => {
      let color = "#38bdf8"; // INFO blue
      if (l.level === "WARN") color = "#fbbf24";
      if (l.level === "ERROR") color = "#f87171";
      if (l.level === "ACTION") color = "#34d399";

      const extraStr = l.extraData ? `
   └─ Data: ${JSON.stringify(l.extraData)}` : '';
      return `<div style="color: ${color}; margin-bottom: 4px;">#${String(i + 1).padStart(3, '0')} [${l.localTime}] [${l.level}] [${l.category}] ${l.message}${extraStr}</div>`;
    }).join("");

    this.dom.loggerConsole.innerHTML = html;
    this.dom.loggerConsole.scrollTop = this.dom.loggerConsole.scrollHeight;
  }
}

// Safe Instant Initialization
function initApp() {
  const versionEl = document.getElementById("appVersionTag");
  if (versionEl) {
    versionEl.innerText = APP_VERSION;
  }
  window.app = new ConfiguratorApp();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}
