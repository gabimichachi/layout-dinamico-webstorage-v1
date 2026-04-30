// let result = "Now active";
// let isActive = false;
// console.log(result, isActive)

// if (isActive = true) {
//     let result = "Active"
// }else{
//     result = "Now active"
// }

// console.log(result, isActive)

// let num = 'senai'

// try{


// let x = Math.round(4.6)








// }catch(erro){
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.menssage} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span> <br />`;

//     document.body.innerHTML = text
// };

// try{

// }catch(erro){
    
// }


// const carregarComponente = async (caminho, container) => {
//     try{
//         const resposta = await fetch(caminho);

//         if (!resposta.ok) {
//             throw new Error('Erro ao carregar componente')
//         }

//         const html = await resposta.text();

//         container.innerHTML = html

//     } catch (erro) {
//         console.warn(erro)
//     }
// };


// /* Testes com os exemplos da w3 Schools */

// /* Lançar um excessão (erro personalizado) */
// try{
//     let idade = -5
//     if(idade < 0) {

//         let erro = new Error('idade invalida')
//         erro.codigo = 1001
//         erro.tipo = 'VALIDACAO'

//          // lança o erro qnd a funçao for chamada
//         throw erro
//     }

// } catch (erro) {
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br/>
//     <strong>Mensagem:</strong> ${erro.message} <br/>
//     <strong>Codigo:</strong> ${erro.codigo} <br/>
//     <strong>Tipo:</strong> ${erro.tipo} <br/>
//     <strong>Stack:</strong> <span> ${erro.stack} <span/>`
    
//     document.body.innerHTML = text
// }

// /* Criar uma função geradora de erro */
// const geradorErro = (codigo, mensagem, tipo) => {
//     let erro = new Error(mensagem);
//     erro.codigo = codigo;
//     erro.tipo = tipo; 
//     return erro;
// };

// try {
//     let saldo = 100;

//     if (saldo < 0) {
//         let erro = geradorErro(2001, 'saldo insuficiente', 'financeiro');
//         throw erro;
//     }

// } catch (erro) {
//     console.log(erro);
// }



// /* Testando a função: carregarComponente
// 01 - Criar o componente que será injetado
// 02 - Criar o elemento que irá receber o componente (no index index.html) (<div id="app"></div>)
// 03 - Capturar o elemento que irá receber o componente( no index.html)
// 04 - Utilizar a função para carregar o componente */

// const url = 'c-test.html'
// const container = document.querySelector('#app')
// carregarComponente(url, container)

// carregarComponente('c-test.html', document.querySelector('body'))


/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);

consulta.then((resposta) => {
    if(!resposta.ok){
        throw new Error("cep invalido")
    }
    const resp = resposta.json()
    console.log(resp)
    return resp
})


// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => {

//     return resposta.json()
// })

.then((dados) => {

    console.log(dados)

})
.catch((error) => {

    console.warn(error)
})
/* Criar uma requisição HTTP com fecth e async/await */