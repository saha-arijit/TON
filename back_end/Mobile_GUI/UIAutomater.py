import subprocess
import os, time
import sys

class UIAutomater:

	def openAutomater(self):

		osCommandString = "uiautomatorviewer"
		os.system(osCommandString)
	
UIAutomater = UIAutomater()
UIAutomater.openAutomater()