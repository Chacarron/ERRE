
Meteor.subscribe("all_players");

var update = null;
Tracker.autorun(function(){
  update = Players.find();
   console.log(update);

   update.forEach(function(x){
      console.log("entro");
      console.log(x.u);
   });
   console.log("salgo");
});

/***********
***INICIALIZANDO EL JUEGO
*****/

Meteor.startup(function () {

   console.log("arrancando startup");
   console.log(Meteor.userId());
   var player = Players.findOne({
         userId:"Pepito",
         u:"2"
   });
   console.log(player.u);
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

