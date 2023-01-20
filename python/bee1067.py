x = int(input())

if x >= 1 and x <= 1000:
    for i in range (1,x+1):
        if i % 2 != 0:
            print(i)
else:
    print("Número não está dentro da regra!")