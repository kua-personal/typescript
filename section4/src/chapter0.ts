/**
 * 함수 타입 정리
 */

function func(a: number, b: number): number {
    return a + b;
}

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "길동", tall?: number) {
    console.log(`내 이름은 ${name}이고 키는 ${tall}cm 입니다.`);
}

introduce("동경", 180);
introduce("동경");

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach(n => sum += n);
    return sum;
}

getSum(1, 2, 3, 4, 5);