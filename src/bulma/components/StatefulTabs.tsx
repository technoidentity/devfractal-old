import React from 'react'
import { Value } from 'react-powerplug'
import { classNamesHelper, Div, Helpers } from '../modifiers'

interface TabsChangeEvent {
  readonly name?: string
  readonly value?: string
}

interface TabsContext {
  readonly name?: string
  setValue?(newValue: string): void
}

const TabsContext: React.Context<TabsContext> = React.createContext<
  TabsContext
>({})

type TabsSize = 'small' | 'medium' | 'large'

type TabsAlignment = 'centered' | 'right'

type TabsStyle = 'boxed' | 'toggle' | 'toggle-rounded'
interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement>, Helpers {
  readonly active?: boolean
  readonly value: string
}

export const TabsItem: React.SFC<TabsItemProps> = ({
  value,
  children,
  ...props
}) => (
  <TabsContext.Consumer>
    {({ name, setValue }) => (
      <Div
        as="li"
        {...props}
        className={classNamesHelper(props, {
          [`is-active`]: name === value,
        })}
      >
        <a
          onClick={() => {
            if (setValue) {
              setValue(value)
            }
          }}
        >
          {children}
        </a>
      </Div>
    )}
  </TabsContext.Consumer>
)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, Helpers {
  readonly size?: TabsSize
  readonly alignment?: TabsAlignment
  readonly fullWidth?: boolean
  readonly tabsStyle?: TabsStyle
  readonly name?: string
  readonly value?: string
  readonly defaultValue?: string
  readonly readOnly?: boolean
  onTabChange?(evt: TabsChangeEvent): void
}

export const TabsView: React.SFC<TabsProps> = ({
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
  value,
  ...props
}: TabsProps) => {
  const isUncontrolled: boolean = props.onTabChange === undefined

  if (isUncontrolled && value && !props.readOnly) {
    // tslint:disable-next-line: no-console
    console.warn(
      'onTabChange not provided but value provided, make this component readOnly.',
    )
  }

  if (props.readOnly && props.onTabChange) {
    // tslint:disable-next-line: no-console
    console.warn(
      'onTabChange provided, but the component is readOnly, readOnly will be ignored.',
    )
  }

  return isUncontrolled ? (
    <Value
      initial={{ value: defaultValue }}
      render={({ value: { value }, set }) => (
        <TabsContext.Provider
          value={{
            name: value,
            setValue: value => {
              set({ value })
            },
          }}
        >
          <TabsView {...props}>{children}</TabsView>
        </TabsContext.Provider>
      )}
    />
  ) : (
    <TabsView {...props} />
  )
}
