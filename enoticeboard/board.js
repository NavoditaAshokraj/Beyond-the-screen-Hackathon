// sliding between sections

var index = 1;
var main = document.getElementById('main');
var positions = [100, 0, -100]

function community() {  // moves to first section
    var current = positions[index];

    if (index !== 0) {
        main.animate(
            [
                { transform: "translatex(" + current + ")" },
                { transform: "translatex(100%)" },
            ],
            {
                duration: 1000,
                fill: 'forwards'
            },
        );
        index = 0;
    }
}
function home() { // moves to second section
    var current = positions[index];

    if (index !== 1) {
        main.animate(
            [
                { transform: "translatex(" + current + "%)" },
                { transform: "translatex(0%)" },
            ],
            {
                duration: 1000,
                fill: 'forwards'
            },
        );
        index = 1;
    }
}
function survey() {
    var current = positions[index];

    if (index !== 2) {
        main.animate(
            [
                { transform: "translatex(" + current + "%)" },
                { transform: "translatex(-100%)" },
            ],
            {
                duration: 1000,
                fill: 'forwards'
            },
        );
        index = 2;
    }
}

// selecting surveys

var surveys = ['zero','first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
var survey_index = 0;

function select(given) {
    var given_id = surveys[given];
    var summary = document.getElementsByClassName(given_id)[0];
    var information = document.getElementsByClassName(given_id)[1];

    summary.style.display = 'block';
    information.style.display = 'block';
    if (survey_index == 0) { // remove previous information
        var current = document.getElementsByClassName('zero')[0];
        current.style.display = 'none';
        var current_info = document.getElementsByClassName('zero')[1];
        current_info.style.display = 'none';
    }
    else if (survey_index == given) {
        // literally nothing happens
    }
    else {
        var current_id = surveys[survey_index];
        var current_summ = document.getElementsByClassName(current_id)[0];
        var current_info = document.getElementsByClassName(current_id)[1];
        current_summ.style.display = 'none';
        current_info.style.display = 'none';
    }
    survey_index = given;
}

// showing community event details

var events = ['first_event', 'second_event', 'third_event', 'fourth_event', 'fifth_event', 'sixth_event'];
var main_events = ['popular1', 'popular2', 'popular3', 'recent1', 'recent2', 'recent3', 'national'];
var background = document.getElementById('modal');
var background2 = document.getElementById('modal2');

function show_event(given) {
    for (var x = 0; x < events.length; x++) { // reset animations
        var selected = document.getElementsByClassName(events[x])[0];
        selected.style.display = 'none';
    }
    var chosen = events[given];
    var modal_content = document.getElementsByClassName(chosen)[0];
    background.style.display = 'block';
    modal_content.style.display = 'block';
}

function show_main(given) {
    for (var x = 0; x < main_events.length; x++) { // reset animations
        var selected = document.getElementsByClassName(main_events[x])[0];
        selected.style.display = 'none';
    }
    var chosen = main_events[given];
    var modal_content = document.getElementsByClassName(chosen)[0];
    background2.style.display = 'block';
    modal_content.style.display = 'block';
}


// destroy modal when clicking outside


window.onclick = function(event) {
    if (event.target == background) {
      background.style.display = "none";
    }
    else if (event.target == background2) {
        background2.style.display = 'none';
    }
  }
