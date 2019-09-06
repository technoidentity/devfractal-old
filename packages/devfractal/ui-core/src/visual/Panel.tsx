import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import React from 'react'
import { classNamesHelper, El, Helpers, removeHelpers } from '../base'

export interface PanelProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const Panel: React.FC<PanelProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'panel')
  return (
    <El as="nav" {...props} className={classes}>
      {children}
    </El>
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
    <El as="p" {...props} className={classes}>
      {children}
    </El>
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
    <El {...props} className={classes}>
      {children}
    </El>
  )
}

type PanelIconDirection = 'left' | 'right'

export interface PanelIconProps extends FontAwesomeIconProps, Helpers {
  readonly icon: IconDefinition
  readonly direction?: PanelIconDirection
}

export const PanelIcon: React.FC<PanelIconProps> = ({
  direction,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'panel-icon', {
    [`is-${direction}`]: direction,
  })

  return (
    <El as="span" className={classes}>
      <FontAwesomeIcon {...removeHelpers(props)}>{children}</FontAwesomeIcon>
    </El>
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
    <El as="a" {...props} className={classes}>
      {children}
    </El>
  )
}

export interface PanelTabsProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {}

export const PanelTabs: React.FC<PanelTabsProps> = ({ children, ...props }) => {
  const classes: string = classNamesHelper(props, 'panel-tabs')
  return (
    <El as="p" {...props} className={classes}>
      {children}
    </El>
  )
}
