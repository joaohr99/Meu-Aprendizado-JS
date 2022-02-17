const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))

const avaliaçao1 = 8.231
const avaliaçao2 = 7.0

const total = avaliaçao1 * peso1 + avaliaçao2 * peso2
const media = total / (peso1+peso2)

console.log(media)
console.log(media.toFixed(2)) 
console.log(media.toString(2)) 
console.log(typeof media)
