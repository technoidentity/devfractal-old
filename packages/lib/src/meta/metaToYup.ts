import {
  array,
  ArraySchema,
  bool,
  date,
  DateSchema,
  number,
  NumberSchema,
  object,
  Schema,
  string,
  StringSchema,
} from 'yup'
import { buildObject } from '../utils'
import {
  ArrayRefinements,
  DateRefinements,
  Mixed,
  NumberRefinements,
  StringRefinements,
} from './index'

// tslint:disable typedef switch-default

function toYupNumberRefinements(
  schema: NumberSchema,
  r: NumberRefinements,
): NumberSchema {
  let result: NumberSchema = schema

  if (r.integer) {
    result = result.integer()
  }

  if (r.max) {
    result = result.max(r.max)
  }

  if (r.min) {
    result = result.min(r.min)
  }

  if (r.positive) {
    result = result.positive()
  }

  if (r.negative) {
    result = result.negative()
  }
  return result
}

function toYupStringRefinements(
  schema: StringSchema,
  r: StringRefinements,
): StringSchema {
  let result: StringSchema = schema

  if (r.email) {
    result = result.email()
  }
  if (r.url) {
    result = result.url()
  }
  if (r.lowercase) {
    result = result.lowercase()
  }
  if (r.uppercase) {
    result = result.uppercase()
  }
  if (r.maxStringLength) {
    result = result.max(r.maxStringLength)
  }
  if (r.minStringLength) {
    result = result.min(r.minStringLength)
  }
  if (r.length) {
    result = result.length(r.length)
  }

  return result
}

function toYupDateRefinements(
  schema: DateSchema,
  r: DateRefinements,
): DateSchema {
  let result: DateSchema = schema
  if (r.maxDate) {
    result = result.max(r.maxDate)
  }
  if (r.minDate) {
    result = result.min(r.minDate)
  }

  return result
}

export function toYupArrayRefinements(
  schema: ArraySchema<unknown>,
  r: ArrayRefinements,
): ArraySchema<unknown> {
  let result: ArraySchema<unknown> = schema

  if (r.maxArrayLength) {
    result = result.max(r.maxArrayLength)
  }
  if (r.minArrayLength) {
    result = result.min(r.minArrayLength)
  }

  return result
}

export function metaToYup(meta: Mixed): Schema<any> {
  switch (meta.kind) {
    case 'number':
      const ns = number().strict(true)
      return meta.refinements
        ? toYupNumberRefinements(ns, meta.refinements)
        : ns

    case 'string':
      const ss = string().strict(true)
      return meta.refinements
        ? toYupStringRefinements(ss, meta.refinements)
        : ss

    case 'boolean':
      return bool()

    case 'date':
      const ds = date().strict(true)
      return meta.refinements ? toYupDateRefinements(ds, meta.refinements) : ds

    case 'enum':
      return string()
        .strict(true)
        .oneOf(meta.values as string[])

    case 'array':
      const as = array()
        .strict(true)
        .of(metaToYup(meta.of))
      return meta.refinements ? toYupArrayRefinements(as, meta.refinements) : as

    case 'object':
      return object(buildObject(meta.properties, metaToYup)).strict(true)
  }
}
