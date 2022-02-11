// recuperation du carée
let carre  = document.querySelector('#triangle');
console.log(carre.getBoundingClientRect);
console.log(carre.offsetTop, carre.offsetLeft)

function bougerCarre(){
  let numero = 1;
  setInterval(() => {
    carre.style.marginRight = numero + "rem";
    numero++
  }, 500);
}
let numero = 1;
let cercle = document.querySelector('p');

if (cercle.offsetLeft && cercle.offsetTop == carre.offsetLeft && carre.offsetTop ){
  console.log("touché");
}

document.onkeydown = arrowClick;
var plusUn = 1;
function arrowClick(e){
  
  if(e.keyCode == 38 ){
    cercle.style.marginTop = plusUn + "rem";
    plusUn++;
  }
}