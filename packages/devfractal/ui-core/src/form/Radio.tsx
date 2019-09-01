import React from 'react'
import { debug } from 'technoidentity-utils'
import { classNamesHelper, El, Helpers } from '../base'
import { AllControlHelpers } from './controlDiv'
import { ControlWrapper } from './ControlWrapper'

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
        debug(
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
          onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
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

function RadioGroupInner({
  defaultValue,
  children,
  ...props
}: RadioGroupProps): JSX.Element {
  const [value, set] = React.useState(props.selected || defaultValue)

  return (
    <RadioGroupView
      {...props}
      selected={value}
      onChange={({ value }) => set(value)}
    >
      {children}
    </RadioGroupView>
  )
}

export const RadioGroup: React.FC<RadioGroupProps> = args => {
  const { defaultValue, children, ...props } = args

  debug(
    !(props.selected && !props.onChange && !props.readOnly),
    `For Radio ${props.name} 'selected' provided, but not 'onChange', make this component readOnly.`,
  )

  return props.selected !== undefined ? (
    <RadioGroupView {...props}>{children}</RadioGroupView>
  ) : (
    <RadioGroupInner {...args} />
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
      <El
        as="input"
        {...props}
        checked={_selected === props.value}
        type="radio"
      />
      {children}
    </label>
  )
}
