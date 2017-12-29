import sys
from createRobot import createRobot


class Load_json_Parser:

	def LoadNewman(self,json):
		
		file = open('NewLoadNewman.js' , 'r')
		line = file.readlines()
		json = json.split('.')
		json = json [0]
		
		file = open(json+'.js' , 'w')
		
		for lines in line:
			if '__dirname' in lines:
					
				lines = lines.split('\'')
				lines[1] = "\'" + json + ".json\'" 
				y = "".join(lines).splitlines()
				myString = " ".join(y)
				file.write ( myString )
				file.write("\n")
			else:
				file.write(lines)
		file.close()
		
		# Calling method to create Run Python file for Collection
		loadParse.createRunFile(json)
		
	def createRunFile(self,json):
			
		file = open(json +'.js' , 'r')
		line = file.readlines()
		
		file = open('Run_' + json +'.py' , 'w')
		file.write('import sys'+'\n')
		file.write('import os'+'\n')
		file.write('def ' + 'TC_'+ json +'(users)' + ':'+'\n')
		file.write('\t' + 'file = open(' +'\'' + json +'.js\'' + ','+ '\'r\')' + '\n')
		file.write('\t' + 'line = file.readlines()' + '\n')
		file.write('\t' + 'file = open(' +'\'' + json +'.js\'' + ','+ '\'w\')' + '\n')
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
		file.write('\t' +'os.system(\'node ' + json +'.js\')' + '\n')
		
		file.close()

		base = "D:/TON"
		test = "Run_"+json+".py"
		
		robot = createRobot()
		robot.createTestFile(test, base)

		
		
loadParse = Load_json_Parser()
loadParse.LoadNewman(sys.argv[1])

	
	