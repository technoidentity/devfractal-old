import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly confirmPassword: string
}

export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, requires: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
})

const UserModel = mongoose.model<User>('User', userSchema)

export default UserModel
