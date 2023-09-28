function RetornarMsg(ret) {
    let msg = "";

    switch (ret) {

        case -6:
            msg = "Senha e Repetir Senha não conferem";
            break;
        case -5:
            msg = "Senha tem que conter pelo menos 6 caracteres";
            break;
        case -4:
            msg = "Usuário não encontrado";
            break;
        case -3:
            msg = "Não foi encontrado nenhum registro";
            break;
        case -2:
            msg = "O registo não pode ser excluído pois está em uso";
            break;
        case -1:
            msg = "Ocorreu um erro na operação";
            break;
        case 0:
            msg = "Preencher o(s) campos(s) obrigatório(s)";
            break;
        case 1:
            msg = "Ação realizada com sucesso";
            break;
    }

    return msg;
}