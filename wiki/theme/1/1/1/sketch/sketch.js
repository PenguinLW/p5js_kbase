let w, h, spacer;
function preload() {
	spacer = 22;
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
function setup() {
	createCanvas(w, h);
	textSize(spacer);
	textAlign(CENTER);
	textStyle(NORMAL);
}
function draw() {
	background(255);
	text("Ваше первое js-приложение", w/2, spacer);
}
function windowResized() {
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
