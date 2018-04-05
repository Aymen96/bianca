$(document).ready(function() {


    $(".themen-navbar a:not(.special, .sort-btn)").click(function (){
        $(".themen-navbar a:not(.special, .sort-btn)").removeClass("active-select");
        $(this).addClass("active-select");
    });

    $(".zu-personen").click(function () {
        $(".personen-navbar").show();
        $(".themen-navbar").hide();
        $(".personen-wrapper").show();
        $(".themen-wrapper").hide();
        $(".special").removeClass("active");
        $(".zu-personen").addClass("active");
    });
    $(".zu-themen").click(function () {
        $(".themen-navbar").show();
        $(".personen-navbar").hide();
        $(".personen-wrapper").hide();
        $(".themen-wrapper").show();
        $(".special").removeClass("active");
        $(".zu-themen").addClass("active");
    });

    $(".info-btn").click(function() {
        $(".bottom-band").addClass("active-hover");
        $(this).hide();
        $(".hide-info-btn").removeClass("hidden").click(function() {
            $(".bottom-band").removeClass("active-hover");
            $(this).addClass("hidden");
            $(".info-btn").show();
        });
    });
});