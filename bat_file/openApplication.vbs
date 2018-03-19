Set oShell = CreateObject ("Wscript.Shell") 
Dim appCommand
appCommand = WScript.Arguments.Item(0)
oShell.Run appCommand
