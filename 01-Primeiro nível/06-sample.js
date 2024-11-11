const nomeUsuario = "Miqueias";
const idadeUsuario = 33;
const usuarioAtivo = true;

function statusUsuario(nome, idade, ativo) {
    if (ativo) {
        console.log(`${nome} tem ${idade} anos e está ativo.`);
    } else {
        console.log(`${nome} está inativo.`);
    }
}

statusUsuario(nomeUsuario, idadeUsuario, usuarioAtivo);
