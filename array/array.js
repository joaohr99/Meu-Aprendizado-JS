console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'  //Serve para substituir um elemento numa Array.
aprovados.push('Wesley') //Serve para adicionar métodos numa Array. 
console.log(aprovados.length)

aprovados[9] = 'Rafael' //Os outros elementos atrás desse ficariam undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Ele altera o conteudo do Array, reorganiza.
console.log(aprovados)

delete aprovados[1] //Ele atribui na posição escolhida undefined.
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //Adiciona e remove novos elementos, super versátil, faz parte da API do array em JS.
console.log(aprovados)