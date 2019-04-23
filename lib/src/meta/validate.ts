import * as t from 'tcomb'
import * as yup from 'yup'
import { jsonStringify } from '../lib'
import {
  ArrayMT,
  ArrayRefinements,
  DateRefinements,
  EnumMT,
  MT,
  NumberRefinements,
  ObjectMT,
  PrimitiveMT,
  Refinements,
  StringRefinements,
} from './index'

// tslint:disable-next-line: typedef
const errorMessages = {
  number: {
    message: 'should be a number',

    refinements: {
      integer: 'should be an integer',
      positive: 'should be positive',
      negative: 'should be negative',
      min: (value: number) => `should not be smaller than ${value}`,
      max: (value: number) => `should not be larger than ${value}`,
    },
  },

  string: {
    message: 'should be a string',

    refinements: {
      email: 'should be an email',
      url: 'should be a URL',
      lowercase: 'should be lower case ',
      uppercase: 'should be upper case',
      maxStringLength: (value: number) =>
        `should have maximum length of ${value}`,
      minStringLength: (value: number) =>
        `should have minimum length of ${value}`,
      length: (value: number) => `should have exact length of ${value}`,
    },
  },

  boolean: { message: 'should be boolean' },

  date: {
    message: 'should be a date',

    refinements: {
      maxDate: (value: Date) =>
        `should not be larger than ${jsonStringify(value)}`,
      minDate: (value: Date) =>
        `should not be smaller than ${jsonStringify(value)}`,
    },
  },

  enum: {
    message: (values: ReadonlyArray<string>) =>
      `should be one of ${jsonStringify(values)}`,
  },

  array: {
    message: 'should be an array',

    refinements: {
      maxArrayLength: (value: number) => `should have max length of ${value}`,
      minArrayLength: (value: number) => `should have min length of ${value}`,
    },
  },

  object: {
    message: 'should be an object',
  },
}

function errorForRefinements(r: Refinements): string {
  switch (r.kind) {
    case 'integer':
    case 'positive':
    case 'negative':
      return errorMessages.number.refinements[r.kind]

    case 'max':
    case 'min':
      return errorMessages.number.refinements[r.kind](r.value)

    case 'email':
    case 'url':
    case 'lowercase':
    case 'uppercase':
      return errorMessages.string.refinements[r.kind]

    case 'maxStringLength':
    case 'minStringLength':
    case 'length':
      return errorMessages.string.refinements[r.kind](r.value)

    case 'minDate':
    case 'maxDate':
      return errorMessages.date.refinements[r.kind](r.value)

    case 'maxArrayLength':
    case 'minArrayLength':
      return errorMessages.array.refinements[r.kind](r.value)
  }
}

function errorMessage(meta: MT): string {
  switch (meta.kind) {
    case 'enum':
      return errorMessages.enum.message(meta.values)
    case 'number':
    case 'string':
    case 'boolean':
    case 'date':
    case 'array':
    case 'object':
      return errorMessages[meta.kind].message
  }
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
    case 'max':
    case 'min':
      s = s[r.kind](r.value)
      break

    case 'integer':
    case 'positive':
    case 'negative':
      s = s[r.kind]()
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
    case 'url':
    case 'lowercase':
    case 'uppercase':
      s = s[r.kind]()
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
  obj: unknown,
): ErrorsPrimitive | undefined {
  switch (meta.kind) {
    case 'number':
      if (!t.Number.is(obj)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> | undefined = removeUndefined(
          meta.refinements.map(r => validateNumberRefinements(r, obj)),
        )
        if (errors) {
          return { kind: meta.kind, errors }
        }
      }
      return undefined

    case 'string':
      if (!t.String.is(obj)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> | undefined = removeUndefined(
          meta.refinements.map(r => validateStringRefinements(r, obj)),
        )
        if (errors) {
          return {
            kind: meta.kind,
            errors,
          }
        }
      }
      return undefined

    case 'boolean':
      if (!t.Boolean.is(obj)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      return undefined

    case 'date':
      if (!t.Date.is(obj)) {
        return { kind: meta.kind, errors: [errorMessage(meta)] }
      }
      if (meta.refinements) {
        const errors: ReadonlyArray<string> | undefined = removeUndefined(
          meta.refinements.map(r => validateDateRefinements(r, obj)),
        )
        if (errors) {
          return { kind: meta.kind, errors }
        }
      }
      return undefined
  }
}

function validateEnum(meta: EnumMT, obj: unknown): ErrorsEnum | undefined {
  if (t.String.is(obj) && meta.values.some(e => e === obj)) {
    return undefined
  } else {
    return {
      kind: meta.kind,
      errors: [errorMessage(meta)], // TODO: wrong???
    }
  }
}

function validateArray(meta: ArrayMT, obj: unknown): ErrorsArray | undefined {
  if (!t.Array.is(obj)) {
    return { kind: meta.kind, errors: [errorMessage(meta)] }
  }

  const elements: ReadonlyArray<Errors> | undefined = removeUndefined(
    obj.map(e => validate(meta.of, e)),
  )

  const errors: ReadonlyArray<string> | undefined =
    meta.refinements &&
    removeUndefined(meta.refinements.map(r => validateArrayRefinements(r, obj)))

  if (errors || elements) {
    return { kind: meta.kind, errors, elements }
  }

  return undefined
}

function validateObject(
  meta: ObjectMT,
  obj: unknown,
): ErrorsObject | undefined {
  if (!t.Object.is(obj)) {
    return { kind: 'object', errors: [errorMessage(meta)] }
  }

  const properties: any = {}
  for (const k of Object.keys(obj)) {
    // tslint:disable-next-line: typedef
    const error = validate(meta.properties[k], obj[k])
    if (error) {
      properties[k] = error
    }
  }

  if (
    !(Object.keys(properties).length === 0 && properties.constructor === Object)
  ) {
    return { kind: 'object', properties }
  }
  return undefined
}

export function validate(meta: MT, obj: unknown): Errors | undefined {
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
  return validate(meta, obj) === undefined
}
