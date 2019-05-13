import * as t from 'tcomb'
import {
  ArrayMaxLength,
  ArrayMinLength,
  ArrayRefinements,
  DateRefinements,
  Email,
  Length,
  Lower,
  Max,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
  MinLength,
  Mixed,
  Negative,
  NumberRefinements,
  Positive,
  StringRefinements,
  Upper,
  Url,
} from './index'

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
    case 'maxStringLength':
      return MaxLength(r.value)
    case 'minStringLength':
      return MinLength(r.value)
    case 'length':
      return Length(r.value)
  }
}

const toTcombDateRefinements: (r: DateRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'maxDate':
      return MinDate(r.value)
    case 'minDate':
      return MaxDate(r.value)
  }
}

const toTcombArrayRefinements: (r: ArrayRefinements) => t.Type<any> = r => {
  switch (r.kind) {
    case 'maxArrayLength':
      return ArrayMaxLength(r.value)
    case 'minArrayLength':
      return ArrayMinLength(r.value)
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

export const metaToTcomb: (meta: Mixed) => t.Type<any> = meta => {
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
