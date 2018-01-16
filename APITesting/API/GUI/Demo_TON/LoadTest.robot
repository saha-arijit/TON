*** Settings ***
Library           D:/TON/APITesting/API/GUI/Demo_TON/FlipkartCollection/FlipkartCollection.py
Library           D:/TON/APITesting/API/GUI/Demo_TON/TwitterCollection/TwitterCollection.py

*** Variables ***

*** Test Cases ***
TwitterCollection
    #Keyword    Iterations    VirtualUsers    RampUP Period
    TC_TwitterCollection    1    1    1

FlipkartCollection
    #Keyword    Iterations    VirtualUsers    RampUP Period
    TC_FlipkartCollection    1    1    1

AL_Run_All
    #Keyword    Iterations    VirtualUsers    RampUP Period
    TC_FlipkartCollection    1    1    1
    TC_TwitterCollection    1    1    1

*** Keywords ***
