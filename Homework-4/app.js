let log = ['History of all operations: '];
let logIndex = 0;

function getResults(){
    let operation = data.operation();
    if(operation !== 'history'){
        let a = data.a();
        let b;
        b = function () {
            if (operation !== 'sin') {
                return data.b();
            }
        };
        let result = operations[operation](a,b());
        let output = `Operation ${operation} finished with result ${result}`
        alert(output);
        let next = confirm('Do you want to make more calculations?');
        logIndex++;
        log[logIndex] = `${logIndex}) ${output}`;
        if(next){
            getResults();
        }
    }else{
        operations[operation]();
        getResults();
    }
}

const getData = {
    getOperation: function () {
        let operation = 0;
        while(operation === 0){
            operation = prompt("Enter math operation(+, -, *, /, sin, history)");
            switch (operation) {
            case "+":
                operation = "sum";
                break;
            case "-":
                operation = "diff";
                break;
            case "*":
                operation = "mult";
                break;
            case "/":
                operation = "div";
                break;
            case "sin":
                operation = "sin";
                break;
            case "history":
                operation = "history";
                break;
            default:
                operation = 0;
                break;
            }
        }
        return operation;
    },

    getFirstOperand: function () {
            let operand;
            do{
                operand = +prompt("Enter the operand");
            }while(operand !== operand);
        return operand;
    },

    getSecondOperand: function () {
        let operand;
            do{
                operand = +prompt("Enter the second operand");
            }while(operand !== operand);
        return operand;
    }
}

const operations = {
    sum:  (a, b) => a + b,
    diff: (a, b) => a - b,
    mult: (a, b) => a * b,
    div:  (a, b) => a / b,
    sin:  (a)    => Math.sin(a),
    history: ()  => alert(log.join('\n')),
}

const data = {
    operation: () => getData.getOperation(),
    a:         () => getData.getFirstOperand(),
    b:         () => getData.getSecondOperand(),
}

getResults();