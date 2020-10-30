// types of jackets I like
let jacket = [{
  name: "TIME TRAVEL"
}, {
  name: "TELEPORTATION"
}, {
  name: "IMMORTALITY"
}, {
  name: "SUPER SPEED"
}, {
  name: "FIND PARKING"
}, {
  name: "INVISIBILITY"
}, {
  name: "TELEPATHY"
}];

let randomIndex;
let animating = false;
let shapes = [];
let imageCounter = 0;
let button;
let cnv;
// let nameInput;

function preload() {

  for (let i = 0; i <= 3; i++) {
    shapes[i] = loadImage(`assets/shape_${i}.JPG`)
  }

}

function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(247, 162, 64);
  textSize(32);
  imageMode(CENTER);
  frameRate (8);


  text("SUPER POWER VENING MACHINE",width/ 11, height / 2);

  // button = createButton("Click to randomize");
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton")

  // nameInput = createInput();
  // nameInput.parent("#inputFields");

}

function draw() {

  if (animating == true) {
    clear();
    image(shapes[imageCounter], width / 2, height / 2);

    if (imageCounter < shapes.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;

  if (jacket[0]) {

    // background(random(200, 255));
    clear();
    randomIndex = int(random(jacket.length));
    image(random(shapes), width / 2, height / 2);
    text(`${jacket[randomIndex].name}`, width / 3.5, height / 2);
    // text(jacket[randomIndex].name + "'s favorite color is" + jacket[randomIndex].color, 50, 50);
    jacket.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left : (", 50, 50);
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
