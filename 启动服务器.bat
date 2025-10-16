@echo off
chcp 65001 >nul
echo ====================================
echo   发票打印助手 - 本地服务器启动工具
echo ====================================
echo.

:: 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到Node.js
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js已安装
echo.
echo [启动] 正在启动本地HTTP服务器...
echo.

:: 启动HTTP服务器
node server.js

pause
