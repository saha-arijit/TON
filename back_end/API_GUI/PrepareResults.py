import os
from glob import glob

filePath = "F:/TON/APITesting/API/GUI/Demo_TON/Bell_Demo/result_1.html"
res = ""
PATH="F:/TON/APITesting/API/GUI/Demo_TON"
result = [y for x in os.walk(PATH) for y in glob(os.path.join(x[0], '*.html'))]
for each_file in result:
	#print each_file
	with open(filePath) as f:
		for each_line in f:
			if(each_line.find('3">Time<')>0):
				time_temp = each_line.split('9">')
				time = time_temp[1].split("<")
				#print (time[0])
				res = res + time[0]+'\t'
			elif(each_line.find('Total run duration')>0):
				runDur_temp = each_line.split('</div><div class="col-md-6">')
				runDur = runDur_temp[1].split('</div')
				res = res + runDur[0] + '\t'
			elif(each_line.find('Total data received')>0):
				dataRec_temp = each_line.split('</div><div class="col-md-6">')
				dataRec = dataRec_temp[1].split('</div')
				res = res + dataRec[0] + '\t'
			elif(each_line.find('Average response time')>0):
				avgRespTime_temp = each_line.split('</div><div class="col-md-6">')
				avgRespTime = avgRespTime_temp[1].split('</div')
				res = res + avgRespTime[0] + '\n'
				
			elif(each_line.find('3">Collection<')>0):
				coll_temp = each_line.split('9">')
				collName = coll_temp[1].split("<")
				#print (collName[0])
				res = res + collName[0] + '\t'
			elif(each_line.find('"panel-title"')>0):
				apiName_temp = each_line.split('collapseOne">')
				apiName = apiName_temp[1].split('</a>')
				#print (apiName[0])
				res = res + apiName[0] + '\t'
				#print ("current Line No : "+ str(i))
				#print ("API Result : " +linecache.getline(filePath,i+15))
			elif(each_line.find('ms<')>0 and each_line.find('col-md-8"')>0):
				#print each_line
				respTime_temp = each_line.split('"col-md-8">')
				#print respTime_temp
				respTime = respTime_temp[1].split('</div')
				#print (respTime[0])
				res = res + respTime[0] + '\t'
			elif(each_line.find('>Total failed tests')>0):
				failedStatus_temp = each_line.split('col-md-8">')
				failedStatus = failedStatus_temp[1].split('</div')
				if(int(failedStatus[0]) > 0):
					#print ("Failed")
					res = res + "Failed" + '\n'
				else:
					res = res + "Passed" + '\n'
			
print(res)


#
#	data = f.read()
#	print (data)
	
f.close()

		