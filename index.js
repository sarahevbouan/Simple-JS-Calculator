// JS program for a Simple Calculator

// Prompt the user to input the first number
let num1 = parseFloat(prompt('Enter the first number'));

// Prompt the user to input the operator
let operator = (prompt('Enter operator (+, -, * or /)'));

// Prompt the user to input the second number
let num2 = parseFloat(prompt('Enter the second number'));

// declare an undefined result
let result;

// if... else if... else statement
if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
};
// Display result
alert(`${num1} ${operator} ${num2} = ${result}`);