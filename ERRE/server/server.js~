Meteor.publish("all_players", function () {
  return Players.find(); 
});


Players.allow({
   insert: function(userId, u){
      return true;
   }
});


/****** INSERTTTTTTT*/

Meteor.startup(function() {


var ids = [];
var usuarios = Meteor.users.find();

usuarios.forEach(function(x){
	var cont = 0;
	ids[cont] = x._id;
	cont++;
 });

   Players.insert({
      turno: ids[0],
      ficha: null,
      fx: 0,
      fy: 0,
      aldeano: 0,
      score: 0,
      fin: false
   });


	
});
