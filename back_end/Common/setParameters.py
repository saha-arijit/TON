import sys

def setParameters(baseFolder,testcase,job,headless, instances, loadtest):
	# print headless
	# headless = headless.split('=')
	# print headless[1]
	
	if testcase == 'Browser':
		testFile = baseFolder+'\WebTesting\Browser\TestOps\Demo_TON\TestCases.robot' 

	elif testcase == 'WebAPI':
		testFile = baseFolder+'\WebTesting\API\TestOps\Demo_TON\LoadTest.robot'

	elif testcase == 'API':
		testFile = baseFolder+'\APITesting\TestOps\Demo_TON\LoadTest.robot'

	elif testcase == 'Mobile':
		print "#######Mobile Doesn't have any Arguments#######"
		exit()

	elif testcase == 'Desktop':
		print "#######Desktop Doesn't have any Arguments#######"
		exit()

	print ("file",testFile)

	headless  = headless.split('=')
	instances = instances.split('=')
	loadtest  = loadtest.split('=')

	lookup  = "TC_"+job
	print(lookup)
	replace = "\t"+lookup+"  "+headless[1]+"  "+instances[1]+"  "+loadtest[1]+ "\n"
	print(replace)

	fileRead    = open(testFile,"r")
	content     = fileRead.readlines()
	fileRead.close()
	fileWrite = open(testFile,"w")
	lookup = "TC_"+job

	for line in (content):
		if lookup in line:
			fileWrite.write(replace)
		else :
			fileWrite.write(line)



if __name__=="__main__":
	setParameters(sys.argv[1], sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6])