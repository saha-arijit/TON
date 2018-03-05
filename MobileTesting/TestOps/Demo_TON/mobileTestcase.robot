*** Settings ***
Library           Android_Calculator/Android_CalculatorRun.py
Library           Android_Calculator_002/Android_Calculator_002Run.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
Android_Calculator_002
   TestExecution Arguments 
	TC_Android_Calculator_002Run
Android_Calculator
   TestExecution Arguments 
	TC_Android_CalculatorRun

*** Keywords ***
