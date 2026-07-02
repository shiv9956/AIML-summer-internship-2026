name = input("Enter player's name: ")
fitness = input("Passed fitness test? (yes/no): ")
age = int(input("Enter player's age: "))

if fitness == "yes" and age < 25:
    print(name, "is SELECTED!")
else:
    print(name, "is NOT SELECTED.")