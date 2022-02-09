function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(237,222,203);
  
  textSize(32);
  textStyle(BOLD);
  textFont('Bauhaus');
  fill(0)
  text('Bauhaus', 40, 70);
  text('1919', 470, 750);
  
  noStroke();
  rectMode(CENTER);
  noFill()
  fill(0,90,171);
  rect(235, 270, 125, 280, 0,100,0,0);
  //Blue Rectangle//
  
 
  fill(244, 189, 24);
  arc(297, 270, 280, 280, -90 * PI/180, -270 * PI/180 );
  // Yellow Semi Circle (Arc) //
  
  fill(0);
  rect(235, 550,125, 280);
  //Black Rectangle//
  
  fill(237, 27, 36);
  arc(298, 550, 280, 280, -90 * PI/180, -270 * PI/180 );
  // Red Semi Circle (Arc) //

}