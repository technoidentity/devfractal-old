import {
  Array,
  Boolean,
  Date as TDate,
  Number,
  Object as TObject,
  String,
} from 'tcomb'
import * as yup from 'yup'
import {
  ArrayRefinements,
  DateRefinements,
  MT,
  NumberRefinements,
  StringRefinements,
} from './types'

// tslint:disable switch-default

const validateNumberRefinements: (
  r: NumberRefinements,
  value: number,
) => boolean = (r, value) => {
  let s: yup.NumberSchema = yup.number().strict(true)
  switch (r.kind) {
    case 'integer':
      s = s.integer()
      break

    case 'max':
      s = s.max(r.value)
      break

    case 'min':
      s = s.min(r.value)
      break

    case 'positive':
      s = s.positive()
      break

    case 'negative':
      s = s.negative()
  }
  return s.isValidSync(value)
}

const validateStringRefinements: (
  r: StringRefinements,
  value: string,
) => boolean = (r, value) => {
  let s: yup.StringSchema = yup.string().strict(true)
  switch (r.kind) {
    case 'email':
      s = s.email()
      break
    case 'url':
      s = s.url()
      break
    case 'lowercase':
      s = s.lowercase()
      break
    case 'uppercase':
      s = s.uppercase()
      break
    case 'maxLength':
      s = s.max(r.value)
      break
    case 'minLength':
      s = s.min(r.value)
      break
    case 'length':
      s = s.length(r.value)
  }
  return s.isValidSync(value)
}

const validateDateRefinements: (r: DateRefinements, value: Date) => boolean = (
  r,
  value,
) => {
  let s: yup.DateSchema = yup.date()
  switch (r.kind) {
    case 'max':
      s = s.max(r.value)
      break
    case 'min':
      s = s.min(r.value)
  }
  return s.isValidSync(value)
}

const validateArrayRefinements: (
  r: ArrayRefinements,
  value: ReadonlyArray<unknown>,
) => boolean = (r, value) => {
  let s: yup.ArraySchema<unknown> = yup.array()
  switch (r.kind) {
    case 'maxLength':
      s = s.max(r.value)
      break
    case 'minLength':
      s = s.min(r.value)
  }
  return s.isValidSync(value)
}

export const validate: (meta: MT, obj: unknown) => boolean = (meta, obj) => {
  // tslint:disable-next-line:switch-default
  switch (meta.kind) {
    case 'number':
      return (
        Number.is(obj) &&
        (meta.refinements === undefined ||
          meta.refinements.every(r => validateNumberRefinements(r, obj)))
      )

    case 'string':
      return (
        String.is(obj) &&
        (meta.refinements === undefined ||
          meta.refinements.every(r => validateStringRefinements(r, obj)))
      )

    case 'boolean':
      return Boolean.is(obj)

    case 'date':
      return (
        TDate.is(obj) &&
        (meta.refinements === undefined ||
          meta.refinements.every(r => validateDateRefinements(r, obj)))
      )

    case 'enum':
      return String.is(obj) && meta.values.some(e => e === obj)

    case 'array':
      if (!Array.is(obj)) {
        return false
      }
      if (
        !(
          meta.refinements === undefined ||
          meta.refinements.every(e => validateArrayRefinements(e, obj))
        )
      ) {
        return false
      }
      for (const e of obj) {
        if (!validate(meta.of, e)) {
          return false
        }
      }
      return true

    case 'object':
      if (!TObject.is(obj)) {
        return false
      }
      for (const k of Object.keys(obj)) {
        if (!validate(meta.properties[k], obj[k])) {
          return false
        }
      }
      return true
  }
}
