import React from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface RoutedTabsContext {
  readonly url?: string
  readonly separator?: string
  readonly currentLocation?: string
}

const RoutedTabsContext: React.Context<RoutedTabsContext> = React.createContext<
  RoutedTabsContext
>({})

type RoutedTabsSize = 'small' | 'medium' | 'large'

type RoutedTabsAlignment = 'centered' | 'right'

type RoutedTabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'

interface RoutedTabsItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly active?: boolean
  readonly value: string
}

export const RoutedTabsItem: React.SFC<RoutedTabsItemProps> = ({
  value,
  active,
  children,
  ...props
}) => (
  <RoutedTabsContext.Consumer>
    {({ url, separator, currentLocation }) => {
      const tabItemUrl: string =
        url === undefined ? '' : `${url}${separator}${value}`
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
  </RoutedTabsContext.Consumer>
)

interface RoutedTabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly size?: RoutedTabsSize
  readonly alignment?: RoutedTabsAlignment
  readonly fullWidth?: boolean
  readonly RoutedTabsStyle?: RoutedTabsStyle
  readonly to?: string
  readonly urlSeparator?: string
}

// tslint:disable-next-line: typedef
export const RoutedTabsWithRouter = withRouter<
  RoutedTabsProps & RouteComponentProps
>(
  ({
    location,
    staticContext,
    to,
    urlSeparator = '/',
    size,
    alignment,
    fullWidth,
    RoutedTabsStyle,
    children,
    ...props
  }) => {
    const classes: string = classNamesHelper(props, 'RoutedTabs', {
      [`is-${size}`]: size,
      [`is-${alignment}`]: alignment,
      [`is-${RoutedTabsStyle}`]: RoutedTabsStyle,
      [`is-fullwidth`]: fullWidth,
    })

    return (
      <RoutedTabsContext.Provider
        value={{
          url: to,
          separator: urlSeparator,
          currentLocation: location.pathname,
        }}
      >
        <Div {...props} className={classes}>
          <ul>{children}</ul>
        </Div>
      </RoutedTabsContext.Provider>
    )
  },
)

export const RoutedTabs: React.SFC<RoutedTabsProps> = props => (
  <RoutedTabsWithRouter {...props} />
)
