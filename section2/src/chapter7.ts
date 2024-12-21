// void
function fun1(): string {
    return 'Hello World';
}

function func2(): void {
    console.log('Hello World');
}

// never
function func3(): never {
    while (true) {

    }
}

function func4(): never {
    throw new Error('Error');
}