import { Simple } from 'devfractal-simple'
import { Column, Columns, component, Section } from 'devfractal-ui-core'
import { FormikActions } from 'formik'
import React from 'react'
import { string, TypeOf } from 'technoidentity-spec'
import { empty, fn, req } from 'technoidentity-utils'
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
      actions: FormikActions<typeof values>,
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
