import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder,appName):
		
		confFile = baseFolder+"/bat_file/feedconf.bat"
		os.system ('start '+ confFile)
		self.baseFolder = baseFolder

		self.setIndex(baseFolder,appName)
		time.sleep(5)
		self.setVisualization(baseFolder,appName)

	def setIndex(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Web_Browser/createIndex.json --output=http://localhost:9200/.kibana"
		os.system(command)

	def setVisualization(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Web_Browser/hai.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1],sys.argv[2])
