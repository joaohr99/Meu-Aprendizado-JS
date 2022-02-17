const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas? funcional e 00

let var1 = 234

console.log(" Esse negócio é: ", var1)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//Bind é um metodo responsável para amarrar determinado objeto, para ele ser o dono do objeto.

