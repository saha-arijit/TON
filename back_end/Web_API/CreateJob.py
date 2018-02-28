import sys, os
import subprocess

class CreateJob:

	def checkExistingJobs(self, jobName, xmlFilePath):

		cmd = 'java -jar D:\\TON\\back_end\\jenkins-cli.jar -s http://localhost:8080/ list-jobs All'
		output = subprocess.check_output(cmd, shell=True)
		if jobName in output:
			print "There...."
		else:
			self.createJob(jobName, xmlFilePath)

	def createJob(self,jobName, xmlFilePath):
		
		cmd = 'java -jar D:\\TON\\back_end\\jenkins-cli.jar -s http://localhost:8080/ create-job ' + jobName + ' < '+ xmlFilePath
		output = subprocess.check_output(cmd, shell=True)

jobCreate = CreateJob()
jobCreate.checkExistingJobs(sys.argv[1], sys.argv[2])