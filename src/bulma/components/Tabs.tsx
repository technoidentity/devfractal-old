import * as React from 'react'
import classNames from 'classnames'

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'
interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  readonly active?: boolean
}

export const TabsItem: React.SFC<TabsItemProps> = ({
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
    <li {...props} className={classes}>
      <a>{children}</a>
    </li>
  )
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullwidth?: boolean
  readonly tabsStyle?: TabsStyle
}

export const Tabs: React.SFC<TabsProps> = ({
  size,
  alignment,
  fullwidth,
  tabsStyle,
  children,
  className,
  ...props
}) => {
  const classes: string = classNames(
    'tabs',
    {
      [`is-${size}`]: size,
      [`is-${alignment}`]: alignment,
      [`is-${tabsStyle}`]: tabsStyle,
      [`is-fullwidth`]: fullwidth,
    },
    className,
  )
  return (
    <div {...props} className={classes}>
      <ul>{children}</ul>
    </div>
  )
}
