// practice-task 1
function hourToMin(hour) {
    return hour * 60;
}
const hour = 2;
const totalhour = hourToMin(hour);
console.log(totalhour);

// practice-task 2
function findLeapYear(years) {
    const answer = years % 4;
    if (answer === 0) {
        return true;
    } else {
        return false;
    }
}
const inputYears = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(inputYears);
console.log(leapYear);