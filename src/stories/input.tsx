import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Input } from '../bulma/elements/Input'

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
