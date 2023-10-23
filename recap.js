// 1. variable
var myName = 'jerin';
// 2. math operation: +, -, *, /
// 3. shorthand: +=, -=, *=, /=
// ++, --

// 2. array
var friends = ['abul', 'kabul', 'babul', 'ebul', 'dabul'];
// array er index paite
var third = friends[3];
// jodi index er man change korte hoy
friends[3] = 'mokbul';

// 3.conditionals
// >, <, >=, <=, ==, ===, !=, !==
if (friends.length < 2) {
    console.log('fokir');
} else {

}
// 4. loop(loop variable, while/for, shorto, maan change korte ++/-- dite hobe)
var number = 0;
while (condition) {
    console.log(number);
    number++;
}
for(var i = 0; i <= 10; i++) {
    console.log(i);
}
// 5. function
function isMoonUp(time) {
    if (time > 7) {
        return true;
    }
}

// 6. object
var jantus = {
    height: 60,
    hair: 'long',
    eye: 'black',
    age: 30,
}