import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CommonHelpers,
  commonHelpersClasses,
  CommonHelpersRemoved,
  removeCommonHelpers,
} from '../modifiers/commonHelpers'

interface TabsContext {
  readonly url: string | undefined
}

const TabsContext: React.Context<TabsContext> = React.createContext<
  TabsContext
>({ url: undefined })

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'
interface TabsItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    CommonHelpers {
  readonly active?: boolean
  readonly name: string
}

export const TabsItem: React.SFC<TabsItemProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    {
      [`is-active`]: active,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <TabsContext.Consumer>
      {({ url }) => (
        <li {...propsCommonHelpersRemoved} className={classes}>
          <NavLink to={url === undefined ? '' : `${url}/${name}`}>
            {children}
          </NavLink>
        </li>
      )}
    </TabsContext.Consumer>
  )
}

interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonHelpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullwidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly to?: string
}

export const Tabs: React.SFC<TabsProps> = ({
  to,
  size,
  alignment,
  fullwidth,
  tabsStyle,
  children,
  className,
  ...props
}) => {
  const propsCommonHelpersRemoved: CommonHelpersRemoved<
    typeof props
  > = removeCommonHelpers(props)
  const classes: string = classNames(
    'tabs',
    {
      [`is-${size}`]: size,
      [`is-${alignment}`]: alignment,
      [`is-${tabsStyle}`]: tabsStyle,
      [`is-fullwidth`]: fullwidth,
    },
    className,
    commonHelpersClasses(props),
  )
  return (
    <TabsContext.Provider value={{ url: to }}>
      <div {...propsCommonHelpersRemoved} className={classes}>
        <ul>{children}</ul>
      </div>
    </TabsContext.Provider>
  )
}
