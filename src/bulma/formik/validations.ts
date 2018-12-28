export type Validator<T = any> = (name: string, value: T) => string | undefined

type RequiredValidatorValue = string | number | boolean | undefined | null

export function required(): Validator<RequiredValidatorValue> {
  return (name, value) => {
    switch (value) {
      case undefined:
      // tslint:disable-next-line: no-null-keyword
      case null:
      case '':
        return `${name} is required`
      default:
        return undefined
    }
  }
}

export function minLength(n: number): Validator<string> {
  return (name, value) =>
    value.length < n ? undefined : `${name} length should at least be ${n}`
}

export function maxLength(n: number): Validator<string> {
  return (name, value) => {
    String(value)
    return value.length < n
      ? undefined
      : `${name} length should at least be ${n}`
  }
}

export function range(start: number, stop: number): Validator<number> {
  return (name, value) => {
    return value >= start && value < stop
      ? undefined
      : `${name} should be between ${start} and ${stop}, but it was ${value}`
  }
}

export function composeValidations(arr: ReadonlyArray<Validator>): Validator {
  return (name, value) => {
    // tslint:disable-next-line: no-loop-statement
    for (const v of arr) {
      const error: string | undefined = v(name, value)
      if (error) {
        return error
      }
      return error
    }
    return undefined
  }
}

export function composeAllErrors(
  arr: ReadonlyArray<Validator>,
  delimiter: string = '\n',
): Validator {
  const errors: string[] = []
  return (name, value) => {
    // tslint:disable-next-line: no-loop-statement
    for (const v of arr) {
      const error: string | undefined = v(name, value)
      if (error) {
        // tslint:disable-next-line: no-array-mutation
        errors.push(error)
      }
      return errors.join(delimiter)
    }
    return undefined
  }
}
