// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'F' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1) //Como está em herança ele buscou o atributo A até o avô referenciando da seguinte forma: filho > pai > avô.
console.log(filho.attr0) // Ele achou o Z pois atribui o atributo 0 dentro do Object.prototype como essa string.

console.log(filho.attr3) //Dentro de pai também tem um attr3, contudo, ele sempre vai retornar o mais próximo, nesse caso, ele retornou C pois já está dentro do objeto filho. Ele vai procurando até achar um atributo na herança inteira.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing, ele vai sombrear o objeto original de carro, no caso, ''velMax:200''
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Da mesma forma que o this serve para referenciar o objeto atual, o super serve para referenciar o protótipo.
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
