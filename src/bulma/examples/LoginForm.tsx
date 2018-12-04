import * as React from 'react'
import { Input } from '../Input'
import { Field } from '../Field'
import { Label } from '../Label'
import { Button } from '../Button'
import { Section } from '../Section'
import { Container } from '../Container'

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
          <Button onClick={logger} color="info">
            Submit
          </Button>
          <Button onClick={logger} color="danger">
            Reset
          </Button>
        </Field>
      </Container>
    </Section>
  )
}
