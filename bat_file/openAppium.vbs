Set oShell = CreateObject ("Wscript.Shell") 
Dim baseFolder
baseFolder = WScript.Arguments.Item(0)
Dim strArgs
strArgs = "cmd /c "&baseFolder&"\bat_file\openAppium.bat"
oShell.Run strArgs, 0, false