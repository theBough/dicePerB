let rndNum = 0;
let rollBtn
let rollAnimate = false
let rollTime = 0;
function setup() {
  createCanvas(400, 400);
  rollBtn = createButton('Press to Roll')
  rollBtn.position(0,0)
  rollBtn.mousePressed(rollDie);
}

function draw() {
  background(220);
  textSize(100)
  //this draws the rectangle behind the number
  rect(80,80,140,140)
  //this displays the text of the roll
  text(rndNum, 120,185)
  //this if will control if the die is being rolled.
  if(rollAnimate){
    rollTime += 1;
    //the bigger this number the longer the animation
    if(rollTime > 50){
      rollAnimate = false;
      rollTime = 0;
    }
    rndNum = Math.ceil(random(6))
  }
}
function rollDie(){
  //the Press even of the button
  rndNum = Math.ceil(random(6))
  rollAnimate = true;
}
