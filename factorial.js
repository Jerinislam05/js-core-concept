// 1 * 2 * 3 * 4 * 5 * 6 * 7 eta k factorial bole, factorial mane 1-oi number er gunon
function factorial(number) {
    let multiplication = 1;
    for (let i = 1; i <= number; i++) {
        multiplication = multiplication * number;
        
    } return multiplication;
}
const multiplication = factorial(7);
console.log(multiplication);