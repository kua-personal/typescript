/**
 * 사용자 정의 타입가드
 */

export type Dog = {
    name: string;
    isBark: boolean
}

export type Cat = {
    name: string;
    isScratch: boolean;
}

export type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        console.log(animal.isBark)
    } else if (isCat(animal)) {
        console.log(animal.isScratch)
    }
}