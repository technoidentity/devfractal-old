import React from 'react'
import { RouteComponentProps } from 'react-router'
import { NavLink } from 'react-router-dom'
import { chop, State, WithRouter } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'

interface BreadcrumbContext {
  readonly selectedBreadcrumb?: string
  setSelectedBreadcrumb?(event: BreadcrumbChangeEvent): void
}

const BreadcrumbContext: React.Context<BreadcrumbContext> = React.createContext<
  BreadcrumbContext
>({})

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly value?: string
  readonly href?: string
  readonly currentLocation?: string
  readonly active?: boolean
}

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
  active,
  href,
  currentLocation,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    'is-active': href && currentLocation && href === currentLocation,
  })

  return (
    <BreadcrumbContext.Consumer>
      {() => (
        <Div as="li" {...props} className={classes}>
          <NavLink to={href ? href : ''}>{children}</NavLink>
        </Div>
      )}
    </BreadcrumbContext.Consumer>
  )
}

export interface BreadcrumbChangeEvent {
  readonly name?: string
  readonly value?: string
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    Helpers {
  readonly baseURL?: string
  readonly currentLocation?: string
  readonly size?: BreadcrumbSize
  readonly alignment?: BreadcrumbAlignment
  readonly separator?: BreadcrumbSeparator
  readonly name?: string
  readonly selectedBreadcrumb?: string
  readonly defaultValue?: string
  readonly readOnly?: boolean
  onSelectedBreadcrumbChange?(evt: BreadcrumbChangeEvent): void
}

export const BreadcrumbView: React.SFC<BreadcrumbProps> = ({
  baseURL,
  currentLocation,
  children,
  alignment,
  size,
  separator,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'breadcrumb', {
    [`is-${alignment}`]: alignment,
    [`is-${size}`]: size,
    [`has-${separator}-separator`]: separator,
  })

  return (
    <Div as="nav" {...props} className={classes}>
      <ul>
        {React.Children.map(children, (child: any) => {
          const href: string | undefined =
            baseURL && `${baseURL && chop(baseURL)}/${child.props.value}`
          return React.cloneElement(
            child,
            href ? { href, currentLocation } : { currentLocation },
          )
        })}
      </ul>
    </Div>
  )
}

export const BreadcrumbWithRouter: React.SFC<
  BreadcrumbProps & RouteComponentProps
> = ({
  match,
  history,
  location,
  staticContext,
  selectedBreadcrumb,
  onSelectedBreadcrumbChange,
  defaultValue,
  children,
  ...props
}) => {
  if (selectedBreadcrumb && !onSelectedBreadcrumbChange && !props.readOnly) {
    // tslint:disable-next-line: no-console
    console.warn(
      'onTabChange not provided but selectedBreadcrumb provided, make this component readOnly.',
    )
  }

  const isUncontrolled: boolean =
    selectedBreadcrumb === undefined && onSelectedBreadcrumbChange === undefined

  return isUncontrolled ? (
    <State
      initial={selectedBreadcrumb || defaultValue}
      render={({ value, set }) => (
        <BreadcrumbContext.Provider
          value={{
            selectedBreadcrumb: value,
            setSelectedBreadcrumb: ({ value }) => set(value),
          }}
        >
          <BreadcrumbView currentLocation={location.pathname} {...props}>
            {children}
          </BreadcrumbView>
        </BreadcrumbContext.Provider>
      )}
    />
  ) : (
    <BreadcrumbContext.Provider value={{}}>
      <BreadcrumbView {...props}>{children}</BreadcrumbView>
    </BreadcrumbContext.Provider>
  )
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = props => (
  <WithRouter<BreadcrumbProps> {...props} component={BreadcrumbWithRouter} />
)
