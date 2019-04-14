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
import {
  ArrayRefinements,
  DateRefinements,
  MT,
  NumberRefinements,
  StringRefinements,
} from './index'

// tslint:disable typedef switch-default

const toYupNumberRefinements: (
  schema: NumberSchema,
  r: NumberRefinements,
) => NumberSchema = (schema, r) => {
  switch (r.kind) {
    case 'integer':
      return schema.integer()

    case 'max':
      return schema.max(r.value)

    case 'min':
      return schema.min(r.value)

    case 'positive':
      return schema.positive()

    case 'negative':
      return schema.negative()
  }
}

const toYupStringRefinements: (
  schema: StringSchema,
  r: StringRefinements,
) => StringSchema = (schema, r) => {
  switch (r.kind) {
    case 'email':
      return schema.email()
    case 'url':
      return schema.url()
    case 'lowercase':
      return schema.lowercase()
    case 'uppercase':
      return schema.uppercase()
    case 'maxLength':
      return schema.max(r.value)
    case 'minLength':
      return schema.min(r.value)
    case 'length':
      return schema.length(r.value)
  }
}

const toYupDateRefinements: (
  schema: DateSchema,
  r: DateRefinements,
) => DateSchema = (schema, r) => {
  switch (r.kind) {
    case 'max':
      return schema.max(r.value)
    case 'min':
      return schema.min(r.value)
  }
}

const toYupArrayRefinements: (
  schema: ArraySchema<unknown>,
  r: ArrayRefinements,
) => ArraySchema<unknown> = (schema, r) => {
  switch (r.kind) {
    case 'maxLength':
      return schema.max(r.value)
    case 'minLength':
      return schema.min(r.value)
  }
}

function buildObject(obj: any, f: (key: any) => any): any {
  const result: any = {}
  for (const k of Object.keys(obj)) {
    // tslint:disable-next-line:no-object-mutation
    result[k] = f(k as any)
  }
  return result
}

export const metaToYup: (meta: MT) => Schema<any> = meta => {
  switch (meta.kind) {
    case 'number':
      const ns = number().strict(true)
      return meta.refinements
        ? meta.refinements.reduce(toYupNumberRefinements, ns)
        : ns

    case 'string':
      const ss = string().strict(true)
      return meta.refinements
        ? meta.refinements.reduce(toYupStringRefinements, ss)
        : ss

    case 'boolean':
      return bool()

    case 'date':
      const ds = date().strict(true)
      return meta.refinements
        ? meta.refinements.reduce(toYupDateRefinements, ds)
        : ds

    case 'enum':
      return string()
        .strict(true)
        .oneOf(meta.values as string[])

    case 'array':
      const as = array()
        .strict(true)
        .of(metaToYup(meta.of))
      return meta.refinements
        ? meta.refinements.reduce(toYupArrayRefinements, as)
        : as

    case 'object':
      return object(
        buildObject(meta.properties, p => metaToYup(meta.properties[p])),
      ).strict(true)
  }
}
