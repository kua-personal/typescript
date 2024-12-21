/**
 * 서로소 유니온 타입
 */
type Admin = {
    tag: "ADMIN",
    name: string;
    kickCount: number;
}
export type Member = {
    tag: "MEMBER",
    name: string;
    point: number;
}
export type Guest = {
    tag: "GUEST",
    name: string;
    visitCount: number;
}

export type User = Admin | Member | Guest;

function login(user: User) {
    switch (user.tag) {
        case "ADMIN":
            console.log(`${user.name}님. 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case "MEMBER":
            console.log(`${user.name}님. 현재까지 ${user.point}점을 획득했습니다.`);
            break;
        case "GUEST":
            console.log(`${user.name}님. 현재까지 ${user.visitCount}번 방문했습니다.`);
            break;
    }
}

/**
 * 복습겸 한가지 더 사례
 */

export type LoadingTask = {
    state: "LOADING";
}
export type FailedTask = {
    state: "FAILED";
    error: {
        message: "오류발생"
    }
}
export type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: "데이터는 흠흠"
    }
}

export type AsyncYTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncYTask) {
    switch (task.state) {
        case "LOADING":
            console.log("로딩중입니다.");
            break;
        case "FAILED":
            console.log(`에러 발생: ${task.error.message}`);
            break;
        case "SUCCESS":
            console.log(`성공: ${task.response.data }`);
            break;
    }
}