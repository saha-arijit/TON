*** Settings ***
Library           Sample/Sample.py
Library           BF_LIN1/BF_LIN1.py

*** Variables ***

*** Test Cases ***
BF_LIN1
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_LIN1
Sample
#Keyword 	Headless 	Instances 	 LoadTest
	TC_Sample

*** Keywords ***
