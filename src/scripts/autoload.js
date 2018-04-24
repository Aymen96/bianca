$(document).ready(function() {
    /*
     * TIMEOUT TO LOAD JSON FILES !!
     */
    setTimeout(function() {
        /**
         * QUESTIONS FILL
         **/
        fill_questions();

        /**
         * FIX IMAGES HEIGHT IN HOVER EFFECT BOX
         */
        $(".theme-div").each(function () {
            var height_theme_div = $(this).height() - 10;
            $(this).find(".marquee .mq2 img").css("height", height_theme_div + "px");

        });

        /**
         * @CLICK WHEN THEMEN DIV IS CLICKED
         **/
        $(".theme-div").click(function(e) {
            e.preventDefault();
            var self = $(this);
            var playing = $(".theme-div.player-on");
            // Close other media content elements
            $(".theme-div.active:not(.player-on, .player-chrinked) ~ .media-content:not(.media-content-hidden)").removeClass("enabled").empty();
            // Scroll to question
            var id = $(this).attr('id');
            setTimeout(function() {
                window.location.href= "./#" + id;
            }, 500);

            // Question is clicked and shrinked
            if(playerChrinked && self.hasClass("player-chrinked")) {
                $(".theme-div:not(.player-chrinked)").removeClass("active");
                unshrink_player(self);
                return;
            } else
            // Question is clicked and playing
            if(playerOn && self.hasClass("player-on")) {
                shrink_player(self);
                return;
            } else
            // Question is clicked while other is playing
            if(playerOn && !self.hasClass("player-on")) {
                if(!playerChrinked) {shrink_player(playing);}
                if(self.hasClass("active")) {
                    disable_theme(self);
                    return;
                }
            } else
            // Question should close
            if(self.hasClass("active")) {
                disable_theme(self);
                return;
            }
            /** COLORATION
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
             **/
            console.log("#5");
            $(".theme-div:not(.player-chrinked)").removeClass("active");
            $(this).addClass("active");
            enableQuestion($(this));
            return false;
        });
    }, 1000);
});