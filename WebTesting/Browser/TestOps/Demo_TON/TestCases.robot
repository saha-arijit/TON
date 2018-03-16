*** Settings ***
Library           BF_Signup/BF_Signup.py
Library           Sample/Sample.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
Sample
   TestExecution Arguments 	  Headless 	 Instances 	  LoadTest
	TC_Sample  no  0  no  
BF_Signup
   TestExecution Arguments 	 Headless 	 Instances 	  LoadTest
	TC_BF_Signup  no  2  yes

*** Keywords ***
