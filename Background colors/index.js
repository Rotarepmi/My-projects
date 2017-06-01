// Cody by Jakub Mandra 

	function colorFunction(event){
		var x = event.clientX;
		var y = event.clientY;
		
		var width = ($(document).width())/255;
		var height = ($(document).height())/255;
		
		
		var a = parseInt(x/width);
		var b = parseInt(y/height);
		
		document.getElementById("demo").innerHTML = a+"<br/>"+b;
		
		$("body").css("background-color", "rgb("+a+",0,"+b+")");
	};
	
	
	
	

