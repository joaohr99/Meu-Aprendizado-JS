const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } //Nesses dois casos a mesma coisa é feita (obj1 e obj2) a diferença é que a segunda síntaxe é mais reduzida, a única vantagem é que na primeira sintaxe você pode trocar o nome dos atributos.
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // O que quiser fazer.
    },
    funcao2() {
        //forma reduzida de definir uma função
    }
}

console.log(obj5)