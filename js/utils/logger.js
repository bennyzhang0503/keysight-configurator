// Operation & Debug Logger Utility for Keysight Configurator

export class LoggerService {
  constructor() {
    this.maxLogs = 1000;
    this.logs = this.loadLogsFromSession();
    this.initGlobalErrorHandler();
  }

  loadLogsFromSession() {
    try {
      if (typeof sessionStorage !== "undefined") {
        const saved = sessionStorage.getItem("ks_debug_logs");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch(e) {}
    return [];
  }

  saveLogsToSession() {
    try {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.setItem("ks_debug_logs", JSON.stringify(this.logs));
      }
    } catch(e) {}
  }

  log(category, message, extraData = null, level = "INFO") {
    const entry = {
      timestamp: new Date().toISOString(),
      localTime: new Date().toLocaleTimeString(),
      level,
      category,
      message,
      extraData
    };

    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
    this.saveLogsToSession();
  }

  info(category, message, extraData) {
    this.log(category, message, extraData, "INFO");
  }

  warn(category, message, extraData) {
    this.log(category, message, extraData, "WARN");
  }

  error(category, message, extraData) {
    this.log(category, message, extraData, "ERROR");
  }

  action(category, message, extraData) {
    this.log(category, message, extraData, "ACTION");
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
    try {
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.removeItem("ks_debug_logs");
      }
    } catch(e) {}
    this.info("SYSTEM", "User cleared operation logs.");
  }

  initGlobalErrorHandler() {
    if (typeof window !== "undefined") {
      window.onerror = (msg, url, lineNo, columnNo, error) => {
        this.error("RUNTIME_EXCEPTION", `${msg} (${url}:${lineNo}:${columnNo})`, {
          stack: error ? error.stack : null
        });
        return false;
      };

      window.onunhandledrejection = (event) => {
        const reason = event.reason ? (event.reason.message || String(event.reason)) : "Unhandled Promise Rejection";
        this.error("UNHANDLED_PROMISE", reason, {
          stack: event.reason && event.reason.stack ? event.reason.stack : null
        });
      };
    }
  }

  exportLogsAsText(appContext = {}) {
    const envInfo = [
      `==================================================`,
      `KEYSIGHT CONFIGURATOR - DEBUG & OPERATION LOG EXPORT`,
      `==================================================`,
      `Export Timestamp : ${new Date().toISOString()}`,
      `App Version      : ${appContext.version || 'Unknown'}`,
      `Current Instrument: ${appContext.currentInstrument ? appContext.currentInstrument.name + ' (' + appContext.currentInstrument.id + ')' : 'None'}`,
      `Current Step ID  : ${appContext.currentStepId || 'None'}`,
      `Previous Step ID : ${appContext.previousStepId || 'None'}`,
      `Search Query     : "${appContext.searchQuery || ''}"`,
      `Selected Count   : ${appContext.selectedOptionIds ? appContext.selectedOptionIds.length : 0}`,
      `Selected Option IDs: ${appContext.selectedOptionIds ? JSON.stringify(appContext.selectedOptionIds) : '[]'}`,
      `Selected Licenses  : ${appContext.selectedLicenses ? JSON.stringify(appContext.selectedLicenses) : '{}'}`,
      `User Agent       : ${typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'}`,
      `==================================================\n\n[CHRONOLOGICAL OPERATION & DEBUG TRACE]\n`
    ].join('\n');

    const logLines = this.logs.map((l, index) => {
      const extra = l.extraData ? ` | Extra: ${JSON.stringify(l.extraData)}` : '';
      return `#${String(index + 1).padStart(3, '0')} [${l.timestamp}] [${l.level.padEnd(6)}] [${l.category.padEnd(16)}] ${l.message}${extra}`;
    }).join('\n');

    const fullContent = envInfo + (logLines.length > 0 ? logLines : "No log entries recorded.");
    const blob = new Blob([fullContent], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `keysight_debug_log_${new Date().toISOString().slice(0,19).replace(/[:T]/g, '_')}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export const logger = new LoggerService();
