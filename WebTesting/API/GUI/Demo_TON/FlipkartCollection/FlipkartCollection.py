import sys
import os
import time

sys.path.insert(0,'D:/TON/back_end/Web_API/')
from Load_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_FlipkartCollection(iterations=1, vuser=1, ramp=1):
	baseFolder="D:/TON"
	appName   = "Demo_TON"
	TC        = "FlipkartCollection"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	if(int(vuser) == 1): 
		os.chdir("D:/TON/WebTesting/API/GUI/Demo_TON/FlipkartCollection")
		cmd = "newman run FlipkartCollection.json -r html --reporter-html-export newman_reports/result.html -x -n "+str(iterations)
		os.system(cmd)
	elif(int(vuser) > 1):
		for i in range (int(vuser)):
			os.chdir("D:/TON/WebTesting/API/GUI/Demo_TON/FlipkartCollection")
			cmd = "newman run FlipkartCollection.json -r html --reporter-html-export newman_reports/result_"+str(i)+".html -x -n "+str(iterations)
			os.system(cmd)
			time.sleep(int(ramp)/int(vuser))
	thread1.stop()