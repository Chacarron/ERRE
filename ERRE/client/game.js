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



    
};



var startGame = function() {
    
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",10,50,playGame));
    
    
}


var playGame = function() {
  Game.setBoard(2,new TextScreen("PULSE ESPACE",300,500));
  Game.setBoard(0,new tablero(newCard));

}

var newCard = function() {
 	Game.setBoard(1,new show());
}


var show = function(){

    this.step = function(dt) {
	
    };
    
    this.draw = function(ctx) {
	SpriteSheet.draw(Game.ctx,"CiudadR",200,450);
    };	
  
}


var tablero = function(callback){

    this.step = function(dt) {
	if(!Game.keys['space']) up = true;
	if(up && Game.keys['space'] && callback) callback();
    };
    
    this.draw = function(ctx) {
	SpriteSheet.draw(Game.ctx,"Cruce3",0,90);
        SpriteSheet.draw(Game.ctx,"CiudadS",90,90);
	SpriteSheet.draw(Game.ctx,"CiudadF",180,90);
	SpriteSheet.draw(Game.ctx,"MonGranja",270,90);
	SpriteSheet.draw(Game.ctx,"BackSide",600,270);

    };	
  
}





$(function() {
    Game.initialize("game",sprites,startGame);
});





