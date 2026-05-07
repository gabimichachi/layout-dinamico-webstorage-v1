
// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => {

//     return resposta.json()
// })



// const cep = '01001000';

// fetch('https://viacep.com.br/ws/' + cep + '/json/')
// .then(function(resposta) {
//     if (!resposta.ok) {
//         throw new Error("cep invalido");
//     }
//     return resposta.json();
// })
// .then(function(dados) {
//     console.log(dados);
// })
// .catch(function(erro) {
//     console.log(erro);
// });

const btnThen = document.getElementById('btnThen')
const btnAsync = document.getElementById('btnAsync')
const inputCep = document.getElementById('cep')


//  then
btnThen.addEventListener('click', () => {

    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then((resposta) => {

        if (!resposta.ok) {
            throw new Error('CEP inválido')
        }

        return resposta.json()
    })

    .then((dados) => {

        if (dados.erro) {
            throw new Error('CEP não encontrado')
        }

        console.log(dados)
        alert(`Cidade: ${dados.localidade}`)

    })

    .catch((erro) => {
        console.warn(erro.message)
    })

})



// asyc
btnAsync.addEventListener('click', async () => {

    try {

        const cep = inputCep.value

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        if (!resposta.ok) {
            throw new Error('CEP inválido')
        }

        const dados = await resposta.json()

        if (dados.erro) {
            throw new Error('CEP não encontrado')
        }

        console.log(dados)
        alert(`Cidade: ${dados.localidade}`)

    } catch (erro) {

        console.warn(erro.message)

    }

})




  