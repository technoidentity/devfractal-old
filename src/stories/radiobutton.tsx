import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { RadioButton } from '../bulma/form/RadioButton'

storiesOf('RadioButton', module)
  .add('with action', () => (
    <RadioButton onChange={action('onChange')}>Gender</RadioButton>
  ))
  .add('with checked', () => <RadioButton checked>Male</RadioButton>)
  .add('with disabled', () => <RadioButton disabled>Female</RadioButton>)
