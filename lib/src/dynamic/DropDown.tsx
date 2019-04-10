import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Button, classNamesHelper, Div, Helpers, Icon } from '../lib'

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
    <Div as={as} {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface DropDownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropDownDivider: React.FC<DropDownDividerProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <Div as="hr" {...props} className={classes} />
}

// tslint:disable-next-line: no-default-export
export default DropDownItem
