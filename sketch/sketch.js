//size of html&canvas content
let spacer, mW, mH, mS;
//sketches instance (list, el)
let sketches, mview;
//el-html manipulate
let contents;
function preload() {
	sketches = [];
	contents = [];
	spacer = 25;
//	(1920, 976);
	mS = (windowWidth-windowHeight)/10-spacer;
	mW = windowWidth-mS;
	mH = windowHeight-mS;
}
function setup() {
//init mainc
	sketches.push(initWL());
	sketches.push(initMV(0, "Введение в JS"));
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
	mW = windowWidth-mS;
	mH = windowHeight-mS;
}
function showContent(index, lnk) {
	sketches[1] = initMV(index, lnk);
	mviewm.remove();
	mviewm = new p5(sketches[1], "user_page");
}
function initStyle() {
	contents.push($("body"));
	contents[0].attr("id","content");
	contents[0].css({
		"display":"flex",
		"align-items":"center",
		"justify-content":"center"
	});
	
	contents.push(createDiv(""));
	contents[1].id("main_view").parent("content")
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
		let links, ptl;
		let w, h;
		sk.preload = function() {
			wlinks = "";
			links = "Введение в JS\n"+
				"Возможности p5.js\n"+
				"Интересные примеры\n"+
				"Полезные ресурсы"+
				"";
			links = links.split("\n");
			ptl = [];
			w = mW/7;
			h = mH-mS;
		}
		sk.setup = function() {
			sk.createCanvas(w, h)
				.style("display", "flex")
				.style("justify-content", "center")
				.style("align-items", "center");
			let lis = sk.locatedB(2, h, links.length);
			for(let i = 0; i <= links.length-1; i++) {
				ptl.push(new PLink(i, lis[0]));
			}
			for(let i = 0; i <= ptl.length-1; i++) {
				ptl[i].setPosition(mS/2, lis[1][i]);
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
			}
			setPosition(x, y) {
				this.x = x;
				this.y = y;
			}
			clicked(mX, mY) {
				if((mX >= this.x && mX <= this.x+this.w)) {
					if(mY >= this.y && mY <= this.y+this.h) {
						let or_y;
						sk.goLink(this.index, links[this.index]);
						or_y = this.y;
						for(let i = 25; i >= 0; i--) {
							this.y += i;
							sk.text(links[this.index], this.x+mS, this.y+mS, this.w/2, this.h/2);
							alert("re_done");
						}
						this.y = or_y;
						sk.text(links[this.index], this.x+mS, this.y+mS, this.w/2, this.h/2);
					}
				}
			}
			show() {
				sk.textSize(22);
				sk.textAlign(CENTER);
				sk.textStyle(BOLD);
				sk.text(links[this.index], this.x+mS, this.y+mS, this.w/2, this.h/2);
			}
		}
	}
}
function initMV(ch, title) {
	let fn;
	switch(ch) {
		case 0:
			return function(sk) {
				let w, h, lis, ho, frame_tmp, flag, or_s;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
					ho = [];
					flag = false;
					lis = [];
					lis.push("Как используется JS?");
					lis.push(["Пошаговое описание создания js-приложения"]);
					lis.push("Переменные");
					lis.push(["Синтаксис объявления переменных и констант", "Тип данных", "Некоторые \"уловки\" для приведения типов", "Структуры данных"]);
					lis.push("Операторы языка JS");
					lis.push(["Базовые", "Логические"]);
					lis.push("Управляющие операторы языка JS");
					lis.push(["Разветвляющийся алгоритм", "Циклический алгоритм"]);
				}
				sk.setup = function() {
					let lis_c;
					sk.createCanvas(w, h);
					or_s = sk.textSize();
					for(let i = 0, k = 1; i <= lis.length-2; i+=2) {
						ho.push(new KTheme(lis[i], lis[i+1], k));
						k++;
					}
					lis_c = sk.locateT(mS-mS/2, h-mS*2, ho.length);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].setPosition(mS, lis_c[1][i], lis_c[0]);
					}
				}
				sk.draw = function() {
					sk.background(255);
					sk.textSize(22);
					sk.textAlign(CENTER);
					sk.textStyle(BOLD);
					sk.text(title, w/2, h-h+mS);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].show();
					}
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
				sk.locateT = function(s_point, all_area, count_el) {
					let size_el, step_y, lis;
					lis = [];
					step_y = all_area/count_el;
					size_el = step_y-2;
					
					lis.push(s_point);
					for(let i = 1; i <= count_el-1; i++) {
						lis.push(lis[i-1]+step_y);
					}
					return [size_el, lis];
				}
				sk.mousePressed = function() {
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].clicked(sk.mouseX, sk.mouseY);
					}
				}
				sk.goLink = function(title, link) {
					if(!flag) {
						flag = !flag;
						frame_tmp = createElement(
								"div",
								"<table><tr>"+
									"<td>"+
										"<iframe frameBorder=\"0\" width=\""+(mW-mS*2)+"\" height=\""+(mH-mS*2)+"\" src=\""+link+"\"></iframe>"+
									"</td>"+
									"<td style=\"vertical-align:top;\">"+
										"<img width=\""+(mS/2)+"\" height=\""+(mS/2)+"\" src=\"https://kovalsky95.github.io/p5js_kbase/resources/b/close.png\" />"+
									"</td>"+
								"</tr></table>"
							).id("frame_tmp")
							.parent("main_view")
							.position(0, 0)
							.size(mW, mH)
							.style("display", "flex")
							.style("position", "absolute")
							.style("align-items", "center")
							.style("justify-content", "center")
							.style("background", "url(\"https://kovalsky95.github.io/p5js_kbase/resources/b/t.png\")")
							.style("opacity", "0.7");
						frame_tmp.mouseClicked(sk.remove_tmpp);
					}
				}
				sk.remove_tmpp = function() {
					flag = false;
					frame_tmp.remove();
				}
				class KTheme {
					constructor(title, lis, index) {
						this.x = 0;
						this.y = 0;
						this.w = 0;
						this.h = 0;
						this.title = title;
						this.lis = lis;
						this.index = index;
					}
					setPosition(x, y, h) {
						this.x = x;
						this.y = y;
						this.h = h;
						this.lis_c = sk.locateT(this.y+mS, this.h-mS/2, this.lis.length);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i] = new SubKTheme(
								this.lis[i],
								this.x+mS*2,
								this.lis_c[1][i]-mS/4,
								this.lis_c[0],
								this.index,
								i
							);
						}
					}
					clicked(mX, mY) {
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].clicked(mX, mY);
						}
					}
					show() {
						sk.textSize(or_s);
						sk.textAlign(LEFT);
						sk.textStyle(BOLD);
						sk.text(this.title, this.x, this.y+mS);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].show();
						}
					}
				}
				class SubKTheme {
					constructor(title, x, y, h, in0, in1) {
						this.title = title;
						this.x = x;
						this.y = y;
						this.w = this.title.length*25;
						this.h = h;
						this.in0 = in0;
						this.in1 = in1+1;
					}
					clicked(mX, mY) {
						if(mX >= this.x && mX <= this.x+this.w)
							if(mY >= this.y && mY <= this.y+this.h)
								sk.goLink(
									this.title,
									"https://kovalsky95.github.io/p5js_kbase/wiki/theme/1/"+this.in0+"/"+this.in1+"/theme/"
								);
					}
					show() {
						sk.textStyle(ITALIC);
						sk.text(this.title, this.x, this.y+this.h);
					}
				}
			}
		break;
		case 1:
			return function(sk) {
				let w, h, lis, ho, frame_tmp, flag, or_s;//, links;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
					ho = [];
					flag = false;
					lis = [];
					lis.push("\"Место\" исполнения программы, структура программы");
					lis.push(["Пошаговое описание создания p5.js-приложения"]);
					lis.push("Работа с графическими примитивами, их комбинации");
					lis.push(["Как разместить геометрические фигуры в своём скетч-прилложении?"]);
					lis.push("Работа с DOM");
					lis.push(["Создание/удаление элементов", "\"Закрепить\" скетч за div", "Несколько скетч на одной странице", "Прочие манипулирования скетч и DOM-элементами"]);
					lis.push("Рендеринг 3D-графики");
					lis.push(["Структура 3D-скетча", "Создание 3D-примитивов", "Разместить созданную модель сторонним ПО в своём скетче"]);
					lis.push("Работа со звуком/речью");
					lis.push(["В-целом о звуке", "Программа слышит звук", "Программа, которая говорит", "Речь в текст", "Речь в рисунок: голосовые команды манипулирования draw in sketch, DOM-элементами страницы"]);
					lis.push("Браузер - редактор растровой графики?");
					lis.push(["Доступные эффекты: смешивание, управление цветом (маскирующие слои), управление прозрачностью", "Предполагаемые эффекты: что смешать, чтобы получить что-то новое?"]);
					lis.push("Работа с видео, аудио, изображениями");
					lis.push(["Почему не \"грузит\"? Как исправить?"]);
					lis.push("Интерактивность");
					lis.push(["Манипулирование элементами (движение, перемещение, дрожание, повороты, прыжки, исчезновения) в скетч"]);
				}
				sk.setup = function() {
					let lis_c;
					sk.createCanvas(w, h);
					or_s = sk.textSize();
					for(let i = 0, k = 1; i <= lis.length-2; i+=2) {
						ho.push(new KTheme(lis[i], lis[i+1], k));
						k++;
					}
					lis_c = sk.locateT(mS-mS/2, h-mS*2, ho.length);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].setPosition(mS, lis_c[1][i], lis_c[0]);
					}
				}
				sk.draw = function() {
					sk.background(255);
					sk.textSize(22);
					sk.textAlign(CENTER);
					sk.textStyle(BOLD);
					sk.text(title, w/2, h-h+mS);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].show();
					}
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
				sk.locateT = function(s_point, all_area, count_el) {
					let size_el, step_y, lis;
					lis = [];
					step_y = all_area/count_el;
					size_el = step_y-2;
					
					lis.push(s_point);
					for(let i = 1; i <= count_el-1; i++) {
						lis.push(lis[i-1]+step_y);
					}
					return [size_el, lis];
				}
				sk.mousePressed = function() {
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].clicked(sk.mouseX, sk.mouseY);
					}
				}
				sk.goLink = function(title, link) {
					if(!flag) {
						flag = !flag;
						frame_tmp = createElement(
								"div",
								"<table><tr>"+
									"<td>"+
										"<iframe frameBorder=\"0\" width=\""+(mW-mS*2)+"\" height=\""+(mH-mS*2)+"\" src=\""+link+"\"></iframe>"+
									"</td>"+
									"<td style=\"vertical-align:top;\">"+
										"<img width=\""+(mS/2)+"\" height=\""+(mS/2)+"\" src=\"https://kovalsky95.github.io/p5js_kbase/resources/b/close.png\" />"+
									"</td>"+
								"</tr></table>"
							).id("frame_tmp")
							.parent("main_view")
							.position(0, 0)
							.size(mW, mH)
							.style("display", "flex")
							.style("position", "absolute")
							.style("align-items", "center")
							.style("justify-content", "center")
							.style("background", "url(\"https://kovalsky95.github.io/p5js_kbase/resources/b/t.png\")")
							.style("opacity", "0.7");
						frame_tmp.mouseClicked(sk.remove_tmpp);
					}
				}
				sk.remove_tmpp = function() {
					flag = false;
					frame_tmp.remove();
				}
				class KTheme {
					constructor(title, lis, index) {
						this.x = 0;
						this.y = 0;
						this.w = 0;
						this.h = 0;
						this.title = title;
						this.lis = lis;
						this.index = index;
					}
					setPosition(x, y, h) {
						this.x = x;
						this.y = y;
						this.h = h;
						this.lis_c = sk.locateT(this.y+mS, this.h-mS/2, this.lis.length);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i] = new SubKTheme(
								this.lis[i],
								this.x+mS*2,
								this.lis_c[1][i]+mS/7,
								this.lis_c[0],
								this.index,
								i
							);
						}
					}
					clicked(mX, mY) {
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].clicked(mX, mY);
						}
					}
					show() {
						sk.textSize(or_s);
						sk.textAlign(LEFT);
						sk.textStyle(BOLD);
						sk.text(this.title, this.x, this.y+mS);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].show();
						}
					}
				}
				class SubKTheme {
					constructor(title, x, y, h, in0, in1) {
						this.title = title;
						this.x = x;
						this.y = y;
						this.w = this.title.length*25;
						this.h = h;
						this.in0 = in0;
						this.in1 = in1+1;
					}
					clicked(mX, mY) {
						if(mX >= this.x && mX <= this.x+this.w)
							if(mY >= this.y && mY <= this.y+this.h)
								sk.goLink(
									this.title,
									"https://kovalsky95.github.io/p5js_kbase/wiki/theme/2/"+this.in0+"/"+this.in1+"/theme/"
								);
					}
					show() {
						sk.textStyle(ITALIC);
						sk.text(this.title, this.x, this.y+this.h);
					}
				}
			}
		break;
		case 2:
			return function(sk) {
				let w, h, or_s;//, links, frame_tmp;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
				}
				sk.setup = function() {
					sk.createCanvas(w, h);
					or_s = sk.textSize();
				}
				sk.draw = function() {
					sk.background(255);
					sk.textSize(22);
					sk.textAlign(CENTER);
					sk.textStyle(BOLD);
					sk.text(title, w/2, h-h+mS);
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
				sk.mousePressed = function() {
// 					for(let i = 0; i <= links.length-1; i++) {
// 						links[i].clicked(sk.mouseX, sk.mouseY);
// 					}
				}
// 				sk.goLink = function(link) {
// 					frame_tmp = createElement(
// 							"div",
// 							"<table><tr>"+
// 								"<td>"+
// 									"<iframe frameBorder=\"0\" width=\""+(mW-mS*6)+"\" height=\""+(mH-mS*4)+"\" src=\""+link+"\"></iframe>"+
// 								"</td>"+
// 								"<td style=\"vertical-align:top;\">"+
// 									"<img width=\""+(mS)+"\" height=\""+(mS)+"\" src=\"https://kovalsky95.github.io/p5js_kbase/resources/b/close.png\" />"+
// 								"</td>"+
// 							"</tr></table>"
// 						).id("frame_tmp")
// 						.parent("main_view")
// 						.position(0, 0)
// 						.size(mW, mH)
// 						.style("display", "flex")
// 						.style("position", "absolute")
// 						.style("align-items", "center")
// 						.style("justify-content", "center")
// 						.style("background", "url(\"https://kovalsky95.github.io/p5js_kbase/resources/b/t.png\")")
// 						.style("opacity", "0.7");
// 					frame_tmp.mouseClicked(sk.remove_tmpp);
// 				}
				sk.remove_tmpp = function() {
					frame_tmp.remove();
				}
// 					clicked(mX, mY) {
// 						if(mX >= this.x && mX <= this.x+this.w)
// 							if(mY >= this.y && mY <= this.y+this.h)
// 								sk.goLink(this.link);
// 					}
			}
		break;
		case 3:
			return function(sk) {
				let w, h, sl, links, lis, ho, frame_tmp, flag, or_s, cs_sk;
				sk.preload = function() {
					w = mW-mW/7;
					h = mH-mS;
					ho = [];
					flag = false;
					lis = [];
					lis.push("Дополнительные ресурсы");
					lis.push(["Показать"]);

					sl = "https://ru.wikipedia.org/w/index.php?title=Метод_проектов&stable=1\n"+
						"https://web.archive.org/web/20080503101731/http://vio.fio.ru/vio_01/Article_0_1.htm\n"+
						"https://p5js.org/es/get-started/\n"+
						"https://github.com/processing/p5.js/wiki/Transici%C3%B3n-desde-Processing\n"+
						"https://p5js.org/es/reference/\n"+
						"https://p5js.org/es/reference/#group-DOM\n"+
						"https://p5js.org/es/examples/instance-mode-instantiation.html\n"+
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
						"https://p5js.org/reference/#/p5/text\n"+
						"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe\n"+
						"https://github.com/NativeScript/NativeScript/issues/3884\n"+
						"https://developer.mozilla.org/ru/docs/Web/CSS/vertical-align\n"+
						"https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/onclick\n"+
						"https://learn.javascript.ru/window-methods\n"+
						"https://p5js.org/reference/#/p5/text\n"+
						"https://p5js.org/es/reference/#/p5/textStyle\n"+
						"https://p5js.org/reference/#/p5/textSize\n"+
						"https://learn.javascript.ru/iframes"+
						"";
				}
				sk.setup = function() {
					let lis_c;
					sk.createCanvas(w, h);
					or_s = sk.textSize();
					for(let i = 0, k = 1; i <= lis.length-2; i+=2) {
						ho.push(new KTheme(lis[i], lis[i+1], k));
						k++;
					}
					lis_c = sk.locatedL(mS-mS/2, h-mS*2, ho.length);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].setPosition(mS, lis_c[1][i], lis_c[0]);
					}
				}
				sk.draw = function() {
					sk.background(255);
					sk.textSize(22);
					sk.textAlign(CENTER);
					sk.textStyle(BOLD);
					sk.text(title, w/2, h-h+mS);
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].show();
					}
				}
				sk.windowResized = function() {
					w = mW-mW/7;
					h = mH-mS;
					sk.resizeCanvas(w, h);
				}
				sk.mousePressed = function() {
					for(let i = 0; i <= ho.length-1; i++) {
						ho[i].clicked(sk.mouseX, sk.mouseY);
					}
				}
				sk.goLink = function(link) {
					if(!flag) {
						flag = !flag;
						frame_tmp = createDiv().id("frame_tmp")
							.parent("main_view")
							.position(0, 0)
							.size(mW, mH)
							.style("display", "flex")
							.style("position", "absolute")
							.style("align-items", "center")
							.style("justify-content", "center")
							.style("background", "url(\"https://kovalsky95.github.io/p5js_kbase/resources/b/t.png\")")
							.style("opacity", "0.7");
						frame_tmp.mouseClicked(sk.remove_tmpp);
						cs_sk = new p5(
							function(cs_sk) {
								let p;
								cs_sk.preload = function() {
									p = cs_sk.loadImage("https://kovalsky95.github.io/p5js_kbase/resources/b/close.png");
								}
								cs_sk.setup = function() {
									cs_sk.createCanvas(w, h);
									links = sl.split("\n");
									lis_c = sk.locatedL(mS-mS/2, h-mS*2, links.length);
									for(let i = 0; i <= links.length-1; i++) {
										let l = links[i].length*10;
										links[i] = new WondL(links[i]);
										links[i].setPosition(w/2, lis_c[1][i], l, lis_c[0]);
									}
									
								}
								cs_sk.draw = function() {
									cs_sk.background(25, 144, 11);
									for(let i = 0; i <= links.length-1; i++) {
										links[i].show();
									}
									
								}
								cs_sk.mousePressed = function() {
									for(let i = 0; i <= links.length-1; i++) {
										links[i].clicked(cs_sk.mouseX, cs_sk.mouseY);
									}
								}
								cs_sk.showLink = function(link) {
									window.open(""+link, "PenguinL", "width=" + (w - mS) + ", height=" + (h - mS) + ", left=" + (w / 2 - w / 3) + "");
								}
								class WondL {
									constructor(link) {
										this.x = 0;
										this.y = 0;
										this.w = 0;
										this.h = 0;
										this.link = link;
									}
									setPosition(x, y, w, h) {
										this.x = x;
										this.y = y;
										this.w = w;
										this.h = h;
									}
									clicked(mX, mY) {
										if(mX >= this.x-this.w && mX <= this.x+this.w)
											if(mY >= this.y && mY <= this.y+this.h)
												cs_sk.showLink(this.link);
									}
									show() {
										cs_sk.textSize(or_s);
										cs_sk.textAlign(CENTER);
										cs_sk.textStyle(NORMAL);
										cs_sk.text(this.link, this.x, this.y+this.h);
										cs_sk.image(p, w-mS/2, h-h+mS/2, mS/2, mS/2);
									}
								}
							},
							"frame_tmp");
					}
				}
				sk.remove_tmpp = function() {
					flag = false;
					frame_tmp.remove();
					cs_sk.remove();
				}
				sk.locatedL = function(s_point, all_area, count_el) {
					let lis, step_y, size_el;
					lis = [];
					step_y = all_area/count_el;
					size_el = step_y-2;
					
					lis.push(s_point);
					for(let i = 1; i <= count_el-1; i++) {
						lis.push(lis[i-1]+step_y);
					}
					return [size_el, lis];
				}
				class KTheme {
					constructor(title, lis, index) {
						this.x = 0;
						this.y = 0;
						this.w = 0;
						this.h = 0;
						this.title = title;
						this.lis = lis;
						this.index = index;
					}
					setPosition(x, y, h) {
						this.x = x;
						this.y = y;
						this.h = h;
						this.lis_c = sk.locatedL(this.y+mS, this.h-mS/2, this.lis.length);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i] = new SubKTheme(
								this.lis[i],
								this.x+mS*2,
								this.lis_c[1][i]-mS/4,
								this.lis_c[0],
								this.index,
								i
							);
						}
					}
					clicked(mX, mY) {
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].clicked(mX, mY);
						}
					}
					show() {
						sk.textSize(or_s);
						sk.textAlign(LEFT);
						sk.textStyle(BOLD);
						sk.text(this.title, this.x, this.y+mS);
						for(let i = 0; i <= this.lis.length-1; i++) {
							this.lis[i].show();
						}
					}
				}
				class SubKTheme {
					constructor(title, x, y, h, in0, in1) {
						this.title = title;
						this.x = x;
						this.y = y;
						this.w = this.title.length*25;
						this.h = h;
						this.in0 = in0;
						this.in1 = in1+1;
					}
					clicked(mX, mY) {
						if(mX >= this.x && mX <= this.x+this.w)
							if(mY >= this.y && mY <= this.y+this.h)
								sk.goLink(
									this.title,
									"https://kovalsky95.github.io/p5js_kbase/wiki/theme/1/"+this.in0+"/"+this.in1+"/theme/"
								);
					}
					show() {
						sk.textStyle(ITALIC);
						sk.text(this.title, this.x, this.y+this.h);
					}
				}
			}
		break;
		default:
			
	}
}
