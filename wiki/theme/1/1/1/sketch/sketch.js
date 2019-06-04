let w, h, spacer;
function preload() {
	spacer = 25;
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
function setup() {
//	createCanvas(w, h);
	background(255);
	textSize(22);
	textAlign(CENTER);
	textStyle(NORMAL);
	createDiv("Ваше первое js-приложение").id("m_view").position(0, 0);
	noCanvas();
}
function draw() {
//	background(255);
}
function windowResized() {
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
