export const camelCaseToPhrase: (arg: string) => string = arg => {
  let result: string = ''
  if (arg.length === 0) {
    return ''
  }
  result += arg[0].toUpperCase()

  // tslint:disable-next-line:no-loop-statement typedef
  for (let j = 1; j < arg.length; j += 1) {
    if (arg[j] === arg[j].toUpperCase()) {
      result += ` ${arg[j].toLowerCase()}`
    } else {
      result += arg[j]
    }
  }
  return result
}
