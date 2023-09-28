function DetalharUsuario() {

    let endpoint_page = $("#endpoint_detalhar").val();
    let id_user_logado = CodigoUserLogado();
    let id_setor = CodigoSetorLogado();

    let dados = {
        id_user: id_user_logado,
        endpoint: endpoint_page,
        endereco_id: id_setor
    }

    $.ajax({
        type: "POST",
        url: BASE_URL("funcionario_api"),
        beforeSend: function () {
            CarregarTela();
        },
        headers: {
            'Authorization': 'Bearer ' + GetTnk(),
            "Content-Type": "application/json"
        },
        data: JSON.stringify(dados),
        success: function (result) {
            let dados = result['result'];

            if (dados == -1000) {
                ClearTnk();
            }
            else {
                $("#nome_usuario").val(dados.nome_usuario);
                $("#email_usuario").val(dados.email);
                $("#telefone_usuario").val(dados.tel);
                $("#rua_usuario").val(dados.nome_rua);
                $("#bairro_usuario").val(dados.nome_bairro);
                $("#estado_usuario").val(dados.sigla);
                $("#cidade_usuario").val(dados.nome_cidade);
                $("#complemento_usuario").val(dados.complemento);
                $("#cep_usuario").val(dados.cep);
                $("#endereco_id").val(dados.endereco_id);
                $("#tipo").val(dados.tipo);
            }

        }, complete: function () {
            EncerrarTela();
        }
    })

}

function AlterarUsuario(id_form) {

    if (NotificarCampos(id_form)) {

        let dados = {
            usuario_id: CodigoUserLogado(),
            setor: CodigoSetorLogado(),
            tipo: $("#tipo").val(),
            nome_usuario: $("#nome_usuario").val(),
            email_usuario: $("#email_usuario").val(),
            telefone_usuario: $("#telefone_usuario").val(),
            endereco_id: $("#endereco_id").val(),
            cep_usuario: $("#cep_usuario").val(),
            rua_usuario: $("#rua_usuario").val(),
            bairro_usuario: $("#bairro_usuario").val(),
            complemento_usuario: $("#complemento_usuario").val(),
            cidade_usuario: $("#cidade_usuario").val(),
            estado_usuario: $("#estado_usuario").val(),
            endpoint: $("#endpoint_alterar").val()
        }

        $.ajax({
            type: "POST",
            url: BASE_URL("funcionario_api"),
            beforeSend: function () {
                CarregarTela();
            },
            headers: {
                'Authorization': 'Bearer ' + GetTnk(),
                "Content-Type": "application/json"
            },
            data: JSON.stringify(dados),
            success: function (result) {
                let dados = result['result'];

                if (dados == -1000) {
                    ClearTnk();
                }
                else {

                    if (dados == 1) {
                        MensagemSucesso();
                    } else {
                        MensagemErro();
                    }
                }

            }, complete: function () {
                EncerrarTela();
            }
        })

    }

}

function VerificarSenhaAtual(id_form) {

    if (NotificarCampos(id_form)) {
        let dados = {
            endpoint: $("#endpoint_verificar_senha").val(),
            id_user: CodigoUserLogado(),
            senha_digitada: $("#senha_atual").val()
        }

        $.ajax({
            type: "POST",
            url: BASE_URL("funcionario_api"),
            beforeSend: function () {
                CarregarTela();
            },
            headers: {
                'Authorization': 'Bearer ' + GetTnk(),
                "Content-Type": "application/json"
            },
            data: JSON.stringify(dados),
            success: function (result) {
                console.log(result);
                let dados = result['result'];

                if (dados == -1000) {
                    ClearTnk();
                }
                else {

                    if (dados == 1) {
                        $("#div_senha_atual").hide();
                        $("#div_alterar_senha").show();
                        MensagemSucesso();
                    } else if (dados == -1) {
                        $("#div_senha_atual").show();
                        $("#div_alterar_senha").hide();
                        MensagemCustomizadaInfo("Senha atual não confere");
                    } else if (dados == -1000) {
                        ClearTnk();
                        RedirectToPage("acesso");
                    }
                }

            }, complete: function () {
                EncerrarTela();
            }

        })

    }

}

function AlterarSenhaUsuario(id_form) {

    if (NotificarCampos(id_form)) {

        if ($("#nova_senha_usuario").val().length < 6) {
            MensagemSenhaTamanhoNaoConfere();
        } else if ($("#nova_senha_usuario").val() != $("#repetir_nova_senha_usuario").val()) {
            MensagemSenhaNaoConfere();
        } else {

            let dados = {
                endpoint: $("#endpoint_alterar_senha").val(),
                usuario_id: CodigoUserLogado(),
                nova_senha_digitada: $("#nova_senha_usuario").val(),
                repetir_nova_senha_digitada: $("#repetir_nova_senha_usuario").val()
            }

            $.ajax({
                type: "POST",
                url: BASE_URL("funcionario_api"),
                beforeSend: function () {
                    CarregarTela();
                },
                headers: {
                    'Authorization': 'Bearer ' + GetTnk(),
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(dados),
                success: function (result) {
                    let dados = result['result'];

                    if (dados == -1000) {
                        ClearTnk();
                    }
                    else {

                        if (dados == 1) {
                            MensagemSucesso();
                            setTimeout(function () {
                                window.location.href = "mudar_senha.php";
                            }, 1000);
                        } else if (dados == -5) {
                            MensagemSenhaTamanhoNaoConfere();
                        } else if (dados == -6) {
                            MensagemSenhaNaoConfere();
                        }
                    }

                }, complete: function () {
                    EncerrarTela();
                }
            })
        }
    }

}

function ValidarAcesso(id_form) {

    if (NotificarCampos(id_form)) {

        let dados = {
            endpoint: $("#endpoint_autenticar").val(),
            email: $("#email").val(),
            senha: $("#senha").val()
        }

        $.ajax({
            type: "POST",
            url: BASE_URL("funcionario_api"),
            beforeSend: function () {
                CarregarTela();
            },
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(dados),
            success: function (ret) {

                //console.log(ret);

                if (ret.result == -4) {
                    MensagemCustomizadaInfo("Usuário não encontrado")
                } else {
                    AddTnk(ret.result);
                    location = "meus_dados.php";
                }

            }, complete: function () {
                EncerrarTela();
            }
        })

    }

    return false
}

