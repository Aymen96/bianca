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
var inLandingPage = true;
var imgIndex = 0;
// JSON DATA
var data;

// Functions

function showNavlinks() {
    $(".personen-navbar a.navlink:not(.special, .sort-btn)").remove();
    var str = "";
    for(var i = 0; i < persons.length; i++) {
        str += '<a class="navlink ' +
            '" href="#' + persons[i].name.toLowerCase() + '">' +
            persons[i].name +
            ', ' +
            persons[i].year +
            '</a>';
    }
    $(".personen-navbar .zu-personen").after(str);
    $(".personen-navbar a.navlink:not(.special, .sort-btn)").first().addClass("active-select");
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
    var media = themediv.next(".media-content");
    media.addClass("enabled").append($(".media-content-hidden").html())
        .find(".all-audios").append('<div class="player-wrapper">' +
        '<div class="progress-wrapper"><div class="progress" id="progress"></div></div>                         ' +
        '   <div class="btn playBtn" id="playBtn"></div>' +
        '<div class="btn pauseBtn" id="pauseBtn"></div>' +
        '<div class="time-manager">' +
        '<span class="timer" id="timer">0:00</span>' +
        '<span>/</span> ' +
        '<span class="duration" id="duration">0:00</span></div>' +
        '<div class="btn volumeBtn" id="volumeBtn"></div>' +
        '<span class="track" id="track"></span>' +
        '<div id="volume" class="fadeout">' +
        '    <input type="range" id="range" value="0">' +
        '  </div>' +
        '</div>');
    fill_persons_table(media ,themediv.attr("theme"));
    fill_persons_list(media ,themediv.attr("theme"));
    // TOGGLE content on click
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
            reinit();
            themediv.trigger("click");
            play();
        });
    }

}
function disableQuestion(themediv) {
    themediv.removeAttr('id').next(".media-content").removeClass("enabled").empty();
}

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
        widthFull += $(this).width() * 0.95;
    });
    var widthToPlay = $(".media-content.enabled:not(.hidden) .audio[num='" + index + "']").width() * 90 / widthFull;
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
    var elms = ['track', 'timer', 'duration', 'progress', 'playBtn', 'pauseBtn','volumeBtn', 'volume', 'range'];
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
        play();
        $("canvas").fadeIn(2000);
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
        player.pause();
        play();
        var num = $(this).attr('num');
        playingAudio["index"] = num;
        setPlayingAudioWidth();
        player.skipTo(num-1);
    });

    // Setup the event listeners to enable dragging of volume slider.
    player.range.onchange = function() {
        player.volume(player.range.value / 100);
    }
}


// Load JSON Files
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './assets/data/data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function init() {
    loadJSON(function(response) {
        // Parse JSON string into object
        data = JSON.parse(response);
    });
}
init();

// ******************************************** FILL WITH CONTENT ********************************************

/*
    Fill questions in Themen-Katalog
 */
function fill_questions() {
    $.each(data, function(index, question) {
        // Traverse JSON
        var int_index = parseInt(index.replace("q",""));
        var b = parseInt(question["category"]) -1;
        var category_el = $(".category[category='" + b  + "']");

        // Collect HTML
        var mq1 = '<div class="mq1">' +
            // THEME_TITLE
            '<h2 class="theme-title">' +
            question["question"] +
            '</h2>' +
            '</div>';
        var mq2 = '<div class="mq2">';
            question["hover_images"].forEach(function(value) {
                mq2 += '<div class="one-image-wrapper">' +
                    '<img src="./assets/img/img-hover/' + value["source"] + '" class="theme-image">' +
                    '<div class="theme-image-text">' + value["text"] + '</div>' +
                    '</div>';
            });
            mq2 += '</div>' ;
            // THREE TIMES
            var mq = '<div class="mq">' +
                mq1 + mq2 +
                '</div>' +
                '<div class="mq">' +
                mq1 + mq2 +
                '</div>' +
                '<div class="mq">' +
                mq1 + mq2 +
                '</div>' ;
        var html =
            '<div class="theme-div" id="theme' + int_index + '" theme="' + int_index + '">' +
            '<div class="marquee">' +
            mq +
            '</div>' +
            '</div>' +
            '<div class="media-content"></div>';

        // Append in the right category
        category_el.find(".themen-wrapper").append(html);
    });
}
/*
    Fill persons list in media content
 */
function fill_persons_list(media, theme) {
    $.each(data["q" + theme]["persons"], function(index, value) {
        if(value["name"] !== "Intro") {
            media.find(".persons-list").append('<div class="persons-list-el" person="' + index + '">' + value["name"] + '</div><div class="element-content"></div>');
        }
    });
}

function fill_persons_table(media, theme) {
    //Collect HTML
    var row_one = '<div class="names-row row-one">';
    var bars_row = '<div class="bars-row">';
    var row_two = '<div class="names-row row-two">';
    var pair = true;
    var i = 1;
    $.each(data["q" + theme]["persons"], function(index, value) {
        if(pair){
            row_one += '<div class="names-col filled audio" num="' + i + '">' + value["name"] + '</div>';
            row_two += '<div class="names-col"></div>';
        } else {
            row_one += '<div class="names-col"></div>';
            row_two += '<div class="names-col filled audio" num="' + i + '">' + value["name"] + '</div>';
        }
        pair = !pair;
        i++;
        bars_row += '<div class="bar bars-col"><span></span></div>';
    });
    row_one += '</div>';
    row_two += '</div>';
    bars_row += '</div>';
    var html = row_one +
        bars_row +
        row_two;

    // Append HTML
    media.find(".all-audios .names-table").append(html);
}