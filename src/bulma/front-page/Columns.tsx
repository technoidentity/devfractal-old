import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Columns: React.SFC = () => (
  <>
    <Tabs size="medium">
      <TabsItem active>Basics</TabsItem>
      <TabsItem>Size</TabsItem>
      <TabsItem>Responsiveness</TabsItem>
      <TabsItem>Nesting</TabsItem>
      <TabsItem>Message</TabsItem>
      <TabsItem>Gap</TabsItem>
      <TabsItem>Options</TabsItem>
    </Tabs>
  </>
)
