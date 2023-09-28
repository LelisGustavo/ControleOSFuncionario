// Função de direcionamento de páginas
function BASE_URL(nome_arquivo) {

    return "http://localhost/ControleOS/src/Resource/api/" + nome_arquivo + ".php";

}

// Função que limpa dos campos depois de introduzir as informações nos input's
function LimparCampos(id_form) {

    $("#" + id_form + " input, #" + id_form + " select, #" + id_form + " textarea").each(function () {
        //Tira a marcação do CSS do input
        $(this).removeClass("is-valid");
        //Limpa o input da vez
        $(this).val('');
    })

}

// Função que notifica os campos obrigatórios
function NotificarCampos(id_form) {

    let ret = true;

    $("#" + id_form + " input, #" + id_form + " select, #" + id_form + " textarea").each(function () {

        if ($(this).hasClass("obg")) {

            if ($(this).val().trim() == "") {
                ret = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid").addClass("is-valid");
            }
        }

    })

    //Se meu ret não for true, dispará a mensagem de preencher campos obrigatórios
    if (!ret)
        MensagemCampoObrigatorio();

    return ret;
}

// Função de fechar as modal's do projeto
function FecharModal(id_modal) {
    $("#" + id_modal).modal("hide");
}

// Função que carrega o Loading... das informações das telas
function CarregarTela() {
    $("#divLoad").addClass("overlay").html('<i class="fas fa-2x fa-sync-alt fa-spin"></i>');
}

// Função que encerra o Loading... das informações das telas, depois de mostrado
function EncerrarTela() {
    $("#divLoad").removeClass("overlay").html('');
}

// Função para preencher os campos automaticamente após o digito do CEP (Código retirado da API VIACEP)
function BuscarCep() {

    //Nova variável "cep" somente com dígitos.
    var cep = $("#cep_usuario").val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            $("#rua_usuario").val("...");
            $("#bairro_usuario").val("...");
            $("#cidade_usuario").val("...");
            $("#estado_usuario").val("...");

            //Consulta o webservice viacep.com.br/
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                if (!("erro" in dados)) {
                    //Atualiza os campos com os valores da consulta.
                    $("#rua_usuario").val(dados.logradouro);
                    $("#bairro_usuario").val(dados.bairro);
                    $("#cidade_usuario").val(dados.localidade);
                    $("#estado_usuario").val(dados.uf);
                    GerenciarCamposEndereco(true);
                } //end if.
                else {
                    //CEP pesquisado não foi encontrado.
                    MensagemCustomizadaWarning("CEP " + cep + " não foi encontrado.");
                    LimpaFormularioCep();
                    GerenciarCamposEndereco(false);
                }
            });
        } //end if.
        else {
            //cep é inválido.
            MensagemCustomizadaWarning("Formato de CEP inválido.");
            LimpaFormularioCep();
            GerenciarCamposEndereco(false);
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        LimpaFormularioCep();
    }

}

function CodigoUserLogado() {
    let dados = GetTnkValue();
    return dados.id_logado;
}

function CodigoSetorLogado() {
    let dados = GetTnkValue();
    return dados.setor_id;
}

function AddTnk(t) {
    localStorage.setItem('user_tkn', t);
}

function GetTnkValue() {
    var token = GetTnk();
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var j = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(j);
}

function GetTnk() {
    if (localStorage.getItem('user_tkn') != null)
        return localStorage.getItem('user_tkn');
}

function Verify() {
    if (localStorage.getItem('user_tkn') === null) {
        location = "acesso.php";
    }
}

function ClearTnk() {
    localStorage.clear();
    location = "acesso.php";
}

function RedirectToPage(page) {
    location = page + ".php";
}

