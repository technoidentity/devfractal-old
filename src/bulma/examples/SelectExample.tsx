import * as React from 'react'

import { Select } from '../Select'
import { Field } from '../Field'
import { logger } from './common'

export const SelectExample: React.SFC = () => (
  <div>
    <Field>
      <Select selectSize="small">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select state="focused" rounded onChange={() => logger('hello world')}>
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select color="success" state="hovered">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select color="warning" selectSize="large">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
    <Field>
      <Select state="loading">
        <option>Select dropdown</option>
        <option>With options</option>
      </Select>
    </Field>
  </div>
)
