import json
import sys, os

class createRobot :

	def createTestFile(self, testCase,baseFolder):
		
		pyfilename = testCase.split(".py")
		path = baseFolder.split(pyfilename[0])
		global robotFileName, libFilePath;
		libFilePath = baseFolder.replace('\\','/')
		robotFileName = path[0]+"LoadTest.robot"	

		if os.path.isfile(robotFileName):
			print ("yes")
			prsntFlg = 1
			file = open (robotFileName, "r")
			contents = file.readlines()
		else:
			print ("no")
			prsntFlg = 0
			file = open (robotFileName, "w")
			contents = ""

		robot.writeSettings (testCase, file, contents, prsntFlg)
		robot.writeVariables (file, prsntFlg)
		robot.writeTestCases (file, testCase, contents, prsntFlg)
		robot.writeAllRun (file, testCase, contents, prsntFlg)
		robot.writeKeywords (file, prsntFlg)
			

	def writeSettings (self, testFile, file, contents, prsntFlg):
		testCase = testFile.split('.')
		if prsntFlg == 1:
			index = 0
			lookup = "Settings"
			with open(robotFileName) as myFile:
				for num, line in enumerate(myFile, 1):
					if testFile in line:
						sys.exit ()				
					if lookup in line:
						index = num + 1
			value = "Library           " + testCase[0] + '/'+testFile+"\n"
			print("Library Path :" + value)
			contents.insert (index, value)
			file = open (robotFileName, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:	
			file.write ("*** Settings ***" + "\n")
			file.write ("Library           " + testCase[0] + '/'+ testFile+"\n")
			file.write ("Library           ../../../../back_end/Common/Comment.py")

	def writeVariables (self, file, prsntFlg):
		if prsntFlg == 1:
			pass
		elif prsntFlg == 0:	
			file.write ("\n"+"*** Variables ***" + "\n")

	def writeTestCases (self, file, testFile, contents, prsntFlg):
		testCase = testFile.split('.')
		print "*************************"
		print testCase
		#testCase = testCase[0].split('_')
		if prsntFlg == 1:
			index = 0
			lookup = "Test Cases"
			with open(robotFileName) as myFile:
				for num, line in enumerate(myFile, 1):
					if lookup in line:
						index = num
			#print ("index : " + str(index))
			value = testCase[0]+ "\n" + "   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period" + "\n" + "\t"+ "TC_"+testCase[0]+"	1	1	1" +"\n"
			contents.insert (index, value)
			file = open (robotFileName, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:
			file.write ("\n"+"*** Test Cases ***" + "\n")
			file.write (testCase[0] + "\n")
			file.write ("   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period" + "\n")
			file.write ("\t"+"TC_"+testCase[0] +"	1	1	1" +"\n")
			file.write ("AL_Run_All" + "\n")
			file.write ("   TestExecution Arguments 	Iterations	VirtualUsers	RampUP Period" + "\n")
			file.write ("\t"+"TC_"+testCase[0] +"	1	1	1" +"\n")

	def writeAllRun (self,file,testFile,contents,prsntFlg):
		testCase = testFile.split('.')
		if prsntFlg == 1:
			index = 0
			lookup = "AL_Run_All"
			with open(robotFileName) as myFile:
				for num, line in enumerate(myFile, 1):
					if lookup in line:
						index = num
			value =  "\t"+ "TC_"+testCase[0]+"	1	1	1" +"\n"
			contents.insert(index, value)
			file = open(robotFileName,"w")
			contents = "".join(contents)
			file.write (contents)
			
	def writeKeywords (self, file, prsntFlg):
		if prsntFlg ==1 :
			pass
		elif prsntFlg == 0:
			file.write ("\n"+"*** Keywords ***" +"\n")

			
robot = createRobot()
#robot.createTestFile(sys.argv[1],sys.argv[2])