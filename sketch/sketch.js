//size of html&canvas content
let spacer, mW, mH, mS;
//sketches instance (list, el)
let sketches, wlinks, mview;
//el-html manipulate
let contents;
function preload() {
	sketches = [];
	contents = [];
	spacer = 25;
	mS = (windowWidth-windowHeight)/10-spacer;
	mW = windowWidth-mS;
	mH = windowHeight-mS;
}
function setup() {
//init mainc
	sketches.push(initWL());
	sketches.push(initMV(0));
//set mainc
	initStyle();
	
	wlinks = new p5(sketches[0], "wiki_links");
	
	mviewm = new p5(sketches[1], "user_page");
	noCanvas();
//end set mainc
}
function draw() {
  
}
function windowResized() {
//  resizeCanvas(windowWidth,windowHeight);
	mW = windowWidth-mS;
	mH = windowHeight-mS;
/*
	contents[0].css({
		"width":""+mW+"",
		"height":""+mH+"",
	});
*/
	contents[1]
		.style("width",""+mW+"")
		.style("height",""+mH+"");
}
function showContent(index, lnk) {
	console.log(index, lnk);
	sketches[1] = initMV(index);
	mviewm.remove();
	mviewm = new p5(sketches[1], "user_page");//createP(""+lnk).id("frame_tmp").parent("user_page");
//	wlinks.remove();
}
function initStyle() {
//	$("body).css({"margin":"auto"});
	contents.push($("body"));
	contents[0].attr("id","content");
	contents[0].css({
		"width":""+windowWidth+"",
		"height":""+windowHeight+"",
//		"display":"table",
//		"margin":"0 auto",
		"display":"flex",
		"align-items":"center",
		"justify-content":"center"
	});
	
	contents.push(createDiv(""));
	contents[1].id("main_view").parent("content")
		.style("width", ""+mW+"")
		.style("height", ""+mH+"")
		.style("display", "flex")
		.style("justify-content", "center")
		.style("align-items", "center");
	
	contents.push(createDiv(""));
	contents[2].id("wiki_links").position(0,0).parent("main_view");
	
	contents.push(createDiv(""));
	contents[3].id("user_page").position(mW/7,0).parent("main_view");
}
function initWL() {
	return function(sk) {
		let wlinks, links, ptl;
		let w, h;
		sk.preload = function() {
			wlinks = "";
			links = "Введение в JS\n"+
				"Возможности p5.js\n"+
				"Интересные примеры\n"+
				"Полезные ресурсы"+
				"";
			links = links.split("\n");
			for(let i = 0; i <= links.length-1; i++) {
				wlinks += "https://kovalsky95.github.io/p5js_kbase/resources/"+(i+1)+".jpg\n";
			}
			wlinks = wlinks.substring(0, wlinks.length-1).split("\n");
			for(let i = 0; i <= links.length-1; i++) {
				wlinks[i] = sk.loadImage(wlinks[i]);
			}
			ptl = [];
			w = mW/7;
			h = mH-mS;
		}
		sk.setup = function() {
			sk.createCanvas(w, h);
			let lis = sk.locatedB(0, h, wlinks.length);
			for(let i = 0; i <= wlinks.length-1; i++) {
				ptl.push(new PLink(i, lis[0]));
			}
			for(let i = 0; i <= ptl.length-1; i++) {
				ptl[i].setPosition(mS/2,lis[1][i]);
			}
		}
		sk.draw = function() {
			sk.background(255);
			for(let i = 0; i <= ptl.length-1; i++) {
				ptl[i].show();
			}
		}
		sk.windowResized = function() {
			w = mW/7;
			h = mH-mS;
			sk.resizeCanvas(w, h);
		}
		sk.mousePressed = function() {
			for(let i = 0; i <= ptl.length-1; i++) {
				ptl[i].clicked(sk.mouseX, sk.mouseY);
			}
		}
		sk.goLink = function(index, lnk) {
			showContent(index, lnk);
		}
		sk.locatedB = function(s_point, all_area, c_el) {
			let size_el, step_y, lis;
			
			lis = [];
			step_y = all_area/c_el;
			size_el = step_y-2;
			
			lis.push(s_point);
			for(let i = 1; i <= c_el-1; i++) {
				lis.push(lis[i-1]+step_y);
			}
			return [size_el, lis];
		}
		class PLink {
			constructor(index, h) {
				this.index = index;
				this.x = 0;
				this.y = 0;
				this.w = w-mS;
				this.h = h;
				this.lpl = wlinks[this.index];
			}
			setPosition(x, y) {
				this.x = x;
				this.y = y;
			}
			clicked(mX, mY) {
				if((mX >= this.x && mX <= this.x+this.w))
					if(mY >= this.y && mY <= this.y+this.h)
						sk.goLink(this.index, links[this.index]);
			}
			show() {
				sk.text(links[this.index], this.x+mS, this.y+mS);
				sk.image(this.lpl, this.x+mS, this.y+mS, this.w/2, this.h/2);
			}
		}
	}
}
function initMV(ch) {
	let fn;
	switch(ch) {
		case 0:
			return function(sk) {
				let w, h;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
				}
				sk.setup = function() {
					sk.createCanvas(w, h);
				}
				sk.draw = function() {
					sk.background(255);
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
			}
		break;
		case 1:
			return function(sk) {
				let w, h;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
				}
				sk.setup = function() {
					sk.createCanvas(w, h);
				}
				sk.draw = function() {
					sk.background(255);
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
			}
		break;
		case 2:
			return function(sk) {
				let w, h;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
				}
				sk.setup = function() {
					sk.createCanvas(w, h);
				}
				sk.draw = function() {
					sk.background(225);
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
			}
		break;
		case 3:
			return function(sk) {
				let w, h, links;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
					links = "https://ru.wikipedia.org/w/index.php?title=Метод_проектов&stable=1\n"+
						"https://web.archive.org/web/20080503101731/http://vio.fio.ru/vio_01/Article_0_1.htm\n"+
						"http://p5js.org/es/get-started/\n"+
						"https://github.com/processing/p5.js/wiki/Transici%C3%B3n-desde-Processing\n"+
						"http://p5js.org/es/reference/\n"+
						"http://p5js.org/es/reference/#group-DOM\n"+
						"http://p5js.org/es/examples/instance-mode-instantiation.html\n"+
						"https://github.com/processing/p5.js/wiki/Modos-Global-e-Instance\n"+
						"https://p5js.org/reference/#/p5.Element/parent\n"+
						"https://p5js.org/reference/#/p5/createButton\n"+
						"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array\n"+
						"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map\n"+
						"https://p5js.org/examples/image-load-and-display-image.html\n"+
						"https://p5js.org/reference/#/p5.Element/size\n"+
						"https://p5js.org/examples/image-create-image.html\n"+
						"https://p5js.org/reference/#/p5/image\n"+
						"https://discourse.processing.org/t/trying-to-play-one-random-video-after-another-in-one-screen/11418/5\n"+
						"https://github.com/processing/p5.js/issues/1373\n"+
						"https://eparraaravena.github.io/clase-p5-1/referencias.html\n"+
						"https://pages.github.com/\n"+
						"https://www.w3schools.com/howto/howto_css_center_website.asp\n"+
						"https://github.com/processing/p5.js/wiki/Positioning-your-canvas\n"+
						"https://github.com/processing/p5.js/issues/879\n"+
						"https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element\n"+
						"https://github.com/processing/p5.js/issues/1014\n"+
						"https://p5js.org/reference/#/p5.Element/parent\n"+
						"https://p5js.org/reference/#/p5/text"+
						"";
				}
				sk.setup = function() {
					sk.createCanvas(w, h);
				}
				sk.draw = function() {
					sk.background(225);
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
			}
		break;
		default:
			
	}
}
