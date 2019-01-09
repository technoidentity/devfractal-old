import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from '../elements'
import { Button } from '../form'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DropdownModifier = 'hoverable' | 'active'

export interface DropdownChangeEvent {
  readonly name?: string
  readonly value?: string
}

interface DropdownContext {
  readonly name?: string
  readonly selectedTab?: string
  setSelectedTab?(event: DropdownChangeEvent): void
}

const DropdownContext: React.Context<DropdownContext> = React.createContext<
  DropdownContext
>({})

export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly label?: string
  readonly name?: string
  readonly modifier?: DropdownModifier
  readonly rightAligned?: boolean
  readonly dropUp?: boolean
  onDropdownChange?(event: DropdownChangeEvent): void
}

export const Dropdown: React.SFC<DropdownProps> = ({
  label,
  modifier,
  rightAligned,
  dropUp,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown', {
    [`is-${modifier}`]: modifier,
    [`is-right`]: rightAligned,
    [`is-up`]: dropUp,
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
          {children}
        </Div>
      </Div>
    </Div>
  )
}

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const DropdownItem: React.SFC<DropdownItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-item', {
    [`is-active`]: active,
  })
  return (
    <Div as="a" {...props} className={classes}>
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
