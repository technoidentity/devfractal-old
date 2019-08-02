import { Simple } from 'devfractal-simple'
import { Radio, Section } from 'devfractal-ui-core'
import React from 'react'
import { number, object, ObjectSchema, string } from 'yup'

interface SimpleValues {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly tel: number
  readonly remember: boolean
  readonly gender: string
  readonly select: string
  readonly message: string
  readonly age: number
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  tel: 0,
  remember: false,
  gender: 'male',
  select: '',
  message: '',
  age: 0,
}

const simpleSchema: ObjectSchema<Partial<SimpleValues>> = object({
  username: string()
    .required()
    .min(6),
  password: string()
    .required()
    .min(6),
  email: string()
    .email()
    .required(),
  tel: number().required(),
  message: string().required(),
  age: number().required(),
})

export const SimpleFormExample: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialValues} validationSchema={simpleSchema}>
      <Simple.Text label="Username" name="username" />
      <Simple.Password label="Password" name="password" />
      <Simple.Email label="Email" name="email" />
      <Simple.Telephone label="Telephone" name="tel" />
      <Simple.Checkbox name="remember"> Remember Me</Simple.Checkbox>
      <Simple.RadioGroup name="gender" defaultValue="female">
        <Radio value="female"> Female</Radio>
        <Radio value="male"> Male</Radio>
      </Simple.RadioGroup>
      <Simple.Select name="select">
        <option value="associate">associate</option>
        <option value="assistant">assistant</option>
      </Simple.Select>
      <Simple.Number label="Age" name="age" />
      <Simple.TextArea label="TextArea" name="message" />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
