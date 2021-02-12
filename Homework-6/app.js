let array = [];
getNewArray();
getResult(array);

function getNewArray(){
    array = prompt('Enter numbers separated by coma');
    array = array.split(',');    
}

function getResult(arr){
    let result;
    let operation;
    do {     
        operation = prompt('Choose the operation: sort, multiples of three, string, max, min');   
        switch (operation){
            case 'sort':
                result = sort(arr);
                break;
            case 'multiples of three': 
                result = getMultiplesOfThree(arr);
                break;
            case 'string':
                result = getString(arr);
                break;
            case 'max':
                result = max(arr);
                break;
            case 'min':
                result = min(arr);
                break;
            default:
                alert('Choose the correct operation!');
                operation = 0;
        }
    }while(!operation); 
    alert(result);
    nextOperation();
}

function nextOperation(){
    if(confirm('Do you want to continue?')){
        if(confirm('Continue with new array?')){
            getNewArray();
            getResult(array);
        }else{
            getResult(array);
        }
    }
}

function sort(arr){
    let sortedAray = arr.concat().sort((a,b) => a - b);
    return 'Sorted array: ' + sortedAray;    
}
function getMultiplesOfThree(arr){    
    return 'Multiplies of three: ' + arr.filter(e => e % 3 === 0);
}
function getString(arr){
    return'String: ' + arr.join(`, `);
}
function max(arr){
    let max;
    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(arr[i], arr[i + 1]);
    }
    return 'Max: ' + max;
}
function min(arr){
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = Math.min(arr[i], arr[i + 1]);
    }
    return 'Min: ' + min;
}

// 1,3,6,9,12,3,6,3,2,7