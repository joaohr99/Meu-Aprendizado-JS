 Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)){
        console.log("Quadro de Honra")
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado!")
    } else if(nota.entre(4, 6.99)){
        console.log("Recuperação!")
    } else if(nota.entre(0, 3.99)){
        console.log("Reprovado!")
    } else {
        console.log("Nota inválida!")
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(5.5)
imprimirResultado(2.1)
imprimirResultado(-1)
imprimirResultado(11)


Number.prototype.entre1 = function(begging, end){
    return this >= begging && this <= end
}

console.log("-----------")
console.log("Banco Phonx")
console.log("-----------")
const resultadofinal = function (mensagem){
    if (mensagem.entre1(9, 10)){
        console.log("Seu saldo não é suficiente.")
    } else if(mensagem.entre1(4, 8.99)){
        console.log("Cartão não reconhecido.")
    } else if(mensagem.entre1(0, 3.99)){
        console.log("Error 404.")
    } else {
        console.log("Página não encontrada.")
    }
}

resultadofinal(9.5)
resultadofinal(7)
resultadofinal(2)
resultadofinal(-1)