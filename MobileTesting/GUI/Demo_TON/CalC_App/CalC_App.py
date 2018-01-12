from appium import webdriver
from selenium.webdriver.common import desired_capabilities
import time
import os


class appiumAndroid:
	def applicationSetup(self,deviceName,appPackage,appActivity):
		print "BEGIN - Input - Device Name: %s , Application Package : %s , Application Activity : %s "%(deviceName,appPackage,appActivity)
		self.desired_capabilities = {}
		self.desired_capabilities['platformName'] = 'Android'
		self.desired_capabilities['platformVersion'] = '7.1'
		self.desired_capabilities['deviceName'] = deviceName
		self.desired_capabilities['appPackage'] = appPackage
		self.desired_capabilities['appActivity'] = appActivity
		print "Desired capabilities is configured for the application"
		print "END \n"
	
	def launchApplication(self,appPackage):
		print "BEGIN - Input - Application Package Name : %s "%appPackage
		appPackage=appPackage.split(".")
		print "launching the application : %s \n"% appPackage[-1]
		self.driver=webdriver
		try:
			self.driver=webdriver.Remote('http://localhost:4723/wd/hub', self.desired_capabilities)
			print "Application opened successfully"
			return True
		except:
			print "Desired Application is not opened"
			return False
		
	def calculate(self,firstNumber,secondNumber,operation):
		
		# self.driver.find_element_by_class_name("android.widget.LinearLayout").send_keys(firstNumber,operation,secondNumber)
		# time.sleep(2)

		self.driver.find_element_by_text("3").click()    #.... click on '+'... then click on "2"... click on "="
		time.sleep(2)

		# result=self.driver.find_element_by_class_name("android.widget.EditText").text
		# print "The result of the operation is :- %s "% result
		# print "Clearing the result"
		# self.driver.find_element_by_class_name("android.widget.LinearLayout").clear()
		# time.sleep(2)
		# print "Operation compleated successfully \n"
		# print "END - output - status - True \n "
		# return True

 
	def tearDown(self):
		print "BEGIN "
		try:
			print "Closing the Application \n"
			print "Terminating Appiun  Session \n"
			self.driver.quit()
			print "END - output - status - True \n "
			return True
		except:
			print "END - output - status - False \n "
			return False


a=appiumAndroid()
a.applicationSetup('ZY322C2FRR', 'com.google.android.calculator2', 'com.google.android.calculator2.Calculator')
a.launchApplication('Calculator')
a.calculate('2','90','+')
a.tearDown() 