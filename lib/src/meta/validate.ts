import * as t from 'tcomb'
import * as yup from 'yup'
import { errorForRefinements, errorMessage } from './errorMessages'
import {
  ArrayMT,
  ArrayRefinements,
  DateRefinements,
  EnumMT,
  MT,
  NumberRefinements,
  ObjectMT,
  PrimitiveMT,
  StringRefinements,
} from './index'

interface ErrorsPrimitive {
  readonly kind: PrimitiveMT['kind']
  readonly errors?: ReadonlyArray<string>
}
interface ErrorsEnum {
  readonly kind: EnumMT['kind']
  readonly errors?: ReadonlyArray<string>
}
interface ErrorsArray {
  readonly kind: ArrayMT['kind']
  readonly errors?: ReadonlyArray<string>
  readonly elements?: ReadonlyArray<Errors>
}

interface ErrorsObject {
  readonly kind: ObjectMT['kind']
  readonly errors?: ReadonlyArray<string>
  readonly properties?: { readonly [s: string]: Errors }
}

export type Errors = ErrorsPrimitive | ErrorsEnum | ErrorsArray | ErrorsObject

// tslint:disable switch-default no-object-mutation

function validateNumberRefinements(
  r: NumberRefinements,
  value: number,
): string | undefined {
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

  return s.isValidSync(value) ? undefined : errorForRefinements(r)
}

function validateStringRefinements(
  r: StringRefinements,
  value: string,
): string | undefined {
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
    case 'maxStringLength':
      s = s.max(r.value)
      break
    case 'minStringLength':
      s = s.min(r.value)
      break
    case 'length':
      s = s.length(r.value)
  }
  return s.isValidSync(value) ? undefined : errorForRefinements(r)
}

function validateDateRefinements(
  r: DateRefinements,
  value: Date,
): string | undefined {
  let s: yup.DateSchema = yup.date()

  switch (r.kind) {
    case 'maxDate':
      s = s.max(r.value)
      break
    case 'minDate':
      s = s.min(r.value)
  }

  return s.isValidSync(value) ? undefined : errorForRefinements(r)
}

function validateArrayRefinements(
  r: ArrayRefinements,
  value: ReadonlyArray<unknown>,
): string | undefined {
  let s: yup.ArraySchema<unknown> = yup.array()

  switch (r.kind) {
    case 'maxArrayLength':
      s = s.max(r.value)
      break
    case 'minArrayLength':
      s = s.min(r.value)
  }

  return s.isValidSync(value) ? undefined : errorForRefinements(r)
}

function removeUndefined<T>(
  rs: ReadonlyArray<T | undefined>,
): ReadonlyArray<T> | undefined {
  const result: ReadonlyArray<T> = rs.filter(
    e => e !== undefined,
  ) as ReadonlyArray<T>

  return result.length === 0 ? undefined : result
}

function validatePrimitive(meta: PrimitiveMT, obj: unknown): ErrorsPrimitive {
  switch (meta.kind) {
    case 'number':
      return {
        kind: meta.kind,
        errors: t.Number.is(obj)
          ? meta.refinements !== undefined
            ? removeUndefined(
                meta.refinements.map(r => validateNumberRefinements(r, obj)),
              )
            : undefined
          : [errorMessage(meta)],
      }

    case 'string':
      return {
        kind: meta.kind,
        errors: t.String.is(obj)
          ? meta.refinements !== undefined
            ? removeUndefined(
                meta.refinements.map(r => validateStringRefinements(r, obj)),
              )
            : undefined
          : [errorMessage(meta)],
      }

    case 'boolean':
      return {
        kind: meta.kind,
        errors: t.Boolean.is(obj) ? undefined : [errorMessage(meta)],
      }

    case 'date':
      return {
        kind: meta.kind,
        errors: t.Date.is(obj)
          ? meta.refinements !== undefined
            ? removeUndefined(
                meta.refinements.map(r => validateDateRefinements(r, obj)),
              )
            : undefined
          : [errorMessage(meta)],
      }
  }
}

function validateEnum(meta: EnumMT, obj: unknown): ErrorsEnum {
  return {
    kind: meta.kind,
    errors:
      t.String.is(obj) && meta.values.some(e => e === obj)
        ? undefined
        : [errorMessage(meta)],
  }
}

function validateArray(meta: ArrayMT, obj: unknown): ErrorsArray {
  return t.Array.is(obj)
    ? {
        kind: meta.kind,
        errors:
          meta.refinements !== undefined
            ? removeUndefined(
                meta.refinements.map(r => validateArrayRefinements(r, obj)),
              )
            : undefined,
        elements: obj.map(e => validate(meta.of, e)),
      }
    : { kind: meta.kind, errors: [errorMessage(meta)] }
}

function validateObject(meta: ObjectMT, obj: unknown): ErrorsObject {
  if (!t.Object.is(obj)) {
    return { kind: 'object', errors: [errorMessage(meta)] }
  }
  const errors: any = {}
  for (const k of Object.keys(obj)) {
    errors[k] = validate(meta.properties[k], obj[k])
  }

  return { kind: 'object', properties: errors }
}

export function validate(meta: MT, obj: unknown): Errors {
  switch (meta.kind) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'date':
      return validatePrimitive(meta, obj)

    case 'enum':
      return validateEnum(meta, obj)

    case 'array':
      return validateArray(meta, obj)

    case 'object':
      return validateObject(meta, obj)
  }
}

export function isValid(meta: MT, obj: unknown): boolean {
  switch (meta.kind) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'date':
      return !!validatePrimitive(meta, obj).errors

    case 'enum':
      return !!validateEnum(meta, obj).errors

    case 'array':
      const arrErrors: ErrorsArray = validateArray(meta, obj)
      return !!arrErrors.errors && !!arrErrors.elements

    case 'object':
      const objErrors: ErrorsObject = validateObject(meta, obj)
      return !!objErrors.errors && !!objErrors.properties
  }
}
