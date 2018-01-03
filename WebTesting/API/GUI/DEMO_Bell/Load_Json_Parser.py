import sys
from createRobot import createRobot


class Load_json_Parser:

	def LoadNewman(self,json, base):

		location = "/WebTesting/API/GUI/DEMO_Bell/"
		
		file = open(base + location +'NewLoadNewman.js' , 'r')
		line = file.readlines()
		json = json.split('.')
		json = json [0]
		
		# Creating the .js file for execution in newmaan command line tool
		file = open(json+'.js' , 'w')
		
		for lines in line:
			if '__dirname' in lines:
				
				jsonFileName = json.split('/')
				lines = lines.split('\'')
				lines[1] = "\'" + jsonFileName[6] + ".json\'" 
				y = "".join(lines).splitlines()
				myString = " ".join(y)
				file.write ( myString )
				file.write("\n")
			else:
				file.write(lines)
		file.close()
		
		# Calling method to create Run Python file for Collection
		loadParse.createRunFile(json, base)
		
	def createRunFile(self,json, base):
			
		file = open(json +'.js' , 'r')
		line = file.readlines()
		testCase = json.split('/')
		file = open(json +'.py' , 'w')
		file.write('import sys'+'\n')
		file.write('import os'+'\n')
		file.write('def ' + 'TC_'+ testCase[6] +'(users)' + ':'+'\n')
		file.write('\t' + 'file = open(' +'\'' + testCase[6] + '/' + testCase[6] +'.js\'' + ','+ '\'r\')' + '\n')
		file.write('\t' + 'line = file.readlines()' + '\n')
		file.write('\t' + 'file = open(' +'\'' + testCase[6] + '/' + testCase[6] +'.js\'' + ','+ '\'w\')' + '\n')
		file.write('\t' + 'for lines in line:' + '\n')
		file.write('\t' + '\t' + "if \'var value\' in lines:" + '\n')
		file.write('\t' + '\t' + '\t' + 'lines = lines.split(\'=\')' + '\n')
		file.write('\t' + '\t' + '\t' + 'lines[1] =	\"= \" + str(users) + \";\"' + '\n')
		file.write('\t' + '\t' + '\t' + 'x = \"\".join(lines)' + '\n')
		file.write('\t' + '\t' + '\t' + 'file.write(x)' + '\n')
		file.write('\t' + '\t' + '\t' + 'file.write(\"''\\' + 'n\")' + '\n')
		file.write('\t' + '\t' + 'else:' + '\n')
		file.write('\t' + '\t' +'\t'+ 'if \"var value\" not in lines:' + '\n')
		file.write('\t' + '\t' +'\t'+ '\t' +'file.write (str(lines))' + '\n')
		file.write('\t' +'file.close()' + '\n')
		file.write('\t' +'os.system(\'node ' + testCase[6] + '/'+ testCase[6] +'.js\')' + '\n')
		
		file.close()




		test = testCase[6]+".py"
		
		robot = createRobot()
		robot.createTestFile(test, base)

		
		
loadParse = Load_json_Parser()
loadParse.LoadNewman(sys.argv[1], sys.argv[2])

	
	