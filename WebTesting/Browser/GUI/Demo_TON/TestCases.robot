*** Settings ***
Library           BF_Signup/BF_Signup.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
BF_Signup
   TestExecution Arguments 	 Headless 	 Instances 	  LoadTest
	TC_BF_Signup  no  0  no  

*** Keywords ***
