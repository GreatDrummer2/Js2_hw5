window.onload = function() 
{   
  var elem = document.getElementById('canvas');         
   var context = elem.getContext('2d');
   if (!context) {
    alert('Скачай нормальный браузер');
    return;
   }
    // Цвет обводки
    context.strokeStyle = '#f00';
    // Цвет заливки
    context.fillStyle = '#ff0';
    // Толщина линий
    context.lineWidth = 2;

    // Рисуем голову. Рисование всегда начинается с beginPath
    context.beginPath();
    // Размечаем дугу с центром в точке (150, 150), радиусом 100px, начальным углом 0, конечным 360 градусов, рисование производится по часовой стрелке. Иными словами получаем окружность
    context.arc(100,100,60,0,2*Math.PI);
    // Обводим
    context.stroke();
    // Завершаем рисование
    context.closePath();          
};
