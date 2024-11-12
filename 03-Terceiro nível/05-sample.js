const Url_Api_Veiculos = "https://swapi.dev/api/vehicles/";
const Limite_Custo_Caros = 10000;

async function buscarVeiculosECalcularCusto() {
    try {
        const resposta = await fetch(Url_Api_Veiculos);
        const dados = await resposta.json();

        const veiculosCaros = dados.results.filter(veiculo => parseInt(veiculo.cost_in_credits) > Limite_Custo_Caros);

        console.log(`Veículos caros (mais de ${Limite_Custo_Caros} créditos):`);
        veiculosCaros.forEach(veiculo => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });

        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits);
        }, 0);

        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);

    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro);
    }
}

buscarVeiculosECalcularCusto();

