import { Simple } from 'stp-crud'
import React from 'react'
import { number, object, ObjectSchema, string } from 'yup'

interface LoginValues {
  readonly name: string
  readonly username: string
  readonly email: string
  readonly phone: number
  readonly website: string
}

const loginSchema: ObjectSchema<LoginValues> = object({
  name: string().required('Name is required'),
  username: string().required('Username is required'),
  email: string().required('Email is required'),
  phone: number().required('Phone Number is required'),
  website: string().required('Website is required'),
})

const initialLoginValues: LoginValues = {
  name: '',
  username: '',
  email: '',
  phone: 0,
  website: '',
}

export const UserForm: React.FC = () => (
  <Simple.Form
    initialValues={initialLoginValues}
    validationSchema={loginSchema}
  >
    <Simple.Text label="Name:" name="name" />
    <Simple.Text label="UserName:" name="username" />
    <Simple.Email label="Email" name="email" />
    <Simple.Telephone label="Phone:" name="phone" />
    <Simple.Url label="Website:" name="website" />
    <Simple.FormButtons />

    <Simple.Debug />
  </Simple.Form>
)
