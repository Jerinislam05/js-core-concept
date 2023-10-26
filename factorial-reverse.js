// factorial-reverse
function revFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= 1; i--) {
    factorial = factorial * number;
  }
  return factorial;
}
const myFactorial = revFactorial(7);
console.log(myFactorial);
