*** Settings ***
Library           BF_FlipKart1/BF_FlipKart1.py
Library           TwitterCollection/TwitterCollection.py

*** Variables ***

*** Test Cases ***
TwitterCollection
#Keyword 	Headless 	Instances 	 LoadTest
	TC_TwitterCollection
BF_FlipKart1
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_FlipKart1

*** Keywords ***
