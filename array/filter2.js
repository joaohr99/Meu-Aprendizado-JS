Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true},
    { nome: 'IPad Pro', preco: 5000, fragil: true},
    { nome: 'Monitor', preco: 1000, fragil: true},
    { nome: 'Copo de Plástico', preco: 50, fragil: false}
]

const caro = produto => produto.preco >= 2400
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))