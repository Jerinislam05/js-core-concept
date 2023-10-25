function isLeapYear(year) {
    const answer = year % 4;
    if (answer === 0) {
        return true;
    } else {
        return false;
    }
}
const leapYear = isLeapYear(1933);
console.log(leapYear);
const leapYear2 = isLeapYear(1960);
console.log(leapYear2);