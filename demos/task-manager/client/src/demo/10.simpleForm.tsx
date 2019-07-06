import React from 'react'
import {
  consoleSubmit,
  max,
  min,
  required,
  Section,
  Simple,
} from 'technoidentity-devfractal'
import { initialLoginValues } from './09.moderateForm'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues} onSubmit={consoleSubmit(0)}>
      <Simple.Text
        label="Username:"
        name="username"
        validations={[required(), max(20), min(10)]}
      />
      <Simple.Password
        label="Password:"
        name="password"
        validations={[required(), min(8)]}
      />
      <Simple.FormButtons />
      <Simple.Debug />
    </Simple.Form>
  </Section>
)
