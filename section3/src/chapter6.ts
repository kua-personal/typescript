/**
 * 타입 단언 (Type Assertion)
 */
type Person = {
    name: string;
    age: number;
}

let person = {} as Person
person.name = 'Neo'
person.age = 85

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: '멍멍이',
    color: 'black',
    breed: 'Maltese'
} as Dog;

/**
 * Type assertion의 규칙
 * A as B
 * A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // Error
let num3 = 10 as unknown as string;

/**
 * const assertion
 */
let num4 = 10 as const;
let cat = {
    name: "Cat",
    color: "yellow"
} as const;

/**
 * Non null 단언
 */
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: 'Hello TypeScript',
    author: 'Neo'
}

// const len: number = post.author?.length; // Error
const len: number = post.author!.length;
