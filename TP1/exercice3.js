/*jshint esversion: 6 */

class Student {
    constructor(name, firstName, id) {
        this.name = name;
        this.firstName = firstName;
        this.id = id;
    }

    print() {
        let str = "student: ";
        str += this.name;
        str += ", ";
        str += this.firstName;
        str += ", ";
        str += this.id;

        return str;
    }
}

class ForeignStudent extends Student {
    constructor(name, firstName, id, nationality) {
        super(name, firstName, id);
        this.nationality = nationality;
    }

    print() {
        let str = super.print();
        str += ", ";
        str += this.nationality;

        return str;
    }
}

exports.Student = Student;
exports.ForeignStudent = ForeignStudent;
