function calcularDiferencaDeDias(dataInicial, dataFinal) {
    const data1 = new Date(dataInicial);
    const data2 = new Date(dataFinal);

    const diferencaEmDias = (data2 - data1) / (1000 * 60 * 60 * 24); // diferença já em dias
    return Math.round(diferencaEmDias); // arredonda o valor para evitar frações de dias
}

const dataInicial = "2024-01-01";
const dataFinal = "2024-12-31";
const diferencaDeDias = calcularDiferencaDeDias(dataInicial, dataFinal);

console.log(diferencaDeDias);
