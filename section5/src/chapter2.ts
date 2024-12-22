/**
 * 선언 합침 (Declaration Merging)
 */
interface Person {
    name: string;
}
interface Person {
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: 'Neo',
    age: 85
}

/**
 * 모듈 보강 (Module Augmentation)
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 10,
    b: 20,
    c: "hello"
}