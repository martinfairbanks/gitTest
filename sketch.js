var x = 0;

function setup() {
    createCanvas(640, 480);
}

function draw() {
    changeBackground();
    if (mouseIsPressed) {
        fill(255,0,255);
    } else {
        fill(0,255,0);
    }

    ellipse(mouseX, mouseY, 80, 80);
}

function changeBackground() {
	background(200);
	line(100,100,200,200);
	ellipse(x,height/2,20,20);
	x = x + 1;

	drawingContext.shadowOffsetX = 5;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = "black";
	ellipse(width/2,height/2,50,50);
}
