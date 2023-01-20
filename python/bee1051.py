s = float(input())
r = 0

if s > 0 and s <= 2000:
    print("Isento")
elif s > 2000 and s <= 3000:
    r = (s - 2000) * 8 / 100
    print("R$ {:.2f}".format(r))
elif s > 3000 and s <= 4500:
    r = (s - 3000) * 18 / 100
    r += 80
    print("R$ {:.2f}".format(r))
else:
    r = (s - 4500) * 28 / 100
    r += 350
    print("R$ {:.2f}".format(r))