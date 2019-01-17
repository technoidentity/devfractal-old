export const capitalize: (arg: string) => string = arg => {
  return arg.length === 0 ? '' : arg[0].toUpperCase() + arg.slice(1)
}

export const camelCaseToLower: (arg: string, delimiter: string) => string = (
  arg,
  delimiter,
) => {
  if (arg.length === 0) {
    return ''
  }
  let result: string = ''
  // tslint:disable-next-line: no-loop-statement
  for (const v of arg) {
    if (v === v.toUpperCase()) {
      result += `${delimiter}${v.toLowerCase()}`
    } else {
      result += v
    }
  }

  return result
}

export const camelCaseToHyphenated: (arg: string) => string = arg =>
  camelCaseToLower(arg, '-')

export const camelCaseToSpaced: (arg: string) => string = arg =>
  camelCaseToLower(arg, ' ')

export const camelCaseToPhrase: (arg: string) => string = arg =>
  capitalize(camelCaseToLower(arg, ' '))

export const chop: (arg: string) => string = (arg: string) => {
  if (arg.length === 0) {
    return ''
  }
  return arg[arg.length - 1] === '/' ? arg.slice(0, arg.length - 1) : arg
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
