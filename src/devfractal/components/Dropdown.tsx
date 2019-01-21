import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Icon } from '../elements'
import { Button } from '../form'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DropdownModifier = 'hoverable' | 'active'

export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly label?: string
  readonly modifier?: DropdownModifier
  readonly rightAligned?: boolean
  readonly dropUp?: boolean
}

export const Dropdown: React.SFC<DropdownProps> = ({
  label,
  modifier,
  rightAligned,
  dropUp,
  children,
  ...props
}) => {
  const [active, setActive] = useState(modifier === 'active')
  const classes: string = classNamesHelper(props, 'dropdown', {
    [`is-hoverable`]: modifier === 'hoverable',
    [`is-active`]: modifier !== 'hoverable' && active,
    'is-right': rightAligned,
    'is-up': dropUp,
  })
  return (
    <Div {...props} className={classes}>
      <Div className="dropdown-trigger">
        <Button onClick={() => setActive(!active)}>
          <span>{label}</span>
          <Icon icon={dropUp ? faAngleUp : faAngleDown} />
        </Button>
      </Div>
      <Div className="dropdown-menu" role="menu">
        <Div
          {...props}
          className="dropdown-content"
          onClick={() => setActive(false)}
        >
          {children}
        </Div>
      </Div>
    </Div>
  )
}

type DropdownItemTag = 'div' | 'a'
export interface DropdownItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly active?: boolean
  readonly as?: DropdownItemTag
}

export const DropdownItem: React.SFC<DropdownItemProps> = ({
  active,
  as,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-item', {
    'is-active': active,
  })
  return (
    <Div as={as} {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropdownDivider: React.SFC<DropdownDividerProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <Div as="hr" {...props} className={classes} />
}
