import sys
import os
from createRobot import createRobot


class Load_json_Parser:

		
	def createRunFile(self,json, base,envvar):
			
		# file = open(json +'.js' , 'r')
		# line = file.readlines()
		print ("Json File Name :" +json)
		print ("Directory Name :"  + base)
		print ("Env File name :"+ envvar)
		testCase = json.split('.')
		os.chdir(base)
		file = open(testCase[0] +'.py' , 'w')
		file.write('import sys'+'\n')
		file.write('import os'+'\n')
		file.write ('import time' +'\n')
		#file.write("sys.path.insert(0,'"+base+"')"+"\n")
		#file.write('from Load_Thread import myThread' + '\n')
		#file.write ("thread1 = myThread(1, \"Thread-1\", 1)" + "\n" + "\n")
		#file.write('def ' + 'TC_'+ testCase[6] +'(users)' + ':'+'\n')
		file.write('def ' + 'TC_'+ testCase[0] +'(iterations=1, vuser=1, ramp=1)' + ':'+'\n')
		file.write('\t' +'if(int(vuser) == 1): \n')
		file.write('\t\t' + 'os.chdir("'+base+'")' + '\n')
		if(envvar =="None"):
			file.write('\t\t' +'cmd = "newman run '+json+'.json -r html --reporter-html-export result.html -x -n "+str(iterations)'+'\n')
		else:
			file.write('\t\t' +'cmd = "newman run '+json+'.json -e '+envvar+' -r html --reporter-html-export result.html -x -n "+str(iterations)'+'\n')
		file.write('\t\t' +'os.system(cmd)'+'\n')
		file.write('\t' + 'elif(int(vuser) > 1):' + '\n')
		file.write('\t\t' + 'for i in vuser:' + '\n')
		file.write('\t\t\t' + 'os.chdir("'+base+'")' + '\n')
		if(envvar=="None"):
			file.write('\t\t\t' + 'cmd = "newman run '+json+'.json -r html --reporter-html-export result_"+str(i)+".html -x -n "+str(iterations)' + '\n')
		else:
			file.write('\t\t\t' + 'cmd = "newman run '+json+'.json -e '+envvar+' -r html --reporter-html-export result_"+str(i)+".html -x -n "+str(iterations)' + '\n')
		file.write('\t' + '\t' + '\t' + 'os.system(cmd)' + '\n')
		file.write('\t' + '\t' + '\t' + 'time.sleep(int(ramp)/int(vuser))' + '\n')
		file.close()
		test = testCase[0]+".py"
		print (base)
		
		robot = createRobot()
		robot.createTestFile(test, base)

		
		
loadParse = Load_json_Parser()
loadParse.createRunFile(sys.argv[1], sys.argv[2],sys.argv[3])