


// $(function(){
//     $("#happy").click(function(){
//         alert('clicked!');
//     });
// });
function () {

var bouton = "";



$ ('select').on('click','#hurt', function () {
    bouton == 1;
   });

$ ('select').on('click','#happy', function () {
    bouton == 2;
   });

$ ('select').on('click','#sad', function () {
    bouton == 3;
   });

};

if (bouton == 1) {
	document.body.setAttribute("style", "background-color: black"); 
}

else if (bouton == 2) {
	document.body.setAttribute("style", "background-color: pink"); 
}

else (bouton == 3) {
	document.body.setAttribute("style", "background-color: blue"); 
}






	// if (bouton == true) {
	// 	$ ('select').on('change', function (){
	//   		document.body.setAttribute("style", "background-color: white"); 
	//   		});
	// };


	// });







