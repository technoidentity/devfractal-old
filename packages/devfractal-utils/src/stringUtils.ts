export function capitalize(arg: string): string {
  return arg.length === 0 ? '' : arg[0].toUpperCase() + arg.slice(1)
}

export function toLower(arg: string, delimiter?: string): string {
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

export function camelCaseToHyphenated(arg: string): string {
  return toLower(arg, '-')
}

export function camelCaseToSpaced(arg: string): string {
  return toLower(arg, ' ')
}

export const camelCaseToPhrase: (arg: string) => string = arg =>
  capitalize(toLower(arg, ' '))

export function chop(arg: string, delimiter: string = '/'): string {
  return arg.length === 0
    ? ''
    : arg[arg.length - 1] === delimiter
    ? arg.slice(0, arg.length - 1)
    : arg
}

export function extractSegment(
  arg: string,
  fromIndex: number,
  upto: string,
): string {
  if (arg.length === 0) {
    return ''
  }

  const p: string = arg.slice(fromIndex)
  const s: number = p.indexOf(upto)

  return s === -1 ? p.trim() : p.slice(0, s).trim()
}

export function capitalizeAll(
  str: string,
  delimiter: string = ' ',
  joinDelimiter: string = ' ',
): string {
  return str
    .split(delimiter)
    .map(capitalize)
    .join(joinDelimiter)
}
