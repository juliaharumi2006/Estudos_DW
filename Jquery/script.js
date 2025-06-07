// Espera a página carregar
$(document).ready(function () {
    $("#botao").click(function () {
        $("#meuElemento")
            .css("color", "green") // muda a cor do texto
            .toggleClass("destaque"); // adiciona ou remove a classe destaque
    });
});