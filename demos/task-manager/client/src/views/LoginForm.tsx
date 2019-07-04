import { string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  formSubmit,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { fn, req, emptyFromType } from 'technoidentity-utils'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

const LoginValues = req({ name: string, password: string })
export type LoginValues = TypeOf<typeof LoginValues>

const LoginFormProps = req({
  onSubmit: fn<(values: LoginValues) => Promise<void>>(),
})
export type LoginFormProps = TypeOf<typeof LoginFormProps>

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => (
  <Section>
    <Simple.Form
      initialValues={emptyFromType(LoginValues)}
      onSubmit={formSubmit(onSubmit)}
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
