import React from 'react'
import { State, warning } from '../utils'

export interface StateChangeEvent<State> {
  readonly name?: string
  readonly value?: State
}

export interface StatefulComponentProps<State = {}> {
  readonly state?: State
  onStateChange?(event: StateChangeEvent<State>): void
}

export interface StatefulProps<State = {}> {
  readonly defaultValue?: State
  readonly state?: State
  readonly readOnly?: boolean
  render(props: StatefulComponentProps<State>): JSX.Element
  onStateChange?(event: StateChangeEvent<State>): void
}

export function Stateful<State>(
  args: StatefulProps<State> & { readonly children: React.ReactNode },
): JSX.Element {
  const { defaultValue, render, children, ...props } = args
  warning(
    !(props.state && !props.onStateChange && !props.readOnly),
    "'selected' provided, but not 'onSelectionChange', make this component readOnly.",
  )

  const Component: (
    props: StatefulComponentProps<State> & {
      readonly children: React.ReactNode
    },
  ) => JSX.Element = render

  return props.state !== undefined ? (
    <Component {...props}>{children}</Component>
  ) : (
    <State
      initial={props.state || defaultValue}
      render={({ value, set }) => (
        <Component
          {...props}
          state={value}
          onStateChange={evt => {
            set(evt.value)
            if (props.onStateChange) {
              props.onStateChange(evt)
            }
          }}
        >
          {children}
        </Component>
      )}
    />
  )
}
