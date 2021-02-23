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
  if(y < 375 && y > 200 && x < 1275 && x > 1025){
    console.log(event);
    figure.style.position = 'absolute';
    figure.style.top = event.clientY - 35 + 'px';
    figure.style.left = event.clientX - 35 + 'px';
  }  
}


