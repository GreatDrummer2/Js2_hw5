var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

context.strokeStyle = ;
ctx.beginPath();
ctx.arc(250, 350, 150, 0,2*Math.PI);
ctx.stroke();
ctx.closePath();

context.strokeStyle = ;
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(150,300);
ctx.lineTo(150,250);
ctx.lineTo(200,250);
ctx.lineTo(200,300);
ctx.stroke();
ctx.closePath();

context.strokeStyle = ;
ctx.beginPath();
ctx.moveTo(250,350);
ctx.lineTo(250,250);
ctx.lineTo(350,250);
ctx.lineTo(350,350);
ctx.lineTo(250,350);
ctx.stroke();
ctx.closePath();

context.strokeStyle = ;
ctx.beginPath();
ctx.arc(250, 400, 90,Math.PI ,2*Math.PI,true);
ctx.moveTo(160,400);
ctx.lineTo(340,400);
ctx.stroke();
ctx.closePath();

context.strokeStyle = ;
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

