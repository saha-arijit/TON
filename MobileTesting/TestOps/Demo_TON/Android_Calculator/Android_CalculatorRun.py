import sys
import os
sys.path.insert(0,'D:/TON/back_end/Mobile_GUI/')
from Mobile_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_Android_CalculatorRun():
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	TC        ="Android_Calculator"
	thread1.createCSV(baseFolder,appName,TC)
	thread1.start()
	os.system('python Android_Calculator/Android_Calculator.py')
	thread1.stop()