import sys
from createRobot import createRobot
import os


class Load_json_Parser:
		
	def createRunFile(self,json, base,envvar,root,app):
		
		global location
		location = "/back_end/Web_API/"
		
		os.chdir(base)
		file = open(json +'.py' , 'w')
		file.write('import sys'+'\n')
		file.write('import os'+'\n')
		file.write('import time'+'\n' + '\n')
		file.write("sys.path.insert(0,'"+root+location+"')"+"\n")
		file.write('from Load_Thread import myThread' + '\n')
		file.write ("thread1 = myThread(1, \"Thread-1\", 1)" + "\n" + "\n")
		file.write('def ' + 'TC_'+ json + '(iterations=1, vuser=1, ramp=1)' + ':'+'\n')
		file.write('\t' +'baseFolder='+'"'+root+'"'+'\n')
		file.write('\t' +'appName   = "'+app+'"'+'\n')
		file.write('\t' +'TC        = "'+json+'"'+'\n')
		file.write('\t' +'thread1.createCSV(baseFolder,appName,TC)'+'\n')
		file.write('\t' +'thread1.start()'+'\n')
		file.write('\t' +'if(int(vuser) == 1): \n')
		file.write('\t\t' + 'os.chdir("'+base+'")' + '\n')
		if(envvar =="None"):
			file.write('\t\t' +'cmd = "newman run '+json+'.json -r html --reporter-html-export newman_reports/result.html -x -n "+str(iterations)'+'\n')
		else:
			file.write('\t\t' +'cmd = "newman run '+json+'.json -e '+envvar+' -r html --reporter-html-export newman_reports/result.html -x -n "+str(iterations)'+'\n')
		file.write('\t\t' +'os.system(cmd)'+'\n')
		file.write('\t' + 'elif(int(vuser) > 1):' + '\n')
		file.write('\t\t' + 'for i in range (int(vuser)):' + '\n')
		file.write('\t\t\t' + 'os.chdir("'+base+'")' + '\n')
		if(envvar=="None"):
			file.write('\t\t\t' + 'cmd = "newman run '+json+'.json -r html --reporter-html-export newman_reports/result_"+str(i)+".html -x -n "+str(iterations)' + '\n')
		else:
			file.write('\t\t\t' + 'cmd = "newman run '+json+'.json -e '+envvar+' -r html --reporter-html-export newman_reports/result_"+str(i)+".html -x -n "+str(iterations)' + '\n')
		file.write('\t' + '\t' + '\t' + 'os.system(cmd)' + '\n')
		file.write('\t' + '\t' + '\t' + 'time.sleep(int(ramp)/int(vuser))' + '\n')
		file.write('\t' +'thread1.stop()')
		
		file.close()

		test = json+".py"
		print("NAMEEE",test)
		robot = createRobot()
		robot.createTestFile(test,base)

		
		
loadParse = Load_json_Parser()
loadParse.createRunFile(sys.argv[1], sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5])

	
	