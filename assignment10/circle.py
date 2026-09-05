# create a Circle class with radius as instance attributes, and three methods(diameter,area,circumference)
import math
class cir:
    def __init__(self,radius):
        self.radius=radius
    def diameter(self):
        return 2 * self.radius
    def area(self):
        return math.pi * self.radius ** 2
    def circumference(self):
        return 2*math.pi*self.radius
radius=int(input("enter the value of radius:"))
r=cir(radius)
print("Radius:",r.radius)
print("Diameter:",r.diameter())
print("Area:",r.area())
print("Circumference:",r.circumference())
    


    