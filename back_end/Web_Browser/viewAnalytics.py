import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder,appName):

		delCommand = "curl -XDELETE localhost:9200/browser"
		os.system(delCommand)
		
		# confFile = baseFolder+"/bat_file/feedconf.bat"
		confFile = "CSCRIPT "+baseFolder+'\\bat_file\\logstash_feed.vbs "'+baseFolder+'\\bat_file\\feedconf.bat"'
		os.system (confFile)
		self.baseFolder = baseFolder

		# self.setIndex(baseFolder,appName)
		# time.sleep(5)
		self.setVisualization(baseFolder,appName)

	# def setIndex(self,baseFolder,appName):

	# 	command = "elasticdump --input="+baseFolder+"/back_end/Web_Browser/createIndex.json --output=http://localhost:9200/.kibana"
	# 	os.system(command)

	def setVisualization(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Web_Browser/TON.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1],sys.argv[2])
