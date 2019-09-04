import {
  DateSchema,
  MixedSchema,
  NumberSchema,
  StringSchema,
  TestOptionsMessage,
} from 'yup'

export const required: (
  message?: TestOptionsMessage,
) => <T extends MixedSchema>(schema: T) => T = message => schema =>
  schema.required(message) as typeof schema

export function min(
  minValue: string,
  message?: TestOptionsMessage,
): (schema: StringSchema) => StringSchema

export function min(
  minValue: number,
  message?: TestOptionsMessage,
): (schema: NumberSchema) => NumberSchema

export function min(
  minValue: Date,
  message?: TestOptionsMessage,
): (schema: DateSchema) => DateSchema

export function min<T extends string | number | Date>(
  minValue: T,
  message?: TestOptionsMessage,
): any {
  return (schema: any) => schema.min(minValue, message)
}

export function max(
  maxValue: string,
  message?: TestOptionsMessage,
): (schema: StringSchema) => StringSchema

export function max(
  maxValue: number,
  message?: TestOptionsMessage,
): (schema: NumberSchema) => NumberSchema

export function max(
  maxValue: Date,
  message?: TestOptionsMessage,
): (schema: DateSchema) => DateSchema

export function max<T extends string | number | Date>(
  maxValue: T,
  message?: TestOptionsMessage,
): any {
  return (schema: any) => schema.max(maxValue, message)
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
