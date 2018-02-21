import json
import sys, os

class createRobot :

	def createTestFile(self, testCase,baseFolder,appName):
		
		global robotFileName;
		robotFileName1 = baseFolder+"/WebTesting/Browser/GUI/"+appName+"/TestCases.robot"	
		robotFileName2 = baseFolder+"/WebTesting/Browser/TestOps/"+appName+"/TestCases.robot"	
		robotFileName  = [robotFileName1,robotFileName2] 
		for i in range(0,2): 
			with open(testCase) as data_file:
				testFile = testCase.split('/')

				if os.path.isfile(robotFileName[i]):
					print ("yes")
					prsntFlg = 1
					file = open (robotFileName[i], "r")
					contents = file.readlines()
				else:
					print ("no")
					prsntFlg = 0
					file = open (robotFileName[i], "w")
					contents = ""
				robot.writeSettings (testFile[7], file, contents, prsntFlg,robotFileName[i])
				robot.writeVariables(file, prsntFlg)
				robot.writeTestCases(file, testFile[7], contents, prsntFlg,robotFileName[i])
				robot.writeKeywords(file, prsntFlg)
			

	def writeSettings (self, testFile, file, contents, prsntFlg,robotCurrentFile):
		testCase = testFile.split('.')
		if prsntFlg == 1:
			index = 0
			lookup = "Settings"
			with open(robotCurrentFile) as myFile:
				for num, line in enumerate(myFile, 1):
					if testFile in line:
						sys.exit ()
					if lookup in line:
						index = num + 1
			value = "Library           "+testCase[0]+"/"+ testFile+"\n"
			contents.insert (index, value)
			file = open (robotCurrentFile, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:	
			file.write ("*** Settings ***" + "\n")
			file.write ("Library           "+testCase[0]+"/"+ testFile + "\n")

	def writeVariables (self, file, prsntFlg):
		if prsntFlg == 1:
			pass
		elif prsntFlg == 0:	
			file.write ("\n"+"*** Variables ***" + "\n")

	def writeTestCases (self, file, testFile, contents, prsntFlg,robotCurrentFile):
		testCase = testFile.split('.')
		if prsntFlg == 1:
			index = 0
			lookup = "Test Cases"
			with open(robotCurrentFile) as myFile:
				for num, line in enumerate(myFile, 1):
					if lookup in line:
						index = num
			value = testCase[0]+ "\n" + "#Keyword 	Headless 	Instances 	 LoadTest" + "\n" + "\t"+ "TC_"+testCase[0]+ "\n"
			contents.insert (index, value)
			file = open (robotCurrentFile, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:
			file.write ("\n"+"*** Test Cases ***" + "\n")
			file.write (testCase[0] + "\n")
			file.write ("#Keyword 	Headless 	Instances 	 LoadTest" + "\n")
			file.write ("\t"+"TC_"+testCase[0]+ "\n")

	def writeKeywords (self, file, prsntFlg):
		if prsntFlg ==1 :
			pass
		elif prsntFlg == 0:
			file.write ("\n"+"*** Keywords ***" +"\n")

			
robot = createRobot()
robot.createTestFile(sys.argv[1],sys.argv[2],sys.argv[3])
