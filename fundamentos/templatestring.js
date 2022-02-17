const nome = "Clauber"

const concatenacao = "Olá " + nome + "!"
const template = `
Olá ${nome}!`
console.log(concatenacao, template)

console.log(`50+50 = ${50+50}`)

const up = texto => texto.toUpperCase() 
console.log(`Ei... ${up("cuidado!")}`) 
