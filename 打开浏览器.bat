@echo off
chcp 65001 >nul

echo 正在打开浏览器...
echo.

:: 打开首页
start http://localhost:8000/index.html

timeout /t 2 >nul

:: 打开功能页
start http://localhost:8000/main.html

echo.
echo [完成] 页面已在浏览器中打开
echo.
echo 如果页面未打开，请确保本地服务器正在运行
echo 双击 "启动服务器.bat" 来启动服务器
echo.
pause

