/**
 * 클래스
 */

let studentA = {
    name: "길동",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부합니다.");
    },
    introduce() {
        console.log(`안녕하세요. ${this.age}살 ${this.name}입니다.`);
    }
}

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // Method
    study() {
        console.log("열심히 공부합니다.");
    }

    introduce() {
        console.log(`안녕하세요. ${this.age}살 ${this.name}입니다.`);
    }
}

class StudentDeveloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    coding() {
        console.log("열심히 코딩합니다.");
    }

    introduce() {
        console.log(`안녕하세요. ${this.age}살 ${this.name}입니다.`);
    }

    programming() {
        console.log(`${this.favoriteSkill} 프로그래밍을 합니다.`);
    }
}

let studentDeveloper = new StudentDeveloper("길동", "B+", 27, "JavaScript");
console.log(studentDeveloper)