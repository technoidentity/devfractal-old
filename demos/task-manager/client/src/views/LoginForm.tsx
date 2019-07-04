import { string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  formSubmit,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { req } from 'technoidentity-utils'
import * as yup from 'yup'

const LoginValues = req({ name: string, password: string })
export type LoginValues = TypeOf<typeof LoginValues>

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

export const initialValues: LoginValues = { name: '', password: '' }

export interface LoginFormProps {
  onSubmit(values: LoginValues): Promise<void>
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit: onLogin }) => (
  <Section>
    <Simple.Form
      initialValues={initialValues}
      onSubmit={formSubmit(onLogin)}
      validationSchema={schema}
    >
      <Columns columnCentered>
        <Column size="half">
          <Simple.Text name="name" label="Username" />
          <Simple.Password name="password" />
          <Simple.FormButtons />
        </Column>
      </Columns>
    </Simple.Form>
  </Section>
)
