/**
 * Interface
 */
interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

const person: Person = {
    name: 'Neo',
    age: 85,
    sayHi: function() {
        console.log('Hello');
    }
}
