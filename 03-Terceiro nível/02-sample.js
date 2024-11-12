const urlApiPessoas = "https://swapi.dev/api/people/";

const letraInicial = "L";

async function buscarEFiltrarPessoas() {
    try {
        
        const resposta = await fetch(urlApiPessoas);
        if (!resposta.ok) {
            throw new Error("Não foi possível obter os dados das pessoas. Verifique sua conexão ou tente mais tarde.");
        }

        
        const dados = await resposta.json();

        
        const pessoasFiltradas = dados.results.filter(pessoa => pessoa.name.startsWith(letraInicial));

       
        if (pessoasFiltradas.length > 0) {
            console.log(`Pessoas cujo nome começa com a letra '${letraInicial}':`);
            pessoasFiltradas.forEach(pessoa => {
                console.log(`- ${pessoa.name}`);
            });
        } else {
            console.log(`Nenhuma pessoa encontrada cujo nome começa com a letra '${letraInicial}'.`);
        }

     
        console.log(`Total de pessoas disponíveis na resposta da API: ${dados.results.length}`);

    } catch (erro) {
     
        console.error("Houve um erro ao buscar as pessoas:", erro.message);
    }
}


buscarEFiltrarPessoas();
