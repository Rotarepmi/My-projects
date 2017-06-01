var time = function(){
	this.h = document.getElementById('hour').value;
	this.m = document.getElementById('min').value;
	this.s = document.getElementById('sek').value;
};
	
function resetCount(){
	
	clearInterval(myCount);
	
	document.getElementById('hour').removeAttribute("readonly");
	document.getElementById('min').removeAttribute("readonly");
	document.getElementById('sek').removeAttribute("readonly");

	document.getElementById('hour').value = "0";
	document.getElementById('min').value = "0";
	document.getElementById('sek').value = "0";	
	
	document.getElementById('start').removeAttribute("disabled");
	document.getElementById('stop').setAttribute("disabled", true);
	document.getElementById('reset').setAttribute("disabled", true);
}

function stopCount(){
	
	clearInterval(myCount);
	document.getElementById('start').removeAttribute("disabled");
	document.getElementById('stop').setAttribute("disabled", true);
}

function startCount(){
	
	document.getElementById('stop').removeAttribute("disabled");
	document.getElementById('reset').removeAttribute("disabled");
	document.getElementById('start').setAttribute("disabled", true);
	
	document.getElementById('hour').setAttribute("readonly", true);
	document.getElementById('min').setAttribute("readonly", true);
	document.getElementById('sek').setAttribute("readonly", true);	
	
	myCount = setInterval(count, 1000);
		
	var myTime = new time();
	
	function count(){
		
		if(myTime.h >= 0 && myTime.m >= 0 && myTime.s > 0){
			myTime.s --;
		}
		else if(myTime.h >= 0 && myTime.m > 0 && myTime.s == 0){
			myTime.s = 59;
			myTime.m --;
		}
		else if(myTime.h > 0 && myTime.m == 0 && myTime.s == 0){
			myTime.s = 59;
			myTime.m = 59;
			myTime.h --;
		}
		document.getElementById('hour').value = myTime.h;
		document.getElementById('min').value = myTime.m;
		document.getElementById('sek').value = myTime.s;
	}
}



