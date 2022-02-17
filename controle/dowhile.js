function consigainteiro(min, max){
    const valor1 = Math.random() * (max-min) + min
    return Math.floor(valor1)
}

let opcao1 =-1

do {
    opcao1 = consigainteiro(-1, 110)
    console.log(`A opção escolhida é ${opcao1}.`)
} while(opcao1 != 100)

console.log("Fim do teste.")
