/**
 * 인터페이스 확장
 */
interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

const dog: Dog = {
    name: '멍멍이',
    color: "black",
    isBark: true
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
    name: '멍냥이',
    color: 'black',
    isBark: true,
    isScratch: true
}