let inputLength = document.querySelector('#inputLength');
let values = document.querySelector('#values');
let output = document.querySelector('#output');
let showInputBtn = document.querySelector('#showInputBtn');
let arr = [];

inputLength.addEventListener('click', () => inputLength.value = ''); 
showInputBtn.addEventListener('click', ShowInput);

function ShowInput(){
    if(inputLength.value < 3 || isNaN(inputLength.value)){
        document.body.style.background = 'red';
        alert('i asked for 3 or more!!');
    }else{
        document.body.style.background = 'white';
        for(i = 0; i < inputLength.value; ++i){
        let element = document.createElement('div');
        element.innerHTML = `
                            <div class="value">${inputLength.value - i}) <input class="Getvalue" type="text" maxlength="1"></div>
                            `;
        values.prepend(element);        
        }
        showInputBtn.remove();
    }    
}

document.querySelector('#getValues').addEventListener('click', function(){
    let values = document.querySelectorAll('.Getvalue');
    values.forEach(function(value, index){        
        arr[index] = value.value;
    });
    sort(arr);
    output.innerHTML = `Sorted array: ${arr}`;    
})

function sort(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            flip = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = flip;
            sort(arr);
        }
    }            
}

document.querySelector('.reload').addEventListener('click', () => location.reload());