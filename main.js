function preload() {}

function setup() {
    canvas = createCanvas(600,500);
    canvas.position(100,130);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
    circle(70,80,100);
    fill("red"); 
    circle(540,80,100);
}

function take_snapshot() {
    save(canvas);
}
