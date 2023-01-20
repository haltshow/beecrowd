n1, n2, n3 = input().split()
n1 = float(n1)
n2 = float(n2)
n3 = float(n3)

if (n1+n2) == n3 or (n2+n3) == n1 or (n1+n3) == n2:
    area = ((n1+n2) * n3) / 2
    print("Area = {:.1f}".format(area))
else:
    per = n1 + n2 + n3
    print("Perimetro = {:.1f}".format(per))