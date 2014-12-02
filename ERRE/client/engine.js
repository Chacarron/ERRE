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



 	this.draw = function(ctx,sprite,x,y,grades) {
	 	var img = this.map[sprite];
	 	if(!img.frames) img.frames = 0;
	 	ctx.save();
		if(grades){ 
			//ctx.translate(x,y);
			//ctx.translate(img.w,img.h);
			//ctx.rotate(grades*Math.PI/180);
		}
		ctx.drawImage(this.image,  img.sx + img.frames * img.w,   img.sy,img.w, img.h,Math.floor(x), Math.floor(y),  img.w, img.h);
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


