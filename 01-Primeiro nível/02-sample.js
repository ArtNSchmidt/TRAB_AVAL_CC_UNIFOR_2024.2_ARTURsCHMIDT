function verifyAccess(user) {
    const hasAccess = true;

    if (hasAccess && user.admin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const user = { name: "João", admin: true };
verifyAccess(user);
