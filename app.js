const color = document.getElementById('color');
const shape = document.getElementById('shape');
const figureContainer = document.getElementById('figureContainer');
const figure = document.getElementById('figure');

color.addEventListener('change', setColor);
shape.addEventListener('change', setShape);
figureContainer.addEventListener('mousemove', moveFigure);

function setShape(){
  figure.className = shape.value;
}

function setColor(){ 
  figure.style.backgroundColor = color.value;
}

function moveFigure(event){
  let x = event.clientX;
  let y = event.clientY;
  let h = getComputedStyle(event.currentTarget.firstElementChild).height;
  h = parseInt(h);
  if(y < 606 - h/2 && y > 164 + h/2 && x < 1323 && x > 975){
    figure.style.position = 'absolute';
    figure.style.top = event.clientY - h/2 + 'px';
    figure.style.left = event.clientX - 35 + 'px';
  }
}


