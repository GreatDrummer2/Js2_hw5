function Clock(options){
  var elem;
  
  function getElem(){
    if(!elem) render();
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

  this.getElem = getElem;
}

var clock = new Clock({butTitle:'Alert'});
var elem = clock.getElem();
document.body.appendChild(elem);
    