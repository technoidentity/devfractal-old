import React from 'react'
import { IconType } from 'react-icons'
import { classNamesHelper, Div, Helpers, removeHelpers } from '../lib'

export interface PanelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Panel: React.FC<PanelProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'panel')
  return (
    <Div as="nav" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface PanelHeadingProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PanelHeading: React.FC<PanelHeadingProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-heading')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface PanelBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly active?: boolean
  readonly wrapped?: boolean
}

export const PanelBlock: React.FC<PanelBlockProps> = ({
  children,
  active,
  wrapped,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-block', {
    'is-active': active,
    'is-wrapped': wrapped,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}

type PanelIconDirection = 'left' | 'right'

export interface PanelIconProps extends Helpers {
  readonly icon: IconType
  readonly direction?: PanelIconDirection
}

export const PanelIcon: React.FC<PanelIconProps> = ({
  direction,
  icon: Icon,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-icon', {
    [`is-${direction}`]: direction,
  })

  return (
    <Div as="span" className={classes}>
      <Icon {...removeHelpers(props)}>{children}</Icon>
    </Div>
  )
}

export interface PanelTabsItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const PanelTabsItem: React.FC<PanelTabsItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    'is-active': active,
  })
  return (
    <Div as="a" {...props} className={classes}>
      {children}
    </Div>
  )
}

export interface PanelTabsProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PanelTabs: React.FC<PanelTabsProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'panel-tabs')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}

// tslint:disable-next-line: no-default-export
export default PanelHeading
