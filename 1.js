function Clock(options){
  var elem;
  
  function getElem(){
    if(!elem){
      render();
      renderClockFace();
      setTimeout(open, 1000);
    } 
    return elem;
  }

  function render(){
    elem = document.createElement('div');
    elem.className = 'clock';

    var button = document.createElement('div');
    button.className = 'alert';
    button.innerHTML = options.butTitle;
    elem.appendChild(button);
  }

  /*elem.onclick = function(event){
    if(event.target.closest('clock')){
      toggle();
    }
  }*/

  function renderClockFace(){
    var num = document.createElement('div');
    num.className = 'num';
    elem.appendChild(num); 
    function date(){
      var d = new Date();
      var h = d.getHours();
      if(h< 10) h = '0'+ h;
      var m = d.getMinutes();
      if(m< 10) m = '0'+ m;
      var s = d.getSeconds();
      s+=1;
      if(s< 10) s = '0'+ s;
      num.textContent = '['+ h + ':' + m + ':' + s + ']';
    }
    setInterval(date,1000);
    elem.appendChild(num)
  }

   function open(){
    var num = elem.getElementsByClassName('num');
    console.log(num);
    num.classList.add('open');
   }

   /*function toggle(){

   }*/

  this.getElem = getElem;
}

var clock = new Clock({butTitle:'ALERT'});
var elem = clock.getElem();
document.body.appendChild(elem);
   