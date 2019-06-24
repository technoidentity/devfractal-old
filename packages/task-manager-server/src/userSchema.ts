import { Document, model, Schema } from 'mongoose'

export interface User extends Document {
  name: string
  email: string
  password: string
}

export const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, requires: true },
  password: { type: String, required: true },
})

export const UserModel = model<User>('User', userSchema)
