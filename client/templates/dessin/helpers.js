Template.dessin.onRendered(function() {
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  drawing = false;
  var x, y, prevX, prevY;

  canvas.onmousedown = function(e) {
    drawing = true;
    prevX = x;
    prevY = y;
  }

  canvas.onmouseup = function(e){
    drawing = false;
  }

  canvas.onmousemove = function(e){
    x = e.clientX;
    y = e.clientY;

    drawline(context, prevX, prevY, x, y);
    prevX = x;
    prevY = y;
    console.log("x > " + x)
    console.log("y > " + y)

  }

  function drawline(context, x1, y1, x2, y2){
    context.moveTo(x1,y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

});
