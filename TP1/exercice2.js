/*jshint esversion: 6 */

function countWords(str) {
    "use strict";
    // Punctuation removal idea from:
    // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
    let punctuationLessStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let wordsArray = punctuationLessStr.split(" ");
    let count = {};
    for (let i = 0; i <  wordsArray.length; i++) {
        let word = wordsArray[i];
        count[word] = count[word] ? count[word] + 1 : 1;
    }

    return count;
}

class WordList {
    constructor(str) {
        this.wordCountObject = countWords(str);
    }

    getCount(word) {
        return this.wordCountObject[word];
    }

    getWords() {
        return Object.keys(this.wordCountObject).sort();
    }

    maxCountWord() {
        let keys = this.getWords();
        let maxWord = keys[0];

        for (let i = 1; i < keys.length; i++) {
            if (this.getCount(keys[i]) > this.getCount(maxWord)) {
                maxWord = keys[i];
            }
        }

        return maxWord;
    }

    minCountWord() {
        let keys = this.getWords();
        let minWord = keys[0];

        for (let i = 1; i < keys.length; i++) {
            if (this.getCount(keys[i]) < this.getCount(minWord)) {
                minWord = keys[i];
            }
        }

        return minWord;
    }

    applyWordFunc(f) {
        let keys = this.getWords();
        let result = [];

        for (let i = 0; i < keys.length; i++) {
            result[i] = f(keys[i]);
        }

		return result;
    }
}

exports.countWords = countWords;
exports.WordList = WordList;
