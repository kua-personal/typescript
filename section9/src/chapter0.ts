/**
 * Conditional Types
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>
let varB : StringNumberSwitch<string>

function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any) {
    if (typeof text === "string")
        return text.replace(/\s/g, '')
    else return undefined
}
// as any 를 사용해야 하나, function overloading을 사용하여 해결

let result = removeSpaces("Hi im Hood");
result.toUpperCase()

let result2 = removeSpaces(undefined);
