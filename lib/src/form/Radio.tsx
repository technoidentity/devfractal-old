import { classNamesHelper, Div, Helpers, State } from 'base'
import React, { ChangeEvent } from 'react'
import { Omit, warning } from 'utils'
import { AllControlHelpers } from './ControlDiv'
import { ControlWrapper } from './ControlHelpers'
export interface RadioChangeEvent {
  readonly name: string
  readonly value?: string
}

interface RadioGroupViewProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'onChange' | 'value'
    >,
    AllControlHelpers {
  readonly name: string
  readonly selected?: string
  readonly readOnly?: boolean
  onChange?(evt: RadioChangeEvent): void
  onBlur?(e: any): void
}

const RadioGroupView: React.FC<RadioGroupViewProps> = ({
  name,
  selected,
  readOnly,
  onChange,
  onBlur,
  children,
  ...props
}) => {
  return (
    <ControlWrapper {...props}>
      {React.Children.map(children, (child: any, i) => {
        warning(
          child.type.displayName === 'Radio',
          "Every child to 'RadioGroup' must be 'Radio'",
        )
        const _selected: string =
          selected ||
          ((children && children[0] && children[0].props.value) || '0')
        return React.cloneElement(child, {
          name,
          value: child.props.value || i.toString(),
          onBlur,
          readOnly,
          onChange: (evt: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange({
                name: evt.currentTarget.name,
                value: evt.currentTarget.value,
              })
            }
          },

          _selected,
        })
      })}
    </ControlWrapper>
  )
}

export interface RadioGroupProps extends RadioGroupViewProps {
  readonly defaultValue?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  defaultValue,
  children,
  ...props
}) => {
  warning(
    !(props.selected && !props.onChange && !props.readOnly),
    `For Radio ${
      props.name
    } 'selected' provided, but not 'onChange', make this component readOnly.`,
  )

  return props.selected !== undefined ? (
    <RadioGroupView {...props}>{children}</RadioGroupView>
  ) : (
    <State
      initial={props.selected || defaultValue}
      render={({ value, set }) => (
        <RadioGroupView
          {...props}
          selected={value}
          onChange={({ value }) => set(value)}
        >
          {children}
        </RadioGroupView>
      )}
    />
  )
}
export interface RadioProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'name' | 'onChange'
    >,
    Helpers {}

interface RadioInternalProps extends RadioProps {
  readonly _selected?: string
}

export const Radio: React.FC<RadioProps> = args => {
  const { children, _selected, ...props } = args as RadioInternalProps

  return (
    <label className={classNamesHelper(props, 'radio')}>
      <Div
        as="input"
        {...props}
        checked={_selected === props.value}
        type="radio"
      />
      {children}
    </label>
  )
}

// tslint:disable-next-line: no-default-export
export default RadioGroup
