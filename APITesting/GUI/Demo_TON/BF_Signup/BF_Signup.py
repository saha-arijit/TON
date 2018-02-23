import sys
import os
import time
sys.path.insert(0,'D:/TON/back_end/API_GUI/')
from Load_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_Signup(iterations=1, vuser=1, ramp=1):
	baseFolder= "D:/TON"
	appName   = "Demo_TON"
	TC        = "BF_Signup"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	if(int(vuser) == 1): 
		os.chdir("D:/TON/APITesting/GUI/Demo_TON/BF_Signup")
		cmd = "newman run BF_Signup.json -r html --reporter-html-export result.html -x -n "+str(iterations)
		os.system(cmd)
	elif(int(vuser) > 1):
		i =1
		while i <= int(vuser):
			os.chdir("D:/TON/APITesting/GUI/Demo_TON/BF_Signup")
			cmd = "newman run BF_Signup.json -r html --reporter-html-export result_"+str(i)+".html -x -n "+str(iterations)
			os.system(cmd)
			time.sleep(int(ramp)/int(vuser))
			i = i +1
	thread1.stop()