import * as t from 'tcomb'
import { MT } from './types'

// tslint:disable typedef switch-default

// const toTcombNumberRefinements: (r: NumberRefinements) => t.Type<any> = r => {
//   switch (r.kind) {
//     case 'integer':
//       return t.Integer

//     case 'max':
//       return Max(r.value)

//     case 'min':
//       return Min(r.value)
//       break

//     case 'positive':
//       return Positive

//     case 'negative':
//       return Negative
//   }
// }

// const toTcombStringRefinements: (r: StringRefinements) => t.Type<any> = r => {
//   switch (r.kind) {
//     case 'email':
//       return Email
//     case 'url':
//       return Url
//     case 'lowercase':
//       return Lower
//     case 'uppercase':
//       return Upper
//     case 'maxLength':
//       return MaxLength(r.value)
//     case 'minLength':
//       return MinLength(r.value)
//     case 'length':
//       return Length(r.value)
//   }
// }

// const toTcombDateRefinements: (r: DateRefinements) => t.Type<any> = r => {
//   switch (r.kind) {
//     case 'max':
//       return MinDate(r.value)
//     case 'min':
//       return MaxDate(r.value)
//   }
// }

// const toTcombArrayRefinements: (r: ArrayRefinements) => t.Type<any> = r => {
//   switch (r.kind) {
//     case 'maxLength':
//       return ArrayMaxLength(r.value)
//     case 'minLength':
//       return ArrayMinLength(r.value)
//   }
// }

function buildObject(obj: any, f: (key: any) => any): any {
  const result: any = {}
  for (const k of Object.keys(obj)) {
    // tslint:disable-next-line:no-object-mutation
    result[k] = f(k as any)
  }
  return result
}

export const metaToInitialValues: (meta: MT) => any = meta => {
  switch (meta.kind) {
    case 'number':
      return 0

    case 'string':
      return ''

    case 'boolean':
      return false

    case 'date':
      return Date.now()

    case 'enum':
      return meta.values[0]

    case 'array':
      return []

    case 'object':
      return t.struct(
        buildObject(meta.properties, p =>
          metaToInitialValues(meta.properties[p]),
        ),
      )
  }
}
