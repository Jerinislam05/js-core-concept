function isOdd(number) {
    const answer = number % 2;
    if (answer === 0) {
        return true;
    } else {
        return false;
    }
}
const myNum = isOdd(11);
console.log(myNum);
const hisNum = isOdd(16);
console.log(hisNum);