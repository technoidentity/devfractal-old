import * as t from 'tcomb'
import { buildObject } from '../utils'
import {
  ArrayMaxLength,
  ArrayMinLength,
  Email,
  Length,
  Lower,
  Max,
  MaxDate,
  MaxStringLength,
  Min,
  MinDate,
  MinStringLength,
  Negative,
  Positive,
  Upper,
  Url,
} from './tcombRefinements'
import {
  ArrayRefinements,
  DateRefinements,
  Mixed,
  NumberRefinements,
  StringRefinements,
} from './types'

// tslint:disable typedef no-array-mutation

function toTcombNumberRefinements(r: NumberRefinements) {
  const refinements = []

  if (r.integer) {
    refinements.push(t.Integer)
  }
  if (r.positive) {
    refinements.push(Positive)
  }
  if (r.negative) {
    refinements.push(Negative)
  }
  if (r.max) {
    refinements.push(Max(r.max))
  }
  if (r.min) {
    refinements.push(Min(r.min))
  }

  return refinements
}

function toTcombStringRefinements(r: StringRefinements) {
  const refinements = []

  if (r.email) {
    refinements.push(Email)
  }
  if (r.url) {
    refinements.push(Url)
  }
  if (r.lowercase) {
    refinements.push(Lower)
  }
  if (r.uppercase) {
    refinements.push(Upper)
  }
  if (r.maxStringLength) {
    refinements.push(MaxStringLength(r.maxStringLength))
  }
  if (r.minStringLength) {
    refinements.push(MinStringLength(r.minStringLength))
  }
  if (r.length) {
    refinements.push(Length(r.length))
  }

  return refinements
}

function toTcombDateRefinements(r: DateRefinements) {
  const refinements = []

  if (r.maxDate) {
    refinements.push(MinDate(r.maxDate))
  }
  if (r.minDate) {
    refinements.push(MaxDate(r.minDate))
  }
  return refinements
}

function toTcombArrayRefinements(r: ArrayRefinements) {
  const refinements = []

  if (r.maxArrayLength) {
    refinements.push(ArrayMaxLength(r.maxArrayLength))
  }
  if (r.minArrayLength) {
    refinements.push(ArrayMinLength(r.minArrayLength))
  }
  return refinements
}

export function metaToTcomb(meta: Mixed): t.Type<any> {
  switch (meta.kind) {
    case 'number':
      return meta.refinements
        ? t.intersection([
            t.Number,
            ...toTcombNumberRefinements(meta.refinements),
          ])
        : t.Number

    case 'string':
      return meta.refinements
        ? t.intersection([
            t.String,
            ...toTcombStringRefinements(meta.refinements),
          ])
        : t.String

    case 'boolean':
      return t.Boolean

    case 'date':
      return meta.refinements
        ? t.intersection([t.Date, ...toTcombDateRefinements(meta.refinements)])
        : t.Date

    case 'enum':
      return t.enums.of(meta.values as string[])

    case 'array':
      return meta.refinements
        ? t.intersection([
            t.list(metaToTcomb(meta.of)),
            ...toTcombArrayRefinements(meta.refinements),
          ])
        : t.list(metaToTcomb(meta.of))

    case 'object':
      return t.struct(
        buildObject(meta.properties, v => {
          const m = metaToTcomb(v)
          return v.optional ? t.maybe(m) : m
        }),
      )
  }
}
