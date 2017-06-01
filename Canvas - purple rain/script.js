// JS document by Jakub Mandra

window.onload = function() {

  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d", {
    alpha: false
  });

  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  var drops = new Array();
  var numOfDrops = 1000;

  // building an array of drops with different variables

  for (var i = 0; i < numOfDrops; i++) {
    var d = new Object();
    d.y = Math.floor((Math.random() * ((-100) + (-499))) - 500); // y position
    d.x = Math.floor((Math.random() * width) + 1); // x position
    d.speedY = Math.floor((Math.random() * (30 - 9)) + 8); // speed of falling
    d.dropLength = Math.floor((Math.random() * (20 - 11)) + 10);
    d.dropWidth = Math.floor((Math.random() * 3) + 1);
    d.a = Math.random(); // density of drop
    d.color = 'rgba(128,0,128,' + d.a + ')';
    drops.push(d); // push every drop obj into arr
  }

  render();

  function render() {

    // clear canvas at averey loop

    context.clearRect(0, 0, width, height);

    // draw drops

    drops.forEach(function(d) {

      context.fillStyle = d.color;
      context.beginPath();
      context.rect(d.x, d.y, d.dropWidth, d.dropLength, false);
      context.closePath();
      context.fill();

      d.y += d.speedY; // drops falling
 
      // reseting drops position and speed 

      if (d.y > height) {
        d.y = Math.floor((Math.random() * ((-100) + (-499))) - 500);
      }

    });

    requestAnimationFrame(render); // request drawing function
  }
};