import { assert } from 'tcomb'

export const capitalize: (arg: string) => string = arg => {
  return arg.length === 0 ? '' : arg[0].toUpperCase() + arg.slice(1)
}

export const toLower: (arg: string, delimiter: string) => string = (
  arg,
  delimiter,
) => {
  if (arg.length === 0) {
    return ''
  }
  let result: string = arg[0].toLowerCase()

  // tslint:disable-next-line: no-loop-statement
  for (let i: number = 1; i < arg.length; i += 1) {
    if (arg[i] === arg[i].toUpperCase()) {
      result += `${delimiter}${arg[i].toLowerCase()}`
    } else {
      result += arg[i]
    }
  }

  return result
}

export const camelCaseToHyphenated: (arg: string) => string = arg =>
  toLower(arg, '-')

export const camelCaseToSpaced: (arg: string) => string = arg =>
  toLower(arg, ' ')

export const camelCaseToPhrase: (arg: string) => string = arg =>
  capitalize(toLower(arg, ' '))

export const chop: (arg: string, delimiter?: string) => string = (
  arg,
  delimiter = '/',
) => {
  if (arg.length === 0) {
    return ''
  }
  return arg[arg.length - 1] === delimiter ? arg.slice(0, arg.length - 1) : arg
}

export const extractSegment: (
  arg: string,
  fromIndex: number,
  upto: string,
) => string = (arg: string, fromIndex: number, upto: string) => {
  if (arg.length === 0) {
    return ''
  }

  const p: string = arg.slice(fromIndex)
  const s: number = p.indexOf(upto)
  return s === -1 ? p.trim() : p.slice(0, s).trim()
}

const rangeInternal: (
  start: number,
  stop: number,
  step?: number,
) => ReadonlyArray<number> = (start, stop, step = 1) => {
  const result: number[] = []

  assert(step > 0)
  // tslint:disable-next-line: no-loop-statement
  for (let i: number = start; i < stop; i += step) {
    // tslint:disable-next-line: no-array-mutation
    result.push(i)
  }
  return result
}

export const range: (
  start: number,
  stop?: number,
  step?: number,
) => ReadonlyArray<number> = (start, stop, step) =>
  stop ? rangeInternal(start, stop, step) : rangeInternal(0, start)
