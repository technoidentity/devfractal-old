import {
  ArrayMT,
  ArrayRefinements,
  DateMT,
  DateRefinements,
  EnumMT,
  Mixed,
  MT,
  NumberMT,
  NumberRefinements,
  StringMT,
  StringRefinements,
} from 'meta-core'
import { buildObject } from 'technoidentity-utils'
import {
  array,
  ArraySchema,
  bool,
  date,
  DateSchema,
  number,
  NumberSchema,
  object,
  ObjectSchema,
  Schema,
  string,
  StringSchema,
} from 'yup'

// tslint:disable typedef switch-default

const toYupNumberRefinements: (
  schema: NumberSchema,
  r: NumberRefinements,
) => NumberSchema = (schema, r) => {
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

  if (r.sign === 'positive') {
    result = result.positive()
  }

  if (r.sign === 'negative') {
    result = result.negative()
  }
  return result
}

const toYupStringRefinements: (
  schema: StringSchema,
  r: StringRefinements,
) => StringSchema = (schema, r) => {
  let result: StringSchema = schema

  if (r.base === 'email') {
    result = result.email()
  }
  if (r.base === 'url') {
    result = result.url()
  }

  if (r.case === 'lower') {
    result = result.lowercase()
  }
  if (r.case === 'upper') {
    result = result.uppercase()
  }
  if (r.strLength) {
    if (r.strLength.fixed) {
      result = result.length(r.strLength.fixed)
    } else {
      if (r.strLength.max) {
        result = result.max(r.strLength.max)
      }
      if (r.strLength.min) {
        result = result.min(r.strLength.min)
      }
    }
  }
  return result
}

const toYupDateRefinements: (
  schema: DateSchema,
  r: DateRefinements,
) => DateSchema = (schema, r) => {
  let result: DateSchema = schema
  if (r.maxDate) {
    result = result.max(r.maxDate)
  }
  if (r.minDate) {
    result = result.min(r.minDate)
  }

  return result
}

const toYupArrayRefinements: (
  schema: ArraySchema<unknown>,
  r: ArrayRefinements,
) => ArraySchema<unknown> = (schema, r) => {
  let result: ArraySchema<unknown> = schema

  if (r.maxArrayLength) {
    result = result.max(r.maxArrayLength)
  }
  if (r.minArrayLength) {
    result = result.min(r.minArrayLength)
  }

  return result
}

export const metaToYup: (meta: Mixed) => Schema<any> = meta => {
  switch (meta.kind) {
    case 'number':
      return numberToYup(meta)

    case 'string':
      return stringToYup(meta)

    case 'boolean':
      return bool()

    case 'date':
      return dateToYup(meta)

    case 'enum':
      return enumToYup(meta)

    case 'array':
      return arrayToYup(meta)

    case 'object':
      return mtToYup(meta)
  }
}

function numberToYup(meta: NumberMT) {
  const ns = number().strict(true)
  return meta.refinements ? toYupNumberRefinements(ns, meta.refinements) : ns
}

function stringToYup(meta: StringMT) {
  const ss = string().strict(true)
  return meta.refinements ? toYupStringRefinements(ss, meta.refinements) : ss
}

function dateToYup(meta: DateMT) {
  const ds = date().strict(true)
  return meta.refinements ? toYupDateRefinements(ds, meta.refinements) : ds
}

function enumToYup(meta: EnumMT): Schema<any> {
  return string()
    .strict(true)
    .oneOf(meta.values as string[])
}

function arrayToYup(meta: ArrayMT) {
  const as = array()
    .strict(true)
    .of(metaToYup(meta.of))
  return meta.refinements ? toYupArrayRefinements(as, meta.refinements) : as
}

export function mtToYup(meta: MT): ObjectSchema<any> {
  return object(
    buildObject(meta.properties, (_, p) => metaToYup(meta.properties[p])),
  ).strict(true)
}
