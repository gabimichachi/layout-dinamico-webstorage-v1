
// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => {

//     return resposta.json()
// })



const cep = '01001000';

fetch('https://viacep.com.br/ws/' + cep + '/json/')
.then(function(resposta) {
    if (!resposta.ok) {
        throw new Error("cep invalido");
    }
    return resposta.json();
})
.then(function(dados) {
    console.log(dados);
})
.catch(function(erro) {
    console.log(erro);
});