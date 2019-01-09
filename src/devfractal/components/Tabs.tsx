import React from 'react'
import { State } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface TabsChangeEvent {
  readonly name?: string
  readonly value?: string
}

interface TabsContext {
  readonly name?: string
  readonly selectedTab?: string
  setSelectedTab?(event: TabsChangeEvent): void
}

const TabsContext: React.Context<TabsContext> = React.createContext<
  TabsContext
>({})

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'
export interface TabsItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    Helpers {
  readonly value: string
}

export const TabsItem: React.SFC<TabsItemProps> = ({
  value,
  children,
  ...props
}) => (
  <TabsContext.Consumer>
    {({ name, selectedTab, setSelectedTab }) => (
      <Div
        as="li"
        {...props}
        className={classNamesHelper(props, {
          [`is-active`]: !!value && selectedTab === value,
        })}
      >
        <a
          onClick={() => {
            if (setSelectedTab) {
              setSelectedTab({ name, value })
            }
          }}
        >
          {children}
        </a>
      </Div>
    )}
  </TabsContext.Consumer>
)

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly name?: string
  readonly selectedTab?: string
  readonly defaultValue?: string
  readonly readOnly?: boolean
  onTabChange?(evt: TabsChangeEvent): void
}

const TabsView: React.SFC<TabsProps> = ({
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
    <Div {...props} className={classes}>
      <ul>{children}</ul>
    </Div>
  )
}

export const Tabs: React.SFC<TabsProps> = ({
  defaultValue,
  children,
  onTabChange,
  selectedTab,
  ...props
}: TabsProps) => {
  if (selectedTab && !onTabChange && !props.readOnly) {
    // tslint:disable-next-line: no-console
    console.warn(
      'onTabChange not provided but selectedTab provided, make this component readOnly.',
    )
  }

  const isUncontrolled: boolean =
    selectedTab === undefined && onTabChange === undefined

  return isUncontrolled ? (
    <State
      initial={selectedTab || defaultValue}
      render={({ value, set }) => (
        <TabsContext.Provider
          value={{
            selectedTab: value,
            setSelectedTab: ({ value }) => {
              set(value)
            },
          }}
        >
          <TabsView {...props}>{children}</TabsView>
        </TabsContext.Provider>
      )}
    />
  ) : (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab: onTabChange }}>
      <TabsView {...props}>{children}</TabsView>
    </TabsContext.Provider>
  )
}
