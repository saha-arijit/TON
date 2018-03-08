import sys
from DesktopRobot import DesktopRobot


class DesktopTest:

	def createDesktopFiles(self,json,rootFolder ,base,app):

		global location 
		location = "/back_end/Desktop/"
		
		# Calling method to create Run Python file for Collection
		desktop.createRunFile(json,rootFolder,base,app)

		
	def createRunFile(self,json,rootFolder,base,app):

		json = json.split('.')
		json = json [0]	
		testCase = json.split('/')
		file = open(json+'Run.py' , 'w')
		file.write('import sys'+'\n')
		file.write('import os'+'\n')
		file.write("sys.path.insert(0,'"+base+location+"')"+"\n")
		file.write('from Desktop_Thread import myThread' + '\n')
		file.write ("thread1 = myThread(1, \"Thread-1\", 1)" + "\n" + "\n")
		file.write('def ' + 'TC_'+ testCase[6]+"Run()"+ ':'+'\n')
		file.write('\t' +'baseFolder='+'"'+base+'"'+'\n')
		file.write('\t' +'appName   ='+'"'+app+'"'+'\n')
		file.write('\t' +'TC        ='+'"'+testCase[6]+'"'+'\n')
		file.write('\t' +'thread1.createCSV(baseFolder,appName,TC)'+'\n')
		file.write('\t' +'thread1.start()'+'\n')
		file.write('\t' +'os.system(\'python ' + testCase[6] + '/'+ testCase[6] +'.py\')' + '\n')
		file.write('\t' +'thread1.stop()')
		
		file.close()

		test = testCase[6]+".py"
		
		robot = DesktopRobot()
		robot.createTestFile(test, rootFolder)

		
		
desktop = DesktopTest()
desktop.createDesktopFiles(sys.argv[1], sys.argv[2],sys.argv[3],sys.argv[4])
