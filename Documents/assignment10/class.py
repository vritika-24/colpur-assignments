# create a class reactangle
class Rectangle:
    def __init__(self, length, width):
        self.length=length
        self.width=width
    def area(self):
        return self.length*self.width
    def perimeter(self):
        return 2 * (self.length*self.width)
length=int(input("enter the length:"))
width=int(input("enter the width"))
r=Rectangle(length,width)
print("Area=",r.area())
print("Perimeter=",r.perimeter())     
        