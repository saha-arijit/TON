*** Settings ***
Library           AF_Bell_Demo/AF_Bell_Demo.py

*** Variables ***

*** Test Cases ***
AF_Bell_Demo
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1

*** Keywords ***
