import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { RadioButton } from '../bulma/form/RadioButton'

storiesOf('RadioButton', module).add('with action', () => (
  <div>
    <RadioButton onChange={action('onChange')}>Male</RadioButton>
    <RadioButton checked>Female</RadioButton>
    <RadioButton disabled>other</RadioButton>
  </div>
))
