*** Settings ***
Library           BF_LinkedIn_TC_001/BF_LinkedIn_TC_001.py
Library           BF_Signup/BF_Signup.py

*** Variables ***

*** Test Cases ***
BF_Signup
    #Keyword    Headless    Instances    LoadTest
    TC_BF_Signup    no    0    no

BF_LinkedIn_TC_001
    #Keyword    Headless    Instances    LoadTest
    TC_BF_LinkedIn_TC_001    no    0    no

*** Keywords ***
