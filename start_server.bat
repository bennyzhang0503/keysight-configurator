@echo off
chcp 65001 >nul
title Keysight Configurator Web Server
echo ========================================================
echo   Keysight 仪表选件配置系统 - Web 服务启动器
echo ========================================================
echo.
echo 1. 正在启动 Python Web 服务器 (Port: 8080)...
echo 2. 正在自动打开浏览器访问地址...
echo.

cd /d "%~dp0"
start http://localhost:8080/index.html
python -m http.server 8080

pause
