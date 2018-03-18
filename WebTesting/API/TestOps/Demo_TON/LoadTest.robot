*** Settings ***
<<<<<<< HEAD
Library           TwitterCollection/TwitterCollection.py
=======
Library           FlipkartCollection/FlipkartCollection.py
>>>>>>> 1847e9b9960f950a69623a7dabd16ab134d1cbeb
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
<<<<<<< HEAD
TwitterCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_TwitterCollection	1	1	1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_TwitterCollection	1	1	1
=======
FlipkartCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection  1  4  1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection  1  4  1
>>>>>>> 1847e9b9960f950a69623a7dabd16ab134d1cbeb

*** Keywords ***
