export const logger: (...args: any[]) => void = (...args) => {
  // tslint:disable no-console
  console.log(...args)
}
