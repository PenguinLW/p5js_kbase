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
