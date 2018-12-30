import React from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { WithRouter } from '../../utils/WithRouter'
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
  readonly tabsStyle?: RoutedTabsStyle
  readonly to?: string
  readonly urlSeparator?: string
}

// tslint:disable-next-line: typedef
const RoutedTabsWithRouter: React.SFC<
  RoutedTabsProps & RouteComponentProps
> = ({
  match,
  history,
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
}

export const RoutedTabs: React.SFC<RoutedTabsProps> = props => (
  <WithRouter<RoutedTabsProps> {...props} component={RoutedTabsWithRouter} />
)
