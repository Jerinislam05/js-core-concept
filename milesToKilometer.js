function milesToKm(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const miles = 10;
const roadKm = milesToKm(miles);
console.log(roadKm);