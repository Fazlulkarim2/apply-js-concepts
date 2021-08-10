// function getfactorial(number) {
//     let factorial = 1;

//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }

//     return factorial;
// }

// const myFactorial = getfactorial(6);
// console.log('factorial of 5 is ', myFactorial);


function getfactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        console.log(i);
        i--;

    }

    return factorial;
}

// const myFactorial = getfactorial(6);
// console.log('factorial of 6 is ', myFactorial);


// for loop reverse 

function getfactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

const myFactorial = getfactorial2(6);
console.log('factorial of 6 is ', myFactorial);