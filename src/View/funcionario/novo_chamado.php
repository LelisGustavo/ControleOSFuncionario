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
                            <h1>Novo Chamado</h1>
                        </div>

                    </div>

                </div>

            </section>

            <section class="content">

                <div class="card">

                    <div class="card-header">
                        <h3 class="card-title">Realize aberturas de chamados nesta página</h3>
                    </div>

                    <div class="card-body">

                        <form action="novo_chamado.php" method="post" id="form_chamado">

                            <input type="hidden" id="endpoint_listar_equipamentos" value="<?= LISTAR_EQUIPAMENTO_SETOR_ENDPOINT ?>">
                            <input type="hidden" id="endpoint_abrir_chamado" value="<?= ABRIR_CHAMADO_ENDPOINT ?>">

                            <div class="form-group">

                                <label>Escolha o equipamento</label>
                                <select class="form-control select2 obg" name="equipamento" id="equipamento">

                                </select>

                            </div>

                            <div class="form-group">

                                <label>Descreva o problema</label>
                                <textarea class="form-control obg" rows="3" name="problema" id="problema" placeholder="Digite aqui..."></textarea>

                            </div>

                            <button class="btn btn-outline-success" type="button" onclick="return AbrirChamado('form_chamado')" name="btn_gravar">Gravar</button>
                        </form>

                    </div>

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

    <script src="../../ajax/chamado_ajx.js"></script>
    <script>
        Verify();
        ListarEquipamentosSetor()
    </script>

</body>

</html>