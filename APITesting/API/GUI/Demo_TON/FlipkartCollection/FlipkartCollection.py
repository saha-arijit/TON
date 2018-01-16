import sys
import os
import time
def TC_FlipkartCollection(iterations=1, vuser=1, ramp=1):
	if(int(vuser) == 1): 
		os.chdir("D:/TON/APITesting/API/GUI/Demo_TON/FlipkartCollection")
		cmd = "newman run FlipkartCollection.json -e BF_FlipKart1.json -r html --reporter-html-export result.html -x -n "+str(iterations)
		os.system(cmd)
	elif(int(vuser) > 1):
		for i in vuser:
			os.chdir("D:/TON/APITesting/API/GUI/Demo_TON/FlipkartCollection")
			cmd = "newman run FlipkartCollection.json -e BF_FlipKart1.json -r html --reporter-html-export result_"+str(i)+".html -x -n "+str(iterations)
			os.system(cmd)
			time.sleep(int(ramp)/int(vuser))
