import json
import sys
import os

class readJson :

	def parseNCreate(self, testCase,baseFolder):
		self.baseFolder = baseFolder
		with open(testCase) as data_file:

			testCase = testCase.split('.')
			file = open (testCase[0]+".py", "w")
			testCase = testCase[0].split("/")
			data = json.load(data_file)
			read.writeImports(file, testCase,baseFolder)

			i = 0
			try :	
				while (True):
					command = data["Commands"][i]["Command"]
					target = data["Commands"][i]["Target"] 
					value = data["Commands"][i]["Value"]

					if command == "open":
						file.write("\t"+ "url = "+ "\""+target+ "\"" + "\n")
						file.write("\t"+ "driver.get(url)" + "\n")
						file.write("\t"+ "driver.maximize_window()" + "\n")
						file.write("\t"+ "driver.implicitly_wait(5)" + "\n")

					if command == "clickAndWait" or command == "click":
						if 'link' in  target:
							target = target.split("=")
							file.write("\t"+ "elementClick"+str(i) + " = driver.find_element_by_link_text(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".click()"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")

						elif '//*' in target:
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".click();"+"\n")
							file.write("\t"+ "time.sleep(3);"+"\n")

						elif 'id' in target:
							target = target.split("=")
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".click()"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")

						elif 'css' in target:
							target = target.split("=")
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".click()"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")

					if command == "type":
						if 'id' in target:
							target = target.split("=")
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")
						
						elif 'css' in target:
							target = target.split("=")
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")

						elif 'name' in target:
							target = target.split("=")
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_name(\""+target[1]+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("\t"+ "time.sleep(3)"+"\n")						

						elif '//*' in target:
							file.write ("\t"+ "elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write("\t"+ "elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("\t"+ "time.sleep(3);"+"\n")

					file.write("\n")
					i = i+1
			except :
				file.write ("\t"+ "driver.quit()"+"\n")
				file.write ("\t"+ "thread1.stop()" + "\n")


	def write_ClassName(self, testCase, file,baseFolder):
		file.write ("def TC_"+ testCase[6]+"(var_head, var_instances, var_load):"+ "\n"+"\n")
		file.write ("\t"+"baseFolder = '"+baseFolder+"'" +"\n")
		file.write ("\t"+"if (var_load == \"YES\" or var_load == \"Yes\" or var_load == \"yes\"):" +"\n")
		file.write ("\t"+"\t"+"thread1.createCSV(baseFolder)" + "\n")
		file.write ("\t"+"\t"+"thread1.start()" + "\n")
		file.write ("\t"+"\t"+"for i in range (1, int(var_instances)):" + "\n")
		file.write ("\t"+"\t"+"\t"+"Thread(target = "+testCase[6]+", args = [var_head]).start()" + "\n" + "\n")
		file.write ("\t"+"else:" + "\n")
		file.write ("\t"+"\t"+"thread1.createCSV(baseFolder)" + "\n")
		file.write ("\t"+"\t"+"thread1.start()" + "\n")	
		file.write ("\t"+"\t" + testCase[6]+ " (var_head)" + "\n" + "\n")


	def writeImports(self,file, testCase,baseFolder):
		file.write ("import time" + "\n")
		file.write ("from selenium.webdriver.chrome.options import Options"+"\n")
		file.write ("import threading, sys" +"\n")
		file.write ("from threading import Thread" + "\n")
		file.write ("from selenium import webdriver" + "\n")
		file.write ("from SampleThread_1 import myThread" + "\n")
		file.write ("thread1 = myThread(1, \"Thread-1\", 1)" + "\n" + "\n")
		read.write_ClassName(testCase, file, baseFolder)
		file.write ("def "+ testCase[6]+"(var_head):"+ "\n"+"\n")
		file.write ("\t" + "chrome_options = Options() " + "\n")
		file.write ("\t" +"chrome_options.add_argument(\"--headless\")" + "\n")
		file.write ("\t" + "chrome_options.add_argument(\"--window-size=1920x1080\")" + "\n" + "\n")
		file.write ("\t" + "if (var_head == \"YES\" or var_head == \"Yes\" or var_head == \"yes\"):"+"\n")
		file.write ("\t" + "\t" + "driver = webdriver.Chrome(chrome_options=chrome_options)" + "\n")#,executable_path=\"D:\\TestSelenium\\SeleniumScripts\\chromedriver.exe\")" + "\n")
		file.write ("\t" + "else:" + "\n")
		file.write ("\t" + "\t" + "driver = webdriver.Chrome ()" + "\n" + "\n")
		file.write("\t"+ "driver.set_page_load_timeout(30)" +"\n")


read = readJson()
read.parseNCreate(sys.argv[1],sys.argv[2])
