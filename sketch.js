//Declarar variables
//GLOBALES: se pueden usar en cualquier parte-- se declaran fuera de la funcion
//LOCALES: solo dentro de la funcion-- se declaran dentro de la funcion{}

//var x;
//x = 10;
//es lo mismo que
//var x = 10;


//setup() se ejecuta una vez
//draw() por defecto, se ejecuta 60 veces por segundo
function setup() {
  
  //canvas = lienzo para dibujar
  //createCanvas(dimHor, dimVer);
  //dimensiones en px
  //createCanvas(800, 600);
  
  createCanvas(windowWidth, windowHeight);
  //se calcula el tamaño de la ventana y lo rellena completo
  
  //backround(color)
  //1 = grayscale, 0 = negro, 255 = blanco
  //3 = RGB
  //4 = transaparencia = rgb + alpha
  //alpha 0 = transparente, 255 = solido
  background(0, 128, 128);
  
  
  //frameRate(taasa de cuadros por segundo)
  //frameRate(1);
}


//draw() se ejecuta 60 veces por segundo por defecto-- puede ser modificado
function draw() {
  
  //pintar fondo todo el rato para que se vea sólo una elipse
  
  background (0, 128, 128);
  //background (mouseX, mouseY, mouseY);
  
  //llamar a la funcion creada-- no se pinta
  //miElipse();
 
  if (true) { 
  muchasElipses();
  
 }
 
}


function miElipse() {
  //strokeWeight(px); = trazo y peso del borde
  
  strokeWeight(10);
  
  //stroke(color); = colors del borde
  
  stroke(255, 255, 0, 255/2);
  
  //fill(color); = colors del relleno
  
  fill(255, 0, 255, 100);
  
  //ellipse(posX, posY, width, height);
  //medidas en px
  //(0, 0) por defecto está en la esquina superior izquierda
  
  //ellipse(500, 100, 50, 50);
  
  //mouseX, mouseY = sigue posición del mouse
  
  ellipse(mouseX, mouseY, 50, 50);
  
  //RANDOM: para color, posicion, tamaño
  //random(x);
  //numero aleatorio entre 0 y X
  
}


function muchasElipses() {
  
    //for loop
  //for(inicio; condicion; refresco){}
//  for (var i = 0; i < 100; i++ /* i = i+1 */ )
  

//function muchasElipses() {
//  
//    //for loop
//  //for(inicio; condicion; refresco){}
//  for (var i = 0; i < 100; i++ /* i = i+1 */) 

 
   //strokeWeight(px); = trazo y peso del borde
  
  strokeWeight(10);
  
  //stroke(color); = colors del borde
  
  stroke(255, 255, 0, 255/2);
  
  //fill(color); = colors del relleno
  
  fill(255, 0, 255, 100);
  
  
  
  ellipse(random(width), random(height), random(200), random(200));
  
}


