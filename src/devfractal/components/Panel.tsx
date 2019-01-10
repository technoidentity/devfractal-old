import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import React from 'react'
import { classNamesHelper, Div, Helpers, removeHelpers } from '../modifiers'

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
  readonly wrapped?: boolean
}

export const PanelBlock: React.SFC<PanelBlockProps> = ({
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

export interface PanelIconProps extends FontAwesomeIconProps, Helpers {
  readonly icon: IconDefinition
  readonly direction?: PanelIconDirection
}

export const PanelIcon: React.SFC<PanelIconProps> = ({
  direction,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-icon', {
    [`is-${direction}`]: direction,
  })

  return (
    <Div as="span" className={classes}>
      <FontAwesomeIcon {...removeHelpers(props)}>{children}</FontAwesomeIcon>
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
