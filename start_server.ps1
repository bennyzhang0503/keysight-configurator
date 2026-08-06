# Keysight Configurator One-Click Web Server Launcher
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Keysight 仪表选件配置系统 - Web 服务启动器" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "正在启动 Web 服务器并自动在默认浏览器中打开页面..." -ForegroundColor Green

Set-Location $PSScriptRoot
Start-Process "http://localhost:8080/index.html"
python -m http.server 8080
