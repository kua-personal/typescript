// alias
export type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "Neo",
    nickname: "The One",
    birth: "2001.03.02",
    bio: "I'm the one",
    location: "Matrix"
}

let user2: User = {
    id: 2,
    name: "Trinity",
    nickname: "The Hacker",
    birth: "2001.03.03",
    bio: "I'm the hacker",
    location: "Matrix"
}

// Index Signature
export type CountryCodes = {
    [country: string]: string;
}
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}