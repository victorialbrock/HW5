var x = [];
var y = [];
var r = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

for (var index = 0; index < 50; index = index + 1) {
  x[index] = 205;
  y[index] = random(200,250);
  r[index] = 0;
  ySpeed[index] = random(1,5);
  }
}

function draw() {
  background(25);
  noStroke();
  
  fill(0);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  
  for (var index = 0; index < 50; index = index + 1) {
  push();
  fill(y[index]);
  translate(x[index],y[index]);
  rotate(r[index]);
  rect(-10, -10, 20, 20);
  pop();
  
  // up 3 pixels
  y[index] -= ySpeed[index];
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[index] += 0.05
  
  // if reach past the top a bunch
  if (y[index] < -150) {
    y[index] = 290;
  }
}
}
