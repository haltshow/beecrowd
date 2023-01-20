a, b, c = input().split()
a = float(a)
b = float(b)
c = float(c)

if a < b or a < c:
    if b <= c:
        variavel = a
        a = c
        c = variavel
    else:
        variavel = a
        a = b
        b = variavel

if a >= (b+c):
    print("NAO FORMA TRIANGULO")
elif (a * a) == ((b * b) + (c * c)):
    print("TRIANGULO RETANGULO")
elif (a * a) > ((b * b) + (c * c)):
    print("TRIANGULO OBTUSANGULO")
elif (a * a) < ((b * b) + (c * c)):
    print("TRIANGULO ACUTANGULO")

if a == b and a == c:
    print("TRIANGULO EQUILATERO")
elif a == b or a == c or b == c:
    print("TRIANGULO ISOSCELES")
