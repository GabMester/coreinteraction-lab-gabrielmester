


// $(function(){
//     $("#happy").click(function(){
//         alert('clicked!');
//     });
// });


$ ('select').change(function (event){

var value= event.target.value ;

console.log(value);

if (value == "hurt") {
	document.body.setAttribute("style", "background-color: red"); 

}

else if (value == "happy") {
	
	document.body.setAttribute("style", "background-color: pink"); 
}

else if (value == "sad") {

	document.body.setAttribute("style", "background-color: blue"); 
}

});






	// if (bouton == true) {
	// 	$ ('select').on('change', function (){
	//   		document.body.setAttribute("style", "background-color: white"); 
	//   		});
	// };


	// });







