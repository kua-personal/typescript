/**
 * 함수 타입 호환성
 */
// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // Error

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같은 경우

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}

// c = d;
d = c;

export type Animal = {
    name: string;
}

export type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc // Error
dogFunc = animalFunc

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (value: number, value2: number) => void;
type Func2 = (value: number) => void;

let func1: Func1 = (value, value2) => {}
let func2: Func2 = (value) => {}

func1 = func2;
// func2 = func1; // Error

