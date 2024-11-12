const baseUrl = "https://swapi.dev/api/people/";
const limiteTripulacaoGrande = 100;
const idPersonagemTeste = 1;

async function buscarPersonagemENave(idPersonagem) {
    try {
  
        const respostaPersonagem = await fetch(`${baseUrl}${idPersonagem}/`);
        
       
        if (!respostaPersonagem.ok) {
            throw new Error("Não foi possível encontrar o personagem. Tente novamente.");
        }

       
        const personagem = await respostaPersonagem.json();

       
        if (personagem.starships.length > 0) {
           
            const respostaNave = await fetch(personagem.starships[0]);

       
            if (!respostaNave.ok) {
                throw new Error("Não foi possível encontrar os detalhes da nave. Tente novamente.");
            }

           
            const nave = await respostaNave.json();
            const tripulacao = parseInt(nave.crew, 10); 
            if (tripulacao > limiteTripulacaoGrande) {
                console.log(`A nave ${nave.name} é considerada grande, com ${tripulacao} tripulantes.`);
            } else {
                console.log(`A nave ${nave.name} é pequena, com ${tripulacao} tripulantes.`);
            }
        } else {
            console.log(`${personagem.name} não possui naves registradas.`);
        }

    } catch (erro) {
       
        console.error("Erro ao buscar o personagem ou sua nave:", erro.message);
    }
}
buscarPersonagemENave(idPersonagemTeste);


