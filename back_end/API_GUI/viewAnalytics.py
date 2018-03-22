import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder,appName):


		delCommand = "curl -XDELETE localhost:9200/api"
		os.system(delCommand)
		
		# confFile = baseFolder+"/bat_file/APIconf.bat"
		confFile = "CSCRIPT "+baseFolder+'\\bat_file\\logstash_feed.vbs "'+baseFolder+'\\bat_file\\APIconf.bat"'
		os.system (confFile)
		self.baseFolder = baseFolder

		# self.setIndex(baseFolder,appName)
		# time.sleep(5)
		self.setVisualization(baseFolder,appName)

	# def setIndex(self,baseFolder,appName):

	# 	command = "elasticdump --input="+baseFolder+"/back_end/API_GUI/createIndex.json --output=http://localhost:9200/.kibana"
	# 	os.system(command)

	def setVisualization(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/API_GUI/TON.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1],sys.argv[2])
