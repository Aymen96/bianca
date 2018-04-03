$(document).ready(function() {

    function switchToThemen () {
        if(content = "themen") {
            $(".personen-navbar").addClass("hidden");
            $(".themen-navbar").removeClass("hidden");
            $(".personen-wrapper").addClass("hidden");
            $(".themen-wrapper").removeClass("hidden");
        }
    }

    function switchToPersonen () {
        if(content = "personen") {
            $(".themen-navbar").addClass("hidden");
            $(".personen-navbar").removeClass("hidden");
            $(".themen-wrapper").addClass("hidden");
            $(".personen-wrapper").removeClass("hidden");
        }
    }

    $(".personen-navbar a").click(function (){
        $(".personen-navbar a").removeClass("active");
        $(this).addClass("active");
    });
});