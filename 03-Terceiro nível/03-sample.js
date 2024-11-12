const urlApiPlanetas = "https://swapi.dev/api/planets/";
const limitePopulacaoGrande = 1000000;
const idPlanetaTeste = 1;

async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const resposta = await fetch(`${urlApiPlanetas}${idPlaneta}/`);
                
        if (!resposta.ok) {
            throw new Error("Falha ao obter informações do planeta. Tente novamente mais tarde.");
        }    
        const planeta = await resposta.json();
  
        console.log("Detalhes do Planeta:");
        console.log(`Nome: ${planeta.name}`);
        console.log(`Clima: ${planeta.climate}`);
        console.log(`População: ${planeta.population || "Indisponível"}`);
 
        const populacao = parseInt(planeta.population, 10); 
        if (!isNaN(populacao)) {
            if (populacao > limitePopulacaoGrande) {
                console.log("Este planeta tem uma população bastante alta.");
            } else {
                console.log("Este planeta tem uma população relativamente pequena.");
            }
        } else {
            console.log("A população deste planeta não foi informada.");
        }
    } catch (erro) {
       
        console.error("Ocorreu um erro ao buscar os detalhes do planeta:", erro.message);
    }
}
buscarEDetalharPlaneta(idPlanetaTeste);

