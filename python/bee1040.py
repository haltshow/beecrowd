n1, n2, n3, n4 = input().split()
n1 = float(n1)
n2 = float(n2)
n3 = float(n3)
n4 = float(n4)

media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10

print("Media: {:.1f}".format(media))

if media >= 7.0:
    print("Aluno aprovado.")
if media  < 5.0:
    print("Aluno reprovado.")
if 5.0 <= media <= 7.0:
    print("Aluno em exame.")
    md_ex = float(input())
    print("Nota do exame: {}".format(md_ex))
    md_final = (media + md_ex) / 2
    if md_final >= 5.0:
        print("Aluno aprovado.")
    else:
        print("Aluno reprovado.")
    print("Media final: {:.1f}".format(md_final))