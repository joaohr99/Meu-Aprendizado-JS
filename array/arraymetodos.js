const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Pop remove o ultimo elemento do array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Shift remove o primeiro elemento da lista.
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um elemento no inicio.
console.log(pilotos)

//splicepode adicionar e remover elementos.

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //No caso aqui começa no 1, mas vai só até o 3.
console.log(algunsPilotos2)
