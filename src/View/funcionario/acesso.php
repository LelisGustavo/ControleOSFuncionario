<?php
require_once dirname(__DIR__, 3) . '/vendor/autoload.php';
?>

<!DOCTYPE html>
<html>

<head>
    <?php
    include_once PATH_URL . '/Template/_includes/_head.php';
    ?>
</head>

<body class="hold-transition login-page">

    <div class="login-box">

        <div class="login-logo">
            ACESSO - FUNCIONÁRIO
        </div>

        <div class="card">

            <div class="card-body login-card-body">

                <p class="login-box-msg">Faça seu login</p>

                <form id="form_log" action="acesso.php" method="POST">

                    <input type="hidden" id="endpoint_autenticar" value="<?= AUTENTICAR ?>">

                    <div class="input-group mb-3">

                        <input type="email" class="form-control obg" id="email" name="email" placeholder="E-mail">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>

                    </div>

                    <div class="input-group mb-3">

                        <input type="password" class="form-control obg" id="senha" name="senha" placeholder="Senha">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-4">
                            <button type="button" class="btn btn-outline-success btn-block" name="btn_acessar" onclick="return ValidarAcesso('form_log')">Acessar</button>
                        </div>

                    </div>

                </form>

            </div>

            <div id="divLoad"></div>

        </div>

    </div>

    <?php
    include_once PATH_URL . '/Template/_includes/_scripts.php';
    include_once PATH_URL . 'Template/_includes/_msg.php';
    ?>

    <script src="../../ajax/funcionario_ajx.js"></script>

</body>

</html>