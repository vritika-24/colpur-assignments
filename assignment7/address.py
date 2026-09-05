import csv
filename = "address_book.csv"
while True:
    print("\n----- ADDRESS BOOK -----")
    print("1. Add Contact")
    print("2. View Contacts")
    print("3. Exit")
    choice =input("Enter your choice: ")
    if choice == "1":
        name = input("Enter Name: ")
        mobile = input("Enter Mobile Number: ")
        email = input("Enter Email: ")
        contact = [name, mobile, email]
        with open(filename, "a", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(contact)
            print("Contact added successfully!")
    elif choice == "2":
        print("\n--- Contact List ---")
        with open(filename, "r") as file:
            reader = csv.reader(file)
            for row in reader:
                print(row)
    elif choice == "3":
        print("Exiting program...")
        break   
    else:
        print("Invalid choice! Please try again.")