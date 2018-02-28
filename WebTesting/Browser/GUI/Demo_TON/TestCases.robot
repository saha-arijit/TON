*** Settings ***
Library           Sample/Sample.py
Library           BF_Signup/BF_Signup.py

*** Variables ***

*** Test Cases ***
BF_Signup
    #Keyword    Headless    Instances    LoadTest
    TC_BF_Signup    no    0    no

Sample
    #Keyword    Headless    Instances    LoadTest
    TC_Sample    no    0    no

*** Keywords ***
