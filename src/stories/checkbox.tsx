import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { CheckBox } from '../bulma/form/CheckBox'

storiesOf('CheckBox', module)
  .add('with action', () => (
    <CheckBox onChange={action('onChange')}>Remember me</CheckBox>
  ))
  .add('with checked', () => <CheckBox checked={Boolean(true)}>ok</CheckBox>)
  .add('with disabled', () => <CheckBox disabled={Boolean(true)}>Yes</CheckBox>)
