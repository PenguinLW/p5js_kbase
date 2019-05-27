function scene1(sk) {
  let w, h;
  sk.preload = function() {
    w = mW/1.6;
    h = mH-mS;
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(255);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
function scene2(sk) {
  let links;
  sk.preload = function() {
    w = mW/1.6;
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
      "https://p5js.org/reference/#/p5.Element/parent"+
      "";
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(255);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
function scene3(sk) {
  let w, h;
  sk.preload = function() {
    w = mW/1.6;
    h = mH-mS;
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(225);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
function scene4(sk) {
  let w, h;
  sk.preload = function() {
    w = mW/1.6;
    h = mH-mS;
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(225);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
function scene5(sk) {
  let w, h;
  sk.preload = function() {
    w = mW/1.6;
    h = mH-mS;
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(225);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
function scene6(sk) {
  let w, h;
  sk.preload = function() {
    w = mW/1.6;
    h = mH-mS;
  }
  sk.setup = function() {
    sk.createCanvas(w, h);
  }
  sk.draw = function() {
    sk.background(225);
  }
  sk.windowResized = function() {
    mW = mW/1.6;
    mH = mH-mS;
    sk.resizeCanvas(mW, mH);
  }
}
