// pessoa -> endereçodememória -> {...}
const pessoa = { nome: 'Carlos'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- endereçodememória -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //Serve para congelar o atributo, qualquer alteração posterior não irá funcionar. Basicamente é a criação de um objeto constante.

pessoa.nome = 'Maria' 
console.log(pessoa.nome)
