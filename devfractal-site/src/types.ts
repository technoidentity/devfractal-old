export type Only<T, U> = Pick<T, Extract<keyof T, U>>
