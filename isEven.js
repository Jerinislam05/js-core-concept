/* console.log(4/2);
console.log(62/2);
console.log(84/2);
console.log(28/2); */

/* console.log(7/2);
console.log(63/2);
console.log(85/2);
console.log(27/2); */

/* console.log(7%2);
console.log(63%2);
console.log(85%2);
console.log(27%2); */ 

/* console.log(4%2);
console.log(62%2);
console.log(82%2);
console.log(28%2); */

function isEven(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    } else {
        return false;
    }

}
const myNum = isEven(333);
console.log(myNum);
const herNum = isEven(1200);
console.log(herNum);