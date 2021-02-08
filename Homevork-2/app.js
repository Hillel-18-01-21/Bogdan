const a = prompt("Enter the first number");
const b = prompt("Enter the seond number");

const calculations = `Calculations are finished!
    Sum: ${a} + ${b} = ${+a + +b}
    Diff: ${a} - ${b} = ${a - b}
    Mult: ${a} * ${b} = ${a * b}
    Div: ${a} / ${b} = ${a / b}.`;

console.log(calculations);
alert(calculations);
