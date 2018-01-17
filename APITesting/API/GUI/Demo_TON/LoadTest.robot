*** Settings ***
Library           D:/TON/APITesting/API/GUI/Demo_TON/FlipkartCollection/FlipkartCollection.py
Library           D:/TON/APITesting/API/GUI/Demo_TON/BF_Signup/BF_Signup.py

*** Variables ***

*** Test Cases ***
BF_Signup
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_BF_Signup	1	1	1
FlipkartCollection
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
	TC_BF_Signup	1	1	1

*** Keywords ***
