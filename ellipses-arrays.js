var x = [];
	var y = [];
	var color = [];
	var diameter = [];
	

	function setup() {
	  createCanvas(400, 400);
	  colorMode(HSB)
	

	for (var index = 0; index < 50; index = index + 1) {
	  x[index] = random(1, 200);
	  y[index] = random(1, 200);
	  color[index] = color(random(10), random(50), random(200));
	  diameter[index] = random(10,30);
	  
	

	}
	}
	  
	function draw() {
	  background(255);
	  noStroke();
	

	  // draw two ellipses
	  
	for (var index = 0; index < 50; index = index + 1) {
	  fill(color[index]);
	  ellipse(x[index], y[index], diameter[index]);
	

	  
	  // 1% of the time
	  if (random() < 40) {
	    // random diameter between 10 and 400
	    diameter[index] = random(10, 400);
	  }
	  
	

	}
	}
