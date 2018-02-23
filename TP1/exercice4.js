/*jshint esversion: 6 */

let ex3 = require('./exercice3');
let Student = ex3.Student;
let ForeignStudent = ex3.ForeignStudent;
let fs = require('fs');

class Promotion {
    constructor() {
        this.studentsArray = [];
    }

    add(student) {
        this.studentsArray.push(student);
    }

    size() {
        return Object.keys(this.studentsArray).length;
    }

    get(i) {
        return this.studentsArray[i];
    }

    print() {
        let str = "";

        for (let i = 0; i < this.studentsArray.length; i++) {
            str += this.studentsArray[i].print();
            str += '\n';
        }

        return str;
    }

    read(str) {
        let json = JSON.parse(str);
        this.studentsArray = [];

        for (let i = 0; i < json.length; i++) {
            let studentObject = json[i];
            if (studentObject.nationality) {
                this.studentsArray.push(
                    new ForeignStudent(
                        studentObject.name,
                        studentObject.firstName,
                        studentObject.id,
                        studentObject.nationality
                    )
                );
            } else {
                this.studentsArray.push(
                    new Student(
                        studentObject.name,
                        studentObject.firstName,
                        studentObject.id
                    )
                );
            }
        }
    }

    write() {
        return JSON.stringify(this.studentsArray);
    }

    saveToFile(fileName) {
        fs.writeFile(fileName, this.write(), err => {
            if (err) {
                throw err;
            }
        });
    }

    readFromFile(fileName) {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                throw err;
            }

            this.read(data);
        });
    }
}

exports.Promotion = Promotion;
