import * as t from 'tcomb'
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
} from '@technoidentity/utils'
import {
  ArrayRefinements,
  DateRefinements,
  Mixed,
  NumberRefinements,
  StringRefinements,
} from './meta'
import { buildObject } from '@technoidentity/utils'

// tslint:disable typedef switch-default

function toTcombNumberRefinements(r: NumberRefinements) {
  const refinements = []

  if (r.integer) {
    refinements.push(t.Integer)
  }
  if (r.sign === 'positive') {
    refinements.push(Positive)
  }
  if (r.sign === 'negative') {
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

  if (r.base === 'email') {
    refinements.push(Email)
  }
  if (r.base === 'url') {
    refinements.push(Url)
  }
  if (r.case === 'lower') {
    refinements.push(Lower)
  }
  if (r.case === 'upper') {
    refinements.push(Upper)
  }
  if (r.strLength) {
    if (r.strLength.fixed) {
      refinements.push(Length(r.strLength.fixed))
    } else {
      if (r.strLength.min) {
        refinements.push(MinStringLength(r.strLength.min))
      }
      if (r.strLength.max) {
        refinements.push(MaxStringLength(r.strLength.max))
      }
    }
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

export const metaToTcomb: (meta: Mixed) => t.Type<any> = meta => {
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
          const mp = v
          const m = metaToTcomb(mp)
          return mp.optional ? t.maybe(m) : m
        }),
      )
  }
}
