import invariant from "tiny-invariant";

export function toMap<T extends object, Select extends [keyof T, keyof T]>(
  objList: readonly T[],
  select: Select
): Map<T[Select[0]], T[Select[1]]> {
  const map = new Map(
    objList.map((obj) => [obj[select[0]], obj[select[1]]] as const)
  );

  return map;
}

export function mergeToMap<T extends object, Key extends keyof T>(
  objList: readonly T[],
  key: Key
): Map<T[Key], T[]> {
  const map = new Map<T[Key], T[]>();

  for (const obj of objList) {
    const k = obj[key];
    const v = map.get(k);
    map.set(k, v === undefined ? [obj] : [...v, obj]);
  }

  return map;
}

export function mget<K, V>(map: Map<K, V>, k: K): V {
  const r = map.get(k);
  invariant(r !== null && r !== undefined, "value null or undefined");

  return r;
}

export function mergeWithToMap<T extends object, Key extends keyof T, Value>(
  objList: readonly T[],
  key: Key,
  reducer: (acc: Value | undefined, e: T) => Value
): Map<T[Key], Value> {
  const map = new Map<T[Key], Value>();

  for (const obj of objList) {
    const k = obj[key];
    map.set(k, reducer(map.get(k), obj));
  }

  return map;
}
