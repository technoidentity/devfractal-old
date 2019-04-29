import {
  RoutedTabs,
  RoutedTabsItem,
  RoutedTabsProps,
  Tabs,
  TabsItem,
  TabsProps,
} from 'dynamic'
import React from 'react'
import { camelCaseToPhrase, Omit, State } from 'utils'

export interface SimpleTabsProps extends Omit<TabsProps, 'selectedTab'> {
  readonly name?: string
  readonly values?: ReadonlyArray<string>
}

export const SimpleTabs: React.FC<SimpleTabsProps> = ({
  name,
  values = [],
  ...props
}) => (
  <State
    initial={values[0]}
    render={({ value, set }) => (
      <Tabs
        {...props}
        value={value}
        onChange={evt => {
          if (evt.value) {
            set(evt.value)
          }
          if (props.onChange) {
            props.onChange(evt)
          }
        }}
        name={name}
      >
        {values.map(value => (
          <TabsItem key={value} value={value}>
            {camelCaseToPhrase(value)}
          </TabsItem>
        ))}
      </Tabs>
    )}
  />
)

export interface SimpleRoutedTabsProps
  extends Omit<RoutedTabsProps, 'selectedTab'> {
  readonly name?: string
  readonly values?: ReadonlyArray<string>
}

export const SimpleRoutedTabs: React.FC<SimpleRoutedTabsProps> = ({
  values = [],
  ...props
}) => (
  <RoutedTabs {...props}>
    {values.map(value => (
      <RoutedTabsItem key={value} value={value}>
        {camelCaseToPhrase(value)}
      </RoutedTabsItem>
    ))}
  </RoutedTabs>
)
