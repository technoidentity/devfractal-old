import { jsonStringify } from '../lib'
import { MT, Refinements } from './index'

// tslint:disable typedef switch-default

// tslint:disable-next-line: typedef
export const errorMessages = {
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
      maxLength: (value: number) => `should have maximum length of ${value}`,
      minLength: (value: number) => `should have minimum length of ${value}`,
      length: (value: number) => `should have exact length of ${value}`,
    },
  },
  boolean: { message: 'should be boolean' },
  date: {
    message: 'should be a date',
    refinements: {
      max: (value: Date) => `should not be larger than ${jsonStringify(value)}`,
      min: (value: Date) =>
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
      maxLength: (value: number) => `should have max length of ${value}`,
      minLength: (value: number) => `should have min length of ${value}`,
    },
  },
  object: {
    message: 'should be an object',
  },
}

export function errorForRefinements(r: Refinements): string {
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

export function errorMessage(meta: MT): string {
  switch (meta.kind) {
    case 'number':
      return errorMessages.number.message

    case 'string':
      return errorMessages.string.message

    case 'boolean':
      return errorMessages.boolean.message

    case 'date':
      return errorMessages.date.message
    case 'enum':
      return errorMessages.enum.message(meta.values)
    case 'array':
      return errorMessages.array.message
    case 'object':
      return errorMessages.object.message
  }
}
