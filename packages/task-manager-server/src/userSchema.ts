import * as mongoose from 'mongoose'

export interface User extends mongoose.Document {
  name: string
  email: string
  password: string
}

export const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, requires: true },
  password: { type: String, required: true },
})

const UserModel = mongoose.model<User>('User', userSchema)

export default UserModel
