function getFactorial(number) {
    let factorial = 1;
    // console.log(number);
    for (let i = 1; i <= number; i++) {

        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const getMyfactorial = getFactorial(8);
console.log(getMyfactorial);