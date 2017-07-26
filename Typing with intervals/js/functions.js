'use strict';
  
const txtContainer = document.getElementById('myTxt');

let txt = txtContainer.innerText.split(""),
    newTxt = "",
    i = 0,
    timeout;

// Reset containers text
txtContainer.innerText = "";

let animateTyping = () => {
  newTxt += txt[i];
  txtContainer.innerText = newTxt;
  
  // Random number focused between 20 - 50 for more humanlike typing
  let randomNum;
  Math.random() <= .2 ? randomNum = random(350, 100) : randomNum = random(40, 100);
  
  // Timeout to for next function iteration will be random
  timeout = setTimeout(animateTyping, randomNum);

  // Prevent infinite reapeting
  i < txt.length-1 ? i++ : clearTimeout(timeout);
}

function random (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = setTimeout(animateTyping,2000);