const valores = [1.2, 9.4, 5.8, 2.7]
console.log(valores [0], valores[3])

valores[4] = 6.6 
console.log(valores)
console.log(valores.length) 

valores.push({id: 3}, false, null, "teste") 
console.log(valores)

console.log(valores.pop()) 
delete valores[1] 
console.log(valores)

console.log(typeof valores)

