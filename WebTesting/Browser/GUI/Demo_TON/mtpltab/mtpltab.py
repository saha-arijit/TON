import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_mtpltab(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	TC = 'mtpltab'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		for i in range (0, int(var_instances)):
			Thread(target = mtpltab, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName,TC,int(var_instances))
		thread1.start()
		mtpltab (var_head)

def mtpltab(var_head):

	try:
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

		elementClick1 = driver.find_element_by_id("twotabsearchtextbox")
		elementClick1.click()
		time.sleep(3)

		elementClick2 = driver.find_element_by_id("twotabsearchtextbox")
		elementClick2.send_keys("moto")
		time.sleep(3)

		elementClick3 = driver.find_element_by_css_selector("input.nav-input")
		elementClick3.click()
		time.sleep(3)

		elementClick4 = driver.find_element_by_css_selector("h2.a-size-base.s-inline.s-access-title.a-text-normal")
		elementClick4.click()
		time.sleep(3)




		elementClick8 = driver.find_element_by_xpath("//*[@id='result_1']/div/div[3]/div[1]/a/h2")
		elementClick8.click();
		time.sleep(3);


		elementClick10 = driver.find_element_by_xpath("//*[@id='result_2']/div/div[3]/div[1]/a/h2")
		elementClick10.click();
		time.sleep(3);



		elementClick13 = driver.find_element_by_xpath("//*[@id='result_3']/div/div[3]/div[1]/a/h2")
		elementClick13.click();
		time.sleep(3);



		elementClick16 = driver.find_element_by_xpath("//*[@id='result_20']/div/div[3]/div[1]/a/h2")
		elementClick16.click();
		time.sleep(3);







		driver.quit()
		thread1.stop()

	except Exception as e:
		thread1.stop()
		driver.quit()
		assert (1 > 2) , str(e)
