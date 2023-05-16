export function union<T>(first: T[], second: T[]): T[] {
  return [...new Set([...first, ...second])];
}

export function intersection<T>(first: T[], second: T[]): T[] {
  return first.filter((x) => second.includes(x));
}

export function difference<T>(first: T[], second: T[]): T[] {
  return first.filter((x) => !second.includes(x));
}

export function setUnion<T>(first: Set<T>, second: Set<T>): Set<T> {
  const result: Set<T> = new Set<T>(first);
  for (const item of second) {
    result.add(item);
  }
  return result;
}

export function setIntersection<T>(first: Set<T>, second: Set<T>): Set<T> {
  const result: Set<T> = new Set<T>();
  for (const item of first) {
    if (second.has(item)) {
      result.add(item);
    }
  }
  return result;
}

export function setDifference<T>(first: Set<T>, second: Set<T>): Set<T> {
  const result: Set<T> = new Set<T>();
  for (const item of first) {
    if (!second.has(item)) {
      result.add(item);
    }
  }
  return result;
}
