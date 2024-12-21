/**
 * Unknown 타입
 */
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

}

/**
 * Never 타입
 */
function neverExam() {

    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

/**
 * Void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log('Hello');
    }

    let a: void = undefined;
    let b: void = voidFunc();
}

/**
 * any 타입
 */
function anyExam() {
    let anyVar: any;
    let unknownVar: unknown;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; <- Error
}