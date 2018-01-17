import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_FlipKart1(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		for i in range (1, int(var_instances)):
			Thread(target = BF_FlipKart1, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName)
		thread1.start()
		BF_FlipKart1 (var_head)

def BF_FlipKart1(var_head):

	chrome_options = Options() 
	chrome_options.add_argument("--headless")
	chrome_options.add_argument("--window-size=1920x1080")

	if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
		driver = webdriver.Chrome(chrome_options=chrome_options)
	else:
		driver = webdriver.Chrome ()

	driver.set_page_load_timeout(30)
	url = "https://www.google.co.in/search?q=flipkart&rlz=1C1CHBF_enIN746IN746&oq=flipkart&aqs=chrome..69i57j0l5.2171j0j7&sourceid=chrome&ie=UTF-8"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_id("vn1s0p1c0")
	elementClick1.click()
	time.sleep(3)


	elementClick3 = driver.find_element_by_name("q")
	elementClick3.send_keys("samsung galaxy on max")
	time.sleep(3)

	elementClick4 = driver.find_element_by_css_selector("button.vh79eN")
	elementClick4.click()
	time.sleep(3)

	elementClick5 = driver.find_element_by_xpath("//*[@id='container']/div/div[1]/div/div[2]/div/div[2]/div/div[3]/div/div/div[2]/div/a/div[3]/div[1]/div[1]")
	elementClick5.click();
	time.sleep(3);


	elementClick7 = driver.find_element_by_link_text("CART0")
	elementClick7.click()
	time.sleep(3)

	driver.quit()
	thread1.stop()
