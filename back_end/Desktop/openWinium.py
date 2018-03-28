import subprocess
import os, time
import sys

class openWinium:
	
	def winiumOpen(self,baseFolder):
		command = 'netstat -ano | findstr :9999'

		result = subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)
		(output, err) = result.communicate()
		if output == '':
			os.system("start "+baseFolder+'\\bat_file\\openWinium.vbs "'+baseFolder+'"')
			print "winium opened"
		else:
			print "Winium Already running on port num 9999"

openWinium = openWinium()
openWinium.winiumOpen(sys.argv[1])


	# child = exec("start "+baseFolder+'\\bat_file\\openWinium.vbs "'+baseFolder+'"', (e, stdout, stderr)