const Url_Api_Pessoas = "https://swapi.dev/api/people/";
const Letra_Inicial = "L";

async function buscarEFiltrarPessoas() {
    try {
        const resposta = await fetch(Url_Api_Pessoas);
        const dados = await resposta.json();

        const pessoasComL = dados.results.filter(pessoa => pessoa.name.startsWith(Letra_Inicial));

        console.log(`Pessoas cujo nome começa com ${Letra_Inicial}:`);
        pessoasComL.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${dados.results.length}`);

    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
    }
}

buscarEFiltrarPessoas();
