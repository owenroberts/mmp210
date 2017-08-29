var cat;
var playing = false;
function setup() {
    createCanvas(720, 360);
    cat = createVideo("cat.mp4");
}

function mouseClicked() {
    if (playing) cat.pause();
    else cat.loop();
    playing = !playing;
}