var headlines = [
    "<h1>Mal schauen \n was kommt.</h1>",
    "<p>Wie Absolventen über ihren Werdegang erzählen.</p>",
    "<h1>Was macht ihr \n ehemaligen \n HfGler heute?</h1>",
    "<h1>Habt ihr nach\n dem Studium\n sofort einen\n Job gefunden?</h1>",
    "<h1>Wer hat sich\n selbstständig\n gemacht?</h1>",
    "<h1>Wohnt ihr\n wirklich alle\n in Berlin?</h1>",
    "<h1>Wer ist\n in Karlsruhe\n geblieben?</h1>",
    "<h1>Wie sieht euer\n Arbeitsalltag\n aus?</h1>",
    "<h1>Was hat euch\n das Studium\n gebracht?</h1>",
    "<h1>Was wolltet\n ihr als Kind\n werden?</h1>",
    "<p>Alle Absolventen verbindet, dass sie an der\n Staatlichen Hochschule für Gestaltung Karlsruhe\n in den Jahren zwischen 2003 und 2016 \n als Diplom-Kommunikations-/ GrafikdesignerInnen\n abgeschlossen haben.</p>"
];
var headline_change_delay = 4000;
var current_headline = 0;


function addHeadline() {
    var self = $(".landingpage .headline-wrapper");
    self.fadeOut();
    setTimeout(function() {
        self.empty().append(headlines[current_headline++]).fadeIn();;
        center_vertically($(".headline-wrapper"));
    },500)
}
function updateCurrentHeadline() {
    if(current_headline>= headlines.length) {
        current_headline %= headlines.length;
    }
}

function run_headline_effect() {
    setTimeout(function() {
        if(inLandingPage){
            addHeadline();
            updateCurrentHeadline();
            run_headline_effect();
        }
    }, headline_change_delay);
}

function center_vertically(element) {
    var h = 0 - element.height();
    h = h / 2 - 50;
    element.css("margin-top", h + "px");
}
$(".choice").fadeIn(1500);
$(".first-choice").click(function() {
    inLandingPage = false;
    $(".landingpage").fadeOut(500);
});
$(".second-choice").click(function() {
    inLandingPage = false;
    $(".landingpage").fadeOut(500);
    $(".zu-personen").trigger("click");
});
addHeadline();
updateCurrentHeadline();
run_headline_effect();