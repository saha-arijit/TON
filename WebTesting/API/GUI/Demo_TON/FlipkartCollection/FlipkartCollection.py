import sys
import os
sys.path.insert(0,'D:/TON/back_end/Web_API')
from Load_Thread import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_FlipkartCollection(users):
	baseFolder="D:/TON"
	appName   ="Demo_TON"
	thread1.createCSV(baseFolder,appName)
	thread1.start()
	file = open('FlipkartCollection/FlipkartCollection.js','r')
	line = file.readlines()
	file = open('FlipkartCollection/FlipkartCollection.js','w')
	for lines in line:
		if 'var value' in lines:
			lines = lines.split('=')
			lines[1] =	"= " + str(users) + ";"
			x = "".join(lines)
			file.write(x)
			file.write("\n")
		else:
			if "var value" not in lines:
				file.write (str(lines))
	file.close()
	os.system('node FlipkartCollection/FlipkartCollection.js')
	thread1.stop()