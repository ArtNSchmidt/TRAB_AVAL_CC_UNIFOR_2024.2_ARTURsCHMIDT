const Idade_Minima_Para_Dirigir = 18;
const Idade_Teste = 16;

function verificarSePodeDirigir(idade) {
    if (idade >= Idade_Minima_Para_Dirigir) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}

console.log(`Idade: ${Idade_Teste}, Resultado: ${verificarSePodeDirigir(Idade_Teste)}`);


