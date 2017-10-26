Template.dessin.onRendered(function() {
  canvas = document.getElementById('myCanvas');
  canvas.width = 600;
  canvas.height = 600;
  context = canvas.getContext('2d');

  var tmp  = canvas.getBoundingClientRect();

  var offsetX = tmp.left;
  var offsetY = tmp.top;

  //width = window.innerWidth;
  //height = window.innerHeight;

  // canvas.width = width;
  // canvas.height = height;

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
    x = e.clientX - offsetX;
    y = e.clientY - offsetY;


    if(drawing){
      drawline(context, prevX, prevY, x, y);
      prevX = x;
      prevY = y;
    console.log("x > " + x)
    console.log("y > " + y)
    }
  }

  function drawline(context, x1, y1, x2, y2){
    context.moveTo(x1,y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

});
