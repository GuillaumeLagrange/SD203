"use strict"

function factorielIt(n) {
    let fact = 1;
    for (let i = 1; i < n + 1; i++) {
        fact *= i;
    }
    return fact;
}

function factorielRec(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorielRec(n-1);
}

exports.factorielIt = factorielIt;
exports.factorielRec = factorielRec;
