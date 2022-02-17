 function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log("Até a próxima!")

function consigainteiro(min, max){
    const valor1 = Math.random() * (max-min) + min
    return Math.floor(valor1)
}

let opcao1 = 0

while(opcao1 != 100){
    opcao1 = consigainteiro(-1, 110)
    console.log(`A opção escolhida é ${opcao1}.`)
}

console.log("Fim do teste.")
