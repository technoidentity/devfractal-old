export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export type Only<T, U> = Pick<T, Extract<keyof T, U>>
