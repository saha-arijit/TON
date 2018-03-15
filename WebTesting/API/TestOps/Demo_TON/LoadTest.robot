*** Settings ***
Library           FlipkartCollection/FlipkartCollection.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
FlipkartCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection  1  4  1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection  1  4  1

*** Keywords ***
