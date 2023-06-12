let calculator = {
    addition: function(a, b){return a+b},
    subtraction: function(a, b){return a-b},
    multiplication: function(a, b){return a*b},
    division: function(a, b){return a/b},
    exponentiation: function(a, b){return a**b},
    modulo: function(a, b){return a%b},
}

console.log(calculator.addition(0,1));
console.log(calculator.subtraction(3,2));
console.log(calculator.multiplication(1,1));
console.log(calculator.division(4,4));
console.log(calculator.exponentiation(1,1));
console.log(calculator.modulo(4,5));