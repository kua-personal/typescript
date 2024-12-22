/**
 * keyof 연산자
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key]
}

const person = {
    name: 'Neo',
    age: 85
}

getPropertyKey(person, 'name')

