A = int(input())

print(A)

qtdNotas = int(A / 100)
print(qtdNotas,'nota(s) de R$ 100,00')
A = A % 100

qtdNotas = int(A / 50)
print(qtdNotas,'nota(s) de R$ 50,00')
A = A % 50

qtdNotas = int(A / 20)
print(qtdNotas,'nota(s) de R$ 20,00')
A = A % 20

qtdNotas = int(A / 10)
print(qtdNotas,'nota(s) de R$ 10,00')
A = A % 10

qtdNotas = int(A / 5)
print(qtdNotas,'nota(s) de R$ 5,00')
A = A % 5

qtdNotas= int(A / 2)
print(qtdNotas,'nota(s) de R$ 2,00')
A = A % 2

qtdNotas = 0
if A == 1: 
    qtdNotas = 1
576
print(qtdNotas,'nota(s) de R$ 1,00')

