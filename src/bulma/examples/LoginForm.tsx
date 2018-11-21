import * as React from 'react'
import { Input } from '../Input'
import { Field } from '../Field'
import { Label } from '../Label'
import { Button } from '../Button'

export const LoginForm: React.SFC = () => {
  return (
    <div className="section">
      <div className="container">
        <Field>
          <Label>User Name</Label>
          <Input
            name="username"
            type="text"
            onChange={() => console.log('foo')}
          />
        </Field>
        <Field>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            onChange={() => console.log('foo')}
          />
        </Field>
        <Field grouped groupCentered>
          <Button onClick={() => console.log('clicked')} color="info">
            Submit
          </Button>
          <Button onClick={() => console.log('clicked')} color="danger">
            Reset
          </Button>
        </Field>
      </div>
    </div>
  )
}
