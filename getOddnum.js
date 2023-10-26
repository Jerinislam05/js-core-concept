function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      if (element % 2 === 1) {
        console.log(i, element);
        oddNumbers.push(element);
      }
   
    } return oddNumbers;
}
const oddNum = [12, 13, 55, 83, 41, 92, 67];
const oddNumbers = getOddNumbersOfAnArray(oddNum);
console.log(oddNumbers);
const oddNumberSum = getOddNumbersOfAnArray(oddNumbers);
console.log(oddNumberSum);
