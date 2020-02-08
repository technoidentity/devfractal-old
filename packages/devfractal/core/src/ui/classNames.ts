import { keys, string, UnknownArray, UnknownRecord } from 'technoidentity-utils'

export type ClassNameArg =
  | string
  | undefined
  | null
  | ArrayCNA
  | Record<string, unknown>

interface ArrayCNA extends Array<ClassNameArg> {}

export function classNames(...args: ClassNameArg[]): string {
  const draft: string[] = []

  args.forEach(arg => {
    if (string.is(arg)) {
      if (arg !== '') {
        draft.push(arg)
      }
    } else if (UnknownArray.is(arg)) {
      const res: string = classNames(...arg)
      if (res !== '') {
        draft.push(res)
      }
    } else if (UnknownRecord.is(arg)) {
      keys(arg).forEach(key => {
        if (arg[key]) {
          draft.push(key)
        }
      })
    } else if (arg !== null && arg !== undefined) {
      throw new Error(`classNames cannot handle ${arg}`)
    }
  })

  return draft.join(' ')
}
