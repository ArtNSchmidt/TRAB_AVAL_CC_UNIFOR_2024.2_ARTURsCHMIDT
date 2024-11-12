const Url_Api_Planetas = "https://swapi.dev/api/planets/";
const Limite_Populacao_Grande = 1000000;
const Id_Planeta_Teste = 1;

async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`${Url_Api_Planetas}${idPlaneta}/`);
        const planeta = await resposta.json();

        const detalhesPlaneta = `
        Nome: ${planeta.name}
        Clima: ${planeta.climate}
        População: ${planeta.population}
        `;

        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        const populacao = parseInt(planeta.population);
        if (populacao > Limite_Populacao_Grande) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro);
    }
}

buscarEDetalharPlaneta(Id_Planeta_Teste);
