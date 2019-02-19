import {
  ArraySchema,
  MixedSchema,
  NumberSchema,
  StringSchema,
  TestOptionsMessage,
} from 'yup'
// export type Validator<T = any> = (name: string, value: T) => string | undefined

// type RequiredValidatorValue = string | number | boolean | undefined | null

// export function required(): Validator<RequiredValidatorValue> {
//   return (name, value) => {
//     switch (value) {
//       case undefined:
//       // tslint:disable-next-line: no-null-keyword
//       case null:
//       case '':
//         return `${name} is required`
//       default:
//         return undefined
//     }
//   }
// }

// export function minLength(n: number): Validator<string> {
//   return (name, value) =>
//     value.length < n ? undefined : `${name} length should at least be ${n}`
// }

// export function maxLength(n: number): Validator<string> {
//   return (name, value) => {
//     String(value)
//     return value.length < n
//       ? undefined
//       : `${name} length should at least be ${n}`
//   }
// }

// export function range(start: number, stop: number): Validator<number> {
//   return (name, value) => {
//     return value >= start && value < stop
//       ? undefined
//       : `${name} should be between ${start} and ${stop}, but it was ${value}`
//   }
// }

// export function composeValidations(arr: ReadonlyArray<Validator>): Validator {
//   return (name, value) => {
//     // tslint:disable-next-line: no-loop-statement
//     for (const v of arr) {
//       const error: string | undefined = v(name, value)
//       if (error) {
//         return error
//       }
//       return error
//     }
//     return undefined
//   }
// }

// export function composeAllErrors(
//   arr: ReadonlyArray<Validator>,
//   delimiter: string = '\n',
// ): Validator {
//   const errors: string[] = []
//   return (name, value) => {
//     // tslint:disable-next-line: no-loop-statement
//     for (const v of arr) {
//       const error: string | undefined = v(name, value)
//       if (error) {
//         // tslint:disable-next-line: no-array-mutation
//         errors.push(error)
//       }
//       return errors.join(delimiter)
//     }
//     return undefined
//   }
// }

type CommonSchema =
  | StringSchema
  | NumberSchema
  | ArraySchema<string>
  | ArraySchema<number>

export const required: (
  message?: TestOptionsMessage,
) => <T extends MixedSchema>(schema: T) => T = message => schema =>
  schema.required(message)

export const min: (
  minValue: number,
  message?: TestOptionsMessage,
) => <T extends CommonSchema>(schema: T) => T = (minValue, message) => schema =>
  schema.min(minValue, message) as typeof schema

export const max: (
  maxValue: number,
  message?: TestOptionsMessage,
) => <T extends CommonSchema>(schema: T) => T = (maxValue, message) => schema =>
  schema.max(maxValue, message) as typeof schema

export const email: (
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = message => schema =>
  schema.email(message)

export const url: (
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = message => schema =>
  schema.url(message)

export const trim: (
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = message => schema =>
  schema.strict(true).trim(message)

export const lowercase: (
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = message => schema =>
  schema.strict(true).lowercase(message)

export const uppercase: (
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = message => schema =>
  schema.strict(true).uppercase(message)

export const lessThan: (
  max: number,
  message?: TestOptionsMessage,
) => (schema: NumberSchema) => NumberSchema = (max, message) => schema =>
  schema.lessThan(max, message)

export const moreThan: (
  min: number,
  message?: TestOptionsMessage,
) => (schema: NumberSchema) => NumberSchema = (min, message) => schema =>
  schema.moreThan(min, message)

export const positive: (
  message?: TestOptionsMessage,
) => (schema: NumberSchema) => NumberSchema = message => schema =>
  schema.positive(message)

export const negative: (
  message?: TestOptionsMessage,
) => (schema: NumberSchema) => NumberSchema = message => schema =>
  schema.negative(message)

export const integer: (
  message?: TestOptionsMessage,
) => (schema: NumberSchema) => NumberSchema = message => schema =>
  schema.integer(message)

export const truncate: () => (
  schema: NumberSchema,
) => NumberSchema = () => schema => schema.truncate()
