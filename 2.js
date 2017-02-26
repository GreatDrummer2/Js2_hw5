function Voting(options){
  var elem;

  ;(function getElem(){
    if(!elem){
      render();
    }
    return elem;
  })();

  function render(){
    elem = document.createElement('div');
    elem.className = 'wrapper';
    document.body.appendChild(elem);
    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = options.title;
    elem.appendChild(title);
    options.signArr.forEach(function(item,i){
    var sign = document.createElement('div');
    sign.className = 'sign';
    sign.id = 'sign'+i;
    if(i == 1){
      sign.classList.add('blue');
    }
    sign.innerHTML = item;
    elem.appendChild(sign);
    })
    var board = document.createElement('div');
    board.className = 'board';
    elem.appendChild(board);
  }

  function setVote(num){
    num+='';
    sign = num.match(/\-/);
    num = num.replace(/\D/ig,'');
    if(!num) num = 0;
    elem.lastChild.innerHTML = sign[0] + num;
  }

  document.getElementById('sign0').onmousedown = function(){
    return false;
  }

  document.getElementById('sign1').onmousedown = function(){
    return false;
  }

  document.getElementById('sign0').onclick = function(){
    var num = +elem.lastChild.innerHTML +1;
    elem.lastChild.innerHTML = num;
  }

  document.getElementById('sign1').onclick = function(){
    var num = +elem.lastChild.innerHTML -1;
    elem.lastChild.innerHTML = num;
  }
  
  this.setVote = setVote;
}

var voter = new Voting({title:'VOTING',signArr:['+','-']});
var voteCount = voter.setVote(-10);
