import * as React from 'react'
import { Input } from '../elements/Input'
import { logger } from './common'

export const InputExample: React.SFC = () => (
  <Input
    type="password"
    variant="primary"
    state="focused"
    rounded
    placeholder="Input Text"
    onKeyDown={() => logger('hello from input')}
  />
)
