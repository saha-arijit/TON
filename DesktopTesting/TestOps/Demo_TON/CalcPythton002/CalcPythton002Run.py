import sys
import os
sys.path.insert(0,'D:/TON/back_end/Desktop/')
from Desktop_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_CalcPythton002Run():
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	TC        ="CalcPythton002"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	os.system('python CalcPythton002/CalcPythton002.py')
	thread1.stop()