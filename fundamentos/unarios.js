let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //Nesse procedimento o valor só é true, pois ele só é decrementado após a comparação. O ++num1 adiciona mais um a variável, após isso, ele compara, e só depois da comparação que ja determina o resultado, o num2-- faz a subtração. Masnão é recomendado que se faça isso no código, pois mantém o código sujo.

console.log(num1 === num2)
