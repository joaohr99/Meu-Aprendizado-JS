const pai = { nome: 'Pedro', cordoCabelo: 'preto' }

const filha1 = Object.create(pai) //Ele localiza o atributo a partir do protótipo pois foi o objeto que passei como parâmetro.
filha1.nome = 'Ana'
console.log(filha1.cordoCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } //Writable nesse caso é para afirmar que é um valor que não vai aceitar ser mudado, portanto, congelado como valor final.
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.cordoCabelo}`) //Como foi definido pai como protótipo, a cordoCabelo foi referenciada da constante pai.

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? //hasOwnProperty é uma propriedade que pertence à ela. Essa é a maneira que tem como descobrir se um determinado atributo veio daquele objeto ou por herança. Se receber true, pertence ao objeto, se receber false, significa que recebeu a partir de herança.
        console.log(key) : console.log(`Por herança: ${key}`)
}