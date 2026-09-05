 #Write a Python program to create a User class that stores a username and a password....
class user:
    def __init__(self, username, password):
        self.username = username
        self.password = password
    def check_password(self, input_password):
        return self.password == input_password
username = input("Enter username: ")
password = input("Create password: ")
user = user(username, password)
input_password = input("Enter password to login: ")
if user.check_password(input_password):
    print("Login Successful")
else:
    print("Incorrect Password")