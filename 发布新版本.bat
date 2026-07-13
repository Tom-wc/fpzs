@echo off
chcp 936 >nul
echo ====================================
echo   发票打印助手 - 发布新版本
echo ====================================
echo.
echo 说明：打一个版本 tag 并推送后，GitHub 会自动打包 zip 并创建 Release。
echo 版本号格式示例：v6.2.0
echo.

set /p VER=请输入新版本号（如 v6.2.0）:
if "%VER%"=="" (
    echo [取消] 未输入版本号
    pause
    exit /b 1
)

echo.
echo [1/2] 创建 tag %VER% ...
git tag %VER%
if %errorlevel% neq 0 (
    echo [错误] 创建 tag 失败（可能已存在同名 tag）
    pause
    exit /b 1
)

echo.
echo [2/2] 推送 tag，触发自动发布...
git push origin %VER%

echo.
echo [完成] 已推送 tag %VER%
echo 稍等 1-2 分钟，去仓库 Releases 页面即可看到自动生成的发布包。
echo.
pause
