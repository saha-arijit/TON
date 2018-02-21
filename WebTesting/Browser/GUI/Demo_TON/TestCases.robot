*** Settings ***
Library           BF_LinkedIn_TC_001/BF_LinkedIn_TC_001.py
Library           BF_LinkedIn_TC_002/BF_LinkedIn_TC_002.py

*** Variables ***

*** Test Cases ***
BF_LinkedIn_TC_002
    #Keyword    Headless    Instances    LoadTest
    TC_BF_LinkedIn_TC_002    no    0    no

BF_LinkedIn_TC_001
    #Keyword    Headless    Instances    LoadTest
    TC_BF_LinkedIn_TC_001    no    0    no

*** Keywords ***
