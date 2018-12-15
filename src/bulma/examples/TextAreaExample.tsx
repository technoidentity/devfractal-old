import * as React from 'react'
import { Field } from '../form/Field'
import { TextArea } from '../form/TextArea'
import { logger } from './common'

export const TextAreaExample: React.SFC = () => (
  <div>
    <Field>
      <TextArea
        className="is-large"
        state="focused"
        color="primary"
        placeholder="large text area"
        onChange={() => logger('changed')}
      />
    </Field>
    <Field>
      <TextArea color="info" disabled />
    </Field>
    <Field>
      <TextArea color="danger" />
    </Field>
    <Field>
      <TextArea />
    </Field>
  </div>
)
