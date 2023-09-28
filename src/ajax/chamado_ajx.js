function ListarEquipamentosSetor() {

    let dados = {
        endpoint: $("#endpoint_listar_equipamentos").val(),
        setor_id: CodigoSetorLogado()
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
            let equipamentos = result['result'];
            let combo_equipamentos = $("#equipamento");

            if (equipamentos == -1000) {
                ClearTnk();
            }
            else {

                combo_equipamentos.empty();

                // Adiciona o primeiro item como opção da SELECT OPTION
                $('<option>').text('Selecione').val('').appendTo(combo_equipamentos);

                $(equipamentos).each(function () {
                    $('<option>').text(this.tipo + " / " + this.modelo + " - " + this.identificacao).val(this.alocar_id).appendTo(combo_equipamentos);
                });
            }
        }, complete: function () {
            EncerrarTela();
        }
    })

}

function AbrirChamado(id_form) {

    if (NotificarCampos(id_form)) {

        let dados = {
            endpoint: $("#endpoint_abrir_chamado").val(),
            id_user: CodigoUserLogado(),
            id_alocar: $("#equipamento").val(),
            problema: $("#problema").val()
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
                        ListarEquipamentosSetor();
                        LimparCampos(id_form);
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

function ListarChamados() {

    let dados = {
        endpoint: $("#endpoint_filtrar_chamado").val(),
        situacao: $("#situacao").val(),
        id_setor: CodigoSetorLogado()
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
            let chamados = result['result']; //console.log(result);

            if (chamados == -1000) {
                ClearTnk();
            }
            else {

                if (chamados.length > 0) {

                    let titulo = '<h3 class="card-title">Resultado(s) encontrado(s)</h3>';
                    let tabela_inicial = `<table class="table table-hover">

            <thead>
                <tr>
                    <th>Ação</th>
                    <th>Data Abertura</th>
                    <th>Funcionário</th>
                    <th>Equipamento</th>
                    <th>Problema</th>
                </tr>
            </thead>`;

                    let = linha = '';

                    $(chamados).each(function () {
                        linha += `<tbody>
                <tr>
                    <td>`;

                        if (this.data_atendimento != null) {
                            linha += `<a href="#" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#modal-detalhar-chamado" onclick="CarregarModalDetalheChamado(${this.chamado_id})">Ver Mais
                        </a>`;
                        } else {
                            linha += '<i class="text-info">Aguardando</i>';
                        }

                        linha += `</td>
                    <td>${this.data_chamado}</td>
                    <td>${this.funcionario}</td>
                    <td>${this.tipo + ' - ' + this.modelo + ' / ' + this.identificacao}</td>
                    <td>${this.problema}</td>
                </tr>
            </tbody>`;
                    });

                    let tabela_final = '</table>';

                    let tabela_completa = tabela_inicial + linha + tabela_final;

                    // Adicionando os elementos na tabela e <h3>
                    $("#divResult").html(tabela_completa);
                    $("#titulo").html(titulo);
                    $("#titulo").show();

                } else {
                    MensagemNaoEncontradoRegistro();
                    $("#divResult").html('');
                    $("#titulo").hide();
                }
            }
        }, complete: function () {
            EncerrarTela();
        }
    })

}

function CarregarModalDetalheChamado(chamado_id) {

    let dados = {
        endpoint: $("#endpoint_detalhar_chamado_id").val(),
        id_chamado: chamado_id
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
            let dados = result['result']; //console.log(dados);

            if (dados == -1000) {
                ClearTnk();
            }
            else {

                $("#divEncerrado").addClass("ocultar");
                $("#tecnico_atendimento").val(dados.tec_atendimento);
                $("#data_atendimento").val(dados.data_atendimento);
                $("#hora_atendimento").val(dados.hora_atendimento);

                if (dados.data_encerramento != null) {

                    $("#divEncerrado").removeClass("ocultar");
                    $("#tecnico_encerramento").val(dados.tec_encerramento);
                    $("#data_encerramento").val(dados.data_encerramento);
                    $("#hora_encerramento").val(dados.hora_encerramento);
                    $("#laudo").val(dados.laudo);

                }
            }

        }, complete: function () {
            EncerrarTela();
        }
    })

}