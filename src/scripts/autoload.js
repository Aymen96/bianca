$(document).ready(function() {
    showNavlinks();
    showPersons();

    /**
     * QUESTIONS FILL
     **/
    for(var i = 1; i <= Object.keys(fragen).length ; i++) {
        frage =fragen["f" + i];
        $(".themen-wrapper").append(
                '<div class="theme-div" id="theme' + i + '">' +
                '<div class="marquee">' +
                '<div class="mq1">' +
                // THEME_TITLE
                '<h2 class="theme-title">' +
                frage["frage"] +
                '</h2>' +
                '</div>'  +

                '<div class="mq2">' +
                '<div class="one-image-wrapper">' +
                '<img src="./assets/img/sliders/01_bea.jpg" class="theme-image">' +
                '<div class="theme-image-text">Bea, 2017</div>' +
                '</div>' +
                '<div class="one-image-wrapper">' +
                '<img src="./assets/img/sliders/01_bea.jpg" class="theme-image">' +
                '<div class="theme-image-text">Bea, 2017</div>' +
                '</div>' +
                '<div class="one-image-wrapper">' +
                '<img src="./assets/img/sliders/01_bea.jpg" class="theme-image">' +
                '<div class="theme-image-text">Bea, 2017</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div><div class="media-content"></div>'
        );
    }
    /**
     * PERSON ELEMENTS FILL IN MEDIA CONTENT
     **/
    persons.forEach(function (person) {
        $(".player-test .persons-list").append('<div class="persons-list-el">' + person.name + '</div><div class="element-content"></div>');
    });

    /**
     * FIX IMAGES HEIGHT IN HOVER EFFECT BOX
     */
    $(".theme-div").each(function() {
        var height_theme_div = $(this).height() - 10;
        $(this).find(".marquee .mq2 img").css("height", height_theme_div + "px");

    });
});