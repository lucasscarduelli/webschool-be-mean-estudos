// ES5
//function onPower(exponent) {
//    return function(number) {
//        return Math.pow(number, exponent);    
//    };
//}

// ES6 - Uma linha
//const onPower = exponent => number => Math.pow(number, exponent);

// ES6 - Múltiplas linhas
const onPower = exponent => number => {
    return Math.pow(number, exponent);
}

const square = onPower(2);
console.log(square(5)); // 25