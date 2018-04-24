function activate_theme() {
    $(".media-content:not(.pl-on, .player-shrinked)").removeClass("enabled").empty();
    
}
function disable_theme(themediv) {
    themediv.removeClass("active");
    themediv.removeAttr('id')
        .next(".media-content").removeClass("enabled").empty();
}

function shrink_player(themediv) {
    // Prevent other questions to shrink same time
    if(playerChrinked) {
        $(".theme-div").removeClass("player-chrinked").next(".media-content.enabled")
            .find(".player-wrapper").removeClass("chrinked");;
    }
    // Mark as shrinked
    playerChrinked = true;
    themediv.addClass("player-chrinked").next(".media-content.enabled")
        .find(".player-wrapper").addClass("chrinked");
    // Hide elements other than player
    $(".media-content.enabled:not(.hidden) .names-table").fadeOut();
    $(".media-content.enabled:not(.hidden) .persons-list").fadeOut();
    // Hide progress bar
    $(".player-on ~ .media-content.enabled:not(.hidden)").find(".progress").fadeOut();
}

function unshrink_player(themediv) {
    // Mark as unshrinked
    playerChrinked = false;
    themediv.removeClass("player-chrinked").next(".media-content.enabled")
        .find(".player-wrapper").removeClass("chrinked");
    // Show elements other than player
    $(".media-content.enabled:not(.hidden) .names-table").fadeIn();
    $(".media-content.enabled:not(.hidden) .persons-list").fadeIn();
    // Show progress bar
    $(".player-on ~ .media-content.enabled:not(.hidden)").find(".progress").fadeIn();
}

function reinit() {
    playerOn = false;
    playerChrinked = false;
    $(".media-content:not(.hidden)").removeClass("enabled").empty();
    $(".theme-div").removeClass("player-on").removeClass("player-chrinked").removeClass("active");
    if(player) {
        player.pause();
    }
}
function play() {
    playerOn = true;
    $(".content-wrapper").removeClass("cw-player-on");
    $(".theme-div").removeClass("player-on");
    $(".content-wrapper").addClass("cw-player-on");
    $(".theme-div.active").addClass("player-on");
    player.play();
    setPlayingAudioWidth();
    if(anim_stopped) {
        anim_stopped = false;
        $("#bubble").addClass("clicked");
        run();
    }
}