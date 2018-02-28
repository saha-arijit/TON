import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_linkedin(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	TC = 'BF_linkedin'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		for i in range (0, int(var_instances)):
			Thread(target = BF_linkedin, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		BF_linkedin (var_head)

def BF_linkedin(var_head):

	try:
		chrome_options = Options() 
		chrome_options.add_argument("--headless")
		chrome_options.add_argument("--window-size=1920x1080")

		if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
			driver = webdriver.Chrome(chrome_options=chrome_options)
		else:
			driver = webdriver.Chrome ()

		driver.set_page_load_timeout(180)
		url = "https://www.google.co.in/search?q=linkedin+account&rlz=1C1CHBF_enIN775IN775&oq=li&aqs=chrome.1.69i57j69i59j69i60l4.2076j0j7&sourceid=chrome&ie=UTF-8"
		driver.get(url)
		driver.maximize_window()
		driver.implicitly_wait(5)

		elementClick1 = driver.find_element_by_link_text("LinkedIn: Log In or Sign Up")
		elementClick1.click()
		time.sleep(3)

		elementClick2 = driver.find_element_by_id("reg-firstname")
		elementClick2.send_keys("jkrowling")
		time.sleep(3)

		elementClick3 = driver.find_element_by_id("reg-lastname")
		elementClick3.click()
		time.sleep(3)

		elementClick4 = driver.find_element_by_id("reg-lastname")
		elementClick4.send_keys("potter")
		time.sleep(3)

		elementClick5 = driver.find_element_by_id("reg-email")
		elementClick5.click()
		time.sleep(3)

		elementClick6 = driver.find_element_by_id("reg-email")
		elementClick6.send_keys("9456123789")
		time.sleep(3)

		elementClick7 = driver.find_element_by_id("reg-password")
		elementClick7.click()
		time.sleep(3)

		elementClick8 = driver.find_element_by_id("reg-password")
		elementClick8.send_keys("million$")
		time.sleep(3)

		elementClick9 = driver.find_element_by_id("registration-submit")
		elementClick9.click()
		time.sleep(3)

		driver.quit()
		thread1.stop()

	except Exception as e:
		thread1.stop()
		driver.quit()
		assert (1 > 2) , str(e)
