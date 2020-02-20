import { FormikHelpers } from 'formik'
import React from 'react'
import { component } from 'technoidentity-core'
import { Column, Columns, Section, Simple } from 'technoidentity-ui'
import { empty, fn, req, string, TypeOf } from 'technoidentity-utils'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
})

const LoginValues = req({ name: string, password: string })

const LoginFormProps = req({
  onSubmit: fn<
    (
      values: TypeOf<typeof LoginValues>,
      actions: FormikHelpers<typeof values>,
    ) => Promise<void>
  >(),
})

export const LoginForm = component(LoginFormProps, ({ onSubmit }) => (
  <Section>
    <Simple.Form
      initialValues={empty(LoginValues)}
      onSubmit={onSubmit}
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
