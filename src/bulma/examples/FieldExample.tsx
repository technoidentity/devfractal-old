import * as React from 'react'
import { Field } from '../Field'
import { Input } from '../Input'
import { Button } from '../Button'
import { Label } from '../Label'

export const FieldExample: React.SFC = () => (
  <div>
    <Field addonsModifier="addons" className="has-addons-centered">
      <div className="control">
        <Input type="text" className="is-success" />
      </div>
      <div className="control">
        <Button color="info">search</Button>
      </div>
    </Field>
    <Field>
      <Label>Name</Label>
      <div className="control">
        <Input
          type="text"
          placeholder="e.g Alex Smith"
          className="is-primary"
        />
      </div>
    </Field>
  </div>
)
