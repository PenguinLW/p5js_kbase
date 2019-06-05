let w, h, spacer, lis, pic;
function preload() {
	spacer = 22;
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
	lis = ""+
		"Ваше первое js-приложение.\n"+
		"О том как выполняется, где и почему размещается наш код.. А также как этого достичь.\n"+
		"Создаём файл web-страницы"+
		"";
	pic = ""+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/1.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/2.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/3.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/4.jpg"+
		"";
	pic = pic.split("\n");
	for(let i = 0; i <= pic.length-1; i++) {
		pic[i] = loadImage(pic[i]);
	}
	
}
function setup() {
	createCanvas(w, h);
	lis = lis.split("\n");
	lis[0] = new TWrite(lis[0], w/2, spacer);
	lis[1] = new CWrite(lis[1], w-w+spacer, spacer*2);
	lis[2] = new CIWrite(lis[2], w/2, spacer*3, pic[0], w/2, spacer*3);
}
function draw() {
	background(255);
	lis[0].show();
	lis[1].show();
	lis[2].show();
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
class CIWrite {
	constructor(content, t_x, t_y, p, p_x, p_y) {
		this.content = content;
		this.t_x = t_x;
		this.t_y = t_y;
		this.p = p;
		this.p_x = p_x;
		this.p_y = p_y;
	}
	show() {
		textSize(spacer/2);
		textAlign(CENTER);
		textStyle(NORMAL);
		text(this.content, this.t_x, this.t_y);
		image(this.p, this.p_x, this.p_y, spacer*2, spacer*2);
	}
}
