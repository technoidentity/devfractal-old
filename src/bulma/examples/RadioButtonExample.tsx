import React from 'react'
import { RadioButton } from '../form'
import { RadioButtonGroup } from '../form/RadioButtonGroup'

export const RadioButtonExample: React.SFC = () => (
  <RadioButtonGroup>
    <RadioButton checked readOnly>
      {' '}
      yes
    </RadioButton>
    <RadioButton> No</RadioButton>
    <RadioButton disabled> No</RadioButton>
  </RadioButtonGroup>
)
