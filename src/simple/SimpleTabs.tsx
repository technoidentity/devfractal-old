import React from 'react'
import {
  camelCaseToPhrase,
  RoutedTabs,
  RoutedTabsItem,
  RoutedTabsProps,
  State,
  Tabs,
  TabsItem,
  TabsProps,
} from '../devfractal'
import { Omit } from '../types'

export interface SimpleTabsProps extends Omit<TabsProps, 'selectedTab'> {
  readonly name?: string
  readonly values?: ReadonlyArray<string>
}

export const SimpleTabs: React.SFC<SimpleTabsProps> = ({
  name,
  values = [],
  ...props
}) => (
  <State
    initial={values[0]}
    render={({ value, set }) => (
      <Tabs
        {...props}
        selectedTab={value}
        onTabChange={evt => {
          if (evt.value) {
            set(evt.value)
          }
          if (props.onTabChange) {
            props.onTabChange(evt)
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

export const SimpleRoutedTabs: React.SFC<SimpleRoutedTabsProps> = ({
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
