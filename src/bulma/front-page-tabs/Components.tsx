import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Components: React.SFC = () => (
  <>
    <Tabs size="medium">
      <TabsItem active>Breadcrumb</TabsItem>
      <TabsItem>Card</TabsItem>
      <TabsItem>Dropdown</TabsItem>
      <TabsItem>Menu</TabsItem>
      <TabsItem>Message</TabsItem>
      <TabsItem>Modal</TabsItem>
      <TabsItem>Navbar</TabsItem>
      <TabsItem>Pagination</TabsItem>
      <TabsItem>Panel</TabsItem>
      <TabsItem>Tabs</TabsItem>
    </Tabs>
  </>
)
