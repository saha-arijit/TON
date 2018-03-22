import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder,appName):

		delCommand = "curl -XDELETE localhost:9200/mobile"
		os.system (delCommand)

		# Kill Appium running when Step 3 was clicked
		task   = 'netstat -ano | findstr :4723'
		try:
			result = subprocess.check_output(task, shell=True)
			pid = result[-7:].strip()

			killTask = 'taskkill /PID '+ pid +' /F'
			os.system (killTask)

		except :
			print "Appium was not running."
		
		
		# confFile = baseFolder+"/bat_file/Mobileconf.bat"
		confFile = "CSCRIPT "+baseFolder+'\\bat_file\\logstash_feed.vbs "'+baseFolder+'\\bat_file\\Mobileconf.bat"'
		os.system (confFile)
		self.baseFolder = baseFolder

		# self.setIndex(baseFolder,appName)
		# time.sleep(5)
		self.setVisualization(baseFolder,appName)

	# def setIndex(self,baseFolder,appName):

		# command = "elasticdump --input="+baseFolder+"/back_end/Mobile_GUI/createIndex.json --output=http://localhost:9200/.kibana"
		# os.system(command)

	def setVisualization(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Mobile_GUI/TON.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1],sys.argv[2])
