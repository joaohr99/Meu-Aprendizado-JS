console.log(Math.ceil(6.1)) //Math.ceil serve para arredondar números dentro de JS. Na verdade o ceil que tem esse papel, o Math você usa apenas para acessar essa função.

const obj1 = {}
obj1.nome = "Bola"
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function (){
        console.log("Exec....")
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
