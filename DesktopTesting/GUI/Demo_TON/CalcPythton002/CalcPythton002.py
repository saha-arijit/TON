from selenium import webdriver
import time

driver = webdriver.Remote(
    command_executor='http://localhost:9999',
    desired_capabilities={
        "debugConnectToRunningApp": 'false',
        "app": "C:/windows/system32/calc.exe"
    })

window = driver.find_element_by_class_name('CalcFrame')
# view_menu_item = window.find_element_by_id('MenuBar').find_element_by_name('View')

# view_menu_item.click()
# # time.sleep (1)
# view_menu_item.click()

# window.find_element_by_id('150').send_keys('111')
# time.sleep (2)

# view_menu_item.find_element_by_name('Scientific').click()
# view_menu_item.click()
# view_menu_item.find_element_by_name('History').click()

driver.find_element_by_name('Three').click()
driver.find_element_by_name('Plus').click()
driver.find_element_by_name('Four').click()
driver.find_element_by_name('Equals').click()

# driver.find_element_by_id('138').click()
# driver.find_element_by_id('121').click()

# driver.close() 