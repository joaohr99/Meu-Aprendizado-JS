// IIFE = Immediately Invoked Function Expression (Expressão de Função imediatamente invocada)

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()

//A vantagem da IIFE é que foge do escopo global e será executado apenas dentro da função determinada.