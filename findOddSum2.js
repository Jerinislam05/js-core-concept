/* 1. sum ber korte prothome array er prottekta element  ber korte hobe
2. then sum ber korte hobe
 */
function getSumFromArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
        console.log(i, element, sum);
        
    }
}
const myNum = [12, 65, 45, 78, 32, 45, 91];
getSumFromArray(myNum);