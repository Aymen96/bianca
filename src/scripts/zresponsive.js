$(document).ready(function () {

    function adjustContent() {
        if (screen.width <= 480) {
            console.log("YOO PHONE");
            $(".persons-hover-div").remove();
            $(".names").remove();
            $(".theme-slick").remove();
            $(".small-devices-header").removeClass("hidden");
        } else {
            console.log("YOO laptop");
        }
    }
    adjustContent();
    window.onresize = function(){ location.reload(); };

    // variables
    var $header_top = $('.header-top');
    var $nav = $('.nav-me');

    // toggle menu
        $header_top.find('a').on('click', function() {
            $(this).parent().toggleClass('open-menu');
        });

    // hide menu when clicking outside the menu
        $("html").click(function(e) {
            if(!$(e.target).closest('header').length) {
                $header_top.removeClass('open-menu');
            }
        });

    // hide menu when clicking on the menu items or the logo
        $(' #menu li a').click(function(){
            $header_top.removeClass('open-menu');
        });
});