//Basic calc functions
function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR. Division by zero..."
    }
    else {
        return num1 / num2;
    }
}

//Operate
function operate(num1, num2, operator) {
    switch (operator) {
        case '+': {
            return add(num1, num2);
            break;
        }
        case '-': {
            return substract(num1, num2);
            break;
        }
        case '*': {
            return multiply(num1, num2);
            break;
        }
        case '/': {
            return divide(num1, num2);
            break;
        }
        default: {
            return 'error'
            break;
        }
    }
}
//html variables
let output = document.querySelector('.output');
let numButtons = document.querySelectorAll('.btnNum');
let opButtons = document.querySelectorAll('.btnOp');
let delButton = document.querySelector('#btn_del');
let acButton = document.querySelector('#btn_ac');
let signButton = document.querySelector('#btn_sign');

//calc variables
let number1;
let number2;
let opsign;
let result;

numButtons.forEach((button) => {    //number buttons events
    button.addEventListener('click', () => {
        if (result!= undefined) {   //delete output after op and click (+-*/)
            output.textContent = '';
            result = undefined;
        }
        output.textContent += button.id;
    })
});

delButton.addEventListener('click', () => {     //DEL button events
    output.textContent = output.textContent.slice(0, -1);
});


acButton.addEventListener('click', () => {      //AC button events
    output.textContent = '';
    number1 = undefined;
    number2 = undefined;
    result = undefined;
})

signButton.addEventListener('click', () => {
    if (output.textContent[0] ==='-') {
        output.textContent= output.textContent.slice(1);
    }
    else {
        output.textContent = '-'.concat(output.textContent);
    }
});

opButtons.forEach((opbutton) => {           //Operation buttons event
    opbutton.addEventListener('click', () => {


        if (number1 === undefined) {
            number1 = Number(output.textContent);
            result=number1;
            output.textContent = '';
            opsign = opbutton.textContent;
        }
        else {

            if (opsign === '=') {
                opsign = opbutton.textContent;
            }
            else {
                if (result != undefined) {
                    opsign = opbutton.textContent;

                }
                else {
                    number2 = Number(output.textContent);
                    result = operate(number1, number2, opsign);
                    opsign = opbutton.textContent;
                    output.textContent = result;
                    number1 = result;
                    number2 = undefined;
                }
            }
        }

    })
});
