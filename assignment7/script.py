 #create a text file and add topics covered in today's session(each topic in a new line)

file=open('file.txt','w')
file.write("topics covered in Today's class:"\
"\n 1) how to create / edit a file using python"\
"\n 2) What is CSV file"\
"\n 3) How to create / edit a Csv file using python"\
"\n 3) Use of os.path Module to check id=f a file exit or not")
print("file.text created successfully")
file=open("file.txt","r")
for each in file:
    print(each, end="")