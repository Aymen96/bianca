$(document).ready(function () {

    function adjustContent() {
        if (screen.width <= 600 || screen.height <= 480) {
            console.log("YOO phone");
            $(".persons-hover-div").remove();
            $(".names").remove();
            $(".theme-slick").remove();
            $(".header").addClass("small-devices-header").removeClass("header").empty().append('    <div class="header-top clearfix">\n' +
                '<a class="float-right toggle-menu" href="#">\n' +
                '<i></i>\n' +
                '<i></i>\n' +
                '<i></i>\n' +
                '</a>\n' +
                '</div>\n' +
                '<nav class="hide nav-me">\n' +
                '<ul id="menu">\n' +
                '<li class="themen active-header-item">Themen</li>\n' +
                '<li class="personen">Personen</li>\n' +
                '<li>Info</li>\n' +
                '<li>Mitmachen</li>\n' +
                '</ul>\n' +
                '</nav>');
        } else if(screen.width <= 1024) {
            $(".persons-hover-div").remove();
            console.log("YOO tablet");
            $(".header").addClass("small-devices-header").removeClass("header").empty().append('    <div class="header-top clearfix">\n' +
                '<a class="float-right toggle-menu" href="#">\n' +
                '<i></i>\n' +
                '<i></i>\n' +
                '<i></i>\n' +
                '</a>\n' +
                '</div>\n' +
                '<nav class="hide nav-me">\n' +
                '<ul id="menu">\n' +
                '<li class="themen active-header-item">Themen</li>\n' +
                '<li class="personen">Personen</li>\n' +
                '<li>Info</li>\n' +
                '<li>Mitmachen</li>\n' +
                '</ul>\n' +
                '</nav>');
        }
        else {
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
        $('#menu li a').click(function(){
            $header_top.removeClass('open-menu');
        });
});