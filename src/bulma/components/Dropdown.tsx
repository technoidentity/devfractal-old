import * as React from 'react'
import classNames from 'classnames'

type DropDownModifier = 'hoverable' | 'active'

type DropDownAlignment = 'right' | 'up'

interface DropDownProps {
  readonly modifier?: DropDownModifier
  readonly alignment?: DropDownAlignment
  readonly active?: boolean
}

interface DropDownMenuProps {
  readonly id: string
  readonly role: string
}

interface DropDownItemProps {
  readonly active?: boolean
  readonly href: string
}

export const DropDown: React.SFC<DropDownProps> = ({
  active,
  modifier,
  alignment,
  children,
}) => {
  const classes: string = classNames('dropdown', {
    [`is-${modifier}`]: modifier,
    [`is-${alignment}`]: alignment,
    'is-active': active,
  })
  return <div className={classes}>{children}</div>
}

export const DropDownTrigger: React.SFC = ({ children }) => (
  <div className="dropdown-trigger">{children}</div>
)

export const DropDownMenu: React.SFC<DropDownMenuProps> = ({
  role,
  id,
  children,
}) => (
  <div className="dropdown-menu" id={id} role={role}>
    {children}
  </div>
)

export const DropDownContent: React.SFC = ({ children }) => (
  <div className="dropdown-content">{children}</div>
)

export const DropDownItem: React.SFC<DropDownItemProps> = ({
  active,
  href,
  children,
}) => {
  const classes: string = classNames('dropdown-item', {
    'is-active': active,
  })
  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}

export const DropDownDivider: React.SFC = () => (
  <hr className="dropdown-divider" />
)
