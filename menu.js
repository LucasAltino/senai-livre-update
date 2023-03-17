$(document).ready(function() {

    $(".barra").on("click", function() {

        if($(".categorias").hasClass("aberto")) {
            $(".categorias").removeClass("aberto")
        } else {
            $(".categorias").addClass("aberto")
        }

    })

}); 