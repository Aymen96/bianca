$(document).ready(function() {
    var content = "themen";

    $("li.themen").click(function () {
        content = 'themen';
        $(".active-header-item").removeClass("active-header-item");
        $(this).addClass("active-header-item");
        switchToThemen();
    });

    $("li.personen").click(function () {
        content = 'personen';
        $(".active-header-item").removeClass("active-header-item");
        $(this).addClass("active-header-item");
        switchToPersonen();
    });

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

});