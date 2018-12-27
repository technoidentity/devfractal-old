import React from 'react'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface PanelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Panel: React.SFC<PanelProps> = ({ children, ...props }) => {
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

export const PanelHeading: React.SFC<PanelHeadingProps> = ({
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
}

export const PanelBlock: React.SFC<PanelBlockProps> = ({
  children,
  active,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-block', {
    [`is-active`]: active,
  })
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
}
export interface PanelTabsItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Helpers {
  readonly active?: boolean
}

export const PanelTabsItem: React.SFC<PanelTabsItemProps> = ({
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-active`]: active,
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

export const PanelTabs: React.SFC<PanelTabsProps> = ({
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-tabs')
  return (
    <Div as="p" {...props} className={classes}>
      {children}
    </Div>
  )
}
