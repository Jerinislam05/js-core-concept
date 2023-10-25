function getSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
}
const myNum = [12, 27, 73, 92, 56, 38, 55]
getSum(myNum);