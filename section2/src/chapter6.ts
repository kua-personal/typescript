// any
let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = 'hello';
unknownVar = () => {};

// num = unknownVar;  <--  Error
if (typeof unknownVar === "number") { // Type Guard
    num = unknownVar;
}