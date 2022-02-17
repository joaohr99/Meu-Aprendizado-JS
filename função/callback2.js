const notas = [7.7, 4.4, 1.5, 9.1, 2,5, 8.4]

//Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const NotasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(NotasMenorQue7)
console.log(notasBaixas3)

//Filter, filtra os elementos de uma array em cima de um determinado critério.