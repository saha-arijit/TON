Set oShell = CreateObject ("Wscript.Shell") 
Dim args
args = WScript.Arguments.Item(0)
oShell.Run args, 0,false
