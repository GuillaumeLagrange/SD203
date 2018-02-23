"use strict";
let ex1 = require('./exercice1');
let fs = require('fs');

let note = 0;
try {
    if (ex1.factorielIt(5) === 120 && ex1.factorielIt(10) === 3628800) {
        note += 1;
        console.log("ex1a1 ok");
    } else {
        console.log("factorielIt est fausse")
    }
    if (ex1.factorielIt.toString().indexOf("for") > 0) {
        note += 1;
        console.log("ex1a2 ok");
    } else {
        console.log("ex1a pas fait avec un for");
    }
} catch (err) {
    console.log("error in ex1a");
    console.log(err);
}
try {
    if (ex1.factorielRec(6) === 720 && ex1.factorielRec(10) === 3628800) {
        note += 1;
        console.log("ex1b1 ok");
    } else {
        console.log("factorielRec est fausse");
    }
    if (ex1.factorielRec.toString().substring(25).indexOf("factorielRec") > 0) {
        note += 1;
        console.log("ex1b2 ok");
    } else {
        console.log("factorielRec n'est pas rÃ©cursive");
    }
} catch (err) {
    console.log("error in ex1b");
    console.log(err);
}
try {
    const res1 = ex1.factorielTableau([2, 4, 6], ex1.factorielRec);
    if (res1.length === 3 && res1[0] === 2 && res1[1] === 24 && res1[2] === 720) {
        note += 1;
        console.log("ex1c1 ok");
    } else {
        console.log("factorielTableau est fausse");
    }
    if (ex1.factorielTableau.toString().indexOf("map") < 0) {
        note += 1;
        console.log("ex1c2 ok");
    } else {
        console.log("factorielTableau est faite avec un map");
    }
} catch (err) {
    console.log("error in ex1c");
    console.log(err);
}
try {
    const res2 = ex1.factorielMap([2, 4, 6], ex1.factorielRec);
    if (res2.length === 3 && res2[0] === 2 && res2[1] === 24 && res2[2] === 720) {
        note += 1;
        console.log("ex1d1 ok");
    } else {
        console.log("factorielMap est fausse");
    }
    if (ex1.factorielMap.toString().indexOf("map") > 0) {
        note += 1;
        console.log("ex1d2 ok");
    } else {
        console.log("factorielMap n'est pas faite avec un map");
    }
} catch (err) {
    console.log("error in ex1d");
    console.log(err);
}
function getCount(res, w) {
  const c = res.filter((v) => v[0] === w);
  if (c.length > 0) return c[0][1];
  return -1;
}
if (fs.existsSync('./exercice2.js')) {
    let ex2 = require('./exercice2');
    try {
        const res = ex2.countWords("que jaime a faire apprendre ce nombre utile au sage que jaime a faire jaime a faire");
        if (res instanceof Map && res.get('que') === 2 && res.get('jaime') === 3 && res.get('ce') === 1) {
            note += 2;
            console.log("ex2a ok");
        } else if (res instanceof Array && res[0] instanceof Array &&
            getCount(res, 'que') === 2 && getCount(res, 'jaime') === 3 && getCount(res, 'ce') === 1) {
            note += 2;
            console.log("ex2a ok");
        } else if (res && res.que === 2 && res.jaime === 3 && res.ce === 1) {
            note += 2;
            console.log("ex2a ok");
        } else {
            console.log("countWords est fausse");
        }
    } catch (err) {
        console.log("error in ex2a");
        console.log(err);
    }
    try {
        const wl = new ex2.WordList("que jaime a faire apprendre ce nombre utile au sage ce nombre utile au sage que jaime a faire jaime a faire faire");
        if (wl && wl instanceof ex2.WordList) {
            note += 1;
            console.log("ex2b1 ok");
        } else {
            console.log("erreur sur le new WordList");
        }
        if (wl.getCount('apprendre') === 1) {
            note += 1;
            console.log("ex2b2 ok");
        } else {
            console.log("erreur sur WordList.getCount");
        }
        if (JSON.stringify(wl.getWords().sort()) === '["a","apprendre","au","ce","faire","jaime","nombre","que","sage","utile"]') {
            note += 1;
            console.log("ex2b3 ok");
        } else {
            console.log("erreur sur WordList.getWords");
        }
        if (wl.maxCountWord() === 'faire') {
            note += 1;
            console.log("ex2b4 ok");
        } else {
            console.log("erreur sur WordList.maxCountWord");
        }
        if (wl.minCountWord() === 'apprendre') {
            note += 1;
            console.log("ex2b5 ok");
        } else {
            console.log("erreur sur WordList.minCountWord");
        }
    } catch (err) {
        console.log("error in ex2b");
        console.log(err);
    }
    try {
        const wl = new ex2.WordList("que jaime a faire apprendre ce nombre utile au sage que jaime a faire jaime a faire");
        const e = wl.applyWordFunc(a => a.length);
        if (JSON.stringify(e) === '[1,9,2,2,5,5,6,3,4,5]') {
            note += 1;
            console.log("ex2c1 ok");
        } else {
            console.log("erreur sur WordList.applyWordFunc");
        }
    } catch (err) {
        console.log("error in ex2c");
        console.log(err);
    }
} else console.log("exercice2.js non trouvÃ©");
if (fs.existsSync('./exercice3.js')) {
    let ex3 = require('./exercice3');
    try {
        if (JSON.stringify(new ex3.Student('Dufourd', 'Jean-Claude', 4)) === '{"name":"Dufourd","firstName":"Jean-Claude","id":4}') {
            note += 1;
            console.log("ex3a ok");
        } else {
            console.log("erreur sur new Student");
        }
    } catch (err) {
        console.log("error in ex3a");
        console.log(err);
    }
    try {
        if (new ex3.Student('Dufourd', 'Jean-Claude', 4).print() === 'student: Dufourd, Jean-Claude, 4') {
            note += 1;
            console.log("ex3b ok");
        } else {
            console.log("erreur sur Student.print");
        }
    } catch (err) {
        console.log("error in ex3b");
        console.log(err);
    }
    try {
        if (new ex3.ForeignStudent('Dufourd', 'Jean-Claude', 5, 'french').print() === 'student: Dufourd, Jean-Claude, 5, french') {
            note += 1;
            console.log("ex3c ok");
        } else {
            console.log("erreur sur new ForeignStudent");
        }
    } catch (err) {
        console.log("error in ex3c");
        console.log(err);
    }
    if (fs.existsSync('./exercice4.js')) {
        let ex4 = require('./exercice4');
        try {
            const prom = new ex4.Promotion();
            note += 1;
            console.log('ex4a ok');
            prom.read('[{"name":"Dufourd","firstName":"Jean-Claude","id":4},{"name":"Bellot","firstName":"Patrick","id":5},{"name":"Poilane","firstName":"Yves","id":6},{"name":"Berbez","firstName":"Marie-Claude","id":7},{"name":"David","firstName":"Bertrand","id":8},{"name":"Benenson","firstName":"James","id":9,"nationality":"american"}]');
            if (prom.size() === 6) {
                note += 1;
                console.log('ex4b ok');
            } else {
                console.log("erreur sur Promotion.read ou .size");
            }
            prom.print();
            note += 1;
            console.log('ex4c ok');
            if (prom.get(0) instanceof ex3.Student && prom.get(5) instanceof ex3.ForeignStudent) {
                note += 1;
                console.log('ex4d ok');
            } else {
                console.log("Promotion.read ne retrouve pas les classes des objets");
            }
            if (typeof prom.saveToFile === 'function' && typeof prom.readFromFile === 'function') {
                note += 1;
                console.log('ex4e ok');
            } else {
                console.log("erreur sur Promotion.saveToFile ou readFronFile");
            }
        } catch (err) {
            console.log("erreur dans ex4");
            console.log(err);
        }
    } else console.log("exercice4.js non trouvÃ©");
} else console.log("exercice3.js non trouvÃ©");
console.log('========>' + note * 5 / 6);



