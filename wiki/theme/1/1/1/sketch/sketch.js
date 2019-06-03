let w, h, spacer;
function preload() {
	w = 400;
	h = 400;
	spacer = 25;
}
function setup() {
	createCanvas(w, h);
	textAlign(CENTER, CENTER);

}
function draw() {
	background(220);
	text("CENTER CER", w/2, h/2, 70, 70);
}
function windowResized() {
	
}
