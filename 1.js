function Clock(options){
  var elem;
  var button = document.createElement('div');
  var interval;

  function getElem(){
    if(!elem) render();
    return elem;
  }

  function render(){
    elem = document.createElement('div');
    elem.className = 'clock';
    button.className = 'alert';
    button.innerHTML = options.butTitle;
    elem.appendChild(button);
  }
  
  button.onclick = function(event){
    toggle();
  }

  function renderClockFace(){
    var num = document.createElement('div');
    num.className = 'num';
    elem.appendChild(num); 
     interval = setInterval(function (){
      arrColors = ['green','sky','purple','orange'];
      arrTime = ['00','15','30','45'];
      arrColors.forEach(function(item){
        num.classList.remove(item);
      });
      var d = new Date();
      var h = d.getHours();
      if(h< 10) h = '0'+ h;
      var m = d.getMinutes();
      if(m< 10) m = '0'+ m;
      var s = d.getSeconds();
      if(s< 10) s = '0'+ s;
      for(var i =0;i < arrTime.length;i++){
        if(s == arrTime[i]) num.classList.add(arrColors[i]);
      };
      num.textContent = '['+ h + ':' + m + ':' + s + ']';
    },1000);
  }

   function open(){
    if (!elem.querySelector('.num')) {
      renderClockFace();
    }
    elem.getElementsByClassName('num')[0].classList.add('open');
   }

   function close(){
    elem.removeChild(elem.lastElementChild);
   }
   function toggle(){
    if(elem.lastElementChild.classList.contains('open')){
      close()
    }
    else{
      open()
    } ///////////// ELSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   }

  this.getElem = getElem;
}

var clock = new Clock({butTitle:'ALERT'});
var elem = clock.getElem();
document.body.appendChild(elem);