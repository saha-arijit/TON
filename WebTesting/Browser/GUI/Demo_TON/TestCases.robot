*** Settings ***
Library           BF_Signup/BF_Signup.py
Library           FlipkartCollection/FlipkartCollection.py
Library           BF_FlipKart1/BF_FlipKart1.py

*** Variables ***

*** Test Cases ***
FlipkartCollection
#Keyword 	Headless 	Instances 	 LoadTest
	TC_FlipkartCollection
BF_FlipKart1
#Keyword 	Headless 	Instances 	 LoadTest
	TC_BF_FlipKart1
BF_Signup
    #Keyword    Headless    Instances    LoadTest
    TC_BF_Signup    no    0    no

*** Keywords ***
