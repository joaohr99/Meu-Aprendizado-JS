const escola = "Objetiv0"

console.log(escola.charAt(3)) 
console.log(escola.charAt(4)) 

console.log(escola.charCodeAt(3)) //Retorna o valor do caractere dentro da tabela Unicode.
console.log(escola.indexOf("3")) //Retorna o index do caractere dentro da tabela Unicode.
console.log(escola.substring(1)) 
console.log(escola.substring(0, 5))
console.log("Escola " .concat(escola) .concat("!")) 
console.log("Escola " + escola +"!") 
console.log(escola.replace(0, "u")) //Substitui um número da string por uma letra, também é possível utilizar regex aqui.
console.log(escola.replace(/\w/g, "u"))

console.log("Cleber,Ana,Rogério".split(",")) 
