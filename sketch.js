function circle(x, y, radius){
}

function setup() {
  createCanvas(800, 600);
  background(80, 80, 100, 100);
}

function draw() {
  
  //Table
  fill(100, 50, 0);
  rect(0, 300, 800, 400);
  
  //Plate Outside Rim
  fill(50, 0, 100, 120);
  ellipse(400, 400, 200, 100);
  
  //Plate Inside Rim
  fill(250, 80, 80, 100);
  ellipse(400, 400, 150, 70);
  
  //Chicken
  fill(200, 90, 0);
  ellipse(390, 375, 130, 90);
  
   //Chicken Bone
  fill(255, 255, 255);
  rect(440, 387, 40, 10)
  
  //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(480, 387, 15);
  
   //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(480, 395, 15);
  
  //Chicken Leg
  fill(200, 90, 0);
  ellipse(440, 390, 50, 40);
  
 
  
  
  
  
  
  
}