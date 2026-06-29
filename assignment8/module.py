import tkinter as tk
import csv
import os
def save_contact():
    name = name_entry.get()
    email = email_entry.get()
    mobile = mobile_entry.get()
    file_exists = os.path.isfile("address_book.csv")
    with open("address_book.csv", "a", newline="") as file:
        writer = csv.writer(file)
        if not file_exists:
            writer.writerow(["Name", "Email", "Mobile"])
        writer.writerow([name, email, mobile])
    name_entry.delete(0, tk.END)
    email_entry.delete(0,tk.END)
    mobile_entry.delete(0,tk.END)
root = tk.Tk()
root.title("Address Book")
root.geometry("350x250")
Label=tk.Label(root, text="Name").grid(row=0, column=0, padx=10, pady=10)
Label=tk.Label(root, text="Email").grid(row=1, column=0, padx=10, pady=10)
Label=tk.Label(root, text="Mobile").grid(row=2, column=0, padx=10, pady=10)
name_entry = tk.Entry(root, width=30)
name_entry.grid(row=0, column=1)
email_entry = tk.Entry(root, width=30)
email_entry.grid(row=1, column=1)
mobile_entry =tk.Entry(root, width=30)
mobile_entry.grid(row=2, column=1)
Button=tk.Button(root, text="Save Contact", command=save_contact).grid(
    row=3, column=1, pady=20
)

root.mainloop()