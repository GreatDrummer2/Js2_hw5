function MyCanvas(options){
  var wrapper = document.createElement('div');
  wrapper.className = 'wrapper'; 
  document.body.appendChild(wrapper);
  var title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = options.title;
  wrapper.appendChild(title);
  var form = document.createElement('form');
  wrapper.appendChild(form);
  form.id = 'form0';
  options.placeholder.forEach(function(item,i){
    var input = document.createElement('input');
    wrapper.appendChild(input);
    input.id = 'input'+i;
    if( i != 5){
      input.type = 'text';
      input.placeholder = item;
    }
    else{
      input.type = 'submit';
      input.value = item;
    }
  });
  var canvas = document.createElement('canvas');
  wrapper.appendChild(canvas);
  canvas.id = 'canvas';
  canvas.style.width = '500px';
  canvas.style.height = '500px';
  
  var arrayForInfo = [];

  document.getElementById('input5').onclick = function(){
    arrayForInfo = $(":text").map(function(item){
    var color = this.value.match(/#[0-9A-F]{6}|#[0-9A-F]{3}/g);
    if(color){
      return color;
    } // почему не работает $("form0").serializeArray(); ??????????
    else{
      return "#000";
    }
    });
  }
  var canva = document.getElementById("canvas");
  var ctx = canva.getContext("2d");

  ctx.strokeStyle = arrayForInfo[0];
  ctx.beginPath();
  ctx.arc(250, 350, 150, 0,2*Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = arrayForInfo[1];
  ctx.beginPath();
  ctx.moveTo(200,300);
  ctx.lineTo(150,300);
  ctx.lineTo(150,250);
  ctx.lineTo(200,250);
  ctx.lineTo(200,300);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = arrayForInfo[2];
  ctx.beginPath();
  ctx.moveTo(250,350);
  ctx.lineTo(250,250);
  ctx.lineTo(350,250);
  ctx.lineTo(350,350);
  ctx.lineTo(250,350);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = arrayForInfo[3];
  ctx.beginPath();
  ctx.arc(250, 400, 90,Math.PI ,2*Math.PI,true);
  ctx.moveTo(160,400);
  ctx.lineTo(340,400);
  ctx.stroke();
  ctx.closePath();

  ctx.strokeStyle = arrayForInfo[4];
  ctx.beginPath();
  ctx.moveTo(100,350);
  ctx.lineTo(80,100);
  ctx.lineTo(165,227);
  ctx.lineTo(250,85);
  ctx.lineTo(335,227);
  ctx.lineTo(420,100);
  ctx.lineTo(400,350);
  ctx.stroke();
  ctx.closePath();
}

var newCanvas = new MyCanvas({title:"CANVAS",
placeholder:["Color of the face","Color of the right eye","Color of the left eye","Color of the mouse",
"Color of the hair","Submit"]
});