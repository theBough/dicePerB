let rndNum = 0;
let rndNum2 = 0;
let rollBtn
let rollAnimate = false
let rollTime = 0;
function setup() {
  createCanvas(400, 400);
  rollBtn = createButton('Press to Roll')
  rollBtn.position(0,0)
  rollBtn.mousePressed(rollDie);
  input =createInput()
  input.position(80, 35)
}

function draw() {
  background(220);
  push()
  textSize(20)
  text("Wager", 10, 50)
  pop()
  textSize(100)
  //this draws the rectangle behind the number
  rect(40,80,140,140)
  rect(200,80,140,140)
  //this displays the text of the roll
  text(rndNum, 80,185)
  text(rndNum2, 220,185)
  
  //this if will control if the die is being rolled.
  if(rollAnimate){
    rollTime += 1;
    //the bigger this number the longer the animation
    if(rollTime > 50){
      rollAnimate = false;
      rollTime = 0;
    }
    rndNum = Math.ceil(random(6))
    rndNum2 = Math.ceil(random(6))
  }
}
function rollDie(){
  //the Press even of the button
  rndNum = Math.ceil(random(6))
  rndNum2 = Math.ceil(random(6))
  rollAnimate = true;
}
