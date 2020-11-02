let array = [];
let strokeWidth = 5;
let colorPicker;
let colorPicker1;
let button;
// let controlDiv;
let gf;
let gb;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  strokeWeight(5);

  colorPicker = createColorPicker('#ed225d');
  colorPicker.parent("controls")

  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.parent("controls")

  gf = createGraphics(width, height);
  gb = createGraphics(width, height);

  // button = createButton("hide");
  // button.mousePressed(toggleVis);
  //
  // controlDiv = select("#controls");

}


function draw() {

  gb.background(colorPicker1.color());
  // background(colorPicker1.color());
  gf.stroke(colorPicker.color());

  // background(220, 5);
  gf.strokeWeight(strokeWidth);

  if (mouseIsPressed) {
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // stroke(map(mouseX, 0, 600, 0, 255, true))

    //Symmetric drawing
    // ellipse(mouseX, mouseY, 4, 4);

    // ellipse(mouseX, height - mouseY, 4, 4);
    // ellipse(width - mouseX, mouseY, 4, 4);
    // ellipse(width - mouseX, height - mouseY, 4, 4);

    // array.push([mouseX, mouseY]);

    gf.line(mouseX, mouseY, pmouseX, pmouseY);
    gf.line(width - mouseX, mouseY, width - pmouseX, pmouseY);

  }

  image(gb, 0, 0);
  image(gf, 0, 0);

}

// function toggleVis() {
//   controlDiv.hide();
// }

function keyTyped() {

  if (key === `s`) {
    //save this image
    saveCanvas(`fileName`, `png`);
  } else if (key === 'c') {
    // clear the image
    background(255);
    clear();

    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();

  }

  return false;
}
