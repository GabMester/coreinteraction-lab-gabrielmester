

var awake = document.getElementById('awake');
var sleepy = document.getElementById('sleepy');
var bouton = false;

$ ('select').on('change', function () {
    document.body.setAttribute("style", "background-color: black"); 
  var bouton = true;


	if (bouton == true) {
		$ ('select').on('change', function (){
	  		document.body.setAttribute("style", "background-color: white"); 
	  		});
	};


	});







