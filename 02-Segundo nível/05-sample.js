const Bonus_Gerente = 1000;
const Bonus_Supervisor = 500;
const Bonus_Padrao = 200;
const Desconto_Fixo = 300;
const Limite_Imposto_27 = 5000;
const Limite_Imposto_18 = 3000;
const Taxa_Imposto_27 = 0.27;
const Taxa_Imposto_18 = 0.18;
const Taxa_Imposto_11 = 0.11;
const Horas_Trabalhadas_Teste = 160;
const Valor_Hora_Teste = 25;

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + Bonus_Gerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + Bonus_Supervisor;
    } else {
        salarioComBonus = salarioBase + Bonus_Padrao;
    }

    const salarioComDesconto = salarioComBonus - Desconto_Fixo;

    let salarioFinal;
    if (salarioComDesconto > Limite_Imposto_27) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * Taxa_Imposto_27);
    } else if (salarioComDesconto > Limite_Imposto_18) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * Taxa_Imposto_18);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * Taxa_Imposto_11);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(Horas_Trabalhadas_Teste, Valor_Hora_Teste, "gerente");
console.log(`O salário final é: ${salario}`);
