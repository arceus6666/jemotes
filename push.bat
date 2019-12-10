@ECHO OFF
::IF "%1"=="/r" ECHO You passed the /r flag.
SET arg="%1"
if "%~1" == "" SET arg="commit"
git add . & ^
git commit -m "%arg%"
git push
PAUSE
