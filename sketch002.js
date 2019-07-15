let canvas;
let button;
let bgColor;
let slider;

function setup() {
	canvas = createCanvas(200, 200);
	//canvas.position(400, 20);
	//canvas.mouseOver(overParagraph);
  	//canvas.mouseOut(outParagraph);
	canvas.mousePressed(changeColor);

	bgColor = color(200);
	
	button = createButton("Go!");
	createP("");
	
	//set callback function for mousePressed to changeColor
	button.mousePressed(changeColor);
	slider = createSlider(10,100, 47);
}

function changeColor() {
	bgColor = color(random(255));
}

function draw() {
    background(bgColor);
	fill(255, 0, 175);
  	ellipse(100, 100, slider.value(), slider.value());
}
