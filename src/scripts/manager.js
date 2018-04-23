$(document).ready(function() {

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
            console.log(persons);
        } else {
            alphabetisch = true;
            persons.sort(function (a, b) {
                if(a.name > b.name) return 1;
                else if(a.name < b.name) return -1;
                else return 0;
            });
            showNavlinks();
            showPersons();
            console.log(persons);
        }
    });

    /**
     * @CLICK WHEN THEMEN DIV IS CLICKED
     **/
    $(".theme-div").click(function(e) {
        e.preventDefault();
        $(".theme-div.active:not(.player-on, .player-chrinked) ~ .media-content:not(.media-content-hidden)").removeClass("enabled").empty();
        // Scroll to question
        var id = $(this).attr('id');
        setTimeout(function() {
            window.location.href= "./#" + id;
        }, 500);

        // COLORATION
        if($(this).hasClass("player-chrinked") && playerChrinked && !playerOn) {
            $(this).removeClass("player-chrinked");
            playerChrinked = false;
            $(this).next(".media-content").empty().removeClass("enabled");
            return;
        }
        if($(this).hasClass("player-chrinked") && playerChrinked) {
            console.log("#1");
            $(".media-content.enabled:not(.hidden) .names-table").fadeIn();
            $(".media-content.enabled:not(.hidden) .persons-list").fadeIn();
            $(this).removeClass("player-chrinked").next(".media-content.enabled").find(".player-wrapper").removeClass("chrinked");
            $(".player-on ~ .media-content.enabled:not(.hidden)").find(".progress").fadeIn();
            playerChrinked = false;

            $(".theme-div:not(.player-chrinked)").removeClass("active");
            $(this).addClass("active");

            return;
        }
        if(playerOn && $(this).hasClass("player-on") && !$(this).hasClass("player-chrinked")) {
            console.log("#2");
            $(".media-content.enabled:not(.hidden) .names-table").fadeOut();
            $(".media-content.enabled:not(.hidden) .persons-list").fadeOut();
            $(this).addClass("player-chrinked").next(".media-content.enabled").find(".player-wrapper").addClass("chrinked");
            $(".player-on ~ .media-content.enabled:not(.hidden)").find(".progress").fadeOut();
            playerChrinked = true;
            return;
        }
        if($(this).hasClass("active")) {
            console.log("#3");
            $(this).removeClass("active");
            disableQuestion($(this));
            return;
        }
        if(playerOn && !$(this).hasClass("active") && !$(this).hasClass("player-chrinked")) {
            console.log("#4special");
            $(".media-content.enabled:not(.hidden) .names-table").fadeOut();
            $(".media-content.enabled:not(.hidden) .persons-list").fadeOut();
            $(".player-on").addClass("player-chrinked").removeClass("active").next(".media-content.enabled").find(".player-wrapper").addClass("chrinked");
            $(".player-on ~ .media-content.enabled:not(.hidden)").find(".progress").fadeOut();
            playerChrinked = true;
        }
        // COLORATION
        console.log("#5");
        $(".theme-div:not(.player-chrinked)").removeClass("active");
        $(this).addClass("active");
        enableQuestion($(this));
        return false;
    });

});