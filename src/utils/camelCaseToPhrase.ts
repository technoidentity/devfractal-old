// tslint:disable

export const camelCaseToPhrase = (arg: string) => {
  let result: string = ''
  if (arg.length === 0) {
    return ''
  }
  result += arg[0].toUpperCase()

  for (let j = 1; j < arg.length; j += 1) {
    if (arg[j] === arg[j].toUpperCase()) {
      result += ' ' + arg[j].toLowerCase()
    } else {
      result += arg[j]
    }
  }
  return result
}
