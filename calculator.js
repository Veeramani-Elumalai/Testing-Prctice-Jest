function calculator (num1,operator, num2) {
    if(num1 <= 0 || num2 <= 0) {
        return "input number cannot be zero";
    }

    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '-'){
        return num1 - num2;
    }else if(operator === '*'){
        return num1 * num2;
    }else{
        return num1 / num2;
    }
}

module.exports = calculator;