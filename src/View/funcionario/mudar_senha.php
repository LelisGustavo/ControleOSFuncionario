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
                            <h1>Minha Senha</h1>
                        </div>

                    </div>

                </div>

            </section>

            <section class="content">

                <div class="card">

                    <div class="card-header">
                        <h3 class="card-title">Altere sua senha aqui</h3>
                    </div>

                    <div class="card-body">

                        <input type="hidden" id="endpoint_verificar_senha" value="<?= CHECAR_SENHA_ENDPOINT ?>">
                        <input type="hidden" id="endpoint_alterar_senha" value="<?= ALTERAR_SENHA_ENDPOINT ?>">

                        <div id="div_senha_atual" class="form-group">

                            <!-- Form para conferir a senha do usuário -->
                            <form action="mudar_senha.php" method="post" id="form_senha_atual">

                                <div class="form-group">
                                    <label>Senha atual</label>
                                    <input type="password" class="form-control obg" placeholder="Digite aqui..." name="senha_atual" id="senha_atual">
                                </div>

                                <button type="button" class="btn btn-outline-info" type="button" onclick="return VerificarSenhaAtual('form_senha_atual')" name="btn_verificar">Verificar</button>

                            </form>

                        </div>

                        <div id="div_alterar_senha" class="ocultar">

                            <!-- Form para alterar a senha do usuário -->
                            <form action="mudar_senha.php" method="post" id="form_atualizar_senha">

                                <div class="form-group">
                                    <label>Nova senha</label>
                                    <input type="password" class="form-control obg" placeholder="Digite aqui..." name="nova_senha_usuario" id="nova_senha_usuario">
                                </div>

                                <div class="form-group">
                                    <label>Repetir senha</label>
                                    <input type="password" class="form-control obg" placeholder="Digite aqui..." name="repetir_nova_senha_usuario" id="repetir_nova_senha_usuario">
                                </div>

                                <button type="button" class="btn btn-outline-success" onclick="return AlterarSenhaUsuario('form_atualizar_senha')" name="btn_alterar">Alterar</button>

                            </form>

                        </div>

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
    <script>
        Verify()
    </script>

</body>

</html>