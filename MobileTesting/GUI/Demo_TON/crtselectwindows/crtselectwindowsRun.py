import sys
import os
sys.path.insert(0,'D:/TON/back_end/Mobile_GUI/')
from Mobile_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_crtselectwindowsRun():
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	TC        ="crtselectwindows"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	os.system('python crtselectwindows/crtselectwindows.py')
	thread1.stop()