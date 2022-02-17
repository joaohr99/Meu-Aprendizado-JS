Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    } //Implementação do forEach na função.
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Carlos']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})