const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Ana', nota: 9.2, bolsista: true},
    { nome: 'Carlos', nota: 9.8, bolsista: false},
    { nome: 'Joel', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))