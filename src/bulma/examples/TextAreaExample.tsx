import * as React from 'react'
import { Field } from '../Field'
import { TextArea } from '../TextArea'
import { logger } from './common'
import { Control } from '../Control'

export const TextAreaExample: React.SFC = () => (
  <div>
    <Field>
      <Control>
        <TextArea
          className="is-large is-focused is-primary "
          placeholder="large text area"
          onChange={() => logger('changed')}
        />
      </Control>
    </Field>
    <Field>
      <Control>
        <TextArea color="info" disabled />
      </Control>
    </Field>
    <Field>
      <Control state="loading">
        <TextArea color="danger" />
      </Control>
    </Field>
    <Field>
      <Control>
        <TextArea />
      </Control>
    </Field>
  </div>
)
