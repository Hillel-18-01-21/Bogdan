let array = [];
let arrayConstructor = document.querySelector('.array-constructor');
let operations = document.querySelector('.operations');
let output = document.querySelector('.output');
let inputArray = document.querySelector('#inputArray');

document.querySelector('#getNewArray').addEventListener('click', getNewArray);

document.querySelector('#sort').addEventListener('click', sort);
document.querySelector('#getMultiplesOfThree').addEventListener('click', getMultiplesOfThree);
document.querySelector('#getString').addEventListener('click', getString);
document.querySelector('#max').addEventListener('click', max);
document.querySelector('#min').addEventListener('click', min);

document.querySelector('#otherOperations').addEventListener('click', otherOperations);
document.querySelector('#reload').addEventListener('click', () => location.reload());

function getNewArray(){
    array = inputArray.value.split(',');
    array.forEach((item, i) => array[i] = +array[i]);
    visibility(operations, arrayConstructor);
}

function getOutput(text){
    let outputText = document.createElement('p');
    outputText.innerHTML = text;
    outputText.className = 'output-text';
    output.prepend(outputText);
    visibility(output, operations);
}

function sort(){
    let sortedAray = array.concat().sort((a,b) => a - b);
    let outputText = 'Sorted array: ' + sortedAray;
    getOutput(outputText);
}


function getMultiplesOfThree(){    
    let outputText = 'Multiplies of three: ' + array.filter(e => e % 3 === 0);
    getOutput(outputText);    
}
function getString(){
    let outputText = 'String: ' + array.join(`, `);
    getOutput(outputText); 
}
function max(){
    let max;
    for (let i = 0; i < array.length - 1; i++) {
        max = Math.max(array[i], array[i + 1]);
    }
    let outputText = 'Max: ' + max;
    getOutput(outputText); 
}
function min(){
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = Math.min(array[i], array[i + 1]);
    }
    let outputText = 'Min: ' + min;
    getOutput(outputText);
}

function otherOperations(){
    document.querySelector('.output-text').remove();
    visibility(operations, output);
}

function visibility(show,hide){
    show.style.display = 'block';
    hide.style.display = 'none';
}

// 1,3,6,9,12,3,6,3,2,7