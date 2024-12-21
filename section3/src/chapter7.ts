/**
 * 타입 좁히기
 */
type Person = {
    name: string;
    age: number;
}

function func(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}