function sum(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}
function numberIsPositive(a){
    if (typeof(a) === 'number') return a > 0;
    else return undefined;
}
function numberIsNegative(a) {
    if (typeof (a) === 'number') return a < 0;
    else return undefined;
}

module.exports = {sum, mult, numberIsPositive, numberIsNegative};