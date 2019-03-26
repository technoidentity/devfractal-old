import React from 'react'
import { Omit, warning } from '../lib'

export interface ValueChangeEvent<Value> {
  readonly name?: string
  readonly value?: Value
}

export interface ControlledProps<Value> {
  readonly name?: string
  readonly value?: Value
  readonly readOnly?: boolean
  onChange?(event: ValueChangeEvent<Value>): void
}

export type UncontrolledProps<Value, CP extends ControlledProps<Value>> = CP & {
  readonly defaultValue?: Value
  readonly component: React.FC<Omit<CP, 'defaultValue' | 'component'>>
}

export function Uncontrolled<Value, CP extends ControlledProps<Value>>(
  args: UncontrolledProps<Value, CP>,
): JSX.Element {
  const { defaultValue, component: Component, ...props } = args

  warning(
    !(props.value && !props.onChange && !props.readOnly),
    "'value' provided, but not 'onChange', make this component readOnly.",
  )

  if (props.value !== undefined) {
    return <Component {...props} />
  }

  const [value, set] = React.useState(props.value || defaultValue)
  return (
    <Component
      {...props}
      value={value}
      onChange={evt => {
        set(evt.value)
        if (props.onChange) {
          props.onChange(evt)
        }
      }}
    />
  )
}
