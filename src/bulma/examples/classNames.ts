import { String, Object as Obj, Array } from 'tcomb'

// tslint:disable

export const classNamesForObject = (arg: any): string[] =>
  Object.keys(arg).filter((key: string) => arg[key])

export const classNames = (...args: any[]): string =>
  args
    .reduce((acc, arg) => {
      if (arg === '' || arg === undefined || arg === null) return acc
      if (String.is(arg)) return [...acc, arg]
      if (Obj.is(arg)) return [...acc, ...classNamesForObject(arg)]
      if (Array.is(arg)) {
        const result = classNames(...arg)
        return result === '' ? acc : [...acc, result]
      }
      throw new Error(`classNames can't handle ${arg}`)
    }, [])
    .join(' ')
