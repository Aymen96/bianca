$(document).ready(function() {
    $(".header").addClass("header-active");
    window.setTimeout(function () {
        $(".header").removeClass("header-active")
    } , 8000);

    $(".theme-title").click(function() {
        $(".theme-title").siblings(".slick-wrapper").hide();
        // COLORATION
        if($(this).hasClass("active")) {
            // COLORATION
            $(this).removeClass("active");
            // HIDING SLICK_THEME

            $(this).siblings(".slick-wrapper").hide();

            return;
        }
        // COLORATION
        $(".theme-title").removeClass("active");
        $(this).addClass("active");
        // SHOWING SLICK_THEME
        try {
            $(this).siblings(".slick-wrapper").show().children(".theme-slick").slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true
            });
        }
        catch(err) {
            // ERROR TO BE IGNORED
        }

    });

});