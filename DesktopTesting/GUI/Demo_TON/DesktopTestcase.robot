*** Settings ***
Library           CalcPythton/CalcPythtonRun.py
Library           CalcPythton002/CalcPythton002Run.py
Library           ../../../../back_end/Common/Comment.py

*** Variables ***

*** Test Cases ***
CalcPythton002
    TestExecution Arguments
    TC_CalcPythton002Run

CalcPythton
    TestExecution Arguments
    TC_CalcPythtonRun

*** Keywords ***
