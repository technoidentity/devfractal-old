import React from 'react'

import { string, object, ObjectSchema, number } from 'yup'

import { consoleSubmit, Simple, SimpleValues } from '../formik'
import { Section } from '../layout'

interface SimpleValues {
  readonly text: string
  readonly password: string
  readonly email: string
  readonly tel: number
}

const initialValues: SimpleValues = {
  text: '',
  password: '',
  email: '',
  tel: 0,
}

const simpleSchema: ObjectSchema<SimpleValues> = object({
  text: string().required('This field is required'),
  password: string().required('This field is required'),
  email: string().required('This field is required'),
  tel: number().required('This field is required'),
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
      <Simple.Checkbox name="remember">yes</Simple.Checkbox>
      <Simple.Select name="select">
        <option>associate</option>
        <option>assistant</option>
      </Simple.Select>
      <Simple.TextArea label="TextArea" name="input" />
      <Simple.FormButtons />
      <SimpleValues />
    </Simple.Form>
  </Section>
)
