import sys
import os
import time
sys.path.insert(0,'D:/TON/back_end/API_GUI/')
from Load_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_AF_NFV_001(iterations=1, vuser=1, ramp=1):
	baseFolder= "D:/TON"
	appName   = "Demo_TON"
	TC        = "AF_NFV_001"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	if(int(vuser) == 1): 
		os.chdir("D:/TON/APITesting/GUI/Demo_TON/AF_NFV_001")
		cmd = "newman run AF_NFV_001.json -e globals.postman_globals.json -r html --reporter-html-export newman_reports/result.html -x -n "+str(iterations)
		os.system(cmd)
	elif(int(vuser) > 1):
		i =1
		while i <= int(vuser):
			os.chdir("D:/TON/APITesting/GUI/Demo_TON/AF_NFV_001")
			cmd = "newman run AF_NFV_001.json -e globals.postman_globals.json -r html --reporter-html-export newman_reports/result_"+str(i)+".html -x -n "+str(iterations)
			os.system(cmd)
			time.sleep(int(ramp)/int(vuser))
			i = i +1
	thread1.stop()