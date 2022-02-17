// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras // Utilizei da class pois a function não estava executando.
class Produto {
    constructor(nome, preco, desc) {
        this.nome = nome
        this.getPrecoComDesconto = () => {
            return preco * (1 - desc)
        }
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2777.9, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()
)

/* function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2777.9, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()
) */

//Função Factory

function criarFuncionario(nome, salariobase, faltas){
    return {
        nome,
        salariobase,
        faltas,
        getSalario(){
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Paula', 11400, 1)
console.log('O salario de Paula é (com descontos): ', f2.getSalario())
console.log('O salario de João é (com descontos): ', f1.getSalario())


//Objeto.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma função famosa que retorna Objeto.
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
