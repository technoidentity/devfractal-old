import React from 'react'
import { Input } from '../form/Input'
import { Field } from '../form/Field'
import { Label } from '../form/Label'
import { Button } from '../form/Button'
import { Section } from '../layout/Section'
import { Container } from '../layout/Container'

const logger: (evt: any) => void = evt => {
  // tslint:disable no-console
  console.log('log! ')
  if (evt && evt.target) {
    console.log(evt.target.name, ':', evt && evt.target && evt.target.value)
  }
  // tslint:enable no-console
}

export const LoginForm: React.SFC = () => {
  return (
    <Section>
      <Container>
        <Field>
          <Label>User Name</Label>
          <Input name="username" type="text" onChange={logger} />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input name="password" type="password" onChange={logger} />
        </Field>
        <Field className="is-grouped" groupModifier="grouped-centered">
          <Button onClick={logger} variant="info">
            Submit
          </Button>
          <Button onClick={logger} variant="danger">
            Reset
          </Button>
        </Field>
      </Container>
    </Section>
  )
}
