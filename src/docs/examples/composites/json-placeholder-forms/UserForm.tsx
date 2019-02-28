import React from 'react'
import {
  consoleSubmit,
  email,
  max,
  min,
  required,
  Section,
  Simple,
  Title,
  url,
} from '../../devfractal'

interface LoginValues {
  readonly name: string
  readonly username: string
  readonly email: string
  readonly phone: number
  readonly website: string
}

const initialLoginValues: LoginValues = {
  name: '',
  username: '',
  email: '',
  phone: 0,
  website: '',
}

export const UserForm: React.SFC = () => (
  <Section>
    <Title>Users Form</Title>
    <Simple.Form initialValues={initialLoginValues} onSubmit={consoleSubmit()}>
      <Simple.Text
        label="Name:"
        name="name"
        validations={[required(), min(6)]}
      />
      <Simple.Text
        label="UserName:"
        name="username"
        validations={[required(), min(6), max(20)]}
      />
      <Simple.Email
        label="Email"
        name="email"
        validations={[required(), email()]}
      />
      <Simple.Telephone label="Phone:" name="phone" />
      <Simple.Url label="Website:" name="website" validations={[url()]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
