Game = new function() {                                                                  

    
    this.initialize = function(canvasElementId,sprite_data,callback) {
	this.canvas = document.getElementById(canvasElementId);
	this.width = this.canvas.width;
	this.height= this.canvas.height;

	this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
	if(!this.ctx){ 
		return alert("Please upgrade your browser to play"); 
    	}


    this.setupInput();
    this.loop(); 

    SpriteSheet.load (sprite_data,"sprites/tablero.png",callback);

    };
    
    
    
    var KEY_CODES = { 13 :'enter' , 32 :'space', 37:'left', 39:'right' };
    this.keys = {};

    this.setupInput = function() {
	$(window).keydown(function(event){
	    if (KEY_CODES[event.which]) {
		Game.keys[KEY_CODES[event.which]] = true;
		return false;
	    }
	});
	
	$(window).keyup(function(event){
	    if (KEY_CODES[event.which]) {
		Game.keys[KEY_CODES[event.which]] = false;
		return false;
	    }
	});
	
    }
    
    
   
    var boards = [];

    this.loop = function() { 
		

	// segundos transcurridos
	var dt = 50 / 1000;
	
	for(var i=0,len = boards.length;i<len;i++) {
	    if(boards[i]) { 
			boards[i].step();
			boards[i].draw(Game.ctx);
	    }
	}

	setTimeout(Game.loop,20);
    };
    
    
    this.setBoard = function(num,board){ 
	boards[num] = board; 
    };

};




SpriteSheet = new function() {


 this.map = { };


 this.load = function(spriteData,src,callback) {
    this.map = spriteData;
    this.image = new Image();
    this.image.onload = callback;
    this.image.src = src;
 };



 this.draw = function(ctx,sprite,x,y) {
 var img = this.map[sprite];
 if(!img.frames) img.frames = 0;
 	ctx.save();
    ctx.drawImage(this.image,
    img.sx + img.frames * img.w,
    img.sy,
    img.w, img.h,
    Math.floor(x), Math.floor(y),
    img.w, img.h);
    ctx.restore();
    };
}



TextScreen = function TextScreen(text,x,y,callback) {
    
    var up = false;

    this.step = function() {
	if(!Game.keys['enter']) up = true;
	if(up && Game.keys['enter'] && callback) callback();
    };


    
    this.draw = function(ctx) {
	ctx.fillStyle = "#000000";
	ctx.font = "65px Verdana";
	ctx.fillText(text,x,y);

    };
};





///////////////////////////////////////////////////


// GameBoard implementa un tablero de juego que gestiona la
// interacción entre los elementos del juego sobre el que se disponen
// los elementos del juego (fichas, cartas, naves, proyectiles, etc.)

// La clase GameBoard ofrece la interfaz step(), draw() para que sus
// elementos puedan ser mostrados desde el bucle principal del juego.
var GameBoard = function() {
    var board = this;
    // Colección de objetos contenidos por este tablero
    this.objects = [];

    // Añade obj a objects
    this.add = function(obj) { 
	obj.board=this;  // Para que obj pueda referenciar el tablero
	this.objects.push(obj); 
	return obj; 
    };

    // Los siguientes 3 métodos gestionan el borrado.  Cuando un board
    // está siendo recorrido (en step()) podría eliminarse algún
    // objeto, lo que interferiría en el recorrido. Por ello borrar se
    // hace en dos fases: marcado, y una vez terminado el recorrido,
    // se modifica objects.

    // Marcar un objeto para borrar
    this.remove = function(obj) { 
	this.removed.push(obj); 
    };

    // Inicializar la lista de objetos pendientes de ser borrados
    this.resetRemoved = function() { this.removed = []; }

    // Elimina de objects los objetos pendientes de ser borrados
    this.finalizeRemoved = function() {
	for(var i=0, len=this.removed.length; i<len;i++) {
	    // Buscamos qué índice tiene en objects[] el objeto i de
	    // removed[]
	    var idx = this.objects.indexOf(this.removed[i]);

	    // splice elimina de objects el objeto en la posición idx
	    if(idx != -1) this.objects.splice(idx,1); 
	}
    }

    // Iterador que aplica el método funcName a todos los
    // objetos de objects
    this.iterate = function(funcName) {
	// Convertimos en un array args (1..)
	   var args = Array.prototype.slice.call(arguments,1);
      
      _(this.objects).forEach(function (obj) {
         obj[funcName].apply(obj,args)
      });
   };
   

    // Devuelve el primer objeto de objects para el que func es true
    this.detect = function(func) {

      if (_(this.objects).find(function (obj) { return func.call(obj)})) {
         return _(this.objects).find(function (obj) { return func.call(obj)});
      }else{
         return false;
      };            
    };

    // Cuando Game.loop() llame a step(), hay que llamar al método
    // step() de todos los objetos contenidos en el tablero.  Antes se
    // inicializa la lista de objetos pendientes de borrar, y después
    // se borran los que hayan aparecido en dicha lista
    this.step = function(dt) { 
	this.resetRemoved();
	this.iterate('step',dt);
	this.finalizeRemoved();
    };

    // Cuando Game.loop() llame a draw(), hay que llamar al método
    // draw() de todos los objetos contenidos en el tablero
    this.draw= function(ctx) {
	this.iterate('draw',ctx);
    };

    


};
