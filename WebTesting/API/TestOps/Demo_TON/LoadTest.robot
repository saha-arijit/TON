*** Settings ***
Library           FlipkartCollection/FlipkartCollection.py
Library           AF_Insomnia/AF_Insomnia.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
AF_Insomnia
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Insomnia	1	1	1
FlipkartCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
	TC_AF_Insomnia	1	1	1

*** Keywords ***
