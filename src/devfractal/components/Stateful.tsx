import warning from 'tiny-warning'
import { State } from '../../utils'

export interface SelectionChangeEvent {
  readonly name?: string
  readonly value?: string
}

// tslint:disable-next-line: no-empty-interface
export interface StatefulComponentProps<Value = string> {
  readonly selected?: Value
  onSelectionChange?(event: SelectionChangeEvent): void
}

export interface StatefulProps<Value = string> {
  readonly defaultValue?: Value
  readonly selected?: Value
  readonly readOnly?: boolean
  render(props: StatefulComponentProps<Value>): JSX.Element
  onSelectionChange?(event: SelectionChangeEvent): void
}

export const Stateful: React.SFC<StatefulProps> = ({
  defaultValue,
  render,
  children,
  ...props
}) => {
  warning(
    !(props.selected && !props.onSelectionChange && !props.readOnly),
    "'selected' provided, but not 'onSelectionChange', make this component readOnly.",
  )

  const Component: React.SFC<StatefulComponentProps> = render

  return props.selected !== undefined ? (
    <Component {...props}>{children}</Component>
  ) : (
    <State
      initial={props.selected || defaultValue}
      render={({ value, set }) => (
        <Component
          {...props}
          selected={value}
          onSelectionChange={evt => {
            set(evt.value)
            if (props.onSelectionChange) {
              props.onSelectionChange(evt)
            }
          }}
        >
          {children}
        </Component>
      )}
    />
  )
}
