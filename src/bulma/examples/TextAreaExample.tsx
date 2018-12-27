import React from 'react'
import { TextArea } from '../form'
import { logger } from './common'

export const TextAreaExample: React.SFC = () => (
  <div>
    <TextArea placeholder="Default TextArea" />
    <TextArea
      className="is-large"
      state="focused"
      variant="primary"
      placeholder="Large TextArea"
      onChange={() => {
        logger('TextAreaExample onChange')
      }}
    />
    <TextArea variant="info" disabled placeholder="Disabled TextArea" />
    <TextArea variant="danger" placeholder="TextArea 'danger' variant" />
  </div>
)
