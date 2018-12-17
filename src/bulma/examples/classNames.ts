import tcomb from 'tcomb'
// tslint:disable

export const classNames = (...args: any[]) => {
  let result: string[] = []

  for (const arg of args) {
    if (arg === '' || arg === null || arg === undefined) {
    } else if (tcomb.String.is(arg)) {
      result.push(arg)
    } else if (tcomb.Object.is(arg)) {
      for (const key of Object.keys(arg)) {
        if (arg[key]) {
          result.push(key)
        }
      }
    } else if (tcomb.Array.is(arg)) {
      const res = classNames(...arg)
      if (res !== '') {
        result.push(res)
      }
    }
  }
  return result.join(' ')
}
