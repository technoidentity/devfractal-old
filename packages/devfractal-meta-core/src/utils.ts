export function buildObject<T>(
  obj: T,
  f: (key: keyof T) => unknown,
): Record<keyof T, any> {
  const result: any = {}

  for (const k of Object.keys(obj)) {
    // tslint:disable-next-line:no-object-mutation
    result[k] = f(k as any)
  }

  return result
}
