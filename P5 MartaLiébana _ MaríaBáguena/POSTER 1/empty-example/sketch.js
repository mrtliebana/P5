

 let cam;

 let img;

 function preload() {
  img = loadImage('texto8.png');
  img2 = loadImage('sonar1.png');
 }
 let value = 0;


function setup() {
  createCanvas(420, 600, WEBGL);
 
  cam = createCapture(VIDEO);
  cam.size(0,0);
  
  
  

}



function draw() {
 
  background(0);
  image(img, 1,1);
  imageMode(CENTER);
  fill(25,54,219);
  rotateX(frameCount * 0.01);
  rotateY(map(mouseX, 0, height, 0, PI));
 
  texture(cam);
  
  box(170);
  


}



function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

//function mouseClicked() {
 // if (change = true) {
   // change = cam;
  //} else {
    //change = img; }}



//box([width], [Height], [depth], [detailX], [detailY])




