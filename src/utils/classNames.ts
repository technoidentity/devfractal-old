import tcomb from 'tcomb'

export type ClassNameArg =
  | string
  | ReadonlyArray<string>
  | { readonly [index: string]: any }
  | undefined
  | null

export const classNames: (...args: ClassNameArg[]) => string = (...args) => {
  // tslint:disable-next-line:readonly-array
  const result: string[] = []

  args.forEach(arg => {
    if (tcomb.String.is(arg)) {
      if (arg !== '') {
        result.push(arg)
      }
    } else if (tcomb.Array.is(arg)) {
      const res: string = classNames(...(arg as any))
      if (res !== '') {
        result.push(res)
      }
    } else if (tcomb.Object.is(arg)) {
      Object.keys(arg).forEach(key => {
        if (arg[key]) {
          result.push(key)
        }
      })
    } else if (arg !== null && arg !== undefined) {
      throw new Error(`classNames cannot handle ${arg}`)
    }
  })

  return result.join(' ')
}
