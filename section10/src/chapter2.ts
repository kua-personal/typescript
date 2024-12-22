import {LargeNumberLike} from "node:crypto";

/**
 * Pick<T,K>
 *     객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */
interface Post {
    title: string;
    tags: string[]
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const legacyPost: Pick<Post,  "title" | "content"> = {
    title: "Hello",
    content: "World"
}

/**
 * Omit<T,K>
 *     객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
type Omit<T, K extends keyof T> = Pick<T,  Exclude<keyof T, K>>
const noTitlePost: Omit<Post, "title"> = {
    content: "content",
    tags: []
}

/**
 * Record<K, V>
 */
type Record<K extends keyof any, V> = {
    [key in K]: V;
}

type Thumbnail = Record<"large" | "medium" | "small", {  url: string, size: number }>