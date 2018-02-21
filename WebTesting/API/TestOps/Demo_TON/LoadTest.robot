*** Settings ***
Library           BF_FlipKart1/BF_FlipKart1.py
Library           BF_Signup/BF_Signup.py
Library           FlipkartCollection/FlipkartCollection.py

*** Variables ***

*** Test Cases ***
BF_Signup
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_BF_Signup	1	1	1
FlipkartCollection
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
BF_FlipKart1
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_BF_FlipKart1	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_BF_FlipKart1	1	1	1
	TC_BF_Signup	1	1	1
	TC_FlipkartCollection	1	1	1

*** Keywords ***
