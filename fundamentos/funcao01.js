

function ImprimirSoma(a, b){
    console.log(a+b)
}

ImprimirSoma(2, 3)
ImprimirSoma(2)
ImprimirSoma(2, 5, 2, 4, 6)
ImprimirSoma()



function soma(a, b = 0){
    return a + b
}

console.log(soma(10, 5))
console.log(soma(2)) 