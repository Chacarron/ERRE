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
    
    
    
    var KEY_CODES = { 13 :'enter' , 32 :'space' };
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
	
	
	for(var i=0,len = boards.length;i<len;i++) {
	    if(boards[i]) { 
		if(boards[i].step){
			boards[i].step();
		}
		if(boards[i].draw){
			boards[i].draw(Game.ctx);
		}
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
    ctx.drawImage(this.image,
    img.sx + img.frames * img.w,
    img.sy,
    img.w, img.h,
    Math.floor(x), Math.floor(y),
    img.w, img.h);
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



NewCard = function NewCard(sprites){
	var ran = Math.floor((Math.random() * 24) + 1);
	var sp;
	var cont = 0;

	for (key in sprites) {
   		if(cont == ran){
			sp = key;
			break;
		}
		cont++;
	}


    this.draw = function(ctx) {
		SpriteSheet.draw(Game.ctx,sp,0,270);
    };
};










