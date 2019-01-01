import React, { ChangeEvent } from 'react'
import { Omit } from '../../types'
import { classNamesHelper, Div, Helpers } from '../modifiers'
import { AllControlHelpers } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'

interface RadioContext {
  readonly name?: string
  readonly selected?: string
  readonly readOnly?: boolean
  onChange?(evt: ChangeEvent<HTMLInputElement>): void
  onBlur?(e: any): void
}

const RadioContext: React.Context<RadioContext> = React.createContext<
  RadioContext
>({})

export interface RadioGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    AllControlHelpers {
  readonly name?: string
  readonly selected?: string
  readonly defaultValue?: string
  readonly readOnly?: boolean
  onChange?(evt: ChangeEvent<HTMLInputElement>): void
  onBlur?(e: any): void
}

export const RadioGroup: React.SFC<RadioGroupProps> = ({
  name,
  selected,
  defaultValue,
  readOnly,
  onChange,
  onBlur,
  children,
  ...props
}) => {
  return (
    <RadioContext.Provider
      value={{
        selected: selected || defaultValue,
        name,
        readOnly,
        onChange,
        onBlur,
      }}
    >
      <ControlWrapper {...props}>{children}</ControlWrapper>
    </RadioContext.Provider>
  )
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>,
    Helpers {}

export const Radio: React.SFC<RadioProps> = ({ value, children, ...props }) => {
  const classes: string = classNamesHelper(props, 'radio')
  return (
    <RadioContext.Consumer>
      {({ name, selected, readOnly, onChange, onBlur }) => {
        // tslint:disable-next-line: typedef
        const checked = selected ? { checked: value === selected } : {}
        return (
          <label className={classes}>
            <Div
              as="input"
              {...props}
              {...checked}
              name={name}
              value={value}
              readOnly={readOnly}
              onChange={onChange}
              onBlur={onBlur}
              type="radio"
            />
            {children}
          </label>
        )
      }}
    </RadioContext.Consumer>
  )
}
