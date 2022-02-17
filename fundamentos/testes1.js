let a = 3

global.b = 123

this.c = 451
this.d = false
this.e = "teste"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// module.exports = {e: 451, f: false, g: "teste"}

abc = 3
console.log(global.abc)
// Não se deve fazer isso acima, pois como é notável,eu não declarei uma variável para o ''abc'', e mesmo assim, armazena-se um conteúdo dentro de um arquivo global do node. Portanto, não faça isso!

//Dica: Use constantes para escopos globais.
