n = int(input())

a = 1
b = 2
c = 3
while n > 0:
    a = b
    b = c
    c = a + b
    n -= (c - b - 1)
    
n += (c - b - 1)


print(b + n)