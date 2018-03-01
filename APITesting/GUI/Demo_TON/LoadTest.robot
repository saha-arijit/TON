*** Settings ***
Library           AF_NFV_001/AF_NFV_001.py

*** Variables ***

*** Test Cases ***
AF_NFV_001
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_NFV_001	1	1	1
AL_Run_All
#Keyword 	Iterations	VirtualUsers	RampUP Period
	TC_AF_NFV_001	1	1	1

*** Keywords ***
