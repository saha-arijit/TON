import subprocess
import os, time
import json
import sys

class viewAnalytics:

	confFile = "D:/POC/bat_file/feedconf.bat"

	def confToLogstash(self):
		
		# global baseFolder
		# baseFolder = base;
		# print ("VIEW BASE",baseFolder)
		os.system ('start '+ self.confFile)

		self.setIndex()
		time.sleep(5)
		self.setVisualization()

	def setIndex(self):

		command = "elasticdump --input=D:\TON\WebTesting\Browser\GUI\DEMO/POC/back_end/createIndex.json --output=http://localhost:9200/.kibana"
		os.system(command)

	def setVisualization(self):

		command = "elasticdump --input=D:\TON\WebTesting\Browser\GUI\DEMO/hai.json --output=http://localhost:9200/.kibana"
		os.system(command)


viewAnalytics = viewAnalytics()
viewAnalytics.confToLogstash()
