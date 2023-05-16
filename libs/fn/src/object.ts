import { map } from "./iter";
import { pipe } from "./pipe";

export function oget<T extends object, K extends keyof T>(obj: T, key: K): T[K];

export function oget<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K]
>(obj: T, key: K, key2: K2): T[K][K2];

export function oget<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K],
  K3 extends keyof T[K][K2]
>(obj: T, key: K, key2: K2, key3: K3): T[K][K2][K3];

export function oget<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K],
  K3 extends keyof T[K][K2],
  K4 extends keyof T[K][K2][K3]
>(obj: T, key: K, key2: K2, key3: K3, key4: K4): T[K][K2][K3][K4];

export function oget<T extends object>(obj: T, ...keys: string[]): any {
  let result: any = obj;
  for (const key of keys) {
    result = result[key];
  }

  return result;
}

export function oset<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T;

export function oset<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K]
>(obj: T, key: K, key2: K2, value: T[K][K2]): T;

export function oset<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K],
  K3 extends keyof T[K][K2]
>(obj: T, key: K, key2: K2, key3: K3, value: T[K][K2][K3]): T;

export function oset<
  T extends object,
  K extends keyof T,
  K2 extends keyof T[K],
  K3 extends keyof T[K][K2],
  K4 extends keyof T[K][K2][K3]
>(obj: T, key: K, key2: K2, key3: K3, key4: K4, value: T[K][K2][K3][K4]): T;

export function oset<T extends object>(obj: T, ...args: any[]): T {
  let result: any = { ...obj };
  for (let i = 0; i < args.length - 1; i += 1) {
    result = result[args[i]];
  }
  result[args[args.length - 1]] = args[args.length - 1];

  return result;
}

export function pick<T extends object, K extends keyof T>(keys: readonly K[]) {
  return (obj: T): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
      result[key] = obj[key];
    }

    return result;
  };
}

export function pluck<T extends object, K extends keyof T>(keys: readonly K[]) {
  return (arr: Iterable<T>): IterableIterator<Pick<T, K>> => {
    return pipe(arr, map(pick(keys)));
  };
}

export function omit<T extends object, K extends keyof T>(keys: K[]) {
  return (obj: T): Omit<T, K> => {
    const result: any = {};
    for (const key of Object.keys(obj)) {
      const k = key as K;
      if (!keys.includes(k)) {
        result[k] = obj[k];
      }
    }

    return result as Omit<T, K>;
  };
}

export function merge<T1, T2>(obj2: T2) {
  return (obj: T1): T1 & T2 => {
    return { ...obj, ...obj2 };
  };
}

export function buildObject<T extends object, K extends keyof T, V>(
  f: (value: T[K], key: K) => V
) {
  return (obj: T): Record<K, V> => {
    const result = {} as Record<K, V>;
    for (const key of Object.keys(obj) as K[]) {
      result[key] = f(obj[key], key);
    }

    return result;
  };
}

export function keys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

export function entries<K extends string | number, V>(
  o: Record<K, V>
): Array<[K, V]> {
  return Object.entries(o) as Array<[K, V]>;
}

export function pickBy<T>(predicate: (value: T) => boolean) {
  return (obj: Record<string, any>): object => {
    const resultObj: Record<string, any> = {};
    for (const key of Object.keys(obj)) {
      if (predicate(obj[key])) {
        resultObj[key] = obj[key];
      }
    }
    return resultObj;
  };
}

export function omitBy<T>(predicate: (value: T) => boolean) {
  return (obj: Record<string, any>): object => {
    const resultObject: Record<string, any> = {};

    for (const key of Object.keys(obj)) {
      if (!predicate(obj[key])) {
        resultObject[key] = obj[key];
      }
    }

    return resultObject;
  };
}

export function mergeWith<T extends object, U extends object, V>(
  fst: T,
  snd: U,
  fn: (x: T[keyof T], y: U[keyof U]) => V
): Record<keyof T | keyof U, V | T[keyof T] | U[keyof U]> {
  const result: any = {};
  for (const [key, value] of entries(fst)) {
    if (Object.hasOwn(snd, key)) {
      const val = fn(fst[key], snd[key]);
      result[key] = val;
    } else {
      result[key] = value;
    }
  }
  for (const [key, value] of entries(snd)) {
    if (!Object.hasOwn(result, key)) {
      result[key] = value;
    }
  }
  return result;
}

export function index<T extends object, K extends keyof T>(
  obj: readonly T[],
  index: K
): Map<T[K], T> {
  return new Map(obj.map((item) => [item[index], item]));
}
