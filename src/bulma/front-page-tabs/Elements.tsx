import * as React from 'react'
import { Tabs } from '../components'
import { TabsItem } from '../components/Tabs'

export const Elements: React.SFC = () => (
  <>
    <Tabs size="medium">
      <TabsItem active>Box</TabsItem>
      <TabsItem>Button</TabsItem>
      <TabsItem>Content</TabsItem>
      <TabsItem>Delete</TabsItem>
      <TabsItem>Icon</TabsItem>
      <TabsItem>Image</TabsItem>
      <TabsItem>Notification</TabsItem>
      <TabsItem>Progress bars</TabsItem>
      <TabsItem>Table</TabsItem>
      <TabsItem>Tag</TabsItem>
      <TabsItem>Title</TabsItem>
    </Tabs>
  </>
)
