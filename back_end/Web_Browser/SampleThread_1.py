import threading
from datetime import datetime
import time
from selenium import webdriver
import sys
import subprocess

class myThread (threading.Thread):
	def __init__(self, threadID, name, counter):
		threading.Thread.__init__(self)
		self.threadID = threadID
		self.name = name
		self.counter = counter
		print ("SAMPLETHREAD_1",threadID,name,counter)
		
	def run(self):
		print "Starting " + self.name + "\n"
		print_time(self.name, 500, self.counter)
		print "Exiting " + self.name
	
	def createCSV(self,base,app,TC,instance1):
		global exitFlag
		exitFlag = 0
		global baseFolder
		baseFolder = base
		global appName
		appName = app
		global TC_Name
		TC_Name = ","+TC 
		global instanceNo 
		instanceNo = instance1
		global check
		check = 0 

	def stop(self):
		global exitFlag
		exitFlag = 1
		global check
		check = check+1
		print "Exiting Main Thread" + "\n"


def print_time(threadName, counter, delay):	
	time.sleep(5)
	while counter:
		if exitFlag:
			if instanceNo > 0:
				if check == instanceNo:
					print("Number of Instances",check)
					sys.exit(0)
			else:
				sys.exit(0)
		time.sleep(delay)
		dataFile = baseFolder+"/WebTesting/Browser/CPU%."+"csv"
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
		file.write(TC_Name)
		file.write("\n")
		counter -= 1
		file.close()
