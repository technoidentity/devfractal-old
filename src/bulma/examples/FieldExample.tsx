import * as React from 'react'
import { Field } from '../Field'
import { Input } from '../Input'
import { Button } from '../Button'
import { Label } from '../Label'
import { Control } from '../Control'

export const FieldExample: React.SFC = () => (
  <div>
    <Field addonsModifier="addons" className="has-addons-centered">
      <Control>
        <Input type="text" className="is-success" />
      </Control>
      <Control>
        <Button color="info">search</Button>
      </Control>
    </Field>
    <Field>
      <Label>Name</Label>
      <Control>
        <Input
          type="text"
          placeholder="e.g Alex Smith"
          className="is-primary"
        />
      </Control>
    </Field>
  </div>
)
