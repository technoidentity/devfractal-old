import {
  ArraySchema,
  DateSchema,
  MixedSchema,
  NumberSchema,
  Schema,
  StringSchema,
  TestOptionsMessage,
} from 'yup'

// @TODO: Types are all wrong in yup. Need some way to fix that mess.

export const required: (
  message?: TestOptionsMessage,
) => <S extends MixedSchema>(schema: S) => S = message => schema =>
  schema.required(message) as typeof schema

export const nullable: (
  isNullable?: true,
) => <S extends MixedSchema>(schema: S) => S = isNullable => schema =>
  schema.nullable(isNullable) as typeof schema

export const notRequired: () => <S extends MixedSchema>(
  schema: S,
) => S = () => schema => schema.notRequired() as typeof schema

export function minLength(
  min: number,
  message?: TestOptionsMessage,
): (schema: StringSchema) => StringSchema {
  return schema => schema.min(min, message)
}

export function min(
  min: number,
  message?: TestOptionsMessage,
): (schema: NumberSchema) => NumberSchema {
  return schema => schema.min(min, message)
}

export function after(
  min: Date,
  message?: TestOptionsMessage,
): (schema: DateSchema) => DateSchema {
  return schema => schema.min(min, message)
}

export function maxLength(
  max: number,
  message?: TestOptionsMessage,
): (schema: StringSchema) => StringSchema {
  return schema => schema.max(max, message)
}

export function max(
  max: number,
  message?: TestOptionsMessage,
): (schema: NumberSchema) => NumberSchema {
  return schema => schema.max(max, message)
}

export function before(
  max: Date,
  message?: TestOptionsMessage,
): (schema: DateSchema) => DateSchema {
  return schema => schema.max(max, message)
}

export const length: (
  limit: number,
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = (limit, message) => schema =>
  schema.length(limit, message)

export const matches: (
  exp: RegExp,
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = (exp, message) => schema =>
  schema.matches(exp, message)

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

export function of<U>(
  type: Schema<U>,
): <T>(schema: ArraySchema<T>) => ArraySchema<U> {
  return schema => schema.of(type)
}
