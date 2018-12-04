import * as React from 'react'
import classNames from 'classnames'

interface PanelProps extends React.HTMLAttributes<HTMLElement> {}

export const Panel: React.SFC<PanelProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('panel', className)
  return (
    <nav {...props} className={classes}>
      {children}
    </nav>
  )
}

interface PanelHeadingProps extends React.HTMLAttributes<HTMLElement> {}

export const PanelHeading: React.SFC<PanelHeadingProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('panel-heading', className)
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}

interface PanelBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly active?: boolean
}

export const PanelBlock: React.SFC<PanelBlockProps> = ({
  children,
  active,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'panel-block',
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
interface PanelTabsItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly active?: boolean
}

export const PanelTabsItem: React.SFC<PanelTabsItemProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    {
      [`is-active`]: active,
    },
    className,
  )
  return (
    <a {...props} className={classes}>
      {children}
    </a>
  )
}

interface PanelTabsProps extends React.HTMLAttributes<HTMLElement> {}

export const PanelTabs: React.SFC<PanelTabsProps> = ({
  children,
  className,
  ...props
}) => {
  const classes: string = classNames('panel-tabs', className)
  return (
    <p {...props} className={classes}>
      {children}
    </p>
  )
}
