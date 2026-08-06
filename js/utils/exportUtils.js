// Export Utilities: PDF Report, CSV List, and JSON Save/Load (Bilingual Support)

export class ExportUtils {
  /**
   * Export configuration as formatted CSV file (Supports English/Chinese)
   */
  static exportCSV(instrument, selectedOptions, selectedLicenses, modelConfigName = "Keysight_N9010B_Config", lang = "zh") {
    const isEn = lang === "en";
    let csv = isEn ?
      "Step #,Category,Option Code,Option Name,Additional Details,License Type,License Term,Estimated Price\n" :
      "步骤编号,分类,选件代码,选件名称,功能说明描述,授权模式,授权期限,参考价格\n";

    selectedOptions.forEach(opt => {
      const step = instrument.steps.find(s => s.options.some(o => o.id === opt.id));
      const stepNum = step ? step.stepNumber : "-";
      const category = opt.category || "General";
      const code = `"${opt.code.replace(/"/g, '""')}"`;
      const nameStr = isEn ? (opt.englishName || opt.name) : opt.name;
      const descStr = isEn ? (opt.englishDescription || opt.description) : opt.description;

      const name = `"${nameStr.replace(/"/g, '""')}"`;
      const details = `"${(descStr || '').replace(/"/g, '""')}"`;
      
      const lic = selectedLicenses[opt.id] || {};
      const licType = lic.licenseType ? `"${lic.licenseType}"` : "-";
      const licTerm = lic.licenseTerm ? `"${lic.licenseTerm}"` : "-";
      const price = opt.isStandard ? (isEn ? "Standard" : "出厂标配") : (opt.priceEstimate || "Standard");

      csv += `${stepNum},${category},${code},${name},${details},${licType},${licTerm},"${price}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${modelConfigName}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Export configuration state as JSON file
   */
  static exportJSON(instrument, selectedOptionIds, selectedLicenses, configName = "n9010b_config") {
    const data = {
      instrumentId: instrument.id,
      instrumentName: instrument.name,
      exportTimestamp: new Date().toISOString(),
      version: "1.0",
      selectedOptionIds,
      selectedLicenses
    };

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${configName}_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Print/Generate Professional PDF Configuration Report (Bilingual)
   */
  static generatePrintableReport(instrument, selectedOptions, selectedLicenses, validationResults, lang = "zh") {
    const isEn = lang === "en";
    const timestamp = new Date().toLocaleString(isEn ? 'en-US' : 'zh-CN');
    const dateStr = new Date().toISOString().slice(0, 10);
    const reportWindow = window.open("", "_blank");

    const rowsHtml = selectedOptions.map(opt => {
      const step = instrument.steps.find(s => s.options.some(o => o.id === opt.id));
      const lic = selectedLicenses[opt.id] || {};
      const licStr = lic.licenseType ? `<span class="lic-tag">${lic.licenseType} / ${lic.licenseTerm || 'Perpetual'}</span>` : "-";
      const optName = isEn ? (opt.englishName || opt.name) : opt.name;
      const optDesc = isEn ? (opt.englishDescription || opt.description) : opt.description;
      const priceText = opt.isStandard ? (isEn ? "Standard" : "出厂标配") : (opt.priceEstimate || 'Standard');

      return `
        <tr>
          <td><strong>Step ${step ? step.stepNumber : '-'}</strong></td>
          <td><span class="code-badge">${opt.code}</span></td>
          <td>
            <div class="opt-title">${optName}</div>
            <div class="opt-desc">${optDesc}</div>
          </td>
          <td>${opt.category}</td>
          <td>${licStr}</td>
          <td style="text-align: right; font-weight: bold; color: #eb0029;">${priceText}</td>
        </tr>
      `;
    }).join("");

    const baseSpecsHtml = Object.entries(instrument.baseSpecs).map(([key, val]) => `
      <div class="spec-item">
        <span class="spec-label">${key}:</span>
        <span class="spec-val">${val}</span>
      </div>
    `).join("");

    const alertsHtml = validationResults.alerts.length > 0 ? `
      <div class="alert-section">
        <h3>⚠️ ${isEn ? 'Validation & Constraint Alerts' : '校验与条件提示 (Validation Alerts)'}</h3>
        ${validationResults.alerts.map(a => `
          <div class="alert-card alert-${a.type}">
            <strong>${a.title}</strong>: ${a.message}
          </div>
        `).join("")}
      </div>
    ` : `
      <div class="alert-section alert-success">
        ✓ ${isEn ? 'All option dependencies and compatibility rules passed validation.' : '所有选件依赖与兼容性规则均校验通过，配置完整可用。'}
      </div>
    `;

    const reportTitle = isEn ? `${instrument.name} - Configuration Summary Report` : `${instrument.name} - 配置摘要清单`;
    const printNotice = isEn ? '📄 PDF Print Preview Mode (Click button on the right to print/save PDF)' : '📄 打印预览模式 (点击右侧按钮直接导出/打印 PDF)';
    const printBtnText = isEn ? 'Print / Save as PDF' : '一键打印 / 保存 PDF';

    reportWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${reportTitle} - ${dateStr}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #1e293b; background: #fff; padding: 40px; margin: 0; line-height: 1.5; }
          .header { border-bottom: 3px solid #eb0029; padding-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
          .logo { font-size: 26px; font-weight: 900; color: #eb0029; letter-spacing: -1px; }
          .logo span { color: #0f172a; font-weight: 400; }
          .meta { font-size: 13px; color: #64748b; text-align: right; }
          .title-block { margin: 25px 0 15px; }
          h1 { margin: 0; font-size: 24px; color: #0f172a; }
          .subtitle { color: #475569; font-size: 14px; margin-top: 4px; }
          .base-specs { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px 20px; margin: 20px 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px; }
          .spec-label { font-weight: 600; color: #334155; }
          .spec-val { color: #64748b; margin-left: 6px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
          th { background: #181818; color: #fff; text-align: left; padding: 10px 12px; font-weight: 600; }
          td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; }
          tr:nth-child(even) { background: #f8fafc; }
          .code-badge { background: #fef2f2; color: #eb0029; font-family: monospace; font-weight: 700; padding: 3px 8px; border-radius: 4px; font-size: 12px; border: 1px solid #fca5a5; }
          .opt-title { font-weight: 600; color: #0f172a; }
          .opt-desc { font-size: 12px; color: #64748b; margin-top: 2px; }
          .lic-tag { background: #f1f5f9; border: 1px solid #cbd5e1; font-size: 11px; padding: 2px 6px; border-radius: 4px; color: #334155; }
          .alert-section { margin-top: 30px; }
          .alert-card { padding: 12px 16px; border-radius: 6px; font-size: 13px; margin-bottom: 10px; }
          .alert-danger { background: #fef2f2; border: 1px solid #fca5a5; color: #991b1b; }
          .alert-warning { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
          .alert-success { background: #f0fdf4; border: 1px solid #86efac; color: #166534; padding: 12px; font-size: 13px; border-radius: 6px; }
          .footer { margin-top: 50px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="background: #181818; color: #fff; padding: 12px 20px; margin-bottom: 30px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span>${printNotice}</span>
          <button onclick="window.print()" style="background: #eb0029; color: white; border: none; padding: 8px 18px; border-radius: 4px; font-weight: bold; cursor: pointer;">${printBtnText}</button>
        </div>

        <div class="header">
          <div class="logo">KEYSIGHT <span>TECHNOLOGIES</span></div>
          <div class="meta">
            ${isEn ? 'Doc Ref:' : '文档编号:'} ${instrument.docNumber}<br>
            ${isEn ? 'Date:' : '生成时间:'} ${timestamp}
          </div>
        </div>

        <div class="title-block">
          <h1>${reportTitle}</h1>
          <div class="subtitle">${instrument.subtitle} | Ref Spec ${instrument.docNumber}</div>
        </div>

        <div class="base-specs">
          ${baseSpecsHtml}
        </div>

        <h3>📦 ${isEn ? 'Selected Options & Software Specification' : '已选选件及配置明细 (Selected Options & Software)'}</h3>
        <table>
          <thead>
            <tr>
              <th style="width: 70px;">${isEn ? 'Step' : '步骤'}</th>
              <th style="width: 100px;">${isEn ? 'Code' : '选件编号'}</th>
              <th>${isEn ? 'Description & Specs' : '选件描述与功能说明'}</th>
              <th style="width: 110px;">${isEn ? 'Category' : '类别'}</th>
              <th style="width: 130px;">${isEn ? 'License' : '授权模式'}</th>
              <th style="width: 100px; text-align: right;">${isEn ? 'Price' : '参考估价'}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        ${alertsHtml}

        <div class="footer">
          <div>Keysight Instrument Configurator | Reference Document Keysight N9010B EXA</div>
          <div>Page 1 of 1</div>
        </div>
      </body>
      </html>
    `);

    reportWindow.document.close();
  }
}
