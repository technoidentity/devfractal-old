import { string, TypeOf } from 'io-ts'
import React from 'react'
import {
  Column,
  Columns,
  component,
  formSubmit,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { emptyFromType, fn, req } from 'technoidentity-utils'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

const LoginValues = req({ name: string, password: string })

const LoginFormProps = req({
  onSubmit: fn<(values: TypeOf<typeof LoginValues>) => Promise<void>>(),
})

export const LoginForm = component(LoginFormProps, ({ onSubmit }) => (
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
))
