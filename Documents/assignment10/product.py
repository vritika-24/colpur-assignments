#Write a Python program to create a Product class with three instance attributes: 
#name, price, and quantity. Add a method total_value() that returns the total stock value by multiplying price by quantity.
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
    def total_value(self):
        return self.price * self.quantity
product_name = input("Enter the product_name:")
quantity = int(input("Enter the quantity:"))
price = int(input("Enter the price:"))
p = Product(product_name, price, quantity)
print("Product Name:", p.name)
print("Price:", p.price)
print("Quantity:", p.quantity)
print("Total Stock Value:", p.total_value())