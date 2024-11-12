const urlApiNave = "https://swapi.dev/api/starships/9/";

const limiteTripulacaoGrande = 100;

async function buscarEDetalharNave() {
    try {
        
        const resposta = await fetch(urlApiNave);
        
        
        if (!resposta.ok) {
            throw new Error("Falha ao buscar a nave. Tente novamente mais tarde.");
        }

        const nave = await resposta.json();

        
        const detalhesNave = `
        Nome: ${nave.name}
        Modelo: ${nave.model}
        Fabricante: ${nave.manufacturer}
        `;

        
        console.log("Informações sobre a nave:");
        console.log(detalhesNave);

        
        const tamanhoTripulacao = parseInt(nave.crew, 10);
        if (tamanhoTripulacao > limiteTripulacaoGrande) {
            console.log("Essa nave é considerada de grande porte, com muitos tripulantes.");
        } else {
            console.log("Essa é uma nave de pequeno porte, com poucos tripulantes.");
        }

    } catch (erro) {
        
        console.error("Ocorreu um problema ao tentar obter os dados da nave:", erro.message);
    }
}


buscarEDetalharNave();
