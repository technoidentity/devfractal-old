import { object, ObjectSchema, string } from 'yup'

export interface LoginValues {
  readonly username: string
  readonly password: string
}

export const loginSchema: ObjectSchema<LoginValues> = object({
  username: string()
    .required('Username is required')
    .min(6, 'Username length should at least be 6'),
  password: string()
    .required('Password is required')
    .min(8, 'Password length should at least be 8'),
})

export const initialLoginValues: LoginValues = { username: '', password: '' }
