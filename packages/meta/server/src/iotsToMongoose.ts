import { Document, model, Model, Schema } from 'mongoose'
import * as t from 'technoidentity-spec'
import { buildObject, keys } from 'technoidentity-utils'

const schemaFromPrimitiveRT: (value: t.Mixed) => any = value => {
  if (value.name === 'Int') {
    return { type: Number } // TODO: Int supported by mongoose?
  }

  if (value instanceof t.NumberType) {
    return { type: Number }
  }

  if (value instanceof t.StringType) {
    return { type: String }
  }

  if (value instanceof t.BooleanType) {
    return { type: Boolean }
  }

  if (value.name === 'Date') {
    return { type: Date }
  }

  if (value instanceof t.KeyofType) {
    return { type: String, enum: keys(value.keys) }
  }

  throw new Error(`Unsupported ${value.name}`)
}

const schemaFromObjectRT: <T extends t.Props>(rt: t.TypeC<T>) => any = rt => {
  return buildObject(rt.props, (_, p) => schemaFromRT(rt.props[p]))
}

export const schemaFromRT: (value: t.Mixed) => any = value => {
  if (value instanceof t.ReadonlyType) {
    return schemaFromRT(value.type)
  }

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
