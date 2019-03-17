import React from 'react'
import { State, warning } from '../lib'
import { Omit } from '../types'

export interface ValueChangeEvent<Value> {
  readonly name?: string
  readonly value?: Value
}

export interface ControlledProps<Value> {
  readonly value?: Value
  readonly readOnly?: boolean
  onChange?(event: ValueChangeEvent<Value>): void
}

type UncontrolledProps<Value, CP extends ControlledProps<Value>> = CP & {
  readonly defaultValue?: Value
  readonly component: React.FC<Omit<CP, 'defaultValue' | 'component'>>
}

export function Uncontrolled<Value, CP extends ControlledProps<Value>>(
  args: UncontrolledProps<Value, CP>,
): JSX.Element {
  const { defaultValue, component: controlled, ...props } = args

  warning(
    !(props.value && !props.onChange && !props.readOnly),
    "'value' provided, but not 'onChange', make this component readOnly.",
  )

  // tslint:disable-next-line:typedef
  const Component = controlled

  return props.value !== undefined ? (
    <Component {...props} />
  ) : (
    <State
      initial={props.value || defaultValue}
      render={({ value, set }) => (
        <Component
          {...props}
          value={value}
          onChange={(evt: any) => {
            set(evt.value)
            if (props.onChange) {
              props.onChange(evt)
            }
          }}
        />
      )}
    />
  )
}
