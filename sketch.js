/**
 * @Date:   2020-11-11T10:24:03+00:00
 * @Last modified time: 2020-11-17T15:28:31+00:00
 */



let a = 0;
// constantly increasing variable which feeds sine function (b) with some values
let b = 0;
// sine function of 'a' and for loop values
let r1 = 30;
// size of  box, changes size to display different patterns
let r2 = 15;
// size of circle, changes size to display different patterns

let direction = [-30, 30, 0, 0];
// array for giving the line functions random values

function setup() {
  createCanvas(800, 800);
  //Creates Canvas size.
  noLoop();
  //stops the randomly generated lines from looping over
  angleMode(RADIANS);
}

function draw() {

  background(9, 77, 28);
  // background colour

  for (let i = 0; i <= width; i = i + 30) {

    for (let j = 0; j <= height; j = j + 30) {

      dot(i, j, b);
      //draws the dot function

      b = r1 * sin(a - i - j );
      //b is equal to r1 witch is the size of each box and multiplies it by
      //sin a witch a's vaule is set to zero minus the witdh witch is represented in i
      //minus the height witch is represented in j

      circlebox(i * 2, j * 2, b);
      //draws the circle and box function

      b = r2 * sin(a + i  + j );
      //b is equal to r2 witch is the size of each circle and multiplies it by
      //sin a witch a's vaule is set to zero plus the witdh witch is represented in i
      //plus the height witch is represented in j

    }

  }

}

function dot(x, y, d) {
  noFill();
  strokeWeight(0.5);
  stroke(255);
  // colour

  ellipse(x, y, d, d);
  //creates the dot

  strokeWeight(1);
  stroke(255, 255, 0);
  // stroke settings for lines

  line(x, y, x + random(direction), y + random(direction));
  // this function creates the random line patterns
}

function circlebox(x, y, d) {
  noFill();
  strokeWeight(0.5);
  stroke(255)
  // colour

  ellipse(x, y, d, d);
  //circle in the box shape

  rectMode(CENTER);
  rect(x, y, d, d);
  //the box

  strokeWeight(2);
  stroke(255, 255, 0);
  // stroke settings for lines

  line(x, y, x + random(direction), y + random(direction));
  // this function creates the random line patterns
}
