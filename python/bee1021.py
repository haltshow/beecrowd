valor = float(input())

print("NOTAS:")

qtdNotas = int(valor / 100)
print(qtdNotas,'nota(s) de R$ 100.00')
valor = valor % 100

qtdNotas = int(valor / 50)
print(qtdNotas,'nota(s) de R$ 50.00')
valor = valor % 50

qtdNotas = int(valor / 20)
print(qtdNotas, 'nota(s) de R$ 20.00')
valor = valor % 20

qtdNotas = int(valor / 10)
print(qtdNotas,'nota(s) de R$ 10.00')
valor = valor % 10

qtdNotas = int(valor / 5)
print(qtdNotas,'nota(s) de R$ 5.00')
valor = valor % 5

qtdNotas = int(valor / 2)
print(qtdNotas,'nota(s) de R$ 2.00')
valor = valor % 2

valor = int(valor * 100)

print("MOEDAS:")

qtdMoedas = int(valor / 100)
print(qtdMoedas,'moeda(s) de R$ 1.00')
valor = valor % 100

qtdMoedas = int(valor / 50)
print(qtdMoedas,'moeda(s) de R$ 0.50')
valor = valor % 50

qtdMoedas = int(valor / 25)
print(qtdMoedas,'moeda(s) de R$ 0.25')
valor = valor % 25

qtdMoedas = int(valor / 10)
print(qtdMoedas,'moeda(s) de R$ 0.10')
valor = valor % 10

qtdMoedas = int(valor / 5)
print(qtdMoedas,'moeda(s) de R$ 0.05')
valor = valor % 5

qtdMoedas = valor
print(qtdMoedas,'moeda(s) de R$ 0.01')