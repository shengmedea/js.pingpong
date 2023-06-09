let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 circle(xbolinha,ybolinha,diametro);
 xbolinha += velocidadexbolinha;
 ybolinha += velocidadeybolinha;

  if (xbolinha > width || xbolinha < 0  ) {
  velocidadexbolinha *= -1;
  }

  if (ybolinha > height || ybolinha < 0  ) {
  velocidadeybolinha *= -1;

  }
  
}
