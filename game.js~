$(function () {
	console.log(Meteor.userId());
	var cnvs = document.getElementById("game");
	var cnvsctx = cnvs.getContext && cnvs.getContext('2d');
	if(!cnvsctx) { return alert("Please upgrade your browser to play"); }
	cnvsctx.save();
	cnvsctx.fillRect(0,0,800,600);
	cnvsctx.fillStyle="rgb(255,255,255)";
	cnvsctx.font="bold 50px Arial";	

});
