const Url_Api_Nave = "https://swapi.dev/api/starships/9/";
const Limite_Tripulacao_Grande = 100;

async function buscarEDetalharNave() {
    try {
        const resposta = await fetch(Url_Api_Nave);
        const nave = await resposta.json();

        const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

        console.log("Detalhes da Nave:");
        console.log(detalhesNave);

        const tamanhoTripulacao = parseInt(nave.crew);
        if (tamanhoTripulacao > Limite_Tripulacao_Grande) {
            console.log("Esta é uma nave grande.");
        } else {
            console.log("Esta é uma nave pequena.");
        }

    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro);
    }
}

buscarEDetalharNave();

