*** Settings ***
Library           AF_Bell_Demo/AF_Bell_Demo.py
Library           FlipkartCollection/FlipkartCollection.py
Library           AF_Insomnia/AF_Insomnia.py

*** Variables ***

*** Test Cases ***
FlipkartCollection
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
AF_Insomnia
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Insomnia	1	1	1
AF_Bell_Demo
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1
	TC_FlipkartCollection	1	1	1
	TC_AF_Insomnia	1	1	1

*** Keywords ***
