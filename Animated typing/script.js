// code by Jakub Mandra

window.onload = setTimeout(function(){
  
  // text to be displayed
  var startSentence = "Hi, I`m Jacob.";
  var secondSentence = "I`m doing 100DaysOfCoding challenge.";
  var thirdSentence = "I want to become a developer :)";
  
  // spliting into arrays
  var startLetters = startSentence.split("");
  var secondLetters = secondSentence.split("");
  var thirdLetters = thirdSentence.split("");
  
  // vars for further text typing
  var i=0;
  var showText = "";
  var showSecText = "";
  var showThirdText = "";
  
  // typing function with interval set on 50ms
  setInterval(iterate, 50);
  function iterate(){
    
	// write first sentence, each letter is added to string variable
    if(i<startLetters.length){
      showText += startLetters[i]; 
	    document.getElementById("start-sentence").innerHTML = showText;
    }
	
	// +10 for some timeout
    if(i>startLetters.length + 10){
      if(i<secondLetters.length + startLetters.length + 11){
        showSecText += secondLetters[i - startLetters.length - 11];
        document.getElementById("second-sentence").innerHTML = showSecText;
      }
	  
      if(i>secondLetters.length + startLetters.length + 30){
        var len = showSecText.length + (secondLetters.length + startLetters.length + 30) - i;
        var trimed = showSecText.substr(0, len);
        document.getElementById("second-sentence").innerHTML = trimed;
      }    
	  
      if(i>secondLetters.length*2 + startLetters.length + 50 && i<secondLetters.length*2 + startLetters.length + 50 + thirdLetters.length + 1){
        showThirdText += thirdLetters[i - (secondLetters.length*2 + startLetters.length + 51)];
        document.getElementById("third-sentence").innerHTML = showThirdText;
      }
    }
    i++;  
  }
}, 1000);