import sys
import os
sys.path.insert(0,'D:/TON/back_end/Mobile_GUI/')
from Mobile_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_CalC_AppRun():
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	thread1.createCSV(baseFolder,appName)
	thread1.start()
	os.system('python CalC_App/CalC_App.py')
	thread1.stop()