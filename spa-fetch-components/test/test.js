/* Criar uma requisição HTTP com fetch e .then */
const url = 'https://viacep.com.br/ws/01001000/json/';

const consulta = fetch(url);

consulta
.then((response) => {

    if(!response.ok){
        throw new Error('Erro na Requisição.')
    }
    return response.json()
})
.then((dados) => {

    if(dados.erro){
        throw new Error('CEP inválido ou não encontrado.')
    }
    console.log(dados)
})
.catch((erro) => {
    console.warn(erro.message)
});




/* Criar uma requisição HTTP com fecth e async/await */

const url = 'https://viacep.com.br/ws/01001000/json/';
const consulta = fetch(url);

async function buscarCep(){
    let resposta = await consulta;
    console.log(resposta)
    let dataObj = await resposta.json();
    console.log(dataObj);
};

buscarCep();