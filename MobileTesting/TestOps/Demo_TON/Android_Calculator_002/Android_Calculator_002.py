import time
from appium import webdriver
class Android_Calculator():
	def applicationSetup(self):
		desired_caps = {}
		desired_caps['platformName'] = 'Android'
		desired_caps['appiumVersion'] = '1.7.1'
		desired_caps['platformVersion'] = '7.1'
		desired_caps['deviceName'] = 'Android Emulator'
		desired_caps['browserName'] = 'Android'
		
		desired_caps['appPackage'] = 'com.google.android.calculator'
		desired_caps['appActivity'] = 'com.android.calculator2.Calculator'
		
		self.driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
		time.sleep(5)
		
	def add_operation(self):
		self.driver.find_element_by_id ('com.google.android.calculator:id/digit_2').click()
		time.sleep(2)
		
		self.driver.find_element_by_accessibility_id ('plus').click()
		time.sleep(2)
		
		self.driver.find_element_by_id ('com.google.android.calculator:id/digit_3').click()
		time.sleep(2)
		
		self.driver.find_element_by_accessibility_id ('equals').click()
		time.sleep(2)
		
		self.driver.find_element_by_accessibility_id ('clear').click()
		time.sleep(2)
		
	def tearDown(self):
		self.driver.quit()
		
x = Android_Calculator()
x.applicationSetup()
x.add_operation()
x.tearDown()
		



