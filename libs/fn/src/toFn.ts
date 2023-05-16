type Params<T, Name extends keyof T> = T[Name] extends (...args: infer P) => any
  ? P
  : never;

type Return<T, Name extends keyof T> = T[Name] extends (...args: any) => infer P
  ? P
  : never;

type Class<T> = new (...args: any[]) => T;

export function toFn<T, K extends keyof T>(cls: Class<T>, methodName: K) {
  return (obj: T, ...args: Params<T, K>): Return<T, K> =>
    cls.prototype[methodName].call(obj, ...args);
}
