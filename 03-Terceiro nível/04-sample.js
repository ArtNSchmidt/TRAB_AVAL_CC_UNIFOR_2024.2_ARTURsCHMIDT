const BASE_URL = "https://swapi.dev/api/people/";
const Limite_Tripulacao_Grande = 100;
const Id_Personagem_Teste = 1;

async function buscarPersonagemENave(idPersonagem) {
    try {
        const respostaPersonagem = await fetch(`${BASE_URL}${idPersonagem}/`);
        const personagem = await respostaPersonagem.json();

        if (personagem.starships.length > 0) {
            const respostaNave = await fetch(personagem.starships[0]);
            const nave = await respostaNave.json();

            const tripulacao = parseInt(nave.crew);
            if (tripulacao > Limite_Tripulacao_Grande) {
                console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro);
    }
}

buscarPersonagemENave(Id_Personagem_Teste);

