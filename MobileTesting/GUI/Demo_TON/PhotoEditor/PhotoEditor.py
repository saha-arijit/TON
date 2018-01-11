from appium import webdriver
import time
class GenymotionApp():
	def setup(self):
		
		desired_caps = {}
		desired_caps['platformName'] = 'Android'
		desired_caps['appiumVersion'] = '1.7.1'
		desired_caps['platformVersion'] = '7.1'
		desired_caps['deviceName'] = 'Android Emulator'
		desired_caps['browserName'] = 'Android'
		
		desired_caps['appPackage'] = 'photoeditor.layout.collagemaker'
		desired_caps['appActivity'] = 'com.camerasideas.collagemaker.activity.MainActivity'
	
		 
		self.driver = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)
		self.driver.find_element_by_id ('photoeditor.layout.collagemaker:id/home_collage').click()
		time.sleep(2)
		
		self.driver.find_element_by_id('com.android.packageinstaller:id/permission_allow_button').click()
		time.sleep(2)
		
		self.driver.find_element_by_id('photoeditor.layout.collagemaker:id/sign_more_less_view').click()
		time.sleep(2)
		
		self.driver.find_element_by_id('photoeditor.layout.collagemaker:id/btn_back').click()
		time.sleep(2)
		
		self.driver.quit()
# x = GenymotionApp()
# x.setup()