import sys
import os
import time
def TC_TwitterCollection(iterations=1, vuser=1, ramp=1):
	if(int(vuser) == 1): 
		os.chdir("D:/TON/APITesting/API/GUI/Demo_TON/TwitterCollection")
		cmd = "newman run TwitterCollection.json -e Signup.json -r html --reporter-html-export result.html -x -n "+str(iterations)
		os.system(cmd)
	elif(int(vuser) > 1):
		for i in vuser:
			os.chdir("D:/TON/APITesting/API/GUI/Demo_TON/TwitterCollection")
			cmd = "newman run TwitterCollection.json -e Signup.json -r html --reporter-html-export result_"+str(i)+".html -x -n "+str(iterations)
			os.system(cmd)
			time.sleep(int(ramp)/int(vuser))
