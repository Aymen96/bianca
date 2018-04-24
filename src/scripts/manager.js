$(document).ready(function() {
    showNavlinks();
    showPersons();
    /**
     * @CLICK SWITCH TO PERSONS CONTENT
     **/
    $(".zu-personen").click(function () {
        $(".personen-navbar").show();
        $(".themen-navbar").hide();
        $(".personen-wrapper").show();
        $(".themen-wrapper").hide();
        $(".special").removeClass("active");
        $(".zu-personen").addClass("active");
    });

    /**
     * @CLICK SWITCH TO THEMEN CONTENT
     **/
    $(".zu-themen").click(function () {
        $(".themen-navbar").show();
        $(".personen-navbar").hide();
        $(".personen-wrapper").hide();
        $(".themen-wrapper").show();
        $(".special").removeClass("active");
        $(".zu-themen").addClass("active");
    });

    /**
     * @CLICK INFO BUTTON ON CLICK EFFECT
     **/
    $(".info-btn").click(function() {
        $(".bottom-band").addClass("active-hover");
        $(this).hide();
        $(".hide-info-btn").removeClass("hidden").click(function() {
            $(".bottom-band").removeClass("active-hover");
            $(this).addClass("hidden");
            $(".info-btn").show();
        });
    });

    /**
     * @CLICK Switch active anchor in themen Navbar
     **/
    $(".themen-navbar a:not(.special, .sort-btn)").click(function (){
        $(".themen-navbar a:not(.special, .sort-btn)").removeClass("active-select");
        $(this).addClass("active-select");
    });

    /**
     * @CLICK SORT ELEMENTS OF NAVBAR
     **/
    $(".sort-btn").click(function() {
        if(alphabetisch) {
            alphabetisch = false;
            persons.sort(function (a, b) {
                if(a.year > b.year) return 1;
                else if(a.year < b.year) return -1;
                else return 0;
            });
            showNavlinks();
            showPersons();
            $(".sort-btn").html("Sortieren nach Personen");
        } else {
            alphabetisch = true;
            persons.sort(function (a, b) {
                if(a.name > b.name) return 1;
                else if(a.name < b.name) return -1;
                else return 0;
            });
            showNavlinks();
            showPersons();
            $(".sort-btn").html("Sortieren nach Abschlussjahr");
        }
    });

});