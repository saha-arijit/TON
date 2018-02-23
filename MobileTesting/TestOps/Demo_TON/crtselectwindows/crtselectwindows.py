import json
import sys
import os

class readJson :

	def parseNCreate(self, testCase):

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
			testCase = testCase[0]
			# data = json.load(data_file)
			read.writeImports(file,testCase)

			i = 0
			try :	
				while (True):
					command = data["Commands"][i]["Command"]
					target = data["Commands"][i]["Target"] 
					value = data["Commands"][i]["Value"]

					if command == "open":
						file.write("url = "+ "\""+target+ "\"" + "\n")
						file.write("driver.get(url)" + "\n")
						file.write("driver.maximize_window()" + "\n")
						file.write("driver.implicitly_wait(5)" + "\n")

					if command == "clickAndWait" or command == "click":
						if 'link' in  target:
							target = target.split("=")
							file.write("elementClick"+str(i) + " = driver.find_element_by_link_text(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".click()"+"\n")
							file.write("time.sleep(3)"+"\n")

						elif '//*' in target:
							file.write ("elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write("elementClick"+str(i)+".click();"+"\n")
							file.write("time.sleep(3);"+"\n")

						elif 'id' in target:
							target = target.split("=")
							file.write ("elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".click()"+"\n")
							file.write("time.sleep(3)"+"\n")

						elif 'css' in target:
							target = target.split("=")
							file.write ("elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".click()"+"\n")
							file.write("time.sleep(3)"+"\n")

					if command == "type":
						if 'id' in target:
							target = target.split("=")
							file.write ("elementClick"+str(i)+" = driver.find_element_by_id(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("time.sleep(3)"+"\n")
						
						elif 'css' in target:
							target = target.split("=")
							file.write ("elementClick"+str(i)+" = driver.find_element_by_css_selector(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("time.sleep(3)"+"\n")

						elif 'name' in target:
							target = target.split("=")
							file.write ("elementClick"+str(i)+" = driver.find_element_by_name(\""+target[1]+"\")" + "\n")
							file.write("elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("time.sleep(3)"+"\n")						

						elif '//*' in target:
							file.write ("elementClick"+str(i)+" = driver.find_element_by_xpath(\""+ target.replace("\"","'")+"\")" + "\n")
							file.write("elementClick"+str(i)+".send_keys(\""+value+"\")"+"\n")
							file.write("time.sleep(3);"+"\n")

					file.write("\n")
					i = i+1
			except :
				file.write ("driver.quit()"+"\n")
				file.write ("thread1.stop()" + "\n")

	def writeImports(self,file, testCase):
		file.write ("import time" + "\n")
		file.write ("from selenium import webdriver" + "\n")
		file.write ("driver = webdriver.Chrome ()" + "\n" + "\n")
		file.write ("driver.set_page_load_timeout(30)" +"\n")


read = readJson()
read.parseNCreate(sys.argv[1])
