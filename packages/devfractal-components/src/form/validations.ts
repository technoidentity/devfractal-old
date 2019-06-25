import {
  ArraySchema,
  MixedSchema,
  NumberSchema,
  StringSchema,
  TestOptionsMessage,
} from 'yup'

type CommonSchema =
  | StringSchema
  | NumberSchema
  | ArraySchema<string>
  | ArraySchema<number>

export const required: (
  message?: TestOptionsMessage,
) => <T extends MixedSchema>(schema: T) => T = message => schema =>
  schema.required(message) as typeof schema

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

export const length: (
  limit: number,
  message?: TestOptionsMessage,
) => (schema: StringSchema) => StringSchema = (limit, message) => schema =>
  (schema as any).length(limit, message)

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
