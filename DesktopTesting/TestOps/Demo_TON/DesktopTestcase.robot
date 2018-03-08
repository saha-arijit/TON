*** Settings ***
Library           CalcPythton/CalcPythtonRun.py
Library           Android_Calculator_002/Android_Calculator_002Run.py
Library           CalcPythton002/CalcPythton002Run.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
Android_Calculator_002
   TestExecution Arguments 
	TC_Android_Calculator_002Run
CalcPythton002
   TestExecution Arguments 
	TC_CalcPythton002Run
CalcPythton
   TestExecution Arguments 
	TC_CalcPythtonRun

*** Keywords ***
