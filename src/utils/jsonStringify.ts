export const jsonStringify: (obj: object) => string = obj => {
  // tslint:disable-next-line:no-null-keyword
  return JSON.stringify(obj, null, 2)
}
