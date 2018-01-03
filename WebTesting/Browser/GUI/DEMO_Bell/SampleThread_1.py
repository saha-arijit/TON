import threading
from datetime import datetime
import time
from selenium import webdriver
import sys
import subprocess

exitFlag = 0


class myThread (threading.Thread):
	def __init__(self, threadID, name, counter):
		threading.Thread.__init__(self)
		self.threadID = threadID
		self.name = name
		self.counter = counter
		print ("SAMPLETHREAD_1",threadID,name,counter)
		
	def run(self):
		print "Starting " + self.name + "\n"
		print_time(self.name, 50, self.counter)
		print "Exiting " + self.name
	
	def createCSV(self,base):
		global baseFolder
		baseFolder = base

	def stop(self):
		global exitFlag
		exitFlag = 1
		print "Exiting Main Thread" + "\n"


def print_time(threadName, counter, delay):
	while counter:
		if exitFlag:
			sys.exit(0)
		time.sleep(delay)
		print "Hello from s_1  %d", exitFlag 
		dataFile = baseFolder+"/WebTesting/Browser/GUI/DEMO_Bell/CPU%."+"csv"
		file = open(dataFile,"a")
		timeNow = datetime.now().strftime('%I:%M:%S')+","
		command = "wmic cpu get loadpercentage"
		memCommand = "wmic OS get FreePhysicalMemory"
		line = subprocess.check_output(command)
		memLine = subprocess.check_output(memCommand)
		load = line.split("\n")
		memSplit = memLine.split("\n")
		memFloat = float (memSplit[1])
		memValue = memFloat/(1024*1024)# (1)1024- b to kb and 2)1024- kb to mb)
		memVa    = ("%.2f" % memValue)
		loadpercentage = load[1]
		percentage = loadpercentage.split(" ")
		cpuPercentage = percentage[0]+","
		file.write(timeNow)
		file.write(cpuPercentage)
		file.write(str(memVa))
		file.write("\n")
		counter -= 1
		file.close()

