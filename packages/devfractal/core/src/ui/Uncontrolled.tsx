import React from 'react'
import { debug } from 'technoidentity-utils'

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

function UncontrolledInner<Value, CP extends ControlledProps<Value>>(
  args: UncontrolledProps<Value, CP>,
): JSX.Element {
  const { defaultValue, component: Component, ...props } = args

  const [value, set] = React.useState(defaultValue)

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

export function Uncontrolled<Value, CP extends ControlledProps<Value>>(
  args: UncontrolledProps<Value, CP>,
): JSX.Element {
  const { defaultValue, component: Component, ...props } = args

  debug(
    !(props.value && !props.onChange && !props.readOnly),
    "'value' provided, but not 'onChange', make this component readOnly.",
  )

  return props.value !== undefined ? (
    <Component {...props} />
  ) : (
    <UncontrolledInner {...args} />
  )
}
