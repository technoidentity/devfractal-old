import { buildObject, jsonStringify } from '@technoidentity/utils'
import { compareAsc } from 'date-fns'
import * as t from 'tcomb'
import {
  ArrayMT,
  ArrayRefinements,
  DateRefinements,
  EnumMT,
  Mixed,
  MT,
  NumberRefinements,
  PrimitiveMT,
  StringRefinements,
} from './index'

// tslint:disable-next-line: typedef
const errorMessages = {
  number: 'should be a number',

  integer: 'should be an integer',
  positive: 'should be positive',
  negative: 'should be negative',
  min: (value: number) => `should not be smaller than ${value}`,
  max: (value: number) => `should not be larger than ${value}`,

  string: 'should be a string',

  email: 'should be an email',
  url: 'should be a URL',
  lowercase: 'should be lower case ',
  uppercase: 'should be upper case',
  maxStringLength: (value: number) => `should have maximum length of ${value}`,
  minStringLength: (value: number) => `should have minimum length of ${value}`,
  length: (value: number) => `should have exact length of ${value}`,

  boolean: 'should be boolean',

  date: 'should be a date',

  maxDate: (value: Date) => `should not be larger than ${jsonStringify(value)}`,
  minDate: (value: Date) =>
    `should not be smaller than ${jsonStringify(value)}`,

  enum: (values: ReadonlyArray<string>) =>
    `should be one of ${jsonStringify(values)}`,

  array: 'should be an array',

  maxArrayLength: (value: number) => `should have max length of ${value}`,
  minArrayLength: (value: number) => `should have min length of ${value}`,

  object: 'should be an object',
}

const rEmail: RegExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
const rUrl: RegExp = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i

// tslint:disable-next-line: typedef
const validators = {
  number: (v: unknown): v is number => t.Number.is(v),

  integer: (v: number) => t.Integer.is(v),
  positive: (v: number) => v >= 0,
  negative: (v: number) => v <= 0,
  min: (min: number) => (v: number) => v >= min,
  max: (max: number) => (v: number) => v <= max,

  string: (v: unknown): v is string => t.String.is(v),

  email: (v: string) => rEmail.test(v),
  url: (v: string) => rUrl.test(v),
  lowercase: (v: string) => v === v.toLowerCase(),
  uppercase: (v: string) => v === v.toUpperCase(),
  minStringLength: (min: number) => (v: string) => v.length >= min,
  maxStringLength: (max: number) => (v: string) => v.length <= max,
  length: (len: number) => (v: string) => v.length === len,

  boolean: (v: unknown): v is boolean => t.Boolean.is(v),

  date: (v: unknown): v is Date => t.Date.is(v),

  minDate: (min: Date) => (v: Date) => compareAsc(min, v) <= 0,
  maxDate: (max: Date) => (v: Date) => compareAsc(max, v) >= 0,

  // tslint:disable-next-line:readonly-array
  array: (v: unknown): v is any[] => t.Array.is(v),

  minArrayLength: (min: number) => (v: ReadonlyArray<unknown>) =>
    v.length >= min,
  maxArrayLength: (max: number) => (v: ReadonlyArray<unknown>) =>
    v.length <= max,

  // TODO: may be tcomb is wrong about object?
  object: (v: unknown): v is object => t.Object.is(v),

  enum: (values: ReadonlyArray<string>) => (v: string) => values.includes(v),
}

// tslint:disable no-array-mutation

function errorsForNumberRefinements(
  r: NumberRefinements,
  value: number,
): readonly string[] {
  const errors: string[] = []

  // TODO: pick/pluck would do!

  if (r.integer && !validators.integer(value)) {
    errors.push(errorMessages.integer)
  }
  if (r.sign === 'positive' && !validators.positive(value)) {
    errors.push(errorMessages.positive)
  }
  if (r.sign === 'negative' && !validators.negative(value)) {
    errors.push(errorMessages.negative)
  }

  if (r.max && !validators.max(r.max)(value)) {
    errors.push(errorMessages.max(r.max))
  }
  if (r.min && !validators.min(r.min)(value)) {
    errors.push(errorMessages.min(r.min))
  }

  return errors
}

function errorsForStringRefinements(
  r: StringRefinements,
  value: string,
): readonly string[] {
  const errors: string[] = []

  if (r.base === 'email' && !validators.email(value)) {
    errors.push(errorMessages.email)
  }

  if (r.base === 'url' && !validators.url(value)) {
    errors.push(errorMessages.url)
  }

  if (r.case === 'lower' && !validators.lowercase(value)) {
    errors.push(errorMessages.lowercase)
  }

  if (r.case === 'upper' && !validators.uppercase(value)) {
    errors.push(errorMessages.uppercase)
  }

  if (r.strLength) {
    if (r.strLength.fixed && !validators.length(r.strLength.fixed)(value)) {
      errors.push(errorMessages.length(r.strLength.fixed))
    } else {
      if (
        r.strLength.max &&
        !validators.maxStringLength(r.strLength.max)(value)
      ) {
        errors.push(errorMessages.maxStringLength(r.strLength.max))
      }

      if (
        r.strLength.min &&
        !validators.minStringLength(r.strLength.min)(value)
      ) {
        errors.push(errorMessages.minStringLength(r.strLength.min))
      }
    }
  }

  return errors
}

function errorsForDateRefinements(
  r: DateRefinements,
  value: Date,
): readonly string[] {
  const errors: string[] = []

  if (r.minDate && !validators.minDate(r.minDate)(value)) {
    errors.push(errorMessages.minDate(r.minDate))
  }

  if (r.maxDate && !validators.maxDate(r.maxDate)(value)) {
    errors.push(errorMessages.maxDate(r.maxDate))
  }

  return errors
}

function errorsForArrayRefinements(
  r: ArrayRefinements,
  value: ReadonlyArray<unknown>,
): readonly string[] {
  const errors: string[] = []

  if (r.maxArrayLength && !validators.maxArrayLength(r.maxArrayLength)(value)) {
    errors.push(errorMessages.maxArrayLength(r.maxArrayLength))
  }

  if (r.minArrayLength && !validators.minArrayLength(r.minArrayLength)(value)) {
    errors.push(errorMessages.minArrayLength(r.minArrayLength))
  }

  return errors
}

function errorMessage(meta: Mixed): string {
  if (meta.kind === 'enum') {
    return errorMessages.enum(meta.values)
  }
  return errorMessages[meta.kind]
}

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
  readonly kind: MT['kind']
  readonly errors?: ReadonlyArray<string>
  readonly properties?: { readonly [s: string]: Errors }
}

export type Errors = ErrorsPrimitive | ErrorsEnum | ErrorsArray | ErrorsObject

// returns undefined if result is empty array
function removeUndefined<T>(
  rs: ReadonlyArray<T | undefined>,
): ReadonlyArray<T> | undefined {
  const result: ReadonlyArray<T> = rs.filter(
    e => e !== undefined,
  ) as ReadonlyArray<T>

  return result.length === 0 ? undefined : result
}

function validatePrimitive(
  meta: PrimitiveMT,
  value: unknown,
): ErrorsPrimitive | undefined {
  switch (meta.kind) {
    case 'number':
      if (!validators.number(value)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> = errorsForNumberRefinements(
          meta.refinements,
          value,
        )
        if (errors.length !== 0) {
          return { kind: meta.kind, errors }
        }
      }
      return undefined

    case 'string':
      if (!validators.string(value)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> = errorsForStringRefinements(
          meta.refinements,
          value,
        )
        if (errors.length !== 0) {
          return {
            kind: meta.kind,
            errors,
          }
        }
      }
      return undefined

    case 'boolean':
      if (!validators.boolean(value)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }

      return undefined

    case 'date':
      if (!validators.date(value)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> = errorsForDateRefinements(
          meta.refinements,
          value,
        )
        if (errors.length !== 0) {
          return { kind: meta.kind, errors }
        }
      }
      return undefined
  }
}

function validateEnum(meta: EnumMT, value: unknown): ErrorsEnum | undefined {
  if (validators.string(value) && validators.enum(meta.values)(value)) {
    return undefined
  }
  return {
    kind: meta.kind,
    errors: [errorMessage(meta)],
  }
}

function validateArray(meta: ArrayMT, value: unknown): ErrorsArray | undefined {
  if (!validators.array(value)) {
    return { kind: meta.kind, errors: [errorMessage(meta)] }
  }

  const elements: ReadonlyArray<Errors> | undefined = removeUndefined(
    value.map(e => validate(meta.of, e)),
  )

  const errors: ReadonlyArray<string> = meta.refinements
    ? errorsForArrayRefinements(meta.refinements, value)
    : []

  if (errors.length || elements) {
    return { kind: meta.kind, errors, elements }
  }

  return undefined
}

function validateObject(meta: MT, value: unknown): ErrorsObject | undefined {
  if (!validators.object(value)) {
    return { kind: 'object', errors: [errorMessage(meta)] }
  }

  // tslint:disable-next-line:typedef
  const props = buildObject(value, (v, k) => validate(meta.properties[k], v))

  if (!(Object.keys(props).length === 0 && props.constructor === Object)) {
    return { kind: 'object', properties: props }
  }

  return undefined
}

export function validate(meta: Mixed, value: unknown): Errors | undefined {
  if (meta.kind === 'enum') {
    return validateEnum(meta, value)
  }
  if (meta.kind === 'array') {
    return validateArray(meta, value)
  }
  if (meta.kind === 'object') {
    return validateObject(meta, value)
  }
  return validatePrimitive(meta, value)
}

export function isValid(meta: Mixed, obj: unknown): boolean {
  return validate(meta, obj) === undefined
}
