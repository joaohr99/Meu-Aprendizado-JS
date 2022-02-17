const imprimirResultado = function(nota){
    if(nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado("Eba!") //Isso é um erro pois JS é fracamente tipado, e digitar algo assim é passável.