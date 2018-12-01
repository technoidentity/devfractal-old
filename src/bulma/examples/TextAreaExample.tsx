import * as React from 'react'
import { Field } from '../Field'
import { TextArea } from '../TextArea'
import { logger } from './common'

export const TextAreaExample: React.SFC = () => (
  <div>
    <Field>
      <div className="control is-loading">
        <TextArea
          className="is-large is-focused is-primary "
          placeholder="large text area"
          onChange={() => logger('changed')}
        />
      </div>
    </Field>
    <Field>
      <div className="control">
        <TextArea color="info" disabled />
      </div>
    </Field>
    <Field>
      <div className="control">
        <TextArea color="danger" />
      </div>
    </Field>
    <Field>
      <div className="control">
        <TextArea />
      </div>
    </Field>
  </div>
)
