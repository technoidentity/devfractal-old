import * as React from 'react'

import { string, object, ObjectSchema, number, boolean } from 'yup'

import { consoleSubmit, Simple, SimpleValues } from '../formik'
import { Section } from '../layout'
import { RadioButtonGroup } from '../form/RadioButtonGroup'

interface SimpleValues {
  readonly text: string
  readonly password: string
  readonly email: string
  readonly tel: number
  readonly remember: boolean
  readonly answer: string
  readonly select: string
}

const initialValues: SimpleValues = {
  text: '',
  password: '',
  email: '',
  tel: 0,
  remember: true,
  answer: '',
  select: '',
}

const simpleSchema: ObjectSchema<SimpleValues> = object({
  text: string().required('This field is required'),
  password: string().required('This field is required'),
  email: string().required('This field is required'),
  tel: number().required('This field is required'),
  answer: string().required('This field is required'),
  select: string().required('This field is required'),
  remember: boolean().required('This field is required'),
})

export const SimpleExamples: React.SFC = () => (
  <Section>
    <Simple.Form
      initialValues={initialValues}
      validationSchema={simpleSchema}
      onSubmit={consoleSubmit(0)}
    >
      <Simple.Text label="Text" name="text" />
      <Simple.Password label="Password:" name="password" />
      <Simple.Email label="Email:" name="email" />
      <Simple.Telephone label="Telephone:" name="tel" />
      <Simple.Checkbox name="remember">Remember Me</Simple.Checkbox>
      <RadioButtonGroup>
        <Simple.RadioButton name="answer" value="yes">
          Female
        </Simple.RadioButton>
        <Simple.RadioButton name="answer" value="no">
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
