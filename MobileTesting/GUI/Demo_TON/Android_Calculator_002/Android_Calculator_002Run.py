import sys
import os
sys.path.insert(0,'D:/TON/back_end/Mobile_GUI/')
from Mobile_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_Android_Calculator_002Run():
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	TC        ="Android_Calculator_002"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	os.system('python Android_Calculator_002/Android_Calculator_002.py')
	thread1.stop()