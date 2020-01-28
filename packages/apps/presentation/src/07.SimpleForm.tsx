import React from 'react'
import {
  maxLength,
  minLength,
  required,
  Section,
  Simple,
} from '@stp/devfractal'
import { initialLoginValues } from './06.ModerateForm'

export const SimpleLoginForm: React.FC = () => (
  <Section>
    <Simple.Form initialValues={initialLoginValues}>
      <Simple.Text
        name="username"
        validations={[required(), maxLength(20), minLength(10)]}
      />

      <Simple.Password
        name="password"
        validations={[required(), minLength(8)]}
      />

      <Simple.FormButtons />

      <Simple.Debug />
    </Simple.Form>
  </Section>
)
