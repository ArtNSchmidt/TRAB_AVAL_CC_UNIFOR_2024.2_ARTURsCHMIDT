const Desconto_Percentual = 0.15;
const Preco_Original = 100;

function calcularDesconto(preco) {
    return preco - (preco * Desconto_Percentual);
}

const precoFinal = calcularDesconto(Preco_Original);
console.log(`Preço com desconto: ${precoFinal}`);
