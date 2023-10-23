/* const myInches = 65;
const MyFeet = myInches / 12;
console.log(MyFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log(dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log(dadiFeet);
 */

function inchToFeet(inches) {
    const feet = inches/12
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 122;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);
