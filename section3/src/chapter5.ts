/**
 * 타입 추론
 */
let aa = 10;
let bb = "hello";
let cc = {
    id: 1,
    name: "Neo",
    profile: {
        nickname: "The One"
    },
    urls: ["https://neo.wiz"]
};

let { id, name, profile } = cc;
let [one, two, three] = [1, "hello",  true]

function func(message = "hello") {
    return message;
}

let dd; // any
dd = 10; // number
dd.toFixed();

dd = "hello"; // string
dd.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];