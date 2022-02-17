Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

Array.prototype.map3 = function(callback){
    const newArray2 = []
    for (let i = 0; i < this.length; i++){
        newArray2.push(callback(this[i], i, this))
    }
    return newArray2
}

const compras = [
    '{"nome": "Prateleira de Livros", "preço": 192.0}',
    '{"nome": "Luminária", "preço": 64.0}',
    '{"nome": "Livro: Clean Code", "preço": 42.0}'
]

const paraObjeto2 = json => JSON.parse(json)
const apenasPreco2 = produto => produto.preço

const resultado2 = compras.map3(paraObjeto2).map3(apenasPreco2)
console.log(resultado2)
