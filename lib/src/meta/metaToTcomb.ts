import * as t from 'tcomb'
import {
  ArrayMaxLength,
  ArrayMinLength,
  Email,
  Length,
  Lower,
  Max,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
  MinLength,
  Negative,
  Positive,
  Upper,
  Url,
} from './tcombRefinements'
import {
  ArrayRefinements,
  DateRefinements,
  MT,
  NumberRefinements,
  StringRefinements,
} from './types'

// tslint:disable typedef switch-default

const toTcombNumberRefinements: (r: NumberRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'integer':
      return t.Integer

    case 'max':
      return Max(r.value)

    case 'min':
      return Min(r.value)
      break

    case 'positive':
      return Positive

    case 'negative':
      return Negative
  }
}

const toTcombStringRefinements: (r: StringRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'email':
      return Email
    case 'url':
      return Url
    case 'lowercase':
      return Lower
    case 'uppercase':
      return Upper
    case 'maxLength':
      return MaxLength(r.value)
    case 'minLength':
      return MinLength(r.value)
    case 'length':
      return Length(r.value)
  }
}

const toTcombDateRefinements: (r: DateRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'max':
      return MinDate(r.value)
    case 'min':
      return MaxDate(r.value)
  }
}

const toTcombArrayRefinements: (r: ArrayRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'maxLength':
      return ArrayMaxLength(r.value)
    case 'minLength':
      return ArrayMinLength(r.value)
  }
}

function buildObject(obj: any, f: (key: any) => any): any {
  const result: any = {}
  for (const k of Object.keys(obj)) {
    result[k] = f(k as any)
  }
  return result
}

export const metaToTcomb: (meta: MT) => t.Type<any> = meta => {
  switch (meta.kind) {
    case 'number':
      return meta.refinements
        ? t.intersection([
            t.Number,
            ...meta.refinements.map(toTcombNumberRefinements),
          ])
        : t.Number

    case 'string':
      return meta.refinements
        ? t.intersection([
            t.String,
            ...meta.refinements.map(toTcombStringRefinements),
          ])
        : t.String

    case 'boolean':
      return t.Boolean

    case 'date':
      return meta.refinements
        ? t.intersection([
            t.Date,
            ...meta.refinements.map(toTcombDateRefinements),
          ])
        : t.Date

    case 'enum':
      return t.enums.of(meta.values as string[])

    case 'union':
      return t.intersection(meta.values.map(metaToTcomb))

    case 'array':
      return meta.refinements
        ? t.intersection([
            t.list(metaToTcomb(meta.of)),
            ...meta.refinements.map(toTcombArrayRefinements),
          ])
        : t.list(metaToTcomb(meta.of))

    case 'object':
      return t.struct(
        buildObject(meta.properties, p => metaToTcomb(meta.properties[p])),
      )
  }
}
