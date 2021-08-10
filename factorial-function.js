// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getfactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getfactorial(7);
console.log('factorial is 7 is ', firstFactorial);

var secondFactorial = getfactorial(9);
console.log('Factorial of 9 is ', secondFactorial);
