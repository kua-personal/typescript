// enum
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    KOREAN = "ko",
    ENGLISH = "en",
    JAPANESE = "jp"
}

const user1 = {
    name: "Neo",
    role: Role.ADMIN,
    language: Language.KOREAN
}

const user2 = {
    name: "Trinity",
    role: Role.USER,
    language: Language.ENGLISH
}

const user3 = {
    name: "Morpheus",
    role: Role.GUEST,
    language: Language.JAPANESE
}

console.log(user1, user2, user3)