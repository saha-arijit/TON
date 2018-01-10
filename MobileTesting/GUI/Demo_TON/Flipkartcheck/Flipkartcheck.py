import time
from selenium.webdriver.chrome.options import Options
import threading, sys
from threading import Thread
from selenium import webdriver
import time



def Flipkartcheck(var_head):

	time.sleep(20)
	chrome_options = Options() 
	chrome_options.add_argument("--headless")
	chrome_options.add_argument("--window-size=1920x1080")

	driver = webdriver.Chrome ()

	driver.set_page_load_timeout(30)
	url = "https://www.flipkart.com/"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick1 = driver.find_element_by_link_text("Log In")
	elementClick1.click()
	time.sleep(3)

	elementClick2 = driver.find_element_by_css_selector("_2zrpKA._2rqcw-")
	elementClick2.send_keys("minupammeht")
	time.sleep(3)

	elementClick3 = driver.find_element_by_css_selector("_2ISNhP._3AOFWO")
	elementClick3.click()
	time.sleep(3)

	elementClick4 = driver.find_element_by_link_text("Log In")
	elementClick4.click()
	time.sleep(3)

	elementClick5 = driver.find_element_by_css_selector("_2zrpKA._2rqcw-")
	elementClick5.send_keys("minupammehta@gmail.com")
	time.sleep(3)

	elementClick6 = driver.find_element_by_css_selector("_2zrpKA._2rqcw-._3v41xv")
	elementClick6.send_keys("minupam@123")
	time.sleep(3)

	elementClick7 = driver.find_element_by_css_selector("_2AkmmA._1LctnI._7UHT_c")
	elementClick7.click()
	time.sleep(3)

	elementClick8 = driver.find_element_by_link_text("My Account")
	elementClick8.click()
	time.sleep(3)

	url = "https://www.flipkart.com/account/?rd=0&link=home_account"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick10 = driver.find_element_by_xpath("//*[@id='container']/div/header/div[2]/div/ul/li[6]/a/span")
	elementClick10.click();
	time.sleep(3);

	elementClick11 = driver.find_element_by_xpath("//*[@id='container']/div/header/div[2]/div/ul/li[6]/ul/li/ul/li[3]/ul/li[2]/a/span")
	elementClick11.click();
	time.sleep(3);

	elementClick12 = driver.find_element_by_xpath("//*[@id='container']/div/div[1]/div/div/div[3]/div/div/div[3]/div[1]/a/div/img[2]")
	elementClick12.click();
	time.sleep(3);

	url = "https://www.flipkart.com/home-furnishing/bed-linen/bedsheets/~bbd-below-499-n/pr?sid=vdm,uj4,64i&otracker=clp_banner_1_3.bannerX3.BANNER_bedsheet-store_DR2OTJW6GU_wp3&fm=neo/merchandising&iid=M_3ac4a8c1-cd78-4e86-a07c-8414c68cb185_3.DR2OTJW6GU&ppt=CLP&ppn=CLP:bedsheet-store"
	driver.get(url)
	driver.maximize_window()
	driver.implicitly_wait(5)

	elementClick14 = driver.find_element_by_xpath("//*[@id='container']/div/div[1]/div/div[2]/div/div[2]/div/div[3]/div[1]/div[1]/div[2]/div/a[1]/div/div/div[1]")
	elementClick14.click();
	time.sleep(3);


	elementClick16 = driver.find_element_by_css_selector("_2AkmmA._3Ytn5x")
	elementClick16.click()
	time.sleep(3)

	driver.quit()
	thread1.stop()
