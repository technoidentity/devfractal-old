import React from 'react'
import { Simple } from 'technoidentity-crud'
import { maxLength, minLength, required } from 'technoidentity-ui'
import { Section } from 'technoidentity-ui'
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
