var balls = [];
var couleurs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  couleurs[0] = color(0,102,204);
  couleurs[1] = color(255,170,0);
  for(i=0; i<20; i++){
    balls[i]=new Ball();
    balls[i].init();
  }

  
}

function draw() {
  clear();
  noStroke();
  for(i=0; i<20; i++){
    balls[i].drawBall();
}
}

function Ball(){
  this.posY = random(windowHeight,windowHeight);
  this.couleur = couleurs[floor(random(0,2))];
  this.vX = 0;
  this.vY = -1;
  
  this.init = function(){
   this.posX = random(0,windowWidth);
   this.taille = random(20,35);
   this.speed = random(1,2);
  }

  
  this.drawBall = function(){
    fill(this.couleur);
    ellipse(this.posX, this.posY, this.taille);
    this.update();
  }
  this.update = function(){
   if(this.posY < 0){
   this.posY = windowHeight;
   this.init();
   }
    this.posX += this.vX * this.speed;
    this.posY += this.vY * this.speed;
   }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}



