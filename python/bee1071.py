a = int(input())
b = int(input())

impar = 0

if a > b:
    for i in range (b+1, a):
        if i % 2 != 0:
            impar += i
elif a < b:
    for i in range(a+1, b):
        if i % 2 != 0:
            impar += i

print(impar)