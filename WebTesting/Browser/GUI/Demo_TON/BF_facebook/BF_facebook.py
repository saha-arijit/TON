import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_facebook(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		for i in range (0, int(var_instances)):
			Thread(target = BF_facebook, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		BF_facebook (var_head)

def BF_facebook(var_head):

	chrome_options = Options() 
	chrome_options.add_argument("--headless")
	chrome_options.add_argument("--window-size=1920x1080")

	if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
		driver = webdriver.Chrome(chrome_options=chrome_options)
	else:
		driver = webdriver.Chrome ()

	driver.set_page_load_timeout(180)
	url = "https://www.google.co.in/search?q=fb&rlz=1C1CHBF_enIN775IN775&oq=fb&aqs=chrome..69i57j69i60l2j0l3.925j0j7&sourceid=chrome&ie=UTF-8"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_link_text("Facebook - Log In or Sign Up")
	elementClick1.click()
	time.sleep(3)



	elementClick4 = driver.find_element_by_id("email")
	elementClick4.click()
	time.sleep(3)

	elementClick5 = driver.find_element_by_id("email")
	elementClick5.send_keys("58712365213166")
	time.sleep(3)

	elementClick6 = driver.find_element_by_id("pass")
	elementClick6.click()
	time.sleep(3)

	elementClick7 = driver.find_element_by_id("pass")
	elementClick7.send_keys("hiwisghqwihiqw")
	time.sleep(3)

	elementClick8 = driver.find_element_by_id("u_0_2")
	elementClick8.click()
	time.sleep(3)

	elementClick9 = driver.find_element_by_id("email")
	elementClick9.send_keys("hkffahefhaeoh")
	time.sleep(3)

	elementClick10 = driver.find_element_by_id("pass")
	elementClick10.click()
	time.sleep(3)

	elementClick11 = driver.find_element_by_id("pass")
	elementClick11.send_keys("kgdiyawgyidg")
	time.sleep(3)

	elementClick12 = driver.find_element_by_id("loginbutton")
	elementClick12.click()
	time.sleep(3)

	driver.quit()
	thread1.stop()
