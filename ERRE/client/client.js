
Meteor.subscribe("all_players");

var update = null;
Tracker.autorun(function(){
  update = Players.find();

  update.forEach(function(x){
		if(x.turno == Meteor.userId()){
     		console.log("ES MI TURNO");
		}
  });

});

/***********
***INICIALIZANDO EL JUEGO
*****/

Meteor.startup(function () {

   console.log("arrancando startup");
 
   
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

