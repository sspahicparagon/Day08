// Only change code below this line
function randomRangeInteger(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeInteger(10, 15);
// Only change code above this line

module.exports = randomRangeInteger;