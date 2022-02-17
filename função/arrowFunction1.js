let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Return está implícito
console.log(dobro(Math.PI.toFixed(2)))
// Função arrow ''=>'' é uma função anônima, caso você queira chamar ela depois, é necessário armazenar em uma variável.

let ola = function(){
    return "Olá"
}

ola = () => 'Olá'
ola = _ => "Olá" //Possui um paramêtro
console.log(ola())

