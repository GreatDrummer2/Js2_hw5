function Clock(options){
  var elem;
  var button = document.createElement('div');
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
    function date(){
      var d = new Date();
      var h = d.getHours();
      if(h< 10) h = '0'+ h;
      var m = d.getMinutes();
      if(m< 10) m = '0'+ m;
      var s = d.getSeconds();
      if(s< 10) s = '0'+ s;
      if(s == '00') num.classlist.add('green');
      num.textContent = '['+ h + ':' + m + ':' + s + ']';
    }
    setInterval(date,1000);
  }

   function open(){
    if (!elem.querySelector('.num')) {
      renderClockFace();
    }
    elem.getElementsByClassName('num')[0].classList.add('open');
   }

   function close(){
    elem.getElementsByClassName('num')[0].classList.remove('open');
   }
   function toggle(){
    if(elem.lastElementChild.classList.contains('open')) close();
    open();
   }

  this.getElem = getElem;
}

var clock = new Clock({butTitle:'ALERT'});
var elem = clock.getElem();
document.body.appendChild(elem);