
function ex1 (n1, n2) {
	if (n1 == n2) {
		console.log ("hello world")
	}	
}
ex1 (1,1)



	function ex2() {
			var string1 = "hello ";
			var string2 = "world";	
		document.write(string1 , string2);	
	}
	ex2()



function ex3 (string1, string2) {
	var stringHello = "Hello";
	var stringGoodbye = "Goodbye";

	if (string1 == "Hello") {
		document.write ("Hi!")	
	}

	if (string2 == "Goodbye") {
		document.write ("Bye!")
	}

}

ex3("Hello", "cool")
ex3("yeah", "Goodbye")



	function ex4(number){
		
	if ( number >= 10) { 
		console.log(" true") }
	if ( number <= 10) {
		console.log("false")}

	}
	ex4 (11)
	ex4(4)



function ex5 () {
document.write(" ","1","2","3","4","5","6","7","8","9","10");
}

ex5()





function ex6() {
	var medium = 10;
	var	max = 20;


			for (var count=0; count <= max; count++) {


	if (count <= medium ) {
 
		document.write ("small")}

	else { document.write ("large") }

		document.write (count)
	}

}

ex6() 


	function ex7() {
		var	maxx = 100;


		for (var countt=0; countt <= maxx; countt++) {

		if( countt % 3 == 0 ){
        document.write("fizz")
    	}

    if( countt % 5 == 0 ){
        document.write("buzz")
    	}

    if( ( countt % 3 == 0 ) && ( countt % 5 == 0 ) ){
        document.write("fizzbuzz")
		}
	}

	}

	ex7()





