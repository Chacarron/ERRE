var sprites = {
        
    first: { sx: 0, sy: 0, w: 868/12, h: 522/7, frames: 12}, 
        dos: { sx: 0, sy: 522/7, w: 868/12, h: 522/7, frames: 12}, 
	tres: { sx: 0, sy: 522*2/7, w: 868/12, h: 522/7, frames: 12}, 
	cuatro: { sx: 0, sy: 522*3/7, w: 868/12, h: 522/7, frames: 12}, 
	cinco: { sx: 0, sy: 522*4/7, w: 868/12, h: 522/7, frames: 12}, 
	seis: { sx: 0, sy: 522*5/7, w: 868/12, h: 522/7, frames: 12}, 
	siete: { sx: 0, sy: 522*6/7, w: 868/12, h: 522/7, frames: 12}, 
             
    
};

var startGame = function() {
    
    Game.setBoard(0,new TitleScreen("ERRE GAME(PULSE ENTER)",playGame));
    
    
}


var playGame = function() {
  Game.setBoard(0,new tablero());
}

var tablero = function(){
  	
    this.step = function(dt) {
       
    };
    
    this.draw = function(ctx) {
	var cont = 868/12;
        for(i = 0;i<12;i++){
		
        	SpriteSheet.draw(Game.ctx,"first",(868/12)+(cont*i),522/7,i);
		SpriteSheet.draw(Game.ctx,"dos",(868/12)+(cont*i),522*2/7,i);
		SpriteSheet.draw(Game.ctx,"tres",(868/12)+(cont*i),522*3/7,i);
		SpriteSheet.draw(Game.ctx,"cuatro",(868/12)+(cont*i),522*4/7,i);
		SpriteSheet.draw(Game.ctx,"cinco",(868/12)+(cont*i),522*5/7,i);
		SpriteSheet.draw(Game.ctx,"seis",(868/12)+(cont*i),522*6/7,i);
		SpriteSheet.draw(Game.ctx,"siete",(868/12)+(cont*i),522*7/7,i);
	}
        
    };	
  
}

$(function() {
    Game.initialize("game",sprites,startGame);
});





