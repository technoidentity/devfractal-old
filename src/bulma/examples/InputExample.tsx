import * as React from 'react'
import { Input } from '../Input'

export const InputExample: React.SFC = () => (
  <Input
    type="password"
    color="primary"
    state="focused"
    placeholder="Input Text"
  />
)
