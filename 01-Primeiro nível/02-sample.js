function verificarAcesso(user) {
    const permissaoAcesso = true;

    if  (permissaoAcesso && user.admin) {
        console.log("Acesso permitido.");
    } else {
        console.log("Acesso Negado.");
    }
}

const user = { name: "Tucao", admin: true };
verificarAcesso(user);
