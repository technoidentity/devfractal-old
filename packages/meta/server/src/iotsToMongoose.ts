import { Document, model, Model, Schema } from 'mongoose'
import * as t from 'technoidentity-spec'
import { EnumType } from 'technoidentity-spec'
import { buildObject, keys } from 'technoidentity-utils'

function schemaFromPrimitiveRT(spec: t.Mixed): any {
  if (spec.name === 'Int') {
    return { type: Number } // TODO: Int supported by mongoose?
  }

  if (spec instanceof t.NumberType) {
    return { type: Number }
  }

  if (spec instanceof t.StringType) {
    return { type: String }
  }

  if (spec instanceof t.BooleanType) {
    return { type: Boolean }
  }

  if (spec.name === 'Date') {
    return { type: Date }
  }

  if (spec instanceof t.KeyofType || spec instanceof EnumType) {
    return { type: String, enum: keys(spec.keys) }
  }

  throw new Error(`Unsupported ${spec.name}`)
}

const schemaFromObjectRT: <T extends t.Props>(rt: t.TypeC<T>) => any = rt => {
  return buildObject(rt.props, (_, p) => schemaFromRT(rt.props[p]))
}

export const schemaFromRT: (value: t.Mixed) => any = value => {
  if (value instanceof t.ReadonlyType) {
    return schemaFromRT(value.type)
  }

  // @TODO: ObjType

  if (value instanceof t.InterfaceType) {
    return schemaFromObjectRT(value)
  }

  if (value instanceof t.ArrayType || value instanceof t.ReadonlyArrayType) {
    return [schemaFromRT(value.type)]
  }

  if (value instanceof t.PartialType) {
    return buildObject(value.props, p => ({
      ...schemaFromRT(value.props[p]),
      required: false,
    }))
  }

  return schemaFromPrimitiveRT(value)
}

export function rtToModel<T extends t.Props>(
  name: string,
  rt: t.TypeC<T>,
): Model<Document> {
  return model(name, new Schema(schemaFromObjectRT(rt)))
}
