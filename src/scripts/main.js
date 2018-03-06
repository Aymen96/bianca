$(document).ready(function() {

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
        $(this).siblings(".slick-wrapper").show().children(".theme-slick").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true
        });;
    });

});