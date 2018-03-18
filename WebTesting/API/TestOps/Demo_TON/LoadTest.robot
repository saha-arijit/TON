*** Settings ***
Library           TwitterCollection/TwitterCollection.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
TwitterCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_TwitterCollection	1	1	1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_TwitterCollection	1	1	1

*** Keywords ***
