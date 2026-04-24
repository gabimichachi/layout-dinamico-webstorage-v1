const carregarComponente = async (caminho, container) => {
    try{

        const resposta = await fetch(caminho);

        if (!resposta.ok){

            throw new Error('Erro ao carregar componente')
        }
            
        const html = await resposta.text();

        container.innerHTML = html;

    }catch(erro){
        console.error(erro);

    }

};