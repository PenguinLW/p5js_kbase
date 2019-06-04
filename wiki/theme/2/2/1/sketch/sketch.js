let w, h, spacer, lis;
function preload() {
	spacer = 22;
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
	lis = ""+
		"Ваше первое js-приложение.\n"+
		"О том как выполняется, где и почему размещается наш код.. А также как этого достичь."+
		"";
}
function setup() {
	createCanvas(w, h);
	lis = lis.split("\n");
	lis[0] = new TWrite(lis[0], w/2, spacer);
	lis[1] = new CWrite(lis[1], w-w+spacer, spacer*2);
}
function draw() {
	background(255);
	lis[0].show();
	lis[1].show();
	
}
function windowResized() {
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
class TWrite {
	constructor(content, x, y) {
		this.content = content;
		this.x = x;
		this.y = y;
	}
	show() {
		textSize(spacer);
		textAlign(CENTER);
		textStyle(NORMAL);
		text(this.content, this.x, this.y);
	}
}
class CWrite {
	constructor(content, x, y) {
		this.content = content;
		this.x = x;
		this.y = y;
	}
	show() {
		textSize(spacer/2);
		textAlign(LEFT);
		textStyle(NORMAL);
		text(this.content, this.x, this.y);
	}
}
