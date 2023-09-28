<?php
require_once dirname(__DIR__, 3) . '\vendor\autoload.php';
?>

<!DOCTYPE html>
<html>

<head>
    <?php
    include_once PATH_URL . '/Template/_includes/_head.php';
    ?>
</head>

<body class="hold-transition sidebar-mini">

    <div class="wrapper">
        <?php
        include_once PATH_URL . '/Template/_includes/_topo.php';
        include_once PATH_URL . '/Template/_includes/_menu.php';
        ?>

        <div class="content-wrapper">

            <section class="content-header">

                <div class="container-fluid">

                    <div class="row mb-2">

                        <div class="col-sm-6">
                            <h1>Meus Dados</h1>
                        </div>

                    </div>

                </div>

            </section>

            <section class="content">

                <div class="card">

                    <div class="card-header">
                        <h3 class="card-title">Aqui você poderá atualizar seus dados</h3>
                    </div>

                    <div class="card-body">

                        <form action="meus_dados.php" method="post" id="formAlt">

                            <input type="hidden" id="endpoint_detalhar" value="<?= DETALHAR_USUARIO_ENDPOINT ?>">
                            <input type="hidden" id="endpoint_alterar" value="<?= ALTERAR_USUARIO_ENDPOINT ?>">
                            <input type="hidden" id="endereco_id">
                            <input type="hidden" id="tipo">

                            <div class="form-group">
                                <label>Nome completo</label>
                                <input class="form-control obg" placeholder="Digite aqui..." name="nome_usuario" id="nome_usuario">
                            </div>

                            <!-- Class row para formatar os campos (E-mail e Telefone) com col-md-6 -->
                            <div class="row">

                                <div class="form-group col-md-6">
                                    <label>E-mail</label>
                                    <input class="form-control obg" onblur="ValidarEmailDuplicado()" placeholder="Digite aqui..." name="email_usuario" id="email_usuario">
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Telefone</label>
                                    <input class="form-control obg tel num" placeholder="Digite aqui..." name="telefone_usuario" id="telefone_usuario">
                                </div>

                            </div>

                            <!-- Class row para formatar os campos (CEP e Rua) com col-md-6 -->
                            <div class="row">

                                <div class="form-group col-md-6">
                                    <label>CEP</label>
                                    <input onblur="BuscarCep()" class="form-control obg cep num" placeholder="Digite aqui..." name="cep_usuario" id="cep_usuario">
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Rua</label>
                                    <input class="form-control obg" placeholder="Digite aqui..." name="rua_usuario" id="rua_usuario">
                                </div>

                            </div>

                            <!-- Class row para formatar os campos (Bairro e Complemento) com col-md-6 -->
                            <div class="row">

                                <div class="form-group col-md-6">
                                    <label>Bairro</label>
                                    <input class="form-control obg" placeholder="Digite aqui..." name="bairro_usuario" id="bairro_usuario">
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Complemento</label>
                                    <input class="form-control" placeholder="Digite aqui..." name="complemento_usuario" id="complemento_usuario">
                                </div>

                            </div>

                            <!-- Class row para formatar os campos (Estado e Cidade) com col-md-6 -->
                            <div class="row">

                                <div class="form-group col-md-6">
                                    <label>Cidade</label>
                                    <input readonly class="form-control obg" placeholder="Este campo será preenchido automáticamente após digitar o CEP..." name="cidade_usuario" id="cidade_usuario">
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Estado</label>
                                    <input readonly class="form-control obg" placeholder="Este campo será preenchido automáticamente após digitar o CEP..." name="estado_usuario" id="estado_usuario">
                                </div>

                            </div>

                            <button class="btn btn-outline-success" type="button" onclick="return AlterarUsuario('formAlt')" name="btn_gravar">Gravar</button>

                        </form>

                    </div>

                    <div id="divLoad"></div>

                </div>

            </section>

        </div>

        <?php
        include_once PATH_URL . '/Template/_includes/_footer.php';
        ?>

    </div>

    <?php
    include_once PATH_URL . '/Template/_includes/_scripts.php';
    ?>

    <script src="../../ajax/funcionario_ajx.js"></script>
    <script src="../../Template/dist/js/jquery.mask.min.js"></script>
    <script src="../../Template/dist/js/mask.js"></script>
    
    <script>
        Verify();
        DetalharUsuario();
    </script>

</body>

</html>