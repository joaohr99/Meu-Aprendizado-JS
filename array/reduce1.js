const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Ana', nota: 9.2, bolsista: true},
    { nome: 'Carlos', nota: 9.8, bolsista: false},
    { nome: 'Joel', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // Esse valor eu atribui para ser o inicial <

console.log(resultado)

console.log(alunos.map(a => a.bolsista))