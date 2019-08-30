import { Document, model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { string, TypeOf } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'

export const User = req({ name: string, email: string, password: string })

export type User = TypeOf<typeof User> & Document

export const userSchema = new Schema<User>({
  name: { type: String, required: true, unique: true },
  email: { type: String, requires: true },
  password: { type: String, required: true, minlength: 5 },
})

userSchema.plugin(uniqueValidator, { message: 'Name already exists' })

export const UserModel = model<User>('User', userSchema)

export const isUserValid = async (
  name: string,
  password: string,
): Promise<boolean> => {
  const user = await UserModel.findOne({ name, password }).exec()
  return !!user
}
