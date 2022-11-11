# -*- coding: utf-8 -*-

p1 = [float(x) for x in input().split()]
p2 = [float(x) for x in input().split()]

distancia = (((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2)) ** (0.5)

print(f"{distancia:.4f}")