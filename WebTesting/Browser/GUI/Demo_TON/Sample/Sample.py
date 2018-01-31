import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_Sample(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		for i in range (0, int(var_instances)):
			Thread(target = Sample, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		Sample (var_head)

def Sample(var_head):

	chrome_options = Options() 
	chrome_options.add_argument("--headless")
	chrome_options.add_argument("--window-size=1920x1080")

	if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
		driver = webdriver.Chrome(chrome_options=chrome_options)
	else:
		driver = webdriver.Chrome ()

	driver.set_page_load_timeout(180)
	url = "https://www.amazon.in/"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_css_selector("span.nav-logo-base.nav-sprite")
	elementClick1.click()
	time.sleep(3)

	elementClick2 = driver.find_element_by_link_text("Today's Deals")
	elementClick2.click()
	time.sleep(3)


	elementClick4 = driver.find_element_by_link_text("Amazon Pay")
	elementClick4.click()
	time.sleep(3)


	elementClick6 = driver.find_element_by_css_selector("span.nav-logo-base.nav-sprite")
	elementClick6.click()
	time.sleep(3)

	driver.quit()
	thread1.stop()
