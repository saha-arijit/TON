import sys
import os
def TC_FlipkartCollection(users):
	file = open('FlipkartCollection/FlipkartCollection.js','r')
	line = file.readlines()
	file = open('FlipkartCollection/FlipkartCollection.js','w')
	for lines in line:
		if 'var value' in lines:
			lines = lines.split('=')
			lines[1] =	"= " + str(users) + ";"
			x = "".join(lines)
			file.write(x)
			file.write("\n")
		else:
			if "var value" not in lines:
				file.write (str(lines))
	file.close()
	os.system('node FlipkartCollection/FlipkartCollection.js')
