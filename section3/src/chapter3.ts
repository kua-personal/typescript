/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10
num1 = num2

/**
 * 객체 타입간의 호환성
 */
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow"
}

let dog: Dog = {
    name: "멍멍이",
    color: "white",
    breed: "Maltese"
}

animal = dog;
// dog = animal; <- Error

export type Book = {
    name: string;
    price: number;
}

export type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book
let programmingBook: ProgrammingBook = {
    name: "Programming Book",
    price: 20000,
    skill: "TypeScript"
};

book = programmingBook
// programmingBook = book <- Error
