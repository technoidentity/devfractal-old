import React from 'react'
import { Field } from '../form/Field'
import { Select } from '../form/Select'
import { logger } from './common'

export const SelectExample: React.SFC = () => (
  <div>
    <Field>
      <Select selectSize="small" variant="primary">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select
        state="focused"
        rounded
        onChange={() => {
          logger('SelectExample onChange')
        }}
      >
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="success" state="hovered">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select variant="warning" selectSize="large" rounded>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select loading>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </div>
)
