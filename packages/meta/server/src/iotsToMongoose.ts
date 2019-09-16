import { Document, model, Model, Schema } from 'mongoose'
import * as t from 'technoidentity-spec'
import { EnumType, ObjType } from 'technoidentity-spec'
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

  if (spec instanceof t.KeyofType) {
    return { type: String, enum: keys(spec.keys) }
  }

  if (spec instanceof EnumType) {
    return { type: String, enum: spec.keys }
  }

  throw new Error(`Unsupported ${spec.name}`)
}

const schemaFromObjectRT: <T extends t.Props>(rt: t.TypeC<T>) => any = rt => {
  return buildObject(rt.props, (_, p) => schemaFromRT(rt.props[p]))
}

export function schemaFromRT(spec: t.Mixed): any {
  if (spec instanceof t.ReadonlyType) {
    return schemaFromRT(spec.type)
  }

  if (spec instanceof t.InterfaceType || spec instanceof ObjType) {
    return buildObject(spec.props, (_, p) => schemaFromRT(spec.props[p]))
  }

  if (spec instanceof t.ArrayType || spec instanceof t.ReadonlyArrayType) {
    return [schemaFromRT(spec.type)]
  }

  if (spec instanceof t.PartialType) {
    return buildObject(spec.props, p => ({
      ...schemaFromRT(spec.props[p]),
      required: false,
    }))
  }

  return schemaFromPrimitiveRT(spec)
}

export function rtToModel<T extends t.Props>(
  name: string,
  rt: t.TypeC<T>,
): Model<Document> {
  return model(name, new Schema(schemaFromObjectRT(rt)))
}
