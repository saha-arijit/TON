import subprocess
import os, time
import sys

class openWinium:
	
	def winiumOpen(self,baseFolder):
		command = 'netstat -ano | findstr :4723'

		result = subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
		(output, err) = result.communicate()
		if output == '':
			try:
				os.system("start "+baseFolder+'\\bat_file\\openAppium.vbs "'+baseFolder+'"')
				print "Appium opened"
			except Exception as e:
				print e

		else:
			print "Appium Already running on port num 4723"

openWinium = openWinium()
openWinium.winiumOpen(sys.argv[1])


	# child = exec("start "+baseFolder+'\\bat_file\\openWinium.vbs "'+baseFolder+'"', (e, stdout, stderr)