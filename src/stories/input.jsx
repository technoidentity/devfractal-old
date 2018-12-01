import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from '../bulma/Input'

storiesOf('Input', module).add('rounded and focused', () => (
  <Input
    type="password"
    color="primary"
    state="focused"
    rounded
    placeholder="Input Text"
    onKeyDown={action('onKeyDown')}
  />
))
