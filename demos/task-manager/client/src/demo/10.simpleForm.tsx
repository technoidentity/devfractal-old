import React from 'react'
import { max, min, required, Section, Simple } from 'technoidentity-devfractal'
import { initialLoginValues } from './09.moderateForm'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues}>
      <Simple.Text
        name="username"
        validations={[required(), max(20), min(10)]}
      />
      <Simple.Password name="password" validations={[required(), min(8)]} />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
