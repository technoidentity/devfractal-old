export function getRandom(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function randInt(lower: number, upper: number): number {
  return Math.floor(getRandom(Math.ceil(lower), Math.floor(upper)));
}

export function notf<F extends (...args: any[]) => any>(f: F): F {
  return ((...args: any[]) => !f(...args)) as F;
}
