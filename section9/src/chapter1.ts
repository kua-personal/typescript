/**
 * 분산적인 조건부 타입
 */
// type StringNumberSwitch<T> = T extends number ? string : number;
type StringNumberSwitch<T> = [T] extends [number] ? string : number; // 분산 방지

let a: StringNumberSwitch<number>
let b: StringNumberSwitch<string>
let c: StringNumberSwitch<number | string>
let d: StringNumberSwitch<boolean | number | string>

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T
type A = Exclude<number | string | boolean,  string> // never는 공집합이라 제외됨


type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean,  string> // string만 추출

