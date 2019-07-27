import React from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import {
  classNamesHelper,
  ControlWrapper,
  InputProps,
  removeControlHelpers,
  removeHelpers,
  removeIconHelpers,
} from 'technoidentity-devfractal-ui-core'

export type DateInputProps = Omit<InputProps, 'value' | 'onChange' | 'type'> &
  ReactDatePickerProps

export const DateInput: React.FC<DateInputProps> = ({
  variant,
  fullWidth,
  inline,
  rounded,
  onChange,
  state,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'input', {
    'is-fullwidth': fullWidth,
    'is-inline': inline,
    'is-rounded': rounded,
    [`is-${variant}`]: variant,
    [`is-${props.ctrlSize}`]: props.ctrlSize,
    [`is-${state}`]: state,
  })

  return (
    <ControlWrapper {...props}>
      <DatePicker
        {...removeIconHelpers(removeControlHelpers(removeHelpers(props)))}
        onChange={onChange}
        className={classes}
      />
    </ControlWrapper>
  )
}
