// Função de mensagem de preenchimento de campos obrigatorios
function MensagemCampoObrigatorio() {

    toastr.warning(RetornarMsg(0));

}

// Função de mensagem de sucesso 
function MensagemSucesso() {

    toastr.success(RetornarMsg(1));

}

// Função de mensagem de erro
function MensagemErro() {

    toastr.error(RetornarMsg(-1));

}

// Função de mensagem que retorna quando se tenta excluir algo que esta vinculado a outra tabela no banco de dados
function MensagemErroExcluir() {

    toastr.error(RetornarMsg(-2));

}

// Função de mensagem costumizadoa Info
function MensagemCustomizadaInfo(texto){
    toastr.info(texto)
}

// Função de mensagem costumizada Warning
function MensagemCustomizadaWarning(texto){
    toastr.warning(texto)
}

// Função de mensagem para quando não se encontra nenhum registro no banco de dados
function MensagemNaoEncontradoRegistro(){
    toastr.info(RetornarMsg(-3));
}

function MensagemNaoEncontradoUsuario(){
    toastr.info(RetornarMsg(-4));
}

function MensagemSenhaTamanhoNaoConfere() {
    toastr.info(RetornarMsg(-5));
}

function MensagemSenhaNaoConfere() {
    toastr.error(RetornarMsg(-6));
}
