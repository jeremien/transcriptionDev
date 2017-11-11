Template.dessin.events({

  "click #btn": function(event){
  event.preventDefault();
  var canvas = document.getElementById('myCanvas');
  var dataURL = canvas.toDataURL();
  console.log(dataURL);

    Dessin.insert({
      url: dataURL,
      meta : {
        date : Date.now()
      }
    });

  }/*,
  "mousemove #myCanvas" : function(event){
    //console.log(event.clientX)
    /*x = event.clientX - offsetX;
    y = event.clientY - offsetY;

    function drawline(context, x1, y1, x2, y2){
      context.moveTo(x1,y1);
      context.lineTo(x2, y2);
      context.stroke();
    }

    if(drawing){
      drawline(context, prevX, prevY, x, y);
      prevX = x;
    prevY = y;
    console.log("x > " + x)
    console.log("y > " + y)
  }
}*/



});
