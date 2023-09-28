<?php

if (isset($_GET['ret'])) {
    $ret = $_GET['ret'];
}

if (isset($ret)) {
    switch ($ret) {

        case -6:
            echo '<script>MensagemSenhaNaoConfere()</script>';
            break;
        case -5:
            echo '<script>MensagemSenhaTamanhoNaoConfere()</script>';
            break;
        case -4:
            echo '<script>MensagemNaoEncontradoUsuario()</script>';
            break;
        case -3:
            echo '<script>MensagemNaoEncontradoRegistro()</script>';
            break;
        case -2:
            echo '<script>MensagemErroExcluir()</script>';
            break;
        case -1:
            echo '<script>MensagemErro()</script>';
            break;
        case 0:
            echo '<script>MensagemCampoObrigatorio()</script>';
            break;
        case 1:
            echo '<script>MensagemSucesso()</script>';
            break;
    }
}
