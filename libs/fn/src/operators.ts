export const plus = (x: number, y: number) => x + y;
export const minus = (x: number, y: number) => x - y;
export const mul = (x: number, y: number) => x * y;
export const div = (x: number, y: number) => x / y;
export const mod = (x: number, y: number) => x % y;
export const pow = (x: number, y: number) => x ** y;

export const not = (x: boolean) => !x;
export const bool = (x: unknown) => !!x;
export const inc = (x: number) => x + 1;
export const dec = (x: number) => x - 1;
export const neg = (x: number) => -x;

export const squared = (x: number) => x * x;
export const isOdd = (x: number) => x % 2 !== 0;
export const isEven = (x: number) => x % 2 === 0;
