*** Settings ***
Library           BF_FlipKart1.py
Library           BF_Signup.py

*** Variables ***

*** Test Cases ***
BF_Signup
    #Keyword    Headless    Instances    LoadTest
    TC_BF_Signup    No    0    No

BF_FlipKart1
    #Keyword    Headless    Instances    LoadTest
    TC_BF_FlipKart1    No    0    No

*** Keywords ***
