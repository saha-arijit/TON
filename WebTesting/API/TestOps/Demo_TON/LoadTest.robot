*** Settings ***
Library           FlipkartCollection/FlipkartCollection.py

*** Variables ***

*** Test Cases ***
FlipkartCollection
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1

*** Keywords ***
