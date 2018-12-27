import React from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface TabsContext {
  readonly url?: string
  readonly separator?: string
  readonly currentLocation?: string
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
}) => (
  <TabsContext.Consumer>
    {({ url, separator, currentLocation }) => {
      const tabItemUrl: string =
        url === undefined ? '' : `${url}${separator}${name}`
      return (
        <Div
          as="li"
          {...props}
          className={classNamesHelper(props, {
            [`is-active`]: tabItemUrl === currentLocation,
          })}
        >
          <NavLink to={tabItemUrl}>{children}</NavLink>
        </Div>
      )
    }}
  </TabsContext.Consumer>
)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly to?: string
  readonly urlSeparator?: string
}

// tslint:disable-next-line: typedef
export const TabsWithRouter = withRouter<TabsProps & RouteComponentProps>(
  ({
    location,
    staticContext,
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
      <TabsContext.Provider
        value={{
          url: to,
          separator: urlSeparator,
          currentLocation: location.pathname,
        }}
      >
        <Div {...props} className={classes}>
          <ul>{children}</ul>
        </Div>
      </TabsContext.Provider>
    )
  },
)

export const Tabs: React.SFC<TabsProps> = props => <TabsWithRouter {...props} />
