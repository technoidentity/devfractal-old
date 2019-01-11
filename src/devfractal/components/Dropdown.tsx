import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import warning from 'tiny-warning'
import { Omit } from '../../types'
import { State } from '../../utils'
import { Icon } from '../elements'
import { Button } from '../form'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DropdownModifier = 'hoverable' | 'active'

export interface DropdownChangeEvent {
  readonly name?: string
  readonly value?: string
}

export interface DropdownViewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly label?: string
  readonly modifier?: DropdownModifier
  readonly rightAligned?: boolean
  readonly dropUp?: boolean

  readonly name?: string
  readonly readOnly?: boolean
  readonly selectedItem?: string
  onSelectionChange?(event: DropdownChangeEvent): void
}

export const DropdownView: React.SFC<DropdownViewProps> = ({
  label,
  modifier,
  rightAligned,
  dropUp,
  name,
  readOnly,
  selectedItem,
  onSelectionChange,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown', {
    [`is-${modifier}`]: modifier,
    'is-right': rightAligned,
    'is-up': dropUp,
  })
  return (
    <Div {...props} className={classes}>
      <Div className="dropdown-trigger">
        <Button>
          <span>{label}</span>
          <Icon icon={dropUp ? faAngleUp : faAngleDown} />
        </Button>
      </Div>
      <Div className="dropdown-menu" role="menu">
        <Div {...props} className="dropdown-content">
          {React.Children.map(children, (child: any, i: number) => {
            warning(
              () => child.type.displayName === 'DropdownItem',
              "Every child to 'Dropdown' must be 'DropdownItem'",
            )

            const value: string = child.props.value || i.toString()
            return React.cloneElement(child, {
              _name: name,
              value,
              _active: selectedItem === value,
              _setSelectedItem: ({ value }: DropdownChangeEvent) =>
                onSelectionChange && onSelectionChange({ name, value }),
            })
          })}
        </Div>
      </Div>
    </Div>
  )
}

export interface DropdownProps extends DropdownViewProps {
  readonly defaultValue?: string
}

export const Dropdown: React.SFC<DropdownProps> = ({
  defaultValue,
  children,
  ...props
}) => {
  warning(
    !(props.selectedItem && !props.onSelectionChange && !props.readOnly),
    "'selectedItem' provided, but not 'onSelectionChange', make this component readOnly.",
  )

  return props.selectedItem !== undefined ? (
    <DropdownView {...props}>{children}</DropdownView>
  ) : (
    <State
      initial={props.selectedItem || defaultValue}
      render={({ value, set }) => (
        <DropdownView
          {...props}
          selectedItem={value}
          onSelectionChange={({ value }) => set(value)}
        >
          {children}
        </DropdownView>
      )}
    />
  )
}

type DropdownItemTag = 'div' | 'a'
export interface DropdownItemProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'value'>,
    Helpers {
  readonly value?: string
  readonly as?: DropdownItemTag
}

interface DropdownItemInternalProps extends DropdownItemProps {
  readonly value?: string
  readonly _name?: string
  readonly _active?: boolean
  _setSelectedItem?(event: DropdownChangeEvent): void
}

export const DropdownItem: React.SFC<DropdownItemProps> = args => {
  const {
    as,
    children,
    value,
    _name,
    _active,
    _setSelectedItem,
    ...props
  } = args as DropdownItemInternalProps

  const classes: string = classNamesHelper(props, 'dropdown-item', {
    'is-active': _active,
  })
  return (
    <Div
      as={as}
      {...props}
      className={classes}
      onClick={() => {
        if (_setSelectedItem) {
          _setSelectedItem({ name: _name, value })
        }
      }}
    >
      {children}
    </Div>
  )
}

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropdownDivider: React.SFC<DropdownDividerProps> = args => {
  // Ignore _active etc. useful only for DropdownItem
  const { _active, _setSelectedItem, ...props } = args as any
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <Div as="hr" {...props} className={classes} />
}
