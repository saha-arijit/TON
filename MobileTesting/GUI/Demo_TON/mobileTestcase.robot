*** Settings ***
Library           CalC_App/CalC_AppRun.py
Library           PhotoEditor/PhotoEditorRun.py

*** Variables ***

*** Test Cases ***
PhotoEditor
#Keyword 	Instances
	TC_PhotoEditorRun
CalC_App
#Keyword 	Instances
	TC_CalC_AppRun

*** Keywords ***
