let w, h, spacer, lis, pic;
function preload() {
	spacer = 22;
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
	lis = ""+
		"Ваше первое js-приложение.\n"+
		"О том как выполняется, где и почему размещается наш код.. А также как этого достичь.\n"+
		"Создаём файл web-страницы содержащий приблизительно следующий исходный код:\n"+
		"По устоявшимся традициям, в теге \"head\" указаны теги \"script\", которые отвечают за подключение к web-странице файлов исходного\n"+
		"кода javascript (имеют расширение .js) - как собственных сценариев, так и js-библиотек.\n"+
		"При помощи тега \"<script src=\"../script/my_app.js\"></script>\" мы сумеем подключить к нашей web-странице файл javascript, находящийся в директории \"script\",\n"+
		"являющейся параллельной к директории \"index\" - с содержащейся в ней web-страницей:\n"+
		"При ином расположении директорий и файлов в Вашем проекте относительная адресация может отличаться."+
		"";
	pic = ""+
		"https://kovalsky95.github.io/p5js_kbase/wiki/theme/1/1/1/resources/theme/index_html.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/wiki/theme/1/1/1/resources/theme/view_dir.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/3.jpg\n"+
		"https://kovalsky95.github.io/p5js_kbase/resources/wiki/4.jpg"+
		"";
	pic = pic.split("\n");
	for(let i = 0; i <= pic.length-1; i++) {
		pic[i] = loadImage(pic[i]);
	}
}
function setup() {
	let tx, ty, px, py;
	createCanvas(w, h);
	lis = lis.split("\n");
	lis[0] = new TWrite(lis[0]);
	lis[1] = new CWrite(lis[1]);
	lis[2] = new CIWrite(lis[2], pic[0]);
	lis[3] = new CWrite(lis[3]);
	lis[4] = new CWrite(lis[4]);
	lis[5] = new CWrite(lis[5]);
	lis[6] = new CIWrite(lis[6], pic[1]);
	lis[7] = new CWrite(lis[7]);
	tx = w/2;
	px = tx - spacer*10;
	ty = py = 0;
	for(let i = 0; i <= lis.length-1; i++) {
		if(lis[i].isContT()) {
			ty += spacer;
			lis[i].setPosition(tx, ty);
		}
		else if(lis[i].isContP()) {
			ty += spacer;
			py += ty+spacer;
			lis[i].setPosition(tx, ty, px, py);
			ty += spacer*20;
		}
	}
	resizeCanvas(w, ty+spacer*2)
}
function draw() {
	background(255);
	for(let i = 0; i <= lis.length-1; i++) {
		lis[i].show();
	}
}
function windowResized() {
	w = windowWidth-spacer/2;
	h = windowHeight-spacer/2;
}
class TWrite {
	constructor(content) {
		this.content = content;
		this.t_x = 0;
		this.t_y = 0;
	}
	isContT() {
		return !false;
	}
	isContP() {
		return false;
	}
	setPosition(t_x, t_y) {
		this.t_x = t_x;
		this.t_y = t_y;
	}
	show() {
		textSize(spacer);
		textAlign(CENTER);
		textStyle(NORMAL);
		text(this.content, this.t_x+spacer, this.t_y+spacer);
	}
}
class CWrite {
	constructor(content) {
		this.content = content;
		this.t_x = 0;
		this.t_y = 0;
	}
	isContT() {
		return !false;
	}
	isContP() {
		return false;
	}
	setPosition(t_x, t_y) {
		this.t_x = t_x;
		this.t_y = t_y;	
	}
	show() {
		textSize(spacer/2);
		textAlign(CENTER);
		textStyle(NORMAL);
		text(this.content, this.t_x+spacer, this.t_y+spacer);
	}
}
class CIWrite {
	constructor(content, p) {
		this.content = content;
		this.t_x = 0;
		this.t_y = 0;
		this.p = p;
		this.p_x = 0;
		this.p_y = 0;
	}
	isContT() {
		return false;
	}
	isContP() {
		return !false;
	}
	setPosition(t_x, t_y, p_x, p_y) {
		this.t_x = t_x;
		this.t_y = t_y;
		this.p_x = p_x;
		this.p_y = p_y;
	}
	show() {
		textSize(spacer/2);
		textAlign(CENTER);
		textStyle(NORMAL);
		text(this.content, this.t_x+spacer, this.t_y+spacer);
		image(this.p, this.p_x, this.p_y, spacer*25, spacer*20);
	}
}
