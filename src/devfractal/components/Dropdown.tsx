import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Icon } from '../elements'
import { Button } from '../form'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type DropDownModifier = 'hoverable' | 'active'

export interface DropDownChangeEvent {
  readonly name?: string
  readonly value?: string
}

interface DropDownContext {
  readonly name?: string
  readonly selectedTab?: string
  setSelectedTab?(event: DropDownChangeEvent): void
}

const DropDownContext: React.Context<DropDownContext> = React.createContext<
  DropDownContext
>({})

export interface DropDownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly label?: string
  readonly name?: string
  readonly modifier?: DropDownModifier
  readonly rightAligned?: boolean
  readonly dropUp?: boolean
  onDropDownChange?(event: DropDownChangeEvent): void
}

export const DropDown: React.SFC<DropDownProps> = ({
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

export interface DropDownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const DropDownItem: React.SFC<DropDownItemProps> = ({
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

export interface DropDownDividerProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const DropDownDivider: React.SFC<DropDownDividerProps> = ({
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'dropdown-divider')
  return <Div as="hr" {...props} className={classes} />
}
