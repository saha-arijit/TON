import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_Twitter(var_head, var_instances, var_load):

	x = 0
	t = 't'
	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	global check
	check = 0
	TC = 'Twitter'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		for i in range (0, int(var_instances)):
			t = 't'
			t = t + str(i)
			t = threading.Thread(target = Twitter, args = [var_head])
			t.start()

		while (x == 0):
			if t.isAlive():
				time.sleep(2)
			else:
				if(check == 1):
					assert(1>2)
				x = 1
	else:
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		Twitter (var_head)

def Twitter(var_head):

	try:
		chrome_options = Options() 
		chrome_options.add_argument("--headless")
		chrome_options.add_argument("--window-size=1920x1080")

		if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
			driver = webdriver.Chrome(chrome_options=chrome_options)
		else:
			driver = webdriver.Chrome ()

		driver.set_page_load_timeout(180)
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

	except Exception as e:
		thread1.stop()
		driver.quit()
		global check
		check = 1
		assert (1 > 2) , str(e)
