*** Settings ***
Library           AF_Bell_Demo/AF_Bell_Demo.py
Library           FlipkartCollect/FlipkartCollect.py
Library           AF_NFV_001/AF_NFV_001.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
FlipkartCollect
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollect	1	1	1
AF_NFV_001
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_AF_NFV_001	1	1	1
AF_Bell_Demo
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_AF_Bell_Demo	1	1	1
	TC_FlipkartCollect	1	1	1
	TC_AF_NFV_001	1	1	1

*** Keywords ***
