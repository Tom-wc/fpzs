@echo off
chcp 936 >nul
echo ====================================
echo   发票打印助手 - 一键同步到 GitHub
echo ====================================
echo.

git rev-parse --is-inside-work-tree >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 当前目录不是 git 仓库，请先完成首次初始化
    echo.
    pause
    exit /b 1
)

echo [1/3] 添加所有改动（含新增/删除）...
git add -A

echo.
set /p MSG=请输入本次更新说明（直接回车用默认）:
if "%MSG%"=="" set MSG=update

echo.
echo [2/3] 提交...
git commit -m "%MSG%"

echo.
echo [3/3] 推送到 GitHub...
git push

echo.
echo [完成] 已同步。如需发布新版本，运行「发布新版本.bat」
echo.
pause
