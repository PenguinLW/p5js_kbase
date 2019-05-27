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
	
	wlinks = new p5(sketches[0],"wiki_links");
	
	mviewm = new p5(sketches[1],"user_page");
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
	mview = new p5(sketches[1], "user_page");//createP(""+lnk).id("frame_tmp").parent("user_page");
//	mviewm.remove();//wlinks.remove();
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
			links = "1\n"+
				"2\n"+
				"3\n"+
				"4\n"+
				"5\n"+
				"6\n"+
				"7"+
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
			mW = mW/7;
			mH = mH-mS;
			sk.resizeCanvas(mW, mH);
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
				sk.image(this.lpl, this.x, this.y, this.w, this.h);
			}
		}
	}
}
function initMV(ch) {
	switch(ch) {
		case 0:
			return scene1();
		break;
		case 1:
			return scene2();
		break;
		default:
			
	}
}
