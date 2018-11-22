import * as React from 'react'
import { Input } from '../Input'
import { Field } from '../Field'
import { Label } from '../Label'
import { Button } from '../Button'

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
    <div className="section">
      <div className="container">
        <Field>
          <Label>User Name</Label>
          <Input name="username" type="text" onChange={logger} />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input name="password" type="password" onChange={logger} />
        </Field>
        <Field grouped groupCentered>
          <Button onClick={logger} color="info">
            Submit
          </Button>
          <Button onClick={logger} color="danger">
            Reset
          </Button>
        </Field>
      </div>
    </div>
  )
}
