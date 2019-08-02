import Cleave from 'cleave.js/react'
import { Props as CleaveProps } from 'cleave.js/react/props'
import {
  classNamesHelper,
  ControlWrapper,
  InputProps,
  removeControlHelpers,
  removeHelpers,
  removeIconHelpers,
} from 'devfractal-ui-core'
import React from 'react'

export interface CleaveInputProps
  extends Omit<InputProps, 'value' | 'onChange' | 'type'>,
    CleaveProps {}

export const CleaveInput: React.FC<CleaveInputProps> = ({
  variant,
  fullWidth,
  inline,
  rounded,
  state,
  options,
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
      <Cleave
        {...removeIconHelpers(removeControlHelpers(removeHelpers(props)))}
        options={options}
        className={classes}
      />
    </ControlWrapper>
  )
}

// tslint:disable no-default-export
export default CleaveInput
