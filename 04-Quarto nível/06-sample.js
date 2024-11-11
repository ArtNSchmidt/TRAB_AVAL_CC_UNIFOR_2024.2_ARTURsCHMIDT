const ID_NAVE_ESPECIFICA = 10;

async function buscarNave(id) {
    const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
    const nave = await resposta.json();

    const nomeNave = nave.nome;

    console.log(nomeNave);

    if (id === ID_NAVE_ESPECIFICA) {
        console.log("a nave com ID 10 foi encontrada.");
    }
}

buscarNave(ID_NAVE_ESPECIFICA);
