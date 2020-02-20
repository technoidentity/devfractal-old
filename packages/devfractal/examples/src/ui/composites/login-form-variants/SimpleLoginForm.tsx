import React from 'react'
import { maxLength, minLength, required } from 'technoidentity-core'
import { Section, Simple } from 'technoidentity-ui'
import { initialLoginValues } from './common'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues}>
      <Simple.Text
        label="Username:"
        name="username"
        validations={[required(), maxLength(20), minLength(10)]}
      />
      <Simple.Password
        label="Password:"
        name="password"
        validations={[required(), minLength(8)]}
      />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
