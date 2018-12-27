import React from 'react'
import { Field, Select } from '../../form'
import { logger } from '../common'

export const SelectExample: React.SFC = () => (
  <div>
    <Field>
      <Select ctrlSize="small" variant="primary">
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
      <Select variant="warning" ctrlSize="large" rounded>
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
