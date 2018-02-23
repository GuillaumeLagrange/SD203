/*jshint esversion: 6 */

function factorielIt(n) {
    "use strict";
    let fact = 1;
    for (let i = 1; i < n + 1; i++) {
        fact *= i;
    }
    return fact;
}

function factorielRec(n) {
    "use strict";
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorielRec(n-1);
}

// We are assuming the array indexes start at 0 and have no holes
// We love Javascript
function factorielTableau(tab) {
    "use strict";
    let resultTab = [];
    for (let i = 0; i < tab.length; i++) {
        resultTab[i] = factorielRec(tab[i]);
    }
    return resultTab;
}

function factorielMap(tab) {
    "use strict";
    return tab.map(n => factorielRec(n));
}

exports.factorielIt = factorielIt;
exports.factorielRec = factorielRec;
exports.factorielTableau = factorielTableau;
exports.factorielMap = factorielMap;
