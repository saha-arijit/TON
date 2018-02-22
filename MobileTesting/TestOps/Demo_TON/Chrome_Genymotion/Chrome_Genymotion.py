from appium import webdriver
import time
class ChromeBrowser():
	def applicationSetup(self):
		
		desired_caps = {}
		desired_caps['platformName'] = 'Android'
		desired_caps['appiumVersion'] = '1.7.1'
		desired_caps['platformVersion'] = '7.1'
		desired_caps['deviceName'] = 'Android Emulator'
		desired_caps['browserName'] = 'Android'

		desired_caps['appPackage'] = 'org.chromium.webview_shell'
		desired_caps['appActivity'] = 'org.chromium.webview_shell.WebViewBrowserActivity'
		self.driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
		
	def Open_Browser(self,name):
	
		self.driver.find_element_by_id ('org.chromium.webview_shell:id/url_field').send_keys(name)
		time.sleep(5)
		
		self.driver.find_element_by_accessibility_id('Load URL').click()
		time.sleep(10)
		
		self.driver.find_element_by_accessibility_id('Forgot your password?').click()
		time.sleep(3)
		
		self.driver.find_element_by_accessibility_id('Login Your Account').click()
		time.sleep(2)
		
	def tearDown(self):
		self.driver.quit()
		
x = ChromeBrowser()
x.applicationSetup()
x.Open_Browser('testonneed.com')
x.tearDown()