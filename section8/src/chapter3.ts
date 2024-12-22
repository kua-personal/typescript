/**
 * Mapped Types
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key]
}

export type BooleanUser = {
    [key in keyof User]: boolean
}

export type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
}

function fetchUser(): ReadonlyUser {
    return {
        id: 1,
        name: 'Neo',
        age: 85
    }
}

function updateUser(user: User) {
    user.name = 'Neo';
}
