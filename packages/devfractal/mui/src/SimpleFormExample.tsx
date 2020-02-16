import React from 'react'
import {
  email,
  lowercase,
  maxLength,
  minLength,
  positive,
  required,
  uppercase,
} from 'technoidentity-core'
import { RadioItem } from './RadioGroupField'
import { typedForm } from './SimpleForm'

interface SimpleValues {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly age: number
  readonly phone: number
  readonly privileges: boolean
  readonly gender: string
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  age: 0,
  phone: 0,
  privileges: false,
  gender: '',
}

export const SimpleFormExample: React.FC = () => {
  // tslint:disable-next-line:typedef
  const Simple = typedForm<typeof initialValues>()
  return (
    <Simple.Form initialValues={initialValues}>
      <Simple.Text
        name="username"
        validations={[required(), minLength(6), maxLength(15), lowercase()]}
      />
      <br />
      <Simple.Password
        label="Password"
        name="password"
        validations={[required(), minLength(6), uppercase()]}
      />
      <br />
      <Simple.Email
        label="Email"
        name="email"
        validations={[required(), email()]}
      />
      <br />
      <Simple.Telephone
        label="Telephone"
        name="phone"
        validations={[required(), positive()]}
      />
      <br />
      <Simple.Checkbox name="privileges">yes</Simple.Checkbox>
      <Simple.Checkbox name="privileges">no</Simple.Checkbox>
      <br />
      <Simple.RadioGroup name="gender" defaultValue="female">
        <RadioItem value="female" label="Female" />
        <RadioItem value="male" label="Male" />
      </Simple.RadioGroup>
      <br />
      <Simple.FormButtons />
    </Simple.Form>
  )
}
