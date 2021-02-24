const color           = document.getElementById('color');
const shape           = document.getElementById('shape');
const figureContainer = document.getElementById('figureContainer');
const figure          = document.getElementById('figure');

color.addEventListener('change', setColor);
shape.addEventListener('change', setShape);
figure.addEventListener('mousedown', moveFigure);

function setShape() {
  figure.className = shape.value;
}

function setColor() {
  figure.style.backgroundColor = color.value;
}

function moveFigure(event) {
  let h = getComputedStyle(event.target).height;
      h = parseInt(h);  

  figureContainer.addEventListener('mousemove', onMouseMove);
  figure.addEventListener('mouseup', removeListener);

  moveAT(event.clientX, event.clientY);

  function moveAT(x, y) {
    if (y < 711 - h / 2 && y > 267 + h / 2 && x < 1325 && x > 724) {
      figure.style.left = x - figure.offsetWidth / 2 + 'px';
      figure.style.top = y - figure.offsetHeight / 2 + 'px';
    } else if (y < 711 - h / 2 && y > 267 + h / 2) {
      figure.style.top = y - figure.offsetHeight / 2 + 'px';
    } else if (x < 1325 && x > 724) {
      figure.style.left = x - figure.offsetWidth / 2 + 'px';
    }
  }

  function onMouseMove(event) {
    moveAT(event.clientX, event.clientY);
    console.log(event.target.parentNode.className)
    if(event.target.parentNode.className !== 'figure-container'){
    removeListener();
    }
  } 

  function removeListener(){
    figureContainer.removeEventListener('mousemove', onMouseMove);
  }
}