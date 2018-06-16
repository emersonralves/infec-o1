/*var obsX = [], obsY = [], obsVel = [], obsTam = [], qtobs = 5

function setup() {
	createCanvas(900, 600);
	frameRate(30)
for (i = 0; i < qtobs; i++) {
		obsX[i] = random(0,700);
		obsY[i] = random(0,height); 
		obsVel[i] = 2+random(0,10)/10; 
		obsTam[i] = random(40,60); 
}
}
function draw() {
	 background(0)
for(i = 0; i < qtobs; i++) {
	  rect(obsX[i],obsY[i],obsTam[i],obsTam[i])
  }
  for(i = 0; i < qtobs; i++) { 
	  obsY[i] += obsVel[i]; 
	  if (obsY[i] > height) {
		obsX[i] = random(0,700);
		obsY[i] = -random(0,height); 
	  }
}
}*/
/*var tela = 1
var contador = 0
var vida = 5, pontos = 0 //origis origis
var xp, yp //posição do personagem
var xob, yob, obstaculo = true // obstaculo
var obsX = [], obsY = [], obsVel = [], obsTam = 60, qtobs = 5
var tamtiro = 10
var xtiro = [] , ytiro = [] , tiroativo = [] , qtiro = 7, ttiro = -1
var estrelasX = [], estrelasY = [], estrelasVel = [], estrelasTam = [], qtEstrelas = 50 //fundo
function setup() {
createCanvas(900, 600);
frameRate(30)
yob = 5
xob = random(580)
xp = 100
yp = 100
for(i=0; i < qtiro; i++){
	xtiro[i] = 300
	tiroativo[i] = false
	ytiro[i] = 10
}
for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,700);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
}
for (i = 0; i < qtobs; i++) {
		obsX[i] = random(0,700);
		obsY[i] = 0; 
		obsVel[i] = 2+random(0,10)/10; 
}
}

function draw() {
  background(0);
  if ( tela == 1 ) {
		textSize(28); 
		fill(200);
		text("Pressione Enter para Começar", 100, 200);
		if ( keyIsDown(13) ){ 
		tela = 2; }
  }
  if(tela == 3){
	textSize(28); 
		fill(200);
		text("game over otario, pressione enter para recomeçar ", 100, 200);
		if ( keyIsDown(13) ){ 
		tela = 2
		vida = 5; }
}
  if(tela == 2){
 textSize(14);
  fill(255); 
  text("PONTOS = "+ pontos+" "+" \n VIDAS "+ vida, 800, 15)
  

 if (keyIsDown(LEFT_ARROW)){
    xp -=9;
 }
  if (keyIsDown(RIGHT_ARROW)){
    xp +=9;
  }
  if (keyIsDown(UP_ARROW)){
    yp -=9;
  }
  if (keyIsDown(DOWN_ARROW)){
    yp +=9;
  }
  if ( keyIsDown(32) && ttiro < 0 ) {
	ttiro = 5; 
  for(i=0; i<qtiro; i++){
	  if(tiroativo[i] == false){
		  tiroativo[i] = true
		  ytiro[i] = yp
		  xtiro[i] = xp
		  break
	  }
  }
  }
  ttiro--
  
  if(obstaculo){
    yob += 2;
  }else{
    yob = 1; 
    xob = random(512);
    obstaculo = true;
  }
  
  if(yob > height) {
  obstaculo = false;
  }
  for(i=0; i<qtiro; i++){
	  for(j = 0; j < qtobs; j++){
		  if(dist(xtiro[i], ytiro[i], obsX[j], obsY[j]) < (10 + 60)/2){
			  if(contador == 30){
				  obsX[j] = random(0,700)
				  obsY[j] = 0
				  pontos += 10
				  contador = 0
				  }
			contador+=1
			obstaculo = false
			tiroativo[i] = false
			}
		}
	}
 for(i = 0; i < qtobs; i++){
 if(dist(obsX[i], obsY[i], xp, yp) < (40 + 60)/2){
   vida -= 1
   obstaculo = false
   obsX[i] = random(0,700)
   obsY[i] = 0
 }
 }
  
  if(xp -20<0){
	  xp = 0+20
  };
  if(xp +20> 700){
	  xp = 700-20
  };
  if(yp -20<0){
	  yp = 0+20
  };
  if(yp +20 > height){
	  yp = height-20
  };
   for(i = 0; i < qtEstrelas; i++) {
	  ellipse(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,700);
		estrelasY[i] = -random(0,height); 
	  }
}
for(i = 0; i < qtobs; i++) {
	  ellipse(obsX[i],obsY[i],obsTam,obsTam)
  };
  for(i = 0; i < qtobs; i++) { 
	  obsY[i] += obsVel[i]; 
	  if (obsY[i] > height) {
		obsX[i] = random(0,700);
		obsY[i] = 0; 
	  };
}
  for(i=0; i<qtiro; i++){
	  if(tiroativo[i]){
		  ellipse(xtiro[i], ytiro[i],tamtiro,tamtiro)
		  ytiro[i] -=10
		  if(ytiro[i] < 0){
			  tiroativo[i] = false 
		  };
	  };
  };
  if(vida == 0){
	  tela = 3
  }
  ellipse(xp, yp, 40, 40);
    //ellipse(xob, yob, 60, 60);

}
}*/
/*var tamMenor = 10; // tiroooooooos
var tamMaior = 50;
var xTiros = [];  
var tirosAtivos = []; 
var qtTiros =  100;
var y = [];
var tempoTiro = -1;  
var z, k 
// os códigos de "setup" só executam uma vez 
function setup() {
	createCanvas(640, 480); 
frameRate(30)	
	for ( i = 0; i < qtTiros; i++) {
		xTiros[i] = 10;
		tirosAtivos[i] = false;  
		y[i] = 300; 
	}
	
	z=100
	k=100
	
}

// os códigos de "draw" executam constantemente 
function draw() {
  background(0); 
   if (keyIsDown(LEFT_ARROW)){
    z-=5;
 }
  if (keyIsDown(RIGHT_ARROW)){
    z+=5;
  }
  if (keyIsDown(UP_ARROW)){
    k-=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    k+=5;
  }
  if ( keyIsDown(32) && tempoTiro < 0 ) {
	tempoTiro = 5;   
  
	for ( i = 0; i < qtTiros; i++) {
		if ( tirosAtivos[i] ==  false ) {
		  tirosAtivos[i] = true;
		  xTiros[i] = k;
		  y[i]= z;
		  break; 
		    
		} 
	} 
	  
  }
  tempoTiro--;  
	
  textSize(18)
  fill(250)
  text(tempoTiro,100,100); 
  
  for ( i = 0; i < qtTiros; i++) {
	  if ( tirosAtivos[i] ) {
		// tiros 
		ellipse(y[i], xTiros[i], tamMenor, tamMenor);	    
		xTiros[i] -= 10; 
		if (xTiros[i] <0) {
			tirosAtivos[i] = false; 
		}
	  } 
	 
  }
 ellipse(z, k, 40, 40);
  
  
  

}*/
/*//lance das coisas caindo parceiro
var yo, xo;
var naTela = true;
function setup() {
  createCanvas(512, 512);
  yo = 5; 
  xo = random(512);
}

function draw() {
  background(0);
  
  if(naTela){
    yo += 5;
  }else{
    yo = 5; 
    xo = random(512);
    naTela = true;
  }
  
  if(yo > width) {
	naTela = false;
  }
  
  rect(xo,yo,40,40);
}*///lance das coisas caindo parceiro
/*// atirar (barulho de coisa sendo atirada)
var yo, xo;
var podeMudar = true;
function setup() {
  createCanvas(512, 512);
  yo = random(512); 
  xo = 15;
}

function draw() {
  background(0);
  
  if(!podeMudar){
     xo += 15;
  }
  
  if(xo > width){
	podeMudar = true;
  }
  
  if(mouseIsPressed && podeMudar) {
      yo = random(512); 
      xo = 15;
    podeMudar = false;
  }
  
  rect(xo,yo,40,40);
}*/
/*var x 
var y 
var posYq1
var posXq1
var posYq2
var posXq2
var naTela1 = true 
var naTela2 = true
var yo
var xo
var podeMudar = true
var estrelasX = [];
var estrelasY = [];
var estrelasVel = [];
var estrelasTam = [];    

var qtEstrelas = 50; 
function setup() {
createCanvas(740, 580);
posYq1 = 5
posXq1 = random(580)
posYq2 = 2
posXq2 = random(580)
x = 100
y = 100
yo = 1000
xo = 1000
for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
}
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW))
    x-=5;
  
  if (keyIsDown(RIGHT_ARROW))
    x+=5;
  
  if (keyIsDown(UP_ARROW))
    y-=5;
  
  if (keyIsDown(DOWN_ARROW))
    y+=5;
  if(naTela1){
    posYq1 += 5;
  }else{
    posYq1 = 1; 
    posXq1 = random(512);
    naTela1 = true;
  }
  
  if(posYq1 > width) {
	naTela1 = false;
  }
   if(naTela2){
    posYq2 += 2;
  }else{
    posYq2 = 1; 
    posXq2 = random(512);
    naTela2 = true;
  }
  
  if(posYq2 > width) {
	naTela2 = false;
  }
  
  if(!podeMudar){
     yo -= 50;
  }
  
  if(yo < 0){
	podeMudar = true;
  }
  
  if(keyIsDown(32) && podeMudar) {
      xo = x; 
      yo = y;
    podeMudar = false;
  }
   for(i = 0; i < qtEstrelas; i++) {
	  rect(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }

  
  // movimenta objetos 
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,width);
		estrelasY[i] = -random(0,height); 
	  }
  }
	ellipse(x, y, 40, 40);
    rect(posXq1, posYq1, 40, 40);
	rect(posXq2, posYq2, 40, 40);
	ellipse(xo,yo,10,10);

}*/
/*var vida = 5, pontos = 0 //origis antigo
var xp, yp //posição do personagem
var xob, yob, obstaculo = true // obstaculo
var xt, yt, tiro = true // tiro
//var estrelasX = [], estrelasY = [], estrelasVel = [], estrelasTam = [], qtEstrelas = 50 //fundo
function setup() {
createCanvas(900, 600);
yob = 5
xob = random(580)
xp = 100
yp = 100
yt = 1000
xt = 1000
for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(0,700);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
}
}

function draw() {
  background(0);
 textSize(14);
  fill(255); 
  text("PONTOS = "+ pontos+" "+" \n VIDAS "+ vida, 800, 15)
  

 if (keyIsDown(LEFT_ARROW)){
    xp -=5;
 }
  if (keyIsDown(RIGHT_ARROW)){
    xp +=5;
  }
  if (keyIsDown(UP_ARROW)){
    yp -=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yp +=5;
  }
  if(obstaculo){
    yob += 2;
  }else{
    yob = 1; 
    xob = random(512);
    obstaculo = true;
  }
  
  if(yob > height) {
  obstaculo = false;
  }
  if(dist(xob, yob, xt, yt) < (10 + 60)/2){
    pontos += 10
    obstaculo = false
    xt = 1000
    yt = 1000
    tiro = true 
  }
 if(dist(xob, yob, xp, yp) < (40 + 60)/2){
   vida -= 1
   obstaculo = false
 }
  if(!tiro){
     yt -= 20;
  }
  
  if(yt < 0){
  tiro = true;
  }
  
  if((keyIsDown(16) || keyIsDown(32)) && tiro) {
      xt = xp; 
      yt = yp;
    tiro = false;
  }
  if(xp -20<0){
	  xp = 0+20
  }
  if(xp +20> 700){
	  xp = 700-20
  }
  if(yp -20<0){
	  yp = 0+20
  }
  if(yp +20 > height){
	  yp = height-20
  }
   for(i = 0; i < qtEstrelas; i++) {
	  ellipse(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  for(i = 0; i < qtEstrelas; i++) { 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > height) {
		estrelasX[i] = random(0,700);
		estrelasY[i] = -random(0,height); 
	  }
}
  ellipse(xp, yp, 40, 40);
    ellipse(xob, yob, 60, 60);
  ellipse(xt,yt,10,10);

}*/
//Tutorial de introdução ao p5js: https://github.com/orivaldosantana/ECT2203LoP/tree/master/tutorial 
//Referências de códigos Processing em JavaScript: http://p5js.org/reference
var contobs = 0
var contvida = 0 , xv, yv, vidabonus = false 
var tela = 1 //inicio do jogo 
var vida = 5, pontos = 0, nivel = 1
var xp, yp //posição do personagem
var obsX = [], obsY = [], obsVel = [], obsTam = 60, qtobs = 5//obstaculos 
var xtiro = [] , ytiro = [] , tiroativo = [] , qtiro = 7, ttiro = -1, tamtiro = 10 // tiros 
var estrelasX = [], estrelasY = [], estrelasVel = [], estrelasTam = [], qtEstrelas = 50 //fundo
function setup() {
createCanvas(1366, 662);
frameRate(30)
xp = 680
yp = 591
xv = random(333,1033) 
yv = -random(331,622)
for(i=0; i < qtiro; i++){
	xtiro[i] = 2000
	tiroativo[i] = false
	ytiro[i] = 2000
}
for (i = 0; i < qtEstrelas; i++) {
		estrelasX[i] = random(330,1030);
		estrelasY[i] = random(0,height); 
		estrelasVel[i] = 2+random(0,10)/10; 
		estrelasTam[i] = random(2,4); 
}
for (i = 0; i < qtobs; i++) {
		obsX[i] = random(330,1030);
		obsY[i] = -random(0,height); 
		obsVel[i] = 2+random(0,10)/10; 
}
}

function draw() {
  background(0);
  if ( tela == 1 ) { // tela inicial 
		textSize(28); 
		fill(200);
		text("PRESSIONE ENTER PARA COMEÇAR", 455, 331);
		if ( keyIsDown(13) ){ 
		tela = 2; }
  }
  if(tela == 3){ // tela game over
	textSize(28); 
		fill(200);
		text("GAME OVER", 595, 331);
	textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		vida = 5; }
}
if(tela == 4){ // tela de pausa 
	textSize(28); 
		fill(200);
		text("PAUSE", 632, 331);
	textSize(18); 
		fill(200);
		text("Pressione enter para retornar", 570, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 5){ // nivel 2
textSize(28); 
		fill(200);
		text("level 2", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 6){ // nivel 3
textSize(28); 
		fill(200);
		text("level 3", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 7){ // nivel 4
textSize(28); 
		fill(200);
		text("level 4", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 8){ // nivel 5
textSize(28); 
		fill(200);
		text("level 5", 595, 331);
		textSize(18); 
	fill(200);
	    text("Pressione enter para recomeçar", 560, 650);
		if ( keyIsDown(13) ){ 
		tela = 2
		}
}
if(tela == 2){ // tela de jogo 
textSize(14);
  fill(255); 
  text("PONTOS = "+ pontos+" "+" \n VIDAS = "+ vida+" "+"\n NÍVEL = "+nivel, 1100, 35)
  

 if (keyIsDown(LEFT_ARROW)){
    xp -=12;
 }
  if (keyIsDown(RIGHT_ARROW)){
    xp +=12;
  }
  if (keyIsDown(UP_ARROW)){
    yp -=12;
  }
  if (keyIsDown(DOWN_ARROW)){
    yp +=12;
  }
  if ( keyIsDown(32) && ttiro < 0 ) {
	ttiro = 5; 
  for(i=0; i<qtiro; i++){
	  if(tiroativo[i] == false){
		  tiroativo[i] = true
		  ytiro[i] = yp
		  xtiro[i] = xp
		  break
	  }
  }
  }
  ttiro--
  for(i=0; i<qtiro; i++){ // colisão entre tiro e obstaculo 
	  for(j = 0; j < qtobs; j++){
		  if(dist(xtiro[i], ytiro[i], obsX[j], obsY[j]) < (10 + 60)/2){
				  obsX[j] = random(350,1030)
				  obsY[j] = -random(0,height)
				  xtiro[i] = 2000
				  ytiro[i] = 2000
				  pontos += 10
				  contvida += 1
			tiroativo[i] = false
			}
		}
	}
if(contvida == 30){
	vidabonus = true
	contvida = 0
}
if(vidabonus == true){
	yv+=5
	if(dist(xv,yv,xp,yp)<(40 + 50)/2){
		vida+=1
		vidabonus = false
		xv = random(333,1033) 
        yv = -random(331,622)
	}
	for(i=0; i<qtiro; i++){
		if(dist(xtiro[i], ytiro[i], xv, yv)< (10 + 50)/2 || yv >= 631){
			vidabonus = false 
			xv = random(333,1033) 
            yv = -random(331,622)
		}
	}
}	
 for(i = 0; i < qtobs; i++){ // colisão entre personagem e obstaculo 
 if(dist(obsX[i], obsY[i], xp, yp) < (40 + 60)/2){
   vida -= 1
   obsX[i] = random(350,1030)
   obsY[i] = -random(0,height)
 }
 }
  
  if(xp -20<350){
	  xp = 350+20
  };
  if(xp +20> 1030){
	  xp = 1030-20
  };
  if(yp -20<0){
	  yp = 0+20
  };
  if(yp +20 > height){
	  yp = height-20
  };
   for(i = 0; i < qtEstrelas; i++) { // criando o fundo
	  ellipse(estrelasX[i],estrelasY[i],estrelasTam[i],estrelasTam[i])
  }
  for(i = 0; i < qtEstrelas; i++) { // movimento do fundo 
	  estrelasY[i] = estrelasY[i] + estrelasVel[i]; 
	  if (estrelasY[i] > 631) {
		estrelasX[i] = random(350,1030);
		estrelasY[i] = -random(0,height); 
	  }
}
for(i = 0; i < qtobs; i++) {// criando obstaculo 
	  fill('rgba(0,255,0, 0.25)')
	  ellipse(obsX[i],obsY[i],obsTam,obsTam)
  };
  for(i = 0; i < qtobs; i++) { //movimento obstaculo
	  obsY[i] += obsVel[i]; 
	  if (obsY[i] > 631) {
		contobs+=1
		obsX[i] = random(350,1030);
		obsY[i] = -random(0,331); 
		if(contobs == 2){
			  contobs=0
			  vida-=1
		}
	  };
}
  for(i=0; i<qtiro; i++){// movimento tiro 
	  if(tiroativo[i]){
		  fill(255,0,0)
		  ellipse(xtiro[i], ytiro[i],tamtiro,tamtiro)
		  ytiro[i] -=10
		  if(ytiro[i] < 0){
			  xtiro[i]= 2000
			  ytiro[i] = 2000
			  tiroativo[i] = false 
		  };
	  };
  };
  if(vida == 0){
	  tela = 3
	  nivel = 1
	  pontos = 0
	  xp = 680
	  yp = 591
	  qtobs = 5
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,10)/10; 
        }
      for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
  if(keyIsDown(16)){
	  tela = 4
  }
  while(pontos==500){// nivel 2
	  pontos+=10
	  tela=5
	  nivel = 2
	  qtobs +=3
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,15)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
   while(pontos==1500){// nivel 3
	  pontos+=10
	  tela=6
	  nivel = 3
	  qtobs +=5
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,20)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
     while(pontos==3000){// nivel 4
	  pontos+=10
	  tela=7
	  nivel = 4
	  qtobs +=3
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,22)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
      while(pontos==4200){// nivel 5
	  pontos+=10
	  tela=8
	  nivel = 5
	  qtobs +=1
	  xp = 680
	  yp = 591
	  for (i = 0; i < qtobs; i++) {
		obsX[i] = random(350,1030);
		obsY[i] = -random(31,631); 
		obsVel[i] = 2+random(0,24)/10;
  }
  for(i=0; i<qtiro; i++){
		  xtiro[i]= 2000
		  ytiro[i] = 2000
		  tiroativo[i] = false 
	  }
  }
  fill(255,0,0)
  ellipse(xp, yp, 40, 40);
  ellipse(xv,yv,50,50)

}
}


