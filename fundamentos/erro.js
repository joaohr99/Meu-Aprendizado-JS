function tratarErrorELancar(erro) {
    // throw new Error("O suporte técnico entrará em ação.")
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function ImprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { name: "Roberto" }
ImprimirNomeGritado(obj)

//O try/catch/throw são para enviar uma mensagem de erro para o usuário caso aconteça algum problema dentro do programa. O finnaly serve mesmo que aconteça um erro ou não, mostrar uma última mensagem após o fim.

//No primeiro caso usei uma mensagem, no segundo usei um número, e no terceiro usei um valor booleano, true/false. No quarto apenas coloquei mensagem, e no quinto usei objeto.