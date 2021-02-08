const a = prompt("Enter the first number");
const b = prompt("Enter the seond number");

const sum = +a + +b;
const diff = a - b;
const mult = a * b;
const div = a / b;

console.log("Calculations are finished!\n"+ 
"Sum: " + a + " + " + b + " = " + sum + "\n" + 
"Diff: " + a + " - " + b + " = " + diff + "\n" + 
"Mult: " + a + " * " + b + " = " + mult + "\n" +
"Div: " + a + " / " + b + " = " + div + ".");
alert("Calculations are finished!\n" + 
"Sum: " + a + " + " + b + " = " + sum + "\n" + 
"Diff: " + a + " - " + b + " = " + diff + "\n" + 
"Mult: " + a + " * " + b + " = " + mult + "\n" +
"Div: " + a + " / " + b + " = " + div + ".");

/* 
let a = prompt("Enter the first number");
let b = prompt("Enter the seond number");
let operator = prompt("Enter the operator");
if(operator == "+"){
    let sum = +a + +b; 
    alert(a + " + " + b + " = " + sum);
    console.log(a + " + " + b + " = " + sum);
}else if(operator == "-"){
    let dif = a - b;
    alert(a + " - " + b + " = " + dif);
    console.log(a + " - " + b + " = " + dif);
}else if(operator == "*"){
    let mult = a * b;
    alert(a + " * " + b + " = " + mult);
    console.log(a + " * " + b + " = " + mult);
}else if(operator == "/"){
    let div = a / b;
    alert(a + " / " + b + " = " + div);
    console.log(a + " / " + b + " = " + div);
}else{
    alert("The operator is wrong, try again");
} 
*/