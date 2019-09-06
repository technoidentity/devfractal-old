import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Button, classNamesHelper, El, Helpers, Icon } from 'devfractal-ui-core'
import React from 'react'

type DropDownModifier = 'hoverable' | 'active'

export interface DropDownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly label?: string

  /**
   * when should be the Dropdown to be shown Up
   */
  readonly modifier?: DropDownModifier
  /**
   * To have a right-aligned dropdown
   */
  readonly rightAligned?: boolean
  /**
   * To have a dropdown menu that appears above the dropdown button
   */
  readonly dropUp?: boolean
}

export const DropDown: React.FC<DropDownProps> = ({
  label,
  modifier,
  rightAligned,
  dropUp,
  children,
  ...props
}) => {
  const [active, setActive] = React.useState(modifier === 'active')
  const classes: string = classNamesHelper(props, 'dropdown', {
    [`is-hoverable`]: modifier === 'hoverable',
    [`is-active`]: modifier !== 'hoverable' && active,
    'is-right': rightAligned,
    'is-up': dropUp,
  })
  return (
    <El {...props} className={classes}>
      <El className="dropdown-trigger">
        <Button onClick={() => setActive(!active)}>
          <span>{label}</span>
          <Icon icon={dropUp ? faAngleUp : faAngleDown} />
        </Button>
      </El>
      <El className="dropdown-menu" role="menu">
        <El
          {...props}
          className="dropdown-content"
          onClick={() => setActive(false)}
        >
          {children}
        </El>
      </El>
    </El>
  )
}

type DropDownItemTag = 'div' | 'a'

export interface DropDownItemProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly active?: boolean
  readonly as?: DropDownItemTag
}

export const DropDownItem: React.FC<DropDownItemProps> = ({
  active,
  as,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-item', {
    'is-active': active,
  })
  return (
    <El as={as} {...props} className={classes}>
      {children}
    </El>
  )
}

export interface DropDownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropDownDivider: React.FC<DropDownDividerProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <El as="hr" {...props} className={classes} />
}
