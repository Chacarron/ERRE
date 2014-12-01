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

var img = new Image();
img.src = "sprites/fondo.jpg";

var startGame = function() {
    
    Game.setBoard(0,new TextScreen("ERRE GAME(PULSE ENTER)",10,50,playGame));
    Game.setBoard(3,new TextScreen("",0,0,card));
  	
}


var playGame = function() {
  Game.setBoard(1,new tablero());
  Game.setBoard(2,new grids);
}


var grids = function() {
	this.draw = function(ctx) {
		ctx.save();
		for(var x=0; x<=600; x=x+90){
			ctx.moveTo(x,0);
			ctx.lineTo(x,360);
		};
	
		for(var y=0; y<=400; y=y+90){
			ctx.moveTo(0,y);
			ctx.lineTo(540,y);
		};

		ctx.strokeStyle ="#000";
		ctx.stroke();
		ctx.restore();
	};
	this.step= function(dt){ };
}

var card = function(){

	Game.setBoard(4,new NewCard(sprites));

}

var NewCard = function (sprites){
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

	this.x = 600;
	this.y = 20;

    this.draw = function(ctx) {
		SpriteSheet.draw(Game.ctx,sp,this.x,this.y);
    };

   this.step = function() {
		/*if(!Game.keys['left']) up = true;
		if(up && Game.keys['left']) 
			{this.x += 50;}
	    */
	    var that = this;
		 var mouseX = 0;
		 var mouseY = 0;
		 var oldX,oldY;
		 var dentro = false;
		//eventos del raton
		 $('#game').mousedown(function(e) {    
		  //se capturan coordenas del mouse
		  mouseX = e.pageX;
		  mouseY = e.pageY;	
		if ( (mouseX>600 && (mouseX < 600 + 90)  &&
	     (mouseY>20) && (mouseY < (20 + 90 ) ) ))
		   {
		    // coordenas X,Y donde se hizo clic
		    oldX = (mouseX - e.currentTarget.offsetLeft) - that.x;
		    oldY = (mouseY - e.currentTarget.offsetTop) - that.y;
	
		    dentro = true;
		    //alert("DENTRO! x:" + oldX + ", y:" + oldY );    
		}
	    });

		 $('#game').mousemove(function(e) { 
			  mouseX = e.pageX - e.currentTarget.offsetLeft;
			  mouseY = e.pageY - e.currentTarget.offsetTop;
			  //si existe un shape seleccionado
			  if (dentro) {
			   //se calcula la distancia del dezplazamiento
			   var dx =  mouseX - oldX ;
			   var dy =  mouseY - oldY ;   
			   //se asignan nuevos valores
			   //se actualiza coordenadas X,Y del shape seleccionado
			   that.x = dx;
			   that.y = dy;
			   //alert("move! x:" + oldX + ", y:" + oldY );
			   //alert(this.x);   
			}
		});


		$('#game').mouseup(function(e) {    
		  //se capturan coordenas del mouse	
		    dentro = false;  
		});
		   
    };					
						


}
   

var tablero = function(){
    

    this.draw = function(ctx) {
	    ctx.drawImage(img, 0, 0, 540, 360); 
    };	
  
}





$(function() {
    Game.initialize("game",sprites,startGame);
});





