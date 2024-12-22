/**
 * 접근제어자
 */
class Employee {
    constructor(
        private name: string,
        protected age: number,
        public  position: string
    ) {}
    // 접근 제어자를 프로퍼티에서 사용하면 멤버 변수로 선언되고 초기화까지 가능

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
        // this.name; // Error
        this.age; // OK
    }
}

const employee = new Employee("Neo", 24, "Developer");
console.log(employee)
// employee.name = "길동"; // Error
// employee.age = 25; // Error