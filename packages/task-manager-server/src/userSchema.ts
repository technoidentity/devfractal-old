import * as mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

export interface IUser extends mongoose.Document {
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

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model<IUser>('User', userSchema)

export default User
