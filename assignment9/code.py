#  Write a module to find The Kaprekar Constant is 6174.
def k_cons(num):
    if len(str(num))!= 4:
        print("Please enter a 4-digit number:")
        return
    count = 0
    while num != 6174:
        digits = list(str(num).zfill(4))
        desc = int("".join(sorted(digits, reverse=True)))
        asc = int("".join(sorted(digits)))
        num = desc - asc
        count += 1
        print(f"Step {count}: {desc} - {asc} = {num}")
    print(f"\nKaprekar Constant (6174) reached in {count} steps.")
num = int(input("Enter a 4-digit number: "))
k_cons(num)