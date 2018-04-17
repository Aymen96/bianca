// Variables

var anim_stopped = true;
var playingAudio = {
    "index": 1,
    "width": 0
};
var playerOn = false;
var playerChrinked = false;
var alphabetisch = true;

var fragen = {
    "f1": {
        "frage": "Welche Professoren haben dich geprägt?",
        "hover_bild": [
            {
                "source": "bea_01.png",
                "text": "Bild unterschrift"
            },
            {
                "source": "bea_01.png",
                "text": "Bild unterschrift"
            }
        ],
        "personen": [
            {
                "name": "Cedric",
                "mp3": "..",
                "repeated": true,
                "text": "kgaddafado",
                "links": [],
                "bilder_folder": "",
                "bilder": [{
                    "source": "bea_01.png",
                    "text": "Bild unterschrift"
                },
                    {
                        "source": "bea_01.png",
                        "text": "Bild unterschrift"
                    }
                ]
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f2": {
        "frage": "Welche Projekte haben dich geprägt?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": "01cedric.mp3"
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f3": {
        "frage": "Welche Vision hattest du als Student von deinem jetztigen Beruf?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f4": {
        "frage": "Wie hast du die Zeit vor dem Studium verbracht?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f5": {
        "frage": "Wie verzögert man sein Diplom?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f6": {
        "frage": "Warum habt ihr an der HfG Karlsruhe studiert?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f7": {
        "frage": "Wie war dein Gefühl direkt nach dem Diplom?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f8": {
        "frage": "Wie hast du dir nach deinem Studium dein Geld verdient?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f9": {
        "frage": "Welche Bedeutung hat das Diplom beim Einstieg in die Berufswelt?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f10": {
        "frage": "Welche Städte haben dich angezogen?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f11": {
        "frage": "Was lief beim Einstieg ins Berufsleben nicht so toll?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f12": {
        "frage": "Welche Erfahungen hast du mit der Selbstständigkeit gemacht?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f13": {
        "frage": "Wie starte ich die Selbstständigkeit?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f14": {
        "frage": "Welche Erfahrungen hast du in der Lehrtätigkeit gesammelt?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f15": {
        "frage": "Wie stellst du dir deine berufliche Zukunft vor?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f16": {
        "frage": "Leben und Arbeiten: Wie schaffst du die Balance?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f17": {
        "frage": "Wie wichtig ist eine Spezialisierung als Designer?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f18": {
        "frage": "Wer zweifelt und kennt Krisen?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f19": {
        "frage": "Wie beschreibt ihr was ihr tut?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f20": {
        "frage": "Wie arbeitest du?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    },

    "f21": {
        "frage": "Was fasziniert euch an eurem Beruf?",
        "personen": [
            {
                "name": "Cedric",
                "mp3": ".."
            },
            {
                "name": "Piero",
                "mp3": ".."
            },
            {
                "name": "Maren",
                "mp3": ".."
            },
            {
                "name": "Masa",
                "mp3": ".."
            },
            {
                "name": "Christian",
                "mp3": ".."
            },
            {
                "name": "Bea",
                "mp3": ".."
            },
            {
                "name": "Chris",
                "mp3": ".."
            },
            {
                "name": "Claudia",
                "mp3": ".."
            },
            {
                "name": "Eva",
                "mp3": ".."
            },
            {
                "name": "Jill",
                "mp3": ".."
            },
            {
                "name": "Oliver",
                "mp3": ".."
            }
        ]
    }
};
var persons = [
    {
        "name": "Bea",
        "year": "2014"
    },
    {
        "name": "Cedric",
        "year": "2011"
    },
    {
        "name": "Chris",
        "year": "2014"
    },
    {
        "name": "Christian",
        "year": "2016"
    },
    {
        "name": "Claudia",
        "year": "2012"
    },
    {
        "name": "Eva",
        "year": "2009"
    },
    {
        "name": "Jill",
        "year": "2014"
    },
    {
        "name": "Maren",
        "year": "2003"
    },
    {
        "name": "Masa",
        "year": "2014"
    },
    {
        "name": "Oliver",
        "year": "2009"
    },
    {
        "name": "Piero",
        "year": "2010"
    }
];

var player;

var current_volume = 0.75;
var volume_width = 100;

// Functions

function showNavlinks() {
    $(".personen-navbar a:not(.special, .sort-btn)").click(function (){
        $(".personen-navbar a:not(.special, .sort-btn)").removeClass("active-select");
        $(this).addClass("active-select");
    });
}
function showPersons() {
    $(".personen-wrapper").empty();
    for( var i = 0; i < persons.length; i++) {

        $(".personen-wrapper").append('<h1 class="person-name-headline" id="' +
            persons[i].name.toLowerCase() +
            '">' +
            persons[i].name + ', ' + persons[i].year +
            '</h1>')
            .append('<div class="theme-div">' +

                // THEME_TITLE
                '<h2 class="theme-title">' +
                'Warum habt ihr an der HfG Karlsruhe studiert?' +
                '</h2>' +

                // NAMES
                '<div class="names hidden fn-' +
                i +
                '">' +
                '</div>' +

                // PLAYER
                '<div class="player hidden">' +
                $(".player.hidden").html() +
                '</div>' +

                '</div>')
            .append('<div class="theme-div">' +

                // THEME_TITLE
                '<h2 class="theme-title">' +
                'Warum habt ihr an der HfG Karlsruhe studiert?' +
                '</h2>' +

                // NAMES
                '<div class="names hidden fn-' +
                i +
                '">' +
                '</div>' +

                // PLAYER
                '<div class="player hidden">' +
                $(".player.hidden").html() +
                '</div>' +

                '</div>');
    }
}

function enableQuestion(themediv) {
    themediv.next(".media-content").addClass("enabled").append($(".media-content-hidden").html())
        .find(".all-audios").append('<div class="player-wrapper">\n' +
        '<div class="progress-wrapper"><div class="progress" id="progress"></div></div>                         ' +
        '   <div class="btn playBtn" id="playBtn"></div>\n' +
        '<div class="btn pauseBtn" id="pauseBtn"></div>\n' +
        '<div class="time-manager">' +
        '<span class="timer" id="timer">0:00</span>' +
        '<span>/</span> ' +
        '<span class="duration" id="duration">0:00</span></div>\n' +
        '<div class="btn volumeBtn" id="volumeBtn"></div>\n' +
        '<span class="track" id="track"></span>\n' +
        '<div id="volume" class="fadeout">\n' +
        '    <div id="barFull" class="bar-audio"></div>\n' +
        '    <div id="barEmpty" class="bar-audio"></div>\n' +
        '  </div>' +
        '</div>');
    $(".persons-list-el").click(function() {
        $(".element-content.opened").empty();
        if($(this).next(".element-content").hasClass("opened")) {
            $(this).next(".element-content").removeClass("opened");
            return;
        }
        $(".element-content").removeClass("opened");
        $(this).next(".element-content").addClass("opened").append($(".persons-list-element-content-hidden").html());
        var images = [
            './assets/img/img1.jpg',
            './assets/img/img2.jpg',
            './assets/img/img3.jpg',
            './assets/img/img4.jpg'
        ];
        var currentIndex = 0;
        $(".half").click(function () {
            if($(this).hasClass("half-left")) {
                currentIndex--;
                if(currentIndex < 0) {
                    currentIndex += images.length ;
                }
            }
            if($(this).hasClass("half-right")) {
                currentIndex++;
                if(currentIndex > 3) {
                    currentIndex -= images.length;
                }
            }
            $(".opened .image img").attr("src", images[currentIndex]);
            fixWidth(currentIndex);
        });
        $(".mehr-hoeren").click(function() {
            $(".personen-navbar").show();
            $(".themen-navbar").hide();
            $(".personen-wrapper").show();
            $(".themen-wrapper").hide();
            $(".special").removeClass("active");
            $(".zu-personen").addClass("active");
            setTimeout(function() {
                $("a[href='#piero']").trigger("click");
                var h = 0;
                $("#piero").prevAll().each(function() {
                    h += $(this).height();
                });
                $('.content-wrapper').animate({
                    scrollTop: h + $(window).height() + 50
                });
            }, 500)
        });
    });
    if(!playerChrinked) {
        bindPlayer();
    } else {
        themediv.next(".media-content.enabled:not(.hidden)").find(".playBtn").click(function() {
            player.pause();
            $(".theme-div.player-chrinked").removeClass("player-chrinked").next(".media-content").removeClass("enabled").empty();
            playerChrinked = false;
            $(".media-content.enabled").empty().removeClass("enabled");
            enableQuestion(themediv);
            bindPlayer();
            player.play();
            playerOn = true;
        });
    }

}
function disableQuestion(themediv) {
    themediv.removeAttr('id').next(".media-content").removeClass("enabled").empty();
}
var imgIndex = 0;
function fixWidth(currentIndex) {
    var width = 0;
    if(currentIndex != 2) {
        width = $(".element-content .image img").width();
    } else {
        width = 330;
    }
    $(".half").width(width/2);
    $(".half-right").css("left", width/2);
}

function calculateWidth(index) {
    var widthFull = 0;
    $(".media-content.enabled:not(.hidden) .audio").each(function() {
        widthFull += $(this).width() * 0.975;
    });
    var widthToPlay = $(".media-content.enabled:not(.hidden) .audio[num='" + index + "']").width() * 96.5 / widthFull;
    var prevAll = 0;
    for(var i = 1; i < index; i++) {
        prevAll += $(".media-content.enabled:not(.hidden) .audio[num='" + i + "']").width();
    }
    $("#progress").css("left", prevAll +5);
    return widthToPlay;
}
function setPlayingAudioWidth() {
    this.playingAudio["width"] = calculateWidth(this.playingAudio["index"]);
}

function bindPlayer() {
    var elms = ['track', 'timer', 'duration', 'progress', 'playBtn', 'pauseBtn','volumeBtn', 'volume', 'barEmpty', 'barFull'];
    elms.forEach(function(elm) {
        window[elm] = document.getElementById(elm);
    });
    player = new Player([
        {
            title: '01_01_Intro',
            file: '01_01_Intro'
        },
        {
            title: '01_02_Intro',
            file: '01_02_Christian'
        },
        {
            title: '01_03_Intro',
            file: '01_03_Chris'
        },
        {
            title: '01_04_Intro',
            file: '01_04_Jill'
        }
    ], window);
// Bind our player controls.
    $("#playBtn").click(function() {
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
    });

    $("#pauseBtn").click(function() {
        $(".theme-div").removeClass("player-on");
        playerOn = false;
        $(".content-wrapper").removeClass("cw-player-on");
        player.pause();
        anim_stopped = true;
    });

    var mute = false;
    $("#volumeBtn").click(function() {
        if(!mute){
            $(this).addClass("mute");
            player.volume(0);
        } else {
            $(this).removeClass("mute");
            player.volume(1);
        }
        mute = !mute;
    });
    $(".media-content:not(.hidden) .audio").click(function() {
        playerOn = true;
        $(".content-wrapper").addClass("cw-player-on");
        $(".theme-div.active").addClass("player-on");
        if(anim_stopped) {
            anim_stopped = false;
            $("#bubble").addClass("clicked");
            run();
        }
        var num = $(this).attr('num');
        playingAudio["index"] = num;
        setPlayingAudioWidth();
        console.log(playingAudio);
        player.skipTo(num-1);
    });

    // Setup the event listeners to enable dragging of volume slider.
    player.barEmpty.addEventListener('click', function(event) {
        var per = event.layerX / parseFloat(player.barEmpty.scrollWidth);
        player.volume(per);
    });
    player.volumi.addEventListener('mouseup', function() {
        window.sliderDown = false;
    });
    player.volumi.addEventListener('touchend', function() {
        window.sliderDown = false;
    });

    var move = function(event) {
        if (window.sliderDown) {
            var x = event.clientX || event.touches[0].clientX;
            var startX = volume_width * 0.05;
            var layerX = x - startX;
            var per = Math.min(1, Math.max(0, layerX / parseFloat(player.barEmpty.scrollWidth)));
            player.volume(per);
            console.log(current_volume);
        }
    };

    player.volumi.addEventListener('mousemove', move);
    player.volumi.addEventListener('touchmove', move);
}
