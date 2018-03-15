import sys

class MobileJob:

	def createXML (self ,baseFolder, appName, job):

		self.job = job
		
		file = open( baseFolder + '/MobileTesting/TestOps/' + appName + '/'+ self.job +'/' + self.job+ '.xml', 'w')
		file.write("<?xml version='1.0' encoding='UTF-8'?>" + "\n")
		file.write("<project>" + "\n")
		file.write("  <description></description>" + "\n")
		file.write("  <keepDependencies>false</keepDependencies>" + "\n")
		file.write("  <properties/>" + "\n")
		file.write("  <scm class=\"hudson.scm.NullSCM\"/>" + "\n")
		file.write("  <canRoam>true</canRoam>" + "\n")
		file.write("  <disabled>false</disabled>" + "\n")
		file.write("  <blockBuildWhenDownstreamBuilding>false</blockBuildWhenDownstreamBuilding>" + "\n")
		file.write("  <blockBuildWhenUpstreamBuilding>false</blockBuildWhenUpstreamBuilding>" + "\n")
		file.write("  <triggers/>" + "\n")
		file.write("  <concurrentBuild>false</concurrentBuild>" + "\n")
		file.write("  <builders>" + "\n")
		file.write("    <hudson.tasks.BatchFile>" + "\n")
		file.write("      <command>cd \ " + "\n"+ "cd /d " + baseFolder + "\n" + "cd MobileTesting/TestOps/"+appName+ "/" + "\n" + 
									"python "+baseFolder+"/back_end/Common/setParameters.py "+baseFolder+" Mobile "+job+" Headless=no Instances=0 LoadTest=no"+ "\n"+
									"pybot.bat -d ..\\"+appName+"\\"+job+"\Results --timestamp --reportbackground white:white:white -t "+ job+" mobileTestcase.robot " +" </command>" + "\n")
		file.write("    </hudson.tasks.BatchFile>" + "\n")
		file.write("  </builders>" + "\n")
		file.write("  <publishers/>" + "\n")
		file.write("  <buildWrappers/>" + "\n")
		file.write("</project>" + "\n")
		file.close()

mobileJob = MobileJob()
mobileJob.createXML(sys.argv[1],sys.argv[2],sys.argv[3])
