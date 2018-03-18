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
    TestExecution Arguments    Iterations    VirtualUsers    RampUP Period
    TC_TwitterCollection    1    1    1

AL_Run_All
    TestExecution Arguments    Iterations    VirtualUsers    RampUP Period
    TC_TwitterCollection    1    1    1

Create
    #Flow Name    Protocol    Script    Duration (secs)    Users    Create    Execute
    Mac1_US    TCP/UDP    High/Low Performance    60    5    yes/no    yes/no
    Mac1_DS    TCP/UDP    High/Low Performance    60    3    yes/no    yes/no
    Mac2_US    TCP/UDP    High/Low Performance    60    4    yes/no    yes/no
    Mac2_DS    TCP/UDP    High/Low Performance    60    2    yes/no    yes/no
    Mac3_US    TCP/UDP    High/Low Performance    60    4    yes/no    yes/no
    Mac3_DS    TCP/UDP    High/Low Performance    60    2    yes/no    yes/no

Execute
    #Name    Execute
    Mac1_US    Yes
=======
FlipkartCollection
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
AL_Run_All
   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period
	TC_FlipkartCollection	1	1	1
>>>>>>> 1847e9b9960f950a69623a7dabd16ab134d1cbeb

*** Keywords ***
