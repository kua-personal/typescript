/**
 * 타입스크립트 클래스
 */

const employee = {
    name: 'jake',
    age: 24,
    position: "developer",
    work() {
        console.log("working...");
    }
}

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("working...");
    }
}

class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name,  age,  position);
        this.officeNumber = officeNumber;
    }

    work() {
        console.log("working as an executive officer...");
    }
}

const employee2 = new Employee("jake", 24, "developer");

const employee3: Employee = {
    name: 'jake',
    age: 24,
    position: "developer",
    work() {}
}