function calcularTotal(itens, multiplicador) {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * multiplicador;
    }
    return total;
}

function verificarUsuarioAtivo(usuario, condicaoX, condicaoY) {
    return condicaoX === 1 && condicaoY === 2 && usuario.ativo === 1;
}

function principal() {
    const itens = [10, 20, 30, 40, 50];
    const multiplicador = 3;
    const total = calcularTotal(itens, multiplicador);

    const usuario = obterUsuario(42);
    const usuarioAtivo = verificarUsuarioAtivo(usuario, 1, 2);

    if (usuarioAtivo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const usuarios = {
        42: { id: 42, nome: "João Silva", idade: 25, ativo: 1 },
        43: { id: 43, nome: "Maria Souza", idade: 28, ativo: 0 }
    };

    if (usuarios[id]) {
        return usuarios[id];
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > 18) {
        console.log("Atualizando usuário:", usuario.id);
        salvarDados();
        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function calcularOperacao(a, b, c) {
    let resultado = 0;

    switch (a) {
        case 1:
            resultado = b + c;
            break;
        case 2:
            resultado = b * c;
            break;
        case 3:
            resultado = b - c;
            break;
        default:
            resultado = b / c;
            break;
    }

    return inverterString(resultado.toString());
}

function inverterString(str) {
    const stringInvertida = str.split("").reverse().join("");
    console.log("String invertida:", stringInvertida);
    return stringInvertida;
}

function processarDados(n) {
    let resultado = 0;

    for (let i = 1; i <= n; i++) {
        resultado += i % 2 === 0 ? i : -i;
    }

    console.log("Resultado do processamento:", resultado);
    exibirDados();

    return resultado;
}

function exibirDados() {
    const dados = ["Valor 1", "Valor 2", "Valor 3"];
    dados.forEach(dado => console.log("Dados:", dado));
}

function calcularItens(itens, multiplicador) {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * multiplicador;
    }
    return total;
}

function mostrarInformacoes() {
    const informacoes = ["Dado 1", "Dado 2", "Dado 3"];
    informacoes.forEach(info => console.log("Info:", info));
}

function funcaoPrincipal() {
    const itens = [5, 7, 9, 11];
    const total = calcularItens(itens, 3);

    mostrarInformacoes();
    console.log("Cálculo total:", total);
    return total;
}

principal();
console.log("Resultado do cálculo:", calcularOperacao(1, 2, 3));
console.log("Resultado do processamento de dados:", processarDados(10));
console.log("Resultado da função principal:", funcaoPrincipal());

