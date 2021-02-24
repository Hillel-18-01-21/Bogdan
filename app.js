const body            = document.body;
const container       = document.querySelector('.container');
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
  let containerWidth    = getComputedStyle(figureContainer).width;
      containerWidth    = parseInt(containerWidth);
  let leftBorder        = getComputedStyle(container).marginLeft;
      leftBorder        = parseInt(leftBorder);    
  let rightBorder       = leftBorder + containerWidth;
  let h                 = getComputedStyle(event.target).height;
      h                 = parseInt(h);
      
  figureContainer.addEventListener('mousemove', onMouseMove);
  figure.addEventListener('mouseup', removeListener);
  body.addEventListener('mouseover', checkArea);
  window.addEventListener('resize', checkResize)

  function moveAT(x, y) {
    
    figure.style.position = 'absolute';
    if (y < 711 - h / 2 && y > 267 + h / 2 && x < rightBorder - 20 && x > leftBorder + 50) {
      figure.style.left = x - figure.offsetWidth / 2  + 'px';
      figure.style.top  = y - figure.offsetHeight / 2 + 'px';
    } else if (y < 711 - h / 2 && y > 267 + h / 2) {
      figure.style.top  = y - figure.offsetHeight / 2 + 'px';
    } else if (x < rightBorder - 20 && x > leftBorder + 50) {
      figure.style.left = x - figure.offsetWidth / 2  + 'px';
    }
  }

  function onMouseMove(event) {
    moveAT(event.pageX, event.pageY);
  } 

  function removeListener(){
    figureContainer.removeEventListener('mousemove', onMouseMove);
  }

  function checkArea(event){
    if(event.target === body){
      removeListener();
    }
  }

  function checkResize(){
    figure.style.left ='40%';
    figure.style.top  = '60%';
    if(window.innerHeight < 500){
      figure.style.top  = '90%';
    }
  }
}