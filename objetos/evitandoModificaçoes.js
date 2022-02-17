//Object.preventExtensions = Não pode adicionar novos objetos, pois previni que você extenda mais.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

// É possível excluir e modificado, mas não pode adicionar com o preventExtensios
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal = Não consegue adicionar novos atributos, não consegue excluir, mas consegue modificar os valores dos atributos do objeto.
const pessoa = { nome: 'Julio', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes