/**
 * 대수 타입
 */

/**
 * 1. 합집합 - Union Type
 */
let aaaa: string | number | boolean;
aaaa = 1;
aaaa = 'hello';
aaaa = true;

type Dog = {
    name: string;
    color: string;
}

export type Person = {
    name: string;
    language: string;
}

export type Union1 = Dog | Person
let union1: Union1 = {
    name: '멍멍이',
    color: 'black'
}

let union2: Union1 = {
    name: 'Neo',
    language: 'ko'
}

let union3: Union1 = {
    name: 'Trinity',
    color: 'black',
    language: 'en'
}

/**
 * 2. 교집합 타입 - Intersection Type
 */
let variable: number & string;
export type Intersection = Dog & Person;
let intersection1: Intersection = {
    name: '멍멍이',
    color: 'black',
    language: 'ko' // <-- 이게 없으면 에러
}