const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'IPad Pro', preco: 5000, fragil: true},
    { nome: 'Monitor', preco: 1000, fragil: true},
    { nome: 'Copo de Plástico', preco: 50, fragil: false}
]

/*
const caro = (produtos.filter(function(p){
    return p.preco > 2400
}))

const fragil1 = (produtos.filter(function(p){
    return p.fragil = true
}))

const resultado = produtos.map(caro).map(fragil1)
console.log(resultado)
*/

//Acima foi a primeira tentativa que deu errado.

const caro = produto => produto.preco >= 2400
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))