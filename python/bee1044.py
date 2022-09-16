# -*- coding: utf-8 -*-

m = [int(x) for x in input().split(" ")]

if m[0] % m[1] == 0 or m[1] % m[0] == 0:
    print("Sao Multiplos")
else:
    print("Nao sao Multiplos")