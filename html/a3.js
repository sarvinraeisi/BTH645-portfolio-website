var rainDrop = [];
let img;
let music;
// array of texts to choose from
let texts = [
  "비도 오고 그래서니 생각이 났어",
  "Because it was raining I thought of you",
  "چون بارون می اومد به تو فکر کردم",
  "Çünkü yağmur yağıyordu Seni düşündüm",
  "因为下雨了，我想起了你",
]; 
// variable to store the currently displayed text
let displayedText = ""; 
// counter variable to keep track of the current index
let counter = 0; 

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvas-container");

  // initialize the rain drop array with 100 rain drops 
  for (var i = 0; i < 100; i++) {
    rainDrop[i] = new Rain();
  }
}

function preload() {
  // load the background image and the music
  img = loadImage("city.jpg");
  music = loadSound("rain.mp3");
}

function draw() {
  background(0);

  // display the background image
  image(img, 0, 0, width, height);

  // display the rain and update the rain drop position
  for (var i = 0; i < 100; i++) {
    rainDrop[i].display();
    rainDrop[i].update();
  }
  // display the currently displayed text
  textAlign(CENTER);
  textSize(12);
  text(displayedText, width / 2, height / 2);
}

function Rain() {
  // rain randomly falls from the top of the canvas
  this.x = random(0, width);
  this.y = random(0, -height);

  // display the rain drop
  this.display = function () {
    noStroke();
    fill("#abdbe3");
    // rain drop is an ellipse with angle
    ellipse(this.x, this.y, 1, 4);
  };

  // update the rain drop position
  this.update = function () {
    this.speed = 7;
    this.y = this.y + this.speed;
    // if the rain drop reaches the bottom of the canvas, it will be reset to the top
    if (this.y > height) {
      this.y = random(0, -height);
    }
  };
}

function keyPressed() {
  // keyCode 32 is for the spacebar
  if (keyCode === 32) {
    music.loop();
  }
  // keyCode 13 is for the enter key
  if (keyCode === 13) {
    music.stop();
  }
  // keyCode 27 is for the escape key
  if (keyCode === 27) {
    displayedText = "";
  }
}

function mousePressed() {
  // detect left mouse button press
  if (mouseButton === LEFT) {
    // display the current text
    displayedText = texts[counter];
    counter++;
    // reset the counter if it reaches the end of the array
    if (counter >= texts.length) {
      counter = 0;
    }
  }
}
