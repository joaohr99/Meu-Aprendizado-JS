const nota = [6.8, 4.4, 8.1, 9.2, 5.3]

for (let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    Nome: "Ana",
    Sobrenome: "Fernandez",
    Idade: 22,
    Peso: 55
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}