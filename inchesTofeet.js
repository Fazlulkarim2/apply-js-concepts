function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inchfes in a feet ', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('didi inches in a feet ', feet);

var naniInches = 156;
var feet = naniInches / 12;
console.log(feet);

var nanaInches = 168;
var feet = nanaInches / 12;
console.log(feet);



// mile to km 
function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileTokilometer(26.2);
console.log('marathon in km', marathon);