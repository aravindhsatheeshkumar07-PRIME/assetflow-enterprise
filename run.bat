@echo off
echo ===================================================
echo   AssetFlow Local Server Launcher
echo   Serving at http://localhost:8000
echo ===================================================
echo.
start "" http://localhost:8000
python -m http.server 8000
pause
