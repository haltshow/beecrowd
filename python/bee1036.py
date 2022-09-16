# -*- coding: utf-8 -*-

valores = [float(x) for x in input().split(" ")]
a = valores[0]
b = valores[1]
c = valores[2]

delta = (b ** 2) - (4*a*c)

if delta < 0:
    print("Impossivel calcular")
elif a == 0:
    print("Impossivel calcular")
else:
    x1 = (-b + delta ** (0.5)) / (2*a)
    x2 = (-b - delta ** (0.5)) / (2*a)
    print(f"R1 = {x1:.5f}")
    print(f"R2 = {x2:.5f}")
