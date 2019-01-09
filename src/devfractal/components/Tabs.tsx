import React from 'react'
import warning from 'tiny-warning'
import { State } from '../../utils'
import { classNamesHelper, Div, Helpers } from '../modifiers'

export interface TabsChangeEvent {
  readonly name?: string
  readonly value?: string
}

interface TabsContext {
  readonly name?: string
  readonly selected?: string
  setSelected?(event: TabsChangeEvent): void
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
  readonly value?: string
}

export const TabsItem: React.SFC<TabsItemProps> = ({
  value,
  children,
  ...props
}) => (
  <TabsContext.Consumer>
    {({ name, selected, setSelected }) => (
      <Div
        as="li"
        {...props}
        className={classNamesHelper(props, {
          'is-active': !!value && selected === value,
        })}
      >
        <a
          onClick={() => {
            if (setSelected) {
              setSelected({ name, value })
            }
          }}
        >
          {children}
        </a>
      </Div>
    )}
  </TabsContext.Consumer>
)

interface TabsViewProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
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

export type TabsProps = TabsViewProps

const TabsView: React.SFC<TabsProps> = ({
  size,
  alignment,
  fullWidth,
  tabsStyle,
  name,
  selectedTab,
  onTabChange,
  defaultValue,
  children,
  ...props
}) => {
  const classes: string = classNamesHelper(props, 'tabs', {
    [`is-${size}`]: size,
    [`is-${alignment}`]: alignment,
    [`is-${tabsStyle}`]: tabsStyle,
    'is-fullwidth': fullWidth,
  })

  return (
    <TabsContext.Provider
      value={{
        selected: selectedTab,
        setSelected: ({ value }) => onTabChange && onTabChange({ name, value }),
      }}
    >
      <Div {...props} className={classes}>
        <ul>{children}</ul>
      </Div>
    </TabsContext.Provider>
  )
}

export const Tabs: React.SFC<TabsProps> = ({
  defaultValue,
  children,
  ...props
}) => {
  warning(
    !(props.selectedTab && !props.onTabChange && !props.readOnly),
    "'selectedTab' provided, but not 'onTabChange', make this component readOnly.",
  )

  return props.selectedTab !== undefined ? (
    <TabsView {...props}>{children}</TabsView>
  ) : (
    <State
      initial={props.selectedTab || defaultValue}
      render={({ value, set }) => (
        <TabsView
          {...props}
          selectedTab={value}
          onTabChange={({ value }) => set(value)}
        >
          {children}
        </TabsView>
      )}
    />
  )
}
