import subprocess
import os, time
import sys

class viewAnalytics:

	def confToLogstash(self,baseFolder):
		
		confFile = baseFolder+"/bat_file/feedconf.bat"
		os.system ('start '+ confFile)
		self.baseFolder = baseFolder

		self.setIndex(baseFolder)
		time.sleep(5)
		self.setVisualization(baseFolder)

	def setIndex(self,baseFolder):

		command = "elasticdump --input="+baseFolder+"\WebTesting\Browser\GUI\DEMO_Bell/createIndex.json --output=http://localhost:9200/.kibana"
		os.system(command)

	def setVisualization(self,baseFolder):

		command = "elasticdump --input="+baseFolder+"\WebTesting\Browser\GUI\DEMO_Bell/hai.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash(sys.argv[1])
