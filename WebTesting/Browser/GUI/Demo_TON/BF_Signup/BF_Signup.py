import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_Signup(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		for i in range (1, int(var_instances)):
			Thread(target = BF_Signup, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		BF_Signup (var_head)

def BF_Signup(var_head):

	chrome_options = Options() 
	chrome_options.add_argument("--headless")
	chrome_options.add_argument("--window-size=1920x1080")

	if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
		driver = webdriver.Chrome(chrome_options=chrome_options)
	else:
		driver = webdriver.Chrome ()

	driver.set_page_load_timeout(30)
	url = "https://twitter.com/"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_link_text("Sign up")
	elementClick1.click()
	time.sleep(3)

	elementClick2 = driver.find_element_by_id("full-name")
	elementClick2.send_keys("Arijit Saha")
	time.sleep(3)

	elementClick3 = driver.find_element_by_id("email")
	elementClick3.click()
	time.sleep(3)

	elementClick4 = driver.find_element_by_id("email")
	elementClick4.send_keys("a@b.c")
	time.sleep(3)

	elementClick5 = driver.find_element_by_id("submit_button")
	elementClick5.click()
	time.sleep(3)

	driver.quit()
	thread1.stop()
