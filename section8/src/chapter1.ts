/**
 * Indexed Access Types
 */
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}[]

function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.id} - ${author.name}`);
}

const post: PostList[number] = {
    title: "본문",
    content: "내용",
    author: {
        id: 1,
        name: "Neo"
    }
}

printAuthorInfo(post.author); // 1 - Neo

export type Tup = [number,  string,  boolean]
export type Tup0 = Tup[0]
export type Tup1 = Tup[1]
export type Tup2 = Tup[2]
type TupNum = Tup[number]