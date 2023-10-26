// factorial using while loop
function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    } return result;
}
const factWhile = factorial(7);
console.log(factWhile);
// reverse factorial using while loop

function factorial2(number) {
    let i = number;
    let result = 1;
    while (i >= 1)  {
        result = result * i;
        i--;
    } return result;
}
const revFactWhile = factorial2(7);
console.log(revFactWhile);