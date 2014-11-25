var sprites = {
        //FILA 1
	caminocurva: {sx: 0, sy: 0, w: 868/12, h: 522/7, frames: 0},
	caminorectociudad: {sx:868/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	caminorecto: {sx:868*2/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	caminocurvaciudad: {sx:868*3/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	granciudad: {sx:868*4/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	granciudadplus: {sx:868*5/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	lateralciudad: {sx:868*6/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	monasterio: {sx:868*7/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	esquinaciudad: {sx:868*9/12, sy: 0, w: 868/12, h: 522/7, frames: 0},
	campociudadplus: {sx:868*11/12, sy: 0, w: 868/12, h: 522/7, frames: 0},


// FILA 2
	crucecaminos: {sx:0, sy: 522/7, w: 868/12, h: 522/7, frames: 0},
        crucecaminosciudad: {sx:868*3/12, sy: 522/7, w: 868/12, h: 522/7, frames: 0},
	esquinascaminociudad: {sx:868*4/12, sy: 522/7, w: 868/12, h: 522/7, frames: 0},
	doblelateralciudad: {sx:868*6/12, sy: 522/7, w: 868/12, h: 522/7, frames: 0},
	dobleopuestociudad: {sx:868*7/12, sy: 522/7, w: 868/12, h: 522/7, frames: 0},
	centrociudadplus: {sx:868*10/12, sy: 522/7, w: 868/12, h: 522/7, frames: 0},


//FILA 3

	granciudadcaminoplus: { sx: 868*6/12, sy: 522*2/7, w: 868/12, h: 522/7, frames: 0}, 
	esquinacaminociudadplus: { sx: 868*9/12, sy: 522*2/7, w: 868/12, h: 522/7, frames: 0}, 
	
//FILA 4

	finalrio1: { sx: 0, sy: 522*3/7, w: 868/12, h: 522/7, frames: 0}, 
	monasteriopuente: { sx: 868/12, sy: 522*3/7, w: 868/12, h: 522/7, frames: 0}, 
	ciudadpuente: { sx: 868*2/12, sy: 522*3/7, w: 868/12, h: 522/7, frames: 0}, 
	esquinariociudad: { sx: 868*3/12, sy: 522*3/7, w: 868/12, h: 522/7, frames: 0}, 

//FILA 5

	curvario: { sx: 0, sy: 522*4/7, w: 868/12, h: 522/7, frames: 0}, 
	riopuente: { sx: 868/12, sy: 522*4/7, w: 868/12, h: 522/7, frames: 0}, 
	dobleopuestociudadrio: { sx: 868*2/12, sy: 522*4/7, w: 868/12, h: 522/7, frames: 0}, 
	esquinacaminorio: { sx: 868*3/12, sy: 522*4/7, w: 868/12, h: 522/7, frames: 0}, 
	granciudadcamino: { sx: 868*4/12, sy: 522*4/7, w: 868/12, h: 522/7, frames: 0}, 


//FILA 6
	riorecto: { sx: 0, sy: 522*5/7, w: 868/12, h: 522/7, frames: 0}, 
	xcaminos: { sx: 868*8/12, sy: 522*5/7, w: 868/12, h: 522/7, frames: 0}, 
      
//FILA 7       
	finalrio2: { sx: 868*2/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	ciudadrectaplus: { sx: 868*4/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	ciudadrectaplus: { sx: 868*5/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	monasteriocamino: { sx: 868*11/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 


//COLORES

	rojo: { sx: 868*2/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	amarillo: { sx: 868*2/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	azul: { sx: 868*2/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
	verde: { sx: 868*2/12, sy: 522*6/7, w: 868/12, h: 522/7, frames: 0}, 
    
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
	
        SpriteSheet.draw(Game.ctx,"caminocurva",868/12,522/7,0);
	SpriteSheet.draw(Game.ctx,"monasterio",868/12,522*2/7,0);
	SpriteSheet.draw(Game.ctx,"finalrio2",868/12,522*3/7,0);
	SpriteSheet.draw(Game.ctx,"esquinascaminociudad",868/12,522*4/7,0);
	SpriteSheet.draw(Game.ctx,"granciudadcaminoplus",868/12,522*5/7,0);
	
	
    };	
  
}

$(function() {
    Game.initialize("game",sprites,startGame);
});





