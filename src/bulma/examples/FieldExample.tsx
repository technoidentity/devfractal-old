import * as React from 'react'
import { Field } from '../Field'
import { Input } from '../Input'
import { Button } from '../Button'

export const FieldExample: React.SFC = () => (
  <Field addons addonsCentered>
    <div className="control">
      <Input type="text" />
    </div>
    <div className="control">
      <Button color="info">search</Button>
    </div>
  </Field>
)
