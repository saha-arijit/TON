import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder,appName):
		
		confFile = baseFolder+"/bat_file/APIconf.bat"
		os.system ('start '+ confFile)
		self.baseFolder = baseFolder

		self.setIndex(baseFolder,appName)
		time.sleep(5)
		self.setVisualization(baseFolder,appName)

	def setIndex(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Web_API/createIndex.json --output=http://localhost:9200/.kibana"
		os.system(command)

	def setVisualization(self,baseFolder,appName):

		command = "elasticdump --input="+baseFolder+"/back_end/Web_API/api.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1],sys.argv[2])
