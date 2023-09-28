<div class="modal fade" id="modal-detalhar-chamado">

    <div class="modal-dialog">

        <div class="modal-content">

            <div class="modal-header">

                <h4 class="modal-title">Detalhes do Chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

            </div>

            <div class="modal-body">

                <div class="row">

                    <!-- Técnico que iniciou o chamado -->
                    <div class="form-group col-md-12">
                        <label>Técnico que iniciou o atendimento</label>
                        <input disabled class="form-control" id="tecnico_atendimento">
                    </div>

                    <div class="form-group col-md-6">
                        <label>Data do Atendimento</label>
                        <input disabled class="form-control" id="data_atendimento">
                    </div>

                    <div class="form-group col-md-6">
                        <label>Hora do Atendimento</label>
                        <input disabled class="form-control" id="hora_atendimento">
                    </div>

                </div>

                <!-- Oculta os campos, até o chamado ser encerrado por um técnico -->
                <div id="divEncerrado" class="ocultar">

                <hr>

                    <div class="row">

                        <!-- Técnico que encerrou o chamado -->
                        <div class="form-group col-md-12">
                            <label>Técnico que encerrou o atendimento</label>
                            <input disabled class="form-control" id="tecnico_encerramento">
                        </div>

                        <div class="form-group col-md-6">
                            <label>Data do Encerramento</label>
                            <input disabled class="form-control" id="data_encerramento">
                        </div>

                        <div class="form-group col-md-6">
                            <label>Hora do Encerramento</label>
                            <input disabled class="form-control" id="hora_encerramento">
                        </div>

                        <div class="form-group col-md-12">
                            <label>Laudo</label>
                            <textarea readonly class="form-control" id="laudo"></textarea>
                        </div>

                    </div>

                </div>

            </div>

            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Fechar</button>
            </div>

        </div>

    </div>

</div>