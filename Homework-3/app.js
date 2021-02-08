const firstOperand = +prompt("Enter the first number", '1');
const secondOperand = +prompt("Enter the second number", "1");

function sum(firstOperand,secondOperand){
    return firstOperand + secondOperand;
};
function diff(firstOperand,secondOperand){
    return firstOperand - secondOperand;
};
function mult(firstOperand,secondOperand){
    return firstOperand * secondOperand;
};
function div(firstOperand,secondOperand){
    return firstOperand / secondOperand;
};

// function mathFunction(firstOperand, secondOperand, operation){
//     return operation(firstOperand, secondOperand);
// };

const calculations = `Calculations are finished!
Sum: ${firstOperand} + ${secondOperand} = ${sum(firstOperand, secondOperand)}
Diff: ${firstOperand} - ${secondOperand} = ${diff(firstOperand, secondOperand)}
Mult: ${firstOperand} * ${secondOperand} = ${mult(firstOperand, secondOperand)}
Div: ${firstOperand} / ${secondOperand} = ${div(firstOperand, secondOperand)}`;

alert(calculations);
console.log(calculations);
