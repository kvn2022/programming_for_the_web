let sound;
let amp;

function preload() {
    sound = loadSound('./believe.mp3');
    button = createButton("play");
  button.mousePressed(togglePlaying);
  background(0)
}

function setup() {
    createCanvas(400, 400);

    amp = new p5.Amplitude();
}

function draw() {
    background(102, 255, 153);

    let level = amp.getLevel();

    let size = map(level, 0, 1, 0, width / 2);

   fill(255, 0, 255);
   strokeWeight(3);
    ellipse(200, 200, size *10, size *10);
}

function togglePlaying() {
    if (!sound.isPlaying()) {
      sound.play();
      sound.setVolume(0.3);
      button.html("pause");
    } else {
      sound.pause();
      button.html("play");
    }
  
  }