import sys, os
import subprocess

class CreateJob:

	def checkExistingJobs(self,baseFolder, jobName, xmlFilePath):
  
		cmd = 'java -jar '+baseFolder+'\\back_end\\jenkins-cli.jar -s http://localhost:8080/ list-jobs All'
		
		output = subprocess.check_output(cmd, shell=True)
		if jobName in output:
			print "There...."
		else:
			self.createJob(baseFolder,jobName, xmlFilePath)
			# pass

	def createJob(self,baseFolder,jobName, xmlFilePath):
		
		cmd = 'java -jar '+baseFolder+'\\back_end\\jenkins-cli.jar -s http://localhost:8080/ create-job ' + jobName + ' < '+ xmlFilePath
		output = subprocess.check_output(cmd, shell=True)
		#java -jar backend\jenkins-cli.jar -s http://localhost:8080/ create-job Vignesh < D:\TON\WebTesting\Browser\TestOps\Demo_TON\BF_LinkedIn_TC_001\BF_LinkedIn_TC_001.xml

jobCreate = CreateJob()
jobCreate.checkExistingJobs(sys.argv[1], sys.argv[2],sys.argv[3])