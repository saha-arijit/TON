import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
sys.path.insert(0,'D:/TON/back_end\Web_Browser')
from SampleThread_1 import myThread
thread1 = myThread(1, "Thread-1", 1)

def TC_BF_LIN_002(var_head, var_instances, var_load):

	baseFolder = 'D:/TON'
	appName    = 'Demo_TON'
	TC = 'BF_LIN_002'
	if (var_load == "YES" or var_load == "Yes" or var_load == "yes"):
		thread1.createCSV(baseFolder,appName,TC)
		thread1.start()
		for i in range (0, int(var_instances)):
			Thread(target = BF_LIN_002, args = [var_head]).start()

	else:
		thread1.createCSV(baseFolder,appName,TC)
		thread1.start()
		BF_LIN_002 (var_head)

def BF_LIN_002(var_head):

	try:
		chrome_options = Options() 
		chrome_options.add_argument("--headless")
		chrome_options.add_argument("--window-size=1920x1080")

		if (var_head == "YES" or var_head == "Yes" or var_head == "yes"):
			driver = webdriver.Chrome(chrome_options=chrome_options)
		else:
			driver = webdriver.Chrome ()

		driver.set_page_load_timeout(180)
		url = "https://www.google.co.in/search?q=linkedin&rlz=1C1CHBF_enIN775IN775&oq=linkedin&aqs=chrome..69i57j69i60l4j0.34932j0j7&sourceid=chrome&ie=UTF-8"
		driver.get(url)
		driver.maximize_window()
		driver.implicitly_wait(5)

		elementClick1 = driver.find_element_by_id("rhscol")
		elementClick1.click()
		time.sleep(3)

		elementClick2 = driver.find_element_by_link_text("LinkedIn: Log In or Sign Up")
		elementClick2.click()
		time.sleep(3)

		elementClick3 = driver.find_element_by_id("reg-firstname")
		elementClick3.send_keys("Jikiki")
		time.sleep(3)

		elementClick4 = driver.find_element_by_id("reg-lastname")
		elementClick4.click()
		time.sleep(3)

		elementClick5 = driver.find_element_by_id("reg-lastname")
		elementClick5.send_keys("kiki")
		time.sleep(3)

		elementClick6 = driver.find_element_by_id("reg-email")
		elementClick6.click()
		time.sleep(3)

		elementClick7 = driver.find_element_by_id("reg-email")
		elementClick7.send_keys("gigi")
		time.sleep(3)

		elementClick8 = driver.find_element_by_id("reg-password")
		elementClick8.click()
		time.sleep(3)

		elementClick9 = driver.find_element_by_id("reg-password")
		elementClick9.send_keys("huhu")
		time.sleep(3)

		elementClick10 = driver.find_element_by_id("login-email")
		elementClick10.click()
		time.sleep(3)

		elementClick11 = driver.find_element_by_id("login-email")
		elementClick11.send_keys("fifi")
		time.sleep(3)

		elementClick12 = driver.find_element_by_id("login-password")
		elementClick12.click()
		time.sleep(3)

		elementClick13 = driver.find_element_by_id("login-password")
		elementClick13.send_keys("lili")
		time.sleep(3)


		elementClick15 = driver.find_element_by_name("first")
		elementClick15.send_keys("baba")
		time.sleep(3)


		elementClick17 = driver.find_element_by_name("last")
		elementClick17.send_keys("sekar")
		time.sleep(3)

		elementClick18 = driver.find_element_by_id("login-submit")
		elementClick18.click()
		time.sleep(3)

		elementClick19 = driver.find_element_by_id("session_password-login")
		elementClick19.click()
		time.sleep(3)

		elementClick20 = driver.find_element_by_id("session_password-login")
		elementClick20.send_keys("jadar")
		time.sleep(3)

		elementClick21 = driver.find_element_by_link_text("Join now@POS")
		elementClick21.click()
		time.sleep(3)

		elementClick22 = driver.find_element_by_id("first-name")
		elementClick22.send_keys("hihi")
		time.sleep(3)

		elementClick23 = driver.find_element_by_id("last-name")
		elementClick23.click()
		time.sleep(3)

		elementClick24 = driver.find_element_by_id("last-name")
		elementClick24.send_keys("hihi")
		time.sleep(3)

		elementClick25 = driver.find_element_by_id("join-email")
		elementClick25.click()
		time.sleep(3)

		elementClick26 = driver.find_element_by_id("join-email")
		elementClick26.send_keys("haha")
		time.sleep(3)

		elementClick27 = driver.find_element_by_id("join-password")
		elementClick27.click()
		time.sleep(3)

		elementClick28 = driver.find_element_by_id("join-password")
		elementClick28.send_keys("haha")
		time.sleep(3)

		elementClick29 = driver.find_element_by_css_selector("span.fill-v2")
		elementClick29.click()
		time.sleep(3)

		driver.quit()
		thread1.stop()

	except Exception as e:
		thread1.stop()
		driver.quit()
		assert (1 > 2) , str(e)
