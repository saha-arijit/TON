import json
import sys, os

class DesktopRobot :

	def createTestFile(self, testCase,baseFolder):
		
		pyfilename = testCase.split(".py")
		path = baseFolder.split(pyfilename[0])
		global robotFileName, libFilePath;
		libFilePath = baseFolder.replace('\\','/')
		robotFileName = path[0]+"DesktopTestcase.robot"	

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

		robot.writeSettings (testCase, file, contents, prsntFlg,robotFileName)
		robot.writeVariables(file, prsntFlg)
		robot.writeTestCases(file, testCase, contents, prsntFlg,robotFileName)
		robot.writeKeywords(file, prsntFlg)
			

	def writeSettings (self, testFile, file, contents, prsntFlg,robotCurrentFile):
		testCase = testFile.split('.')
		print testCase[0] 
		if prsntFlg == 1:
			index = 0
			lookup = "Settings"
			with open(robotCurrentFile) as myFile:
				for num, line in enumerate(myFile, 1):
					if testCase[0] in line:
						sys.exit ()				
					if lookup in line:
						index = num + 1
			value = "Library           " + testCase[0] + '/'+ testCase[0]+"Run.py"+"\n"
			contents.insert (index, value)
			file = open (robotCurrentFile, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:	
			file.write ("*** Settings ***" + "\n")
			file.write ("Library           " + testCase[0] + '/'+ testCase[0]+"Run.py"+"\n")
			file.write ("Library           ../../../../back_end/Common/Comment.py")

	def writeVariables (self, file, prsntFlg):
		if prsntFlg == 1:
			pass
		elif prsntFlg == 0:	
			file.write ("\n"+"*** Variables ***" + "\n")

	def writeTestCases (self, file, testFile, contents, prsntFlg,robotCurrentFile):
		testCase = testFile.split('.')
		#testCase = testCase[0].split('_')
		if prsntFlg == 1:
			index = 0
			lookup = "Test Cases"
			with open(robotCurrentFile) as myFile:
				for num, line in enumerate(myFile, 1):
					if lookup in line:
						index = num
			value = testCase[0]+ "\n" + "   TestExecution Arguments " + "\n" + "\t"+ "TC_"+testCase[0]+"Run"+ "\n"
			contents.insert (index, value)
			file = open (robotCurrentFile, "w")
			contents = "".join(contents)
			file.write (contents)
		elif prsntFlg == 0:
			file.write ("\n"+"*** Test Cases ***" + "\n")
			file.write (testCase[0] + "\n")
			file.write ("   TestExecution Arguments " + "\n")
			file.write ("\t"+"TC_"+testCase[0] +"Run"+ "\n")

	def writeKeywords (self, file, prsntFlg):
		if prsntFlg ==1 :
			pass
		elif prsntFlg == 0:
			file.write ("\n"+"*** Keywords ***" +"\n")

			
robot = DesktopRobot()
# robot.createTestFile("CalC.py", "D:/TON", "Demo_TON")
