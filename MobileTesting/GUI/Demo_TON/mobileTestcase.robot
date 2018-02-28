*** Settings ***
Library           Android_Calculator/Android_CalculatorRun.py
Library           Chrome_Genymotion/Chrome_GenymotionRun.py

*** Variables ***

*** Test Cases ***
Chrome_Genymotion
#Keyword 
	TC_Chrome_GenymotionRun
Android_Calculator
#Keyword 
	TC_Android_CalculatorRun

*** Keywords ***
