/**
 * Generic Interface
 * Type Variable
 */
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 123
}

let keyPair2: KeyPair<boolean,  string[]> = {
    key: true,
    value: ['hello', 'world']
}

/**
 * Index signature
 */
interface NumberMap {
    [key: string]: number;
}

let numMap: NumberMap = {
    one: 1,
    two: 2,
    three: 3
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "vaue"
}

let numberMap: Map<number> = {
    key: 123
}

/**
 * Generic Type Alias
 */
type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "value"
}

/**
 * Generic Interface Exam
 */
interface Student {
    type: "student"
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    // 타입 좁히기 필요 없음

    const school = user.profile.school;
    console.log(`${user.name} goes to ${school}`);
}

const developerUser: User<Developer> = {
    name: "Neo",
    profile: {
        type: "developer",
        skill: "JS"
    }
}

const studentUser: User<Student> = {
    name: "Trinity",
    profile: {
        type: "student",
        school: "Trinity"
    }
}