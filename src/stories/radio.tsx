import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '../bulma/form'

storiesOf('Radio', module)
  .add('with action', () => (
    <RadioGroup onChange={action('onChange')}>
      <Radio>Gender</Radio>
    </RadioGroup>
  ))
  .add('with checked', () => (
    <RadioGroup>
      <Radio checked>Male</Radio>)
    </RadioGroup>
  ))
  .add('with disabled', () => (
    <RadioGroup>
      <Radio disabled>Female</Radio>)
    </RadioGroup>
  ))
