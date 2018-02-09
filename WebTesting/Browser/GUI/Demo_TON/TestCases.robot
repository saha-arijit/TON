*** Settings ***
Library           BF_Signup/BF_Signup.py
Library           Sample/Sample.py

*** Variables ***

*** Test Cases ***
Sample
    #Keyword    Headless    Instances    LoadTest
    TC_Sample    no    0    no

BF_Signup
    #Keyword    Headless    Instances    LoadTest
    TC_BF_Signup    no    0    no

*** Keywords ***
