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
                            <h1>Meus Chamados</h1>
                        </div>

                    </div>

                </div>

            </section>

            <section class="content">

                <div class="card">

                    <div class="card-header">
                        <h3 class="card-title">Consulte todos seus chamados e acompanhe os atendimentos</h3>
                    </div>

                    <div class="card-body">

                        <form action="meus_chamados.php" method="post">

                            <input type="hidden" id="endpoint_filtrar_chamado" value="<?= FILTRAR_CHAMADO_ENDPOINT ?>">
                            <input type="hidden" id="endpoint_detalhar_chamado_id" value="<?= DETALHAR_CHAMADO_ID_ENDPOINT ?>">

                            <div class="form-group">
                                <label>Escolha a situação</label>
                                <select class="form-control select2" style="width: 100%;" name="situacao" id="situacao" onchange="ListarChamados()">
                                    <option value="-1">TODOS</option>
                                    <option value="<?= AGUARDANDO_ATENDIMENTO ?>">Aguardando atendimento</option>
                                    <option value="<?= EM_ATENDIMENTO ?>">Em atendimento</option>
                                    <option value="<?= ENCERRADO ?>">Encerrado</option>
                                </select>
                            </div>

                            <button class="btn btn-outline-info" type="button" name="btn_procurar" onclick="ListarChamados()">Procurar</button>

                        </form>
                    </div>

                </div>

                <hr>

                <div class="row">

                    <div class="col-12">

                        <div class="card">

                            <div class="card-header" id="titulo">
                                <!-- Renderizado via AJAX de acordo com o filtro -->
                            </div>

                            <div class="card-body table-responsive p-0" id="divResult">

                                <!-- Tabela sendo renderizada via AJAX -->

                                <div id="divLoad"></div>

                            </div>

                        </div>

                    </div>

                    <?php
                    include_once 'modals/_detalhes_chamado.php';
                    ?>

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
        ListarChamados()
    </script>

</body>

</html>