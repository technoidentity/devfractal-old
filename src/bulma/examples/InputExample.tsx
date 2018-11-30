import * as React from 'react'
import { Input } from '../Input'
import { handler } from './common'

export const InputExample: React.SFC = () => (
  <Input
    type="password"
    color="primary"
    state="focused"
    rounded
    placeholder="Input Text"
    onKeyDown={handler}
  />
)
