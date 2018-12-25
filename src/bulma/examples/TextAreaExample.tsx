import React from 'react'
import { Field } from '../form/Field'
import { TextArea } from '../form/TextArea'
import { logger } from './common'

export const TextAreaExample: React.SFC = () => (
  <div>
    <Field>
      <TextArea
        className="is-large"
        state="focused"
        variant="primary"
        placeholder="large text area"
        onChange={() => {
          logger('TextAreaExample onChange')
        }}
      />
    </Field>
    \
    <Field>
      <TextArea variant="info" disabled />
    </Field>
    <Field>
      <TextArea variant="danger" />
    </Field>
    <Field>
      <TextArea />
    </Field>
  </div>
)
