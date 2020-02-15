import { MT, PropertyMT } from 'meta-core'
import { Document, model, Model, Schema, SchemaDefinition } from 'mongoose'
import { buildObject } from 'technoidentity-utils'

function mtToMongoSchema(meta: PropertyMT): any {
  switch (meta.kind) {
    case 'number':
      return {
        type: Number,
        required: !!meta.optional,
        ...(meta.refinements && {
          min: meta.refinements.min,
          max: meta.refinements.max,
        }),
      }

    case 'string':
      return {
        type: String,
        required: !!meta.optional,
        ...(meta.refinements && {
          lowercase: meta.refinements.case === 'lower',
          uppercase: meta.refinements.case === 'upper',
          minlength:
            meta.refinements.strLength && meta.refinements.strLength.min,
          maxlength:
            meta.refinements.strLength && meta.refinements.strLength.max,
        }),
      }

    case 'date':
      return {
        type: Date,
        required: !!meta.optional,
        ...(meta.refinements && {
          min: meta.refinements.minDate,
          max: meta.refinements.maxDate,
        }),
      }

    case 'boolean':
      return { type: Boolean, required: !!meta.optional }

    case 'enum':
      return { type: String, required: !!meta.optional, enum: meta.values }

    case 'array':
      return [mtToMongoSchema(meta.of)]

    case 'object':
      return buildObject(meta.properties, (_, p) =>
        mtToMongoSchema(meta.properties[p]),
      )
  }
}

export function metaToSchemaDefinition(meta: MT): SchemaDefinition {
  return buildObject(meta.properties, (_, p) =>
    mtToMongoSchema(meta.properties[p]),
  )
}

export function metaToModel(name: string, meta: MT): Model<Document> {
  return model(name, new Schema(metaToSchemaDefinition(meta)))
}
