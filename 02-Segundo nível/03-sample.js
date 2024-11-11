const Taxa_Por_Kilometro = 10;
const Distancia_Teste = 50;

function calcularFrete(distancia) {
    return distancia * Taxa_Por_Kilometro;
}

const frete = calcularFrete(Distancia_Teste);
console.log(`O valor do frete é: ${frete}`);

