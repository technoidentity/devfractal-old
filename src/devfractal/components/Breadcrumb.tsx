import React from 'react'
import { State } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

type BreadcrumbSize = 'small' | 'medium' | 'large'

type BreadcrumbAlignment = 'centered' | 'right'

type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly href?: string
  readonly active?: boolean
}

interface BreadcrumbContext {
  readonly selectedBreadcrumb?: string
  setSelectedBreadcrumb?(event: BreadcrumbChangeEvent): void
}

const BreadcrumbContext: React.Context<BreadcrumbContext> = React.createContext<
  BreadcrumbContext
>({})

export const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = ({
  active,
  href,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, {
    [`is-active`]: active,
  })
  return (
    <BreadcrumbContext.Consumer>
      {() => (
        <Div as="li" {...props} className={classes}>
          <a href={href}>{children}</a>
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
      <ul>{children}</ul>
    </Div>
  )
}

export const Breadcrumb: React.SFC<BreadcrumbProps> = ({
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
          <BreadcrumbView {...props}>{children}</BreadcrumbView>
        </BreadcrumbContext.Provider>
      )}
    />
  ) : (
    <BreadcrumbContext.Provider value={{}}>
      <BreadcrumbView {...props}>{children}</BreadcrumbView>
    </BreadcrumbContext.Provider>
  )
}
