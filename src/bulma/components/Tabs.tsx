import React from 'react'
import { NavLink } from 'react-router-dom'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface TabsContext {
  readonly url?: string
  readonly separator?: string
}

const TabsContext: React.Context<TabsContext> = React.createContext<
  TabsContext
>({})

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'
interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
  readonly active?: boolean
  readonly name: string
}

export const TabsItem: React.SFC<TabsItemProps> = ({
  name,
  active,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-active`]: active,
  })
  return (
    <TabsContext.Consumer>
      {({ url, separator }) => (
        <Div as="li" {...props} className={classes}>
          <NavLink to={url === undefined ? '' : `${url}${separator}${name}`}>
            {children}
          </NavLink>
        </Div>
      )}
    </TabsContext.Consumer>
  )
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly to?: string
  readonly urlSeparator?: string
}

export const Tabs: React.SFC<TabsProps> = ({
  to,
  urlSeparator = '/',
  size,
  alignment,
  fullWidth,
  tabsStyle,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    [`is-${tabsStyle}`]: tabsStyle,
    [`is-fullwidth`]: fullWidth,
  })
  return (
    <TabsContext.Provider value={{ url: to, separator: urlSeparator }}>
      <Div {...props} className={classes}>
        <ul>{children}</ul>
      </Div>
    </TabsContext.Provider>
  )
}
