(function (global) {
	'use strict';
	
	var pln,
			eur,
			btn,
			input;
	
	input = document.querySelector('#eur-amount');
	
	var createTile = function () {
		
		var appContainer = document.querySelector('.main-app-container'),
				inputContainer = document.querySelector('.eur-converter'),
				tileContainer = document.createElement('div'),
				amountContainer = document.createElement('div'),
				timeEl = document.createElement('p'),
				time = new Date();
		
		eur = input.value;
		var exchange = 4.2*(1+(Math.random()*100)/1000);
		pln = eur * exchange;
		pln = pln.toFixed(4);

		var year = time.getFullYear();
		
		var month = time.getMonth();
		month += 1;
		month < 10 ? month = "0" + month : month;
		
		var day = time.getDate();
		day < 10 ? day = "0" + day : day;
		
		var hours = time.getHours();
		hours < 10 ? hours = "0" + hours : hours;
		
		var minutes = time.getMinutes();
		minutes < 10 ? minutes = "0" + minutes : minutes;
		

		tileContainer.classList.add('mockup');
		amountContainer.classList.add('amount');

		amountContainer.innerHTML = "<h2>PLN AMOUNT</h2><p>"+pln+"</p>";
		timeEl.innerHTML = "<i class='icon-clock-1'></i> <time>"+year+"."+month+"."+day+" "+hours+":"+minutes+"</time>";
		
		tileContainer.appendChild(amountContainer);
		tileContainer.appendChild(timeEl);
		appContainer.insertBefore(tileContainer, inputContainer.nextSibling);
	};
	
	btn = document.querySelector('#convert-btn');
	btn.addEventListener('click', createTile, false);

}(this.window));