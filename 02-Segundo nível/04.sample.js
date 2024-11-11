const Senha_Correta = "12345";
const Maximo_Tentativas = 3;

function tentarLogin(senha) {
    let tentativas = 0;

    while (tentativas < Maximo_Tentativas) {
        if (senha === Senha_Correta) {
            return "Login efetuado com sucesso!";
        }
        tentativas++;
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("123"));

