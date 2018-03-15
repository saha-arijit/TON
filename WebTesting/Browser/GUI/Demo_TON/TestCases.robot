*** Settings ***
Library           Sample/Sample.py
Library           ../../../../back_end/Common/Comment.py
*** Variables ***

*** Test Cases ***
Sample
   TestExecution Arguments 	 Headless 	 Instances 	  LoadTest
	TC_Sample  no  0  no  

*** Keywords ***
