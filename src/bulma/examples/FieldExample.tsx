import * as React from 'react'
import { Field } from '../Field'
import { Input } from '../Input'
import { Button } from '../Button'
import { Label } from '../Label'

export const FieldExample: React.SFC = () => (
  <div>
    <Field addonsModifier="addons" className="has-addons-centered">
      <Input type="text" className="is-success" />
      <Button color="info">search</Button>
    </Field>
    <Field>
      <Label>Name</Label>
      <Input type="text" placeholder="e.g Alex Smith" className="is-primary" />
    </Field>
  </div>
)
