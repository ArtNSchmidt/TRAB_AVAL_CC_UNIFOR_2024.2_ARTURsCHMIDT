function exibirNomePlaneta(nome) {
    console.log(`O nome do planeta é: ${nome}`);
}
async function buscarPlaneta() {
    const resposta = await fetch("https://swapi.dev/api/planets/1/");
    const planeta = await resposta.json();
    console.log(planeta.name);

    exibirNomePlaneta(planeta.name);
}

buscarPlaneta();
