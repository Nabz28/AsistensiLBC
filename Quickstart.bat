@echo off
setlocal
title LBC Learning - Quickstart

REM Always run from this script's own folder so relative paths resolve.
cd /d "%~dp0"

echo.
echo  ============================================================
echo    LBC Learning - Quickstart  (static server on :4173)
echo  ============================================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [error] node is not on PATH. Install Node.js then retry.
  pause
  exit /b 1
)

REM Free port 4173 if a previous instance is still running.
for /f "tokens=5" %%P in ('netstat -ano ^| findstr "LISTENING" ^| findstr ":4173 "') do (
  echo [info] freeing port 4173 (pid %%P)
  taskkill /PID %%P /F >nul 2>&1
)

echo [boot] starting LBC Learning on http://127.0.0.1:4173
start "LBC Learning - Server" cmd /k "cd /d %~dp0 && node serve.js 4173"

echo [wait] giving the server a moment to bind...
ping -n 4 127.0.0.1 >nul

echo [open] http://127.0.0.1:4173/
start "" "http://127.0.0.1:4173/"

endlocal
exit /b 0
