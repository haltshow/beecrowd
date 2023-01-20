hora_inicio, minutos_inicio, hora_fim, minutos_fim = input().split()

hora_inicio = int(hora_inicio)
minutos_inicio = int(minutos_inicio)
hora_fim = int(hora_fim)
minutos_fim = int(minutos_fim)
resultado_horas = 0
resultado_minutos = 0

if hora_inicio < hora_fim:
    resultado_horas = hora_fim - hora_inicio
    if minutos_inicio < minutos_fim:
        resultado_minutos = minutos_fim - minutos_inicio
        print("O JOGO DUROU",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
    elif minutos_inicio > minutos_fim:
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        resultado_horas -= 1
        print("O JOGO DUROU",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
    else:
        resultado_minutos = 0
        print("O JOGO DUROU ",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
elif hora_inicio > hora_fim:
    resultado_horas = (24 - hora_inicio) + hora_fim
    if minutos_inicio < minutos_fim:
        resultado_minutos = minutos_fim - minutos_inicio
        print("O JOGO DUROU",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
    elif minutos_inicio > minutos_fim:
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        resultado_horas -= 1
        print("O JOGO DUROU",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
    else:
        resultado_minutos = 0
        print("O JOGO DUROU",resultado_horas,"HORA(S) E",resultado_minutos,"MINUTO(S)")
else:
    if minutos_inicio == minutos_fim:
        print("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
    elif minutos_inicio > minutos_fim:
        resultado_minutos = (60 - minutos_inicio) + minutos_fim
        print("O JOGO DUROU 23 HORA(S) E",resultado_minutos,"MINUTO(S)")
    else:
        resultado_minutos = minutos_fim - minutos_inicio
        print("O JOGO DUROU 0 HORA(S) E",resultado_minutos,"MINUTO(S)")