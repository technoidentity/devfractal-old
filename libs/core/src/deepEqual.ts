import { isArray, isObject } from "@df/spec";

function isEquitable(x: unknown): x is { equals(other: unknown): boolean } {
  return isObject(x) && "equals" in x;
}

export function deepEqual<T>(fst: T, snd: T): boolean {
  if (fst === snd) {
    return true;
  }

  if (Number.isNaN(fst) && Number.isNaN(snd)) {
    return true;
  }

  if (isArray(fst) && isArray(snd)) {
    if (fst.length !== snd.length) {
      return false;
    }

    return fst.every((x, i) => deepEqual(x, snd[i]));
  }

  if (isObject(fst) && isObject(snd)) {
    if (fst.constructor !== snd.constructor) {
      return false;
    }

    if (isEquitable(fst) && isEquitable(snd)) {
      return fst.equals(snd);
    }

    const fstKeys = Object.keys(fst) as Array<keyof T>;
    const sndKeys = Object.keys(snd) as Array<keyof T>;

    if (fstKeys.length !== sndKeys.length) {
      return false;
    }

    return fstKeys.every((key) => deepEqual(fst[key], snd[key]));
  }

  return false;
}
