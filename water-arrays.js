var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

for (var index = 0; index < 10; index = index + 1) {
	  x[index] = 230;
	  y[index] = 220;
	  r[index] = 3;
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x[index], 20);
  
  // draw drip
  ellipse(x[index], y[index], 10);
	 y[index] = y[index] + r[index];

	 
	
  
  // down 3 pixels each frame, but maybe should be accelerating?
  
  // if invisible for a full “height” amount…
  if (y[index] > height*2) {
    // reset
    y[index] = 220;
  }
 }
}
