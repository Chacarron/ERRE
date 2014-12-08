var sprites = {
    //Sprites juego  
	MonCamino: { sx: 0, sy: 90, w: 90, h: 90, frames: 2}, 
	MonGranja: { sx: 0, sy: 90, w: 90, h: 90, frames: 3}, 
	CiudadC: { sx: 0, sy: 0, w: 90, h: 90, frames: 0}, 
	CiudadD: { sx: 0, sy: 90, w: 90, h: 90, frames: 7},
	CiudadE: { sx: 0, sy: 0, w: 90, h: 90, frames: 9},
	CiudadF: { sx: 0, sy: 0, w: 90, h: 90, frames: 6},
	CiudadG: { sx: 0, sy: 0, w: 90, h: 90, frames: 5}, 
	CiudadH: { sx: 0, sy: 90, w: 90, h: 90, frames: 1}, 
	CiudadI: { sx: 0, sy: 90, w: 90, h: 90, frames: 0}, 
	CiudadJ: { sx: 0, sy: 90, w: 90, h: 90, frames: 4},  
	CiudadK: { sx: 0, sy: 90, w: 90, h: 90, frames: 5},
	CiudadL: { sx: 0, sy: 90, w: 90, h: 90, frames: 6},
	CiudadM: { sx: 0, sy: 0, w: 90, h: 90, frames: 8}, 
	CiudadN: { sx: 0, sy: 0, w: 90, h: 90, frames: 7},
  	CiudadO: { sx: 0, sy: 180, w: 90, h: 90, frames: 3},
	CiudadP: { sx: 0, sy: 180, w: 90, h: 90, frames: 2},
	CiudadQ: { sx: 0, sy: 0, w: 90, h: 90, frames: 2},  
	CiudadR: { sx: 0, sy: 0, w: 90, h: 90, frames: 1},
	CiudadS: { sx: 0, sy: 0, w: 90, h: 90, frames: 4}, 
	CiudadT:{ sx: 0, sy: 0, w: 90, h: 90, frames: 3},
	Recto: { sx: 0, sy: 180, w: 90, h: 90, frames: 0}, 
	Curva: { sx: 0, sy: 180, w: 90, h: 90, frames: 1}, 
	Cruce3: { sx: 0, sy: 90, w: 90, h: 90, frames: 9}, 
	Cruce4: { sx: 0, sy: 90, w: 90, h: 90, frames: 8}, 
	//Fondo
	Fondo: { sx: 0, sy: 270, w: 90, h: 90, frames: 0}, 

	//aldeanos
	BackSide: { sx: 0, sy:180, w: 90, h: 90, frames: 4},
	AldeanoRojo: {sx:451, sy:181, w:35, h:30, frames : 0},
	AldeanoAzul:{sx:451, sy:211, w:35, h:30, frames:0},
	AldeanoAmarillo:{sx:0, sy:180, w:90, h:90, frames:5},
	//Numeros

	num1: { sx: 0, sy: 360, w: 90, h: 90, frames: 1},
	num2: { sx: 0, sy: 360, w: 90, h: 90, frames: 2},
	num3: { sx: 0, sy: 360, w: 90, h: 90, frames: 3},
    
};


var startGame = function() {
    
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",10,50,playGame));
  	
}


var playGame = function() {
 	
	var gb = new GameBoard();
	var p1 = new points(125,"ALBERTO",830,300);
	var p2 = new points(300, "JONA",830,350);
	var p3 = new points(500, "MORATA",830,400);
	var FichasR =new  Ficha_Aldeano("AldeanoRojo",830,100);
	var FichasAz =new  Ficha_Aldeano("AldeanoAzul",870,100);
	
	Game.setBoard(0,p1);
	Game.setBoard(1,p2);
	Game.setBoard(2,p3);
	Game.setBoard(3,FichasR);
	Game.setBoard(4,FichasAz);
	Game.setBoard(5,gb);
	Game.setBoard(6,new carta(card));
}


var card = function(){
	Game.setBoard(7,new NewCard());
}

var Ficha_Aldeano = function (aldeano,x,y){


	
	this.draw = function (ctx) {
		SpriteSheet.draw(Game.ctx,aldeano,x,y,0,true);
	};
	
	this.step = function(){

	};

}

var NewCard = function (){


	var ran = Math.floor((Math.random() * 23) + 1);
	var sp;
	var cont = 0;
	var gb = Game.boards[5];
	var grade = 0;
	var entro = false;

	
	for (key in sprites) {
		if(cont == ran){
			sp = key;
			break;
		}
		cont++;
	}
	

	this.x = 850;
	this.y = 530;

    this.draw = function(ctx) {
		SpriteSheet.draw(Game.ctx,sp,this.x,this.y,grade);
    };

   this.step = function() {
	    var that = this;	

		window.onmousedown = function(e){
			if(e.which == 1){
				mX = e.pageX;
				mY = e.pageY;

				cX = Math.floor((mX-100)/90);
				cY = Math.floor((mY-100)/90);
	
				if((mX > 100) && (mX < 910) && (mY > 190) && (mY < 730) && (entro == false)){

					for(i = 0 ; i < gb.lista_fichas.length ; i++){
						var f = gb.lista_fichas[i];
						if( (f.x == cX*90+gb.scrollx*90) && (f.y == cY*90+gb.scrolly*90) && (f.paint == false)){
							f.paint = true;
							f.sprite = sp;
							f.grade = grade;
							entro = true;
							Game.setBoard(7,new carta(card));
						}
					}
						
				}
			}else{
				grade = grade + 90;
			}
		}
    };									

}
	

var points = function(number,name,x,y){
	
	var num = number;
	var cont = 0;

	this.step = function() {
			cont++;
			if(cont == 100){
				num += 1;
				cont = 0;
			}
	};

	this.draw = function(ctx) {
		ctx.fillStyle = "white";
		ctx.fillRect(x-2,y-20,200,50);

		ctx.fillStyle = "#000000";
		ctx.font = "20px Verdana";
		ctx.fillText(name + ": " + num,x,y);
    };

}


var Colocar_Aldeano = function Colocar_Aldeano(pos,tipo_aldeano,x,y){

	switch(pos % 3){
		case 1:
			x = x;   
			break;
		case 2:
		    x = x+30;
		    break;
		case 0:
		    x = x+60;
			break;
	}

	if(pos <= 3)
		y = y;
	else if(pos > 3 && pos <= 6)
		y = y+30;
	else if(pos > 6)
		y = y+60;
	
	

	SpriteSheet.draw(Game.ctx,tipo_aldeano,x,y,0,true);		
}


$(function() {
	document.oncontextmenu=new Function("return false");
    Game.initialize("game",sprites,startGame);
});





