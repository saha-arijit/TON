*** Settings ***
Library           BF_LIN_001/BF_LIN_001.py
Library           BF_IN_001/BF_IN_001.py
Library           BF_LIN1/BF_LIN1.py
Library           BF_LIN/BF_LIN.py
Library           BF_LIN_002/BF_LIN_002.py

*** Variables ***

*** Test Cases ***
BF_IN_001
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_IN_001
BF_LIN1
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN1
BF_LIN
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN
BF_LIN_002
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN_002
BF_LIN_001
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN_001

*** Keywords ***
