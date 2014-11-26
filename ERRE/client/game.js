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


	BackSide: { sx: 0, sy: 180, w: 90, h: 90, frames: 4}, 

	num1: { sx: 0, sy: 360, w: 90, h: 90, frames: 1},
	num2: { sx: 0, sy: 360, w: 90, h: 90, frames: 2},
	num3: { sx: 0, sy: 360, w: 90, h: 90, frames: 3},
    
};



var startGame = function() {
    
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",10,50,playGame));
    Game.setBoard(2,new TextScreen("",0,0,card));
}


var playGame = function() {
  Game.setBoard(1,new tablero());

}

var card = function(){

	Game.setBoard(3,new NewCard(sprites));

}
   

var tablero = function(){
    

    this.draw = function(ctx) {
		SpriteSheet.draw(Game.ctx,"Cruce3",0,90);
		SpriteSheet.draw(Game.ctx,"num1",0,90);
		SpriteSheet.draw(Game.ctx,"CiudadS",90,90);
		SpriteSheet.draw(Game.ctx,"num2",90,90);
		SpriteSheet.draw(Game.ctx,"CiudadF",180,90);
		SpriteSheet.draw(Game.ctx,"num3",180,90);
		SpriteSheet.draw(Game.ctx,"BackSide",600,270);
    };	
  
}





$(function() {
    Game.initialize("game",sprites,startGame);
});





