function operate(a, b, op) {
    function add(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    switch (op) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

let num1, num2, op;

const display = document.querySelector('#display');
const buttons = [...document.querySelector('#calculator').children];
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    })
})