function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//Todos os objetos criados a partir de uma mesma função construtora apontam para um mesmo protótipo a partir do atributo ''__proto__''

console.log(MeuObjeto.prototype === obj1.__proto__)
//Quando você cria uma função a partir de uma função construtora o ''__proto__'' aponta para a função.prototype, no caso desse exemplo ''MeuObjeto.prototype''.

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
//Objetos que foram criados com a função nesse caso ''MeuObjeto'' eles vão ter acesso tanto a nome como a falar, a partir do protótipo.

}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar() //Como esperado nesse caso aconteceu um shadowing, Rafael sobrescreveu anônimo por ele estar dentro diretamente do objeto.

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo do processo de herança até o momento:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
