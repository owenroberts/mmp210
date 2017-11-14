// video
var cat;
var videoIsPlaying = false;
function setup() { 
    createCanvas(640, 480);
    cat = createVideo("cat.mp4");
    
}
function draw() {

}
function mouseClicked() {
    if (!videoIsPlaying)
        cat.play();
    else 
        cat.pause();
    videoIsPlaying = !videoIsPlaying;
}