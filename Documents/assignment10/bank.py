# Write a python program to create a bank account
class BankAccount:
    def __init__(self, balance):
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        print("Amount Deposited:", amount)
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Amount Withdrawn:", amount)
        else:
            print("Insufficient Balance")
balance = float(input("Enter initial balance: "))
account = BankAccount(balance)
deposit_amount = float(input("Enter deposit amount: "))
account.deposit(deposit_amount)
withdraw_amount = float(input("Enter withdrawal amount: "))
account.withdraw(withdraw_amount)
print("Current Balance:", account.balance)