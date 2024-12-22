/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
    name: string;
    moveSpeed: number;

    move(): void;
}

class Character implements CharacterInterface {
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string,
    ) {
    }

    // interface는 public만 선언이 가능함

    move() {
        console.log(`${this.name}이 ${this.moveSpeed}의 속도로 이동합니다.`);
    }
}