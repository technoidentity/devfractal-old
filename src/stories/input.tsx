import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Input } from '../bulma/form/Input'

storiesOf('Input', module).add('rounded and focused', () => (
  <Input
    type="password"
    variant="primary"
    state="focused"
    rounded
    placeholder="Input Text"
    onKeyDown={action('onKeyDown')}
  />
))
