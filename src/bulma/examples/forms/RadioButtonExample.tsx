import React from 'react'
import { RadioButton, RadioButtonGroup } from '../../form'

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
