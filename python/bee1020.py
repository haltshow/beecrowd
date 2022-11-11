# -*- coding: utf-8 -*-

entrada = int((input()))
resto = 0

a = int(entrada / 365)
resto = entrada % 365

m = int(resto / 30)
resto = resto % 30

print(f"{a} ano(s)\n{m} mes(es)\n{resto} dia(s)")