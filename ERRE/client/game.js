var sprites = {
        
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

	Fondo: { sx: 0, sy: 270, w: 90, h: 90, frames: 0}, 


	BackSide: { sx: 0, sy: 180, w: 90, h: 90, frames: 4}, 

	num1: { sx: 0, sy: 360, w: 90, h: 90, frames: 1},
	num2: { sx: 0, sy: 360, w: 90, h: 90, frames: 2},
	num3: { sx: 0, sy: 360, w: 90, h: 90, frames: 3},
    
};


var startGame = function() {
    
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",10,50,playGame));
  
  	
}


var playGame = function() {
 	tablero();
	var p1 = new points(125,"ALBERTO",830,300);
	var p2 = new points(300, "JONA",830,350);
	var p3 = new points(500, "MORATA",830,400);
	Game.setBoard(2,p1);
	Game.setBoard(3,p2);
	Game.setBoard(4,p3);
	Game.setBoard(0,new TextScreen("",0,0,card));
}



var card = function(){
	Game.setBoard(1,new NewCard(sprites));
}

var NewCard = function (sprites){
	var ran = Math.floor((Math.random() * 24) + 1);
	var sp;
	var cont = 0;

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
		SpriteSheet.draw(Game.ctx,sp,this.x,this.y);
    };

   this.step = function() {
	    var that = this;	

		window.onclick = function(e){
			mX = e.pageX;
			mY = e.pageY;

			cX = Math.floor((mX-100)/90);
			cY = Math.floor((mY-100)/90);
	
			if((mX > 100) && (mX < 910) && (mY > 190) && (mY < 730) && (entro == false)){
				console.log(cX + "," + cY);
				entro = true;
				that.x = cX * 90;
				that.y = cY * 90;	
			}
		}

    };					
						


}
   

var tablero = function(){
	for(i = 1;i<7;i++){
		for(j = 0;j<9;j++){
			SpriteSheet.draw(Game.ctx,"Fondo",j*90,i*90);	
		}
	}
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





$(function() {
    Game.initialize("game",sprites,startGame);
});





