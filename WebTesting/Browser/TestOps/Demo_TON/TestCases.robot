*** Settings ***
Library           BF_LIN_001/BF_LIN_001.py
Library           mtpltab2/mtpltab2.py
Library           mtpltab/mtpltab.py
Library           BF_linkedin/BF_linkedin.py
Library           Sample/Sample.py

*** Variables ***

*** Test Cases ***
mtpltab2
#Keyword 	Headless 	Instances 	 LoadTest
	TC_mtpltab2  no  0  no  
mtpltab
#Keyword 	Headless 	Instances 	 LoadTest
	TC_mtpltab  no  0  no  
BF_linkedin
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_linkedin  no  0  no  
Sample
#Keyword 	Headless 	Instances 	 LoadTest
	TC_Sample  no  0  no  
BF_LIN_001
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN_001  no  0  no  

*** Keywords ***
