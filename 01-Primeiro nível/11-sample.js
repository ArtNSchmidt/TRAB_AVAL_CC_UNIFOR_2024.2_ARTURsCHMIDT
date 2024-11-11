class Usuario {
    constructor(nome, idade, role, dataCriacao, ultimaAtividade, ativo, tentativasLogin, numeroAcessos) {
        this.nome = nome;
        this.idade = idade;
        this.role = role;
        this.dataCriacao = dataCriacao;
        this.ultimaAtividade = ultimaAtividade;
        this.ativo = ativo;
        this.tentativasLogin = tentativasLogin;
        this.numeroAcessos = numeroAcessos;
    }

    exibirStatus() {
        if (this.ativo) {
            console.log(`${this.nome} está ativo.`);
        } else {
            console.log(`${this.nome} está inativo.`);
        }
    }

    verificarAcesso() {
        if (this.role === "admin") {
            console.log(`${this.nome} pode acessar todas as áreas.`);
        } else {
            console.log(`${this.nome} tem acesso limitado.`);
        }
    }
}

// Verifica quantos usuários têm a role "admin"
function contarAdmins(usuarios) {
    let numeroAdmins = 0;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].role === "admin") {
            numeroAdmins++;
        }
    }
    return numeroAdmins;
}

// Verifica se o número de tentativas de login de um usuário é excessivo
function verificarTentativasLogin(usuario, limiteTentativas) {
    if (usuario.tentativasLogin > limiteTentativas) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// Verifica qual usuário logou mais recentemente
function verificarUltimoLogin(usuario1, usuario2) {
    if (usuario1.ultimaAtividade > usuario2.ultimaAtividade) {
        return `${usuario1.nome} logou mais recentemente.`;
    } else {
        return `${usuario2.nome} logou mais recentemente.`;
    }
}

// Verifica se o usuário foi criado recentemente
function verificarUsuarioRecente(usuario) {
    const umAnoEmMilissegundos = 31536000000;
    const agora = new Date();
    if (agora - usuario.dataCriacao < umAnoEmMilissegundos) {
        console.log(`${usuario.nome} foi criado recentemente.`);
    } else {
        console.log(`${usuario.nome} é um usuário antigo.`);
    }
}

const usuarios = [
    new Usuario("Carlos", 25, "admin", new Date(2023, 1, 15), new Date(2024, 8, 1), true, 100, 2),
    new Usuario("Ana", 30, "guest", new Date(2020, 4, 22), new Date(2024, 7, 31), true, 50, 3),
    new Usuario("José", 29, "admin", new Date(2022, 10, 5), new Date(2024, 6, 10), false, 200, 5),
    new Usuario("Maria", 35, "guest", new Date(2021, 2, 10), new Date(2023, 12, 25), false, 80, 7)
];

console.log(`Número de usuários admin: ${contarAdmins(usuarios)}`);

usuarios[0].exibirStatus();
usuarios[1].verificarAcesso();

verificarTentativasLogin(usuarios[2], 4);

console.log(verificarUltimoLogin(usuarios[0], usuarios[3]));

verificarUsuarioRecente(usuarios[3]);
