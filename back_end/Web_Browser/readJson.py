import json
import sys
import os

class readJson :

	def parseNCreate(self, testCase,baseFolder,appName):
		self.baseFolder = baseFolder
		self.appName    = appName
		with open(testCase) as data_file:

			myFile=open(testCase, 'r')
			myObject=myFile.read()
			u = myObject.decode('utf-8-sig')
			myObject = u.encode('utf-8')
			myFile.encoding
			myFile.close()
			data = json.loads(myObject,'utf-8')
	
			testCase = testCase.split('.')
			file = open (testCase[0]+".py", "w")
			testCase = testCase[0].split("/")
			read.writeImports(file, testCase,baseFolder,appName)

			i = 0
			try :	
				while (True):
					command = data["Commands"][i]["Command"]
					target = data["Commands"][i]["Target"] 
					value = data["Commands"][i]["Value"]

					if command == "open":
						file.write("\t"+"\t"+"url = "+ "\""+target+ "\"" + "\n")
						file.write("\t"+"\t"+"driver.get(url)" + "\n")
						file.write("\t"+"\t"+"driver.maximize_window()" + "\n")
						file.write("\t"+"\t"+"driver.implicitly_wait(5)" + "\n")

					if command == "clickAndWait" or command == "click":
						if 'link' in  target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i) + " = driver.find_element_by_link_text(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".click()"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")

						elif '//*' in target:
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".click();"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3);"+"\n")

						elif 'id' in target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".click()"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")

						elif 'css' in target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".click()"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")

					if command == "type":
						if 'id' in target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")
						
						elif 'css' in target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")

						elif 'name' in target:
							target = target.split("=")
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_name(\""+target[1]+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3)"+"\n")						

						elif '//*' in target:
							file.write ("\t"+"\t"+"elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write ("\t"+"\t"+"elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write ("\t"+"\t"+"time.sleep(3);"+"\n")

					file.write("\n")
					i = i+1
			except :
				file.write ("\t"+"\t"+"driver.quit()"+"\n")
				file.write ("\t"+"\t"+"thread1.stop()" + "\n\n")
				file.write ("\t"+"except Exception as e:"+"\n")
				file.write ("\t"+"\t"+"thread1.stop()"+"\n")
				file.write ("\t"+"\t"+"driver.quit()"+"\n")
				file.write ("\t"+"\t"+"global check"+"\n")
				file.write ("\t"+"\t"+"check = 1"+"\n")
				file.write ("\t"+"\t"+"assert (1 > 2) , str(e)"+"\n")

	def write_ClassName(self, testCase, file,baseFolder,appName):
		file.write ("def TC_"+ testCase[6]+"(var_head, var_instances, var_load):"+ "\n"+"\n")
		file.write ("\t"+"x = 0" +"\n")
		file.write ("\t"+"t = 't'" +"\n")
		file.write ("\t"+"baseFolder = '"+baseFolder+"'" +"\n")
		file.write ("\t"+"appName    = '"+appName+"'" +"\n")
		file.write ("\t"+"global check"+"\n")
		file.write ("\t"+"check = 0"+"\n")
		file.write ("\t"+"TC = '"+testCase[6]+"'"+"\n")
		file.write ("\t"+"if (var_load == \"YES\" or var_load == \"Yes\" or var_load == \"yes\"):" +"\n")
		file.write ("\t"+"\t"+"thread1.createCSV(baseFolder,appName,TC,int(var_instances))" + "\n")
		file.write ("\t"+"\t"+"thread1.start()" + "\n")
		file.write ("\t"+"\t"+"for i in range (0, int(var_instances)):" + "\n")
		file.write ("\t"+"\t"+"\t"+"t = 't'"+ "\n")
		file.write ("\t"+"\t"+"\t"+"t = t + str(i)"+ "\n")
		file.write ("\t"+"\t"+"\t"+"t = threading.Thread(target = "+testCase[6]+", args = [var_head])" + "\n")
		file.write ("\t"+"\t"+"\t"+"t.start()"+ "\n"+ "\n")
		file.write ("\t"+"\t"+"while (x == 0):" + "\n")
		file.write ("\t"+"\t"+"\t"+"if t.isAlive():"+ "\n")
		file.write ("\t"+"\t"+"\t"+"\t"+"time.sleep(2)"+ "\n")
		file.write ("\t"+"\t"+"\t"+"else:"+ "\n")
		file.write ("\t"+"\t"+"\t"+"\t"+"if(check == 1):"+ "\n")
		file.write ("\t"+"\t"+"\t"+"\t"+"\t"+"assert(1>2)"+ "\n")
		file.write ("\t"+"\t"+"\t"+"\t"+"x = 1"+ "\n")
		file.write ("\t"+"else:" + "\n")
		file.write ("\t"+"\t"+"thread1.createCSV(baseFolder,appName,TC,int(var_instances))" + "\n")
		file.write ("\t"+"\t"+"thread1.start()" + "\n")	
		file.write ("\t"+"\t" + testCase[6]+ " (var_head)" + "\n" + "\n")


	def writeImports(self,file, testCase,baseFolder,appName):
		file.write ("import time" + "\n")
		file.write ("from selenium.webdriver.chrome.options import Options"+"\n")
		file.write ("import threading, sys" +"\n")
		file.write ("from threading import Thread" + "\n")
		file.write ("from selenium import webdriver" + "\n")
		file.write ("sys.path.insert(0,'"+baseFolder+"/back_end\Web_Browser')"+"\n")
		file.write ("from SampleThread_1 import myThread" + "\n")
		file.write ("thread1 = myThread(1, \"Thread-1\", 1)" + "\n" + "\n")
		read.write_ClassName(testCase, file, baseFolder,appName)
		file.write ("def "+ testCase[6]+"(var_head):"+ "\n"+"\n")
		file.write ("\t" + "try:" + "\n")
		file.write ("\t" +"\t"+ "chrome_options = Options() " + "\n")
		file.write ("\t" +"\t"+"chrome_options.add_argument(\"--headless\")" + "\n")
		file.write ("\t" +"\t"+ "chrome_options.add_argument(\"--window-size=1920x1080\")" + "\n" + "\n")
		file.write ("\t" +"\t"+ "if (var_head == \"YES\" or var_head == \"Yes\" or var_head == \"yes\"):"+"\n")
		file.write ("\t" +"\t"+"\t" + "driver = webdriver.Chrome(chrome_options=chrome_options)" + "\n")#,executable_path=\"D:\\TestSelenium\\SeleniumScripts\\chromedriver.exe\")" + "\n")
		file.write ("\t" +"\t"+"else:" + "\n")
		file.write ("\t" +"\t"+"\t" + "driver = webdriver.Chrome ()" + "\n" + "\n")
		file.write("\t"+"\t"+"driver.set_page_load_timeout(180)" +"\n")


read = readJson()
read.parseNCreate(sys.argv[1],sys.argv[2],sys.argv[3])
