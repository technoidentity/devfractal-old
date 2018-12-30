import React from 'react'
import { number, object, ObjectSchema, string } from 'yup'
import { RadioButtonGroup } from '../../form'
import { consoleSubmit, Simple, SimpleValues } from '../../formik'
import { Section } from '../../layout'

interface SimpleValues {
  readonly username: string
  readonly password: string
  readonly email: string
  readonly tel: number
  readonly remember: boolean
  readonly answer: string
  readonly select: string
}

const initialValues: SimpleValues = {
  username: '',
  password: '',
  email: '',
  tel: 0,
  remember: true,
  answer: '',
  select: '',
}

const simpleSchema: ObjectSchema<Partial<SimpleValues>> = object({
  username: string().required(),
  password: string().required(),
  email: string()
    .email()
    .required(),
  tel: number().required(),
})

export const SimpleExample: React.SFC = () => (
  <Section>
    <Simple.Form
      initialValues={initialValues}
      validationSchema={simpleSchema}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Username" name="username" />
      <Simple.Password label="Password" name="password" />
      <Simple.Email label="Email" name="email" />
      <Simple.Telephone label="Telephone" name="tel" />
      <Simple.Checkbox name="remember"> Remember Me</Simple.Checkbox>
      <RadioButtonGroup>
        <Simple.RadioButton name="answer" value="yes">
          {' '}
          Female
        </Simple.RadioButton>
        <Simple.RadioButton name="answer" value="no">
          {' '}
          Male
        </Simple.RadioButton>
      </RadioButtonGroup>
      <Simple.Select name="select">
        <option value="associate">associate</option>
        <option value="assistant">assistant</option>
      </Simple.Select>
      <Simple.TextArea label="TextArea" name="input" />
      <Simple.FormButtons />
      <SimpleValues />
    </Simple.Form>
  </Section>
)
