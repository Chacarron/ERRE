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

   Players.insert({
      empezar: false,
      ficha: null,
      fx: 0,
      fy: 0,
      aldeano: 0,
      score: 0,
      fin: false
   });
});
